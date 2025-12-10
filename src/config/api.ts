// API Configuration
// This allows the API URL to be different in development and production

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Helper function to get API endpoint
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_URL}/${cleanEndpoint}`;
};


