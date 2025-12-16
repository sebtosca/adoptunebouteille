# Assets Folder

Place your image files here.

## Character Image

**File name:** `cherie-character.png` (or `.jpg`, `.svg`, `.webp`)

**Recommended size:** 400x600px or larger (will be scaled automatically)

**Usage:** After adding the file, update `src/App.tsx`:
1. Uncomment the import: `import cherieCharacter from './assets/cherie-character.png';`
2. Pass it to Hero: `<Hero characterImageSrc={cherieCharacter} />`

## CITEO Logo

**File name:** `citeo-logo.png` (or `.jpg`, `.svg`, `.webp`)

**Recommended size:** 200-300px wide, transparent background preferred

**Usage:** After adding the file, update `src/App.tsx`:
1. Uncomment the import: `import citeoLogo from './assets/citeo-logo.png';`
2. Pass it to Header: `<Header logoSrc={citeoLogo} />`

## Supported Formats

- PNG (recommended for logos with transparency)
- JPG/JPEG
- SVG (scalable, best for logos)
- WebP (modern, smaller file size)
