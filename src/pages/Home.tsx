import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  // Fonction pour obtenir les initiales
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-12 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Bonjour, je suis <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {profile.role}
          </p>
          <p className="mt-6 text-muted-foreground">
            {profile.about}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.slice(0, 6).map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
          
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link to="/projects">Voir mes projets</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
        
        {/* Photo de profil avec Avatar shadcn */}
        <div className="flex justify-center">
          <Avatar className="w-64 h-64 border-4 border-primary/10 shadow-lg">
            <AvatarImage 
              src="/images/profile.jpeg" 
              alt={profile.name}
              className="object-cover"
            />
            <AvatarFallback className="text-4xl bg-muted text-muted-foreground">
              {getInitials(profile.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}