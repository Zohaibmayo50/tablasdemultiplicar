import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/27#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/27",
      "name": "Tabla del 27",
      "description": "27 Ã§arpÄ±m tablosu ile 3Â³=27 kÃ¼p kavramÄ±nÄ± Ã¶ÄŸrenin. 3Ã—9 iliÅŸkisi ve geometrik desenler.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/27#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/27#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/27#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-Tabla del 27"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/27", "name": "Tabla del 27"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/27#learningresource",
      "name": "Tabla del 27",
      "description": "27 ile Ã§arpma: 3 kÃ¼p (3Â³=27), 3Ã—9 iliÅŸkisi ve ileri seviye Ã§arpma becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "27 Ã§arpÄ±m tablosu, 3 kÃ¼p kavramÄ±, 3Ã—9 iliÅŸkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 27"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={27} rangeStart={21} rangeEnd={30} />
    </>
  )
}




