
import { Star, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-taxi-dark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-taxi-accent">M.A.</span> TAXI ADS
            </h2>
            <p className="text-white/80 mb-4">
              Service de taxi conventionné de la commune de Thionville
            </p>
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#fbbf24" className="w-4 h-4 text-taxi-accent" />
                ))}
              </div>
              <span className="ml-2 text-sm text-white/80">5/5 sur Google (10 avis)</span>
            </div>
            <a 
              href="tel:627732718" 
              className="inline-flex items-center bg-taxi-accent text-taxi-dark font-medium px-4 py-2 rounded-full hover:bg-white transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" /> 06 27 73 27 18
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>&copy; {currentYear} M.A. TAXI ADS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
