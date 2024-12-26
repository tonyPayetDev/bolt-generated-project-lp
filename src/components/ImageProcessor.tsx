import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';
import { ImagePreview } from './ImagePreview';
import { StatusMessage } from './StatusMessage';
import { SubmitButton } from './SubmitButton';
import { processImages } from '../utils/api';
import { validateImage } from '../utils/validation';

export function ImageProcessor() {
  const [tableauImage, setTableauImage] = useState<string | null>(null);
  const [visageImage, setVisageImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleImageUpload = (file: File, setImage: (url: string) => void) => {
    const validationError = validateImage(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async () => {
    if (!tableauImage || !visageImage) {
      setError("Veuillez sélectionner les deux images");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await processImages(tableauImage, visageImage);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue lors du traitement des images");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Générateur d'Image Personnalisée
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ImageUpload
          title="Tableau"
          description="Importez votre image de tableau"
          onImageSelect={(file) => handleImageUpload(file, setTableauImage)}
        />
        <ImageUpload
          title="Visage"
          description="Importez votre photo de visage"
          onImageSelect={(file) => handleImageUpload(file, setVisageImage)}
        />
      </div>

      <div className="text-center mb-8">
        <SubmitButton
          isLoading={isLoading}
          disabled={!tableauImage || !visageImage}
          onClick={handleSubmit}
        />
        <StatusMessage error={error} success={success} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tableauImage && (
          <ImagePreview imageUrl={tableauImage} title="Tableau sélectionné" />
        )}
        {visageImage && (
          <ImagePreview imageUrl={visageImage} title="Visage sélectionné" />
        )}
      </div>
    </div>
  );
}
