import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacy: e.target.checked }));
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-brand-dark relative scroll-mt-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Text */}
          <div>
            <span className="text-brand-gold uppercase tracking-widest text-sm font-semibold mb-3 block">Kontakt</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Lassen Sie uns <br />
              <span className="italic text-brand-gold">sprechen</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light max-w-lg">
              Sie planen einen Messeauftritt oder ein Event? Erzählen Sie uns von Ihrem Vorhaben. Wir beraten Sie unverbindlich und entwickeln eine Strategie für Ihren Erfolg.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                  <MapPin className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Standort</h4>
                  <p className="text-gray-400">ZAS GmbH<br />Mühlenstraße 8a<br />14167 Berlin</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                  <Phone className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Telefon</h4>
                  <p className="text-gray-400">+49 30 847 108 8-0</p>
                  <p className="text-gray-500 text-sm">Mo-Fr, 09:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 group-hover:border-brand-gold/50 transition-colors">
                  <Mail className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">E-Mail</h4>
                  <a href="mailto:info@zas-gmbh.de" className="text-gray-400 hover:text-brand-gold transition-colors">info@zas-gmbh.de</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-8 md:p-10 border border-white/10 rounded-sm backdrop-blur-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Nachricht gesendet!</h3>
                <p className="text-gray-300 mb-8">Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-gold text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm uppercase tracking-wider text-gray-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm uppercase tracking-wider text-gray-400">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm"
                      placeholder="Ihre Nummer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm uppercase tracking-wider text-gray-400">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm"
                    placeholder="ihre.email@firma.de"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm uppercase tracking-wider text-gray-400">Nachricht</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm resize-none"
                    placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleCheckbox}
                    className="mt-1 accent-brand-gold w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer">
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-gold hover:bg-brand-goldHover text-white font-bold py-4 uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg mt-4"
                >
                  <span>Absenden</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;