import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/51-60#webpage",
      "url": "https://tablasdemultiplicar.online/51-60",
      "name": "Tablas de Multiplicar del 51 al 60 - Nivel Avanzado",
      "description": "Aprende las tablas de multiplicar del 51 al 60. Prácticas de multiplicación con números grandes para estudiantes de nivel avanzado.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/51-60#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/51-60#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 51 al 60",
      "description": "Tablas de multiplicar nivel avanzado: Aprende las tablas de multiplicar de los números del 51 al 60 con ejercicios prácticos.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 51 al 60",
      "typicalAgeRange": "9-12",
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
  title: 'Tablas de Multiplicar del 51 al 60 | Nivel Avanzado',
  description: 'Aprende las tablas de multiplicar del 51, 52, 53, 54, 55, 56, 57, 58, 59, 60. Materiales de estudio detallados para estudiantes de nivel avanzado.',
  keywords: 'tablas de multiplicar del 51 al 60, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/51-60',
  },
}

export default function MultiplicationTable51to60() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={51}
        rangeEnd={60}
        prevRangeUrl="/41-50"
        nextRangeUrl="/61-70"
        difficultyLevel="advanced"
        difficultyColor="from-violet-50 to-purple-50"
      />
    </>
  )
}
