import { useEffect, useState } from 'react';
import { CharacterPlaceholder } from './CharacterPlaceholder';
import { ParticleReveal } from './ParticleReveal';
import './Hero.css';

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
      <ParticleReveal particleCount={60} duration={2000}>
        <CharacterPlaceholder imageSrc={characterImageSrc} />
      </ParticleReveal>
    </section>
  );
};

