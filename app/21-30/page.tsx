import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/21-30#webpage",
      "url": "https://tablasdemultiplicar.online/21-30",
      "name": "Tablas de Multiplicar del 21 al 30 - Nivel Intermedio",
      "description": "Aprende las tablas de multiplicar del 21 al 30. Ejercicios interactivos y materiales prácticos para estudiantes de nivel intermedio.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/21-30#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/21-30#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 21 al 30",
      "description": "Tablas de multiplicar nivel intermedio: Aprende las tablas de multiplicar de los números del 21 al 30 con ejercicios prácticos.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 21 al 30",
      "typicalAgeRange": "8-10",
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
  title: 'Tablas de Multiplicar del 21 al 30 | Nivel Intermedio',
  description: 'Aprende las tablas de multiplicar del 21 al 30. Explicaciones detalladas y ejercicios prácticos para estudiantes de nivel intermedio.',
  keywords: 'tablas de multiplicar del 21 al 30, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/21-30',
  },
}

export default function MultiplicationTable21to30() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={21}
        rangeEnd={30}
        prevRangeUrl="/11-20"
        nextRangeUrl="/31-40"
        difficultyLevel="intermediate"
        difficultyColor="from-purple-50 to-pink-50"
      />
    </>
  )
}
