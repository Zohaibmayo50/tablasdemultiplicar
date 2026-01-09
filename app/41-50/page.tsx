import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/41-50#webpage",
      "url": "https://tablasdemultiplicar.online/41-50",
      "name": "Tablas de Multiplicar del 41 al 50 - Nivel Intermedio",
      "description": "Aprende las tablas de multiplicar del 41 al 50. Materiales educativos completos para desarrollar habilidades matemáticas de nivel intermedio.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/41-50#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/41-50#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 41 al 50",
      "description": "Tablas de multiplicar nivel intermedio: Aprende las tablas de multiplicar de los números del 41 al 50 con ejercicios prácticos.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 41 al 50",
      "typicalAgeRange": "8-11",
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
  title: 'Tablas de Multiplicar del 41 al 50 | Nivel Intermedio-Avanzado',
  description: 'Aprende las tablas de multiplicar del 41 al 50. Ejercicios interactivos para dominar la multiplicación con números grandes.',
  keywords: 'tablas de multiplicar del 41 al 50, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/41-50',
  },
}

export default function MultiplicationTable41to50() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={41}
        rangeEnd={50}
        nextRangeUrl="/51-60"
        prevRangeUrl="/31-40"
        difficultyLevel="intermediate"
        difficultyColor="from-rose-50 to-red-50"
      />
    </>
  )
}
