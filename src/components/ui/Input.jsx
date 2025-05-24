// src/components/ui/input.jsx

import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input" // you can style it here
    />
  );
};

export default Input;
