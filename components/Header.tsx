import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'START', href: `#${SectionId.START}` },
  { label: 'ÜBER UNS', href: `#${SectionId.ABOUT}` },
  { label: 'LEISTUNGEN', href: `#${SectionId.SERVICES}` },
  { label: 'PORTFOLIO', href: `#${SectionId.PORTFOLIO}` },
  { label: 'KONTAKT', href: `#${SectionId.CONTACT}` },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg h-20' : 'bg-[#0f172a]/80 backdrop-blur-sm h-24'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12 flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer group flex-shrink-0">
          {/* Logo Text */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-serif text-white font-bold tracking-wide">ZAS</span>
            <span className="text-sm font-sans text-gray-400 font-light tracking-[0.2em] uppercase group-hover:text-white transition-colors">Messeagentur</span>
          </div>
        </div>

        {/* Navigation & Button - Always Horizontal */}
        <div className="flex items-center gap-6 lg:gap-10 xl:gap-12 ml-auto overflow-x-auto scrollbar-hide">
          <nav className="flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-xs lg:text-sm font-medium tracking-[0.15em] text-white/80 hover:text-brand-gold transition-colors duration-200 uppercase whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <a 
            href={`#${SectionId.CONTACT}`}
            className="bg-brand-gold hover:bg-brand-goldHover text-white px-6 py-3 text-sm font-bold tracking-widest uppercase transition-colors duration-300 shadow-md whitespace-nowrap"
          >
            Anfrage
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;