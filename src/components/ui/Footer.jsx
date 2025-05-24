'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/button'; // Assuming default export
import Input from '@/components/ui/input'; // Assuming default export
import { Twitter, Instagram, Github } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa'; // Correct import

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black/70 backdrop-blur-sm border-t border-purple-800/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Purrgatory</h3>
            <p className="text-gray-400 mb-4">
              A collection of 250 uniquely mischievous cats exploring the afterlife in style.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/PurrgatoryNFT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaDiscord size={20} /> {/* Correctly using FaDiscord */}
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/mint" className="text-gray-400 hover:text-white transition-colors">Mint</a></li>
              <li><a href="/roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on drops and exclusive content.
            </p>
            {subscribed ? (
              <p className="text-green-400">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-purple-900/50 border-purple-800 focus:border-purple-600"
                />
                <Button type="submit" className="bg-purple-700 hover:bg-purple-800">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-800/30 text-center text-gray-400">
          <p>© 2025 Purrgatory NFT Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


