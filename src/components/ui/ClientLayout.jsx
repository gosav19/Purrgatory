'use client';

import { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Door from '../Door';

export default function ClientLayout({ children }) {
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      {!showSite && <Door onEnter={() => setShowSite(true)} />}
      {showSite && (
        <>
          {/* Background */}
          <div
            className="fixed inset-0 -z-10 bg-cover bg-center opacity-80"
            style={{ backgroundImage: "url('/images/spooky-cats.jpg')" }}
          ></div>

          {/* Site content */}
          <Navigation />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
