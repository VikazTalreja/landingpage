"use client";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-1";
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
import { useState } from "react";

export default function FeaturesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Features",
      link: "#"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <div className="relative">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="relative z-50 flex gap-2">
              <NavbarButton variant="secondary">Login</NavbarButton>
              <NavbarButton>Sign Up</NavbarButton>
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
                  Login
                </NavbarButton>
                <NavbarButton className="w-full">
                  Sign Up
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      
      {/* Page Header */}
      <div className="w-full pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-white">
            Our Features
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-400">
            Discover all the powerful tools we offer to help you succeed
          </p>
        </div>
      </div>
      
      {/* Features Section */}
      <FeaturesSectionDemo />
    </main>
  );
} 