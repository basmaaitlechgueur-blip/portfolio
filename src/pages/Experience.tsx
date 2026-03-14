import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold mb-8">Expérience Professionnelle</h1>
      
      <Card className="p-12 text-center">
        <Briefcase className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">En construction</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Cette section sera bientôt enrichie avec mes expériences professionnelles. 
          Revenez plus tard ou consultez mes projets en attendant !
        </p>
      </Card>
    </section>
  );
}