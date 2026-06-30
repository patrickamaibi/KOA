export interface Project {
  id: number;
  category: string;
  title: string;
  coverImage: string;        // shown on the grid card
  images: string[];          // all images shown in the modal gallery (include coverImage here too)
  description?: string;
  client?: string;
  year?: string;
  location?: string;
}

export const hardcodedProjects: Project[] = [
  {
    id: 1,
    category: "Structural",
    title: "4 UNITS OF 3-BEDROOM SEMI-DETACHED DUPLEX",
    coverImage: "/images/webp/project2.webp",
    images: ["/images/webp/project2.webp"],
    description: "A beautifully completed two-storey duplex, built on solid concrete foundations with strong reinforced frames, durable block walls, and a robust timber roof structure engineered for longevity, safety, and everyday comfort.",
    client: "Apex Realty Group",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    category: "Structural",
    title: "COMMERCIAL COMPLEX",
    coverImage: "/images/webp/KOA36.webp",
    images: ["/images/webp/KOA3.webp",
     "/images/webp/KOA36B.webp",
     "/images/webp/KOA36C.webp",
     "/images/webp/KOA2.webp",
     "/images/webp/KOA36.webp"
    ],
    description: "A large-scale commercial complex delivering a reinforced concrete framed structure housing a warehouse, supermarket, and multipurpose hall built on deep solid foundations, with wide-span roof systems, durable block walls, and heavy-duty flooring engineered to handle high foot traffic and heavy loads for decades.",
    client: "State Ministry of Transport",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 3,
    category: "Structural",
    title: "FULLY DETACHED 5 BEDROOM DUPLEX (Ongoing)",
    coverImage: "/images/webp/residential2.webp",
    images: ["/images/webp/residential2.webp"],
    description: "A magnificent fully detached two-storey residence, built on solid reinforced concrete foundations, strong structural frames, durable block walls, and a robust timber roof engineered to the highest standards for lasting comfort, safety, and elegance.",
    client: "NigerSteel Industries",
    location: "Kano, Nigeria",
  },
  {
    id: 4,
    category: "Structural",
    title: "5 BEDROOM HIGH RISE BUNGALOW",
    coverImage: "/images/webp/project3.webp",
    images: ["/images/webp/project3.webp", "/images/webp/residential4.webp"],
    description: "Expansive and commanding, this 5-bedroom bungalow rises boldly on a single floor where generous living spaces meet heavy-duty concrete work, solid masonry, and a sweeping roof structure purpose-built to shelter a large family in style and absolute security.",
    client: "GreenPower Nigeria Ltd",
    location: "Kaduna, Nigeria",
  },
  {
    id: 5,
    category: "Structural",
    title: "4 UNIT OF 2 BEDROOM SEMI DETACHED TERRACES (Ongoing)",
    coverImage: "/images/webp/KOA35.webp",
    images: ["/images/webp/KOA11.webp",
"/images/webp/project1.webp",
"/images/webp/KOA35.webp",
"/images/webp/KOA35F.webp",
"/images/webp/KOA35D.webp",
"/images/webp/KOA35E.webp",
    ],
    description: "Four homes taking shape each a 2-bedroom semi-detached terrace rising steadily, with strong structural frames, solid masonry walls, and a roof structure soon to crown what will be modern, affordable family living at its finest.",
    client: "Premier Homes Ltd",
    location: "Lekki, Lagos",
  },
  {
    id: 6,
    category: "Structural",
    title: "8 UNITS OF 2 BEDROOM SEMI DETACHED DUPLEX",
    coverImage: "/images/webp/KOA4.webp",
    images: ["/images/webp/KOA4.webp"],
    description: "Eight contemporary homes rising in unison each a well-structured 2-bedroom semi-detached duplex with solid foundations, sturdy masonry walls, and neatly framed floors delivering smart, comfortable living across two generous storeys.",
    location: "Abuja, Nigeria",
  },
  {
    id: 7,
    category: "Structural",
    title: "Gilgal International Group of Schools",
    coverImage: "/images/webp/KOA5.webp",
    images: ["/images/webp/KOA5.webp"],
    description: "A completed single-storey school complex built with solid block construction, covered walkways to protect pupils from sun and rain, spacious classrooms, wide zinc roof, and colourful wall paintings to make every child feel at home.",
    client: "Horizon Properties",
    location: "Lagos, Nigeria",
  },
  {
    id: 8,
    category: "Structural",
    title: "Fully Detached 5 Bedroom Duplex",
    coverImage: "/images/webp/KOA7.webp",
    images: ["/images/webp/KOA7.webp"],
    description: "Design and construction of a fully detached two-storey residential duplex with modern finish, white cornicing, and balcony apartments. Full structural and civil engineering services provided.",
    client: "Urban Shelter Initiative",
    location: "Kano, Nigeria",
  },
  {
    id: 9,
    category: "Structural",
    title: "Cornerstone Mountain Assembly, Worship Center",
    coverImage: "/images/webp/KOA8.webp",
    images: ["/images/webp/KOA8.webp"],
    description: "A completed single-storey worship centre with integrated office spaces solidly built, well-finished, and designed to serve the congregation and administration of Cornerstone Mountain Assembly with comfort and dignity.",
    client: "Private Client",
    location: "Lagos, Nigeria",
  },
  {
    id: 10,
    category: "Structural",
    title: "6 UNITS (TWO STOREY) OF 2 BEDROOM SEMI-DETACHED DUPLEX",
    coverImage: "/images/webp/project8.webp",
    images: ["/images/webp/project8.webp"],
    description: "Ongoing construction of a residential block at lintel and ring beam level. Timber formwork and bamboo scaffolding are in place for the upper slab pour, with reinforcement already set.",
    client: "Private Developer",
    location: "Lagos, Nigeria",
  },
  {
    id: 11,
    category: "Structural",
    title: "Structural Framework Design",
    coverImage: "/images/webp/KOA30D.webp",
    images: ["/images/webp/KOA30.webp",
      "/images/webp/KOA30B.webp",
      "/images/webp/KOA32.webp",
    "/images/webp/KOA30D.webp",],
  description: "Comprehensive structural framework design and analysis for a landmark development. Full load calculations, member sizing, and construction documentation were delivered.",
    client: "Landmark Developers",
    location: "Abuja, Nigeria",
  },

   {
    id: 12,
    category: "Structural",
    title: "8 UNITS OF 2 BEDROOM SEMI DETACHED DUPLEX",
    coverImage: "/images/webp/KOA29.webp",
    images: ["/images/webp/KOA29.webp",
       "/images/webp/KOA31B.webp",
    "/images/webp/KOA29.webp",
    "/images/webp/KOA31.webp"
    ],
    description: "Eight contemporary homes rising in unison each a well-structured 2-bedroom semi-detached duplex with solid foundations, sturdy masonry walls, and neatly framed floors delivering smart, comfortable living across two generous storeys.",
    client: "Various Clients",
    location: "Abuja, Nigeria",
  },

 {
    id: 13,
    category: "Structural",
    title: "8 UNITS OF 2 BEDROOM SEMI DETACHED DUPLEX",
    coverImage: "/images/webp/project7.webp",
    images: ["/images/webp/project9.webp",],
    description: "Eight contemporary homes rising in unison each a well-structured 2-bedroom semi-detached duplex with solid foundations, sturdy masonry walls, and neatly framed floors delivering smart, comfortable living across two generous storeys.",
    client: "Various Clients",
    location: "Abuja, Nigeria",
  },

  {
    id: 14,
    category: "Structural",
    title: "8 UNITS OF 2 BEDROOM SEMI DETACHED DUPLEX",
    coverImage: "/images/webp/KOA33.webp",
    images: ["/images/webp/KOA33B.webp",
      "/images/webp/KOA33C.webp"
    ],
    description: "Eight contemporary homes rising in unison each a well-structured 2-bedroom semi-detached duplex with solid foundations, sturdy masonry walls, and neatly framed floors delivering smart, comfortable living across two generous storeys.",
    client: "Various Clients",
    location: "Abuja, Nigeria",
  },

  {
    id: 15,
    category: "Highway",
    title: "Asphalt Road Paving Works",
    coverImage: "/images/webp/highway.webp",
    images: ["/images/webp/highway3.webp",
      "/images/webp/highway2.webp"
    ],
    description: "Full-scale asphalt road paving and compaction works on a major road corridor. Our team deployed heavy-duty asphalt rollers and pavers to deliver a smooth, durable surface meeting federal highway standards.",
    client: "Federal Ministry of Works",
    location: "Nigeria",
  },
 

  {
    id: 16,
    category: "Industrial",
    title: "Steel Structural Welding Works",
    coverImage: "/images/webp/industrial2.webp",
    images: ["/images/webp/industrial3.webp"],
    description: "Structural steel welding and fabrication works on an industrial facility. Our certified welders carried out precision welding of steel members within a steel-framed warehouse structure.",
    client: "Dangote Group",
    location: "Apapa, Lagos",
  },
  
  
  {
    id: 17,
    category: "Others",
    title: "Solar Inverter & Electrical Panel Works",
    coverImage: "/images/webp/solar2.webp",
    images: ["/images/webp/solar.webp"],
    description: "Installation and commissioning of solar inverter systems, charge controllers, and distribution panels. Our KOA engineers handle full wiring, load balancing, and system testing to ensure safe and reliable power supply.",
    client: "Various Clients",
    location: "Abuja, Nigeria",
  },
];