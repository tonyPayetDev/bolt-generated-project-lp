import React from 'react';
import { Play } from 'lucide-react';

import gif1 from '../assets/gifs/gif1.webp';
import gif2 from '../assets/gifs/gif2.webp';
import gif3 from '../assets/gifs/gif3.webp';
import gif4 from '../assets/gifs/gif4.webp';

const gifs = [
  {
    gif: gif1,
    title: "Aperçu 1",
  },
  {
    gif: gif2,
    title: "Aperçu 2",
  },
  {
    gif: gif3,
    title: "Aperçu 3",
  },
  {
    gif: gif4,
    title: "Aperçu 4",
  }
];

export function GifSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Explorez dès maintenant
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Un aperçu exclusif du Pack de Super Accroches Virales conçu pour s'adapter à toutes les niches et à tous les secteurs !
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gifs.map((gif, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-video relative">
                <img
                  src={gif.gif}
                  alt={gif.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-black fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-800/90 absolute bottom-0 left-0 right-0">
                <h3 className="text-sm font-semibold mb-1 truncate">{gif.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
