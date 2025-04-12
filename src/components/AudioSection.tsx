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
    <div className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="layout517_card bg-black/80 backdrop-blur-lg rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Listen to Julian</h2>
            </div>
            <div className="mb-8">
              <p className="text-lg text-white/80">
                Julian delivers delightful and personalized conversations. Always available, endlessly patient, and able to reason, predict, and act in real-time.
              </p>
            </div>
            <div className="audio-container bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:bg-zinc-800/80 transition-all duration-300 group">
              <div className="audio-item flex items-center">
                <div className="music-embed">
                  {isClient && (
                    <audio 
                      ref={audioRef} 
                      src="https://files.tryflowdrive.com/261/file-4e8032b7-1c19-4365-990c-c7742a420b4e_11x-demo.mp3" 
                      className="audio-file hidden"
                      onEnded={() => setIsPlaying(false)}
                    />
                  )}
                </div>
                <div 
                  onClick={togglePlay} 
                  className={`audio-button w-14 h-14 ${isPlaying ? 'bg-white' : 'bg-zinc-800'} hover:bg-white rounded-full flex items-center justify-center cursor-pointer mr-6 shadow-lg transition-all duration-200 hover:scale-105 z-10`}
                >
                  <img 
                    loading="lazy" 
                    alt={isPlaying ? "Pause" : "Play"} 
                    src={isPlaying ? "/pause-icon.svg" : "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/6730f000506a3fff2c76fa06_play-icon.svg"} 
                    className={`audio-button-img w-6 h-6 ${isPlaying ? 'invert' : ''}`}
                  />
                </div>
                <div className="audio-visual relative flex flex-1 h-20 items-center space-x-[1px] overflow-hidden">
                  {/* Glow effect behind waveform */}
                  {isPlaying && (
                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full transform scale-75 transition-all duration-1000 animate-pulse"></div>
                  )}
                  
                  {isClient && Array.from({ length: 100 }, (_, i) => {
                    // Create a more natural waveform distribution
                    // Bars in the middle will be taller than the ones at the edges
                    const position = Math.abs((i / 50) - 1); // 0 at middle, 1 at edges
                    const baseHeight = Math.max(0.2, 1 - position * 1.2);
                    
                    // Add some randomness to make it look more natural
                    const randomness = Math.random() * 0.3 - 0.15;
                    const height = Math.min(1, Math.max(0.15, baseHeight + randomness));
                    
                    // Normalize to percentage height
                    const heightPercentage = `${height * 100}%`;
                    
                    // Random delay for animation
                    const randomDelay = Math.floor(Math.random() * 1000);
                    
                    // Different opacity based on position for a more dynamic look in B&W
                    const isMiddle = position < 0.5;
                    const opacityValue = isMiddle ? 0.9 : 0.6;
                    
                    return (
                      <div 
                        key={i} 
                        className="audio-wire w-1 bg-white rounded-full transition-all duration-300" 
                        style={{ 
                          height: isPlaying ? heightPercentage : '10%',
                          transform: isPlaying ? 'scaleY(1)' : 'scaleY(0.7)',
                          opacity: isPlaying ? opacityValue : 0.4,
                          transition: `transform 0.5s ease-in-out, height 0.5s ease-in-out ${randomDelay}ms`,
                          animation: isPlaying ? `audioWave 1.5s ease-in-out ${randomDelay}ms infinite alternate` : 'none'
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="button-group">
                <a 
                  href="/demo" 
                  className="button inline-block bg-white hover:bg-zinc-200 text-black font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add keyframe animation for the wave effect */}
      <style jsx global>{`
        @keyframes audioWave {
          0% {
            transform: scaleY(0.8);
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AudioSection; 