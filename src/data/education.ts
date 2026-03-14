export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques – Marrakech",
    degree: "Deust",
    field: "Mathématiques, Informatique, Physique et Chimie",
    location: "Marrakech",
    start: "2022-09",
    end: "2025-06",
  },
  {
    school: "Faculté des Sciences et Techniques – Marrakech",
    degree: "Licence",
    field: "Informatique",
    location: "Marrakech",
    start: "2025-09",
    end: "2026-06",
    courses: ["Algorithmique", "Base de données", "Programmation web", "Réseaux"],
    
  }
];