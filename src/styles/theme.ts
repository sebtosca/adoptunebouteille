export const citeoColors = {
  yellow: '#FFD700',
  red: '#E53935',
  green: '#4CAF50',
  blue: '#2196F3',
  black: '#000000',
  white: '#FFFFFF',
  pink: '#FF69B4', // For Chérie accent
  lightGray: '#F5F5F5',
} as const;

export const theme = {
  colors: citeoColors,
  fonts: {
    primary: 'Arial, sans-serif',
    heading: 'Arial, sans-serif',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
} as const;

