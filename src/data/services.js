// Service data — used by Servicios page and ServiceDetail page

const img1 = "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/a20a48a5db03373f7fdc5d93456c894875c2847b?placeholderIfAbsent=true";
const img2 = "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true";
const img3 = "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true";

export const services = [
  {
    slug: "panaderia",
    image: img1,
    num: "01",
    t: {
      ES: {
        title: "Panadería",
        short: "Pan artesanal, desayunos y pastelería todos los días.",
        tagline: "Empieza el día bien.",
        long: "Nuestra panadería es el corazón del hotel. Cada mañana horneamos pan fresco, croissants y una variedad de pasteles con ingredientes seleccionados. Ideal para desayunar antes de salir a resolver tus trámites o simplemente disfrutar de un momento tranquilo con tu café.",
        highlights: [
          "Pan fresco horneado cada mañana",
          "Croissants, tequeños y pasteles artesanales",
          "Desayunos completos disponibles",
          "Almuerzos y meriendas",
          "Café de especialidad",
        ],
        hours: "Lunes a domingo · 6:30 am – 8:00 pm",
        cta: "Síguenos en Instagram",
        ctaHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
      EN: {
        title: "Bakery",
        short: "Artisan bread, breakfast and pastries every day.",
        tagline: "Start the day right.",
        long: "Our bakery is the heart of the hotel. Every morning we bake fresh bread, croissants, and a variety of pastries with carefully selected ingredients. Perfect for breakfast before heading out for errands, or simply to enjoy a quiet moment with your coffee.",
        highlights: [
          "Fresh bread baked every morning",
          "Croissants, tequeños and artisan pastries",
          "Full breakfasts available",
          "Lunch and afternoon snacks",
          "Specialty coffee",
        ],
        hours: "Monday to Sunday · 6:30 am – 8:00 pm",
        cta: "Follow us on Instagram",
        ctaHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
    },
  },
  {
    slug: "restaurante",
    image: img2,
    num: "02",
    t: {
      ES: {
        title: "Restaurante",
        short: "Cocina venezolana e internacional en el centro de Caracas.",
        tagline: "Sabor de autor.",
        long: "Nuestro restaurante celebra la gastronomía venezolana con toques internacionales. Utilizamos ingredientes locales de temporada para crear platos que van más allá de lo esperado. Un ambiente tranquilo en medio del bullicio del centro, pensado para que cada comida sea un momento de pausa.",
        highlights: [
          "Gastronomía venezolana e internacional",
          "Ingredientes locales de temporada",
          "Menú de almuerzo y cena",
          "Ambiente tranquilo y climatizado",
          "Servicio personalizado",
        ],
        hours: "Lunes a domingo · 12:00 pm – 9:00 pm",
        cta: "Ver menú",
        ctaHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
      EN: {
        title: "Restaurant",
        short: "Venezuelan and international cuisine in the center of Caracas.",
        tagline: "Chef-driven flavor.",
        long: "Our restaurant celebrates Venezuelan cuisine with international touches. We use local, seasonal ingredients to create dishes that go beyond the expected. A calm setting amid downtown bustle, designed so every meal becomes a moment to pause.",
        highlights: [
          "Venezuelan and international cuisine",
          "Local, seasonal ingredients",
          "Lunch and dinner menu",
          "Calm, air-conditioned atmosphere",
          "Personalized service",
        ],
        hours: "Monday to Sunday · 12:00 pm – 9:00 pm",
        cta: "View menu",
        ctaHref: "https://www.instagram.com/hotel_el_arroyo/",
        phone: "0212-481-93-30",
      },
    },
  },
  {
    slug: "recepcion",
    image: img3,
    num: "03",
    t: {
      ES: {
        title: "Recepción 24h",
        short: "Siempre hay alguien disponible para atenderte.",
        tagline: "Sin límite de horario.",
        long: "Nuestro equipo de recepción está disponible las 24 horas del día, los 7 días de la semana. Llegues cuando llegues, siempre encontrarás a alguien para recibirte, orientarte y hacer tu estadía más cómoda. También gestionamos traslados en Uber y resolvemos cualquier consulta sobre la ciudad.",
        highlights: [
          "Check-in y check-out flexible",
          "Atención en español e inglés",
          "Coordinación de Uber y transporte",
          "Orientación sobre trámites en la zona",
          "Información turística y de la ciudad",
        ],
        hours: "Todos los días · 24 horas",
        cta: "Contáctanos por WhatsApp",
        ctaHref: "https://wa.me/584121234567",
        phone: "0212-481-93-30",
      },
      EN: {
        title: "24h Reception",
        short: "There's always someone available to help you.",
        tagline: "No time limit.",
        long: "Our reception team is available 24 hours a day, 7 days a week. No matter when you arrive, you'll always find someone to welcome you, guide you, and make your stay more comfortable. We also coordinate Uber rides and answer any question about the city.",
        highlights: [
          "Flexible check-in and check-out",
          "Service in Spanish and English",
          "Uber and transportation coordination",
          "Guidance on nearby institutions",
          "City and tourism information",
        ],
        hours: "Every day · 24 hours",
        cta: "Contact us on WhatsApp",
        ctaHref: "https://wa.me/584121234567",
        phone: "0212-481-93-30",
      },
    },
  },
  {
    slug: "transporte",
    image: img2,
    num: "04",
    t: {
      ES: {
        title: "Transporte a tus negocios",
        short: "Te ayudamos a llegar a donde necesitas en el centro de Caracas.",
        tagline: "Movilidad sin complicaciones.",
        long: "Sabemos que muchos de nuestros huéspedes vienen a Caracas por trámites o negocios. Por eso coordinamos traslados en Uber desde y hacia el hotel, te orientamos sobre las rutas del metro y te ayudamos a llegar a tiempo a cualquier institución o reunión en el centro de la ciudad.",
        highlights: [
          "Coordinación de Uber desde recepción",
          "Frente al Metro Teatros — conexión directa",
          "Orientación para llegar al SAIME, TSJ y Miraflores",
          "Asistencia para trámites en la zona",
          "Atención 24h para traslados de madrugada",
        ],
        hours: "Todos los días · 24 horas",
        cta: "Contáctanos",
        ctaHref: "/contacto",
        phone: "0212-481-93-30",
      },
      EN: {
        title: "Transport to your business",
        short: "We help you get wherever you need to go in downtown Caracas.",
        tagline: "Hassle-free mobility.",
        long: "We know many of our guests come to Caracas for errands or business. That's why we coordinate Uber rides to and from the hotel, guide you through the metro routes, and help you arrive on time to any institution or meeting in the city center.",
        highlights: [
          "Uber coordination from reception",
          "Right in front of Metro Teatros — direct connection",
          "Guidance to SAIME, TSJ and Miraflores",
          "Assistance for city-center errands",
          "24h support for early-morning transfers",
        ],
        hours: "Every day · 24 hours",
        cta: "Contact us",
        ctaHref: "/contacto",
        phone: "0212-481-93-30",
      },
    },
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug) || null;
