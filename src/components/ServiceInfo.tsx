
import React from 'react';
import MapLocation from './MapLocation';

const ServiceInfo = () => {
  return (
    <section id="service-info" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black mb-6">Service conventionné</h2>
            <p className="text-black">
              M.A. TAXI ADS est un service conventionné de la commune de Thionville, garantissant un service de transport officiel et réglementé.
            </p>
            <p className="text-black">
              Nos chauffeurs sont des professionnels expérimentés qui connaissent parfaitement la région et vous assurent un trajet en toute sécurité et dans le plus grand confort.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-black mb-4">Contactez-nous</h3>
              <p className="text-black mb-6">
                Besoin d'un taxi à Thionville ? Contactez M.A. TAXI ADS pour un service fiable, rapide et confortable. Disponible pour tous vos déplacements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <strong className="text-black w-32">Téléphone:</strong>
                  <span className="text-black">06 27 73 27 18</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-black w-32">Zone de service:</strong>
                  <span className="text-black">Thionville et ses environs</span>
                </div>
                <div className="flex items-center">
                  <strong className="text-black w-32">Disponibilité:</strong>
                  <span className="text-black">7j/7, service jour et nuit</span>
                </div>
              </div>
            </div>
          </div>
          
          <MapLocation />
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
