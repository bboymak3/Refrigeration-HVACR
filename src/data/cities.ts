// ============================================================
// Alexandro Refrigeration HVACR - Ciudades de cobertura en NJ
// 10 ciudades de New Jersey, USA
// ============================================================

export interface City {
  slug: string;
  nombre: string;
  state: string;
  lat: number;
  lng: number;
  descripcion: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sectoresPopulares: string[];
  destacada?: boolean;
}

export const cities: City[] = [
  {
    slug: 'kearny',
    nombre: 'Kearny',
    state: 'NJ',
    lat: 40.7690,
    lng: -74.1104,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Kearny, NJ. Atendemos restaurantes, supermercados y comercios en Kearny Avenue, Schuyler Avenue y toda la ciudad.',
    h1: 'Refrigeration & HVAC Repair in Kearny, NJ',
    metaTitle: 'Kearny Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Kearny, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'kearny nj hvac', 'commercial refrigeration repair kearny'],
    sectoresPopulares: ['Kearny Avenue', 'Schuyler Avenue', 'Midland Avenue', 'Beech Street'],
  },
  {
    slug: 'newark',
    nombre: 'Newark',
    state: 'NJ',
    lat: 40.7357,
    lng: -74.1725,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Newark, NJ. Atendemos el área de Bloomfield Avenue, Broad Street, Ironbound y toda la ciudad de Newark. Somos especialistas en refrigeración Newark NJ Bloomfield Ave.',
    h1: 'Refrigeration & HVAC Repair in Newark, NJ',
    metaTitle: 'Newark Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Newark, NJ. Especialistas en Bloomfield Ave. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['newark cooler repair', 'newark hvac repairs', 'refrigeration newark nj bloomfield ave', 'refrigeration repair nj'],
    sectoresPopulares: ['Bloomfield Ave', 'Broad Street', 'Ironbound', 'Springfield Ave', 'University Heights'],
    destacada: true,
  },
  {
    slug: 'clifton',
    nombre: 'Clifton',
    state: 'NJ',
    lat: 40.8584,
    lng: -74.1638,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Clifton, NJ. Atendemos comercios en Main Avenue, Route 3, Route 46 y toda la ciudad de Clifton.',
    h1: 'Refrigeration & HVAC Repair in Clifton, NJ',
    metaTitle: 'Clifton Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Clifton, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'clifton nj hvac', 'commercial refrigeration repair clifton'],
    sectoresPopulares: ['Main Avenue', 'Route 3', 'Route 46', 'Broad Street'],
  },
  {
    slug: 'passaic',
    nombre: 'Passaic',
    state: 'NJ',
    lat: 40.8604,
    lng: -74.1285,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Passaic, NJ. Atendemos comercios en Main Avenue, Monroe Street, Lexington Ave y toda la ciudad de Passaic.',
    h1: 'Refrigeration & HVAC Repair in Passaic, NJ',
    metaTitle: 'Passaic Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Passaic, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'passaic nj hvac', 'commercial refrigeration repair passaic'],
    sectoresPopulares: ['Main Avenue', 'Monroe Street', 'Lexington Ave', 'Howe Avenue'],
  },
  {
    slug: 'fairview',
    nombre: 'Fairview',
    state: 'NJ',
    lat: 40.8768,
    lng: -74.0018,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Fairview, NJ. Atendemos comercios en Anderson Avenue, Bergen Boulevard y toda la ciudad de Fairview.',
    h1: 'Refrigeration & HVAC Repair in Fairview, NJ',
    metaTitle: 'Fairview Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Fairview, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'fairview nj hvac', 'commercial refrigeration repair fairview'],
    sectoresPopulares: ['Anderson Avenue', 'Bergen Boulevard', 'Fairview Avenue'],
  },
  {
    slug: 'garfield',
    nombre: 'Garfield',
    state: 'NJ',
    lat: 40.8815,
    lng: -74.1132,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Garfield, NJ. Atendemos comercios en Passaic Street, Outwater Lane y toda la ciudad de Garfield.',
    h1: 'Refrigeration & HVAC Repair in Garfield, NJ',
    metaTitle: 'Garfield Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Garfield, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'garfield nj hvac', 'commercial refrigeration repair garfield'],
    sectoresPopulares: ['Passaic Street', 'Outwater Lane', 'Leland Avenue'],
  },
  {
    slug: 'paterson',
    nombre: 'Paterson',
    state: 'NJ',
    lat: 40.9168,
    lng: -74.1718,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Paterson, NJ. Atendemos comercios en Main Street, Broadway, Market Street y toda la ciudad de Paterson.',
    h1: 'Refrigeration & HVAC Repair in Paterson, NJ',
    metaTitle: 'Paterson Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Paterson, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'paterson nj hvac', 'commercial refrigeration repair paterson'],
    sectoresPopulares: ['Main Street', 'Broadway', 'Market Street', '21st Avenue'],
  },
  {
    slug: 'union-city',
    nombre: 'Union City',
    state: 'NJ',
    lat: 40.7795,
    lng: -74.0307,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Union City, NJ. Atendemos comercios en Bergenline Avenue, New York Avenue y toda la ciudad de Union City.',
    h1: 'Refrigeration & HVAC Repair in Union City, NJ',
    metaTitle: 'Union City Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Union City, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'union city nj hvac', 'commercial refrigeration repair union city'],
    sectoresPopulares: ['Bergenline Avenue', 'New York Avenue', '32nd Street'],
  },
  {
    slug: 'jersey-city',
    nombre: 'Jersey City',
    state: 'NJ',
    lat: 40.7178,
    lng: -74.0431,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en Jersey City, NJ. Atendemos comercios en Journal Square, Newark Avenue, Grove Street y toda la ciudad de Jersey City.',
    h1: 'Refrigeration & HVAC Repair in Jersey City, NJ',
    metaTitle: 'Jersey City Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in Jersey City, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'jersey city nj hvac', 'commercial refrigeration repair jersey city'],
    sectoresPopulares: ['Journal Square', 'Newark Avenue', 'Grove Street', 'Downtown Jersey City'],
  },
  {
    slug: 'north-bergen',
    nombre: 'North Bergen',
    state: 'NJ',
    lat: 40.8043,
    lng: -74.0121,
    descripcion: 'Servicio de reparación de refrigeración comercial y HVAC en North Bergen, NJ. Atendemos comercios en Bergenline Avenue, Kennedy Boulevard y toda la ciudad de North Bergen.',
    h1: 'Refrigeration & HVAC Repair in North Bergen, NJ',
    metaTitle: 'North Bergen Refrigeration & HVAC Repair | Alexandro HVACR',
    metaDescription: 'Refrigeration & HVAC repair in North Bergen, NJ. Commercial refrigeration, AC, walk-in coolers. EPA 608 licensed. WhatsApp 937-450-0421.',
    keywords: ['refrigeration repair nj', 'hvac repair nj', 'north bergen nj hvac', 'commercial refrigeration repair north bergen'],
    sectoresPopulares: ['Bergenline Avenue', 'Kennedy Boulevard', 'Tonnelle Avenue'],
  },
];

// Helpers
export const getCityBySlug = (slug: string) => cities.find(c => c.slug === slug);
export const getCityDestacada = () => cities.find(c => c.destacada);
