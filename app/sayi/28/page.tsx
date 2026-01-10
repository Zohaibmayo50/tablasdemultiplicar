import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/28#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/28",
      "name": "Tabla del 28",
      "description": "28 Ã§arpÄ±m tablosu ile 4Ã—7 iliÅŸkisini Ã¶ÄŸrenin. Hafta gÃ¼nleri ve ay kavramlarÄ± ile pratik uygulamalar.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/28#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/28#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/28#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-Tabla del 28"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/28", "name": "Tabla del 28"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/28#learningresource",
      "name": "Tabla del 28",
      "description": "28 ile Ã§arpma: 4 hafta=28 gÃ¼n, 4Ã—7 iliÅŸkisi ve zaman hesaplama becerileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "28 Ã§arpÄ±m tablosu, 4Ã—7 iliÅŸkisi, ay ve hafta kavramÄ±",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 28"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={28} rangeStart={21} rangeEnd={30} />
    </>
  )
}




