import { useEffect, useState } from 'react';
import { CharacterPlaceholder } from './CharacterPlaceholder';
import './Hero.css';

// To use your character image, uncomment and update this import:
// import cherieCharacter from '../assets/cherie-character.png';

interface HeroProps {
  characterImageSrc?: string;
}

export const Hero = ({ characterImageSrc }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'slide-up' : ''}`}>
      <h1 className="hero-title">Chérie</h1>
      <CharacterPlaceholder imageSrc={characterImageSrc} />
    </section>
  );
};

