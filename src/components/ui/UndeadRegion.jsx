'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MapPage() {
  const router = useRouter();

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Background map image */}
      <Image
        src="/images/whiskerhaven-map2.png"
        alt="Whiskerhaven Map"
        width={1536}
        height={1024}
        className="w-full h-auto"
      />

      {/* Clickable SVG on top */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-10 -10 20 20"
  className="absolute left-[4.8%] top-[8.4%] w-[26.2%] h-[33%] pointer-events-auto z-10"
>
  <a href="/undead">
    <path
      d="M 0 0 L -3 2 L -1 5 H 3 L 5 1 L 3 0 Z"
      fill="transparent"
      stroke="white"
      strokeWidth="0.4"
      className="cursor-pointer hover:fill-green-500 hover:opacity-40 transition-all duration-200"
    />
  </a>
</svg>


    </div>
  );
}


