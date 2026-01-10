import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/22#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/22",
      "name": "Tabla del 22",
      "description": "22 Ã§arpÄ±m tablosu ile 2 ve 11 tablolarÄ±nÄ±n iliÅŸkisini Ã¶ÄŸrenin. Ã‡ift sayÄ± desenleri ve kolay Ã§arpma stratejileri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/22#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/22#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/22#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://tablasdemultiplicar.online/",
            "name": "Inicio"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://tablasdemultiplicar.online/21-30",
            "name": "21-Tabla del 22"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/22",
            "name": "Tabla del 22"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/22#learningresource",
      "name": "Tabla del 22",
      "description": "22 ile Ã§arpma: 2 ve 11 tablolarÄ±nÄ±n birleÅŸimi (2Ã—11=22), Ã§ift sayÄ± desenleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "22 Ã§arpÄ±m tablosu, 2Ã—11 iliÅŸkisi, Ã§ift sayÄ±lar",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/21-30#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: 'Tabla del 22"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={22} rangeStart={21} rangeEnd={30} />
    </>
  )
}




