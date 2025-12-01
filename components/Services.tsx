import React from 'react';
import { SectionId } from '../types';
import { Layout, Monitor, Truck, Users, PenTool, BarChart } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={32} />,
    title: "Design & Konzeption",
    desc: "Kreative Entwürfe, die Ihre Markenidentität räumlich erlebbar machen. 3D-Visualisierung auf höchstem Niveau."
  },
  {
    icon: <Truck size={32} />,
    title: "Messebau & Logistik",
    desc: "Europaweite Realisierung. Präziser Aufbau, termingerechte Logistik und schlüsselfertige Übergabe."
  },
  {
    icon: <Monitor size={32} />,
    title: "Medientechnik",
    desc: "Integration modernster AV-Technik, LED-Wände und interaktiver Exponate für maximale Aufmerksamkeit."
  },
  {
    icon: <Users size={32} />,
    title: "Projektmanagement",
    desc: "Ein persönlicher Ansprechpartner für alle Belange. Transparente Planung und Budgetkontrolle."
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-3 block">Full Service</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Unsere <span className="italic text-brand-gold">Leistungen</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white/5 p-8 border border-white/5 hover:border-brand-gold/30 hover:bg-white/10 transition-all duration-300 group rounded-sm">
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;