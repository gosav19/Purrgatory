'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ClickableMap() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Image
        src="/images/whiskerhaven-map.png"
        alt="Whiskerhaven Map"
        width={1152}
        height={768}
        priority
      />

      {/* Define absolute links */}
      <Link href="/undead" className="absolute left-[10%] top-[20%] w-[10%] h-[15%]" />
      <Link href="/abyssal" className="absolute left-[10%] bottom-[20%] w-[15%] h-[20%]" />
      <Link href="/living" className="absolute bottom-[5%] left-[42%] w-[15%] h-[15%]" />
      <Link href="/whiskerhaven" className="absolute top-[38%] left-[40%] w-[18%] h-[18%]" />
      <Link href="/celestials" className="absolute top-[5%] right-[20%] w-[15%] h-[20%]" />
      <Link href="/infernals" className="absolute bottom-[10%] right-[10%] w-[15%] h-[20%]" />
    </div>
  );
}
