"use client";
import React, { useState } from 'react';
import Image from 'next/image';

type TabData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageSrcSet: string;
}

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<string>("Tab 1");

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
      description: "Results arrive in clean, structured reports—highlighting traits, risks, growth areas, and role fit, ready for your team to review and act on.",
      imageSrc: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-500.webp 500w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-800.webp 800w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-1080.webp 1080w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-1600.webp 1600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-2000.webp 2000w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-2600.webp 2600w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04-p-3200.webp 3200w, https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/67d9696547049593d7d2d6ac_tab-04.webp 3360w"
    }
  ];

  return (
    <div className="bg-[#0a2532] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="tabs-wrapper bg-[#f5f1eb] p-10 rounded-3xl shadow-xl">
          {/* Header section */}
          <div className="layout406-tabs-heading-wrapper mb-10">
            <div className="layout406-tabs-heading-top text-center md:text-left">
              <div className="tag-wrapper mb-3">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">11x Platform</div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">From prospecting to closing: All-in-one</h3>
              <p className="text-lg text-gray-700 mb-6">Turn your prospects from MQLs to Closed Won.</p>
              <div className="button-group">
                <a href="/demo" className="button inline-block bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200">
                  Get started
                </a>
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
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default TabSection; 