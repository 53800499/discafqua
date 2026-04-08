export interface Country {
  id: string;
  name: string;
  description: string;
  image: string;
  continent: string;
  places: number;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  countryId: string;
  country: string;
  latitude: number;
  longitude: number;
  category: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  countryId: string;
  country: string;
  audioUrl?: string;
  pages?: StoryPage[];
}

export interface StoryPage {
  pageNumber: number;
  content: string;
  image?: string;
}

export interface TourGuide {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  rating: number;
  experience: string;
  languages: string[];
  pricePerHour: number;
  available: boolean;
}

export const countries: Country[] = [
  {
    id: "egypt",
    name: "Égypte",
    description: "Découvrez les pyramides millénaires et les trésors du Nil",
    image: "https://images.unsplash.com/photo-1696269061458-0b405e2fe812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJhbWlkcyUyMGVneXB0JTIwYW5jaWVudCUyMG1vbnVtZW50fGVufDF8fHx8MTc3NDM1Mjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    continent: "Afrique du Nord",
    places: 12,
  },
  {
    id: "south-africa",
    name: "Afrique du Sud",
    description: "Nature sauvage, villes modernes et diversité culturelle",
    image: "https://images.unsplash.com/photo-1592910725283-4a7752699e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMHNvdXRoJTIwYWZyaWNhJTIwbW91bnRhaW58ZW58MXx8fHwxNzc0MjgzOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    continent: "Afrique Australe",
    places: 18,
  },
  {
    id: "tanzania",
    name: "Tanzanie",
    description: "Safaris inoubliables et plages paradisiaques de Zanzibar",
    image: "https://images.unsplash.com/photo-1635327397723-f5e357e12408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMG5hdGlvbmFsJTIwcGFya3xlbnwxfHx8fDE3NzQzNTI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    continent: "Afrique de l'Est",
    places: 15,
  },
  {
    id: "morocco",
    name: "Maroc",
    description: "Du désert du Sahara aux médinas colorées",
    image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    continent: "Afrique du Nord",
    places: 20,
  },
  {
    id: "benin",
    name: "Bénin",
    description: "Berceau du vaudou et richesse historique",
    image: "https://images.unsplash.com/photo-1734866689982-2afd07eb149a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5pbiUyMHRyYWRpdGlvbmFsJTIwbWFya2V0JTIwYWZyaWNhfGVufDF8fHx8MTc3NDM1Mjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    continent: "Afrique de l'Ouest",
    places: 8,
  },
  {
    id: "kenya",
    name: "Kenya",
    description: "Parcs nationaux spectaculaires et culture Masai",
    image: "https://images.unsplash.com/photo-1770946611126-a3d202fb3a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwbGFuZHNjYXBlJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzc0MzUyOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    continent: "Afrique de l'Est",
    places: 14,
  },
];

export const places: Place[] = [
  {
    id: "pyramids-giza",
    name: "Pyramides de Gizeh",
    description: "Les majestueuses pyramides, merveilles du monde antique",
    image: "https://images.unsplash.com/photo-1696269061458-0b405e2fe812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJhbWlkcyUyMGVneXB0JTIwYW5jaWVudCUyMG1vbnVtZW50fGVufDF8fHx8MTc3NDM1Mjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "egypt",
    country: "Égypte",
    latitude: 29.9792,
    longitude: 31.1342,
    category: "Monument",
  },
  {
    id: "table-mountain",
    name: "Table Mountain",
    description: "Montagne emblématique dominant Le Cap",
    image: "https://images.unsplash.com/photo-1592910725283-4a7752699e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMHNvdXRoJTIwYWZyaWNhJTIwbW91bnRhaW58ZW58MXx8fHwxNzc0MjgzOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "south-africa",
    country: "Afrique du Sud",
    latitude: -33.9628,
    longitude: 18.4098,
    category: "Nature",
  },
  {
    id: "serengeti",
    name: "Parc National du Serengeti",
    description: "Observez la grande migration et les Big Five",
    image: "https://images.unsplash.com/photo-1635327397723-f5e357e12408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNlcmVuZ2V0aSUyMG5hdGlvbmFsJTIwcGFya3xlbnwxfHx8fDE3NzQzNTI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "tanzania",
    country: "Tanzanie",
    latitude: -2.3333,
    longitude: 34.8333,
    category: "Safari",
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    description: "Plages de sable blanc et eaux turquoise",
    image: "https://images.unsplash.com/photo-1731329571540-a1d6dfc902b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYmVhY2glMjB6YW56aWJhciUyMHBhcmFkaXNlfGVufDF8fHx8MTc3NDM1Mjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "tanzania",
    country: "Tanzanie",
    latitude: -6.1659,
    longitude: 39.2026,
    category: "Plage",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    description: "La ville rouge et ses souks enchanteurs",
    image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "morocco",
    country: "Maroc",
    latitude: 31.6295,
    longitude: -7.9811,
    category: "Ville",
  },
  {
    id: "sahara",
    name: "Désert du Sahara",
    description: "Les dunes dorées du plus grand désert chaud",
    image: "https://images.unsplash.com/photo-1675682346189-25c58dd5a214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwZGVzZXJ0JTIwc2FoYXJhJTIwZHVuZXN8ZW58MXx8fHwxNzc0MzUyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "morocco",
    country: "Maroc",
    latitude: 31.0,
    longitude: -5.0,
    category: "Désert",
  },
  {
    id: "ouidah",
    name: "Porte du Non-Retour",
    description: "Lieu de mémoire de la traite négrière",
    image: "https://images.unsplash.com/photo-1734866689982-2afd07eb149a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW5pbiUyMHRyYWRpdGlvbmFsJTIwbWFya2V0JTIwYWZyaWNhfGVufDF8fHx8MTc3NDM1Mjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "benin",
    country: "Bénin",
    latitude: 6.3617,
    longitude: 2.0850,
    category: "Monument",
  },
];

export const stories: Story[] = [
  {
    id: "story-1",
    title: "L'héritage des Pharaons",
    excerpt: "Plongez dans l'histoire fascinante de l'Égypte antique",
    content: "L'Égypte ancienne a marqué l'histoire de l'humanité avec ses pyramides monumentales, ses pharaons légendaires et ses hiéroglyphes mystérieux. Découvrez comment cette civilisation a façonné le monde.",
    image: "https://images.unsplash.com/photo-1696269061458-0b405e2fe812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJhbWlkcyUyMGVneXB0JTIwYW5jaWVudCUyMG1vbnVtZW50fGVufDF8fHx8MTc3NDM1Mjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "egypt",
    country: "Égypte",
    pages: [
      {
        pageNumber: 1,
        content: "Il y a plus de 4500 ans, sur les rives du Nil, une civilisation extraordinaire a vu le jour. L'Égypte ancienne, avec ses pyramides monumentales et ses pharaons légendaires, continue de fasciner le monde entier.\n\nLes pyramides de Gizeh, dernière merveille du monde antique encore debout, témoignent du génie architectural et de l'organisation sociale remarquable de cette ��poque.",
        image: "https://images.unsplash.com/photo-1696269061458-0b405e2fe812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXJhbWlkcyUyMGVneXB0JTIwYW5jaWVudCUyMG1vbnVtZW50fGVufDF8fHx8MTc3NDM1Mjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        pageNumber: 2,
        content: "Le pharaon Khéops ordonna la construction de la plus grande pyramide vers 2560 avant J.-C. Plus de 100 000 ouvriers travaillèrent pendant 20 ans pour ériger ce monument de 146 mètres de hauteur.\n\nContrairement à la croyance populaire, ces ouvriers n'étaient pas des esclaves, mais des travailleurs qualifiés et rémunérés qui considéraient leur travail comme un honneur.",
      },
      {
        pageNumber: 3,
        content: "Les hiéroglyphes, cette écriture sacrée composée de plus de 700 symboles, restèrent un mystère jusqu'en 1822. C'est Jean-François Champollion qui, grâce à la pierre de Rosette, réussit à déchiffrer ce langage ancien.\n\nCette découverte ouvrit les portes d'une connaissance inestimable sur la vie, les croyances et l'organisation de l'Égypte antique.",
      },
      {
        pageNumber: 4,
        content: "Le Grand Sphinx, gardien éternel des pyramides, mesure 73 mètres de long et 20 mètres de haut. Sculpté dans un seul bloc de calcaire, il représente probablement le pharaon Khéphren.\n\nAujourd'hui encore, les pyramides et le Sphinx continuent d'inspirer admiration et respect, symboles intemporels d'une civilisation qui a façonné l'histoire de l'humanité.",
      },
    ],
  },
  {
    id: "story-2",
    title: "Le royaume du Dahomey",
    excerpt: "L'histoire des Amazones du Bénin et leur bravoure",
    content: "Le royaume du Dahomey, aujourd'hui le Bénin, était célèbre pour ses guerrières d'élite, les Amazones. Ces femmes courageuses ont défendu leur royaume avec une férocité légendaire.",
    image: "https://images.unsplash.com/photo-1768212566108-4ce4f329e4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "benin",
    country: "Bénin",
    pages: [
      {
        pageNumber: 1,
        content: "Au cœur de l'Afrique de l'Ouest, le royaume du Dahomey (actuel Bénin) fut l'un des États les plus puissants et organisés du continent entre le XVIIe et le XIXe siècle.\n\nCe qui distinguait ce royaume était son armée unique : les Amazones du Dahomey, ou Mino en langue fon, signifiant 'nos mères'. Ces guerrières d'élite représentaient jusqu'à un tiers de l'armée royale.",
        image: "https://images.unsplash.com/photo-1768212566108-4ce4f329e4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        pageNumber: 2,
        content: "Les Amazones étaient soumises à un entraînement rigoureux dès leur plus jeune âge. Elles pratiquaient le combat rapproché, le tir à l'arc, et maniaient des armes redoutables.\n\nCélibataires par obligation durant leur service, elles faisaient vœu de chasteté et vivaient dans des quartiers séparés au sein du palais royal. Leur courage et leur discipline étaient légendaires.",
      },
      {
        pageNumber: 3,
        content: "Les témoignages des explorateurs européens décrivent ces guerrières comme féroces et intrépides au combat. Lors des batailles, elles combattaient en première ligne et ne reculaient jamais.\n\nLeur réputation était telle que leur simple présence sur le champ de bataille suffisait parfois à décourager l'ennemi. Elles incarnaient la force et la détermination du royaume du Dahomey.",
      },
    ],
  },
  {
    id: "story-3",
    title: "La grande migration",
    excerpt: "Le spectacle naturel le plus impressionnant d'Afrique",
    content: "Chaque année, plus de 2 millions de gnous, zèbres et gazelles traversent le Serengeti en Tanzanie dans une quête perpétuelle de pâturages verts. Un spectacle époustouflant de la nature.",
    image: "https://images.unsplash.com/photo-1760199025541-63bc2c3a7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2F2YW5uYSUyMHN1bnNldCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "tanzania",
    country: "Tanzanie",
    pages: [
      {
        pageNumber: 1,
        content: "Chaque année, la savane africaine est le théâtre du plus grand mouvement d'animaux terrestres de la planète : la Grande Migration.\n\nPlus de 2 millions de gnous, accompagnés de 500 000 zèbres et d'innombrables gazelles, parcourent plus de 3000 kilomètres dans un cycle perpétuel à la recherche d'eau et de pâturages.",
        image: "https://images.unsplash.com/photo-1760199025541-63bc2c3a7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2F2YW5uYSUyMHN1bnNldCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        pageNumber: 2,
        content: "Le voyage commence dans le sud du Serengeti, en Tanzanie, où les gnous donnent naissance à près de 500 000 petits entre janvier et mars. C'est un moment d'abondance mais aussi de grande vulnérabilité.\n\nLes prédateurs - lions, léopards, guépards et hyènes - profitent de cette période pour chasser les nouveau-nés les plus faibles.",
      },
      {
        pageNumber: 3,
        content: "En mai-juin, les troupeaux se mettent en marche vers le nord. Le moment le plus spectaculaire survient lors de la traversée de la rivière Mara, entre juillet et septembre.\n\nDes centaines de milliers d'animaux doivent braver les eaux infestées de crocodiles du Nil, dans une course éperdue vers les prairies verdoyantes du Masai Mara, au Kenya.",
      },
      {
        pageNumber: 4,
        content: "La migration n'est pas seulement un spectacle visuel impressionnant, c'est aussi un élément vital pour l'écosystème de la savane africaine.\n\nLe passage des troupeaux fertilise les sols et maintient l'équilibre entre les différentes espèces végétales et animales, perpétuant ainsi un cycle de vie millénaire dans les plaines d'Afrique de l'Est.",
      },
    ],
  },
  {
    id: "story-4",
    title: "Les trésors de Marrakech",
    excerpt: "Découvrez la magie de la ville rouge",
    content: "Marrakech, surnommée la ville rouge, enchante les visiteurs avec ses souks colorés, ses palais somptueux et ses jardins secrets. Une immersion dans la culture marocaine authentique.",
    image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "morocco",
    country: "Maroc",
    pages: [
      {
        pageNumber: 1,
        content: "Marrakech, la 'Ville Rouge', est un joyau du Maroc, fondée en 1062 par les Almoravides. Son nom évoque les murs de pisé rose-orangé qui entourent la médina.\n\nCette cité impériale est un mélange envoûtant de traditions ancestrales et de modernité, où les sens sont constamment en éveil.",
        image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        pageNumber: 2,
        content: "Au cœur de Marrakech se trouve la place Jemaa el-Fna, classée au patrimoine mondial de l'UNESCO. Le jour, elle accueille marchands de jus d'orange et vendeurs d'épices.\n\nLa nuit, elle se transforme en un théâtre vivant où charmeurs de serpents, conteurs et musiciens gnaoua créent une atmosphère magique unique au monde.",
      },
      {
        pageNumber: 3,
        content: "Les souks de Marrakech sont un labyrinthe fascinant de ruelles étroites où l'on trouve de tout : tapis berbères, lanternes en cuivre, babouches colorées, épices exotiques...\n\nChaque souk est spécialisé : le souk des teinturiers avec ses écheveaux colorés, le souk des bijoutiers, le souk des tanneurs avec ses cuves millénaires. C'est un voyage dans le temps et les traditions artisanales.",
      },
    ],
  },
];

export const tourGuides: TourGuide[] = [
  {
    id: "guide-1",
    name: "Amina El-Sayed",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQzNTMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: "Histoire et archéologie",
    rating: 4.9,
    experience: "12 ans d'expérience",
    languages: ["Français", "Arabe", "Anglais"],
    pricePerHour: 45,
    available: true,
  },
  {
    id: "guide-2",
    name: "Kwame Mensah",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQzNTMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: "Safaris et faune sauvage",
    rating: 5.0,
    experience: "8 ans d'expérience",
    languages: ["Français", "Swahili", "Anglais"],
    pricePerHour: 55,
    available: true,
  },
  {
    id: "guide-3",
    name: "Fatima Diallo",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQzNTMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: "Culture et traditions",
    rating: 4.8,
    experience: "10 ans d'expérience",
    languages: ["Français", "Wolof", "Anglais"],
    pricePerHour: 40,
    available: false,
  },
  {
    id: "guide-4",
    name: "Omar Benali",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQzNTMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialty: "Gastronomie locale",
    rating: 4.7,
    experience: "6 ans d'expérience",
    languages: ["Français", "Arabe", "Espagnol"],
    pricePerHour: 35,
    available: true,
  },
];