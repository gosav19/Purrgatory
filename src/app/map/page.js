'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MapPage() {
  const router = useRouter();

  return (
    <div className="relative w-full flex justify-center items-center bg-black py-10">
      <h1 className="absolute top-8 text-4xl text-white font-bold z-20">
        Explore Whiskerhaven
      </h1>

      {/* Map container */}
      <div className="relative" style={{ width: '1536px', height: '1024px' }}>
        {/* Background image */}
        <Image
          src="/images/whiskerhaven-map2.png"
          alt="Whiskerhaven Map"
          width={1536}
          height={1024}
          className="w-full h-auto"
        />

        {/* SVG Overlay matching image resolution */}
        <svg
          viewBox="0 0 1536 1024"
          className="absolute top-0 left-0 w-full h-full z-10"
        >
          {/* Adjust the polygon to wrap around the undead emblem (measured from image) */}
          <path
            d="M620,470 L600,510 L640,540 L700,510 L690,470 Z"
            fill="transparent"
            stroke="white"
            strokeWidth="4"
            className="cursor-pointer hover:fill-green-500 hover:opacity-30 transition-all duration-200"
            onClick={() => router.push('/factions/undead')}
            style={{ pointerEvents: 'auto' }}
            onMouseEnter={(e) => e.currentTarget.setAttribute('fill', 'rgba(0,255,0,0.2)')}
            onMouseLeave={(e) => e.currentTarget.setAttribute('fill', 'transparent')}
          />
        </svg>
      </div>
    </div>
  );
}
