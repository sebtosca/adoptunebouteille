import { useEffect, useState } from 'react';
import { CharacterPlaceholder } from './CharacterPlaceholder';
import { ParticleReveal } from './ParticleReveal';
import { AdoptButton } from './AdoptButton';
import { useProductId } from '../hooks/useProductId';
import { getCharacterName, hasCharacterVideo } from '../utils/characterUtils';
import rulesImage from '../assets/rules_of_the_game.png';
import pomponVideo from '../assets/Pompon story.mov';
import './Hero.css';

interface HeroProps {
  characterImageSrc?: string;
}

export const Hero = ({ characterImageSrc }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const productId = useProductId();
  const characterName = getCharacterName(productId);
  const showVideo = hasCharacterVideo(productId);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'slide-up' : ''}`} aria-label={`${characterName} adoption page`}>
      <h1 className="hero-title" style={{ animationDelay: '0.1s' }}>{characterName}</h1>
      <div className="character-container-wrapper" style={{ animationDelay: '0.3s' }}>
        {showVideo && (
          <video 
            className="character-video-background"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src={pomponVideo} type="video/quicktime" />
            <source src={pomponVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <ParticleReveal particleCount={60} duration={2000}>
          <CharacterPlaceholder imageSrc={characterImageSrc} characterName={characterName} />
        </ParticleReveal>
      </div>
      <div style={{ animationDelay: '0.5s' }}>
        <AdoptButton productId={productId} />
      </div>
      <img 
        src={rulesImage} 
        alt="Règles du jeu - Certificat d'adoption avec instructions pour nourrir la bouteille" 
        className="rules-image"
        style={{ animationDelay: '0.7s' }}
        loading="lazy"
      />
    </section>
  );
};

