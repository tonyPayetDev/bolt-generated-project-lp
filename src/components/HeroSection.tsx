import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { CTAButton } from './common/CTAButton';

export function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-red-500/20 text-yellow-400 px-4 py-2 rounded-full mb-8">
          <Flame className="w-4 h-4 animate-pulse" />
          <span className="text-sm font-medium">1000 accroches virales à votre disposition</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Devenez Viral sur<br />Tous vos Réseaux
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Accédez instantanément à 1000+ accroches testées et approuvées
          qui ont généré des millions de vues sur TikTok, Instagram et YouTube
        </p>
        <div className="mb-12">
          <CountdownTimer />
        </div>
        <CTAButton />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,187,0,0.1),transparent_70%)]" />
    </header>
  );
}
