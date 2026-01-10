import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/24#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/24",
      "name": "Tabla del 24",
      "description": "24 Ã§arpÄ±m tablosu ile 24 saat sistemi ve gÃ¼nlÃ¼k zaman hesaplamalarÄ±nÄ± Ã¶ÄŸrenin. 3Ã—8, 4Ã—6, 2Ã—12 iliÅŸkilerini keÅŸfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/24#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/24#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/24#breadcrumb",
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
            "name": "21-Tabla del 24"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/24",
            "name": "Tabla del 24"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/24#learningresource",
      "name": "Tabla del 24",
      "description": "24 ile Ã§arpma: 24 saat gÃ¼n sistemi, 3Ã—8, 4Ã—6, 2Ã—12 Ã§arpan iliÅŸkileri ve zaman hesaplama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "24 Ã§arpÄ±m tablosu, 24 saat sistemi, Ã§oklu Ã§arpan iliÅŸkileri",
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
  title: 'Tabla del 24"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={24} rangeStart={21} rangeEnd={30} />
    </>
  )
}




