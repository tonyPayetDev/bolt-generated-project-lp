import React from 'react';
import { Trophy, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: <Trophy className="w-8 h-8" />,
    value: "1M+",
    label: "Vues générées"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "1000+",
    label: "Accroches virales"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "10K+",
    label: "Créateurs satisfaits"
  }
];

export function StatsSection() {
  return (
    <section className="py-12 bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-red-500/20 text-yellow-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
