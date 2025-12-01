import React from 'react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-serif text-white">ZAS <span className="font-light opacity-70">GmbH</span></span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Agentur für Messe, Event und Kommunikation. Wir realisieren Ihren Erfolg – in Berlin und weltweit.
            </p>
            <div className="text-gray-400 space-y-2">
              <p className="font-medium text-white">ZAS GmbH</p>
              <p>Mühlenstraße 8a</p>
              <p>14167 Berlin</p>
              <div className="pt-4">
                <p>Tel: +49 30 847 108 8-0</p>
                <p>Fax: +49 30 847 108 8-29</p>
                <a href="mailto:info@zas-gmbh.de" className="hover:text-brand-gold transition-colors">info@zas-gmbh.de</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href={`#${SectionId.START}`} className="text-gray-400 hover:text-brand-gold transition-colors">Start</a></li>
              <li><a href={`#${SectionId.ABOUT}`} className="text-gray-400 hover:text-brand-gold transition-colors">Über Uns</a></li>
              <li><a href={`#${SectionId.SERVICES}`} className="text-gray-400 hover:text-brand-gold transition-colors">Leistungen</a></li>
              <li><a href={`#${SectionId.PORTFOLIO}`} className="text-gray-400 hover:text-brand-gold transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-serif text-lg mb-6">Rechtliches</h4>
             <ul className="space-y-3">
               <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Impressum</a></li>
               <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Datenschutz</a></li>
               <li><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">AGB</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ZAS GmbH. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0 opacity-50">Webdesign Concept</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;