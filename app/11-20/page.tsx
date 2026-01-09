import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/11-20#webpage",
      "url": "https://tablasdemultiplicar.online/11-20",
      "name": "Tablas de Multiplicar del 11 al 20 - Nivel Intermedio",
      "description": "Aprende las tablas de multiplicar del 11 al 20. Ejercicios interactivos y juegos para la multiplicación con números de dos dígitos.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/11-20#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/11-20#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 11 al 20",
      "description": "Multiplicación con números de dos dígitos: Aprende las tablas de multiplicar de los números del 11 al 20 con ejercicios prácticos y juegos interactivos.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
      "typicalAgeRange": "7-10",
      "inLanguage": "es",
      "educationalUse": ["practice", "self-study", "homework"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      }
    }
  ]
}


export const metadata = {
  title: 'Tablas de Multiplicar del 11 al 20 | Números de Dos Dígitos',
  description: 'Aprende las tablas de multiplicar del 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Domina las operaciones de multiplicación con números de dos dígitos.',
  keywords: 'tablas de multiplicar del 11 al 20, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/11-20',
  },
}

export default function MultiplicationTable11to20() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={11}
        rangeEnd={20}
        nextRangeUrl="/21-30"
        prevRangeUrl="/1-10"
        difficultyLevel="intermediate"
        difficultyColor="from-yellow-50 to-orange-50"
      />
    </>
  )
}
