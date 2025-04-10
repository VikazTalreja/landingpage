"use client"
import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ParticleButton } from "@/components/ParticleButton";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-1";
// import { MainAnimation } from "@/components/MainAnimation";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle, 
  MobileNavMenu,
  NavbarButton
} from "@/components/ui/resizable-navbar";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    {
      name: "Problems",
      link: "#problems"
    },
    {
      name: "Our Agents",
      link: "#agents"
    },
    {
      name: "Teams",
      link: "#teams"
    },
    {
      name: "About us",
      link: "#about"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-700 to-purple-900">
      {/* The Hero component serves as the background */}
      <div className="absolute inset-0 z-0">
        <Hero />
      </div>
      
      {/* Navigation is positioned on top */}
      <div className="relative">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="relative z-50 flex gap-2">
              <NavbarButton variant="secondary">Schedule Demo</NavbarButton>
            </div>
          </NavBody>
          
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle 
                isOpen={mobileMenuOpen} 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              />
            </MobileNavHeader>
            
            <MobileNavMenu 
              isOpen={mobileMenuOpen} 
              onClose={() => setMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full rounded-lg px-4 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 flex w-full flex-col gap-2">
                <NavbarButton variant="secondary" className="w-full">
                  Schedule Demo
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      
      {/* Hero content section */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center text-white">
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
          Regulatory AI Agents
          <br />
          <span className="font-playfair italic">for Lifescience</span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-xl">
          Entvin AI is an intelligent agent platform which streamline FDA compliance for 
          regulatory, medical affairs and commercial teams.
        </p>
        
        <div className="mt-12">
          <ParticleButton>
            Get Started
          </ParticleButton>
        </div>
        
        <p className="mt-16 text-lg">
          Trusted by regulatory and pharma professionals
          <br />
          from world's leading organisations
        </p>
      </div>

      {/* Main Animation Section */}
      {/* <div className="relative z-30 w-full">
        <MainAnimation />
      </div> */}

      {/* Features Section */}
      <div className="relative z-30 bg-black w-full">
        <FeaturesSectionDemo />
      </div>
      
      <div className="relative z-30 bg-purple-600 w-full">
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};