"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FormModal } from '@/components/form';

type TabData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageSrcSet: string;
}

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

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<string>("Tab 1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('forward');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoEndedRef = useRef<boolean>(false);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

  const tabs: TabData[] = [
    {
      id: "Tab 1",
      title: "Assess",
      description: "Mahira speaks directly with candidates and employees—engaging in real-time, free-flowing conversations that go beyond surface-level interviews.",
      imageSrc: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-500.webp 500w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-800.webp 800w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-1080.webp 1080w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-1600.webp 1600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-2000.webp 2000w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-2600.webp 2600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01-p-3200.webp 3200w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d378d5680227d8450cfb55_tab-01.webp 3360w"
    },
    {
      id: "Tab 2",
      title: "Analyze",
      description: "Backed by behavioral psychology, Mahira processes tone, language, and sentiment to generate actionable soft skill insights and fit scores",
      imageSrc: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-500.webp 500w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-800.webp 800w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-1080.webp 1080w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-1600.webp 1600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-2000.webp 2000w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-2600.webp 2600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02-p-3200.webp 3200w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d964015aef4a098f69955b_tab-02.webp 3360w"
    },
    {
      id: "Tab 3",
      title: "Personalize",
      description: "Every interaction is tailored—Mahira dynamically adjusts her conversation flow to make people feel heard, understood, and open.",
      imageSrc: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-500.webp 500w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-800.webp 800w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-1080.webp 1080w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-1600.webp 1600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-2000.webp 2000w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-2600.webp 2600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03-p-3200.webp 3200w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9657f56d92c02498e9bef_tab-03.webp 3360w"
    },
    {
      id: "Tab 4",
      title: "Deliver",
      description: "Results arrive in clean, structured reports—highlighting traits, risks, growth areas, and role fit, ready for your team to review and act on.",
      imageSrc: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-500.webp 500w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-800.webp 800w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-2000.webp 2000w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-2600.webp 2600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-3200.webp 3200w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04.webp 3360w"
    }
  ];
  
  // Carousel items
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
        autoRotateTimerRef.current = setTimeout(() => {
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

  return (
    <div className="bg-[#0a2532] py-24 px-4">
      <div className="max-w-7xl mx-auto">
      <div className="text-center text-white max-w-4xl mx-auto">
            <div className="mb-2">
              <div className="text-sm font-medium">24/7 Digital Workforce</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Amplify Intelligence, Accelerate Growth</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Power your growth with digital workers that identify, engage, and convert—free your team for higher impact work
            </p>
            <div className="mt-6">
              <Link 
                href="/demo" 
                className="bg-white text-[#0a2532] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        {/* Tags Marquee Section */}
        <div className="mt-10 mb-16 overflow-hidden relative">
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            
            .animate-marquee {
              animation: marquee 150s linear infinite;
            }
            
            .animate-marquee-reverse {
              animation: marquee 150s linear infinite reverse;
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes fadeOut {
              from { opacity: 1; transform: translateY(0); }
              to { opacity: 0; transform: translateY(-20px); }
            }
          `}</style>
          
          {/* First row - left to right */}
          <div className="flex whitespace-nowrap mb-4 overflow-hidden">
            <div className="flex animate-marquee">
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <div key={`tag1-${index}`} className="flex items-center bg-[#143547] rounded-full px-4 py-2 mx-2 text-sm text-white">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <div key={`tag1-copy-${index}`} className="flex items-center bg-[#143547] rounded-full px-4 py-2 mx-2 text-sm text-white">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row - right to left */}
          <div className="flex whitespace-nowrap mb-4 overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <div key={`tag2-${index}`} className="flex items-center bg-[#143547] rounded-full px-4 py-2 mx-2 text-sm text-white">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse" aria-hidden="true">
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <div key={`tag2-copy-${index}`} className="flex items-center bg-[#143547] rounded-full px-4 py-2 mx-2 text-sm text-white">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Third Row - left to right */}
          <div className="flex whitespace-nowrap mb-4 overflow-hidden">
            <div className="flex animate-marquee">
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <div key={`tag3-${index}`} className="flex items-center bg-[#143547] rounded-full px-4 py-2 mx-2 text-sm text-white">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <div key={`tag3-copy-${index}`} className="flex items-center bg-[#143547] rounded-full px-4 py-2 mx-2 text-sm text-white">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2532] via-transparent to-[#0a2532] pointer-events-none"></div>
        </div>

        <div className="tabs-wrapper bg-[#f5f1eb] p-10 rounded-3xl shadow-xl">
          {/* Header section */}
          <div className="layout406-tabs-heading-wrapper mb-10">
            <div className="layout406-tabs-heading-top text-center md:text-left">
              <div className="tag-wrapper mb-3">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">Meresu AI Platform</div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"> From Conversation to Clarity</h3>
              <p className="text-lg text-gray-700 mb-6"> Mahira handles the entire soft skills evaluation process—from real-time voice interactions to rich, ready-to-use behavioral insights. Here's how she works, step by step</p>
              <div className="button-group">
                <button onClick={() => setIsModalOpen(true)} className="button inline-block bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200">
                  Get started
                </button>
                <FormModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Request a Consultation" 
                  successMessage="Our team will contact you shortly!"
                />
              </div>
            </div>
          </div>

          {/* Tabs section */}
          <div className="product_tabs-desktop">
            {/* Tab content */}
            <div className="product_tabs-content hidden md:block relative h-[400px] overflow-hidden">
              {tabs.map((tab) => (
                <div 
                  key={tab.id}
                  className={`product_tab-pane absolute inset-0  transition-opacity duration-300 ease-in-out ${activeTab === tab.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  style={{
                    transform: activeTab === tab.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
                  }}
                >
                  <div className="product_tab-wrapper">
                    <div className="product_image-wrapper rounded-lg overflow-hidden">
                      <img 
                        sizes="(max-width: 3360px) 100vw, 3360px" 
                        srcSet={tab.imageSrcSet}
                        alt={tab.title} 
                        src={tab.imageSrc}
                        loading="eager" 
                        className="product_image w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom tabs with titles and descriptions */}
            <div className="grid md:grid-cols-4 gap-2 mt-4 border-t border-gray-200 pt-4">
              {tabs.map((tab, index) => (
                <div key={tab.id}>
                  <div 
                    className={`cursor-pointer px-3 py-4 rounded-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${activeTab === tab.id ? 'border-t-2 border-amber-950 text-black ' : 'hover:bg-gray-100  md:text-amber-950/40'}`}
                    onClick={() => setActiveTab(tab.id)}
                  > 
                    <h4 className="text-lg font-semibold mb-2">{tab.title}</h4>
                    <p className="text-sm  mb-3">{tab.description}</p>
                    
                    {/* Mobile-only image */}
                    <div className="md:hidden mt-4">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          sizes="(max-width: 1000px) 100vw, 1000px" 
                          srcSet={tab.imageSrcSet}
                          alt={tab.title} 
                          src={tab.imageSrc}
                          loading="eager" 
                          className="w-full h-auto bg-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
      
        </div>
      </div>
    </div>
  );
};

export default TabSection; 