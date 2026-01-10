import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/50#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/50",
      "name": "Tabla del 50",
      "description": "50 Ã§arpÄ±m tablosu ile yarÄ±m (1/2) kavramÄ± ve yÃ¼zde hesaplamalarÄ±nÄ± Ã¶ÄŸrenin. 100'Ã¼n yarÄ±sÄ± olarak pratik hesaplama yÃ¶ntemleri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/50#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/50#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/50#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/41-50",
            "name": "41-Tabla del 50"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/50",
            "name": "Tabla del 50"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/50#learningresource",
      "name": "Tabla del 50",
      "description": "50 ile Ã§arpma: YarÄ±m (1/2) kavramÄ±, yÃ¼zde hesaplamalarÄ± (50%=1/2), 100'Ã¼n yarÄ±sÄ± stratejisi ve 5Ã—10 iliÅŸkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "50 Ã§arpÄ±m tablosu, yarÄ±m kavramÄ±, yÃ¼zde hesaplama, 5Ã—10 iliÅŸkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/41-50#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: 'Tabla del 50"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={50} rangeStart={41} rangeEnd={50} />
    </>
  )
}




