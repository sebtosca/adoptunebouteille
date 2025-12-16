import './CharacterPlaceholder.css';

// Import character image - replace this path with your actual image
// Place your character image in src/assets/ and update the import path
// Example: import characterImage from '../assets/cherie-character.png';
// If you don't have an image yet, leave this commented out
// import characterImage from '../assets/cherie-character.png';

interface CharacterPlaceholderProps {
  imageSrc?: string;
}

export const CharacterPlaceholder = ({ imageSrc }: CharacterPlaceholderProps) => {
  // If image is provided, use it instead of the CSS placeholder
  if (imageSrc) {
    return (
      <div className="character-container">
        <div className="character-backdrop"></div>
        <img 
          src={imageSrc} 
          alt="Chérie character" 
          className="character-image"
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

