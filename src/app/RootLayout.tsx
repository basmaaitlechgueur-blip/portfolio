import { Outlet, NavLink } from "react-router-dom";
//import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="text-xl font-bold">
            MonPortfolio
          </NavLink>
          <div className="flex items-center gap-6"></div>
          <div className="flex items-center gap-6">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Projets
            </NavLink>
            <NavLink 
              to="/experience"
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Parcours
            </NavLink>
            <NavLink 
              to="/education"
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Formations
            </NavLink>
            <NavLink 
              to="/certifications"
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Certifications
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Contact
            </NavLink>
             <ThemeToggle />  ← Ajoutez cette ligne
          </div>
        </nav>
      </header>
      
      <main className="flex-1 mx-auto max-w-6xl w-full p-6">
        <Outlet />
      </main>
      
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} • Mon Portfolio • Tous droits réservés
      </footer>
    </div>
  );
}