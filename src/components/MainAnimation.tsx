'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Section {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  ctaText?: string;
}

const sections: Section[] = [
  {
    id: 'hero',
    title: 'Revolutionize Your HR Experience',
    subtitle: 'AI-Powered HR Solutions',
    description: 'Transform your hiring process with cutting-edge AI technology. Experience seamless candidate screening, automated compliance checks, and data-driven decision making.',
    ctaText: 'Get Started'
  },
  {
    id: 'features',
    title: 'Smart HR Automation',
    subtitle: 'Powered by Advanced AI',
    description: 'Leverage machine learning algorithms to streamline your recruitment process, ensure compliance, and make data-driven hiring decisions.',
    ctaText: 'Learn More'
  },
  {
    id: 'benefits',
    title: 'Enhanced Decision Making',
    subtitle: 'Data-Driven Insights',
    description: 'Get real-time analytics and insights to make informed decisions. Our AI analyzes patterns and predicts candidate success with high accuracy.',
    ctaText: 'See How It Works'
  },
  {
    id: 'action',
    title: 'Ready to Transform Your HR?',
    subtitle: 'Join Industry Leaders',
    description: 'Join thousands of companies already using our AI-powered HR solution to build better teams and drive growth.',
    ctaText: 'Start Free Trial'
  }
];

const MainAnimation: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const initAnimations = () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        // Create scroll trigger for each section
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(index),
          onEnterBack: () => setActiveSection(index),
        });

        // Animate section elements with stagger
        const elements = section.querySelectorAll('.animate-on-scroll');
        gsap.fromTo(elements, 
          { 
            y: 50, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "center center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Parallax background effect
      gsap.to(".parallax-bg", {
        y: "30%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    };

    const timer = setTimeout(initAnimations, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionRefs.current[index]) {
      sectionRefs.current[index] = el;
    }
  };

  const addToBoxRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !boxRefs.current[index]) {
      boxRefs.current[index] = el;
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[20%] w-[100%] h-[100%] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-[100px] parallax-bg" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[100%] h-[100%] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px] parallax-bg" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => addToRefs(el, index)}
            className={`min-h-screen flex items-center py-24 ${
              activeSection === index ? 'opacity-100' : 'opacity-50'
            } transition-opacity duration-500`}
          >
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="animate-on-scroll inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-lg font-medium">
                    {section.subtitle}
                  </span>
                  <h2 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {section.title}
                  </h2>
                  <p className="animate-on-scroll text-xl text-gray-300 leading-relaxed max-w-xl">
                    {section.description}
                  </p>
                </div>
                
                <button className="animate-on-scroll group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <span className="relative z-10">{section.ctaText}</span>
                  <div className="absolute inset-0 -translate-x-full hover:translate-x-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]" />
                  </div>
                </button>
              </div>

              {/* Visual side */}
              <div className="relative">
                {index === 0 && (
                  <div className="relative h-[80vh] rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10">
                      <div className="video-container relative w-full h-full overflow-hidden">
                        <video
                          ref={videoRef}
                          src="/FirstImage.mp4"
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Interactive elements */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <button className="px-8 py-3 bg-white text-black rounded-lg font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                              Watch Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="relative h-96 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 backdrop-blur-sm border border-white/10 overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="space-y-6 text-center">
                        <div className="flex justify-center">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                          <div className="h-2 w-36 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-75" />
                          <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-150" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="relative h-96 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="relative z-10 h-full grid grid-cols-2 gap-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="relative rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative z-10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="h-4 w-20 bg-white/20 rounded mb-2" />
                            <div className="h-3 w-16 bg-white/10 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="relative h-96 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                    </div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-white text-sm font-medium">Live Demo Available</span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-center space-x-4">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-3 h-12 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                                style={{ animation: `bounce 1s ease-in-out ${i * 0.15}s infinite` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-white scale-150 shadow-lg shadow-white/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        hasScrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default MainAnimation;