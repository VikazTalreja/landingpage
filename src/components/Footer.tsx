import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[url('/OutBg.avif')] bg-cover bg-center text-white py-20">
   <div className="max-w-7xl mx-auto px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section (Workers + Quicklinks) */}
          <div className="lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6 ">
              {/* Logo */}
              <div className="bg-[#8b5cf6]/30 p-8 rounded-3xl backdrop-blur-sm">
                <Link href="/" className="block">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold">Meresu</span>
                  </div>
                </Link>
              </div>
              
              {/* Workers */}
              <div className="bg-[#8b5cf6]/30 p-8 rounded-3xl backdrop-blur-sm">
                <h2 className="text-lg font-semibold mb-4">Workers</h2>
                <ul className="space-y-4">
                  <li><Link href="/worker/alice" className="hover:text-blue-300">Mahira</Link></li>
                 </ul>
              </div>
            </div>
            
            {/* Quicklinks */}
            <div className="h-full">
              <div className="bg-[#8b5cf6]/30 p-8 rounded-3xl h-fit backdrop-blur-sm">
                <h2 className="text-lg font-semibold mb-4">Quicklinks</h2>
                <ul className="space-y-4">
                  <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
                  <li><Link href="/about-us" className="hover:text-blue-300">Company</Link></li>
                  <li><Link href="/become-a-partner" className="hover:text-blue-300">Partners</Link></li>
                  <li><Link href="/blog" className="hover:text-blue-300">Blog</Link></li>
                  <li><Link href="/security" className="hover:text-blue-300">Security</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-4 gap-6">
             
              {/* UK Address */}
              <div className="col-span-2 bg-[#8b5cf6]/30 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded-full bg-black bg-opacity-30 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 22 22" fill="none">
                      <path d="M10.7143 5C9.46445 5.00142 8.26616 5.49856 7.38236 6.38236C6.49856 7.26616 6.00142 8.46445 6 9.71433C6 13.7483 10.2858 16.7949 10.4684 16.9224C10.5405 16.9729 10.6263 17 10.7143 17C10.8023 17 10.8882 16.9729 10.9602 16.9224C11.1429 16.7949 15.4287 13.7483 15.4287 9.71433C15.4272 8.46445 14.9301 7.26616 14.0463 6.38236C13.1625 5.49856 11.9642 5.00142 10.7143 5ZM10.7143 8.00003C11.0534 8.00003 11.3848 8.10057 11.6667 8.28894C11.9487 8.47731 12.1684 8.74505 12.2981 9.0583C12.4279 9.37155 12.4618 9.71623 12.3957 10.0488C12.3295 10.3813 12.1663 10.6868 11.9265 10.9265C11.6868 11.1663 11.3813 11.3295 11.0488 11.3957C10.7162 11.4618 10.3715 11.4279 10.0583 11.2981C9.74505 11.1684 9.47731 10.9487 9.28894 10.6667C9.10057 10.3848 9.00003 10.0534 9.00003 9.71433C9.00003 9.25967 9.18064 8.82363 9.50214 8.50214C9.82363 8.18064 10.2597 8.00003 10.7143 8.00003Z" fill="white" />
                    </svg>
                  </div>
                  <span className="font-medium">India</span>
                </div>
                <p className="text-sm pl-9">Jacob Circle, Mahalaxmi, Mumbai, 400011</p>
              </div>
              
              {/* Legal Links */}
              <div className="col-span-2 bg-[#8b5cf6]/30 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex flex-col space-y-4">
                  <Link href="/legal/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link>
                  <Link href="/legal/terms" className="hover:text-blue-300">Terms & Conditions</Link>
                  <Link href="/legal/website-tracking-privacy-policy" className="hover:text-blue-300 text-sm">Website Tracking Policy</Link>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="col-span-2 bg-[#8b5cf6]/30 p-8 rounded-3xl flex items-center space-x-6 backdrop-blur-sm">
                <a href="https://www.linkedin.com/company/meresu/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 33" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 4.82373C4.89543 4.82373 4 5.71916 4 6.82373V26.8237C4 27.9283 4.89543 28.8237 6 28.8237H26C27.1045 28.8237 28 27.9283 28 26.8237V6.82373C28 5.71916 27.1045 4.82373 26 4.82373H6ZM11.361 10.1607C11.3685 11.4357 10.4141 12.2213 9.28164 12.2157C8.21476 12.2101 7.28476 11.3607 7.29039 10.1626C7.29601 9.03569 8.18664 8.13006 9.34352 8.15632C10.5173 8.18257 11.3685 9.0432 11.361 10.1607ZM16.3729 13.8394H13.0129H13.0111V25.2525H16.5623V24.9863C16.5623 24.4797 16.5619 23.9731 16.5615 23.4663C16.5604 22.1145 16.5592 20.7613 16.5661 19.41C16.568 19.0819 16.5829 18.7407 16.6673 18.4275C16.9841 17.2575 18.0361 16.5019 19.2099 16.6876C19.9636 16.8056 20.4623 17.2425 20.6723 17.9532C20.8017 18.3975 20.8599 18.8756 20.8655 19.3388C20.8807 20.7356 20.8785 22.1324 20.8764 23.5293C20.8756 24.0224 20.8748 24.5157 20.8748 25.0088V25.2507H24.4373V24.9769C24.4373 24.3743 24.4371 23.7717 24.4367 23.1692C24.436 21.6632 24.4352 20.1572 24.4392 18.6507C24.4411 17.97 24.368 17.2988 24.2011 16.6407C23.9517 15.6619 23.4361 14.8519 22.598 14.2669C22.0036 13.8507 21.3511 13.5825 20.6217 13.5525C20.5387 13.5491 20.4549 13.5446 20.3708 13.54C19.9979 13.5199 19.6188 13.4994 19.2623 13.5713C18.2423 13.7757 17.3461 14.2425 16.6692 15.0656C16.5905 15.16 16.5136 15.2559 16.3988 15.3989L16.3729 15.4313V13.8394ZM7.57552 25.2563H11.1099V13.8468H7.57552V25.2563Z" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://x.com/Meresu_India" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 33" fill="none">
                    <path d="M22.9015 6.15674H26.5816L18.5415 15.1933L28 27.4901H20.5941L14.7935 20.0322L8.15631 27.4901H4.47392L13.0736 17.8245L4 6.15674H11.5939L16.8372 12.9736L22.9015 6.15674ZM21.6097 25.3239H23.6491L10.4859 8.20911H8.2976L21.6097 25.3239Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
              <div className="mt-6 text-base text-center whitespace-nowrap lg:text-left">
              © All rights reserved 2025 11x AI Inc.
              </div>
              {/* Certification */}
             
            </div>
            
            {/* Copyright */}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 