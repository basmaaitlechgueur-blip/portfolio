import { useState, useMemo } from "react";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "expired">("all");

  const filteredCerts = useMemo(() => {
    return certifications
      .filter((cert) => {
        // Filtre par statut
        if (filter === "active" && cert.status === "expired") return false;
        if (filter === "expired" && cert.status !== "expired") return false;
        
        // Filtre par recherche
        if (searchQuery) {
          const searchLower = searchQuery.toLowerCase();
          return (
            cert.title.toLowerCase().includes(searchLower) ||
            cert.issuer.toLowerCase().includes(searchLower) ||
            cert.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
            cert.skills?.some(skill => skill.toLowerCase().includes(searchLower))
          );
        }
        return true;
      })
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate)); // Tri du plus récent au plus ancien
  }, [searchQuery, filter]);

  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Certifications</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Barre de recherche */}
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-8"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-2.5"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
          
          {/* Filtres */}
          <div className="flex gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              Toutes
            </Button>
            <Button 
              variant={filter === "active" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("active")}
            >
              Actives
            </Button>
            <Button 
              variant={filter === "expired" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("expired")}
            >
              Expirées
            </Button>
          </div>
        </div>
      </div>

      {filteredCerts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucune certification trouvée</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      )}
      
      <p className="text-sm text-muted-foreground text-center mt-6">
        {filteredCerts.length} certification{filteredCerts.length > 1 ? 's' : ''} affichée{filteredCerts.length > 1 ? 's' : ''}
      </p>
    </section>
  );
}