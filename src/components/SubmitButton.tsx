import React from 'react';

interface SubmitButtonProps {
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function SubmitButton({ isLoading, disabled, onClick }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`px-8 py-3 rounded-lg font-semibold text-white transition
        ${disabled || isLoading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
        }`}
    >
      {isLoading ? "Traitement en cours..." : "Générer l'image"}
    </button>
  );
}
