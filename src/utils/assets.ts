// Utility to get the correct asset path for different deployment environments
export const getAssetPath = (path: string): string => {
  // For GitHub Pages, Vite should handle the base path automatically
  // Just return the original path and let Vite handle it
  return path;
};