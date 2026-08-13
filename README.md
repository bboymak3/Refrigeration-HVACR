# ❄️ Alexandro Refrigeration HVAC Repair Services

**Refrigeration & HVAC Repair in New Jersey, USA**

[![Deploy Status](https://img.shields.io/badge/deploy-live-success)](https://refrigeration-hvacr.com)
[![Framework](https://img.shields.io/badge/Astro-4.16-orange)](https://astro.build)
[![Styles](https://img.shields.io/badge/Tailwind-3.4-blue)](https://tailwindcss.com)
[![Hosting](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com)
[![Languages](https://img.shields.io/badge/i18n-EN%20%2B%20ES-green)](#)

Sitio web oficial de **Alexandro Refrigeration HVAC Parts & Repair Services**, compañía líder en reparación de refrigeración comercial, residencial, HVAC, cuartos fríos, freezers, estufas, hornos, freidoras y reparación de electrodomésticos en New Jersey, USA. Atiende restaurantes, hoteles, supermercados, licorerías y cafeterías con técnico certificado **Licencia 608 de la EPA**.

## 🌐 Producción

| URL | Idioma | Descripción |
|-----|--------|-------------|
| **https://refrigeration-hvacr.com** | 🇬🇧 English (principal) | Idioma por defecto (raíz) |
| **https://refrigeration-hvacr.com/es/** | 🇪🇸 Español | Versión en español |
| https://refrigeration-hvacr.pages.dev | Cloudflare Pages | URL de deploy |
| **Repositorio:** https://github.com/bboymak3/Refrigeration-HVACR | | |

## 📞 Contacto

| Tipo | Valor |
|------|-------|
| **WhatsApp** | https://wa.me/19374500421 |
| **Teléfono (call)** | 937-450-0421 |
| **Perfil de Google** | https://share.google/YpZpBne3Lfe0qhnYC |
| **Email** | info@alexandrorefrigeration.com |
| **Horario** | Mon-Sat 08:00-20:00 · 24/7 Emergencies |
| **Certificación** | EPA 608 License |
| **Garantía** | 3 meses en todos los trabajos |

## 🌍 Sitio Bilingüe

El sitio es **bilingüe** con un botón de toggle de idioma (🇬🇧 EN / 🇪🇸 ES) visible permanentemente en el header de todas las páginas.

| Idioma | URL base | `lang` HTML |
|--------|----------|-------------|
| **English** (principal) | `/` | `en` |
| **Español** | `/es/` | `es-US` |

### Estructura de URLs

```
Inglés (raíz):                    Español (/es/):
/                                 /es/
/services/                        /es/services/
/services/{slug}/                 /es/services/{slug}/
/cities/                          /es/cities/
/cities/{slug}/                   /es/cities/{slug}/
/gallery/                         /es/gallery/
/about/                           /es/about/
/contact/                         /es/contact/
/privacy-policy/                  /es/privacy-policy/
```

## 🛠️ Stack Tecnológico

### Framework y Lenguaje
- **Framework:** [Astro 4.16](https://astro.build) (Static Site Generation - SSG)
- **Lenguaje:** TypeScript + JSX
- **Versión de Node:** 18+ (recomendado 20)

### Estilos y UI
- **CSS Framework:** [Tailwind CSS 3.4](https://tailwindcss.com)
- **Fuentes:** Orbitron (headings display) + Inter (body)
- **Paleta de colores:**
  - Azul Facebook: `#4267B2` (H1, H2)
  - Azul neón: `#00d4ff` (primario - CTAs, links, bordes)
  - Naranja neón: `#ff8a00` (secundario - urgencias, servicios destacados)
  - Dark: `#0a0a0a` (fondo principal)
  - Blanco: `#ffffff` (todo el texto del contenido)
  - Verde WhatsApp: `#25D366`
- **Iconografía:** Font Awesome 6.0 + emojis nativos + banderas emoji (🇬🇧🇪🇸)

### Mapas y Visualización
- **Mapa interactivo:** [Leaflet.js 1.9.4](https://leafletjs.com) con tile layer dark de CARTO
- **Lightbox:** Implementación propia con navegación por teclado (← → Esc)

### Analytics y SEO
- **Google Analytics 4:** ID `G-5P8YVWDWEK` (gtag.js)
- **Google Search Console:** Verificación `AO8x2D5digAhJVNmj0wVdeJx60EpOc56vELa9rh_CmY`
- **Eventos personalizados GA4:**
  - `whatsapp_click` - Click en cualquier botón de WhatsApp
  - `phone_click` - Click en enlace tel:
  - `google_profile_click` - Click en perfil de Google
  - `form_submit` - Envío de formularios

### Schema.org JSON-LD
- `AutoRepair` - Negocio principal en home y ciudades
- `Service` - Cada uno de los 9 servicios
- `BreadcrumbList` - Navegación jerárquica en todas las páginas
- `FAQPage` - Preguntas frecuentes en servicios y ciudades
- `ItemList` - Catálogos de servicios y ciudades
- `ImageGallery` - Galería de fotos con `ImageObject`

### Hosting y Deploy
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) (gratis, ilimitado)
- **CI/CD:** Deploy automático en cada push a `main`
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Dominio custom:** `refrigeration-hvacr.com` (con SSL de Google)
- **DNS:** Cloudflare DNS

## 📊 Estadísticas del Sitio

| Métrica | Cantidad |
|---------|----------|
| **Páginas HTML totales** | 54 (27 EN + 27 ES) |
| **Servicios** | 9 landings × 2 idiomas = 18 |
| **Ciudades NJ** | 10 landings × 2 idiomas = 20 |
| **Páginas estáticas** | 8 × 2 idiomas = 16 |
| **Imágenes de galería** | 32 fotos reales (.webp) |
| **Imagen de logos de marcas** | 1 (50 marcas listadas) |
| **Imágenes en sitemap** | 242+ referencias |
| **URLs en sitemap** | 52 (26 EN + 26 ES) |
| **Marcas atendidas** | 50 (Sub-Zero, GE, Whirlpool, Samsung, etc.) |
| **Schemas JSON-LD** | 0 errores, 0 duplicados |

## 🗺️ Ciudades de Cobertura (New Jersey)

| # | Ciudad | Coordenadas |
|---|--------|-------------|
| 1 | Kearny, NJ | 40.7690, -74.1104 |
| 2 | Newark, NJ ⭐ | 40.7357, -74.1725 |
| 3 | Clifton, NJ | 40.8584, -74.1638 |
| 4 | Passaic, NJ | 40.8604, -74.1285 |
| 5 | Fairview, NJ | 40.8768, -74.0018 |
| 6 | Garfield, NJ | 40.8815, -74.1132 |
| 7 | Paterson, NJ | 40.9168, -74.1718 |
| 8 | Union City, NJ | 40.7795, -74.0307 |
| 9 | Jersey City, NJ | 40.7178, -74.0431 |
| 10 | North Bergen, NJ | 40.8043, -74.0121 |

## 🛎️ Servicios Ofrecidos

| # | Servicio | Slug | Icono |
|---|----------|------|-------|
| 1 | Commercial Refrigeration Repair | `reparacion-refrigeracion-comercial` | ❄️ |
| 2 | Air Conditioning Repair | `reparacion-aire-acondicionado` | 🌬️ |
| 3 | Heating Repair | `reparacion-calefaccion` | 🔥 |
| 4 | Walk-in Coolers & Freezers | `cuartos-frios` | 🏪 |
| 5 | Freezer Repair | `reparacion-freezers` | 🧊 |
| 6 | Stove & Oven Repair | `reparacion-estufas-hornos` | 🍳 |
| 7 | Commercial Fryer Repair | `reparacion-freidoras` | 🍟 |
| 8 | Preventive Maintenance | `mantenimiento-preventivo` | 🛠️ |
| 9 | Installation & Replacement | `instalacion-reemplazo` | 📦 |

## 🏷️ Marcas que Atendemos (50)

WOLF, Whirlpool, Westinghouse, WELBILT, Waste King, VIKING, Vent-A-Hood, ULINE, Thermador, TAPPAN, SUB-ZERO, Speed Queen, SHARP, Sears, SANYO, SAMSUNG, Roper, Panasonic, Nutone, MAYTAG, MARVEL, Magic Chef, LG, KitchenAid, Kenmore, Kelvinator, JENN-AIR, Hotpoint, HOSHIZAKI, Gibson, GE Appliances, FRIGIDAIRE, Fisher & Paykel, FEDDERS, ESTATE, EMERSON, ELKAY, Electrolux, Danby, DACOR, Caloric, BROWN, BREAN, BOSCH, Avanti, ASKO, ARISTON, Amana, Admiral

## 📁 Estructura del Proyecto

```
Refrigeration-HVACR/
├── astro.config.mjs              # Config de Astro (site: refrigeration-hvacr.com)
├── tailwind.config.mjs           # Config de Tailwind (colores custom neón)
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencias
├── public/                       # Archivos estáticos
│   ├── _headers                  # Cache-Control headers por archivo
│   ├── _redirects                # Redirecciones 301 (EN raíz + ES /es/ + URLs antiguas)
│   ├── robots.txt                # Permite Googlebot-Image + msnbot-media
│   ├── site.webmanifest          # PWA manifest con iconos
│   ├── favicon.ico               # Multi-resolution (16/32/48)
│   ├── favicon-16/32/48/64.png   # Favicons PNG
│   ├── apple-touch-icon.png      # iOS (180x180)
│   ├── android-chrome-192/512.png # Android PWA
│   ├── favicon.svg               # SVG fallback
│   └── images/                   # 32 fotos de galería + logo + logos de marcas
│       ├── Refrigeration-HVAC-Repair-in-New-Jersey-logo-alexandro.png (fuente)
│       ├── Refrigeration-HVAC-Repair-in-New-Jersey-logo.webp (uso)
│       ├── Refrigeration-HVAC-Repair-in-New-Jersey-logo.png (backup)
│       ├── Refrigeration-HVAC-Repair-in-New-Jersey (1-35).webp (galería, 32 fotos)
│       └── logos-house-repairs-png-6-1536x478.png (imagen de marcas)
└── src/
    ├── components/
    │   ├── Header.astro           # Nav fijo + logo + menu + LanguageToggle + WhatsApp/Call
    │   ├── Footer.astro            # 5 columnas + logo + EPA badge (bilingüe)
    │   ├── Hero.astro             # Hero home (logo flotando + stats + CTAs)
    │   ├── Services.astro         # Grid 9 servicios con foto real (bilingüe)
    │   ├── CitiesHighlight.astro  # Grid 10 ciudades con links (bilingüe)
    │   ├── CityMap.astro          # Mapa Leaflet dark con marcadores NJ (bilingüe)
    │   ├── RealGallery.astro     # Galería reutilizable + lightbox (bilingüe)
    │   ├── FreezerRepairSection.astro # Sección SEO Freezer+Appliance+Brands (bilingüe)
    │   ├── QuoteForm.astro        # Formulario de cotización (bilingüe)
    │   ├── LanguageToggle.astro   # Botón 🇬🇧EN/🇪🇸ES con banderas
    │   ├── WhatsAppCTA.astro      # Botón flotante WhatsApp
    │   ├── BottomNav.astro        # Nav inferior mobile (Call + WhatsApp)
    │   ├── GoogleReviewsModal.astro # Modal perfil Google 5 estrellas
    │   ├── EpaLicenseBadge.astro # Badge EPA 608 Certified
    │   ├── Analytics.astro       # Eventos GA4 (whatsapp_click, etc.)
    │   └── Gallery.astro          # Galería antigua (no usada)
    ├── data/
    │   ├── config.ts             # Datos empresa ES (teléfono, WhatsApp, dominio)
    │   ├── config-en.ts          # Datos empresa EN
    │   ├── servicios.ts          # 9 servicios ES (slug, nombre, FAQ, beneficios)
    │   ├── servicios-en.ts       # 9 servicios EN
    │   ├── cities.ts            # 10 ciudades NJ ES
    │   ├── cities-en.ts         # 10 ciudades NJ EN
    │   └── galeria.ts           # 32 imágenes + helpers + captions SEO
    ├── layouts/
    │   └── BaseLayout.astro     # HTML base: meta tags, GA4, schemas, favicons, lang prop
    ├── pages/
    │   ├── index.astro          # Home EN (Hero + Services + Gallery + Map + FreezerRepair + Brands)
    │   ├── services/
    │   │   ├── index.astro      # Catálogo 9 servicios EN
    │   │   └── [slug].astro     # Landing por servicio EN (9 generadas)
    │   ├── cities/
    │   │   ├── index.astro      # Catálogo 10 ciudades EN
    │   │   └── [slug].astro     # Landing por ciudad EN (10 generadas)
    │   ├── gallery.astro        # Galería completa 32 fotos EN
    │   ├── about.astro          # About us EN
    │   ├── contact.astro       # Contacto EN
    │   ├── privacy-policy.astro # Política de privacidad EN
    │   ├── 404.astro           # Página 404 EN
    │   ├── sitemap.xml.ts      # Sitemap dinámico (52 URLs + imágenes)
    │   └── es/                  # Versión Español (/es/)
    │       ├── index.astro     # Home ES
    │       ├── services/       # 9 servicios ES
    │       ├── cities/         # 10 ciudades ES
    │       ├── gallery.astro   # Galería ES
    │       ├── about.astro     # About ES
    │       ├── contact.astro   # Contacto ES
    │       ├── privacy-policy.astro
    │       └── 404.astro
    └── styles/
        └── global.css          # Tailwind + componentes custom (btn-neon, section-title, etc.)
```

## 🎯 SEO y Optimización

### Meta tags (en BaseLayout.astro)
- Title y description dinámicos por página y por idioma
- Open Graph (Facebook, WhatsApp) con `og:locale` dinámico
- Twitter Card
- Canonical URLs con trailing slash
- `robots: index, follow, max-image-preview:large`
- `google-site-verification` meta tag

### Schema.org JSON-LD
- **0 errores**, 0 duplicados (validado)
- Sin `aggregateRating` (evita penalización Google)
- URLs canónicas con trailing slash
- `OfferCatalog` usa `ListItem` (no `Offer` sin precio)

### Sitemap.xml
- 52 URLs (26 EN raíz + 26 ES /es/)
- 242+ referencias de imágenes con caption SEO
- Formato Google Image Sitemap (`xmlns:image`)
- Caracteres XML escapados (`&` → `&amp;`)

### robots.txt
- `Allow: /images/`, `/services/`, `/cities/`, `/gallery/`
- `User-agent: Googlebot-Image` con `Allow: /`
- `User-agent: msnbot-media` (Bing Images) con `Allow: /`
- Bloquea bots maliciosos (MJ12bot, DotBot)

### Redirecciones 301 (_redirects)
- URLs antiguas españolas (`/servicios/*`, `/galeria/`) → `/es/`
- URLs antiguas inglesas (`/en/*`) → raíz `/*`
- Forzar trailing slash en ambas versiones

## 🚀 Desarrollo Local

```bash
# Clonar repo
git clone https://github.com/bboymak3/Refrigeration-HVACR.git
cd Refrigeration-HVACR

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev      # http://localhost:4321

# Build de producción
npm run build    # genera /dist (54 páginas)

# Preview del build
npm run preview
```

## 📦 Deploy

El deploy es **automático** vía Cloudflare Pages al hacer push a `main`:

```bash
git add -A
git commit -m "feat: ..."
git push origin main
# Cloudflare Pages detecta el push y deploya automáticamente
```

## 🔧 Configuración

### Variables importantes en `src/data/config.ts` (ES) y `src/data/config-en.ts` (EN)

```typescript
// Español
export const config = {
  marca: 'ALEXANDRO REFRIGERATION',
  marcaLarga: 'Alexandro Refrigeration HVAC Parts & Repair Services',
  telefonoDisplay: '937-450-0421',
  telefonoHref: '9374500421',       // sin +1
  whatsappNumero: '19374500421',
  whatsappUrl: 'https://wa.me/19374500421?text=...',
  googleUrl: 'https://share.google/YpZpBne3Lfe0qhnYC',
  email: 'info@alexandrorefrigeration.com',
  dominio: 'https://refrigeration-hvacr.com',
  clientesTipicos: ['restaurantes', 'hoteles', 'supermercados', 'licorerías', 'cafeterías'],
};

// English (configEn)
export const configEn = {
  // ... mismos datos pero con textos en inglés
  clientesTipicos: ['restaurants', 'hotels', 'supermarkets', 'liquor stores', 'cafes'],
};
```

### Google Analytics 4
- **ID de medición:** `G-5P8YVWDWEK`
- **Eventos personalizados:** Implementados en `src/components/Analytics.astro`
- **Eventos trackeados:** `whatsapp_click`, `phone_click`, `google_profile_click`, `form_submit`

### LanguageToggle
- Componente: `src/components/LanguageToggle.astro`
- Detecta idioma por URL (`/es/` = español, resto = inglés)
- Muestra 🇪🇸 ES (en inglés) o 🇬🇧 EN (en español)
- Visible permanentemente en el header (no dentro del menú hamburguesa)

## 📱 PWA Ready

El sitio incluye `site.webmanifest` con:
- Iconos en 7 tamaños (16, 32, 48, 64, 180, 192, 512)
- `purpose: any maskable` para Android
- `theme_color: #00d4ff`
- `background_color: #0a0a0a`
- `display: standalone`

## 📄 Licencia

Propiedad de **Alexandro Refrigeration HVAC Parts & Repair Services**.

## 👨‍🔧 Sobre la Empresa

**Alexandro Refrigeration HVAC Parts & Repair Services** es una compañía de reparación de refrigeración, HVAC y electrodomésticos en New Jersey, fundada por un técnico que comenzó como ayudante, obtuvo su **Licencia 608 de la EPA** (certificación federal obligatoria para manejar gas refrigerante en Estados Unidos) y registró la compañía para servir a la comunidad hispana y anglo de NJ.

### Servicios principales
- Refrigeración comercial (restaurantes, supermercados, licorerías)
- HVAC (aire acondicionado y calefacción)
- Cuartos fríos / Walk-in coolers
- Freezers comerciales y residenciales
- Estufas y hornos
- Freidoras comerciales
- Mantenimiento preventivo
- Instalación y reemplazo de equipos
- Reparación de electrodomésticos (Dryer, Refrigerator, Oven, Washer, Dishwasher, Freezer, Cooktop, Microwave, Hood)

### Áreas de servicio
10 ciudades de New Jersey: Kearny, Newark, Clifton, Passaic, Fairview, Garfield, Paterson, Union City, Jersey City, North Bergen.

### Marcas atendidas
50 marcas incluyendo: Sub-Zero, GE, Whirlpool, Samsung, Frigidaire, Bosch, LG, KitchenAid, Kenmore, Maytag, Viking, Thermador, Jenn-Air, Hotpoint, Electrolux, Amana, Admiral y más.

---

**© 2025 Alexandro Refrigeration HVAC Parts & Repair Services.** Todos los derechos reservados.
