import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Startups from './components/Startups';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Navigation />
        
        <main className="flex-grow">
          <Hero />
          <Benefits />
          <Startups />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;