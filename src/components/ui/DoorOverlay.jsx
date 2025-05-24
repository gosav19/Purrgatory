'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import doorImage from '@/public/door-to-hell.png'; // placeholder for your door art
import './door.css';

export default function DoorOverlay({ onEnter }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    document.getElementById('door-overlay').classList.add('fade-out');
    setTimeout(() => {
      setIsVisible(false);
      onEnter(); // callback to handle logic if needed
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div id="door-overlay" className="door-overlay">
      <div className="door-container" onClick={handleClick}>
        <Image src={doorImage} alt="Door to Hell" fill className="door-image" />
        <p className="door-text">Enter... if you dare</p>
      </div>
      <div className="ghostly-animations"></div>
    </div>
  );
}
