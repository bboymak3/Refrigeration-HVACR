import type { APIRoute } from 'astro';
import { servicios } from '@/data/servicios';
import { cities } from '@/data/cities';
import { config } from '@/data/config';
import { galeriaImagenes, getImagenUrl, getImagenParaServicio, getImagenParaCiudad, getImagenCaption } from '@/data/galeria';

// Función para escapar caracteres especiales XML
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Páginas estáticas (Inglés = raíz + Español = /es/)
const staticPages = [
  // English (root)
  '/',
  '/services/',
  '/cities/',
  '/gallery/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  // Spanish (/es/)
  '/es/',
  '/es/services/',
  '/es/cities/',
  '/es/gallery/',
  '/es/about/',
  '/es/contact/',
  '/es/privacy-policy/',
];

// English service + city pages (root)
const servicioPagesEn = servicios.map(s => `/services/${s.slug}/`);
const cityPagesEn = cities.map(c => `/cities/${c.slug}/`);
// Spanish service + city pages (/es/)
const servicioPagesEs = servicios.map(s => `/es/services/${s.slug}/`);
const cityPagesEs = cities.map(c => `/es/cities/${c.slug}/`);

const allPages = [...staticPages, ...servicioPagesEn, ...cityPagesEn, ...servicioPagesEs, ...cityPagesEs];

const lastmod = new Date().toISOString().split('T')[0];
const logoUrl = `${config.dominio}/images/Refrigeration-HVAC-Repair-in-New-Jersey-logo.webp`;

function getPriority(page: string): string {
  if (page === '/') return '1.0';
  if (page.includes('/servicios/')) return '0.9';
  if (page.includes('/cities/')) return '0.8';
  return '0.6';
}

function getChangefreq(page: string): string {
  if (page === '/') return 'daily';
  if (page.includes('/servicios/')) return 'weekly';
  if (page.includes('/cities/')) return 'monthly';
  return 'weekly';
}

// Generar entradas de imágenes para una página específica
function getImagesForPage(page: string): string {
  const images: { url: string; caption: string }[] = [];

  // Siempre incluir el logo
  images.push({ url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' });

  // Para home: incluir todas las imágenes de la galería (12 destacadas)
  if (page === '/') {
    galeriaImagenes.slice(0, 12).forEach((filename, i) => {
      images.push({
        url: `${config.dominio}${getImagenUrl(filename)}`,
        caption: getImagenCaption(i),
      });
    });
  }
  // Para /galeria/: incluir TODAS las imágenes
  else if (page === '/galeria/') {
    galeriaImagenes.forEach((filename, i) => {
      images.push({
        url: `${config.dominio}${getImagenUrl(filename)}`,
        caption: getImagenCaption(i),
      });
    });
  }
  // Para páginas de servicio: incluir la imagen del servicio + 6 de la galería
  else if (page.startsWith('/servicios/') && page !== '/servicios/') {
    const slug = page.split('/')[2];
    const servicio = servicios.find(s => s.slug === slug);
    const servicioImagen = getImagenParaServicio(slug);
    images.push({
      url: `${config.dominio}${getImagenUrl(servicioImagen)}`,
      caption: `${servicio?.nombre || 'Servicio'} - Foto real en New Jersey`,
    });
    // Agregar 6 imágenes de galería rotando por servicio
    const servicioIndex = servicios.findIndex(s => s.slug === slug);
    for (let i = 0; i < 6; i++) {
      const idx = (servicioIndex * 3 + i) % galeriaImagenes.length;
      images.push({
        url: `${config.dominio}${getImagenUrl(galeriaImagenes[idx])}`,
        caption: getImagenCaption(idx),
      });
    }
  }
  // Para páginas de ciudad: incluir la imagen de la ciudad + 6 de la galería
  else if (page.startsWith('/cities/') && page !== '/cities/') {
    const slug = page.split('/')[2];
    const city = cities.find(c => c.slug === slug);
    const ciudadImagen = getImagenParaCiudad(slug);
    images.push({
      url: `${config.dominio}${getImagenUrl(ciudadImagen)}`,
      caption: `Refrigeration & HVAC Repair in ${city?.nombre || 'NJ'}, NJ`,
    });
    // Agregar 6 imágenes de galería rotando por ciudad
    const ciudadIndex = cities.findIndex(c => c.slug === slug);
    for (let i = 0; i < 6; i++) {
      const idx = (ciudadIndex * 3 + i) % galeriaImagenes.length;
      images.push({
        url: `${config.dominio}${getImagenUrl(galeriaImagenes[idx])}`,
        caption: getImagenCaption(idx),
      });
    }
  }
  // Para /servicios/ y /cities/: incluir 9 imágenes (una por servicio)
  else if (page === '/servicios/' || page === '/cities/') {
    servicios.forEach(s => {
      const img = getImagenParaServicio(s.slug);
      images.push({
        url: `${config.dominio}${getImagenUrl(img)}`,
        caption: `${s.nombre} - Foto real en New Jersey`,
      });
    });
  }
  // Para otras páginas estáticas: incluir 6 imágenes
  else {
    for (let i = 0; i < 6; i++) {
      images.push({
        url: `${config.dominio}${getImagenUrl(galeriaImagenes[i])}`,
        caption: getImagenCaption(i),
      });
    }
  }

  // Generar entradas <image:image> para el sitemap con caracteres escapados
  return images.map(img => {
    const captionEscaped = escapeXml(img.caption);
    return `    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${captionEscaped}</image:title>
      <image:caption>${captionEscaped}</image:caption>
    </image:image>`;
  }).join('\n');
}

const urlEntries = allPages.map(page => {
  return `  <url>
    <loc>${escapeXml(`${config.dominio}${page}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(page)}</changefreq>
    <priority>${getPriority(page)}</priority>
${getImagesForPage(page)}
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
