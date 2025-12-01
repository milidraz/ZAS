import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;