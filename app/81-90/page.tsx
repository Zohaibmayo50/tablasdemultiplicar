import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/81-90#webpage",
      "url": "https://tablasdemultiplicar.online/81-90",
      "name": "Tabla del 81 al 90 - Nivel Avanzado",
      "description": "Aprende las tablas de multiplicar del 81 al 90. Materiales interactivos para desarrollar habilidades matemáticas de nivel avanzado.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/81-90#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/81-90#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 81 al 90",
      "description": "Tablas de multiplicar de nivel avanzado: aprende las tablas del 81 al 90 con ejercicios prácticos.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Comprensión y aplicación de las tablas de multiplicar del 81 al 90",
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
  title: 'Tabla del 81 al 90 | Nivel Experto',
  description: 'Aprende las tablas de multiplicar del 81 al 90. Operaciones de multiplicación desafiantes y estrategias para estudiantes de nivel experto.',
  keywords: 'tablas de multiplicar del 81 al 90, tablas de multiplicar, multiplicación, aprender matemáticas',
  alternates: {
    canonical: '/81-90',
  },
}

export default function MultiplicationTable81to90() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={81}
        rangeEnd={90}
        nextRangeUrl="/91-100"
        prevRangeUrl="/71-80"
        difficultyLevel="advanced"
        difficultyColor="from-fuchsia-50 to-pink-50"
      />
    </>
  )
}
