'use client';
import { useState } from 'react';
import Door from './Door';
import Navigation from './Navigation';
import Footer from './Footer';
import Web3Provider from './Web3Provider';

export default function DoorWrapper({ children }) {
  const [showDoor, setShowDoor] = useState(true);
  const [crackOpen, setCrackOpen] = useState(false);

  const handleEnter = () => {
    setCrackOpen(true);

    setTimeout(() => {
      // Reset scroll and height styles before rendering main content
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';

      window.scrollTo(0, 0);
      setShowDoor(false);
    }, 1500); // match your door crack animation duration
  };

  if (showDoor) {
    return <Door onEnter={handleEnter} crackOpen={crackOpen} />;
  }

  return (
    <Web3Provider>
      <Navigation />
      {children}
      <Footer />
    </Web3Provider>
  );
}
