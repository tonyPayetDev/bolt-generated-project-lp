import React from 'react';

interface ImagePreviewProps {
  imageUrl: string | null;
  title: string;
}

export function ImagePreview({ imageUrl, title }: ImagePreviewProps) {
  if (!imageUrl) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
