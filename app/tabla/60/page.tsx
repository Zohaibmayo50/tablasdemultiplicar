import NumberPage from '@/app/components/NumberPage'

const schemaData = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage", "@id": "https://tablasdemultiplicar.online/tabla/60#webpage", "url": "https://tablasdemultiplicar.online/tabla/60", "name": "60 Tabla de Multiplicar", "description": "60 Tabla de Multiplicar Multiplicar por habilidades.", "isPartOf": {"@id": "https://tablasdemultiplicar.online/#website"}, "about": {"@id": "https://tablasdemultiplicar.online/tabla/60#learningresource"}, "breadcrumb": {"@id": "https://tablasdemultiplicar.online/tabla/60#breadcrumb"}, "inLanguage": "es-MX"}, {"@type": "BreadcrumbList", "@id": "https://tablasdemultiplicar.online/tabla/60#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "item": {"@id": "https://tablasdemultiplicar.online/", "name": "Inicio"}}, {"@type": "ListItem", "position": 2, "item": {"@id": "https://tablasdemultiplicar.online/51-60", "name": "51-60 Tabla de Multiplicar"}}, {"@type": "ListItem", "position": 3, "item": {"@id": "https://tablasdemultiplicar.online/tabla/60", "name": "60 Tabla de Multiplicar"}}]}, {"@type": "LearningResource", "@id": "https://tablasdemultiplicar.online/tabla/60#learningresource", "name": "60 Tabla de Multiplicar", "description": "60 Multiplicar por", "educationalLevel": "Advanced", "learningResourceType": ["Interactiy Resource", "Practice Material"], "teaches": "60 Tabla de Multiplicar", "typicalAgeRange": "9-12", "inLanguage": "es-MX", "educationalUse": ["practice"], "audience": {"@type": "EducationalAudience", "educationalRole": ["student"]}, "isPartOf": {"@id": "https://tablasdemultiplicar.online/51-60#learningresource"}}]}

export const metadata = {
  title: '60 Tabla de Multiplicar - Juegos Divertidos y Ejercicios Prácticos',
  description: '60 Tabla de Multiplicarnu juegos divertidos y ejercicios interactivos aprende. Perfecto para niños!',
  keywords: '60 Tabla de Multiplicar, sesenta Tabla de Multiplicar, juegos de matemáticas, aprender tabla de multiplicar',
  alternates: {
    canonical: '/tabla/60',
  },
}

export default function Number60Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><NumberPage number={60} rangeStart={51} rangeEnd={60} /></>)
}


