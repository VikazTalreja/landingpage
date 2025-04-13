"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'image';
  src: string;
  posterUrl?: string;
  videoUrls?: string[];
}

const WorkforceSection = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Start with the middle slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle swipe events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum distance to consider a swipe
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - go to next slide
        handleNavClick(activeSlide < carouselItems.length - 1 ? activeSlide + 1 : 0);
      } else {
        // Swipe right - go to previous slide
        handleNavClick(activeSlide > 0 ? activeSlide - 1 : carouselItems.length - 1);
      }
    }
    
    // Reset touch values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const carouselItems: CarouselItem[] = [
    {
      id: 0,
      title: "Always learning",
      description: "Learn and adapt continuously, expanding knowledge and maximizing performance with every interaction.",
      type: 'video',
      src: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d388c2fa83403e74db1b3b_always-learning-transcode.mp4",
      posterUrl: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d388c2fa83403e74db1b3b_always-learning-poster-00001.jpg",
      videoUrls: [
        "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d388c2fa83403e74db1b3b_always-learning-transcode.mp4",
        "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d388c2fa83403e74db1b3b_always-learning-transcode.webm"
      ]
    },
    {
      id: 1,
      title: "Customised to you",
      description: "Build a lasting and contextual memory, transforming past insights into future performance.",
      type: 'image',
      src: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/673d9a61ee1f793446f25070_Workers%20are%20self-learning.webp"
    },
    {
      id: 3,
      title: "Autonomous Intelligence",
      description: "Independent, proactive, and able to execute complex tasks without supervision to drive results autonomously.",
      type: 'video',
      src: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.mp4",
      posterUrl: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-poster-00001.jpg",
      videoUrls: [
        "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.mp4",
        "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672b97ee6fe4e015e89a719a_Book%20Meeting%20On%20Autopilot%281%29-transcode.webm"
      ]
    },
    {
      id: 4,
      title: "Enterprise-ready",
      description: "Highest security standards, SOC-2 compliance, and end-to-end encryption of all customer data.",
      type: 'video',
      src: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672ddc94b1f3574e186ec5f0_Safe%20And%20Secure%202-transcode.mp4",
      posterUrl: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672ddc94b1f3574e186ec5f0_Safe%20And%20Secure%202-poster-00001.jpg",
      videoUrls: [
        "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672ddc94b1f3574e186ec5f0_Safe%20And%20Secure%202-transcode.mp4",
        "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/672ddc94b1f3574e186ec5f0_Safe%20And%20Secure%202-transcode.webm"
      ]
    }
  ];

  const handleNavClick = (index: number) => {
    if (index !== activeSlide && !isTransitioning) {
      setIsTransitioning(true);
      setActiveSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Video component that handles autoplay
  const VideoBackground = ({ item, isActive }: { item: CarouselItem, isActive: boolean }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    useEffect(() => {
      // Only play the video if it's the active slide
      if (videoRef.current && isActive) {
        videoRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      } else if (videoRef.current && !isActive) {
        videoRef.current.pause();
      }
    }, [isActive]);
    
    if (item.type !== 'video' || !item.videoUrls) return null;

    return (
      <div className="w-full h-full">
        <video 
          ref={videoRef}
          autoPlay={isActive}
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster={item.posterUrl}
        >
          {item.videoUrls.map((url, idx) => (
            <source key={idx} src={url} />
          ))}
        </video>
      </div>
    );
  };

  // Function to determine distance from active slide
  const getDistanceFromActive = (index: number) => {
    return Math.abs(index - activeSlide);
  };

  return (
    <section className="section_workforce-carousel bg-[#f5f1eb] py-20">
      <div className="padding-global px-4 md:px-6">
        <div className="container-large max-w-7xl mx-auto">
          <div className="padding-section-large py-10 md:py-16">
            <div className="workforce-carousel_component">
              {/* Header Section */}
              <div className="margin-bottom margin-xxlarge mb-16 md:mb-24">
                <div className="text-align-center text-center">
                  <div className="max-width-large align-center mx-auto max-w-4xl">
                    <div className="margin-bottom margin-small mb-4">
                      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Digital workers transform your workforce</h2>
                    </div>
                    <div className="max-width-medium align-center mx-auto max-w-2xl">
                      <p className="text-base md:text-lg text-gray-700">
                        Intelligent, enterprise-ready, and seamlessly embedded in your operations—digital workers bring advanced AI technology to your team, scaling effortlessly to drive outcomes and push productivity.
                      </p>
                    </div>
                    <div className="margin-top margin-small mt-6">
                      <div className="button-group is-center flex justify-center">
                        <a href="/demo" className="button bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">Get started</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Section */}
              <div className="workforce-carousel_group relative">
                <div 
                  ref={carouselRef}
                  className="relative overflow-hidden py-8 px-4 h-[400px] md:h-[500px]" 
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative w-full h-full mx-auto">
                    {carouselItems.map((item, index) => {
                      const distance = getDistanceFromActive(index);
                      const isActive = index === activeSlide;
                      const position = index - activeSlide;
                      
                      // Only show items that are active or adjacent on mobile
                      if (isMobile && Math.abs(position) > 0) {
                        return null;
                      }
                      
                      return (
                        <div
                          key={item.id}
                          className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out ${
                            isMobile ? 'w-[85%]' : 'w-[40%]'
                          } ${isActive ? 'z-30' : `z-${20 - distance}`}`}
                          style={{
                            opacity: isActive ? 1 : Math.max(0.3, 0.9 - (distance * 0.25)),
                            transform: `translate(-50%, -50%) ${!isMobile ? `translateX(${position * 65}%)` : ''} ${isActive ? 'scale(1)' : 'scale(0.85)'}`,
                          }}
                          onClick={() => !isActive && handleNavClick(index)}
                        >
                          <div className="flex flex-col">
                            <div className={`relative aspect-video bg-white rounded-xl shadow-lg overflow-hidden ${isActive ? 'ring-2 ring-black/10' : ''} ${!isActive ? 'cursor-pointer' : ''}`}>
                              {item.type === 'video' ? (
                                <VideoBackground item={item} isActive={isActive} />
                              ) : (
                                <img 
                                  src={item.src} 
                                  loading="lazy" 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            {isActive && (
                              <div className="mt-4 justify-start transition-all duration-500">
                                <h3 className="text-lg md:text-2xl font-bold text-black text-left mb-1">{item.title}</h3>
                                <p className="text-sm md:text-base text-gray-700 text-left">{item.description}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? 'bg-black'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-pressed={index === activeSlide}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows - Hidden on Mobile */}
                {!isMobile && (
                  <>
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-40 transition-all duration-300"
                      onClick={() => handleNavClick(activeSlide > 0 ? activeSlide - 1 : carouselItems.length - 1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-40 transition-all duration-300"
                      onClick={() => handleNavClick(activeSlide < carouselItems.length - 1 ? activeSlide + 1 : 0)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {/* Mobile Swipe Indicator - only visible on mobile */}
              {isMobile && (
                <div className="flex justify-center mt-4 text-xs text-gray-500">
                  <p>Swipe or tap dots to navigate</p>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceSection;