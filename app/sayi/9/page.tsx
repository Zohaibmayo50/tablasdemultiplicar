import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/9#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/9",
      "name": "Tabla del 9",
      "description": "9 Ã§arpÄ±m tablosu ile parmak triklerini ve basamak toplama sihirli kurallarÄ±nÄ± Ã¶ÄŸrenin. En eÄŸlenceli Ã§arpÄ±m tablosu desenlerini keÅŸfedin.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/9#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/9#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/9#breadcrumb",
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
            "name": "1-Tabla del 9"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/9",
            "name": "Tabla del 9"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/9#learningresource",
      "name": "Tabla del 9",
      "description": "9 ile Ã§arpma: Parmak trikleri, basamak toplama kuralÄ± (sonuÃ§larÄ±n rakamlarÄ± toplamÄ±=9), 10-1 iliÅŸkisi ve sihirli desenler.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "9 Ã§arpÄ±m tablosu, parmak trikeri, basamak toplama kuralÄ±, 3Â²=9",
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
  title: 'Tabla del 9"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={9} rangeStart={1} rangeEnd={10} />
    </>
  )
}




