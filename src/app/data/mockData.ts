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
  },
  {
    id: "story-2",
    title: "Le royaume du Dahomey",
    excerpt: "L'histoire des Amazones du Bénin et leur bravoure",
    content: "Le royaume du Dahomey, aujourd'hui le Bénin, était célèbre pour ses guerrières d'élite, les Amazones. Ces femmes courageuses ont défendu leur royaume avec une férocité légendaire.",
    image: "https://images.unsplash.com/photo-1768212566108-4ce4f329e4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "benin",
    country: "Bénin",
  },
  {
    id: "story-3",
    title: "La grande migration",
    excerpt: "Le spectacle naturel le plus impressionnant d'Afrique",
    content: "Chaque année, plus de 2 millions de gnous, zèbres et gazelles traversent le Serengeti en Tanzanie dans une quête perpétuelle de pâturages verts. Un spectacle époustouflant de la nature.",
    image: "https://images.unsplash.com/photo-1760199025541-63bc2c3a7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2F2YW5uYSUyMHN1bnNldCUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTI5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "tanzania",
    country: "Tanzanie",
  },
  {
    id: "story-4",
    title: "Les trésors de Marrakech",
    excerpt: "Découvrez la magie de la ville rouge",
    content: "Marrakech, surnommée la ville rouge, enchante les visiteurs avec ses souks colorés, ses palais somptueux et ses jardins secrets. Une immersion dans la culture marocaine authentique.",
    image: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBtb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MzUyOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    countryId: "morocco",
    country: "Maroc",
  },
];
