import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/8#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/8",
      "name": "Tabla del 8",
      "description": "8 Ã§arpÄ±m tablosu ile ikiye ve dÃ¶rdÃ¼ne katlama tekniklerini Ã¶ÄŸrenin. 2Ã—2Ã—2 iliÅŸkisi ve sekizgen kavramÄ±nÄ± keÅŸfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/8#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/8#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/8#breadcrumb",
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
            "name": "1-Tabla del 8"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/8",
            "name": "Tabla del 8"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/8#learningresource",
      "name": "Tabla del 8",
      "description": "8 ile Ã§arpma: 4 tablosunu ikiye katlama (4Ã—2=8), sekizli sayma ve 2Ã¼n kuvvetleri (2Â³=8).",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "8 Ã§arpÄ±m tablosu, sekizli sayma, ikiye katlama, 2â€™nin kuvvetleri",
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
  title: 'Tabla del 8"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={8} rangeStart={1} rangeEnd={10} />
    </>
  )
}




