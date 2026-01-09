import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/91-100#webpage",
      "url": "https://tablasdemultiplicar.online/91-100",
      "name": "Tablas de Multiplicar del 91 al 100 - Nivel Avanzado",
      "description": "Aprende las tablas de multiplicar del 91 al 100. Recursos educativos completos para las tablas de multiplicar de nivel más avanzado.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/91-100#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/91-100#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 91 al 100",
      "description": "Tablas de multiplicar de nivel más avanzado: Aprende las tablas de multiplicar de los números del 91 al 100 con ejercicios prácticos. Completa tus habilidades de multiplicación con la tabla del 100.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 91 al 100",
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
  title: 'Tablas de Multiplicar del 91 al 100 | Nivel Más Alto',
  description: 'Aprende las tablas de multiplicar del 91, 92, 93, 94, 95, 96, 97, 98, 99, 100. Educación completa para habilidades de multiplicación de nivel más alto.',
  keywords: 'tablas de multiplicar del 91 al 100, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/91-100',
  },
}

export default function MultiplicationTable91to100() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={91}
        rangeEnd={100}
        prevRangeUrl="/81-90"
        difficultyLevel="advanced"
        difficultyColor="from-indigo-50 to-purple-50"
      />
    </>
  )
}
