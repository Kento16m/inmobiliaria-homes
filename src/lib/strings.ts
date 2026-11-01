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
    previousPage: string
    nextPage: string
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
    previousPage: 'Página anterior',
    nextPage: 'Página siguiente',
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
