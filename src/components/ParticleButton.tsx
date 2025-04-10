"use client";
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  angle: number;
  radius: number;
  color: string;
  size: number;
  speed: number;
  opacity: number;
  life: number;
}

export const ParticleButton = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const centerXRef = useRef(0);
  const centerYRef = useRef(0);
  const lastEmitTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    if (!canvas || !button) return;

    // Position the canvas behind the button
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    button.style.position = 'relative';
    button.style.zIndex = '2';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = button.getBoundingClientRect();
      canvas.width = rect.width + 200;
      canvas.height = rect.height + 200;
      canvas.style.width = `${canvas.width}px`;
      canvas.style.height = `${canvas.height}px`;
      canvas.style.left = `-${(canvas.width - rect.width) / 2}px`;
      canvas.style.top = `-${(canvas.height - rect.height) / 2}px`;
      
      // Update center point for vortex
      centerXRef.current = canvas.width / 2;
      centerYRef.current = canvas.height / 2;
    };

    resize();
    window.addEventListener('resize', resize);

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      
      return {
        x: centerXRef.current,
        y: centerYRef.current,
        angle,
        radius: 0, // Start from center
        color: 'rgb(255, 255, 255)',
        size: 3,
        speed: 0.02, // Base rotation speed
        opacity: 1, // Start fully visible
        life: 1, // Life percentage (1 = new, 0 = dead)
      };
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw existing particles
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      
      for (const p of particlesRef.current) {
        // Update particle
        p.radius += 0.5; // Move outward slower
        p.angle += 0.01; // Rotate
        p.life -= 0.004; // Decrease life more slowly
        p.opacity = p.life; // Fade out based on life

        // Calculate new position
        p.x = centerXRef.current + Math.cos(p.angle) * p.radius;
        p.y = centerYRef.current + Math.sin(p.angle) * p.radius;

        // Draw particle with opacity
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }

      // Emit new particles periodically
      if (timestamp - lastEmitTimeRef.current > 100) { // Emit every 100ms
        if (particlesRef.current.length < 20) { // Keep max 10 particles
          particlesRef.current.push(createParticle());
        }
        lastEmitTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Add hover effect to speed up vortex
    const handleMouseEnter = () => {
      particlesRef.current.forEach(p => {
        p.speed *= 2;
      });
    };

    const handleMouseLeave = () => {
      particlesRef.current.forEach(p => {
        p.speed /= 2;
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible' }}>
      <canvas ref={canvasRef} />
      <button
        ref={buttonRef}
        className={`px-10 py-4 text-lg text-black border-8 border-gray-700/30  font-medium tracking-wide shadow-lg bg-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};