import type { APIRoute } from 'astro';
import { servicios } from '@/data/servicios';
import { cities } from '@/data/cities';
import { config } from '@/data/config';

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

const urlEntries = allPages.map(page => {
  return `  <url>
    <loc>${config.dominio}${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(page)}</changefreq>
    <priority>${getPriority(page)}</priority>
    <image:image>
      <image:loc>${config.dominio}/og-image.svg</image:loc>
      <image:title>Alexandro Refrigeration HVACR - Refrigeration & HVAC Repair in New Jersey</image:title>
    </image:image>
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
