// Shared room data — used by RoomsSection, Habitaciones page, and RoomDetail page

export const rooms = [
  {
    slug: "matrimonial-estandar",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
    price: 40,
    capacity: 2,
    t: {
      ES: {
        title: "Matrimonial Estándar",
        shortDesc: "Habitación matrimonial con lo esencial para una estadía cómoda y tranquila.",
        longDesc: "La Matrimonial Estándar es ideal para parejas o viajeros que buscan comodidad a un precio accesible. Cuenta con cama matrimonial, televisión, baño privado con agua caliente y aire acondicionado de ventana. Un espacio limpio y acogedor en el corazón de Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
      EN: {
        title: "Standard Matrimonial",
        shortDesc: "Double room with all the essentials for a comfortable, peaceful stay.",
        longDesc: "The Standard Matrimonial is ideal for couples or travelers seeking comfort at an accessible price. It features a double bed, television, private bathroom with hot water, and a window air conditioner. A clean and welcoming space in the heart of Caracas.",
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
        title: "Matrimonial Plus Promo",
        shortDesc: "Confort mejorado con Smart TV y aire acondicionado tipo split.",
        longDesc: "La Matrimonial Plus Promo ofrece una experiencia superior para parejas. Disfruta de cama matrimonial, Smart TV 32\", aire acondicionado tipo split para mayor silencio y eficiencia, y baño privado completo. El equilibrio perfecto entre comodidad y valor.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
      EN: {
        title: "Matrimonial Plus Promo",
        shortDesc: "Enhanced comfort with Smart TV and split air conditioning.",
        longDesc: "The Matrimonial Plus Promo offers an upgraded experience for couples. Enjoy a double bed, 32\" Smart TV, split air conditioning for quieter and more efficient cooling, and a full private bathroom. The perfect balance of comfort and value.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "suite-junior",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: 60,
    capacity: 2,
    t: {
      ES: {
        title: "Suite Junior",
        shortDesc: "Suite amplia con sala, Smart TV 43\" y nevera ejecutiva.",
        longDesc: "La Suite Junior es perfecta para quienes buscan un espacio más amplio y equipado. Cuenta con cama matrimonial, sala de estar, Smart TV 43\", aire acondicionado tipo split, baño privado y nevera ejecutiva. Ideal para estadías prolongadas o para disfrutar de mayor privacidad y comodidad.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
      EN: {
        title: "Junior Suite",
        shortDesc: "Spacious suite with sitting area, 43\" Smart TV, and executive fridge.",
        longDesc: "The Junior Suite is perfect for guests seeking more space and amenities. It features a double bed, sitting area, 43\" Smart TV, split air conditioning, private bathroom, and executive fridge. Ideal for longer stays or for those who want extra privacy and comfort.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "suite-cabana",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: 60,
    capacity: 3,
    t: {
      ES: {
        title: "Suite Cabaña",
        shortDesc: "Ambiente único tipo cabaña con camas individuales o king y nevera ejecutiva.",
        longDesc: "La Suite Cabaña ofrece un ambiente acogedor y diferente. Configurada con camas individuales o king según disponibilidad, sala de estar, Smart TV 43\", aire acondicionado tipo split, baño privado y nevera ejecutiva. Una experiencia acogedora ideal para parejas o amigos viajando juntos.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
      EN: {
        title: "Cabin Suite",
        shortDesc: "Unique cabin-style atmosphere with twin or king beds and executive fridge.",
        longDesc: "The Cabin Suite offers a cozy and distinctive atmosphere. Configured with twin or king beds depending on availability, sitting area, 43\" Smart TV, split air conditioning, private bathroom, and executive fridge. A welcoming experience ideal for couples or friends traveling together.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "triple-estandar",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/27ed5d5f5c184350a998540474fd1713d48e6502?placeholderIfAbsent=true",
    price: 55,
    capacity: 3,
    t: {
      ES: {
        title: "Triple Estándar",
        shortDesc: "Para tres personas con cama matrimonial, individual y Smart TV.",
        longDesc: "La Triple Estándar es perfecta para familias pequeñas o grupos de tres personas. Dispone de cama matrimonial más cama individual, Smart TV 32\", aire acondicionado tipo split y baño privado. Un espacio funcional y cómodo para descansar bien en la ciudad.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
      EN: {
        title: "Standard Triple",
        shortDesc: "For three guests with double bed, single bed, and Smart TV.",
        longDesc: "The Standard Triple is perfect for small families or groups of three. It features a double bed plus a single bed, 32\" Smart TV, split air conditioning, and a private bathroom. A functional and comfortable space to rest well in the city.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "cuadruple-estandar",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/bb0a7cfa8f105c812bf6fce9a5fdaacb5962f634?placeholderIfAbsent=true",
    price: 60,
    capacity: 4,
    t: {
      ES: {
        title: "Cuádruple Estándar",
        shortDesc: "Dos camas matrimoniales para hasta cuatro personas, con Smart TV.",
        longDesc: "La Cuádruple Estándar es ideal para grupos o familias de hasta cuatro personas. Cuenta con dos camas matrimoniales, Smart TV 32\", aire acondicionado tipo split y baño privado. Una habitación amplia y práctica para estadías cómodas en grupo.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
      EN: {
        title: "Standard Quadruple",
        shortDesc: "Two double beds for up to four guests, with Smart TV.",
        longDesc: "The Standard Quadruple is ideal for groups or families of up to four people. It features two double beds, 32\" Smart TV, split air conditioning, and a private bathroom. A spacious and practical room for comfortable group stays.",
        amenities: ["wifi", "ac", "bath", "tv", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "cuadruple-plus",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: 70,
    capacity: 4,
    t: {
      ES: {
        title: "Cuádruple Plus",
        shortDesc: "Cuádruple premium con sala, Smart TV 43\" y nevera ejecutiva.",
        longDesc: "La Cuádruple Plus lleva la estadía en grupo a otro nivel. Dispone de dos camas matrimoniales, sala de estar, Smart TV 43\", aire acondicionado tipo split, baño privado y nevera ejecutiva. El espacio ideal para familias o grupos que valoran la comodidad y el confort extra.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
      EN: {
        title: "Quadruple Plus",
        shortDesc: "Premium quadruple with sitting area, 43\" Smart TV, and executive fridge.",
        longDesc: "The Quadruple Plus takes group stays to another level. It features two double beds, a sitting area, 43\" Smart TV, split air conditioning, private bathroom, and executive fridge. The ideal space for families or groups who value extra comfort and amenities.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
    },
  },
  {
    slug: "suite-arroyo",
    image: "https://cdn.builder.io/api/v1/image/assets/e9cac1e18ae64186984fb4d639c633bc/d406fb2ce66360bdf62fb0be768dd3d45440201c?placeholderIfAbsent=true",
    price: 75,
    capacity: 4,
    t: {
      ES: {
        title: "Suite El Arroyo",
        shortDesc: "Nuestra suite más exclusiva con dos camas matrimoniales y nevera ejecutiva.",
        longDesc: "La Suite El Arroyo es la experiencia más completa de nuestro hotel. Con dos camas matrimoniales, sala de estar, Smart TV 43\", aire acondicionado tipo split y nevera ejecutiva, esta suite ofrece todo el espacio y los detalles para una estadía verdaderamente memorable en Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
      EN: {
        title: "Suite El Arroyo",
        shortDesc: "Our most exclusive suite with two double beds and executive fridge.",
        longDesc: "Suite El Arroyo is the most complete experience our hotel offers. With two double beds, a sitting area, 43\" Smart TV, split air conditioning, and executive fridge, this suite provides all the space and details for a truly memorable stay in Caracas.",
        amenities: ["wifi", "ac", "bath", "tv", "minibar", "linens", "cleaning"],
      },
    },
  },
];

export const getRoomBySlug = (slug) => rooms.find((r) => r.slug === slug) || null;
