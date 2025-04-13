"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'image';
  src: string;
  posterUrl?: string;
  videoUrls?: string[];
}

// Tags for marquee
const tags = [
  "Operational efficiency",
  "Decrease costs per lead",
  "Boost revenue growth",
  "Save costs",
  "Reach relevant prospects",
  "Increase pipeline",
  "Stay ahead of competition",
  "Refine ICP",
  "Lead qualification on autopilot",
  "Boost Conversion Rates"
];

const WorkforceSection = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Start with the first slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('forward');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoEndedRef = useRef<boolean>(false);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Handle auto rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const startAutoRotation = () => {
      // Clear any existing timers
      if (autoRotateTimerRef.current) {
        clearTimeout(autoRotateTimerRef.current);
      }
      
      // Current item is an image, use fixed time (2 seconds)
      if (carouselItems[activeSlide].type === 'image') {
        console.log('Setting image timer for 2 seconds');
        autoRotateTimerRef.current = setTimeout(() => {
          console.log('Image timer expired, rotating');
          rotateCarousel();
        }, 2000);
      }
      // For videos, handleVideoEnded will trigger the rotation
    };
    
    startAutoRotation();
    
    // Cleanup timer on unmount or when active slide changes
    return () => {
      if (autoRotateTimerRef.current) {
        clearTimeout(autoRotateTimerRef.current);
      }
    };
  }, [activeSlide, isAutoPlaying]);
  
  // Function to handle rotation direction
  const rotateCarousel = () => {
    if (!isAutoPlaying || isTransitioning) return;
    
    if (direction === 'forward') {
      if (activeSlide === carouselItems.length - 1) {
        // Reached the end, change direction
        setDirection('backward');
        handleNavClick(activeSlide - 1);
      } else {
        handleNavClick(activeSlide + 1);
      }
    } else {
      if (activeSlide === 0) {
        // Reached the beginning, change direction
        setDirection('forward');
        handleNavClick(activeSlide + 1);
      } else {
        handleNavClick(activeSlide - 1);
      }
    }
  };

  // Handle video ended event
  const handleVideoEnded = () => {
    videoEndedRef.current = true;
    rotateCarousel();
  };

  // Handle swipe events
  const handleTouchStart = (e: React.TouchEvent) => {
    // Pause auto-rotation when user interacts
    setIsAutoPlaying(false);
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
    
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
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
          loop={false} 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster={item.posterUrl}
          onEnded={handleVideoEnded}
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

  // Animation for marquee
  const marqueeAnimation = {
    animation: 'marquee 30s linear infinite',
    animationDirection: 'normal'
  };
  
  const reverseMarqueeAnimation = {
    animation: 'marquee 30s linear infinite',
    animationDirection: 'reverse'
  };

  return (
    <>
    
      {/* Existing Carousel Section */}
      <section className="bg-[#f5f1eb] py-20">
        <div className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="py-10 md:py-16">
              <div>
                {/* Header Section */}
                <div className="mb-16 md:mb-24">
                  <div className="text-center">
                    <div className="mx-auto max-w-4xl">
                      <div className="mb-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Digital workers transform your workforce</h2>
                      </div>
                      <div className="mx-auto max-w-2xl">
                        <p className="text-base md:text-lg text-gray-700">
                          Intelligent, enterprise-ready, and seamlessly embedded in your operations—digital workers bring advanced AI technology to your team, scaling effortlessly to drive outcomes and push productivity.
                        </p>
                      </div>
                      <div className="mt-6">
                        <div className="flex justify-center">
                          <a href="/demo" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">Get started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Section */}
                <div className="relative">
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
                              isMobile ? 'w-[85%]' : 'w-[30%]'
                            } ${isActive ? 'z-30' : `z-${20 - distance}`}`}
                            style={{
                              opacity: isActive ? 1 : Math.max(0.3, 0.9 - (distance * 0.3)),
                              transform: `translate(-50%, -50%) ${!isMobile ? `translateX(${position * 110}%)` : ''} ${isActive ? 'scale(1)' : 'scale(0.75)'}`,
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
                              <div className="mt-4 justify-start transition-all duration-500">
                                <h3 className={`text-lg md:text-xl font-medium mb-1 ${isActive ? 'text-black font-bold' : 'text-gray-500'}`}>
                                  {item.title}
                                </h3>
                                <p className={`text-sm md:text-base ${isActive ? 'text-gray-700' : 'text-gray-400'} line-clamp-2`}>
                                  {item.description}
                                </p>
                              </div>
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
                        onClick={() => {
                          handleNavClick(index);
                          setIsAutoPlaying(false);
                          // Resume auto-rotation after 5 seconds
                          setTimeout(() => setIsAutoPlaying(true), 5000);
                        }}
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
                        onClick={() => {
                          handleNavClick(activeSlide > 0 ? activeSlide - 1 : carouselItems.length - 1);
                          setIsAutoPlaying(false);
                          // Resume auto-rotation after 5 seconds
                          setTimeout(() => setIsAutoPlaying(true), 5000);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-40 transition-all duration-300"
                        onClick={() => {
                          handleNavClick(activeSlide < carouselItems.length - 1 ? activeSlide + 1 : 0);
                          setIsAutoPlaying(false);
                          // Resume auto-rotation after 5 seconds
                          setTimeout(() => setIsAutoPlaying(true), 5000);
                        }}
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
      
    </>
  );
};

export default WorkforceSection;