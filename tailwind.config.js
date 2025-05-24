/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-yellow-400',
    'text-green-400',
    'text-pink-400',
    'bg-gray-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-red-500',
  ],
  theme: {
    extend: {
      fontFamily: {
        spooky: ['"Creepster"', 'cursive'],
      },
    },
  },
  plugins: [],
};
