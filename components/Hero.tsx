import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.START}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Messebau Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        
        {/* Tag Pill */}
        <div className="inline-block mb-8 animate-fade-in-down">
          <span className="px-6 py-2 rounded-full border border-brand-gold/50 text-brand-gold text-xs md:text-sm tracking-[0.2em] font-medium uppercase bg-brand-dark/50 backdrop-blur-sm">
            Messebau | Events | Kommunikation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 drop-shadow-2xl">
          Wir bauen Ihren <br />
          <span className="text-brand-gold italic">Erfolg</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-12 font-light">
          ZAS Messeagentur – Ihr Partner für beeindruckende Markenauftritte. 
          Individuelle Standkonzepte und Full Service Realisierung in Berlin und europaweit.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href={`#${SectionId.PORTFOLIO}`}
            className="group relative px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-white font-medium rounded-sm transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
          >
            <span>Zu den Projekten</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={`#${SectionId.CONTACT}`}
            className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium rounded-sm transition-all duration-300 min-w-[200px]"
          >
            Kontakt aufnehmen
          </a>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
};

export default Hero;