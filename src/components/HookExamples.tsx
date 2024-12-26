import React from 'react';
import { Copy } from 'lucide-react';

const hookCategories = [
  {
    title: "TikTok",
    hooks: [
      "POV : Tu découvres que...",
      "Le secret que personne ne te dit sur...",
      "Cette technique va changer ta vie...",
    ]
  },
  {
    title: "Instagram",
    hooks: [
      "3 erreurs à éviter absolument...",
      "La méthode des experts pour...",
      "Comment j'ai réussi à...",
    ]
  },
  {
    title: "YouTube",
    hooks: [
      "URGENT : Ce qu'il faut savoir sur...",
      "La stratégie secrète des pros...",
      "Je teste pendant 30 jours...",
    ]
  }
];

export function HookExamples() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Exemples d'Accroches Virales
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Un aperçu des 1000+ accroches disponibles
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {hookCategories.map((category, i) => (
            <div key={i} className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{category.title}</h3>
              <div className="space-y-4">
                {category.hooks.map((hook, j) => (
                  <div key={j} className="group flex items-center justify-between bg-black/30 p-4 rounded-lg hover:bg-black/50 transition">
                    <p className="text-sm">{hook}</p>
                    <button className="opacity-0 group-hover:opacity-100 transition">
                      <Copy className="w-4 h-4 text-gray-400 hover:text-yellow-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
