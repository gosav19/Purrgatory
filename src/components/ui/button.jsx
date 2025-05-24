// src/components/ui/button.js
import React from 'react';

const Button = ({ type, className, children }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button; // Default export
