import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/25#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/25",
      "name": "Tabla del 25",
      "description": "25 Ã§arpÄ±m tablosu ile Ã§eyrek kavramÄ± ve yÃ¼zde hesaplamalarÄ±nÄ± Ã¶ÄŸrenin. Para hesaplama iÃ§in kritik Ã¶neme sahip desenleri keÅŸfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/25#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/25#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/25#breadcrumb",
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
            "name": "21-Tabla del 25"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/25",
            "name": "Tabla del 25"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/25#learningresource",
      "name": "Tabla del 25",
      "description": "25 ile Ã§arpma: Ã‡eyrek (1/4) kavramÄ±, yÃ¼zde hesaplamalarÄ± (25%=1/4), para hesaplama ve 25-50-75-00 son rakam deseni.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "25 Ã§arpÄ±m tablosu, Ã§eyrek kavramÄ±, yÃ¼zde hesaplama, para hesaplama, 5'in karesi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
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
  title: 'Tabla del 25"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={25} rangeStart={21} rangeEnd={30} />
    </>
  )
}




