export interface Profile {
  id: number;
  image: string;
  name: string;
  description: string;
}

export const profiles: Profile[] = [
  {
    id: 1,
    image: "/images/woman/woman.webp",
    name: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    id: 2,
    image: "/images/man/man.webp",
    name: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    id: 3,
    image: "/images/cat/cat.webp",
    name: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },
];

export const shuffleArray = (array: Profile[]) => {
  return array.sort(() => Math.random() - 0.5);
};
