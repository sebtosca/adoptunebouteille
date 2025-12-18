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
    <section className={`hero ${isVisible ? 'slide-up' : ''}`}>
      <h1 className="hero-title">{characterName}</h1>
      <div className="character-container-wrapper">
        {showVideo && (
          <video 
            className="character-video-background"
            autoPlay
            loop
            muted
            playsInline
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
      <AdoptButton productId={productId} />
      <img 
        src={rulesImage} 
        alt="Rules of the game" 
        className="rules-image"
      />
    </section>
  );
};

