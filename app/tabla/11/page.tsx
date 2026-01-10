import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/11#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/11",
      "name": "Tabla del 11",
      "description": "11 Ã§arpÄ±m tablosu ile iki basamaklÄ± sayÄ±lara geÃ§iÅŸ yapÄ±n. Kolay desen ve stratejilerle 11 ile Ã§arpma iÅŸlemini Ã¶ÄŸrenin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/11#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/11#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/11#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/11-20",
            "name": "11-Tabla del 11"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/11",
            "name": "Tabla del 11"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/11#learningresource",
      "name": "Tabla del 11",
      "description": "11 ile Ã§arpma: Ä°ki basamaklÄ± sayÄ±lara giriÅŸ, rakam tekrarÄ± deseni (11Ã—2=22, 11Ã—3=33), kolay ezber stratejileri.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "11 Ã§arpÄ±m tablosu, iki basamaklÄ± sayÄ±lar, rakam desenleri",
      "typicalAgeRange": "7-10",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/11-20#learningresource"
      }
    }
  ]
}

export const metadata = {
  title: 'Tabla del 11"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={11} rangeStart={11} rangeEnd={20} />
    </>
  )
}




