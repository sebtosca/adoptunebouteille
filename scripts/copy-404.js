import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexHtml = join(distPath, 'index.html');
const notFoundHtml = join(distPath, '404.html');

try {
  // Read the built index.html
  const indexContent = readFileSync(indexHtml, 'utf-8');
  
  // Write it to 404.html (GitHub Pages will serve this for 404s)
  writeFileSync(notFoundHtml, indexContent, 'utf-8');
  console.log('✓ Copied index.html to 404.html');
} catch (error) {
  console.error('Error copying 404.html:', error);
  process.exit(1);
}

