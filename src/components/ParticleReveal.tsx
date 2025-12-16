import { useEffect, useState, useRef } from 'react';
import { citeoColors } from '../styles/theme';
import './ParticleReveal.css';

interface Particle {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

interface ParticleRevealProps {
  children: React.ReactNode;
  particleCount?: number;
  duration?: number;
}

export const ParticleReveal = ({ 
  children, 
  particleCount = 50,
  duration = 2000 
}: ParticleRevealProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [citeoColors.yellow, citeoColors.red, citeoColors.green, citeoColors.blue];

  useEffect(() => {
    if (!containerRef.current) return;

    // Wait for container to be properly sized
    const initParticles = () => {
      if (!containerRef.current) return;

      // Ensure container has dimensions
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        // Retry if container not ready
        setTimeout(initParticles, 50);
        return;
      }

      // Reduce particle count on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const finalParticleCount = isMobile ? Math.min(particleCount, 40) : particleCount;

      // Generate particles
      const newParticles: Particle[] = [];
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      for (let i = 0; i < finalParticleCount; i++) {
        const angle = (Math.PI * 2 * i) / finalParticleCount + (Math.random() - 0.5) * 0.5;
        const velocity = 150 + Math.random() * 200;
        const size = 8 + Math.random() * 12;
        
        // Calculate end position based on angle and velocity
        const endX = centerX + Math.cos(angle) * velocity;
        const endY = centerY + Math.sin(angle) * velocity;
        
        newParticles.push({
          id: i,
          startX: centerX,
          startY: centerY,
          endX,
          endY,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 360,
        });
      }

      setParticles(newParticles);
      
      // Add class to container to enable particle reveal
      if (containerRef.current) {
        containerRef.current.classList.add('has-particles');
      }

      // Start reveal animation
      setTimeout(() => {
        setIsRevealed(true);
      }, 100);
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      // Wait a bit longer to ensure container is fully rendered
      setTimeout(initParticles, 200);
    });

    // Fallback: ensure character is visible even if particles fail
    const fallbackTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);

    // Clean up particles after animation
    const cleanupTimer = setTimeout(() => {
      setParticles([]);
    }, duration + 1000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(cleanupTimer);
      clearTimeout(fallbackTimer);
    };
  }, [particleCount, duration, colors]);

  return (
    <div className="particle-reveal-container" ref={containerRef}>
      <div className={`particle-content ${isRevealed ? 'revealed' : ''}`}>
        {children}
      </div>
      <div className="particles-wrapper">
        {particles.map((particle) => {
          const deltaX = particle.endX - particle.startX;
          const deltaY = particle.endY - particle.startY;
          
          return (
            <div
              key={particle.id}
              className="particle"
              style={{
                '--particle-start-x': `${particle.startX}px`,
                '--particle-start-y': `${particle.startY}px`,
                '--particle-end-x': `${particle.endX}px`,
                '--particle-end-y': `${particle.endY}px`,
                '--particle-delta-x': `${deltaX}px`,
                '--particle-delta-y': `${deltaY}px`,
                '--particle-size': `${particle.size}px`,
                '--particle-color': particle.color,
                '--particle-rotation': `${particle.rotation}deg`,
                '--particle-rotation-speed': `${particle.rotationSpeed}deg`,
                '--animation-duration': `${duration}ms`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
};

