"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Meet Anita, Your AI HR Partner",
    description: "Connect with our intelligent AI HR agent who understands your regulatory compliance needs and streamlines your workflow.",
    isReversed: false,
    boxContent: (
      <div className="flex flex-col items-center justify-center h-full relative group">
        <div className="absolute inset-0 bg-black " />
        
        {/* Video Container with Enhanced Glowing Border */}
        <div className="video-container relative w-full h-full transform transition-transform duration-700">
          {/* Multi-layered Glowing Border Effect */}
          <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-75 blur-md group-hover:opacity-100 animate-pulse-glow" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-90" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg opacity-50 animate-pulse" />
          
          {/* Corner Accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-pink-500 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-500 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />
          
          {/* Video Element Container */}
          <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black">
            {/* Simple Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
            
            {/* Video */}
            <video
              className="w-full h-auto max-h-full object-contain opacity-0 scale-95 transform transition-all duration-1000"
              src="/FirstImage.mp4"
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        {/* Text Overlay with Futuristic Style */}
        <div className="text-overlay absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="text-5xl font-bold text-white mb-8 text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg" />
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 [text-shadow:0_0_15px_rgba(59,130,246,0.5)]">
              AI-Powered HR
            </span>
            <div className="text-2xl mt-2 text-gray-300 font-light">
              <span className="relative">
                Revolutionize Your Workflow
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </div>
          </div>
          
          {/* Enhanced Button */}
          <button className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden group/btn">
            {/* Button Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/25 to-purple-400/0 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center">
              Get Started
              <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Animated Corner Dots */}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-100" />
          </button>
        </div>
      </div>
    )
  },
  {
    title: "Secure Network Connection",
    description: "Our advanced AI network analyzes your specific regulatory requirements and compliance needs in real-time, ensuring a perfect match.",
    isReversed: true,
    boxContent: (
      <div className="flex items-center justify-center h-full relative">
        <div className="absolute inset-0 bg-transparent" />
        
        <div className="w-full max-w-md relative">
          <div className="flex items-center justify-between">
            {/* Agent Entity */}
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                </div>
              </div>
              <span className="mt-2 text-xs font-medium text-gray-300">AGENT</span>
            </div>
            
            {/* User Entity */}
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 animate-pulse" 
                     style={{ animationDelay: '1.5s' }} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-0.5 opacity-0"
                     style={{ animation: 'appear 0.5s ease-in forwards', animationDelay: '1.5s' }}>
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                </div>
              </div>
              <span className="mt-2 text-xs font-medium text-gray-300 opacity-0"
                    style={{ animation: 'appear 0.5s ease-in forwards', animationDelay: '1.8s' }}>USER</span>
            </div>
          </div>
          
          {/* Connection Line */}
          <div className="absolute left-16 right-16 top-8 h-0.5">
            <div className="w-full h-full flex items-center justify-between">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 rounded-full bg-gray-600" />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 transform origin-left scale-x-0" 
                 style={{ animation: 'progress 1.5s ease-in-out forwards' }} />
            <div className="absolute inset-0">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full bg-purple-400"
                   style={{ animation: 'dataMove 1.5s ease-in forwards' }} />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full bg-pink-400"
                   style={{ animation: 'dataMove 1.5s ease-in forwards', animationDelay: '0.3s' }} />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full bg-blue-400"
                   style={{ animation: 'dataMove 1.5s ease-in forwards', animationDelay: '0.6s' }} />
            </div>
          </div>
  
          {/* Status Text */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50"
                 style={{ animation: 'appear 0.5s ease-in forwards' }}>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">CONNECTING...</span>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes dataMove {
            to { left: calc(100% - 0.375rem); }
          }
          @keyframes appear {
            to { opacity: 1; }
          }
        `}</style>
      </div>
    )
  },
  {
    title: "Expert Skill Assessment",
    description: "Watch as our AI agent demonstrates its expertise in key regulatory areas, ensuring comprehensive compliance coverage for your needs.",
    isReversed: false,
  
  },
  {
    title: "Perfect Match Found!",
    description: "Your ideal AI compliance partner has been identified. Ready to revolutionize your regulatory workflow with intelligent automation?",
    isReversed: true,
  
  }
];

export const MainAnimation = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const boxes = boxRefs.current;
    if (!cursor || !boxes.every(box => box)) return;

    // Initial cursor animation - enter from right
    gsap.set(cursor, {
      x: window.innerWidth,
      y: window.innerHeight / 2,
      opacity: 0
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    // Video animation setup
    const firstBox = boxes[0];
    if (firstBox) {
      const video = firstBox.querySelector('video');
      const button = firstBox.querySelector('button');
      const textOverlay = firstBox.querySelector('.text-overlay');
      
      if (video && button && textOverlay) {
        // Create a scroll trigger for the video
        ScrollTrigger.create({
          trigger: firstBox,
          start: "top center",
          onEnter: () => {
            const tl = gsap.timeline();

            // Only animate the video in
            tl.to(video, {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                video.play();
              }
            });
          }
        });

        // Keep only the button hover effect
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.in"
          });
        });
      }
    }

    // Animate boxes
    boxes.forEach((box, index) => {
      if (!box) return;
      
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index % 2 === 0 ? 100 : -100,
        duration: 1,
        ease: "power2.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="py-20 relative">
      {/* Improved background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(13,17,32,0.7),rgba(2,6,23,1))]" />
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 z-50 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30" />
          <Image
            src="/cursor.png"
            alt="Cursor"
            width={32}
            height={32}
            className="relative z-10"
          />
        </div>
      </div>
      
      {sections.map((section, index) => (
        <div 
          key={index}
          className={`relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 mb-32 ${
            section.isReversed ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="w-1/2 pr-12">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {section.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {section.description}
            </p>
          </div>
          
          <div 
            ref={(el) => {
              boxRefs.current[index] = el;
            }}
            className="w-1/2 h-[400px] bg-gray-900/30 backdrop-blur-md rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-800/50 overflow-hidden"
          >
            {index === 0 ? (
              <div className="flex flex-col items-center justify-center h-full relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                
                {/* Video Container with Enhanced Glowing Border */}
                <div className="video-container relative w-full h-full transform transition-transform duration-700">
                  {/* Multi-layered Glowing Border Effect */}
                  <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-75 blur-md group-hover:opacity-100 animate-pulse-glow" />
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-90" />
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg opacity-50 animate-pulse" />
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-pink-500 rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-500 rounded-bl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />
                  
                  {/* Video Element Container */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black">
                    {/* Simple Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
                    
                    {/* Video */}
                    <video
                      className="w-full h-auto max-h-full object-contain opacity-0 scale-95 transform transition-all duration-1000"
                      src="/FirstImage.mp4"
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                </div>

                {/* Text Overlay with Futuristic Style */}
                <div className="text-overlay absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-5xl font-bold text-white mb-8 text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg" />
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 [text-shadow:0_0_15px_rgba(59,130,246,0.5)]">
                      AI-Powered HR
                    </span>
                    <div className="text-2xl mt-2 text-gray-300 font-light">
                      <span className="relative">
                        Revolutionize Your Workflow
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Enhanced Button */}
                  <button className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden group/btn">
                    {/* Button Glow Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/25 to-purple-400/0 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    
                    {/* Button Content */}
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {/* Animated Corner Dots */}
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-100" />
                  </button>
                </div>
              </div>
            ) : (
              section.boxContent
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

<style jsx>{`
  @keyframes grow-line {
    from {
      transform: scaleX(0) translateY(-50%);
    }
    to {
      transform: scaleX(1) translateY(-50%);
    }
  }

  @keyframes move-dot {
    0% {
      left: 0%;
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }

  @keyframes progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  .animate-grow-line {
    animation: grow-line 1s ease-out forwards;
  }

  .animate-move-dot {
    animation: move-dot 3s linear infinite;
  }

  .animate-progress {
    animation: progress 2s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes skillAppear {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .skill-box {
    position: relative;
    overflow: hidden;
  }

  .skill-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.1), transparent);
    transform: translateX(-100%);
    animation: skillGlow 2s ease-in-out infinite;
  }

  @keyframes skillGlow {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .hire-btn, .reject-btn {
    animation: fadeIn 0.5s ease-out 1s forwards;
  }

  .hire-glow {
    animation: hireGlow 2s ease-out 3s forwards;
  }

  @keyframes hireGlow {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.4;
    }
  }

  .neural-network {
    position: relative;
  }

  @keyframes pulse-opacity {
    0%, 100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse-opacity {
    animation: pulse-opacity 2s ease-in-out infinite;
  }

  .connection-line {
    animation: draw 1s ease-out forwards;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  /* Connection progress animation */
  .connection-progress {
    animation: progress 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Data dot animation */
  .data-dot {
    opacity: 0;
    animation: dataDotMove 2s cubic-bezier(0.4, 0, 0.2, 1) var(--delay) infinite;
  }

  @keyframes dataDotMove {
    0% {
      left: 0%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }

  /* AI appearance animations */
  .ai-appear {
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
  }

  .ai-pulse {
    opacity: 0;
    animation: aiPulse 3s cubic-bezier(0.4, 0, 0.2, 1) 2.5s infinite;
  }

  .ai-text-appear {
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) 2.3s forwards;
  }

  @keyframes aiPulse {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`}</style>