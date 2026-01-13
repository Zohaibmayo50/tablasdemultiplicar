import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/65#webpage", "url": "https://tablasdemultiplicar.online/tabla/65", "name": "65 Tabla de Multiplicar", "description": "65 Tabla de Multiplicar Multiplicar por habilidades.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/65#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/65#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/65#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/61-70", "name": "61-70 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/65", "name": "65 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/65#learningresource", "name": "65 Tabla de Multiplicar", "description": "65 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactiy Resource", "Practice Material"], "teaches": "65 Tabla de Multiplicar", "typicalAgeRange": "9-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/61-70#learningresource"}}]}

export const metadata = {
  title: '65 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '65 Tabla de Multiplicarnu juegos divertidos y ejercicios interactivos aprende. Perfecto para niños!',
  keywords: '65 Tabla de Multiplicar, sesenta cinco Tabla de Multiplicar, juegos de matemáticas, aprender tabla de multiplicar',
  alternates: {
    canonical: '/tabla/65',
  },
}

export default function Number65Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={65} rangeStart={61} rangeEnd={70} /></>)
}


