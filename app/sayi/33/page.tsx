import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/33#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/33",
      "name": "Tabla del 33",
      "description": "33 Ã§arpÄ±m tablosu ile 3Ã—11 iliÅŸkisini Ã¶ÄŸrenin. Basamak desenleri ve Ã§arpma stratejileri.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/33#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/33#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/33#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-Tabla del 33"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/33", "name": "Tabla del 33"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/33#learningresource",
      "name": "Tabla del 33",
      "description": "33 ile Ã§arpma: 3 ve 11 tablolarÄ±nÄ±n birleÅŸimi (3Ã—11=33), Ã§ift basamak desenleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "33 Ã§arpÄ±m tablosu, 3Ã—11 iliÅŸkisi, basamak desenleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 33"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={33} rangeStart={31} rangeEnd={40} />
    </>
  )
}




