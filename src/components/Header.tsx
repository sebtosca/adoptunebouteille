import { useEffect, useState } from 'react';
import './Header.css';

// Import CITEO logo - replace this path with your actual logo image
// Place your logo in src/assets/ and update the import path
// Example: import citeoLogo from '../assets/citeo-logo.png';
// If you don't have a logo yet, leave this commented out
// import citeoLogo from '../assets/citeo-logo.png';

interface HeaderProps {
  logoSrc?: string;
}

export const Header = ({ logoSrc }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={`header ${isVisible ? 'fade-in' : ''}`} role="banner">
      {logoSrc ? (
        <img 
          src={logoSrc} 
          alt="CITEO Logo" 
          className="citeo-logo-image"
        />
      ) : (
        <div className="citeo-logo">
          <div className="citeo-c">
            <div className="citeo-c-circle"></div>
            <div className="citeo-c-arrow"></div>
          </div>
          <span className="citeo-i">I</span>
          <span className="citeo-t">T</span>
          <span className="citeo-e">E</span>
          <span className="citeo-o">
            <div className="citeo-o-outer"></div>
            <div className="citeo-o-inner"></div>
          </span>
        </div>
      )}
    </header>
  );
};

