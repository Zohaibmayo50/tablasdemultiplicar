import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/71-80#webpage",
      "url": "https://tablasdemultiplicar.online/71-80",
      "name": "Tabla del 71 al 80 - Nivel Avanzado",
      "description": "Aprende las tablas de multiplicar del 71 al 80. Recursos completos para habilidades de multiplicación de nivel avanzado con números grandes.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/71-80#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/71-80#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 71 al 80",
      "description": "Tablas de multiplicar de nivel avanzado: aprende las tablas del 71 al 80 con ejercicios prácticos.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Comprensión y aplicación de las tablas de multiplicar del 71 al 80",
      "typicalAgeRange": "10-12",
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
  title: 'Tabla del 71 al 80 | Multiplicación Nivel Avanzado',
  description: 'Aprende las tablas de multiplicar del 71, 72, 73, 74, 75, 76, 77, 78, 79, 80. Desarrolla habilidades matemáticas de nivel avanzado.',
  keywords: 'tablas de multiplicar del 71 al 80, tablas de multiplicar, multiplicación, aprender matemáticas',
  alternates: {
    canonical: '/71-80',
  },
}

export default function MultiplicationTable71to80() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={71}
        rangeEnd={80}
        prevRangeUrl="/61-70"
        nextRangeUrl="/81-90"
        difficultyLevel="advanced"
        difficultyColor="from-lime-50 to-green-50"
      />
    </>
  )
}
