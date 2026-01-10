import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/29#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/29",
      "name": "Tabla del 29",
      "description": "29 Ã§arpÄ±m tablosu ile asal sayÄ± Ã¶zelliklerini keÅŸfedin. Ä°leri seviye Ã§arpma becerileri geliÅŸtirin.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/29#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/29#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/29#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-Tabla del 29"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/29", "name": "Tabla del 29"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/29#learningresource",
      "name": "Tabla del 29",
      "description": "29 ile Ã§arpma: Asal sayÄ± Ã¶zellikleri ve ileri dÃ¼zey Ã§arpma pratikleri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "29 Ã§arpÄ±m tablosu, asal sayÄ± kavramÄ±, ileri Ã§arpma",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 29"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={29} rangeStart={21} rangeEnd={30} />
    </>
  )
}




