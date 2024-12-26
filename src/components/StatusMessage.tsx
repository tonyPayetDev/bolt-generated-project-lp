import React from 'react';

interface StatusMessageProps {
  error: string | null;
  success: boolean;
}

export function StatusMessage({ error, success }: StatusMessageProps) {
  if (error) {
    return <p className="text-red-500 mt-2">{error}</p>;
  }
  
  if (success) {
    return <p className="text-green-500 mt-2">Images envoyées avec succès !</p>;
  }
  
  return null;
}
