import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTAButton() {
  return (
    <a
      href="https://buy.stripe.com/test_bIYaHI1lC22e0o06oo"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-red-500 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-red-400 transition-all"
    >
      <span className="mr-2">Obtenir mes 1000 accroches</span>
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}
