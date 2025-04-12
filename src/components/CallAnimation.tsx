"use client"
import { IconPhone } from '@tabler/icons-react';
import React from 'react';

const CallAnimation = () => {
  return (
    <main className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black mb-6">
            Meet our digital workers
          </h2>
          <p className="text-gray-600 max-w-[600px] mx-auto text-base mb-8">
            Our digital workers don't just automate tasks – they transform your business. With 24/7 
            operations, multilingual capabilities, and human-like intelligence, they're revolutionizing 
            how work gets done.
          </p>
          <button className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full">
            Get Started
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Alice Card */}
          <div>
            {/* Image Container */}
            <div className="rounded-2xl overflow-hidden bg-[#E8E1D8] p-3 mb-6">
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
          <h5 className="text-white text-xl font-bold">Julian the Phone Agent</h5>
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
            {/* Content */}
            <div>
              <h3 className="text-lg font-medium mb-1">
              Mahira <span className="text-gray-400">– Hiring Copilot</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
              Meet Mahira – your AI-powered soft skills expert who calls, converses, and uncovers potential—so your HR doesn’t have to.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-black hover:opacity-70">
                Hire Mahira
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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