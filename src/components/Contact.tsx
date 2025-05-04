
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapLocation from "./MapLocation";

const Contact = () => {
  return (
    <section id="contact" className="section bg-taxi-DEFAULT text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-lg text-white mb-8">
              Besoin d'un taxi à Thionville ? Contactez M.A. TAXI ADS pour un service fiable, 
              rapide et confortable. Disponible pour tous vos déplacements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-taxi-accent/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-taxi-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                  <a href="tel:627732718" className="text-white/80 hover:text-taxi-accent transition-colors">
                    06 27 73 27 18
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-taxi-accent/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-taxi-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Zone de service</h3>
                  <p className="text-white/80">
                    Thionville et ses environs
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-taxi-accent/20 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-taxi-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Disponibilité</h3>
                  <p className="text-white/80">
                    7j/7, service jour et nuit
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="tel:627732718">
                <Button className="bg-taxi-accent text-black hover:bg-white hover:text-black text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" /> Appelez-nous maintenant
                </Button>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl text-black">
            <h3 className="text-2xl font-bold mb-6">Pourquoi nous choisir</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex justify-center items-center bg-taxi-accent/20 h-10 w-10 rounded-full mr-4">
                  <span className="text-taxi-accent font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-black">Service de qualité</h4>
                  <p className="text-black text-sm">
                    Note parfaite de 5/5 basée sur 10 avis clients authentiques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center bg-taxi-accent/20 h-10 w-10 rounded-full mr-4">
                  <span className="text-taxi-accent font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ponctualité garantie</h4>
                  <p className="text-black text-sm">
                    Nos clients soulignent systématiquement notre ponctualité.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center bg-taxi-accent/20 h-10 w-10 rounded-full mr-4">
                  <span className="text-taxi-accent font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Confort et propreté</h4>
                  <p className="text-black text-sm">
                    Véhicules spacieux, propres et bien entretenus pour votre confort.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center bg-taxi-accent/20 h-10 w-10 rounded-full mr-4">
                  <span className="text-taxi-accent font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Chauffeurs professionnels</h4>
                  <p className="text-black text-sm">
                    Chauffeurs courtois, agréables et professionnels pour un service de qualité.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <p className="text-sm text-black font-medium">
                M.A. TAXI ADS est un service conventionné de la commune de Thionville, 
                vous garantissant un service officiel et réglementé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
