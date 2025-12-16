# Adopt une Bouteille - Chérie Landing Page

A modern, interactive React landing page for the Chérie bottle adoption campaign, featuring CITEO brand colors and smooth animations.

## Features

- **React + TypeScript**: Built with Vite for fast development and optimized builds
- **CITEO Brand Colors**: Integrated YELLOW, RED, GREEN, BLUE, and BLACK throughout the design
- **Interactive Elements**: Hover effects, click animations, and smooth transitions
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Smooth Animations**: Fade-in, slide-up, and scale animations on page load
- **GitHub Pages Ready**: Configured for automatic deployment

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages deployment. The GitHub Actions workflow will automatically build and deploy when you push to the `main` branch.

Make sure to enable GitHub Pages in your repository settings:
1. Go to Settings → Pages
2. Select "GitHub Actions" as the source

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # CITEO logo header
│   ├── Hero.tsx            # Main hero section with Chérie title
│   ├── AdoptButton.tsx      # Interactive adoption button
│   └── CharacterPlaceholder.tsx  # Chérie character placeholder
├── styles/
│   ├── theme.ts            # CITEO brand color definitions
│   └── App.css             # Global styles
├── App.tsx                 # Main application component
└── main.tsx                # React entry point
```

## CITEO Brand Colors

- **Yellow**: `#FFD700`
- **Red**: `#E53935`
- **Green**: `#4CAF50`
- **Blue**: `#2196F3`
- **Black**: `#000000`

## Technologies

- React 18
- TypeScript
- Vite
- CSS3 Animations
