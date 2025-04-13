"use client";
import { IconArrowRight, IconChevronCompactLeft, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { FormModal } from './form';


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


const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};



// Add CSS animation styles
const rotateGradientStyles = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .rotate-gradient {
    animation: spin 8s linear infinite;
    animation-timing-function: linear;
  }

  .modal-overlay {
    animation: fadeIn 0.3s ease-out;
  }

  .modal-content {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Add new animations for Typeform-like experience
const formStyles = `
  ${rotateGradientStyles}
  
  .typeform-slide {
    animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .typeform-fade {
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input-focus {
    @apply border-b-2 border-gray-300 focus:border-gray-800;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .gradient-border {
    background: linear-gradient(90deg, #4F46E5, #9333EA);
    background-size: 200% 100%;
    animation: gradientMove 4s linear infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

interface FormData {
  name: string;
  phoneNumber: string;
  companyName: string;
}

interface Question {
  id: keyof FormData;
  question: string;
  placeholder: string;
  type: string;
}

const questions: Question[] = [
  {
    id: 'name',
    question: " What's your name?",
    placeholder: 'Type your name',
    type: 'text'
  },
  {
    id: 'phoneNumber',
    question: ' Your phone number?',
    placeholder: 'Enter your number',
    type: 'tel'
  },
  {
    id: 'companyName',
    question: 'And your company?',
    placeholder: 'Enter company name',
    type: 'text'
  }
];

export const ParticleButton = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    companyName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const centerXRef = useRef(0);
  const centerYRef = useRef(0);
  const lastEmitTimeRef = useRef(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Close modal after showing success message for 3 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setCurrentStep(0);
      setFormData({
        name: '',
        phoneNumber: '',
        companyName: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

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
        speed: 0.005, // Reduced rotation speed (was 0.01)
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
        p.radius += 0.3; // Move outward slower (was 0.5)
        p.angle += 0.005; // Rotate slower (was 0.01)
        p.life -= 0.002; // Decrease life more slowly (was 0.004)
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
      if (timestamp - lastEmitTimeRef.current > 150) { // Emit less frequently (was 100ms)
        if (particlesRef.current.length < 20) { // Keep max 20 particles
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
        p.speed *= 0.5;
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
    <>
      <style>{formStyles}</style>
      <div className="relative inline-block">
        <canvas ref={canvasRef} />
        <button
          ref={buttonRef}
          onClick={() => setIsModalOpen(true)}
          className={`
            group
            relative
            cursor-pointer
            overflow-hidden
            whitespace-nowrap
            py-6
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]
            flex
            justify-center
            text-lg
            font-['Geist']
            ${className}
          `}
          style={{
            '--spread': '480deg',
            '--shimmer-color': '#DEDEDE',
            '--radius': '10px',
            '--speed': '5s',
            '--cut': '0.3em',
            '--bg': '#FFFFFF',
            borderRadius: 'var(--radius)',
            background: 'var(--bg)'
          } as React.CSSProperties}
          {...props}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-[-100%] rotate-gradient">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from calc(120deg - (var(--spread) * 0.5)), transparent 0, rgba(97, 97, 97, 0.8) var(--spread), transparent var(--spread))',
                  opacity: '2'
                }}
              />
            </div>
          </div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'var(--bg)',
              borderRadius: 'var(--radius)',
              inset: 'var(--cut)'
            }}
          />
          <span className="z-10 w-fit px-10 flex justify-center items-center text-lg rounded-lg whitespace-pre bg-clip-text text-center font-semibold leading-none tracking-tight text-black">
            {children} <IconArrowRight />
          </span>
        </button>

        {/* Typeform-like Modal */}
        {/* {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="shadow-input mx-auto w-full max-w-md rounded-lg bg-white p-6 dark:bg-black relative">
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              {!isSubmitted ? (
                <>
                  <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                    Talk to our AI HR Agent Anita
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-2">
                      <Label htmlFor="name" className="text-sm font-medium text-left">
                        Full Name
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Tyler Durden" 
                        type="text" 
                        className="mt-1"
                      />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-2">
                      <Label htmlFor="email" className="text-sm font-medium text-left">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        className="mt-1"
                      />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-left">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+1 234 567 890"
                        type="tel"
                        className="mt-1"
                      />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                      <Label htmlFor="company" className="text-sm font-medium text-left">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Fight Club"
                        type="text"
                        className="mt-1"
                      />
                    </LabelInputContainer>

                    <button
                      className="w-full bg-black text-white dark:bg-white dark:text-black font-medium py-2 px-4 rounded-md transition-colors"
                      type="submit"
                    >
                      Continue &rarr;
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 ">
                 
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">You will receive a call from Mahira shortly.</p>
                </div>
              )}
            </div>
          </div>
        )} */}
         <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request a Consultation" 
        successMessage="Our team will contact you shortly!"
      />
      </div>
    </>
  );
};