import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/84#webpage", "url": "https://tablasdemultiplicar.online/tabla/84", "name": "84 Tabla de Multiplicar", "description": "84 Tabla de Multiplicar Multiplicar por habilidades.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/84#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/84#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/84#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/81-90", "name": "81-90 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/84", "name": "84 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/84#learningresource", "name": "84 Tabla de Multiplicar", "description": "84 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactiy Resource", "Practice Material"], "teaches": "84 Tabla de Multiplicar", "typicalAgeRange": "10-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/81-90#learningresource"}}]}

export const metadata = {
  title: '84 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '84 Tabla de Multiplicarnu juegos divertidos y ejercicios interactivos aprende. Perfecto para niños!',
  keywords: '84 Tabla de Multiplicar, ochenta cuatro Tabla de Multiplicar, juegos de matemáticas, aprender tabla de multiplicar',
  alternates: {
    canonical: '/tabla/84',
  },
}

export default function Number84Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={84} rangeStart={81} rangeEnd={90} /></>)
}


