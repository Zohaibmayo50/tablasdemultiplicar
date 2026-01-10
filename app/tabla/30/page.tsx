import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/30#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/30",
      "name": "Tabla del 30",
      "description": "30 Ã§arpÄ±m tablosu ile yarÄ±m saat (30 dakika) ve ay kavramlarÄ±nÄ± Ã¶ÄŸrenin. 3Ã—10, 5Ã—6 iliÅŸkileri.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/30#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/30#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/30#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/21-30", "name": "21-Tabla del 30"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/30", "name": "Tabla del 30"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/30#learningresource",
      "name": "Tabla del 30",
      "description": "30 ile Ã§arpma: YarÄ±m saat (30 dakika), ay gÃ¼nleri (~30 gÃ¼n), 3Ã—10 ve 5Ã—6 Ã§arpan iliÅŸkileri.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "30 Ã§arpÄ±m tablosu, yarÄ±m saat kavramÄ±, 3Ã—10 ve 5Ã—6 iliÅŸkisi",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study", "real-world application"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/21-30#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 30"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={30} rangeStart={21} rangeEnd={30} />
    </>
  )
}




