import React, { useEffect } from 'react';
import './Door.css';

const Door = ({ onEnter }) => {
  useEffect(() => {
    // Lock scroll and prevent resizing
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';

    return () => {
      // Clean up scroll locks when door is removed
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <div className="door-container">
      <img 
        src="/images/poarta.png" 
        alt="Purgatory Door" 
        className="door-image"
      />
      <div 
        className="door-clickable-area"
        onClick={onEnter}
        title="Enter the Purgatory"
      />
    </div>
  );
};

export default Door;
