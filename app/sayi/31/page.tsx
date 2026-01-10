import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/31#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/31",
      "name": "Tabla del 31",
      "description": "31 Ã§arpÄ±m tablosu ile ay gÃ¼nleri kavramÄ±nÄ± Ã¶ÄŸrenin. Asal sayÄ± Ã¶zellikleri ve zaman hesaplama.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/31#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/31#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/31#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-Tabla del 31"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/31", "name": "Tabla del 31"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/31#learningresource",
      "name": "Tabla del 31",
      "description": "31 ile Ã§arpma: Ay gÃ¼nleri (31 gÃ¼n), asal sayÄ± Ã¶zellikleri ve ileri Ã§arpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "31 Ã§arpÄ±m tablosu, ay gÃ¼nleri kavramÄ±, asal sayÄ±",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 31"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={31} rangeStart={31} rangeEnd={40} />
    </>
  )
}




