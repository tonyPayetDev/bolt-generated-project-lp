import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    gif: "https://media.giphy.com/media/l0HlvbDHp5Ld0SQXC/giphy.gif",
    title: "Aperçu 1",
  },
  {
    gif: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    title: "Aperçu 2",
  },
  {
    gif: "https://media.giphy.com/media/3o7btYLAW7doynjedO/giphy.gif",
    title: "Aperçu 3",
  },
  {
    gif: "https://media.giphy.com/media/3o7btYu6qiqBImohKg/giphy.gif",
    title: "Aperçu 4",
  }
];

export function VideoGallery() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {videos.map((video, index) => (
        <div key={index} className="group relative overflow-hidden rounded-xl">
          <div className="aspect-video relative">
            <img
              src={video.gif}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-black fill-current" />
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-800/90 absolute bottom-0 left-0 right-0">
            <h3 className="text-sm font-semibold mb-1 truncate">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
