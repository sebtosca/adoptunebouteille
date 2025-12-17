import { useEffect, useState } from 'react';
import { CharacterPlaceholder } from './CharacterPlaceholder';
import { ParticleReveal } from './ParticleReveal';
import { AdoptButton } from './AdoptButton';
import { useProductId } from '../hooks/useProductId';
import { getCharacterName } from '../utils/characterUtils';
import './Hero.css';

interface HeroProps {
  characterImageSrc?: string;
}

export const Hero = ({ characterImageSrc }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const productId = useProductId();
  const characterName = getCharacterName(productId);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'slide-up' : ''}`}>
      <h1 className="hero-title">{characterName}</h1>
      <ParticleReveal particleCount={60} duration={2000}>
        <CharacterPlaceholder imageSrc={characterImageSrc} characterName={characterName} />
      </ParticleReveal>
      <AdoptButton productId={productId} />
    </section>
  );
};

