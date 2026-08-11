// ============================================================
// Alexandro Refrigeration HVACR - Catálogo de servicios
// 9 servicios de refrigeración y HVAC en New Jersey, USA
// ============================================================

export interface Servicio {
  slug: string;
  nombre: string;
  icono: string;
  categoria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  incluye: string[];
  beneficios: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  destacado?: boolean;
}

export const servicios: Servicio[] = [
  // 1. Refrigeración Comercial
  {
    slug: 'reparacion-refrigeracion-comercial',
    nombre: 'Reparación de Refrigeración Comercial',
    icono: '❄️',
    categoria: 'Refrigeración',
    descripcionCorta: 'Reparación de refrigeradores comerciales, freezers, vitrinas y walk-in coolers para tu negocio.',
    descripcionLarga: 'Servicio especializado de reparación de refrigeración comercial en New Jersey. Atendemos restaurantes, supermercados, hoteles, cafeterías y licorerías con equipos como refrigeradores comerciales, vitrinas exhibidoras, display cases y walk-in coolers. Nuestro técnico certificado con Licencia 608 de la EPA diagnostica y repara fallas de compresores, gas refrigerante, termostatos y sistemas eléctricos para que tu negocio no pierda mercadería por una falla de frío.',
    incluye: [
      'Diagnóstico completo del sistema de refrigeración comercial',
      'Reparación y reemplazo de compresores',
      'Recarga de gas refrigerante (manejo con Licencia EPA 608)',
      'Reparación de termostatos y controles electrónicos',
      'Limpieza de condensadores y evaporadores',
      'Reparación de puertas y empaques (gaskets) de vitrinas',
      'Revisión de sistemas eléctricos y capacitores',
      'Garantía escrita de 3 meses en la reparación',
    ],
    beneficios: [
      { title: 'Técnico EPA 608', desc: 'Manejo legal y seguro de gas refrigerante según normas federales.' },
      { title: 'Respuesta rápida', desc: 'Atendemos emergencias de pérdida de frío antes que pierdas mercadería.' },
      { title: 'Garantía 3 meses', desc: 'Todos los trabajos tienen garantía escrita de 3 meses.' },
      { title: 'Todas las marcas', desc: 'Trabajamos con True, Beverage-Air, Turbo Air, Hussmann y más.' },
    ],
    faq: [
      {
        q: '¿Atienden emergencias de refrigeración comercial en New Jersey?',
        a: 'Sí, atendemos emergencias 24/7 en New Jersey. Si tu refrigerador comercial o walk-in cooler falló y estás perdiendo temperatura, escríbenos por WhatsApp al 937-450-0421 y coordinamos visita de urgencia para salvar tu mercadería.'
      },
      {
        q: '¿Tienen licencia EPA 608 para manejar gas refrigerante?',
        a: 'Sí, nuestro técnico principal cuenta con la Licencia 608 de la EPA (Environmental Protection Agency), requisito federal obligatorio para comprar, manejar y recargar gas refrigerante en sistemas de refrigeración comercial en Estados Unidos.'
      },
      {
        q: '¿Qué marcas de refrigeración comercial reparan?',
        a: 'Reparamos todas las marcas comerciales: True, Beverage-Air, Turbo Air, Hussmann, Traulsen, Victory, Arctic Air, Atosa y más. Trabajamos con repuestos OEM y equivalentes de calidad.'
      },
    ],
    metaTitle: 'Reparación de Refrigeración Comercial en NJ | Alexandro HVACR',
    metaDescription: 'Reparación de refrigeración comercial en New Jersey. Refrigeradores, freezers, vitrinas y walk-in coolers. Licencia EPA 608, garantía 3 meses. WhatsApp 937-450-0421.',
    keywords: ['commercial refrigeration repair', 'refrigeration repair nj', 'reparacion refrigeracion comercial nj', 'walk-in cooler repair nj'],
    destacado: true,
  },
  // 2. Aire Acondicionado
  {
    slug: 'reparacion-aire-acondicionado',
    nombre: 'Reparación de Aire Acondicionado',
    icono: '🌬️',
    categoria: 'HVAC',
    descripcionCorta: 'Reparación, instalación y mantenimiento de AC residencial y comercial en NJ.',
    descripcionLarga: 'Servicio completo de reparación de aire acondicionado en New Jersey para hogares y negocios. Reparamos sistemas centralizados, mini-split, unidades de ventana y paquete. Nuestro técnico certificado EPA 608 se encarga del diagnóstico, recarga de refrigerante, limpieza de ductos y reemplazo de partes para devolverte el confort en los días calurosos de verano en NJ.',
    incluye: [
      'Diagnóstico de sistema de aire acondicionado',
      'Recarga de gas refrigerante (R-410A, R-22) con licencia EPA 608',
      'Reparación y reemplazo de compresores',
      'Limpieza de bobinas (condensador y evaporador)',
      'Reemplazo de filtros y ductos',
      'Reparación de termostatos y controles',
      'Mantenimiento preventivo de AC',
      'Garantía de 3 meses en el trabajo',
    ],
    beneficios: [
      { title: 'EPA 608', desc: 'Certificación federal para manejo profesional de refrigerante.' },
      { title: 'Todas las marcas', desc: 'Carrier, Trane, Lennox, Goodman, LG, Daikin y más.' },
      { title: 'Rápido response', desc: 'Visita en el día para emergencias de AC en NJ.' },
      { title: 'Garantía escrita', desc: '3 meses de garantía en todas las reparaciones.' },
    ],
    faq: [
      {
        q: '¿Reparan aire acondicionado central y mini-split en NJ?',
        a: 'Sí, reparamos todo tipo de sistemas de AC: central, mini-split, unidades de ventana y paquete (rooftop). Atendemos viviendas, comercios y oficinas en las 10 ciudades de New Jersey donde cubrimos.'
      },
      {
        q: '¿Cuánto cuesta la recarga de gas refrigerante?',
        a: 'El costo depende del tipo de gas (R-410A, R-22) y la cantidad necesaria. Te damos un presupuesto transparente antes de empezar el trabajo. Solo técnicos con Licencia EPA 608 pueden hacer recarga de refrigerante.'
      },
      {
        q: '¿Hacen mantenimiento preventivo de AC?',
        a: 'Sí, ofrecemos planes de mantenimiento preventivo para que tu AC no falle en verano. Incluye limpieza de bobinas, cambio de filtros, revisión de refrigerante y ajuste del sistema.'
      },
    ],
    metaTitle: 'Reparación de Aire Acondicionado en NJ | Alexandro HVACR',
    metaDescription: 'Reparación de aire acondicionado en New Jersey. AC central, mini-split, comercial. Licencia EPA 608, garantía 3 meses. Llama al 937-450-0421.',
    keywords: ['hvac repair nj', 'newark hvac repairs', 'air conditioning repair nj', 'ac repair nj'],
  },
  // 3. Calefacción
  {
    slug: 'reparacion-calefaccion',
    nombre: 'Reparación de Calefacción',
    icono: '🔥',
    categoria: 'HVAC',
    descripcionCorta: 'Reparación de hornos (furnaces), bombas de calor y sistemas de calefacción en NJ.',
    descripcionLarga: 'Servicio de reparación de calefacción en New Jersey para hornos (furnaces) de gas y eléctricos, bombas de calor (heat pumps) y sistemas de calefacción central. Cuando el invierno en NJ aprieta, nuestro técnico responde rápido para devolverte el calor en casa o negocio.',
    incluye: [
      'Diagnóstico de sistema de calefacción',
      'Reparación de hornos (furnaces) a gas y eléctricos',
      'Reparación y mantenimiento de bombas de calor (heat pumps)',
      'Reemplazo de ignitores, sensores de llama y válvulas de gas',
      'Limpieza de quemadores e intercambiadores de calor',
      'Revisión de ductos y registros',
      'Reparación de termostatos programables',
      'Garantía de 3 meses',
    ],
    beneficios: [
      { title: 'Respuesta invierno', desc: 'Atención prioritaria en días de frío extremo en NJ.' },
      { title: 'Gas y eléctrico', desc: 'Hornos a gas, eléctricos y bombas de calor.' },
      { title: 'Seguridad primero', desc: 'Detectamos fugas de gas y problemas de combustión.' },
      { title: 'Garantía escrita', desc: '3 meses de garantía en cada reparación.' },
    ],
    faq: [
      {
        q: '¿Reparan hornos a gas en New Jersey?',
        a: 'Sí, reparamos hornos (furnaces) a gas y eléctricos. Trabajamos con marcas como Carrier, Trane, Lennox, Goodman, Rheem y más. Atendemos emergencias de calefacción en los meses de invierno.'
      },
      {
        q: '¿Qué hacer si el horno no enciende?',
        a: 'Si tu horno no enciende, revisa primero el termostato y los breakers. Si no funciona, escríbenos por WhatsApp al 937-450-0421. El problema puede ser ignitor, sensor de flama o válvula de gas — lo diagnosticamos en sitio.'
      },
      {
        q: '¿Reparan bombas de calor (heat pumps)?',
        a: 'Sí, reparamos y damos mantenimiento a bombas de calor. Estos sistemas combinan calefacción y aire acondicionado, por lo que requieren técnico con conocimiento de refrigeración (Licencia EPA 608) y HVAC.'
      },
    ],
    metaTitle: 'Reparación de Calefacción y Furnaces en NJ | Alexandro HVACR',
    metaDescription: 'Reparación de calefacción, hornos (furnaces) y bombas de calor en New Jersey. Servicio de emergencia en invierno. Licencia EPA 608. WhatsApp 937-450-0421.',
    keywords: ['hvac repair nj', 'furnace repair nj', 'heat pump repair nj', 'calefaccion nj'],
  },
  // 4. Cuartos Fríos / Walk-in Coolers
  {
    slug: 'cuartos-frios',
    nombre: 'Cuartos Fríos / Walk-in Coolers',
    icono: '🏪',
    categoria: 'Refrigeración',
    descripcionCorta: 'Instalación y reparación de cuartos fríos (walk-in coolers y freezers) en NJ.',
    descripcionLarga: 'Servicio especializado de instalación, reparación y mantenimiento de cuartos fríos (walk-in coolers y walk-in freezers) para restaurantes, supermercados y negocios de comida en New Jersey. Reparamos paneles, puertas, sistemas de refrigeración y control de temperatura para mantener tus productos a la temperatura correcta.',
    incluye: [
      'Instalación de walk-in coolers y freezers',
      'Reparación de paneles aislados (uretano/poliuretano)',
      'Reparación y reemplazo de puertas y bisagras',
      'Reparación de sistemas de refrigeración (compresor, evaporador)',
      'Instalación de pisos antiderrapantes',
      'Reemplazo de empaques magnéticos (gaskets)',
      'Calibración de termostatos digitales',
      'Mantenimiento preventivo programado',
    ],
    beneficios: [
      { title: 'EPA 608', desc: 'Manejo profesional del gas refrigerante del cuarto frío.' },
      { title: 'Diseño a medida', desc: 'Instalamos cuartos fríos según las dimensiones de tu negocio.' },
      { title: 'Emergencias 24/7', desc: 'Salvamos tu inventario si falla el cuarto frío.' },
      { title: 'Garantía 3 meses', desc: 'Garantía escrita en instalación y reparación.' },
    ],
    faq: [
      {
        q: '¿Instalan walk-in coolers nuevos en New Jersey?',
        a: 'Sí, instalamos walk-in coolers y freezers a medida según el espacio de tu negocio en NJ. Trabajamos con paneles de poliuretano, puertas con bisagras pesadas y sistemas de refrigeración de alta eficiencia.'
      },
      {
        q: '¿Reparan cuartos fríos de restaurantes?',
        a: 'Sí, ese es uno de nuestros servicios principales. Restaurantes, supermercados, cafeterías y licorerías confían en nosotros para mantener sus walk-in coolers operando. Atendemos emergencias 24/7.'
      },
      {
        q: '¿Cuánto demora la instalación de un walk-in cooler?',
        a: 'Depende del tamaño y configuración. Un walk-in cooler estándar se instala en 1-2 días. Te damos un cronograma exacto en la cotización. Coordinamos para minimizar el impacto en tu negocio.'
      },
    ],
    metaTitle: 'Cuartos Fríos / Walk-in Coolers en NJ | Alexandro HVACR',
    metaDescription: 'Instalación y reparación de cuartos fríos (walk-in coolers y freezers) en New Jersey. Para restaurantes y comercios. Licencia EPA 608. WhatsApp 937-450-0421.',
    keywords: ['commercial refrigeration repair', 'walk-in cooler repair nj', 'cuarto frio nj', 'walk-in freezer nj'],
  },
  // 5. Freezers
  {
    slug: 'reparacion-freezers',
    nombre: 'Reparación de Freezers',
    icono: '🧊',
    categoria: 'Refrigeración',
    descripcionCorta: 'Reparación de freezers comerciales y residenciales (chest y upright) en NJ.',
    descripcionLarga: 'Servicio de reparación de freezers comerciales y residenciales en New Jersey. Atendemos freezers horizontales (chest) y verticales (upright) de marcas como True, Beverage-Air, Frigidaire, GE y Whirlpool. Diagnóstico profesional, repuestos de calidad y garantía de 3 meses.',
    incluye: [
      'Diagnóstico completo de freezer comercial o residencial',
      'Reparación y reemplazo de compresores',
      'Recarga de gas refrigerante (Licencia EPA 608)',
      'Reparación de termostatos y control de temperatura',
      'Reemplazo de empaques (gaskets) de puerta',
      'Limpieza de condensador y revisión de ventiladores',
      'Reparación de sellos y bisagras',
      'Garantía de 3 meses',
    ],
    beneficios: [
      { title: 'Comercial y residencial', desc: 'Reparamos freezers de negocio y de hogar.' },
      { title: 'EPA 608', desc: 'Gas refrigerante manejado con licencia federal.' },
      { title: 'Rápido y confiable', desc: 'Atendemos en el día para no perder alimentos.' },
      { title: 'Garantía escrita', desc: '3 meses en todas las reparaciones.' },
    ],
    faq: [
      {
        q: '¿Reparan freezers comerciales en NJ?',
        a: 'Sí, reparamos freezers comerciales (chest y upright) de marcas como True, Beverage-Air, Turbo Air, Atosa y más. También freezers residenciales de Frigidaire, GE, Whirlpool, Samsung, LG.'
      },
      {
        q: '¿Qué hago si mi freezer no congela?',
        a: 'Revisa primero que el termostato esté bien y que la puerta selle correctamente. Si sigue sin congelar, el problema puede ser el compresor, gas refrigerante o termostato. Escríbenos por WhatsApp al 937-450-0421.'
      },
      {
        q: '¿Hacen recarga de gas refrigerante en freezers?',
        a: 'Sí, pero solo técnicos con Licencia EPA 608 pueden hacerlo legalmente. Nuestro técnico está certificado y maneja R-134a, R-404A, R-290 y otros refrigerantes según tu equipo.'
      },
    ],
    metaTitle: 'Reparación de Freezers en NJ | Alexandro HVACR',
    metaDescription: 'Reparación de freezers comerciales y residenciales en New Jersey. Chest y upright. Licencia EPA 608, garantía 3 meses. WhatsApp 937-450-0421.',
    keywords: ['commercial refrigeration repair', 'freezer repair nj', 'reparacion freezer nj', 'refrigeration repair nj'],
  },
  // 6. Estufas y Hornos
  {
    slug: 'reparacion-estufas-hornos',
    nombre: 'Reparación de Estufas y Hornos',
    icono: '🍳',
    categoria: 'Equipos de Cocina',
    descripcionCorta: 'Reparación de estufas, hornos, rangos (gas y eléctricos) en restaurantes y hogares de NJ.',
    descripcionLarga: 'Servicio de reparación de estufas, hornos y rangos comerciales en New Jersey. Atendemos equipos de gas y eléctricos de marcas como Vulcan, Wolf, Garland, General Electric, Frigidaire y más. Reparamos quemadores, termostatos, ignitores y elementos calefactores para que tu cocina siga produciendo.',
    incluye: [
      'Diagnóstico de estufa, horno o rango (gas o eléctrico)',
      'Reparación de quemadores y elementos calefactores',
      'Reparación y reemplazo de termostatos',
      'Reemplazo de ignitores y válvulas de gas',
      'Reparación de hornos comerciales (convección, pizza)',
      'Calibración de temperatura del horno',
      'Limpieza de inyectores y quemadores a gas',
      'Garantía de 3 meses',
    ],
    beneficios: [
      { title: 'Gas y eléctrico', desc: 'Reparamos equipos de gas y eléctricos.' },
      { title: 'Comercial y residencial', desc: 'Equipos de restaurante y hogar.' },
      { title: 'Detección de fugas', desc: 'Verificamos seguridad en equipos a gas.' },
      { title: 'Garantía escrita', desc: '3 meses en cada reparación.' },
    ],
    faq: [
      {
        q: '¿Reparan estufas comerciales de restaurantes en NJ?',
        a: 'Sí, reparamos estufas, hornos y rangos comerciales de marcas como Vulcan, Wolf, Garland, Imperial y más. También atendemos equipos residenciales de GE, Whirlpool, Frigidaire, Samsung, LG.'
      },
      {
        q: '¿Reparan hornos a gas?',
        a: 'Sí, reparamos hornos y estufas a gas. Verificamos fugas, reemplazamos ignitores, sensores de llama y válvulas de gas. Tu seguridad es lo primero — nunca uses un equipo a gas con fugas.'
      },
      {
        q: '¿El horno no calienta a la temperatura correcta?',
        a: 'Probablemente necesite calibración del termostato o reemplazo del sensor de temperatura. Escríbenos por WhatsApp al 937-450-0421 y coordinamos visita para diagnosticar.'
      },
    ],
    metaTitle: 'Reparación de Estufas y Hornos en NJ | Alexandro HVACR',
    metaDescription: 'Reparación de estufas, hornos y rangos comerciales y residenciales en New Jersey. Gas y eléctrico. Garantía 3 meses. WhatsApp 937-450-0421.',
    keywords: ['stove repair nj', 'oven repair nj', 'reparacion estufas hornos nj', 'restaurant equipment repair nj'],
  },
  // 7. Freidoras (Fryers)
  {
    slug: 'reparacion-freidoras',
    nombre: 'Reparación de Freidoras (Fryers)',
    icono: '🍟',
    categoria: 'Equipos de Cocina',
    descripcionCorta: 'Reparación de freidoras comerciales (gas y eléctricas) en restaurantes de NJ.',
    descripcionLarga: 'Servicio especializado de reparación de freidoras comerciales (fryers) en New Jersey. Atendemos freidoras a gas y eléctricas de marcas como Frymaster, Pitco, Vulcan, Imperial y Anets. Diagnóstico profesional de termostatos, quemadores, válvulas de seguridad y sistemas de filtración.',
    incluye: [
      'Diagnóstico completo de freidora comercial',
      'Reparación y reemplazo de termostatos',
      'Reparación de quemadores (gas) o elementos (eléctricos)',
      'Reemplazo de válvulas de seguridad',
      'Reparación de sistema de filtración de aceite',
      'Reemplazo de termopares y sensores',
      'Limpieza de inyectores y quemadores',
      'Garantía de 3 meses',
    ],
    beneficios: [
      { title: 'Gas y eléctricas', desc: 'Freidoras de gas y eléctricas de todas las marcas.' },
      { title: 'Para restaurantes', desc: 'Especialistas en equipos de cocina comercial.' },
      { title: 'Seguridad primero', desc: 'Verificamos válvulas de seguridad y fugas de gas.' },
      { title: 'Garantía escrita', desc: '3 meses en cada reparación.' },
    ],
    faq: [
      {
        q: '¿Reparan freidoras comerciales a gas en NJ?',
        a: 'Sí, reparamos freidoras comerciales a gas (Frymaster, Pitco, Vulcan, Imperial). Reparamos quemadores, termostatos, válvulas de seguridad y sistema de filtración de aceite.'
      },
      {
        q: '¿Qué marcas de freidoras reparan?',
        a: 'Reparamos Frymaster, Pitco, Vulcan, Imperial, Anets, Star, Wells y más. Trabajamos con repuestos OEM y equivalentes de calidad para minimizar el tiempo de inactividad.'
      },
      {
        q: '¿La freidora no calienta el aceite?',
        a: 'El problema puede ser termostato, elemento calefactor (eléctrica) o quemador (gas). Escríbenos por WhatsApp al 937-450-0421 con la marca y modelo para darte una estimación.'
      },
    ],
    metaTitle: 'Reparación de Freidoras (Fryers) en NJ | Alexandro HVACR',
    metaDescription: 'Reparación de freidoras comerciales (gas y eléctricas) en New Jersey. Frymaster, Pitco, Vulcan. Garantía 3 meses. WhatsApp 937-450-0421.',
    keywords: ['commercial fryer repair nj', 'reparacion freidoras nj', 'restaurant equipment repair nj', 'frymaster repair nj'],
  },
  // 8. Mantenimiento Preventivo
  {
    slug: 'mantenimiento-preventivo',
    nombre: 'Mantenimiento Preventivo',
    icono: '🛠️',
    categoria: 'Mantenimiento',
    descripcionCorta: 'Planes de mantenimiento preventivo para equipos de refrigeración y HVAC en NJ.',
    descripcionLarga: 'Planes de mantenimiento preventivo para equipos de refrigeración comercial y HVAC en New Jersey. Evita fallas costosas, prolonga la vida útil de tus equipos y reduce el consumo eléctrico. Atendemos restaurantes, supermercados, hoteles y comercios con planes mensuales, trimestrales o semestrales.',
    incluye: [
      'Inspección completa de equipos de refrigeración y HVAC',
      'Limpieza de condensadores y evaporadores',
      'Revisión de niveles de refrigerante (Licencia EPA 608)',
      'Cambio de filtros de aire',
      'Calibración de termostatos y controles',
      'Revisión de puertas y empaques (gaskets)',
      'Informe detallado de cada visita',
      'Prioridad en emergencias',
    ],
    beneficios: [
      { title: 'Evita fallas', desc: 'Detectamos problemas antes que se conviertan en emergencias.' },
      { title: 'Ahorra energía', desc: 'Equipos limpios consumen hasta 30% menos electricidad.' },
      { title: 'Prolonga vida útil', desc: 'Tu equipo dura más años con mantenimiento regular.' },
      { title: 'Prioridad 24/7', desc: 'Clientes con plan tienen prioridad en emergencias.' },
    ],
    faq: [
      {
        q: '¿Cada cuánto debo hacer mantenimiento a mis equipos?',
        a: 'Para equipos comerciales de uso intensivo (restaurantes, supermercados), recomendamos mantenimiento trimestral. Para equipos residenciales o de bajo uso, semestral. Te asesoramos según tu caso.'
      },
      {
        q: '¿Qué incluye el plan de mantenimiento?',
        a: 'Incluye inspección completa, limpieza de condensadores/evaporadores, revisión de refrigerante, cambio de filtros, calibración de termostatos, revisión de puertas y empaques, e informe detallado de cada visita.'
      },
      {
        q: '¿Tienen prioridad en emergencias los clientes con plan?',
        a: 'Sí, los clientes con plan de mantenimiento preventivo tienen prioridad absoluta en emergencias 24/7. Tu negocio no se detiene por una falla de frío o AC.'
      },
    ],
    metaTitle: 'Mantenimiento Preventivo de Refrigeración y HVAC en NJ | Alexandro HVACR',
    metaDescription: 'Planes de mantenimiento preventivo para equipos de refrigeración y HVAC en New Jersey. Evita fallas y ahorra energía. WhatsApp 937-450-0421.',
    keywords: ['hvac repair nj', 'refrigeration maintenance nj', 'mantenimiento preventivo nj', 'commercial refrigeration repair'],
  },
  // 9. Instalación y Reemplazo
  {
    slug: 'instalacion-reemplazo',
    nombre: 'Instalación y Reemplazo',
    icono: '📦',
    categoria: 'Instalación',
    descripcionCorta: 'Instalación y reemplazo de equipos nuevos de refrigeración y HVAC en NJ.',
    descripcionLarga: 'Servicio de instalación y reemplazo de equipos nuevos de refrigeración comercial y HVAC en New Jersey. Te asesoramos en la compra del equipo correcto según tus necesidades, lo instalamos profesionalmente y te dejamos operando con garantía. Removemos el equipo viejo sin costo adicional.',
    incluye: [
      'Asesoría en selección de equipo nuevo',
      'Instalación profesional de refrigeración comercial',
      'Instalación de AC central, mini-split y paquete',
      'Instalación de hornos (furnaces) y bombas de calor',
      'Desinstalación y remoción del equipo viejo',
      'Puesta en marcha y configuración',
      'Capacitación de uso al cliente',
      'Garantía de instalación de 3 meses',
    ],
    beneficios: [
      { title: 'Asesoría correcta', desc: 'Te ayudamos a elegir el equipo adecuado para tu espacio.' },
      { title: 'Instalación pro', desc: 'Cumplimos códigos de NJ y normas EPA 608.' },
      { title: 'Sin costo oculto', desc: 'Remoción del equipo viejo incluida en el precio.' },
      { title: 'Garantía 3 meses', desc: 'Garantía escrita en la instalación.' },
    ],
    faq: [
      {
        q: '¿Instalan equipos nuevos de refrigeración comercial?',
        a: 'Sí, instalamos refrigeradores comerciales, freezers, walk-in coolers, vitrinas exhibidoras y más. Te asesoramos en la selección según tus necesidades y presupuesto.'
      },
      {
        q: '¿Remueven el equipo viejo al instalar uno nuevo?',
        a: 'Sí, la remoción del equipo viejo está incluida en el precio de instalación. No te preocupes por desecharlo — nosotros nos encargamos.'
      },
      {
        q: '¿Hacen instalación de AC central y mini-split?',
        a: 'Sí, instalamos AC central, mini-split, unidades de paquete (rooftop) y hornos (furnaces). Cumplimos códigos de New Jersey y usamos solo técnicos con Licencia EPA 608 para el manejo de refrigerante.'
      },
    ],
    metaTitle: 'Instalación y Reemplazo de Refrigeración y HVAC en NJ | Alexandro HVACR',
    metaDescription: 'Instalación y reemplazo de equipos nuevos de refrigeración y HVAC en New Jersey. Asesoría profesional, remoción del viejo. WhatsApp 937-450-0421.',
    keywords: ['hvac installation nj', 'refrigeration installation nj', 'ac installation nj', 'commercial refrigeration repair'],
  },
];

// Helpers
export const getServicioBySlug = (slug: string) => servicios.find(s => s.slug === slug);
export const getServiciosDestacados = () => servicios.filter(s => s.destacado);
export const getServiciosRegulares = () => servicios.filter(s => !s.destacado);
export const getServiciosRelacionados = (slug: string, limit = 3) =>
  servicios.filter(s => s.slug !== slug).slice(0, limit);
