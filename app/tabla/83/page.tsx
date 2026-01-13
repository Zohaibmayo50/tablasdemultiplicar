import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/83#webpage", "url": "https://tablasdemultiplicar.online/tabla/83", "name": "83 Tabla de Multiplicar", "description": "83 Tabla de Multiplicar Multiplicar por habilidades.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/83#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/83#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/83#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/81-90", "name": "81-90 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/83", "name": "83 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/83#learningresource", "name": "83 Tabla de Multiplicar", "description": "83 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactiy Resource", "Practice Material"], "teaches": "83 Tabla de Multiplicar", "typicalAgeRange": "10-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/81-90#learningresource"}}]}

export const metadata = {
  title: '83 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '83 Tabla de Multiplicarnu juegos divertidos y ejercicios interactivos aprende. Perfecto para niños!',
  keywords: '83 Tabla de Multiplicar, ochenta tres Tabla de Multiplicar, juegos de matemáticas, aprender tabla de multiplicar',
  alternates: {
    canonical: '/tabla/83',
  },
}

export default function Number83Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={83} rangeStart={81} rangeEnd={90} /></>)
}


