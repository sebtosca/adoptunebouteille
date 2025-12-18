import { useState, useEffect, useMemo } from 'react';
import './AdoptButton.css';

interface AdoptButtonProps {
  onClick?: () => void;
  href?: string;
  productId?: string | null;
}

export const AdoptButton = ({ onClick, href = 'https://wa.me/15551647916', productId }: AdoptButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = useMemo(() => {
    const url = new URL(href);
    
    // Add product ID as query parameter for tracking
    if (productId) {
      url.searchParams.set('product', productId);
    }
    
    // Include product ID in the pre-filled message text so the bot can read it
    // The bot will receive this in the first message and can parse the product ID
    if (productId) {
      url.searchParams.set('text', `Bonjour, je souhaite adopter le produit ${productId}`);
    }
    
    return url.toString();
  }, [href, productId]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`adopt-button ${isVisible ? 'slide-up' : ''} ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Adopter moi!
      </a>
    );
  }

  return (
    <button
      className={`adopt-button ${isVisible ? 'slide-up' : ''} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      Adopter moi!
    </button>
  );
};

