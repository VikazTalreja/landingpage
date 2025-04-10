import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* USA Location */}
          <div>
            <div className="flex items-center mb-3">
              <Image 
                src="/vercel.svg" 
                alt="USA Flag" 
                width={20} 
                height={20}
                className="mr-2"
              />
              <h3 className="text-lg font-semibold">USA</h3>
            </div>
            <p className="text-sm mb-1">128 King St</p>
            <p className="text-sm mb-1">San Francisco, CA 94107</p>
            <p className="text-sm font-semibold">Mob: (415) 318-9192</p>
          </div>

          {/* India Location */}
          <div>
            <div className="flex items-center mb-3">
              <Image 
                src="/vercel.svg" 
                alt="India Flag" 
                width={20} 
                height={20}
                className="mr-2"
              />
              <h3 className="text-lg font-semibold">India</h3>
            </div>
            <p className="text-sm mb-1">Entvin Labs Pvt. Ltd. No 351 Salarpuria</p>
            <p className="text-sm mb-1">Towers-1, Hosur Road, Koramangala,</p>
            <p className="text-sm mb-1">Bengaluru, Karnataka, India- 560095</p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#problems" className="text-sm hover:text-purple-300">Problems</Link></li>
              <li><Link href="#agents" className="text-sm hover:text-purple-300">Our Agents</Link></li>
              <li><Link href="#teams" className="text-sm hover:text-purple-300">Teams</Link></li>
              <li><Link href="#about" className="text-sm hover:text-purple-300">About us</Link></li>
            </ul>
          </div>

          {/* Company & Connect Links */}
          <div className="grid grid-cols-1 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#terms" className="text-sm hover:text-purple-300">Terms & Conditions</Link></li>
                <li><Link href="#security" className="text-sm hover:text-purple-300">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect us</h3>
              <ul className="space-y-2">
                <li><Link href="https://linkedin.com" className="text-sm hover:text-purple-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  LinkedIn
                </Link></li>
                <li><Link href="mailto:founders@entvin.com" className="text-sm hover:text-purple-300">founders@entvin.com</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with Y Combinator and copyright */}
        <div className="mt-16 pt-8 border-t border-purple-800 flex flex-col items-center">
         
          <p className="text-sm">© Entvin, Inc. 2025 — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 