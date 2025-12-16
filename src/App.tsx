import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './styles/App.css';

import citeoLogo from './assets/citeo_logo.png';
import cherieCharacter from './assets/cherie-character.png';

function App() {
  return (
    <div className="app">
      <Header logoSrc={citeoLogo} />
      <Hero characterImageSrc={cherieCharacter} />
    </div>
  );
}

export default App;

