export interface Strings {
  brand: string
  nav: {
    sectionTitle: string
    openMenu: string
    closeMenu: string
  }
  topbar: {
    searchPlaceholder: string
    notifications: string
    userRole: string
  }
  menu: {
    dashboard: string
    properties: string
    projects: string
    leads: string
    contracts: string
    calendar: string
    activities: string
    contacts: string
    brokers: string
    documents: string
  }
  pages: {
    propertyDetail: string
    newProperty: string
  }
  common: {
    yes: string
    no: string
    previous: string
    next: string
    goToPage: (page: string) => string
    showing: (from: string, to: string, total: string) => string
  }
  propertyTypes: {
    apartment: string
    land: string
    manufactured: string
    multifamily: string
  }
  listingStatus: {
    forSale: string
    forRent: string
  }
  property: {
    perMonth: string
    sqft: (value: string) => string
    bedrooms: (count: number) => string
    bathrooms: (count: number) => string
  }
  propertiesPage: {
    viewGrid: string
    viewMap: string
    mapPlaceholder: string
    empty: string
  }
  propertyForm: {
    name: string
    namePlaceholder: string
    address: string
    addressPlaceholder: string
    city: string
    cityPlaceholder: string
    price: string
    pricePlaceholder: string
    photos: string
    addPhoto: string
    removePhoto: string
    photoAlt: (index: number) => string
    description: string
    descriptionPlaceholder: string
    exclusiveDetails: string
    listing: string
    sell: string
    rent: string
    furnishing: string
    furnished: string
    unfurnished: string
    elevator: string
    parking: string
    type: string
    area: string
    bedrooms: string
    bathrooms: string
    floor: string
    decrease: string
    increase: string
    errors: {
      required: string
      invalidPrice: string
      invalidNumber: string
      photosRequired: string
    }
  }
  propertyDetail: {
    back: string
    notFoundTitle: string
    notFoundText: string
    details: string
    detailsSubtitle: string
    specifications: string
    propertyType: string
    status: string
    yearBuilt: string
    parking: string
    area: string
    bedrooms: string
    bathrooms: string
    city: string
    pricePerSqft: string
    reference: string
    assignedAgent: string
    furnished: string
    elevator: string
    floor: string
    location: string
    notApplicable: string
    noParking: string
    parkingSpots: (count: number) => string
    thumbnail: (index: number) => string
    emailSubject: (title: string) => string
  }
  actions: {
    addProperty: string
    filters: string
    generateEmail: string
    brochure: string
    save: string
    cancel: string
  }
  styleguide: {
    title: string
    colors: string
    typography: string
    sample: string
    groups: Record<'primary' | 'secondary' | 'danger' | 'gray' | 'extra', string>
    components: {
      title: string
      buttons: string
      badges: string
      card: string
      form: string
      tabs: string
      pagination: string
      stats: string
      avatar: string
      small: string
      disabled: string
      cardText: string
      inputLabel: string
      inputPlaceholder: string
      inputError: string
      inputErrorMessage: string
      selectLabel: string
      statusAssigned: string
      statusWon: string
      statusLost: string
      statusDraft: string
      statLeads: string
      statProperties: string
      statSales: string
    }
  }
}

export type MenuKey = keyof Strings['menu']

export const strings: Strings = {
  brand: 'SwiftProp',
  nav: {
    sectionTitle: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  topbar: {
    searchPlaceholder: 'Buscar propiedades, prospectos, contratos',
    notifications: 'Notificaciones',
    userRole: 'Agente administrador',
  },
  menu: {
    dashboard: 'Panel',
    properties: 'Propiedades',
    projects: 'Proyectos',
    leads: 'Prospectos',
    contracts: 'Contratos',
    calendar: 'Calendario',
    activities: 'Actividades',
    contacts: 'Contactos y Org.',
    brokers: 'Corredores y Agentes',
    documents: 'Documentos',
  },
  pages: {
    propertyDetail: 'Detalle de propiedad',
    newProperty: 'Agregar propiedad',
  },
  common: {
    yes: 'Sí',
    no: 'No',
    previous: 'Anterior',
    next: 'Siguiente',
    goToPage: (page) => `Ir a la página ${page}`,
    showing: (from, to, total) => `Mostrando ${from}-${to} de ${total}`,
  },
  propertyTypes: {
    apartment: 'Departamento',
    land: 'Terreno',
    manufactured: 'Prefabricada',
    multifamily: 'Multifamiliar',
  },
  listingStatus: {
    forSale: 'En venta',
    forRent: 'En alquiler',
  },
  property: {
    perMonth: '/mes',
    sqft: (value) => `${value} sqft`,
    bedrooms: (count) => `${count} ${count === 1 ? 'dormitorio' : 'dormitorios'}`,
    bathrooms: (count) => `${count} ${count === 1 ? 'baño' : 'baños'}`,
  },
  propertiesPage: {
    viewGrid: 'Vista de cuadrícula',
    viewMap: 'Vista de mapa',
    mapPlaceholder: 'La vista de mapa estará disponible próximamente.',
    empty: 'No hay propiedades de este tipo.',
  },
  propertyForm: {
    name: 'Nombre de la propiedad',
    namePlaceholder: 'ej. Casa en Villa Morra',
    address: 'Dirección',
    addressPlaceholder: 'ej. Av. San Martín 1450',
    city: 'Ciudad',
    cityPlaceholder: 'ej. Asunción',
    price: 'Precio (USD)',
    pricePlaceholder: 'ej. 150000',
    photos: 'Fotos de la propiedad',
    addPhoto: 'Agregar foto',
    removePhoto: 'Quitar foto',
    photoAlt: (index) => `Foto ${index} de la propiedad`,
    description: 'Descripción corta',
    descriptionPlaceholder: 'Describe la propiedad en pocas oraciones',
    exclusiveDetails: 'Detalles exclusivos',
    listing: 'Venta / Alquiler',
    sell: 'Venta',
    rent: 'Alquiler',
    furnishing: 'Amoblado / Sin amoblar',
    furnished: 'Amoblado',
    unfurnished: 'Sin amoblar',
    elevator: 'Ascensor',
    parking: 'Estacionamiento',
    type: 'Tipo',
    area: 'Superficie (sqft)',
    bedrooms: 'Dormitorios',
    bathrooms: 'Baños',
    floor: 'Piso',
    decrease: 'Disminuir',
    increase: 'Aumentar',
    errors: {
      required: 'Este campo es obligatorio',
      invalidPrice: 'Ingresa un precio válido',
      invalidNumber: 'Ingresa un valor válido',
      photosRequired: 'Agrega al menos una foto',
    },
  },
  propertyDetail: {
    back: 'Volver a propiedades',
    notFoundTitle: 'Propiedad no encontrada',
    notFoundText: 'La propiedad que buscas no existe o fue eliminada.',
    details: 'Detalles',
    detailsSubtitle: 'Información esencial de la propiedad',
    specifications: 'Especificaciones',
    propertyType: 'Tipo de propiedad',
    status: 'Estado',
    yearBuilt: 'Año de construcción',
    parking: 'Estacionamiento',
    area: 'Superficie',
    bedrooms: 'Dormitorios',
    bathrooms: 'Baños',
    city: 'Ciudad',
    pricePerSqft: 'Precio por sqft',
    reference: 'Referencia',
    assignedAgent: 'Agente asignado',
    furnished: 'Amoblado',
    elevator: 'Ascensor',
    floor: 'Piso',
    location: 'Ubicación',
    notApplicable: 'No aplica',
    noParking: 'Sin estacionamiento',
    parkingSpots: (count) => `${count} ${count === 1 ? 'lugar' : 'lugares'}`,
    thumbnail: (index) => `Ver imagen ${index}`,
    emailSubject: (title) => `Consulta por ${title}`,
  },
  actions: {
    addProperty: 'Agregar propiedad',
    filters: 'Filtros',
    generateEmail: 'Generar correo',
    brochure: 'Folleto',
    save: 'Guardar',
    cancel: 'Cancelar',
  },
  styleguide: {
    title: 'Guía de estilos',
    colors: 'Colores',
    typography: 'Tipografía',
    sample: 'Propiedades en venta y en alquiler 0123456789',
    groups: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      danger: 'Color de estado',
      gray: 'Color gris',
      extra: 'Fondo y acento',
    },
    components: {
      title: 'Componentes',
      buttons: 'Botones',
      badges: 'Insignias',
      card: 'Tarjeta',
      form: 'Campos de formulario',
      tabs: 'Pestañas',
      pagination: 'Paginación',
      stats: 'Tarjetas de métricas',
      avatar: 'Avatar',
      small: 'Pequeño',
      disabled: 'Deshabilitado',
      cardText: 'Contenedor blanco con esquinas redondeadas y sombra suave.',
      inputLabel: 'Dirección',
      inputPlaceholder: 'Calle y número',
      inputError: 'Con error',
      inputErrorMessage: 'Este campo es obligatorio',
      selectLabel: 'Tipo de propiedad',
      statusAssigned: 'Asignado',
      statusWon: 'Ganado',
      statusLost: 'Perdido',
      statusDraft: 'Borrador',
      statLeads: 'Prospectos totales',
      statProperties: 'Propiedades activas',
      statSales: 'Ventas del mes',
    },
  },
}
