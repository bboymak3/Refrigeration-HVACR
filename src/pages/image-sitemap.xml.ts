import type { APIRoute } from 'astro';
import { config } from '@/data/config';
import { galeriaImagenes, getImagenUrl, getImagenCaption, getImagenParaServicio, getImagenParaCiudad } from '@/data/galeria';
import { servicios } from '@/data/servicios';
import { cities } from '@/data/cities';

const lastmod = new Date().toISOString().split('T')[0];
const logoUrl = `${config.dominio}/images/Refrigeration-HVAC-Repair-in-New-Jersey-logo.webp`;

// Construir todas las entradas de imágenes para el image-sitemap
// Cada URL canónica (página) tiene asociadas todas sus imágenes

type ImageEntry = {
  pageUrl: string;
  images: { url: string; caption: string }[];
};

const entries: ImageEntry[] = [];

// 1. Home: todas las 35 imágenes de la galería + logo
entries.push({
  pageUrl: `${config.dominio}/`,
  images: [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
    ...galeriaImagenes.map((filename, i) => ({
      url: `${config.dominio}${getImagenUrl(filename)}`,
      caption: getImagenCaption(i),
    })),
  ],
});

// 2. /galeria/: TODAS las 35 imágenes + logo
entries.push({
  pageUrl: `${config.dominio}/galeria/`,
  images: [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
    ...galeriaImagenes.map((filename, i) => ({
      url: `${config.dominio}${getImagenUrl(filename)}`,
      caption: getImagenCaption(i),
    })),
  ],
});

// 3. /servicios/: 6 imágenes representativas + logo
entries.push({
  pageUrl: `${config.dominio}/servicios/`,
  images: [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
    ...servicios.map(s => {
      const img = getImagenParaServicio(s.slug);
      return {
        url: `${config.dominio}${getImagenUrl(img)}`,
        caption: `${s.nombre} - Foto real en New Jersey`,
      };
    }),
  ],
});

// 4. /cities/: 10 imágenes (una por ciudad) + logo
entries.push({
  pageUrl: `${config.dominio}/cities/`,
  images: [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
    ...cities.map(c => {
      const img = getImagenParaCiudad(c.slug);
      return {
        url: `${config.dominio}${getImagenUrl(img)}`,
        caption: `Refrigeration & HVAC Repair in ${c.nombre}, NJ`,
      };
    }),
  ],
});

// 5. Cada servicio: imagen destacada + 6 de galería + logo
servicios.forEach((s, idx) => {
  const servicioImagen = getImagenParaServicio(s.slug);
  const images = [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
    {
      url: `${config.dominio}${getImagenUrl(servicioImagen)}`,
      caption: `${s.nombre} - Foto real en New Jersey`,
    },
  ];
  // Agregar 6 imágenes de galería rotando por servicio
  for (let i = 0; i < 6; i++) {
    const galIdx = (idx * 3 + i) % galeriaImagenes.length;
    images.push({
      url: `${config.dominio}${getImagenUrl(galeriaImagenes[galIdx])}`,
      caption: getImagenCaption(galIdx),
    });
  }
  entries.push({
    pageUrl: `${config.dominio}/servicios/${s.slug}/`,
    images,
  });
});

// 6. Cada ciudad: imagen destacada + 6 de galería + logo
cities.forEach((c, idx) => {
  const ciudadImagen = getImagenParaCiudad(c.slug);
  const images = [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
    {
      url: `${config.dominio}${getImagenUrl(ciudadImagen)}`,
      caption: `Refrigeration & HVAC Repair in ${c.nombre}, NJ`,
    },
  ];
  // Agregar 6 imágenes de galería rotando por ciudad
  for (let i = 0; i < 6; i++) {
    const galIdx = (idx * 3 + i) % galeriaImagenes.length;
    images.push({
      url: `${config.dominio}${getImagenUrl(galeriaImagenes[galIdx])}`,
      caption: getImagenCaption(galIdx),
    });
  }
  entries.push({
    pageUrl: `${config.dominio}/cities/${c.slug}/`,
    images,
  });
});

// 7. Otras páginas estáticas: 3 imágenes + logo
['/quienes-somos/', '/contacto/', '/politica-privacidad/'].forEach(page => {
  const images = [
    { url: logoUrl, caption: 'Alexandro Refrigeration HVACR - Logo' },
  ];
  for (let i = 0; i < 3; i++) {
    images.push({
      url: `${config.dominio}${getImagenUrl(galeriaImagenes[i])}`,
      caption: getImagenCaption(i),
    });
  }
  entries.push({
    pageUrl: `${config.dominio}${page}`,
    images,
  });
});

// Generar XML
const urlEntries = entries.map(entry => {
  const imageEntries = entry.images.map(img => {
    const captionEscaped = img.caption
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    return `    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${captionEscaped}</image:title>
      <image:caption>${captionEscaped}</image:caption>
    </image:image>`;
  }).join('\n');
  return `  <url>
    <loc>${entry.pageUrl}</loc>
    <lastmod>${lastmod}</lastmod>
${imageEntries}
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
