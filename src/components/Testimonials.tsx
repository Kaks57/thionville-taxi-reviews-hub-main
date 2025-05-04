
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  content: string;
}

const Testimonial = ({ name, content }: TestimonialProps) => {
  return (
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} fill="#fbbf24" className="w-4 h-4 text-taxi-accent" />
        ))}
      </div>
      <p className="text-black mb-4 italic">{content}</p>
      <p className="font-semibold text-black">{name}</p>
    </div>
  );
};

// Define the testimonials data
const testimonials = [
  {
    name: "Stéphane Rouvray",
    content: "Chauffeur très ponctuel, sympa, agréable, intéressant, trajet de 2h sans voir le temps passer. Conduite fluide et rassurante, véhicule propre, spacieux et confortable."
  },
  {
    name: "Sab Grimon",
    content: "Chauffeur agréable, sympathique et ponctuel. Conduite fluide. Véhicule confortable et propre. Service utilisé plusieurs fois sur 1 mois et toujours de la même qualité de service."
  },
  {
    name: "Clara",
    content: "Chauffeur très agréable. Disponible à la dernière minute pour un trajet Thionville-Aeroport du Luxembourg. Je recommande."
  },
  {
    name: "Ali Soukatou",
    content: "Chauffeur très poli, véhicule propre, Je recommande fortement. Encore un grand merci à lui."
  },
  {
    name: "Roxane Launay",
    content: "Chauffeur agréable, ponctuel et arrangeant. Je recommande sans soucis."
  },
  {
    name: "Essaadi Dental Center",
    content: "Personne très ponctuelle, agréable et réactive. S'adapte aux imprévus du mieux possible, bref, un service de qualité!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Ce que disent nos clients</h2>
          <div className="flex justify-center items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#fbbf24" className="w-6 h-6 text-taxi-accent" />
              ))}
            </div>
            <span className="ml-2 font-medium text-black">5/5 sur Google (10 avis)</span>
          </div>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leurs déplacements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
