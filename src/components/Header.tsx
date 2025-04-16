
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, FileText, Upload, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6" />
          <span className="text-xl font-bold">Global Workforce Connect</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-accent-foreground transition-colors">
            Home
          </Link>
          <Link to="/biodata" className="hover:text-accent-foreground transition-colors">
            Application
          </Link>
          <Link to="/documents" className="hover:text-accent-foreground transition-colors">
            Documents
          </Link>
          <Link to="/interview" className="hover:text-accent-foreground transition-colors">
            Book Interview
          </Link>
        </nav>
        
        <div className="flex space-x-2">
          <Button asChild variant="secondary" size="sm">
            <Link to="/biodata">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
