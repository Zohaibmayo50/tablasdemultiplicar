'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Print function
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${number} Çarpım Tablosu</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>${number} Çarpım Tablosu</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        // Create a canvas to draw the table
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        canvas.width = 600
        canvas.height = 700
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const gradients: { [key: number]: [string, string] } = {
          0: ['#3b82f6', '#4f46e5'],
          1: ['#a855f7', '#ec4899'],
          2: ['#10b981', '#14b8a6'],
          3: ['#f97316', '#ef4444'],
          4: ['#06b6d4', '#3b82f6']
        }
        const [color1, color2] = gradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        // Title
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(number + ' Çarpım Tablosu', 300, 60)

        // Table items
        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          // Background for each row
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          // Text
          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)
          
          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + (number * i), 550, y)
          
          y += 60
        }

        // Convert to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = number + '-carpim-tablosu.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Download failed:', error)
      }
    }
  }

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string} = {
      1: "1 ile çarpmak, matematikte özel bir durumdur. Herhangi bir sayıyı 1 ile çarptığınızda, sonuç her zaman aynı sayıdır. Buna çarpmanın özdeşlik özelliği denir. Bunu 'bir şeyden kaç grubum var?' diye sormak gibi düşünün. Sadece 1 grubunuz olduğunda, tam olarak başladığınız şeye sahipsiniz.",
      2: "2 ile çarpmak, bir sayıyı ikiye katlamak demektir. Bir şeyi 2 ile çarptığınızda, onu kendi üzerine ekliyorsunuz. Bu, en pratik çarpma işlemlerinden biridir çünkü gerçek hayatta sıklıkla şeyleri ikiye katlamaya ihtiyaç duyarız—ayakkabı çiftlerini saymak, bisiklet tekerlekleri ya da bir şeyi iki kişi arasında eşit olarak bölmek gibi.",
      3: "3 ile çarpmak, bir sayıyı üç kez almak demektir. Bunu aynı sayıyı kendine üç kez eklemek olarak düşünebilirsiniz. Bu tablo, üçgenler, üçlüler ve üçerli gelen her şeyi anlamak için gereklidir.",
      4: "4 ile çarpmak, iki kez ikiye katlamak gibidir. 4 = 2 × 2 olduğundan, bir sayıyı ikiye katlayabilir ve sonra sonucu tekrar ikiye katlayabilirsiniz. Bu, 2'leri zaten biliyorsanız 4 çarpım tablosunu öğrenmeyi kolaylaştırır. 4 sayısı geometride (karelerin 4 kenarı vardır) ve zamanı ölçmede (bir saatte 4 çeyrek) sıklıkla görülür.",
      5: "5 ile çarpmak, matematikteki en güzel desenlerden birini oluşturur. 5'in tüm katları 0 veya 5 ile biter, bu da bu tabloyu çok öngörülebilir yapar. Bu, para saymak (5 kuruş, 5 lira) ve saati söylemek (5 dakikalık aralıklar) için son derece kullanışlıdır.",
      6: "6 ile çarpmak, bir sayının altı grubunu almak demektir. 6, ilk 'gerçek' çarpım tablosudur çünkü 2 veya 3'ün basit katları değildir. Ancak, 6 = 2 × 3 olduğundan, bir sayıyı 2 ile çarpıp sonra 3 ile çarparak (veya tersi) 6 ile çarpma yapabilirsiniz. 6 sayısı doğada (arı peteği hücreleri) ve günlük hayatta (yumurta paketleri, zar yüzleri) sıkça görülür.",
      7: "7 ile çarpmak, genellikle öğrencilerin en zorlandığı tablolardan biridir çünkü 7 asal sayıdır ve diğer basit çarpım tablolarından türetilemiyor. Ancak, 7'nin tüm katlarında güzel desenler vardır ve pratikle öğrenilebilir. 7, haftanın günleri, dünya kıtaları ve birçok kültürel referansta önemli bir sayıdır.",
      8: "8 ile çarpmak, üç kez ikiye katlamak gibidir (8 = 2 × 2 × 2). Bir sayıyı ikiye katlayın, sonucu tekrar ikiye katlayın, ve bir kez daha ikiye katlayın—8 ile çarpmış olursunuz. Bu tablo, 2 ve 4 tablolarını iyi biliyorsanız daha kolay öğrenilir. 8, geometride (sekizgen) ve müzikte (oktav) önemli bir sayıdır.",
      9: "9 ile çarpmak, matematikteki en büyüleyici desenlerden birine sahiptir. 9'un tüm katlarının basamakları toplandığında sonuç her zaman 9'a bölünebilir. Ayrıca, 9 × n'in onlar basamağı her zaman n-1'dir. Bu tablo, parmak hilesi ile de öğrenilebilir. 9, 10'dan sadece 1 eksik olduğu için, 10 tablosunu kullanarak da hesaplanabilir.",
      10: "10 ile çarpmak, en kolay çarpım tablolarından biridir. Herhangi bir sayıyı 10 ile çarptığınızda, sadece sonuna bir sıfır eklersiniz. Bu, ondalık sistemimizin temelini oluşturur. 10 ile çarpmayı öğrenmek, öğrencilere yer değeri kavramını ve büyük sayılarla çalışmayı öğretir. 10 tablosu, tüm diğer çarpım tablolarını anlamak için bir referans noktasıdır.",
      11: "11 ile çarpmak, matematikte en ilginç desenlerden birine sahiptir. 11 ile tek basamaklı sayıları çarptığınızda, sonuç o sayının iki kez tekrarıdır (11×3=33, 11×7=77). İki basamaklı sayıları 11 ile çarparken de güzel bir desen vardır: basamakları toplayıp ortaya yerleştirirsiniz. 11, bir asal sayıdır ve özel matematiksel özelliklere sahiptir.",
      12: "12 ile çarpmak, en pratik çarpım tablolarından biridir çünkü 12, birçok sayıya bölünebilir (1, 2, 3, 4, 6, 12). Bu özellik 12'yi günlük hayatta çok kullanışlı yapar—bir düzinede 12 nesne, saatte 12 saat, yılda 12 ay vardır. 12 = 3 × 4 = 2 × 6 olduğundan, bu tabloyu birden fazla yoldan öğrenebilirsiniz.",
      13: "13 ile çarpmak, öğrencilerin desen tanıma becerilerini geliştirir. 13 bir asal sayıdır, bu yüzden diğer tablolardan basitçe türetilemiyor. Ancak 13'ü 10+3 olarak düşünmek çok yardımcı olur: bir sayıyı 13 ile çarpmak, onu 10 ile çarpıp 3 ile çarparak toplamaktır. 13, birçok kültürde özel öneme sahip bir sayıdır.",
      14: "14 ile çarpmak, 7 çarpım tablosunun iki katıdır. 14 = 2 × 7 olduğundan, 7 tablosunu biliyorsanız her sonucu ikiye katlayarak 14 tablosunu bulabilirsiniz. 14, haftalık planlamada önemlidir (2 hafta = 14 gün) ve çift sayı özelliklerini gösterir.",
      15: "15 ile çarpmak, hem 3'ün hem de 5'in katlarını birleştirir. 15 = 3 × 5 olduğundan, bu tablo her iki sayının özelliklerini taşır. 15'in tüm katları hem 3'e hem de 5'e bölünebilir. 15 dakika çeyrek saat olduğu için, zaman hesaplamalarında çok kullanılır.",
      16: "16 ile çarpmak, 2'nin 4. kuvvetidir (2×2×2×2=16). Bu, 16 tablosunu ikiye katlama zincirleriyle öğrenmeyi mümkün kılar. 8'i ikiye katlayarak 16'yı bulabilirsiniz. Bilgisayar biliminde 16 önemli bir sayıdır (onaltılık sistem) ve günlük hayatta da sıkça görülür.",
      17: "17 ile çarpmak, asal sayı özellikleri nedeniyle zor olabilir. 17, diğer tablolardan basitçe türetilemiyor. Ancak 17'yi 20-3 veya 10+7 olarak düşünmek hesaplamaları kolaylaştırır. 17 tablosunu öğrenmek, zihinsel matematik becerilerini ve problem çözme stratejilerini geliştirir.",
      18: "18 ile çarpmak, birçok ilişki içerir. 18 = 2 × 9 = 3 × 6 olduğundan, bu tabloyu birden fazla yoldan öğrenebilirsiniz. 9 tablosunu ikiye katlamak veya 6 tablosunu üçe katlamak 18 tablosunu verir. 18, reşit olma yaşı olarak birçok ülkede önemlidir.",
      19: "19 ile çarpmak, 19'un asal sayı olması nedeniyle diğer tablolardan türetilemez. Ancak 19'u 20-1 olarak düşünmek çok pratiktir: bir sayıyı 20 ile çarpıp kendisini çıkarın. Bu strateji, 19 tablosunu zihinsel olarak hesaplamayı çok kolaylaştırır.",
      20: "20 ile çarpmak, 10 tablosunun doğal uzantısıdır. Herhangi bir sayıyı 20 ile çarptığınızda, onu 10 ile çarpıp sonucu ikiye katlayabilirsiniz. Veya basitçe sonuna bir sıfır ekleyip ikiye katlayın. 20 tablosu, para hesaplamalarında (20 lira) ve ölçümlerde (20 metre, 20 kilogram) sürekli kullanılır.",
      21: "21 ile çarpmak, 3×7 ilişkisini anlamayı gerektirir. 21=3×7 olduğundan, bu tablo hem 3 hem de 7 tablolarının özelliklerini taşır. 21, yasal reşit olma yaşı olarak birçok ülkede önemlidir. 21'i 20+1 olarak düşünmek hesaplamaları kolaylaştırır: bir sayıyı 20 ile çarpıp kendisini ekleyin.",
      22: "22 ile çarpmak, 11'in iki katıdır (22=2×11). 11 tablosunu biliyorsanız, her sonucu ikiye katlayarak 22 tablosunu bulabilirsiniz. 22 aynı zamanda 2×11 olduğundan çift sayı özelliklerini gösterir. 22, futbol takımındaki oyuncu sayısı (2×11) olarak sporda sıkça görülür.",
      23: "23 ile çarpmak, asal sayı özellikleri nedeniyle diğer tablolardan türetilemez. Ancak 23'ü 20+3 veya 25-2 olarak düşünmek hesaplamaları kolaylaştırır. 23, insan kromozom çiftlerinin sayısıdır, bu da biyolojide önemli bir sayıdır. 23 tablosunu öğrenmek, zihinsel aritmetik becerilerini güçlendirir.",
      24: "24 ile çarpmak, en çok yönlü çarpım tablolarından biridir. 24=2×12=3×8=4×6 olduğundan, birçok farklı yoldan hesaplanabilir. 24 saat bir gün olduğu için, zaman hesaplamalarında temel bir sayıdır. 24 aynı zamanda 2 düzine olup, paketleme ve gruplama işlemlerinde sıkça kullanılır.",
      25: "25 ile çarpmak, 5×5 (5²) ilişkisini kullanır. 25, 5'in karesi olduğundan çok özel matematiksel özelliklere sahiptir. 25 kuruş çeyrek lira, 25 sent ABD'de çeyrek dolar olduğu için para hesaplamalarında önemlidir. 25'in tüm katları 25, 50, 75, 00 ile biter - çok düzenli bir desen.",
      26: "26 ile çarpmak, 13'ün iki katıdır (26=2×13). 13 tablosunu biliyorsanız, her sonucu ikiye katlayarak 26 tablosunu bulabilirsiniz. 26 harf İngiliz alfabesindeki harf sayısıdır. 26'yı 25+1 veya 30-4 olarak düşünmek hesaplamaları kolaylaştırır.",
      27: "27 ile çarpmak, 3'ün 3. kuvvetidir (27=3³=3×3×3). Bu özel ilişki, 27'yi matematik ve geometride önemli yapar. 27=3×9 olduğundan, 3 veya 9 tablolarını kullanarak hesaplanabilir. 27'yi 30-3 olarak düşünmek zihinsel hesaplamayı kolaylaştırır.",
      28: "28 ile çarpmak, 4×7 ilişkisini kullanır. 28=4×7=2×14 olduğundan, birden fazla yoldan öğrenilebilir. 28 gün Şubat ayının gün sayısıdır (artık yıl değilse). 28 aynı zamanda mükemmel sayıdır (bölenlerinin toplamı kendisine eşittir: 1+2+4+7+14=28).",
      29: "29 ile çarpmak, asal sayı olması nedeniyle özel stratejiler gerektirir. 29'u 30-1 olarak düşünmek en pratik yöntemdir: bir sayıyı 30 ile çarpıp kendisini çıkarın. 29 gün Şubat ayının artık yıllardaki gün sayısıdır. 29 tablosunu öğrenmek, problem çözme becerilerini geliştirir.",
      30: "30 ile çarpmak, 10×3 ilişkisini kullanır. Bir sayıyı 30 ile çarpmak için, onu 10 ile çarpıp sonucu 3 ile çarpabilirsiniz. 30 gün birçok ayın gün sayısıdır (Nisan, Haziran, Eylül, Kasım). 30 aynı zamanda yarım saattir (30 dakika). 30 tablosu, yüzde hesaplamalarında (30% indirim) sıkça kullanılır.",
    }
    return meanings[number] || `${number} ile çarpmak, ${number} sayısını tekrar tekrar ekleme demektir. Her çarptığınızda, ${number}'lik grupları sayıyorsunuz.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "1'in çarpım tablosu, tüm çarpma işlemlerinin temelidir. Öğrencilere sayıların bir kimliği olduğunu öğretir—1 ile çarpıldıklarında kendileri olarak kalırlar. Bu kavram, daha sonra cebirsel özellikleri anlamak için çok önemlidir. Basit görünse de, bu tabloyu öğrenmek güven oluşturur ve çarpmanın düzenli ve öngörülebilir olduğu kalıbını kurar.",
      2: "2 çarpım tablosu, genellikle öğrencilerin öğrendiği ilk gerçek çarpım tablosudur ve bunun iyi bir nedeni vardır. İkiye katlama, çocukların günlük olarak karşılaştığı doğal bir kavramdır. Bu tabloyu öğrenmek, zihinsel hesaplamayı çok daha hızlı hale getirir ve öğrencileri çift sayılara, kesirlere (yarılar) ve temel bölmeye hazırlar. Birçok öğrenci bunu en kolay tablo olarak bulur, bu da daha zor tablolar için güven oluşturur.",
      3: "3'ün çarpım tablosu, kolay ve zorlu tablolar arasındaki boşluğu kapatır. Öğrencilerin basit ikiye katlamanın ötesine geçmesini ve yeni örüntüleri tanımaya başlamasını gerektirir. Bu tablo, üçerli sayma, üçgen şekilleri anlama ve zamanla çalışma (günde üç dönem) gibi gerçek dünya bağlamlarında sürekli görülür. 3 çarpım tablosunu öğrenen öğrenciler, soyut saymayı yapabileceklerini gösterirler.",
      4: "4 çarpım tablosunu öğrenmek, öğrencilerin çift sayıları ve geometrik düşünmeyi anlamalarını güçlendirir. 4, 2'nin iki katı olduğundan, öğrenciler 2 çarpım tablosunu bir basamak taşı olarak kullanabilirler, bu da matematiksel verimliliği öğretir. Bu tablo, kareleri, alan hesaplamalarını ve çeyrek bölmeleri anlamak için gereklidir. Ayrıca sandalye ayaklarını veya araba tekerleklerini saymak gibi günlük durumlarda sıkça kullanılır.",
      5: "5'in çarpım tablosu, en pratik ve örüntü açısından zengin tablolardan biridir. Öğrenciler bunu severler çünkü her cevap 0 veya 5 ile biter, bu da onu son derece öngörülebilir yapar. Bu tablo doğrudan parayla (beşerli sayma), saati söylemekle (5 dakikalık aralıklar) ve ölçüm sistemleriyle bağlantılıdır. 5 çarpım tablosunu öğrenmek öğrencilere güven verir ve matematiğin güzel, tutarlı örüntüleri olduğunu gösterir.",
      6: "6 çarpım tablosunu öğrenmek, öğrencilerin daha karmaşık çarpma işlemlerine geçmesini sağlar. 6'nın hem 2'nin hem de 3'ün katı olması, öğrencilere çarpmanın çarpanlara ayrılma özelliğini gösterir. Bu tablo, günlük hayatta sürekli görülür—yumurta kutularını saymak, zar oyunları, altılı paketler. 6 tablosunu öğrenmek, öğrencilere daha büyük sayılarla çalışma güveni verir.",
      7: "7 çarpım tablosu, öğrencilerin ezber becerilerini ve desen tanıma yeteneklerini gerçekten test eder. 7 asal bir sayı olduğundan, diğer tablolardan kolayca türetilemiyor, bu da onu zor ama ödüllendirici bir öğrenme deneyimi yapıyor. 7 tablosunu öğrenmek, öğrencilere zorlukların üstesinden gelme ve yeni stratejiler geliştirme fırsatı verir. Haftanın günlerini saymaktan takvim hesaplamalarına kadar birçok yerde kullanılır.",
      8: "8 çarpım tablosunu öğrenmek, öğrencilerin ikiye katlama stratejilerini pekiştirmesine yardımcı olur. 8 = 2 × 2 × 2 olduğundan, öğrenciler 2 ve 4 tablolarını kullanarak 8 tablosunu öğrenebilirler. Bu tablo, alan hesaplamalarında (8 kenarlı şekiller), müzik teorisinde (oktavlar) ve bilgisayar biliminde (8 bit = 1 byte) önemlidir. 8 tablosunu öğrenmek, matematiksel düşünme becerilerini geliştirir.",
      9: "9 çarpım tablosu, en büyüleyici matematiksel desenlerden birine sahiptir. Basamak toplama kuralı ve parmak hilesi, öğrencilere matematiğin sihirli yönünü gösterir. 9 tablosunu öğrenmek sadece ezberleme değil, desen tanımayı ve matematiksel ilişkileri anlamayı öğretir. Bu tablo, zihinden hesaplama becerilerini geliştirmek ve matematiksel güven oluşturmak için mükemmeldir.",
      10: "10 çarpım tablosu, yer değeri kavramını öğretmek için temeldir. Öğrenciler 10 ile çarpmayı öğrendiklerinde, ondalık sistemimizin nasıl çalıştığını anlamaya başlarlar. Bu tablo, para hesaplamaları, ölçüm birimleri arası dönüşümler ve büyük sayılarla çalışma için hayati önem taşır. 10 tablosunu öğrenmek, tüm diğer çarpım tablolarını anlamak için sağlam bir temel oluşturur ve zihinsel matematik becerilerini büyük ölçüde geliştirir.",
      11: "11 çarpım tablosu, desen tanıma becerilerini geliştirmek için mükemmeldir. Tek basamaklı sayılarla çarpıldığında ortaya çıkan tekrar deseni (11×4=44), öğrencilere matematiğin güzelliğini gösterir. 11 tablosunu öğrenmek, zihinsel hesaplama stratejilerini geliştirir ve sayı örüntülerini tanıma yeteneğini artırır. Bu tablo, büyük sayılarla çalışma güveni oluşturur.",
      12: "12 çarpım tablosu, günlük hayatta en sık kullanılan tablolardan biridir. Düzine sayma, saat okuma, yıllık planlama gibi birçok alanda 12 kullanılır. 12'nin birçok böleni olması (1,2,3,4,6,12), onu kesirleri ve oranları anlamak için ideal yapar. Bu tabloyu öğrenmek, pratik matematik becerilerini önemli ölçüde geliştirir.",
      13: "13 çarpım tablosu, öğrencilerin matematiksel dayanıklılığını geliştirir. Asal sayı olması nedeniyle kolay kısayollar yoktur, bu da gerçek anlama gerektirir. 13 tablosunu öğrenmek, zihinsel aritmetik becerilerini güçlendirir ve sayıları farklı şekillerde düşünmeyi öğretir (10+3 ayrıştırma stratejisi).",
      14: "14 çarpım tablosu, 7 tablosunu pekiştirmeye yardımcı olur. 14=2×7 ilişkisi, öğrencilere çarpmanın çarpanlara ayrılma özelliğini gösterir. Haftalık ve iki haftalık dönemleri hesaplamak için gereklidir. Bu tablo, çift sayı özelliklerini ve ikiye katlama stratejilerini anlamayı derinleştirir.",
      15: "15 çarpım tablosu, hem 3 hem de 5 tablosunu birleştirir, bu da matematiksel bağlantıları anlamak için harikadır. Çeyrek saat (15 dakika) hesaplamaları için hayati önem taşır. 15 tablosunu öğrenmek, bölünebillik kurallarını anlamayı ve sayılar arası ilişkileri görmeyi öğretir. Yüzde hesaplamalarında (15% bahşiş gibi) sıkça kullanılır.",
      16: "16 çarpım tablosu, ikili sistemleri ve üslü sayıları anlamak için mükemmeldir. 2⁴=16 ilişkisi, üslü sayıların gücünü gösterir. Bilgisayar biliminde (16 bit, onaltılık sistem) kritik öneme sahiptir. Bu tablo, çoklu ikiye katlama stratejilerini ve geometrik dizileri anlamayı geliştirir.",
      17: "17 çarpım tablosu, zihinsel matematik stratejilerini geliştirmek için mükemmel bir araçtır. Asal sayı olması, öğrencileri yaratıcı hesaplama yöntemleri bulmaya zorlar (20-3 veya 10+7 stratejileri). Bu tablo, problem çözme becerilerini ve sayılarla esnekliği geliştirir.",
      18: "18 çarpım tablosu, matematiksel ilişkilerin zenginliğini gösterir. 18=2×9=3×6 olması, çarpanların farklı kombinasyonlarını anlamayı öğretir. Reşit olma yaşı olarak kültürel önemi vardır. Bu tablo, birden fazla stratejiyle bir probleme yaklaşmayı ve en verimli yöntemi seçmeyi öğretir.",
      19: "19 çarpım tablosu, zihinsel hesaplama becerilerini en üst düzeye çıkarır. '20-1' stratejisi, öğrencilere tamamlayıcı sayıları kullanmayı öğretir. Asal sayı olması, desen tanımadan ziyade gerçek anlamayı vurgular. Bu tablo, karmaşık hesaplamaları basit adımlara bölme becerisini geliştirir.",
      20: "20 çarpım tablosu, yer değeri sistemini pekiştirmek ve büyük sayılarla rahatça çalışmak için kritiktir. 20=2×10 ilişkisi, onluk sistemi anlamayı derinleştirir. Para hesaplamalarında (20 lira banknotları) ve ölçümlerde sürekli kullanılır. Bu tablo, yüzde hesaplamalarının (20% indirim) temelini oluşturur.",
      21: "21 çarpım tablosu, 3×7 çarpanlara ayırma ilişkisini anlamak için mükemmeldir. Bu tablo, öğrencilere bir sayının birden fazla çarpanı olabileceğini gösterir. 21, yasal işlemler ve reşit olma yaşı olarak sosyal önem taşır. Bu tabloyu öğrenmek, çarpanlar ve katlar arasındaki ilişkileri anlamayı derinleştirir.",
      22: "22 çarpım tablosu, 11 tablosunu pekiştirmeye yardımcı olur. 22=2×11 ilişkisi, ikiye katlama stratejilerini güçlendirir. Spor (futbol takımı) ve günlük sayma işlemlerinde kullanılır. Bu tablo, çift sayı özelliklerini ve matematiksel ilişkileri anlamayı geliştirir.",
      23: "23 çarpım tablosu, asal sayılarla çalışma becerilerini geliştirir. Diğer tablolardan türetilemediği için, öğrenciler yeni stratejiler geliştirmek zorunda kalır. 23, biyolojide (kromozom çiftleri) önemli bir sayıdır. Bu tabloyu öğrenmek, zihinsel esneklik ve problem çözme yeteneklerini artırır.",
      24: "24 çarpım tablosu, günlük hayatta en kullanışlı tablolardan biridir. Gün-saat ilişkisi (24 saat) nedeniyle sürekli karşılaşılır. 24'ün birçok böleni olması (1,2,3,4,6,8,12,24), onu kesirler ve oranlar için ideal yapar. Bu tablo, zaman yönetimi ve planlama becerilerini geliştirir.",
      25: "25 çarpım tablosu, kare sayıları (5²) anlamak için temeldir. Para sistemlerinde (25 kuruş/sent) merkezi role sahiptir. 25'in düzenli deseni (25,50,75,00), hesaplamaları çok kolaylaştırır. Bu tablo, yüzde hesaplamalarında (25%=1/4) ve kesirlerde sıkça kullanılır.",
      26: "26 çarpım tablosu, 13 tablosunu pekiştirmeye yardımcı olur. Alfabetik sistemlerde (26 harf) önemlidir. 26=2×13 ilişkisi, asal sayılarla çift sayılar arasındaki bağlantıyı gösterir. Bu tabloyu öğrenmek, matematiksel ilişkileri görme yeteneğini geliştirir.",
      27: "27 çarpım tablosu, üslü sayıları (3³) anlamak için kritiktir. Geometride (3D uzayda 3×3×3 küp) ve hacim hesaplamalarında önemlidir. 27=3×9 ilişkisi, 3 ve 9 tabloları arasındaki bağlantıyı güçlendirir. Bu tablo, matematiksel düşünme ve üslü sayılar konusunda temel oluşturur.",
      28: "28 çarpım tablosu, takvim bilgisi (Şubat ayı) için önemlidir. 28'in mükemmel sayı olması (bölenler toplamı kendisine eşit), özel matematiksel özellikler gösterir. 28=4×7 ilişkisi, çarpanlara ayırmayı anlamayı derinleştirir. Bu tablo, zaman hesaplamaları ve haftalık planlamada kullanılır.",
      29: "29 çarpım tablosu, asal sayı stratejilerini mükemmelleştirmek için mükemmeldir. 30-1 ilişkisi, tamamlayıcı sayıları kullanmayı öğretir. Takvim bilgisi (artık yıl Şubat'ı) için gereklidir. Bu tabloyu öğrenmek, zihinsel hesaplama becerilerini en üst düzeye çıkarır.",
      30: "30 çarpım tablosu, onluk sistem ve çarpma arasındaki köprüdür. 30=3×10 ilişkisi, yer değeri anlayışını güçlendirir. Zaman (yarım saat), takvim (ay günleri) ve açı ölçümlerinde (30°) sürekli kullanılır. Bu tablo, yüzde hesaplamalarının (30% indirim) ve pratik matematiğin temelini oluşturur.",
    }
    return importance[number] || `${number} çarpım tablosunu öğrenmek, öğrencilerin bu önemli sayıyla akıcılık geliştirmelerine yardımcı olur. Matematik ve günlük hayatta sıkça görülür, bu da güçlü hesaplama becerileri oluşturmak için gerekli kılar.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Özdeşlik Deseni", description: "1 ile çarpılan her sayı kendisine eşittir. Bu asla değişmez: 1×1=1, 1×2=2, 1×3=3, ve böyle devam eder." },
        { title: "Öngörülebilir Sıra", description: "Sonuçlar basitçe yukarı doğru sayar: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Sadece sırayla sayıları listeliyorsunuz." },
        { title: "Tüm Tabloların Temeli", description: "Her çarpım tablosu 1 ile çarpmakla başlar, bu yüzden bu desen her tabloda görülür." },
      ],
      2: [
        { title: "Sadece Çift Sayılar", description: "2'nin tüm katları çift sayılardır. Sonuçlar her zaman 0, 2, 4, 6 veya 8 ile biter." },
        { title: "İkişerli Atlayarak Sayma", description: "Her cevap bir öncekinden 2 fazladır: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "İkiye Katlama Deseni", description: "Her sonuç çarpanın tam iki katıdır: 2×5=10, 5'in iki katıdır." },
      ],
      3: [
        { title: "Basamak Toplama Deseni", description: "Her sonucun basamaklarını toplayın: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). 3-6-9 deseni tekrar eder!" },
        { title: "Üçerli Atlayarak Sayma", description: "Her cevap 3 artar: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Tek-Çift Değişimi", description: "Sonuçlar değişir: tek (3), çift (6), tek (9), çift (12), öngörülebilir bir ritim oluşturur." },
      ],
      4: [
        { title: "Hep Çift Sayılar", description: "2 çarpım tablosu gibi, 4'ün tüm katları çifttir, 0, 2, 4, 6 veya 8 ile biter." },
        { title: "2'ler Tablosunun İki Katı", description: "Her cevap 2 çarpım tablosundaki karşılık gelen cevabın tam iki katıdır: 4×3=12, 2×3=6'nın iki katıdır." },
        { title: "Dörderli Atlayarak Sayma", description: "Her cevap 4 artar: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "0 veya 5 ile Biter", description: "5'in her katı 0 veya 5 ile biter. Bu, deseni anında tanınabilir yapar." },
        { title: "Değişen Desen", description: "Sonuçlar 5 (tek) ve 0 (çift) ile bitme arasında değişir: 5, 10, 15, 20, 25, 30..." },
        { title: "10'lar Tablosunun Yarısı", description: "Her sonuç 10 çarpım tablosunun tam yarısıdır: 5×4=20, 10×4=40'ın yarısıdır." },
      ],
      6: [
        { title: "Hep Çift Sayılar", description: "6'nın tüm katları çifttir. Sonuçlar 6, 12, 18, 24, 30... şeklinde ilerler ve hepsi 2'ye bölünebilir." },
        { title: "3 Tablosunun İki Katı", description: "Her cevap 3 çarpım tablosunun tam iki katıdır: 6×4=24, 3×4=12'nin iki katıdır." },
        { title: "Birler Basamağı Deseni", description: "Birler basamağı şu deseni takip eder: 6, 2, 8, 4, 0 ve tekrarlanır. Bu desen 6 çarpım tablosunu tanımlamanıza yardımcı olur." },
      ],
      7: [
        { title: "Basamaklar Toplamı Deseni", description: "7'nin katlarının basamaklarını topladığınızda ilginç bir desen ortaya çıkar: 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "Birler Basamağı Tekrarı", description: "Birler basamağı şu sırayı takip eder: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 ve tekrarlanır." },
        { title: "Asal Sayı Özelliği", description: "7 asal bir sayıdır, bu yüzden diğer tablolarla basit ilişkileri yoktur. Ancak 7×8=56 gibi özel çiftleri ezberlemek yardımcı olur." },
      ],
      8: [
        { title: "Hep Çift ve 4'e Bölünebilir", description: "8'in tüm katları hem çift hem de 4'e bölünebilir: 8, 16, 24, 32, 40, 48..." },
        { title: "4 Tablosunun İki Katı", description: "Her cevap 4 çarpım tablosunun tam iki katıdır: 8×5=40, 4×5=20'nin iki katıdır." },
        { title: "Birler Basamağı Deseni", description: "Birler basamağı şu deseni takip eder: 8, 6, 4, 2, 0 ve tekrarlanır. Hep çift sayılarla azalan bir desen." },
      ],
      9: [
        { title: "Basamaklar Toplamı Her Zaman 9", description: "9'un katlarının basamaklarını toplayın: 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). Bu sihirli desen hep geçerlidir!" },
        { title: "Onlar Basamağı Deseni", description: "9×n yaparsanız, onlar basamağı n-1'dir: 9×3=27 (onlar:2), 9×6=54 (onlar:5), 9×9=81 (onlar:8)." },
        { title: "10'dan 1 Eksik", description: "9×n = (10×n) - n formülü çok kullanışlıdır: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      10: [
        { title: "Sonuna Sıfır Ekle", description: "Herhangi bir sayıyı 10 ile çarptığınızda, sadece sonuna bir sıfır eklersiniz: 7×10=70, 23×10=230." },
        { title: "Hep 0 ile Biter", description: "10'un tüm katları 0 ile biter: 10, 20, 30, 40, 50... Bu desen asla değişmez." },
        { title: "Yer Değeri Sistemi", description: "10 ile çarpmak, her basamağı bir sola kaydırır. Bu, ondalık sistemimizin temelidir: 25×10=250." },
      ],
      11: [
        { title: "Çift Basamak Deseni", description: "Tek basamaklı sayılarla çarpıldığında sonuç çift basamaktır: 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "Basamak Toplama Hilesi", description: "İki basamaklı bir sayıyı 11 ile çarpın: basamakları toplayıp ortaya koyun. 23×11: 2_(2+3)_3 = 253." },
        { title: "Onarlı Artış", description: "11'in katları: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. İlk 9 tanesi çift basamak deseni gösterir." },
      ],
      12: [
        { title: "Düzine Deseni", description: "12'nin katları: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Her biri bir düzine artış gösterir." },
        { title: "Hem 3 Hem 4 Katları", description: "12=3×4 olduğundan, tüm sonuçlar hem 3'e hem 4'e bölünebilir. 12×5=60: 60÷3=20, 60÷4=15." },
        { title: "Çift Sayı Deseni", description: "12'nin tüm katları çifttir ve 4'e bölünebilir: 12, 24, 36, 48..." },
      ],
      13: [
        { title: "10+3 Ayrıştırma", description: "13×n = (10×n) + (3×n). Örnek: 13×4 = 40 + 12 = 52. Bu strateji hesaplamayı kolaylaştırır." },
        { title: "Birler Basamağı Döngüsü", description: "Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 ve tekrarlanır. Tam 10 adımda bir döngü tamamlanır." },
        { title: "Asal Sayı Davranışı", description: "13 asal olduğundan, sadece 1 ve 13 ile bölünebilir. Bu, özel ezber stratejileri gerektirir." },
      ],
      14: [
        { title: "7'nin İki Katı", description: "14=2×7 olduğundan, 7 tablosunu biliyorsanız her sonucu ikiye katlayın: 7×6=42, yani 14×6=84." },
        { title: "Hep Çift Sayılar", description: "14'ün tüm katları çifttir: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "İki Hafta Deseni", description: "14 gün = 2 hafta. 14'ün katları haftalık planlamada kullanılır: 28 gün = 4 hafta." },
      ],
      15: [
        { title: "0 veya 5 ile Biter", description: "15'in tüm katları 0 veya 5 ile biter: 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "3×5 İlişkisi", description: "15=3×5 olduğundan, hem 3 hem 5 tablolarıyla ilişkilidir. 15×4=60: 3×4=12, 5×4=20, 12+20=32 değil ama 3×20=60 veya 5×12=60." },
        { title: "Çeyrek Saat Katları", description: "15 dakika = çeyrek saat. 30 dakika = yarım saat, 45 dakika = üç çeyrek, 60 dakika = 1 saat." },
      ],
      16: [
        { title: "2'nin Kuvveti", description: "16=2⁴ (2×2×2×2). İkiye katlama zinciri: 2→4→8→16. Her katı da bu deseni korur." },
        { title: "8'in İki Katı", description: "16=2×8 olduğundan, 8 tablosunu biliyorsanız her sonucu ikiye katlayın: 8×3=24, yani 16×3=48." },
        { title: "Hep Çift ve 8'e Bölünebilir", description: "16'nın tüm katları hem çift hem de 4'e, 8'e bölünebilir: 16, 32, 48, 64, 80..." },
      ],
      17: [
        { title: "20-3 Stratejisi", description: "17=20-3 olarak düşünün. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "10+7 Ayrıştırma", description: "17×n = (10×n) + (7×n). Örnek: 17×4 = 40 + 28 = 68." },
        { title: "Asal Sayı Benzersizliği", description: "17 asal sayıdır, bu yüzden sadece kendine özgü desenler vardır. Birler basamağı: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      18: [
        { title: "9'un İki Katı", description: "18=2×9 olduğundan, 9 tablosunu ikiye katlayın: 9×5=45, yani 18×5=90." },
        { title: "6'nın Üç Katı", description: "18=3×6 olduğundan, 6 tablosunu üçe katlayın: 6×4=24, yani 18×4=72." },
        { title: "Hep Çift ve 9'a Bölünebilir", description: "18'in katları hem çift hem de 9'a bölünebilir. Basamaklar toplamı 9'un katıdır: 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      19: [
        { title: "20-1 Stratejisi", description: "19=20-1 olarak düşünün. 19×6 = (20×6) - 6 = 120 - 6 = 114. Çok pratik bir yöntem!" },
        { title: "10+9 Ayrıştırma", description: "19×n = (10×n) + (9×n). Örnek: 19×3 = 30 + 27 = 57." },
        { title: "Asal Sayı Deseni", description: "19 asal olduğundan özel desenler vardır. Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (azalan sıra)." },
      ],
      20: [
        { title: "Sonuna Sıfır Ekle ve İkiye Katla", description: "20=10×2. Bir sayıyı 20 ile çarpmak: sonuna 0 ekleyip ikiye katlayın. 7×20: 70×2=140 YANLIŞ! Doğrusu: 7×10=70, 70×2=140." },
        { title: "Hep 0 ile Biter", description: "20'nin tüm katları 0 ile biter: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "Çift Onluklar", description: "20, 40, 60, 80, 100... Her biri 20 artış gösterir. 10'ların çift katlarıdır." },
      ],
      21: [
        { title: "3×7 İlişkisi", description: "21=3×7. Hem 3 hem 7 tablosunu kullanabilirsiniz: 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "20+1 Stratejisi", description: "21×n = (20×n) + n. Örnek: 21×6 = 120 + 6 = 126. Çok pratik!" },
        { title: "Birler Basamağı Döngüsü", description: "Birler basamağı: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ve tekrarlanır. Basit artış deseni." },
      ],
      22: [
        { title: "11'in İki Katı", description: "22=2×11. 11 tablosunu biliyorsanız ikiye katlayın: 11×3=33, yani 22×3=66." },
        { title: "Hep Çift Sayılar", description: "22'nin tüm katları çifttir: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Çift Basamak Benzeri Desen", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. İlk 4'ünde çift basamak deseni görülür." },
      ],
      23: [
        { title: "20+3 Ayrıştırma", description: "23×n = (20×n) + (3×n). Örnek: 23×5 = 100 + 15 = 115." },
        { title: "25-2 Stratejisi", description: "23=25-2. Örnek: 23×4 = 100 - 8 = 92. 25 ile çarpmak daha kolay olduğunda kullanışlı." },
        { title: "Asal Sayı Deseni", description: "23 asal olduğundan özel desen vardır. Birler basamağı: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      24: [
        { title: "Çoklu Çarpan İlişkileri", description: "24=2×12=3×8=4×6. Birçok yoldan hesaplanabilir. 24×5 = 12×10 = 120." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "24'ün tüm katları hem çift hem de 3'e, 4'e, 6'ya, 8'e bölünebilir." },
        { title: "Saat İlişkisi", description: "24 saat = 1 gün. 48 saat = 2 gün, 72 saat = 3 gün. Zaman hesaplamalarında kullanışlı." },
      ],
      25: [
        { title: "25, 50, 75, 00 Deseni", description: "25'in tüm katları 25, 50, 75 veya 00 ile biter. Çok düzenli ve tahmin edilebilir." },
        { title: "Çeyrek İlişkisi", description: "25 = 100÷4. Yani 25×4=100. Bu ilişki yüzde ve kesir hesaplamalarında çok kullanışlı." },
        { title: "5'in Karesi", description: "25=5². Bu özel ilişki: 25×n = 5×5×n. Örnek: 25×8 = 5×40 = 200." },
      ],
      26: [
        { title: "13'ün İki Katı", description: "26=2×13. 13 tablosunu biliyorsanız ikiye katlayın: 13×7=91, yani 26×7=182." },
        { title: "Hep Çift Sayılar", description: "26'nın tüm katları çifttir: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 veya 30-4", description: "26×n = (25×n) + n veya (30×n) - (4×n). Örnek: 26×4 = 100+4 = 104." },
      ],
      27: [
        { title: "3'ün Kuvveti", description: "27=3³ (3×3×3). Küp sayı ilişkisi: 27, 54, 81, 108... (3'ün katları)." },
        { title: "9'un Üç Katı", description: "27=3×9. 9 tablosunu üçe katlayın: 9×4=36, yani 27×4=108." },
        { title: "30-3 Stratejisi", description: "27=30-3. Örnek: 27×6 = 180-18 = 162. Kolay hesaplama yöntemi." },
      ],
      28: [
        { title: "4×7 veya 2×14", description: "28=4×7=2×14. Birden fazla yolla hesaplanabilir: 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "Hep Çift ve 4'e Bölünebilir", description: "28'in tüm katları hem çift hem de 4'e, 7'ye bölünebilir: 28, 56, 84, 112, 140..." },
        { title: "Hafta İlişkisi", description: "28 gün = 4 hafta. Bu ilişki takvim hesaplamalarında kullanışlıdır." },
      ],
      29: [
        { title: "30-1 Stratejisi", description: "29=30-1. 29×n = (30×n) - n. Örnek: 29×7 = 210-7 = 203. En etkili yöntem!" },
        { title: "Birler Basamağı Deseni", description: "Birler basamağı: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (azalan sıra). Tahmin edilebilir." },
        { title: "Asal Sayı Özelliği", description: "29 asal olduğundan basit çarpan ilişkileri yoktur. Zihinsel stratejiler gerektirir." },
      ],
      30: [
        { title: "3×10 İlişkisi", description: "30=3×10. Bir sayıyı 30 ile çarpmak: 10 ile çarp, sonra 3 ile çarp. 7×30 = 70×3 = 210." },
        { title: "Hep 0 ile Biter", description: "30'un tüm katları 0 ile biter: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Onlukların Üçlü Katları", description: "30, 60, 90, 120, 150... Her biri 30 artış. 10'ların 3 katıdır." },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "1×1=2 olduğunu düşünmek", solution: "Unutmayın: 1 ile çarpılan her şey kendisine eşittir. 1 grubun 1'i sadece 1'dir." },
        { mistake: "Toplama ile karıştırmak", solution: "1 ile çarpma toplamadan farklıdır. 5+1=6, ama 5×1=5." },
      ],
      2: [
        { mistake: "2×6=12 ile 2×7=14'ü karıştırmak", solution: "Atlayarak saymayı kullanın: 2, 4, 6, 8, 10, 12, 14. Atlamadan dikkatli sayın." },
        { mistake: "Büyük sayılarla kafası karışmak", solution: "Parçalara ayırın: 2×8 sadece 8+8'dir. İkiye katlamak basit toplamadır." },
      ],
      3: [
        { mistake: "3×6=18 ile 3×7=21'i karıştırmak", solution: "+3 desenini hatırlayın: 18'den sonra 21 gelir. Doğrulamak için üçerli sayın." },
        { mistake: "3×8=24 ile 3×9=27'yi karıştırmak", solution: "Basamak toplama hilesini kullanın: 24 (2+4=6) ve 27 (2+7=9), 3-6-9 desenini takip eder." },
      ],
      4: [
        { mistake: "4×7=24 olduğunu düşünmek (28 yerine)", solution: "Hatırlayın: 4×6=24, bu yüzden 4×7, 4 fazla olmalı, yani 28." },
        { mistake: "2 çarpım tablosu ile karıştırmak", solution: "4 çarpım tablosu her zaman 2 çarpım tablosunun iki katıdır. İki katına çıkararak kontrol edin." },
      ],
      5: [
        { mistake: "Sırayı karıştırmak (20'den önce 25)", solution: "Desen tutarlıdır: 5, 10, 15, 20, 25. Her biri 5 artar." },
        { mistake: "5×tek sayının her zaman 5 ile bittiğini düşünmek", solution: "Aslında 5×çift 0 ile, 5×tek 5 ile biter." },
      ],
      6: [
        { mistake: "6×7=42 ile 6×8=48'i karıştırmak", solution: "Bu zor bir çift! Hatırlayın: 6×7=42 ('yedi altı' kafiyesi), ardından 6 ekleyin: 48." },
        { mistake: "6×9=54 ile 6×8=48'i karıştırmak", solution: "6 tablosunu kullanın: 6×8=48, sonra +6=54. Veya 6×9'u 60-6=54 olarak hesaplayın." },
        { mistake: "3 çarpım tablosu ile karıştırmak", solution: "6 çarpım tablosu her zaman 3 çarpım tablosunun iki katıdır. 3×4=12, yani 6×4=24." },
      ],
      7: [
        { mistake: "7×8=56 ile 7×6=42'yi karıştırmak", solution: "Bu en zor ikili! Ezber ipucu: '5-6-7-8' (56=7×8). Veya 7×7=49'dan +7=56." },
        { mistake: "7×9=63 ile 7×8=56'yı karıştırmak", solution: "Desen: 7×8=56, sonra +7=63. Veya basamak toplama: 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "7 tablosunu tamamen atlamak", solution: "7 zor görünse de, pratikle öğrenilebilir. Küçük adımlarla başlayın: 7×1, 7×2, 7×5, 7×10 kolayları ezberleyin." },
      ],
      8: [
        { mistake: "8×7=56 ile 8×8=64'ü karıştırmak", solution: "8×8=64'ü ezberlemenin kolay yolu: '8 sekiz 64' ya da '8²=64'." },
        { mistake: "8×9=72 ile 8×8=64'ü karıştırmak", solution: "8×8=64'den başlayın, sonra +8=72. Veya 80-8=72 (10×8 eksi 8)." },
        { mistake: "4 çarpım tablosu ile karıştırmak", solution: "8 her zaman 4'ün iki katıdır. 4×6=24, yani 8×6=48. İki katına çıkararak kontrol edin." },
      ],
      9: [
        { mistake: "9×8=72 ile 9×7=63'ü karıştırmak", solution: "Parmak hilesini kullanın veya basamak toplamı: 72 (7+2=9), 63 (6+3=9). 72>63'ü hatırlayın." },
        { mistake: "Parmak hilesini yanlış uygulamak", solution: "Doğru sıra: Sol parmaklar 1-5, sağ parmaklar 6-10. Katladığınız parmağın solundakiler onlar, sağındakiler birler." },
        { mistake: "9×9=81 ile 9×8=72'yi karıştırmak", solution: "9×9=81 özeldir: '9 dokuz 81' veya '9²=81'. Basamak toplamı: 81 (8+1=9), 72 (7+2=9)." },
      ],
      10: [
        { mistake: "Sıfırı unutmak", solution: "En kolay hatırlatma: 10 ile çarptığınızda SADECE sonuna bir sıfır ekleyin. 6×10=60, 25×10=250." },
        { mistake: "Çok fazla sıfır eklemek", solution: "10 ile çarpma SADECE bir sıfır ekler. 100 (iki sıfır), 1000 (üç sıfır) değil, sadece 10 (bir sıfır)." },
      ],
      11: [
        { mistake: "11×12=121 olduğunu düşünmek (132 yerine)", solution: "Çift basamak deseni sadece 11×1'den 11×9'a kadar geçerlidir. 11×10=110, 11×12=132." },
        { mistake: "Basamak toplama hilesini yanlış uygulamak", solution: "23×11: Basamakları topla (2+3=5), ortaya koy: 253. Eğer toplam >9 ise, elde var: 67×11: 6_(6+7=13)_7 = 6_(13)_7 = 737." },
        { mistake: "11×11=111 sanmak", solution: "11×11=121, 111 değil. Her 11 katı, bir öncekine 11 ekler: 99+11=110, 110+11=121." },
      ],
      12: [
        { mistake: "12×8=84 ile 12×9=108'i karıştırmak", solution: "12×8=96 (8 düzine), 12×9=108 (9 düzine). 84 aslında 12×7. Düzine sayarak kontrol edin." },
        { mistake: "12 ile 10'u karıştırmak", solution: "12×5=60, 10×5=50. 12 her zaman 10'dan %20 fazladır (10'a 2 eklenmiş)." },
      ],
      13: [
        { mistake: "13×7=91 ile 13×8=104'ü karıştırmak", solution: "13×7=91, 13×8=104. Aradaki fark 13'tür. 10+3 stratejisini kullanın: 70+21=91, 80+24=104." },
        { mistake: "13'ü 3 veya 30 ile karıştırmak", solution: "13×4=52, 3×4=12 değil. 30×4=120 da değil. 13, tam olarak 10+3'tür." },
      ],
      14: [
        { mistake: "14×7=98 sanmak (doğrusu 14×7=98)", solution: "14×7=98 doğru! Ama 14×8=112'yi unutmayın (98+14=112). 7 tablosunun iki katı olduğunu hatırlayın." },
        { mistake: "14×6=72 ile 14×6=84'ü karıştırmak", solution: "14×6=84 doğrudur (7×6=42, ×2=84). 72 aslında 12×6 veya 8×9." },
      ],
      15: [
        { mistake: "15×6=80 sanmak (90 yerine)", solution: "15×6=90 (1.5 düzine). 80 aslında 16×5. 15×6'yı 3×6=18, sonra ×5=90 veya 5×6=30, sonra ×3=90 olarak hesaplayın." },
        { mistake: "15×4=50 ile karıştırmak", solution: "15×4=60, 50 değil. 15 dakika×4 = 1 saat (60 dakika) olduğunu hatırlayın." },
      ],
      16: [
        { mistake: "16×6=84 ile 16×6=96'yı karıştırmak", solution: "16×6=96 doğrudur (8×6=48, ×2=96). 84 aslında 14×6 veya 12×7." },
        { mistake: "16'yı 6 ile karıştırmak", solution: "16×4=64, 6×4=24 değil. 16, 6'dan çok farklıdır. 16=2⁴ olduğunu hatırlayın." },
      ],
      17: [
        { mistake: "17×6=102 ile 17×7=119'u karıştırmak", solution: "20-3 stratejisi: 17×6=120-18=102, 17×7=140-21=119. Veya 10+7: 60+42=102, 70+49=119." },
        { mistake: "17×8=126 ile 17×9=153'ü karıştırmak", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 aslında 18×7." },
      ],
      18: [
        { mistake: "18×7=126 ile 18×8=144'ü karıştırmak", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). Aradaki fark 18'dir." },
        { mistake: "18×6=108 ile 18×6=104'ü karıştırmak", solution: "18×6=108 doğrudur (6×6=36, ×3 veya 9×6=54, ×2). 104 aslında 13×8." },
      ],
      19: [
        { mistake: "19×5=100 sanmak (95 yerine)", solution: "19×5=95, 100 değil (20×5=100). 19, 20'den 1 eksiktir, bu yüzden 100-5=95." },
        { mistake: "19×6=114 ile 19×7=133'ü karıştırmak", solution: "20-1 stratejisi: 19×6=120-6=114, 19×7=140-7=133. Her seferinde çarpanı 20'den çıkarın." },
      ],
      20: [
        { mistake: "20×7=120 sanmak (140 yerine)", solution: "20×7=140, 120 değil (20×6=120). 10×7=70, ikiye katlayın: 140. Veya 7×20=7×10×2." },
        { mistake: "Sıfırı unutmak", solution: "20'nin tüm katları 0 ile bitmeli: 20, 40, 60, 80, 100... 20×8=160, 16 değil!" },
      ],
      21: [
        { mistake: "21×5=100 sanmak (105 yerine)", solution: "21×5=105, 100 değil. 20×5=100, artı 5 daha: 105. Veya 3×7×5 = 21×5 = 105." },
        { mistake: "21×7=140 ile 21×7=147'yi karıştırmak", solution: "21×7=147 doğrudur (3×7×7 veya 140+7). 140 aslında 20×7." },
        { mistake: "21'i 12 ile karıştırmak", solution: "21×4=84, 12×4=48 değil. Rakamların sırasına dikkat edin: 21, 12'den çok farklıdır." },
      ],
      22: [
        { mistake: "22×5=100 sanmak (110 yerine)", solution: "22×5=110, 100 değil. 11×5=55, ikiye katlayın: 110. Veya 20×5=100, artı 2×5=10: 110." },
        { mistake: "22×9=198 ile 22×9=188'i karıştırmak", solution: "22×9=198 doğrudur (11×9=99, ×2). 188 başka bir hesaptır." },
      ],
      23: [
        { mistake: "23×4=82 sanmak (92 yerine)", solution: "23×4=92, 82 değil. 20×4=80, artı 3×4=12: 92. 82 başka bir sonuçtur." },
        { mistake: "23×5=105 ile 23×5=115'i karıştırmak", solution: "23×5=115 doğrudur (20×5=100, 3×5=15, toplam 115). 105 aslında 21×5." },
      ],
      24: [
        { mistake: "24×5=100 sanmak (120 yerine)", solution: "24×5=120, 100 değil. Bir günde 24 saat, 5 gün = 120 saat. Veya 12×10=120." },
        { mistake: "24×7=158 ile 24×7=168'i karıştırmak", solution: "24×7=168 doğrudur (4×6×7 veya 3×8×7). 158 başka bir sonuçtur." },
      ],
      25: [
        { mistake: "25×8=180 sanmak (200 yerine)", solution: "25×8=200, 180 değil. 25×4=100, yani 25×8=200. Veya 5×5×8 = 25×8 = 200." },
        { mistake: "Son iki basamağı yanlış tahmin etmek", solution: "25'in katları hep 25, 50, 75 veya 00 ile biter. Başka bir şey olamaz!" },
      ],
      26: [
        { mistake: "26×5=120 ile 26×5=130'u karıştırmak", solution: "26×5=130 doğrudur (13×5=65, ×2). 120 aslında 24×5." },
        { mistake: "26'yı 16 veya 36 ile karıştırmak", solution: "26×4=104, 16×4=64 veya 36×4=144 değil. Rakamları dikkatlice okuyun." },
      ],
      27: [
        { mistake: "27×4=98 sanmak (108 yerine)", solution: "27×4=108, 98 değil. 30×4=120, eksi 3×4=12: 108. Veya 9×4=36, ×3=108." },
        { mistake: "27×7=179 ile 27×7=189'u karıştırmak", solution: "27×7=189 doğrudur (30×7=210, eksi 3×7=21: 189). 179 başka bir sonuçtur." },
      ],
      28: [
        { mistake: "28×5=130 sanmak (140 yerine)", solution: "28×5=140, 130 değil. 4×7×5 = 20×7 = 140. Veya 14×10=140." },
        { mistake: "28×9=242 ile 28×9=252'yi karıştırmak", solution: "28×9=252 doğrudur (4×7×9 veya 30×9 eksi 2×9). 242 başka bir sonuçtur." },
      ],
      29: [
        { mistake: "29×5=140 sanmak (145 yerine)", solution: "29×5=145, 140 değil. 30×5=150, eksi 5: 145. 140 aslında 28×5." },
        { mistake: "29×7=203 ile 29×7=193'ü karıştırmak", solution: "29×7=203 doğrudur (30×7=210, eksi 7). 193 başka bir hesaptır." },
      ],
      30: [
        { mistake: "30×7=200 sanmak (210 yerine)", solution: "30×7=210, 200 değil (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Sıfırı unutmak", solution: "30'un tüm katları 0 ile bitmeli: 30, 60, 90, 120, 150... 30×8=240, 24 değil!" },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Her çarpmayı yüksek sesle söyleyin: '1 çarpı 1 eşittir 1, 1 çarpı 2 eşittir 2...'",
        "Tabloyu bir hafta boyunca her gün bir kez yazmayı pratik edin",
        "Deseni arayın: cevap her zaman ikinci sayıyla aynıdır",
        "Flash kartları kullanın, ancak bu tablo genellikle çok hızlı öğrenilir",
      ],
      2: [
        "Yürürken veya merdiven çıkarken ikişerli sayın: 2, 4, 6, 8...",
        "Parmaklarınızı kullanın: parmakları çift olarak tutun ve ikişerli sayın",
        "Gün boyunca kafanızda sayıları ikiye katlamayı pratik edin",
        "Yüksek sesle söyleyin: '2 çarpı 5, 5 artı 5'tir, bu da 10 eder'",
      ],
      3: [
        "Ritmik olarak üçerli sayın: 3, 6, 9, 12, 15...",
        "Parmak hilesini kullanın: parmakları 3'lü gruplar halinde tutun",
        "Cevaplarınızı kontrol etmek için basamak toplama desenine bakın (3-6-9 tekrarı)",
        "Uzun bir seans yerine günde 5-10 dakika pratik yapın",
      ],
      4: [
        "Önce 2 çarpım tablosunu öğrenin, sonra 4'leri elde etmek için her cevabı ikiye katlayın",
        "Dörderli sayın: 4, 8, 12, 16, 20...",
        "Görselleştirmek için 4'lü gruplar halindeki nesneleri kullanın (sandalye ayakları, araba tekerlekleri)",
        "Daha zor olanları (4×6, 4×7, 4×8, 4×9) ayrı olarak pratik edin",
      ],
      5: [
        "Parmaklarınızı kullanarak beşerli sayın—her parmak 5'i temsil eder",
        "Bir saate bakın ve 5 dakikalık aralıklarla sayın",
        "Parayla pratik yapın: beşlik madeni paraları sayın (5 kuruş)",
        "Unutmayın: çift çarpanlar 0 ile, tek çarpanlar 5 ile biter",
      ],
      6: [
        "3 çarpım tablosunu ezberleyin, sonra her cevabı ikiye katlayarak 6'ları bulun",
        "Yumurta kutusu stratejisi: 6'şar 6'şar sayın (6, 12, 18, 24...)",
        "Zor çiftlere odaklanın: 6×7=42, 6×8=48, 6×9=54'ü ayrı çalışın",
        "Birler basamağı desenini ezberleyin: 6, 2, 8, 4, 0 ve tekrar",
        "6 hem 2'nin hem 3'ün katı olduğu için bu iki tabloyu kullanarak kontrol edin",
      ],
      7: [
        "En zor ikiliyi ezberleyin: 7×8=56 ('beş altı, yedi sekiz' kafiyesi)",
        "Haftanın günleriyle bağlantı kurun: 7 gün, 14 gün (2 hafta), 21 gün (3 hafta)",
        "7×7=49'u özel olarak ezberleyin (7²=49), diğerlerini bundan hesaplayın",
        "Parmak hilesi: Sol elden 7 parmak say, kalanlar birler, sayılanlar onlar",
        "Günde sadece 3-4 gerçek pratik yapın. 7 sabır ister!",
      ],
      8: [
        "4 çarpım tablosunu ezberleyin, sonra her cevabı ikiye katlayarak 8'leri bulun",
        "8×8=64'ü özel olarak ezberleyin ('sekiz sekiz altmış dört')",
        "Sekizerli sayın: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "İkiye katlama zinciri: Sayıyı ikiye katlayın (×2), sonra tekrar (×4), sonra tekrar (×8)",
        "Birler basamağı her zaman çift ve azalan: 8, 6, 4, 2, 0 ve tekrar",
      ],
      9: [
        "Parmak hilesini öğrenin: 10 parmağınızı kullanarak 9 çarpım tablosunu gösterin",
        "Basamak toplama kuralını kullanın: cevabın basamaklarını toplayın, her zaman 9 olur",
        "10'dan çıkarma: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "9×9=81'i özel olarak ezberleyin (9²=81)",
        "Onlar deseni: 9×n'de onlar basamağı her zaman n-1'dir",
      ],
      10: [
        "En kolay kural: Sadece sonuna bir sıfır ekleyin!",
        "10'arli sayın: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Yer değeri ilişkisini anlayın: 10 ile çarpmak bir basamak sola kaydırır",
        "Büyük sayılarla pratik yapın: 23×10=230, 47×10=470",
        "Bu tabloyu diğer tabloları kontrol etmek için kullanın (örn: 9×6 = 60-6)",
      ],
      11: [
        "Çift basamak desenini ezberleyin: 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Basamak toplama hilesini pratik edin: 23×11 = 253 (2_[2+3]_3)",
        "11×11=121 ve 11×12=132'yi özel olarak ezberleyin",
        "Şarkı veya kafiye oluşturun: 'On bir beş, elli beş' (11×5=55)",
        "Her gün bir 11 katını gerçek hayatta bulun (11 yaş, 11 saat vb.)",
      ],
      12: [
        "Düzine sayarak pratik yapın: yumurta kutularını sayın (12, 24, 36...)",
        "3 veya 4 tablosunu kullanarak 12'yi hesaplayın: 12=3×4, yani 12×5 = 3×5×4 = 15×4 = 60",
        "Saat dilimi kullanın: 12×5=60 dakika (1 saat)",
        "12'nin en zor katlarına odaklanın: 12×7=84, 12×8=96, 12×9=108",
        "Günlük hayatta 12 kullanın: aylar, saatler, düzineler",
      ],
      13: [
        "10+3 stratejisini her zaman kullanın: 13×6 = 60+18 = 78",
        "13 tablosunu şarkı haline getirin veya ritim bulun",
        "En zor ikililere odaklanın: 13×7=91, 13×8=104, 13×9=117",
        "Her gün 2-3 farklı 13 katını pratik edin, hepsini birden değil",
        "Geriye doğru çalışın: 130, 117, 104, 91, 78... (130'dan 13'er azaltın)",
      ],
      14: [
        "7 tablosunu ezberleyin, sonra her cevabı ikiye katlayın",
        "İki haftalık takvim kullanın: 14 gün periyotları",
        "14×7=98 ve 14×8=112'yi özellikle ezberleyin",
        "7 tablosunu kontrol etmek için 14 kullanın: 14×6=84, yani 7×6=42",
        "14'erli sayın: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      15: [
        "Saat stratejisi: 15 dakika = çeyrek saat. 15×4=60 dakika = 1 saat",
        "3 veya 5 tablosunu kullanın: 15=3×5, yani 15×4 = 3×4×5 = 12×5 = 60",
        "0 veya 5 ile biten deseni takip edin: 15, 30, 45, 60, 75, 90...",
        "Bah­şiş hesaplama pratiği: %15 bah­şiş nasıl hesaplanır (10%+5%)",
        "15'in en kullanışlı katlarını ezberleyin: 15×4=60, 15×6=90, 15×8=120",
      ],
      16: [
        "İkiye katlama zinciri: Sayıyı ikiye katla (×2), tekrar (×4), tekrar (×8), tekrar (×16)",
        "8 tablosunu biliyorsanız her sonucu ikiye katlayın: 8×7=56, yani 16×7=112",
        "16×16=256'yı özel olarak ezberleyin (2⁸=256)",
        "Bilgisayar terimleriyle ilişkilendirin: 16 bit, onaltılık sistem",
        "16'erli sayın: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      17: [
        "20-3 stratejisini mükemmelleştirin: 17×n = 20n - 3n",
        "10+7 ayrıştırma: 17×6 = 60+42 = 102",
        "En zor ikilileri günlük pratik edin: 17×7=119, 17×8=136, 17×9=153",
        "17 yaşla ilişkilendirin: 17 yaşında ne olur, 34 yaşında ne olur (17×2)",
        "Sabırlı olun! 17 asal sayıdır, pratik gerektirir",
      ],
      18: [
        "9 veya 6 tablosunu kullanın: 18=2×9 veya 18=3×6",
        "9 tablosunu ikiye katlayın: 9×4=36, yani 18×4=72",
        "6 tablosunu üçe katlayın: 6×5=30, yani 18×5=90",
        "Reşit olma yaşıyla ilişkilendirin: 18, 36 (18×2), 54 (18×3)",
        "18'erli sayın: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      19: [
        "20-1 stratejisini her zaman kullanın: 19×n = 20n - n",
        "Örnek: 19×7 = 140-7 = 133. Çok basit ve etkili!",
        "10+9 ayrıştırma: 19×4 = 40+36 = 76",
        "En zor katları pratik edin: 19×7=133, 19×8=152, 19×9=171",
        "19 tablosunu geriye doğru öğrenin: 190, 171, 152, 133... zihinsel esneklik için",
      ],
      20: [
        "En kolay: 10 ile çarp, sonra ikiye katla",
        "Veya: Sonuna sıfır ekle, sonra ikiye katla (YANLIŞ yöntem! 7×20: 70 sonra ×2=140)",
        "Doğru yöntem: 7×10=70, 70×2=140 veya 7×2=14, sonuna 0 ekle: 140",
        "20'şerli hızlıca sayın: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Para ile pratik yapın: 20 lira banknotlarını sayın",
      ],
      21: [
        "20+1 stratejisini kullanın: 21×n = 20n + n",
        "3×7 ilişkisini kullanın: 3 tablosunu biliyor musunuz? 3×6=18, 7×6=42, yani 21×6=126",
        "En zor katları pratik edin: 21×7=147, 21×8=168, 21×9=189",
        "Yasal yaş ile ilişkilendirin: 21 yaşında neler değişir?",
        "21'erli sayın: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      22: [
        "11 tablosunu ezberleyin, sonra her sonucu ikiye katlayın",
        "Futbol takımı ile ilişkilendirin: 2 takım = 22 oyuncu",
        "En kolay katları önce: 22×5=110, 22×10=220",
        "22'şerli sayın: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "İlk 4 sonuçtaki çift basamak desenini gözlemleyin: 22, 44, 66, 88",
      ],
      23: [
        "20+3 stratejisini her zaman kullanın: 23×6 = 120+18 = 138",
        "Veya 25-2 stratejisi: 23×4 = 100-8 = 92",
        "Kromozom sayısı ile ilişkilendirin: İnsanlarda 23 çift kromozom var",
        "En zor katları günlük pratik edin: 23×7=161, 23×8=184, 23×9=207",
        "23 asal sayıdır, bu yüzden sabırlı olun ve çok pratik yapın",
      ],
      24: [
        "Saat ilişkisini kullanın: 24 saat×3 gün = 72 saat",
        "Çoklu yöntemler deneyin: 24=2×12, 3×8, 4×6. Hangisi daha kolay?",
        "12 tablosunu biliyorsanız ikiye katlayın: 12×7=84, yani 24×7=168",
        "Düzine sayma: 24 = 2 düzine. 24×5 = 10 düzine = 120",
        "24'erli sayın: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      25: [
        "Çeyrek sistemi: 25 = 100÷4. Yani 25×4=100, 25×8=200",
        "Son iki basamak desenini ezberleyin: 25, 50, 75, 00 tekrar eder",
        "Para ile pratik: 25 kuruş paralar sayın",
        "5'in karesi olduğunu hatırlayın: 25=5×5",
        "Yüzde hesaplama: 25% = 1/4. Bu ilişkiyi kullanın",
      ],
      26: [
        "13 tablosunu biliyorsanız ikiye katlayın: 13×8=104, yani 26×8=208",
        "25+1 stratejisi: 26×4 = 100+4 = 104",
        "Alfabe ile ilişkilendirin: 26 harf var",
        "26'şarlı sayın: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "En zor katları pratik edin: 26×7=182, 26×9=234",
      ],
      27: [
        "30-3 stratejisini kullanın: 27×n = 30n - 3n",
        "9 tablosunu biliyorsanız üçe katlayın: 9×6=54, yani 27×6=162",
        "3'ün küpü olduğunu hatırlayın: 27=3×3×3",
        "27'şerli sayın: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "En zor katları pratik edin: 27×7=189, 27×8=216, 27×9=243",
      ],
      28: [
        "4×7 ilişkisini kullanın: 4 tablosunu 7 ile çarpın",
        "Veya 14'ü ikiye katlayın: 14×5=70, yani 28×5=140",
        "Şubat ayı ile ilişkilendirin: 28 gün (normal yıl)",
        "28'erli sayın: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "En kullanışlı katları ezberleyin: 28×5=140, 28×7=196, 28×10=280",
      ],
      29: [
        "30-1 stratejisi MUKEMMELDİR: 29×n = 30n - n",
        "Örnek: 29×8 = 240-8 = 232. Çok kolay!",
        "Şubat artık yıl ile ilişkilendirin: 29 gün",
        "29'şarlı sayın: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "En zor katları pratik edin: 29×7=203, 29×9=261",
      ],
      30: [
        "3×10 stratejisi: 10 ile çarp, sonra 3 ile çarp",
        "Örnek: 7×30 = 70×3 = 210 veya 7×3=21, sonuna 0 ekle: 210",
        "Yarım saat ile ilişkilendirin: 30 dakika",
        "Ay günleri: Birçok ay 30 gün (Nisan, Haziran, Eylül, Kasım)",
        "30'arli sayın: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
    }
    return strategies[number] || [
      `Yüksek sesle ${number}'erli saymayı pratik edin`,
      "Tabloyu bir hafta boyunca her gün yazın",
      "Kendinizi rastgele test etmek için flash kartları kullanın",
      "Bir seferde uzun çalışmak yerine her gün 5-10 dakika pratik yapın",
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors[colorIndex]} pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Numbers - Multiplication Results */}
          {[1, 2, 3, 4, 5].map((multiplier, index) => (
            <div
              key={multiplier}
              className={`absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {number * multiplier}
            </div>
          ))}
          
          {/* Colorful Circles */}
          <div className="absolute top-20 right-[30%] w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-20 sm:w-28 h-20 sm:h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-28 sm:w-36 h-28 sm:h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Number Badge with Fun Icons */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-2xl sm:text-3xl">🔢</span>
              <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {number}
              </span>
              <span className="text-2xl sm:text-3xl">✖️</span>
            </div>
          </div>
          
          {/* Main Heading with Fun Elements */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">{number}</span>
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="text-slate-900">Çarpım Tablosu</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">İşlem</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Oyun</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Pratik</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Bu sayfa, <span className="font-semibold text-yellow-200">{number} çarpım tablosunu</span> öğrenmenize ve anlamanıza yardımcı olacaktır. 
              {number}'in çarpmada nasıl davrandığını keşfedecek, 
              <span className="font-semibold text-yellow-200"> desenlerini görecek</span> ve 
              ustalaşmak için <span className="font-semibold text-yellow-200">pratik yollar</span> öğreneceksiniz.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Pratik Yap</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Oyunları Keşfet</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Alıştırma İndir</span>
                <span className="sm:hidden">İndir</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Introduction - What This Table Covers */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl">📖</span>
              {number} Çarpım Tablosu Neyi Kapsar?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            {number} çarpım tablosu, {number} sayısının 1'den 10'a kadar olan tüm sayılarla çarpımını kapsar. 
            Bu size günlük hayatta ve ileri matematik konularında çok yardımcı olacak <span className="font-bold text-indigo-600">10 temel işlemi</span> öğretir.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((multiplier, index) => (
                <div key={multiplier} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="text-xs sm:text-sm text-slate-600 mb-1">{number} × {multiplier}</span>
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                    {number * multiplier}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">💡</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {number} çarpım tablosunda <span className="font-bold text-indigo-600">10 çarpma işlemi</span> var. 
                Bu tablodaki desenleri anlayarak, bu işlemleri kolayca ezberleyebilir ve hızlı bir şekilde hesaplayabilirsiniz!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Number Context & Meaning + Table Combined */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left: Explanation */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {number} Sayısı Çarpmada Ne Anlama Gelir?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Basit Açıklama</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {number} × 4 gördüğünüzde şunu düşünün: "4 grubum var ve her grupta {number} öğe var." 
                        Yani {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {number} Çarpım Tablosunu Öğrenmek Neden Önemlidir
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            {/* Right: Multiplication Table */}
            <div className="lg:sticky lg:top-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {number} Çarpım Tablosu
                </h2>
                
                {/* Print and Download Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Yazdır"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Yazdır</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="İndir"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">İndir</span>
                  </button>
                </div>
              </div>
              
              <div ref={tableRef} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}>
                <div className="space-y-1.5 sm:space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white/30 transition-colors">
                      <span className="font-medium text-sm sm:text-base">{number} × {i + 1}</span>
                      <span className="font-bold text-base sm:text-lg">= {number * (i + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            {number} Çarpım Tablosundaki Desenler
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Desenleri anlamak öğrenmeyi daha kolay ve eğlenceli hale getirir. {number} çarpım tablosu, 
            salt ezberleme yapmadan hatırlamanıza yardımcı olabilecek güzel desenlere sahiptir.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4 border-2 border-amber-100">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <div id="practice">
        <PracticePreview rangeStart={number} rangeEnd={number} />
      </div>

      {/* Interactive Games */}
      <div id="games">
        <NumberGames number={number} />
      </div>

      {/* Printable Worksheets */}
      <div id="worksheets">
        <PrintableExercises rangeStart={number} rangeEnd={number} />
      </div>

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            {number} Çarpım Tablosu Nasıl Pratik Yapılır
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Çarpım tablolarını öğrenmek doğru stratejilerle tutarlı pratik gerektirir. 
            İşte özellikle {number} çarpım tablosunda ustalaşmak için kanıtlanmış yöntemler:
          </p>
          
          <div className="grid gap-3 sm:gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5 sm:pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            {number} Tablosunu Öğrenirken Yapılan Yaygın Hatalar
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Birçok öğrenci bu tabloyu öğrenirken benzer hatalar yapar. Bu yaygın hataların 
            farkında olmak, onlardan kaçınmanıza ve daha verimli öğrenmenize yardımcı olacaktır.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Çözüm:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Multiplication Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            İlgili Çarpım Tabloları
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            {number} çarpım tablosu daha büyük bir öğrenme sisteminin parçasıdır. 
            Aynı aralıktaki diğer tabloları keşfedebilir veya bir sonraki mantıksal sayıya geçebilirsiniz.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/number/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Önceki Sayı</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number - 1} Çarpım Tablosu
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/number/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Sonraki Sayı →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number + 1} Çarpım Tablosu
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/${rangeStart}-to-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Üst Aralık</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    {rangeStart}'den {rangeEnd}'a Çarpım Tabloları
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Bu aralıktaki tüm çarpım tablolarını pratik araçları ve oyunlarla keşfedin
                  </p>
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
