// ============================================================
// Alexandro Refrigeration HVACR - Galería de imágenes
// Fotos reales de trabajos de reparación en New Jersey
// ============================================================

// Lista completa de 32 imágenes de trabajos realizados
// (originalmente 35, eliminadas #3, #15, #25)
// Nombres descriptivos generados desde el nombre del archivo
export const galeriaImagenes: string[] = [
  'Refrigeration-HVAC-Repair-in-New-Jersey (1).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (2).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (4).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (5).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (6).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (7).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (8).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (9).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (10).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (11).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (12).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (13).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (14).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (16).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (17).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (18).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (19).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (20).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (21).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (22).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (23).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (24).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (26).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (27).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (28).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (29).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (30).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (31).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (32).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (33).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (34).webp',
  'Refrigeration-HVAC-Repair-in-New-Jersey (35).webp',
];

// Captions SEO-friendly para cada imagen (rota cíclicamente)
const captions = [
  'Reparación de refrigeración comercial en New Jersey',
  'Servicio de HVAC repair en Newark NJ',
  'Mantenimiento de aire acondicionado en NJ',
  'Reparación de freezer comercial en New Jersey',
  'Diagnóstico de refrigeración con EPA 608',
  'Reparación de cuarto frío walk-in cooler',
  'Servicio de refrigeración residencial en NJ',
  'Instalación de aire acondicionado en New Jersey',
  'Reparación de estufa y horno en NJ',
  'Mantenimiento preventivo de refrigeración',
  'Reparación de freidora comercial en NJ',
  'Reparación de calefacción en New Jersey',
  'Técnico certificado EPA 608 en acción',
  'Reparación de compresor de refrigeración',
  'Recarga de gas refrigerante en NJ',
  'Reparación de vitrina exhibidora comercial',
  'Servicio de HVAC en restaurante de NJ',
  'Reparación de refrigerador comercial',
  'Mantenimiento de sistema de refrigeración',
  'Instalación de equipo de refrigeración nueva',
  'Diagnóstico de falla de aire acondicionado',
  'Reparación de evaporador de refrigeración',
  'Reparación de condensador comercial',
  'Servicio de refrigeración en supermercado NJ',
  'Reparación de display case refrigerado',
  'Reparación de horno comercial en NJ',
  'Mantenimiento de HVAC en hotel de NJ',
  'Reparación de refrigeración en licorería',
  'Servicio técnico de refrigeración en NJ',
  'Reparación de sistema de calefacción',
  'Reparación de aire acondicionado central',
  'Reparación de refrigerador residencial',
  'Reparación de freezer residencial',
  'Mantenimiento de freidora industrial',
  'Reparación de equipo de cocina comercial',
];

// Genera la URL completa de una imagen
export const getImagenUrl = (filename: string): string => `/images/${filename}`;

// Genera el caption SEO para una imagen (basado en su índice)
export const getImagenCaption = (index: number): string => captions[index % captions.length];

// Imágenes destacadas para usar en home/servicios/ciudades (rotación)
export const getImagenesDestacadas = (count: number = 6, offset: number = 0): string[] => {
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = (offset + i) % galeriaImagenes.length;
    result.push(galeriaImagenes[idx]);
  }
  return result;
};

// Imagen única para un servicio específico (basado en slug)
export const getImagenParaServicio = (slug: string): string => {
  // Imágenes dedicadas por servicio (recortadas sin franjas negras)
  const mapping: Record<string, string> = {
    'reparacion-refrigeracion-comercial': galeriaImagenes[0], // Usa galería (no hay imagen dedicada)
    'reparacion-aire-acondicionado': 'servicio-reparacion-aire-acondicionado.webp',
    'reparacion-calefaccion': 'servicio-reparacion-calefaccion.webp',
    'cuartos-frios': 'servicio-cuartos-frios.webp',
    'reparacion-freezers': 'servicio-reparacion-freezers.webp',
    'reparacion-estufas-hornos': 'servicio-reparacion-estufas-hornos.webp',
    'reparacion-freidoras': 'servicio-reparacion-freidoras.webp',
    'mantenimiento-preventivo': 'servicio-mantenimiento-preventivo.webp',
    'instalacion-reemplazo': galeriaImagenes[4], // Refrigeration-HVAC-Repair-in-New-Jersey (5).webp
  };
  return mapping[slug] ?? galeriaImagenes[0];
};

// Imagen única para una ciudad específica
export const getImagenParaCiudad = (slug: string): string => {
  const mapping: Record<string, number> = {
    'kearny': 0,
    'newark': 1,
    'clifton': 2,
    'passaic': 3,
    'fairview': 4,
    'garfield': 5,
    'paterson': 6,
    'union-city': 7,
    'jersey-city': 8,
    'north-bergen': 9,
  };
  const idx = mapping[slug] ?? 0;
  return galeriaImagenes[idx];
};
