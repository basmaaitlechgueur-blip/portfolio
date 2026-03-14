export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Application de Gestion de Parking",
    period: "2026",
    tags: ["java Swing", "MySql", "JDBC"],
    summary: "Application de l'organisation efficace des places de stationnement, le suivi des véhicules et la gestion des entrées/sorties .",
    repo: "https://github.com/basmaaitlechgueur-blip/gestion_parking",
   
  },
  {
    title: "Site de Publication Des articles",
    period: "2025",
    tags: ["Html", "Css", "JavaScript", "PHP","Laravel"],
    summary: "Site web ou les gents peuvent publier leurs articles, commenter d'autres articles.",
    
  },
  
];