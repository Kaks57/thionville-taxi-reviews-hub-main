
import { Car, Briefcase, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "service-card bg-white p-6 rounded-lg shadow-md border-l-4 border-taxi-accent", 
      className
    )}>
      <div className="text-taxi-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Nos Services</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Un service de taxi professionnel et fiable à Thionville pour tous vos besoins de transport
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Transport de personnes" 
            description="Déplacements quotidiens, trajets professionnels ou personnels dans le confort de nos véhicules."
            icon={<Car className="h-8 w-8" />}
          />
          
          <ServiceCard 
            title="Service affaires" 
            description="Transport pour vos rendez-vous professionnels avec ponctualité garantie."
            icon={<Briefcase className="h-8 w-8" />}
            className="md:translate-y-4"
          />
          
          <ServiceCard 
            title="Transport de groupe" 
            description="Solution adaptée pour les groupes avec des véhicules spacieux et confortables."
            icon={<Users className="h-8 w-8" />}
          />
          
          <ServiceCard 
            title="Disponibilité 24/7" 
            description="Service disponible jour et nuit, réservations à l'avance ou de dernière minute."
            icon={<Clock className="h-8 w-8" />}
            className="md:translate-y-4"
          />
        </div>
        
        <div className="mt-16 bg-taxi-DEFAULT text-black rounded-lg p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Service conventionné</h3>
              <p className="mb-4">
                M.A. TAXI ADS est un service conventionné de la commune de Thionville, garantissant un service de transport officiel et réglementé.
              </p>
              <p>
                Nos chauffeurs sont des professionnels expérimentés qui connaissent parfaitement la région et vous assurent un trajet en toute sécurité et dans le plus grand confort.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-white/10 p-6 rounded-full">
                <Car className="h-16 w-16 text-taxi-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
