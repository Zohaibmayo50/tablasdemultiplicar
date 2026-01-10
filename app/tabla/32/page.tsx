import NumberPage from '@/app/components/NumberPage'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tablasdemultiplicar.online/tabla/32#webpage",
      "url": "https://tablasdemultiplicar.online/tabla/32",
      "name": "Tabla del 32",
      "description": "32 Ã§arpÄ±m tablosu ile 2âµ=32 kavramÄ±nÄ± Ã¶ÄŸrenin. Ä°kinin kuvvetleri ve geometrik desenler.",
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"},
      "about": {"@id": "https://tablasdemultiplicar.online/tabla/32#learningresource"},
      "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/32#breadcrumb"},
      "inLanguage": "es-MX"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tablasdemultiplicar.online/tabla/32#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}},
        {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/31-40", "name": "31-Tabla del 32"}},
        {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/32", "name": "Tabla del 32"}}
      ]
    },
    {
      "@type": "LearningResource",
      "@id": "https://tablasdemultiplicar.online/tabla/32#learningresource",
      "name": "Tabla del 32",
      "description": "32 ile Ã§arpma: 2 Ã¼ssÃ¼ 5 (2âµ=32), ikinin kuvvetleri ve 4Ã—8 iliÅŸkisi.",
      "educationalLevel": "Intermediate",
      "learningResourceType": ["Interactive Resource", "Practice Material", "Educational Game"],
      "teaches": "32 Ã§arpÄ±m tablosu, 2âµ kavramÄ±, ikinin kuvvetleri",
      "typicalAgeRange": "8-11",
      "inLanguage": "es-MX",
      "educationalUse": ["practice", "self-study"],
      "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]},
      "isPartOf": {"@id": "https://tablasdemultiplicar.online/31-40#learningresource"}
    }
  ]
}

export const metadata = {
  title: 'Tabla del 32"application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <NumberPage number={32} rangeStart={31} rangeEnd={40} />
    </>
  )
}




