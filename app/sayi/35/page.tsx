import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/35#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/35",
      "name": "Tabla del 35",
      "description": "35 Ã§arpÄ±m tablosu ile 5Ã—7 iliÅŸkisini Ã¶ÄŸrenin. Hafta ve beÅŸlik sistem baÄŸlantÄ±larÄ±.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/35#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/35#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/35#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-Tabla del 35"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/35", "name": "Tabla del 35"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/35#learningresource",
      "name": "Tabla del 35",
      "description": "35 ile Ã§arpma: 5Ã—7 iliÅŸkisi, beÅŸlik ve yedilik sistem baÄŸlantÄ±larÄ±, pratik uygulamalar.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "35 Ã§arpÄ±m tablosu, 5Ã—7 iliÅŸkisi, hafta-beÅŸlik baÄŸlantÄ±sÄ±",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 35"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={35} rangeStart={31} rangeEnd={40} />
    </>
  )
}




