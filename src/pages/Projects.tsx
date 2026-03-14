import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              {project.period && (
                <CardDescription>{project.period}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.repo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Démo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}