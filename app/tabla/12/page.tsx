import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/12#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/12",
      "name": "Tabla del 12",
      "description": "12 Ã§arpÄ±m tablosu ile dÃ¼zine kavramÄ±nÄ± Ã¶ÄŸrenin. Saat sistemi ve gÃ¼nlÃ¼k hayatta sÄ±kÃ§a kullanÄ±lan 12 tablosunda ustalaÅŸÄ±n.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/12#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/12#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/12#breadcrumb",
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
            "name": "11-Tabla del 12"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/12",
            "name": "Tabla del 12"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/12#learningresource",
      "name": "Tabla del 12",
      "description": "12 ile Ã§arpma: DÃ¼zine kavramÄ±, saat sistemi (12 saat), 3Ã—4 iliÅŸkisi ve gÃ¼nlÃ¼k hayat uygulamalarÄ±.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "12 Ã§arpÄ±m tablosu, dÃ¼zine kavramÄ±, saat okuma, 3 ve 4 tablolarÄ±nÄ±n iliÅŸkisi",
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
  title: 'Tabla del 12"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={12} rangeStart={11} rangeEnd={20} />
    </>
  )
}




