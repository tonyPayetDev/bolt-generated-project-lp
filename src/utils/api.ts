export async function processImages(tableauUrl: string, visageUrl: string): Promise<void> {
  const webhookUrl = 'https://hook.eu2.make.com/tj7plalzjyo2zwhxtghzd78ew8dpcucj';
  
  try {
    const response = await fetch(
      `${webhookUrl}?tableau=${encodeURIComponent(tableauUrl)}&visage=${encodeURIComponent(visageUrl)}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Erreur serveur: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Échec de l\'envoi des images au serveur'
    );
  }
}
