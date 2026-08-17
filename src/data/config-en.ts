// ============================================================
// Alexandro Refrigeration HVACR - English config
// ============================================================

export const configEn = {
  marca: 'ALEXANDRO REFRIGERATION H.V.A.C.R',
  marcaLarga: 'Alexandro Refrigeration H.V.A.C.R Parts & Repair Services',
  marcaCorta: 'Alexandro H.V.A.C.R',
  telefonoDisplay: '937-450-0421',
  telefonoHref: '9374500421',
  whatsappNumero: '19374500421',
  whatsappTexto: 'Hello, I need refrigeration / HVAC service in New Jersey',
  whatsappUrl: 'https://wa.me/19374500421?text=Hello,%20I%20need%20refrigeration%20/%20HVAC%20service%20in%20New%20Jersey',
  googleUrl: 'https://share.google/YpZpBne3Lfe0qhnYC',
  epaLicense: 'EPA 608',
  epaLicenseFull: 'EPA 608 Certification',
  ciudad: 'New Jersey, USA',
  estado: 'NJ',
  region: 'New Jersey',
  horario: 'Mon-Sat: 08:00 - 20:00 · 24/7 Emergencies',
  stats: {
    clientes: '500+',
    cobertura: '10 cities',
    experiencia: '10+ years',
    servicios: '9 services',
    garantia: '3 months'
  },
  email: 'info@alexandrorefrigeration.com',
  dominio: 'https://refrigeration-hvacr.com',
  clientesTipicos: ['restaurants', 'hotels', 'supermarkets', 'liquor stores', 'cafes'],
};

export const waLinkEn = (texto?: string) =>
  `https://wa.me/${configEn.whatsappNumero}?text=${encodeURIComponent(texto || configEn.whatsappTexto)}`;

export const waLinkServicioEn = (nombreServicio: string) =>
  `https://wa.me/${configEn.whatsappNumero}?text=${encodeURIComponent(`Hello, I need ${nombreServicio} service in New Jersey. Can you help?`)}`;

export const waLinkCiudadEn = (nombreCiudad: string) =>
  `https://wa.me/${configEn.whatsappNumero}?text=${encodeURIComponent(`Hello, I need refrigeration / HVAC service in ${nombreCiudad}, NJ. Can you help?`)}`;
