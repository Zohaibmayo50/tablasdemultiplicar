import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/18#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/18",
      "name": "Tabla del 18",
      "description": "18 Ã§arpÄ±m tablosu ile Ã§arpma becerilerinizi gÃ¼Ã§lendirin. 9Ã—2 ve 6Ã—3 iliÅŸkileri ile 18 ile Ã§arpma stratejileri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/18#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/18#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/18#breadcrumb",
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
            "name": "11-Tabla del 18"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/18",
            "name": "Tabla del 18"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/18#learningresource",
      "name": "Tabla del 18",
      "description": "18 ile Ã§arpma: 9Ã—2 ve 6Ã—3 iliÅŸkisi, Ã§ift sayÄ± desenleri, rakamlar toplamÄ± 9'un katÄ± kuralÄ±.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "18 Ã§arpÄ±m tablosu, 9 ve 6 tablolarÄ±nÄ±n iliÅŸkisi, 9'un katlarÄ± kuralÄ±",
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
  title: 'Tabla del 18"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={18} rangeStart={11} rangeEnd={20} />
    </>
  )
}




