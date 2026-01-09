import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/61-70#webpage",
      "url": "https://tablasdemultiplicar.online/61-70",
      "name": "Tablas de Multiplicar del 61 al 70 - Nivel Avanzado",
      "description": "Aprende las tablas de multiplicar del 61 al 70. Recursos interactivos de aprendizaje para habilidades matemáticas de nivel avanzado.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/61-70#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/61-70#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 61 al 70",
      "description": "Tablas de multiplicar nivel avanzado: Aprende las tablas de multiplicar de los números del 61 al 70 con ejercicios prácticos.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 61 al 70",
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
  title: 'Tablas de Multiplicar del 61 al 70 | Números Altos',
  description: 'Aprende las tablas de multiplicar del 61 al 70. Recursos educativos completos para multiplicación con números altos.',
  keywords: 'tablas de multiplicar del 61 al 70, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/61-70',
  },
}

export default function MultiplicationTable61to70() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={61}
        rangeEnd={70}
        prevRangeUrl="/51-60"
        nextRangeUrl="/71-80"
        difficultyLevel="advanced"
        difficultyColor="from-cyan-50 to-blue-50"
      />
    </>
  )
}
