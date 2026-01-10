import NumberPage from '@/app/components/NumberPage'
import { Metadata } from 'next'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/100#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/100",
      "name": "Tabla del 100",
      "description": "100 Ã§arpÄ±m tablosu ile onluk sistem, yÃ¼zde hesaplamalarÄ± ve yer deÄŸeri kavramÄ±nda ustalaÅŸÄ±n. En Ã¶nemli Ã§arpÄ±m tablolarÄ±ndan biri.",
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/#website"
      },
      "about": {
        "@id": "https://tablasdemultiplicar.online/tabla/100#learningresource"
      },
      "breadcrumb": {
        "@id": "https://tablasdemultiplicar.online/tabla/100#breadcrumb"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/100#breadcrumb",
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
            "@id": "https://tablasdemultiplicar.online/91-100",
            "name": "91-Tabla del 100"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://tablasdemultiplicar.online/tabla/100",
            "name": "Tabla del 100"
          }
        }
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/100#learningresource",
      "name": "Tabla del 100",
      "description": "100 ile Ã§arpma: Onluk sistemin temeli, yer deÄŸeri kavramÄ±, yÃ¼zde hesaplamalarÄ± (100%=tam), sonuna iki sÄ±fÄ±r ekleme kuralÄ±. En kullanÄ±ÅŸlÄ± Ã§arpÄ±m tablolarÄ±ndan biri.",
      "educationalLevel": "Advanced",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "100 Ã§arpÄ±m tablosu, onluk sistem, yer deÄŸeri, yÃ¼zde hesaplama, 10'un karesi",
      "typicalAgeRange": "9-12",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application", "foundational concept"],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": ["student"]
      },
      "isPartOf": {
        "@id": "https://tablasdemultiplicar.online/91-100#learningresource"
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Tabla del 100"application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NumberPage number={100} rangeStart={91} rangeEnd={100} />
    </>
  )
}




