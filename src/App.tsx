import React from 'react';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { HookExamples } from './components/HookExamples';
import { Features } from './components/Features';
import { VideoGallery } from './components/VideoGallery';
import { FAQ } from './components/FAQ';
import { CTAButton } from './components/common/CTAButton';
import { GifSection } from './components/GifSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <HeroSection />
      <StatsSection />
      <HookExamples />
      
      <section className="bg-black/30 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ce qui est inclus
          </h2>
          <Features />
        </div>
      </section>

      <GifSection />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Tout savoir sur les accroches virales
          </p>
          <FAQ />
        </div>
      </section>

      <section className="bg-black/30 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à devenir viral ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Rejoignez des milliers de créateurs qui cartonnent grâce à nos accroches
          </p>
          <CTAButton />
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 1000 Accroches Virales. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
