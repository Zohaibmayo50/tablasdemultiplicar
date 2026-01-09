import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/31-40#webpage",
      "url": "https://tablasdemultiplicar.online/31-40",
      "name": "Tablas de Multiplicar del 31 al 40 - Nivel Intermedio",
      "description": "Aprende las tablas de multiplicar del 31 al 40. Recursos interactivos para desarrollar habilidades matemáticas de nivel intermedio.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/31-40#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/31-40#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 31 al 40",
      "description": "Tablas de multiplicar nivel intermedio: Aprende las tablas de multiplicar de los números del 31 al 40 con ejercicios prácticos.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 31 al 40",
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
  title: 'Tablas de Multiplicar del 31 al 40 | Multiplicación Avanzada',
  description: 'Aprende las tablas de multiplicar del 31, 32, 33, 34, 35, 36, 37, 38, 39, 40. Materiales educativos completos para habilidades de multiplicación avanzadas.',
  keywords: 'tablas de multiplicar del 31 al 40, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/31-40',
  },
}

export default function MultiplicationTable31to40() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={31}
        rangeEnd={40}
        prevRangeUrl="/21-30"
        nextRangeUrl="/41-50"
        difficultyLevel="intermediate"
        difficultyColor="from-orange-50 to-amber-50"
      />
    </>
  )
}
