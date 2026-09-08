import BrandContactDetails from '@/components/BrandContactDetails';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageSquare, MapPin, Instagram } from 'lucide-react';

const socialIconClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#397F86]/60 text-[#F7F3E8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#397F86] hover:bg-[#397F86] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#123E52]';

const Footer = () => {
  return (
    <footer className="bg-[#123E52] text-[#F7F3E8]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/mainlogo.svg"
                alt="RoxanneJoiner Logo"
                width={160}
                height={44}
                className="h-auto w-36 sm:w-40 text-white"
              />
            </Link>
            <p className="mb-4 text-[#F7F3E8]/90 text-sm leading-relaxed">
              RoxanneJoiner is a kayak business and brand inspired by life on the water. Discover kayaks and paddling essentials for your next adventure.
            </p>
            <BrandContactDetails />
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com/roxannejoiner.shop/" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@roxannejoiner.shop" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="TikTok">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.48 3.23-1.4 4.54-1.14 1.62-2.88 2.65-4.8 3.03-1.93.39-3.95.2-5.71-.62-2.31-1.09-3.95-3.23-4.47-5.71-.46-2.22-.09-4.57 1.09-6.52 1.25-2.07 3.39-3.5 5.76-3.97v4.18c-1.39.18-2.67.92-3.46 2.05-.72 1.03-.97 2.37-.64 3.59.34 1.25 1.2 2.32 2.34 2.87 1.2.58 2.62.63 3.86.15 1.18-.46 2.1-1.45 2.51-2.66.19-.57.25-1.18.25-1.78V.02h4.09z"/>
                </svg>
              </a>
              <a href="https://www.pinterest.com/roxannejoinershop/" target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Pinterest">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.929-7.252 4.163 0 7.398 2.967 7.398 6.923 0 4.136-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wide uppercase">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white hover:underline transition-colors duration-200">Home</Link></li>
              <li><Link href="/search" className="hover:text-white hover:underline transition-colors duration-200">Kayaks & Inventory</Link></li>
              <li><Link href="/#featured" className="hover:text-white hover:underline transition-colors duration-200">Featured Models</Link></li>
              <li><Link href="/track" className="hover:text-white hover:underline transition-colors duration-200">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:underline transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-4 tracking-wide uppercase">Policies & Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white hover:underline transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-white hover:underline transition-colors duration-200">About RoxanneJoiner</Link></li>
              <li><Link href="/frequently-asked-questions" className="hover:text-white hover:underline transition-colors duration-200">FAQs</Link></li>
              <li><Link href="/return-policy" className="hover:text-white hover:underline transition-colors duration-200">Refund & Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-white hover:underline transition-colors duration-200">Shipping & Delivery Policy</Link></li>
              <li><Link href="/local-pickup" className="hover:text-white hover:underline transition-colors duration-200">Local Pickup Guide</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:underline transition-colors duration-200">Customer Support</Link></li>
              <li><Link href="/cookies" className="hover:text-white hover:underline transition-colors duration-200">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center">
              <Image
                src="/secure-checkout.png"
                alt="Secure Checkout"
                width={400}
                height={64}
                className="h-16 w-auto max-w-full object-contain brightness-110 contrast-110"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-[#F7F3E8]/70">© {new Date().getFullYear()} RoxanneJoiner. All rights reserved. roxannejoiner.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
