import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/17#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/17",
      "name": "17 Tabla de Multiplicar - Número Primo Keşfi",
      "description": "17 Tabla de Multiplicar con número primo concepto descubre. Zihinsel matemáticas y pratik stratejilerle 17 Multiplicar por.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/17#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/17#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/17#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/tabla/17",
            "name": "17 Tabla de Multiplicar"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/17#learningresource",
      "name": "17 Tabla de Multiplicar Recurso de Aprendizaje",
      "description": "17 Multiplicar por: Asal sayı características, 10+7 ayrıştırma estrategia, zihinsel matemáticas teknikleri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactiy Resource", "Practice Material", "Educational Game"],
      "teaches": "17 Tabla de Multiplicar, número primolar, zihinsel matemáticas",
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
  title: '17 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '17 Tabla de Multiplicar con juegos divertidos y ejercicios interactivos. Ayudas visuales para niños, consejos prácticos y técnicas fáciles de memorización.',
  keywords: '17 Tabla de Multiplicar, on siete Tabla de Multiplicar, 17 Multiplicar por, Tabla de Multiplicar aprendizaje de tablas de multiplicar, juegos de matemáticas',
  alternates: {
    canonical: '/tabla/17',
  },
}

export default function Number17Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={17} rangeStart={11} rangeEnd={20} />
    </>
  )
}


