import { profile } from "@/data/profile";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold mb-8">Me Contacter</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Informations de contact */}
        <Card>
          <CardHeader>
            <CardTitle>Informations</CardTitle>
            <CardDescription>
              N'hésitez pas à me contacter via ces différents canaux
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>{profile.location}</span>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-3">Réseaux sociaux</h3>
              <div className="flex gap-4">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {social.label === "GitHub" && <Github className="h-5 w-5" />}
                    {social.label === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                    {social.label === "Twitter" && <Twitter className="h-5 w-5" />}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formulaire de contact */}
        <Card>
          <CardHeader>
            <CardTitle>Envoyez-moi un message</CardTitle>
            <CardDescription>
              Je vous répondrai dans les plus brefs délais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}