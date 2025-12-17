import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { useProductId } from './hooks/useProductId';
import { getCharacterImage } from './utils/characterUtils';
import './styles/App.css';

import citeoLogo from './assets/citeo_logo.png';

function App() {
  const productId = useProductId();
  const characterImage = getCharacterImage(productId);

  return (
    <div className="app">
      <Header logoSrc={citeoLogo} />
      <Hero characterImageSrc={characterImage} />
    </div>
  );
}

export default App;

