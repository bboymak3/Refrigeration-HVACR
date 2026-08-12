// ============================================================
// Alexandro Refrigeration HVAC Parts & Repair Services
// Configuración global del negocio - New Jersey, USA
// ============================================================

export const config = {
  marca: 'ALEXANDRO REFRIGERATION',
  marcaLarga: 'Alexandro Refrigeration HVAC Parts & Repair Services',
  marcaCorta: 'Alexandro HVACR',
  // Teléfono display: 937-450-0421 — SIN prefijo +1 en el href tel:
  telefonoDisplay: '937-450-0421',
  telefonoHref: '9374500421',
  // WhatsApp: link internacional con 1
  whatsappNumero: '19374500421',
  whatsappTexto: 'Hola, necesito servicio de refrigeración / HVAC en New Jersey',
  whatsappUrl: 'https://wa.me/19374500421?text=Hola,%20necesito%20servicio%20de%20refrigeracion%20/%20HVAC%20en%20New%20Jersey',
  // Perfil de Google
  googleUrl: 'https://share.google/YpZpBne3Lfe0qhnYC',
  // Licencia EPA 608
  epaLicense: 'EPA 608',
  epaLicenseFull: 'Licencia 608 de la EPA',
  // Ubicación y servicio
  ciudad: 'New Jersey, USA',
  estado: 'NJ',
  region: 'New Jersey',
  horario: 'Lun a Sáb: 08:00 - 20:00 · Emergencias 24/7',
  stats: {
    clientes: '500+',
    cobertura: '10 ciudades',
    experiencia: '10+ años',
    servicios: '9 servicios',
    garantia: '3 meses'
  },
  email: 'info@alexandrorefrigeration.com',
  dominio: 'https://refrigeration-hvacr.com',
  clientesTipicos: ['restaurantes', 'hoteles', 'supermercados', 'licorerías', 'cafeterías'],
};

// Helper para generar enlace de WhatsApp con contexto
export const waLink = (texto?: string) =>
  `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(texto || config.whatsappTexto)}`;

// Helper para enlace de WhatsApp con servicio específico
export const waLinkServicio = (nombreServicio: string) =>
  `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(`Hola, necesito el servicio de ${nombreServicio} en New Jersey. ¿Me pueden ayudar?`)}`;

// Helper para enlace de WhatsApp con ciudad específica
export const waLinkCiudad = (nombreCiudad: string) =>
  `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(`Hola, necesito servicio de refrigeración / HVAC en ${nombreCiudad}, NJ. ¿Me pueden ayudar?`)}`;
