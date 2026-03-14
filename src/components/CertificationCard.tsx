import type { Certification } from "@/data/certifications";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function CertificationCard({ cert }: { cert: Certification }) {
  const isExpired = cert.status === "expired" || 
    (cert.expiryDate && new Date(cert.expiryDate) < new Date());

  return (
    <Card className={`flex flex-col h-full ${isExpired ? "opacity-75" : ""}`}>
      <CardHeader className="flex flex-row items-center gap-4">
        {cert.image ? (
          <img 
            src={cert.image} 
            alt={cert.imageAlt || cert.title}
            className="w-16 h-16 object-contain"
          />
        ) : (
          <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Badge</span>
          </div>
        )}
        <div className="flex-1">
          <CardTitle className="text-lg">{cert.title}</CardTitle>
          <CardDescription>{cert.issuer}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-sm text-muted-foreground mb-3">
          Obtenue le {formatDate(cert.issueDate)}
          {cert.expiryDate && ` · Expire le ${formatDate(cert.expiryDate)}`}
        </div>
        
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {cert.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {cert.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{cert.skills.length - 4}
              </Badge>
            )}
          </div>
        )}

        {cert.tags && cert.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {cert.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4">
        {cert.credentialUrl ? (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
              Voir le certificat
            </a>
          </Button>
        ) : (
          <p className="text-xs text-muted-foreground w-full text-center">
            {cert.credentialId && `ID: ${cert.credentialId}`}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}