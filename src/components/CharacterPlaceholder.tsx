import { useState, useEffect } from 'react';
import './CharacterPlaceholder.css';

interface CharacterPlaceholderProps {
  imageSrc?: string;
  characterName?: string;
}

export const CharacterPlaceholder = ({ imageSrc, characterName = 'Chérie' }: CharacterPlaceholderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (imageSrc) {
      setImageLoaded(false);
      setImageError(false);
    }
  }, [imageSrc]);

  // If image is provided, use it instead of the CSS placeholder
  if (imageSrc) {
    return (
      <div className="character-container">
        <div className="character-backdrop"></div>
        {!imageLoaded && !imageError && (
          <div className="character-image-skeleton" aria-hidden="true">
            <div className="skeleton-shimmer"></div>
          </div>
        )}
        <img 
          src={imageSrc} 
          alt={`${characterName} character`}
          className={`character-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback to CSS placeholder if no image
  return (
    <div className="character-container">
      <div className="character-backdrop"></div>
      <div className="character-placeholder">
        <div className="character-body">
          <div className="character-face">
            <div className="character-eyes">
              <div className="eye left-eye"></div>
              <div className="eye right-eye"></div>
            </div>
            <div className="character-mouth"></div>
          </div>
          <div className="character-cap"></div>
          <div className="character-outfit">
            <div className="outfit-collar"></div>
            <div className="outfit-belt"></div>
          </div>
          <div className="character-limbs">
            <div className="limb arm-left"></div>
            <div className="limb arm-right"></div>
            <div className="limb leg-left"></div>
            <div className="limb leg-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

