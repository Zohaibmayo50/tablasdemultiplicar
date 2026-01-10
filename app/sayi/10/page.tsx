import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/10#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/10",
      "name": "Tabla del 10",
      "description": "10 Ã§arpÄ±m tablosu ile onluk sistem ve yer deÄŸeri kavramÄ±nÄ± Ã¶ÄŸrenin. En kolay Ã§arpÄ±m tablosu ile matematiÄŸin temelini anlayÄ±n.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/10#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/10#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/10#breadcrumb",
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
            "name": "1-Tabla del 10"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/10",
            "name": "Tabla del 10"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/10#learningresource",
      "name": "Tabla del 10",
      "description": "10 ile Ã§arpma: Onluk sistem temeli, yer deÄŸeri kavramÄ± ve sonuna sÄ±fÄ±r ekleme kuralÄ± ile en kolay Ã§arpÄ±m tablosu.",
      "educationalLevel": "Beginner",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "10 Ã§arpÄ±m tablosu, onluk sistem, yer deÄŸeri, sÄ±fÄ±r ekleme kuralÄ±",
      "typicalAgeRange": "6-9",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "foundational concept"],
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
  title: 'Tabla del 10"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={10} rangeStart={1} rangeEnd={10} />
    </>
  )
}




