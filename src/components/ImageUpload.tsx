import React from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  title: string;
  description: string;
  onImageSelect: (file: File) => void;
  accept?: string;
}

export function ImageUpload({ 
  title, 
  description, 
  onImageSelect, 
  accept = "image/*" 
}: ImageUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          id={`file-${title}`}
        />
        <label
          htmlFor={`file-${title}`}
          className="cursor-pointer flex flex-col items-center"
        >
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-600 mb-2">{description}</p>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Sélectionner une image
          </span>
        </label>
      </div>
    </div>
  );
}
