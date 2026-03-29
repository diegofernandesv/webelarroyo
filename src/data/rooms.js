// Shared room data — used by RoomsSection, Habitaciones page, and RoomDetail page

export const rooms = [
  {
    slug: "sencilla",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
    price: 35,
    capacity: 1,
    t: {
      ES: {
        title: "Sencilla",
        shortDesc: "Habitación individual con todo lo esencial para una estadía tranquila.",
        longDesc: "La habitación Sencilla es perfecta para el viajero que busca comodidad y privacidad a un precio accesible. Cuenta con una cama individual de alta calidad, baño privado con agua caliente, aire acondicionado y televisión. El ambiente es tranquilo y bien iluminado, ideal para estadías de trabajo o trámites en Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
      EN: {
        title: "Single",
        shortDesc: "Individual room with everything you need for a peaceful stay.",
        longDesc: "The Single room is perfect for the traveler seeking comfort and privacy at an accessible price. It features a high-quality single bed, private bathroom with hot water, air conditioning, and television. The environment is quiet and well-lit, ideal for work trips or errands in Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "matrimonial-plus",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true",
    price: 45,
    capacity: 2,
    t: {
      ES: {
        title: "Matrimonial Plus",
        shortDesc: "Confortable y bien equipada para una estadía corta o larga.",
        longDesc: "La Matrimonial Plus ofrece todo lo que una pareja necesita para descansar bien en el corazón de Caracas. Dispone de una cama matrimonial de alta calidad, baño privado completo, televisión, aire acondicionado y caja de seguridad. Un espacio limpio, silencioso y acogedor para recargar energías.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "linens", "cleaning"],
      },
      EN: {
        title: "Matrimonial Plus",
        shortDesc: "Comfortable and well-equipped for short or extended stays.",
        longDesc: "The Matrimonial Plus offers everything a couple needs to rest well in the heart of Caracas. It features a high-quality double bed, full private bathroom, television, air conditioning, and a safe. A clean, quiet, and welcoming space to recharge.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "business-day",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
    price: 50,
    capacity: 2,
    t: {
      ES: {
        title: "Business Day",
        shortDesc: "Silenciosa, limpia y moderna, ideal para trámites y escapadas urbanas.",
        longDesc: "La habitación Business Day fue diseñada pensando en el viajero de negocios. Cuenta con escritorio de trabajo, conexión WiFi de alta velocidad, caja de seguridad, televisión y baño privado. El ambiente silencioso y la distribución funcional permiten trabajar con total concentración desde la habitación.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "desk", "linens", "cleaning"],
      },
      EN: {
        title: "Business Day",
        shortDesc: "Quiet, clean and modern — perfect for paperwork or a calm city stay.",
        longDesc: "The Business Day room was designed with the business traveler in mind. It features a work desk, high-speed WiFi, safe, television, and private bathroom. The quiet environment and functional layout allow you to work with full focus right from your room.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "desk", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "doble-superior",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: 55,
    capacity: 2,
    t: {
      ES: {
        title: "Doble Superior",
        shortDesc: "Dos camas cómodas en un ambiente tranquilo y luminoso.",
        longDesc: "La Doble Superior es ideal para dos personas que viajan juntas y prefieren camas separadas. Dispone de dos camas individuales de alta calidad, baño privado, aire acondicionado, televisión y caja de seguridad. El ambiente es luminoso y el espacio está distribuido para maximizar la comodidad de ambos huéspedes.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "linens", "cleaning"],
      },
      EN: {
        title: "Superior Double",
        shortDesc: "Two comfortable beds in a quiet, well-lit room.",
        longDesc: "The Superior Double is ideal for two people traveling together who prefer separate beds. It features two high-quality single beds, private bathroom, air conditioning, television, and a safe. The room is bright and well-laid-out to maximize comfort for both guests.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "triple",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true",
    price: 60,
    capacity: 3,
    t: {
      ES: {
        title: "Triple",
        shortDesc: "Espaciosa y versátil, ideal para grupos pequeños o familias.",
        longDesc: "La habitación Triple es perfecta para familias o grupos de hasta tres personas. Su distribución amplia incluye tres camas, baño privado completo, aire acondicionado, televisión y espacio de almacenaje. Un entorno cómodo y familiar donde todos pueden descansar bien después de un día en la ciudad.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
      EN: {
        title: "Triple",
        shortDesc: "Spacious and versatile, great for small groups or families.",
        longDesc: "The Triple room is perfect for families or groups of up to three people. Its spacious layout includes three beds, a full private bathroom, air conditioning, television, and storage space. A comfortable, family-friendly environment where everyone can rest well after a day in the city.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "suite-ejecutiva",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: 75,
    capacity: 3,
    t: {
      ES: {
        title: "Suite Ejecutiva",
        shortDesc: "Amplia y elegante, perfecta para profesionales y estadías prolongadas.",
        longDesc: "La Suite Ejecutiva es nuestra habitación más completa. Diseñada para el huésped que no quiere sacrificar comodidad, cuenta con zona de estar, escritorio ejecutivo, cama king size, baño privado de lujo, caja de seguridad, televisión y minibar. Ideal para estadías prolongadas o para quienes buscan una experiencia más exclusiva en Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "desk", "minibar", "linens", "cleaning"],
      },
      EN: {
        title: "Executive Suite",
        shortDesc: "Spacious and elegant, ideal for professionals and longer stays.",
        longDesc: "The Executive Suite is our most complete room. Designed for guests who won't compromise on comfort, it features a sitting area, executive desk, king-size bed, luxury private bathroom, safe, television, and minibar. Ideal for longer stays or for those seeking a more exclusive experience in Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "safe", "desk", "minibar", "linens", "cleaning"],
      },
    },
  },
];

export const getRoomBySlug = (slug) => rooms.find((r) => r.slug === slug) || null;
