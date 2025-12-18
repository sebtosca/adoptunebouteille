// Import all character images matching the pattern character-*.png
const characterImages = import.meta.glob<{ default: string }>('../assets/character-*.png', { eager: true });

/**
 * Extracts the product ID from a character image filename.
 * Example: '../assets/character-00001.png' -> '00001'
 */
const extractProductIdFromPath = (path: string): string | null => {
  const match = path.match(/character-([a-zA-Z0-9]+)\.png$/);
  return match ? match[1] : null;
};

/**
 * Creates a mapping of product IDs to their character images.
 */
const createCharacterMap = (): Map<string, string> => {
  const map = new Map<string, string>();
  
  for (const [path, module] of Object.entries(characterImages)) {
    const productId = extractProductIdFromPath(path);
    if (productId && module.default) {
      map.set(productId, module.default);
    }
  }
  
  return map;
};

// Create the character map once at module load
const characterMap = createCharacterMap();

/**
 * Gets the first available character image as a fallback.
 */
const getFallbackCharacter = (): string | undefined => {
  const firstCharacter = Array.from(characterMap.values())[0];
  return firstCharacter || undefined;
};

/**
 * Gets the character image for a specific product ID.
 * 
 * @param productId - The product ID (e.g., "00001", "00002")
 * @returns The character image URL, or a fallback character if not found
 */
export const getCharacterImage = (productId: string | null): string | undefined => {
  if (!productId) {
    return getFallbackCharacter();
  }
  
  return characterMap.get(productId) || getFallbackCharacter();
};

/**
 * Gets the character name for a specific product ID.
 * 
 * @param productId - The product ID (e.g., "00001", "00002")
 * @returns The character name, or "Chérie" as default
 */
export const getCharacterName = (productId: string | null): string => {
  if (!productId) {
    return 'Chérie';
  }
  
  // Map product IDs to character names
  const nameMap: Record<string, string> = {
    '00001': 'Chérie',
    '00002': 'Pompon',
  };
  
  return nameMap[productId] || 'Chérie';
};

/**
 * Gets whether a character has a story video.
 * 
 * @param productId - The product ID (e.g., "00001", "00002")
 * @returns true if the character has a video, false otherwise
 */
export const hasCharacterVideo = (productId: string | null): boolean => {
  if (!productId) {
    return false;
  }
  
  // Map product IDs that have videos
  const videosWithProductIds: string[] = ['00001', '00002'];
  
  return videosWithProductIds.includes(productId);
};

