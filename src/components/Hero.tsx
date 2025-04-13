'use client';

import { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);

  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/OutBg2.png)',
          height: '100vh',
          width: '100vw'
        }}
      ></div>

      {/* Black overlay */}
      {/* <div className="absolute inset-0 z-5 bg-black opacity-10"></div> */}

      {/* Particles overlay */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detect_on: "canvas",
              events: {
                onclick: { enable: false, mode: "push" },
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                push: { particles_nb: 4 },
                repulse: { distance: 200, duration: 0.4 }
              }
            },
            particles: {
              number: {
                value: 10, // Start with no particles, emitters will create them
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
              },
              opacity: {
                value: 0.4,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                random: true,
                straight: false,
                out_mode: "destroy",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              life: {
                duration: {
                  value: 5,
                  sync: false
                },
                count: 10
              }
            },
            retina_detect: true,
            emitters: [ // Make it an array of emitters so we can control each
              {
                direction: "auto",
                life: {
                  count: 0,
                  duration: 0.1,
                  delay: 0.1
                },
                rate: {
                  delay: 0.5,
                  quantity: 10
                },
                shape: "square",
                position: {
                  x: 0,
                  y: 0
                },
                size: {
                  width: 50,
                  height: 100
                },
                particles: {
                  move: {
                    speed: 0.6,
                    direction: "bottom-right",
                    outModes: {
                      default: "destroy"
                    }
                  },
                  life: {
                    duration: {
                      value: 5,
                      sync: false
                    },
                    count: 1
                  }
                }
              },
              {
                direction: "auto",
                life: {
                  count: 0,
                  duration: 0.1,
                  delay: 0.1
                },
                rate: {
                  delay: 0.5,
                  quantity: 10
                },
                shape: "square",
                position: {
                  x: 100,
                  y: 0
                },
                size: {
                  width: 50,
                  height: 100
                },
                particles: {
                  move: {
                    speed: 0.6,
                    direction: "bottom-left",
                    outModes: {
                      default: "destroy"
                    }
                  },
                  life: {
                    duration: {
                      value: 5,
                      sync: false
                    },
                    count: 1
                  }
                }
              }
            ]
          }}
          className="w-full h-full"
        />
      </div>

</div>
  );
}