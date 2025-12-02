import React from 'react';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-28">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                alt="Meeting bei ZAS" 
                className="rounded-sm w-full h-64 object-cover mt-12 shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Modernes Design" 
                className="rounded-sm w-full h-64 object-cover shadow-2xl"
              />
            </div>
            {/* Decorative Box */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-2 border-b-2 border-brand-gold opacity-50" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-r-2 border-t-2 border-brand-gold opacity-50" />
          </div>

          {/* Content */}
          <div>
            <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-3 block">Über ZAS</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Wir inszenieren <br/>
              <span className="italic text-brand-gold">Markenräume</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Als erfahrene Messeagentur mit Sitz in Berlin verstehen wir Messebau nicht nur als Handwerk, sondern als dreidimensionale Kommunikation. ZAS steht für maßgeschneiderte Konzepte, die Ihre Markenbotschaft emotional und funktional transportieren.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Ob Systembauweise oder individueller Designstand – wir begleiten Sie von der ersten Skizze bis zur schlüsselfertigen Übergabe. Unser Team vereint Designkompetenz mit logistischer Präzision.
            </p>

            <div className="space-y-4">
              {[
                "Individuelle Standkonzepte & Design",
                "Full-Service Projektmanagement",
                "Internationale Messe-Logistik",
                "Nachhaltige Systemlösungen"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="inline-block border border-white/10 bg-white/5 px-8 py-4 rounded-sm">
                <span className="block text-3xl font-serif text-brand-gold mb-1">20+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;