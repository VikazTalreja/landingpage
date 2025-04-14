"use client"
import { IconPhone } from '@tabler/icons-react';
import React, { useState } from 'react';
import { FormModal } from './form';

const CallAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-black mb-6">
          Meet Mahira
          </h2>
          <p className="text-gray-600 max-w-[600px] mx-auto text-base mb-8">
            Our digital workers don't just automate tasks – they transform your business. With 24/7 
            operations, multilingual capabilities, and human-like intelligence, they're revolutionizing 
            how work gets done.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="bg-black text-base md:text-xl text-white  font-medium px-5 md:px-10 py-3 md:py-4 rounded-full">
            Get Started
          </button>
          <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request a Consultation" 
        successMessage="Our team will contact you shortly!"
      />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Worker Card - Horizontal Layout */}
          <div className="flex flex-col md:flex-row gap-6 col-span-1 md:col-span-2">
            {/* Image Container */}
            <div className="rounded-2xl overflow-hidden bg-[#E8E1D8] p-3 flex-shrink-0 md:w-1/2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <video
                  src="/AiVideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Top Tags */}
                <div className="absolute top-3 left-3 flex flex-col justify-start items-center gap-2">
                  <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm">Mahira</span>
                  </div>
                  {/* <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm">Autopilot activated</span>
                  </div> */}
                </div>
                {/* Bottom Message UI */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-[#1C1C1E]/80 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3">
                   {/* <img 
          src="path_to_julian_image.jpg" // Replace with the actual image path
          alt="Julian the Phone Agent"
          className="w-16 h-16 rounded-full border-2 border-white"
        /> */}
        <div className="ml-4">
          <h5 className="text-gray-400 text-lg font-semibold">Incoming</h5>
          <h5 className="text-white text-xl font-bold">Mahira the AI HR Agent</h5>
       </div>
        <div className="ml-auto flex space-x-4">
          <button className="bg-red-600 rounded-full p-2 flex items-center justify-center">
            <IconPhone className="text-white rotate-[135deg]" />
          </button>
          <button className="bg-green-600 rounded-full p-2 flex items-center justify-center">
            <IconPhone className="text-white" />
          </button>
      </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content - Now on the right side */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h3 className="text-xl md:text-4xl text-black font-semibold mb-4">
                Mahira <span className="text-gray-400">– Hiring Copilot</span>
              </h3>
              <p className="text-gray-600 text-lg md:text-2xl mb-6">
                Meet Mahira – your AI-powered soft skills expert who calls, converses, and uncovers potential—so your HR doesn't have to.
              </p>
              
              <a href="#" className="inline-flex items-center text-lg font-medium text-black hover:opacity-70">
                Hire Mahira
                <svg className="ml-2 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CallAnimation; 