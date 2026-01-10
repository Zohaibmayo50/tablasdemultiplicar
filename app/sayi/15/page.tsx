import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/15#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/15",
      "name": "Tabla del 15",
      "description": "15 Ã§arpÄ±m tablosu ile Ã§eyrek saat ve zaman okumasÄ±nÄ± Ã¶ÄŸrenin. 3Ã—5 iliÅŸkisi ve pratik stratejilerle 15 ile Ã§arpma.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/15#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/15#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/15#breadcrumb",
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
            "name": "11-Tabla del 15"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/15",
            "name": "Tabla del 15"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/15#learningresource",
      "name": "Tabla del 15",
      "description": "15 ile Ã§arpma: Ã‡eyrek saat (15 dakika), 3Ã—5 iliÅŸkisi, 5'in son rakam deseni (5-0-5-0) ve saat okuma uygulamalarÄ±.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "15 Ã§arpÄ±m tablosu, Ã§eyrek saat kavramÄ±, saat okuma, 3 ve 5 tablolarÄ±nÄ±n iliÅŸkisi",
      "typicalAgeRange": "7-10",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
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
  title: 'Tabla del 15"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={15} rangeStart={11} rangeEnd={20} />
    </>
  )
}




