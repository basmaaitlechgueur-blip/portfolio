export type Experience = {
  company: string;
  position: string;
  location?: string;
  start: string;
  end?: string;
  description: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    company: "",
    position: "Développeur Full Stack",
    location: "Casablanca (Remote)",
    start: "2024-06",
    end: "Présent",
    description: [
      "Développement d'applications web avec React et Node.js,des sites web avec Html,Css,JS,PHP et Laravel",
      
    ],
    technologies: ["React", "TypeScript", "Node.js", "Html","Css","JavaScript" ,"MySql"]
  },
  
];