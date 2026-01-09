import RangePage from '../components/RangePage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/1-10#webpage",
      "url": "https://tablasdemultiplicar.online/1-10",
      "name": "Tablas de Multiplicar del 1 al 10 - Nivel Principiante",
      "description": "Aprende las tablas de multiplicar del 1 al 10. Ideal para nivel principiante, con ejercicios interactivos y juegos educativos.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/1-10#learningresource"
      },
      "inLanguage": "es"
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/1-10#learningresource",
      "name": "Recurso de Aprendizaje Tablas del 1 al 10",
      "description": "Tablas de multiplicar nivel principiante: Aprende las tablas de multiplicar de los números del 1 al 10 con ejercicios prácticos, juegos interactivos y hojas de trabajo imprimibles.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "Habilidades para comprender y aplicar las tablas de multiplicar del 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
      "typicalAgeRange": "6-8",
      "inLanguage": "es",
      "educationalUse": ["practice", "self-study", "homework"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "hasPart": [
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 1", "url": "https://tablasdemultiplicar.online/tabla/1"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 2", "url": "https://tablasdemultiplicar.online/tabla/2"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 3", "url": "https://tablasdemultiplicar.online/tabla/3"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 4", "url": "https://tablasdemultiplicar.online/tabla/4"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 5", "url": "https://tablasdemultiplicar.online/tabla/5"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 6", "url": "https://tablasdemultiplicar.online/tabla/6"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 7", "url": "https://tablasdemultiplicar.online/tabla/7"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 8", "url": "https://tablasdemultiplicar.online/tabla/8"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 9", "url": "https://tablasdemultiplicar.online/tabla/9"},
        {"@type": "LearningResource", "name": "Tabla de Multiplicar del 10", "url": "https://tablasdemultiplicar.online/tabla/10"}
      ]
    }
  ]
}


export const metadata = {
  title: 'Tablas de Multiplicar del 1 al 10 | Nivel Principiante',
  description: 'Aprende las tablas de multiplicar del 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Explicaciones fáciles para nivel principiante, ejemplos visuales y ejercicios prácticos.',
  keywords: 'tablas de multiplicar del 1 al 10, tablas de multiplicar, multiplicación, aprendizaje de matemáticas',
  alternates: {
    canonical: '/1-10',
  },
}

export default function MultiplicationTable1to10() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RangePage
        rangeStart={1}
        rangeEnd={10}
        nextRangeUrl="/11-20"
        difficultyLevel="beginner"
        difficultyColor="from-blue-50 to-indigo-50"
      />
    </>
  )
}
