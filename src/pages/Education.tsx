import { education } from "@/data/education";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatDate(dateStr: string) {
  if (dateStr === "Présent") return "Présent";
  const [year, month] = dateStr.split("-");
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function Education() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold mb-8">Formations</h1>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>
                    {edu.degree}{edu.field ? ` — ${edu.field}` : ""}
                  </CardTitle>
                  <CardDescription>{edu.school} • {edu.location}</CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatDate(edu.start)} — {formatDate(edu.end || "Présent")}
                  {edu.gpa && ` • GPA ${edu.gpa}`}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {edu.courses && edu.courses.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Cours principaux :</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <Badge key={course} variant="outline">{course}</Badge>
                    ))}
                  </div>
                </div>
              )}
              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}