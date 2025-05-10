export interface Project {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export const projects: Project[] = [
  {
    image:
      "https://res.cloudinary.com/dgqefab9k/image/upload/v1746500316/Screenshot_2025-05-05_at_22.58.05_j8wu22.png",
    title: "tin can hill site",
    description:
      "Built a responsive website for the Tin Can Hill Conservation Committee using Next.js, Tailwind (Daisy UI), and Contentful CMS to support environmental advocacy and preserve greenspace in Yellowknife, NWT.",
    date: "2023-01-01",
    link: "https://github.com/jesssyd/tincanhill",
  },
];
