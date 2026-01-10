import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/34#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/34",
      "name": "Tabla del 34",
      "description": "34 Ã§arpÄ±m tablosu ile 2Ã—17 iliÅŸkisini Ã¶ÄŸrenin. Ã‡ift sayÄ± desenleri ve Ã§arpma becerileri.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/34#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/34#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/34#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-Tabla del 34"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/34", "name": "Tabla del 34"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/34#learningresource",
      "name": "Tabla del 34",
      "description": "34 ile Ã§arpma: 2Ã—17 iliÅŸkisi, Ã§ift sayÄ± Ã¶zellikleri ve ikiye katlama.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "34 Ã§arpÄ±m tablosu, 2Ã—17 iliÅŸkisi, Ã§ift sayÄ±lar",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 34"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={34} rangeStart={31} rangeEnd={40} />
    </>
  )
}




