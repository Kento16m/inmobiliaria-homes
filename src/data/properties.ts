export const propertyTypes = ['Departamento', 'Terreno', 'Prefabricada', 'Multifamiliar'] as const
export const propertyStatuses = ['En venta', 'En alquiler'] as const

export type PropertyType = (typeof propertyTypes)[number]
export type PropertyStatus = (typeof propertyStatuses)[number]

export interface Property {
  id: string
  title: string
  address: string
  city: string
  // USD. En alquiler es el valor mensual.
  price: number
  type: PropertyType
  status: PropertyStatus
  sqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  // null para terrenos
  yearBuilt: number | null
  description: string
  images: string[]
  lat: number
  lng: number
  // Nombre completo; coincide con Agent.name
  agent: string
  // Solo presentes en propiedades creadas desde el formulario
  furnished?: boolean
  elevator?: boolean
  floor?: number
}

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`

export const properties: Property[] = [
  {
    id: 'prop-01',
    title: 'Departamento moderno en Villa Morra',
    address: 'Av. San Martín 1450, Villa Morra',
    city: 'Asunción',
    price: 185000,
    type: 'Departamento',
    status: 'En venta',
    sqft: 1350,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    yearBuilt: 2021,
    description:
      'Departamento luminoso en un edificio con amenidades, a pasos de los principales centros comerciales. Cuenta con balcón, cocina integrada y dos cocheras cubiertas. Ideal para familias que buscan comodidad y seguridad.',
    images: [
      photo('1448630360428-65456885c650'),
      photo('1479839672679-a46483c0e7c8'),
      photo('1600607687939-ce8a6c25118c'),
    ],
    lat: -25.2951,
    lng: -57.5772,
    agent: 'Carlos Benítez',
  },
  {
    id: 'prop-02',
    title: 'Departamento con vista en Recoleta',
    address: 'Calle Cruz del Defensor 820, Recoleta',
    city: 'Asunción',
    price: 750,
    type: 'Departamento',
    status: 'En alquiler',
    sqft: 980,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    yearBuilt: 2018,
    description:
      'Departamento amoblado de dos dormitorios en una zona residencial tranquila y bien conectada. Incluye aire acondicionado en todos los ambientes y cochera. Disponible para contrato anual.',
    images: [
      photo('1602343168117-bb8ffe3e2e9f'),
      photo('1600585154526-990dced4db0d'),
      photo('1600210492486-724fe5c67fb0'),
    ],
    lat: -25.2918,
    lng: -57.6021,
    agent: 'Lorena Giménez',
  },
  {
    id: 'prop-03',
    title: 'Departamento céntrico en Fernando de la Mora',
    address: 'Av. Mariscal Estigarribia 2310, Zona Norte',
    city: 'Fernando de la Mora',
    price: 98000,
    type: 'Departamento',
    status: 'En venta',
    sqft: 860,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    yearBuilt: 2016,
    description:
      'Departamento de dos dormitorios cerca de colegios, supermercados y transporte público. Pisos de porcelanato y cocina equipada. Buena oportunidad para primera vivienda o inversión.',
    images: [
      photo('1600573472592-401b489a3cdc'),
      photo('1600047509807-ba8f99d2cdde'),
      photo('1593696140826-c58b021acf8b'),
    ],
    lat: -25.3182,
    lng: -57.5378,
    agent: 'Marcelo Ortiz',
  },
  {
    id: 'prop-04',
    title: 'Departamento de lujo en Lambaré',
    address: 'Av. Cacique Lambaré 540, Barrio Jardín',
    city: 'Lambaré',
    price: 620,
    type: 'Departamento',
    status: 'En alquiler',
    sqft: 790,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    yearBuilt: 2019,
    description:
      'Departamento moderno con terraza y vista despejada. Edificio con seguridad las 24 horas y salón de usos múltiples. Se alquila con garantía propietaria o seguro de caución.',
    images: [
      photo('1600566753190-17f0baa2a6c3'),
      photo('1600596542815-ffad4c1539a9'),
      photo('1600607687939-ce8a6c25118c'),
    ],
    lat: -25.3463,
    lng: -57.6049,
    agent: 'Valeria Acosta',
  },
  {
    id: 'prop-05',
    title: 'Terreno amplio en Luque',
    address: 'Ruta Luque - Limpio km 3, Barrio Jardín',
    city: 'Luque',
    price: 72000,
    type: 'Terreno',
    status: 'En venta',
    sqft: 10760,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    yearBuilt: null,
    description:
      'Terreno plano de 1.000 m² con frente a calle asfaltada y todos los servicios disponibles. Escritura al día y sin gravámenes. Apto para vivienda o emprendimiento comercial.',
    images: [
      photo('1599423300746-b62533397364'),
      photo('1565402170291-8491f14678db'),
      photo('1558036117-15d82a90b9b1'),
    ],
    lat: -25.2631,
    lng: -57.4789,
    agent: 'Diego Cabrera',
  },
  {
    id: 'prop-06',
    title: 'Lote en barrio cerrado de San Lorenzo',
    address: 'Calle Mcal. López 1120, Barcequillo',
    city: 'San Lorenzo',
    price: 48500,
    type: 'Terreno',
    status: 'En venta',
    sqft: 5380,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    yearBuilt: null,
    description:
      'Lote de 500 m² dentro de un barrio cerrado con vigilancia y áreas verdes. Cuenta con agua corriente, energía eléctrica y desagüe pluvial. Financiación disponible en cuotas.',
    images: [
      photo('1565402170291-8491f14678db'),
      photo('1558036117-15d82a90b9b1'),
      photo('1518780664697-55e3ad937233'),
    ],
    lat: -25.3502,
    lng: -57.5214,
    agent: 'Andrea Villalba',
  },
  {
    id: 'prop-07',
    title: 'Casa prefabricada con quincho en Luque',
    address: 'Calle Defensores del Chaco 365, Itapuami',
    city: 'Luque',
    price: 64500,
    type: 'Prefabricada',
    status: 'En venta',
    sqft: 1180,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    yearBuilt: 2022,
    description:
      'Casa prefabricada de tres dormitorios construida en madera tratada y estructura metálica. Incluye quincho con parrilla y amplio patio arbolado. Lista para habitar.',
    images: [
      photo('1518780664697-55e3ad937233'),
      photo('1570129477492-45c003edd2be'),
      photo('1572120360610-d971b9d7767c'),
    ],
    lat: -25.2702,
    lng: -57.4921,
    agent: 'Diego Cabrera',
  },
  {
    id: 'prop-08',
    title: 'Casa prefabricada en alquiler en San Lorenzo',
    address: 'Calle Dr. Francia 780, Ñu Guasu',
    city: 'San Lorenzo',
    price: 480,
    type: 'Prefabricada',
    status: 'En alquiler',
    sqft: 920,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    yearBuilt: 2020,
    description:
      'Casa prefabricada de dos dormitorios con galería cubierta y jardín. Cercana a la universidad y a paradas de colectivo. Se aceptan mascotas pequeñas.',
    images: [
      photo('1576941089067-2de3c901e126'),
      photo('1583608205776-bfd35f0d9f83'),
      photo('1475855581690-80accde3ae2b'),
    ],
    lat: -25.3356,
    lng: -57.5121,
    agent: 'Lorena Giménez',
  },
  {
    id: 'prop-09',
    title: 'Casa prefabricada con terreno en Lambaré',
    address: 'Calle Gral. Aquino 215, Valle Apua',
    city: 'Lambaré',
    price: 89000,
    type: 'Prefabricada',
    status: 'En venta',
    sqft: 1420,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    yearBuilt: 2023,
    description:
      'Vivienda prefabricada de tres dormitorios sobre un terreno de 360 m². Excelente aislación térmica y bajo costo de mantenimiento. A cinco minutos de la costanera.',
    images: [
      photo('1598228723793-52759bba239c'),
      photo('1592595896551-12b371d546d5'),
      photo('1572120360610-d971b9d7767c'),
    ],
    lat: -25.3504,
    lng: -57.6112,
    agent: 'Valeria Acosta',
  },
  {
    id: 'prop-10',
    title: 'Edificio multifamiliar en Sajonia',
    address: 'Calle Tte. Fariña 1675, Sajonia',
    city: 'Asunción',
    price: 420000,
    type: 'Multifamiliar',
    status: 'En venta',
    sqft: 4300,
    bedrooms: 8,
    bathrooms: 6,
    parking: 6,
    yearBuilt: 2015,
    description:
      'Edificio de cuatro unidades de dos dormitorios con renta asegurada y contratos vigentes. Excelente ubicación, a pocas cuadras del Jardín Botánico. Rentabilidad anual estimada del 8 %.',
    images: [
      photo('1523217582562-09d0def993a6'),
      photo('1600585154340-be6161a56a0c'),
      photo('1600607688969-a5bfcd646154'),
    ],
    lat: -25.2897,
    lng: -57.6203,
    agent: 'Carlos Benítez',
  },
  {
    id: 'prop-11',
    title: 'Complejo de dúplex en Fernando de la Mora',
    address: 'Calle Cerro Corá 410, Zona Sur',
    city: 'Fernando de la Mora',
    price: 265000,
    type: 'Multifamiliar',
    status: 'En venta',
    sqft: 3100,
    bedrooms: 6,
    bathrooms: 4,
    parking: 4,
    yearBuilt: 2019,
    description:
      'Complejo de dos dúplex independientes con patio compartido y acceso privado. Ambos están alquilados, lo que garantiza ingresos desde el primer día. Estructura en excelente estado.',
    images: [
      photo('1494526585095-c41746248156'),
      photo('1549517045-bc93de075e53'),
      photo('1564013799919-ab600027ffc6'),
    ],
    lat: -25.3269,
    lng: -57.5433,
    agent: 'Marcelo Ortiz',
  },
  {
    id: 'prop-12',
    title: 'Residencia multifamiliar con piscina en San Lorenzo',
    address: 'Av. Defensores del Chaco 2050, Reducto',
    city: 'San Lorenzo',
    price: 2400,
    type: 'Multifamiliar',
    status: 'En alquiler',
    sqft: 3650,
    bedrooms: 7,
    bathrooms: 5,
    parking: 4,
    yearBuilt: 2017,
    description:
      'Amplia residencia con tres unidades independientes, piscina y áreas de recreación compartidas. Se alquila completa, ideal para empresas o familias numerosas. Zona con excelente conectividad.',
    images: [
      photo('1613490493576-7fde63acd811'),
      photo('1580587771525-78b9dba3b914'),
      photo('1613977257363-707ba9348227'),
    ],
    lat: -25.3342,
    lng: -57.5039,
    agent: 'Andrea Villalba',
  },
]
