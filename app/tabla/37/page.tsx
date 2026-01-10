import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/37#webpage", "url": "https://tablasdemultiplicar.online/tabla/37", "name": "Tabla del 37", "description": "37 Ã§arpÄ±m tablosu ile asal sayÄ± Ã¶zelliklerini keÅŸfedin. Ä°leri seviye Ã§arpma becerileri.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/37#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/37#breadcrumb"}, "inLanguage": "es-MX"},
    {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/37#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-Tabla del 37"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/37", "name": "Tabla del 37"}}]},
    {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/37#learningresource", "name": "Tabla del 37", "description": "37 ile Ã§arpma: Asal sayÄ± Ã¶zellikleri ve ileri dÃ¼zey Ã§arpma pratikleri.", "educationalLevel": "Intermediate", "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"], "teaches": "37 Ã§arpÄ±m tablosu, asal sayÄ± kavramÄ±", "typicalAgeRange": "8-11", "inLanguage": "es-MX", "educationalUse": ["practice", "self-study"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}}
  ]
}

export const metadata = {
  title: 'Tabla del 37"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={37} rangeStart={31} rangeEnd={40} />
    </>
  )
}




