import React from 'react';
import { SectionId } from '../types';

const projects = [
  { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", title: "IFA Berlin", client: "TechSystems" },
  { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop", title: "Hannover Messe", client: "Industrie 4.0" },
  { img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", title: "Grüne Woche", client: "BioMarkt" },
  { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", title: "ITB Berlin", client: "TravelGroup" },
];

const Portfolio: React.FC = () => {
  return (
    <section id={SectionId.PORTFOLIO} className="py-24 bg-[#0a101e] scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-3 block">Referenzen</span>
             <h2 className="text-4xl md:text-5xl font-serif text-white">Ausgewählte <span className="italic text-brand-gold">Projekte</span></h2>
          </div>
          <a href="#" className="text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors">
            Alle Projekte ansehen
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-video cursor-pointer rounded-sm bg-brand-dark border border-white/5">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-brand-gold text-sm tracking-wider uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{p.client}</p>
                <h3 className="text-2xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;