
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-black">
            <span className="text-taxi-accent">M.A.</span> TAXI
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollTo("home")} 
            className="font-medium text-black hover:text-taxi-accent transition-colors"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollTo("services")} 
            className="font-medium hover:text-taxi-accent transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo("testimonials")} 
            className="font-medium hover:text-taxi-accent transition-colors"
          >
            Témoignages
          </button>
          <button 
            onClick={() => scrollTo("contact")} 
            className="font-medium hover:text-taxi-accent transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Phone Button - Desktop */}
        <a 
          href="tel:627732718" 
          className="hidden md:flex items-center"
        >
          <Button className="bg-taxi-accent text-black hover:bg-taxi-dark hover:text-taxi-accent transition-colors">
            <Phone className="mr-2 h-4 w-4" /> 
            06 27 73 27 18
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-black p-2"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollTo("home")} 
              className="p-2 font-medium text-black hover:bg-taxi-light rounded transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollTo("services")} 
              className="p-2 font-medium hover:bg-taxi-light rounded transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo("testimonials")} 
              className="p-2 font-medium hover:bg-taxi-light rounded transition-colors"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollTo("contact")} 
              className="p-2 font-medium hover:bg-taxi-light rounded transition-colors"
            >
              Contact
            </button>
            
            {/* Phone Button - Mobile */}
            <a 
              href="tel:627732718" 
              className="w-full"
            >
              <Button className="w-full bg-taxi-accent text-black hover:bg-taxi-dark hover:text-taxi-accent transition-colors">
                <Phone className="mr-2 h-4 w-4" /> 
                06 27 73 27 18
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
