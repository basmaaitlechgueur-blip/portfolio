export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate&Jpa",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-cd90af6b-8e94-4e1a-9805-92526f204bb6-242893",
    skills: ["java", "Hibernate", "jpa"],
    
    
    status: "active"
  },
  
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-cd90af6b-8e94-4e1a-9805-92526f204bb6-819603",
    skills: ["React"],
    tags: ["Frontend", "React"],
    status: "active"
  }
];