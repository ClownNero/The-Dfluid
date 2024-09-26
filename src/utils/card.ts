export interface Card {
  id: number;
  name: string;
  number: number;
  continent: string;
  image: string;
  description: string;
}

export const cardData: Card[] = [
  {
    id: 1,
    name: "Russia, Saint Basil's Cathedral",
    number: 1000,
    continent: "Asia",
    image: "/images/places/Russia.webp",
    description:
      "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
  },
  {
    id: 2,
    name: "Spain, Sagrada Família",
    number: 1882,
    continent: "Europe",
    image: "/images/places/spain.webp",
    description: `The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.`,
  },
  {
    id: 3,
    name: "US, Fallingwater",
    number: 1935,
    continent: "America",
    image: "/images/places/US.webp",
    description:
      "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.",
  },
  {
    id: 4,
    name: "Busan, Yongdusan Park",
    number: 2000,
    continent: "Asia",
    image: "/images/places/Busan.jpg",
    description:
      "Yongdusan Park is located in Jung-gu, Busan, and is one of the city's iconic landmarks. Established in 1973, the park offers beautiful views of Busan Harbor and the city skyline. At the top of Yongdusan Mountain stands Busan Tower, where visitors can enjoy expansive views of the surrounding area. The park features various sculptures and flower beds, making it a popular spot for leisurely walks. Additionally, Yongdusan Park serves as a space to experience Busan's history and culture, attracting many tourists throughout the year.",
  },
  {
    id: 5,
    name: "Gyeongju, guksa Temple",
    number: 1500,
    continent: "Asia",
    image: "/images/places/Gyeongju.webp",
    description:
      "Bulguksa Temple is a representative temple of the Silla Dynasty located in Gyeongju, Gyeongsangbuk-do, and was founded in 774. This temple is designated as a UNESCO World Heritage Site and is known for showcasing the essence of Korean Buddhist architecture. Bulguksa features exquisite stone pagodas, the Daeungjeon Hall, and beautiful gardens, making it a beloved destination for many tourists. Notably, the Seokgatap and Dabotap pagodas are iconic structures of Bulguksa, renowned for their unique beauty and historical significance. The temple offers visitors a peaceful and reverent experience, allowing them to enjoy diverse natural scenery throughout the four seasons.",
  },
  {
    id: 6,
    name: "Italy, Pica",
    number: 1173,
    continent: "Europe",
    image: "/images/places/Italy.webp",
    description:
      "The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.",
  },
  {
    id: 7,
    name: "Seoul, Lotte World Tower",
    number: 1600,
    continent: "Asia",
    image: "/images/places/Seoul.jpg",
    description: `Lotte World Tower is located in Songpa-gu, Seoul, and is the tallest building in South Korea, completed in 2016. Standing at 555 meters with 123 floors, it has become one of Seoul's landmarks. The tower is designed for various purposes, including a shopping mall, hotel, offices, and an observation deck. Notably, "Seoul Sky," located on the 117th floor, offers panoramic views of the city and its surroundings. This popular attraction draws many tourists throughout the year, blending modern architecture with cultural and entertainment spaces.`,
  },
];
