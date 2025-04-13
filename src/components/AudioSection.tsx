"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FormModal } from './form';

const AudioSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f0e0cf]">
      {/* Full-width background with sandy texture */}
      <div className="absolute inset-0 bg-[url('/sand-texture.jpg')] bg-cover opacity-70 z-0"></div>
      
      <div className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl">
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold text-black mb-5">Listen to Mahira</h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
           Smooth. Smart. Human-like. Listen to Mahira’s tone in action.
            </p>
            
            <div className="bg-[#f8f3ec] rounded-xl p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 relative overflow-hidden">
              {isClient && (
                <audio 
                  ref={audioRef} 
                  src="https://files.tryflowdrive.com/261/file-4e8032b7-1c19-4365-990c-c7742a420b4e_11x-demo.mp3"
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              )}
              
              {/* Waveform visualization */}
              <div className="flex items-center h-16 sm:h-20 md:h-24 gap-[2px] sm:gap-[3px]">
                {isClient && Array.from({ length: 50 }, (_, i) => {
                  // Create a pattern that follows the image's waveform pattern
                  const position = i / 60;
                  
                  // More pronounced waveform pattern with higher amplitudes
                  const frequency1 = Math.sin(position * Math.PI * 12) * 0.5;
                  const frequency2 = Math.sin(position * Math.PI * 6) * 0.25;
                  const frequency3 = Math.sin(position * Math.PI * 3) * 0.2;
                  
                  // Combine frequencies with position-based dampening
                  const centerPos = Math.abs(position - 0.5) * 2; // 0 at center, 1 at edges
                  const positionDamp = Math.max(0, 1 - centerPos * 0.85);
                  const height = Math.max(0.1, (frequency1 + frequency2 + frequency3 + 0.6) * positionDamp);
                  
                  return (
                    <div 
                      key={i} 
                      className="flex-1 bg-[#e0c8a8] rounded-full"
                      style={{ 
                        height: `${height * 100}%`,
                        maxHeight: '100%',
                        minHeight: '8%',
                        minWidth: '4px'
                      }}
                    />
                  );
                })}
                
                {/* Play button positioned in the center of the waveform */}
                <button
                  onClick={togglePlay}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-[#a98c64] rounded-full flex items-center justify-center 
                  hover:bg-[#8a7351] transition-colors shadow-lg z-10"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    style={{ marginLeft: isPlaying ? 0 : '2px' }}
                  >
                    {isPlaying ? (
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    ) : (
                      <path d="M8 5.14v14l11-7-11-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            
            <button onClick={() => setIsModalOpen(true)} className="inline-block bg-black text-white px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
           Get started
            </button>
          </div>
        </div>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Talk to our AI Agent" 
        successMessage="We'll get back to you within 24 hours"
      />
    </section>
  );
};

export default AudioSection; 