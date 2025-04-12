"use client";
import React, { useState, useRef, useEffect } from 'react';

const AudioSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClient, setIsClient] = useState(false);

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
        <div className="bg-white rounded-[2rem] p-12 shadow-xl">
          <div className="max-w-3xl">
            <h2 className="text-[3.5rem] font-bold text-black mb-5">Listen to Julian</h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Julian delivers delightful and personalized conversations. Always available, 
              endlessly patient, and able to reason, predict, and act in real-time.
            </p>
            
            <div className="bg-[#f8f3ec] rounded-xl p-6 mb-10 relative">
              {isClient && (
                <audio 
                  ref={audioRef} 
                  src="https://files.tryflowdrive.com/261/file-4e8032b7-1c19-4365-990c-c7742a420b4e_11x-demo.mp3"
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              )}
              
              {/* Waveform visualization */}
              <div className="flex items-center h-16 gap-[1px]">
                {isClient && Array.from({ length: 100 }, (_, i) => {
                  // Create a pattern that follows the image's waveform pattern
                  const position = i / 100;
                  
                  // More realistic waveform pattern with multiple frequencies
                  const frequency1 = Math.sin(position * Math.PI * 20) * 0.3;
                  const frequency2 = Math.sin(position * Math.PI * 10) * 0.15;
                  const frequency3 = Math.sin(position * Math.PI * 5) * 0.1;
                  
                  // Combine frequencies with position-based dampening
                  const centerPos = Math.abs(position - 0.5) * 2; // 0 at center, 1 at edges
                  const positionDamp = Math.max(0, 1 - centerPos * 1.2);
                  const height = Math.max(0.15, (frequency1 + frequency2 + frequency3 + 0.5) * positionDamp);
                  
                  return (
                    <div 
                      key={i} 
                      className="flex-1 bg-[#e0c8a8] rounded-full"
                      style={{ 
                        height: `${height * 100}%`,
                        maxHeight: '100%',
                        minHeight: '15%'
                      }}
                    />
                  );
                })}
                
                {/* Play button positioned in the center of the waveform */}
                <button
                  onClick={togglePlay}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-16 h-16 bg-[#a98c64] rounded-full flex items-center justify-center 
                  hover:bg-[#8a7351] transition-colors shadow-lg z-10"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="w-7 h-7"
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
            
            <a href="/get-started" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection; 