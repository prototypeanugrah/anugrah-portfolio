// Utility to get the correct asset path for different deployment environments
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use absolute paths
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return `/${cleanPath}`;
  }
  
  // In production (GitHub Pages), use relative paths
  // Vite will handle the base path automatically
  return cleanPath;
};