import { useState, useEffect } from 'react';
import './AdoptButton.css';

interface AdoptButtonProps {
  onClick?: () => void;
  href?: string;
}

export const AdoptButton = ({ onClick, href = 'https://wa.me/15551647916' }: AdoptButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

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
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`adopt-button ${isVisible ? 'slide-up' : ''} ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        Adopt Now
      </a>
    );
  }

  return (
    <button
      className={`adopt-button ${isVisible ? 'slide-up' : ''} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      Adopt Now
    </button>
  );
};

