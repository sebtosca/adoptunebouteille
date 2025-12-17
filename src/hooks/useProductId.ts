import { useMemo } from 'react';

/**
 * Extracts the product ID from the URL pathname.
 * Handles both development (no base path) and production (with /adoptunebouteille/ base path) scenarios.
 * 
 * @returns The product ID (e.g., "00001") or null if not found
 */
export const useProductId = (): string | null => {
  return useMemo(() => {
    const pathname = window.location.pathname;
    
    // Remove the base path if present
    const basePath = '/adoptunebouteille';
    let cleanPath = pathname;
    if (pathname.startsWith(basePath)) {
      cleanPath = pathname.slice(basePath.length);
    }
    
    // Remove leading and trailing slashes
    cleanPath = cleanPath.replace(/^\/+|\/+$/g, '');
    
    // Extract product ID (assuming it's the last segment in the path)
    // Matches alphanumeric strings, including leading zeros (e.g., "00001")
    const match = cleanPath.match(/^([a-zA-Z0-9]+)$/);
    
    return match ? match[1] : null;
  }, []);
};

