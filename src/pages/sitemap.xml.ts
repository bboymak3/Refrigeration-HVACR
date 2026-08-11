import type { APIRoute } from 'astro';
import { servicios } from '@/data/servicios';
import { cities } from '@/data/cities';
import { config } from '@/data/config';
import { galeriaImagenes, getImagenUrl, getImagenParaServicio, getImagenParaCiudad } from '@/data/galeria';

// Páginas estáticas con trailing slash
const staticPages = [
  '/',
  '/servicios/',
  '/cities/',
  '/galeria/',
  '/quienes-somos/',
  '/contacto/',
  '/politica-privacidad/',
];

const servicioPages = servicios.map(s => `/servicios/${s.slug}/`);
const cityPages = cities.map(c => `/cities/${c.slug}/`);

const allPages = [...staticPages, ...servicioPages, ...cityPages];

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
  const images: string[] = [logoUrl]; // Siempre incluir el logo

  // Para home: incluir todas las imágenes de la galería (12 destacadas)
  if (page === '/') {
    galeriaImagenes.slice(0, 12).forEach(filename => {
      images.push(`${config.dominio}${getImagenUrl(filename)}`);
    });
  }
  // Para /galeria/: incluir TODAS las imágenes
  else if (page === '/galeria/') {
    galeriaImagenes.forEach(filename => {
      images.push(`${config.dominio}${getImagenUrl(filename)}`);
    });
  }
  // Para páginas de servicio: incluir la imagen del servicio + 6 de la galería
  else if (page.startsWith('/servicios/')) {
    const slug = page.split('/')[2];
    const servicioImagen = getImagenParaServicio(slug);
    images.push(`${config.dominio}${getImagenUrl(servicioImagen)}`);
    // Agregar 6 imágenes de galería rotando por servicio
    const servicioIndex = servicios.findIndex(s => s.slug === slug);
    for (let i = 0; i < 6; i++) {
      const idx = (servicioIndex * 3 + i) % galeriaImagenes.length;
      images.push(`${config.dominio}${getImagenUrl(galeriaImagenes[idx])}`);
    }
  }
  // Para páginas de ciudad: incluir la imagen de la ciudad + 6 de la galería
  else if (page.startsWith('/cities/')) {
    const slug = page.split('/')[2];
    const ciudadImagen = getImagenParaCiudad(slug);
    images.push(`${config.dominio}${getImagenUrl(ciudadImagen)}`);
    // Agregar 6 imágenes de galería rotando por ciudad
    const ciudadIndex = cities.findIndex(c => c.slug === slug);
    for (let i = 0; i < 6; i++) {
      const idx = (ciudadIndex * 3 + i) % galeriaImagenes.length;
      images.push(`${config.dominio}${getImagenUrl(galeriaImagenes[idx])}`);
    }
  }
  // Para /servicios/ y /cities/: incluir 6 imágenes representativas
  else if (page === '/servicios/' || page === '/cities/') {
    for (let i = 0; i < 6; i++) {
      images.push(`${config.dominio}${getImagenUrl(galeriaImagenes[i])}`);
    }
  }
  // Para otras páginas estáticas: incluir 3 imágenes
  else {
    for (let i = 0; i < 3; i++) {
      images.push(`${config.dominio}${getImagenUrl(galeriaImagenes[i])}`);
    }
  }

  // Generar entradas <image:image> para el sitemap
  return images.map((imgUrl, i) => {
    const caption = i === 0
      ? 'Alexandro Refrigeration HVACR - Logo'
      : `Refrigeration & HVAC Repair in New Jersey - Trabajo ${i}`;
    return `    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${caption}</image:title>
      <image:caption>${caption}</image:caption>
    </image:image>`;
  }).join('\n');
}

const urlEntries = allPages.map(page => {
  return `  <url>
    <loc>${config.dominio}${page}</loc>
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
