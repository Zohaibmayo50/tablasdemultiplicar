import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/16#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/16",
      "name": "16 Tabla de Multiplicar - Kare Sayı İlişkisi",
      "description": "16 Tabla de Multiplicar con kare sayı concepto aprende. 4×4=16 relación y kolay stratejilerle 16 Multiplicar por.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/16#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/16#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/16#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://tablasdemultiplicar.online/",
            "name": "Inicio"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://tablasdemultiplicar.online/11-20",
            "name": "11-20 Tabla de Multiplicar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/16",
            "name": "16 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/16#learningresource",
      "name": "16 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "16 Multiplicar por: 4'ün karesi (4×4=16), dosli katlar (8×2), çift sayı patrones y geometrik uygulamalar.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactiy Resource", "Practice Material", "Educational Game"],
      "teaches": "16 Tabla de Multiplicar, números cuadrados, 4 tablanun múltiplos",
      "typicalAgeRange": "7-10",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: '16 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '16 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '16 Tabla de Multiplicar, on seis Tabla de Multiplicar, 16 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/16',
  },
}

export default function Number16Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={16} rangeStart={11} rangeEnd={20} />
    </>
  )
}


