
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-taxi-DEFAULT to-taxi-dark opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 z-0 bg-[url('https://lh5.googleusercontent.com/p/AF1QipOBngqt0DikpN1ZCWHoWcwWTSxbO8qVXljkxxVD=w397-h298-k-no')] bg-cover bg-center"
        style={{ opacity: 0.3 }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#fbbf24" className="w-6 h-6 text-taxi-accent" />
              ))}
            </div>
            <span className="ml-2 text-white font-medium">5/5 sur Google (10 avis)</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Taxi Thionville de confiance
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 animate-slide-up">
            M.A. TAXI ADS, votre service de transport conventionné à Thionville. 
            Ponctualité, confort et professionnalisme pour tous vos déplacements.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a href="tel:627732718">
              <Button className="w-full sm:w-auto bg-taxi-accent text-black hover:bg-white hover:text-black text-lg px-8 py-6">
                Appeler maintenant
              </Button>
            </a>
            <Button 
              variant="outline" 
              onClick={scrollToContact} 
              className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-black text-lg px-8 py-6"
            >
              Nos services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-taxi-light to-transparent"></div>
    </section>
  );
};

export default Hero;
