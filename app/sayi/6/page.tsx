import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/6#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/6",
      "name": "Tabla del 6",
      "description": "6 Ã§arpÄ±m tablosu ile altÄ±ÅŸar sayma Ã¶ÄŸrenin. 2Ã—3 ve 3Ã—2 iliÅŸkileri ile geometrik desenleri keÅŸfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/6#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/6#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/6#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/1-10",
            "name": "1-Tabla del 6"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/6",
            "name": "Tabla del 6"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/6#learningresource",
      "name": "Tabla del 6",
      "description": "6 ile Ã§arpma: 2 ve 3 tablolarÄ±nÄ±n birleÅŸimi (2Ã—3), altÄ±ÅŸar sayma ve Ã§ift sayÄ± desenleri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "6 Ã§arpÄ±m tablosu, altÄ±ÅŸar sayma, 2 ve 3 tablolarÄ±nÄ±n iliÅŸkisi",
      "typicalAgeRange": "6-9",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/1-10#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: 'Tabla del 6"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={6} rangeStart={1} rangeEnd={10} />
    </>
  )
}




