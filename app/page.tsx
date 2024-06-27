"use client";

import React, { useEffect, useState } from 'react';

const ParallaxDesign = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-center" style={{
        background: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}>
        <div className="text-white text-4xl font-bold">
          <img src="/layer5_logo.png" alt="JCL Logo" className="h-14" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </nav>

      {/* Main background */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/layer1.png')",
          zIndex: '-3',
        
        }}
      />

      {/* Clouds */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/layer2_clouds.png')",
          zIndex: '-2',
          transform: `translateY(${-offset * 0.2}px)`,
        }}
      />

      {/* Header content */}
      <header className="relative z-10 flex flex-col items-center justify-center" style={{ height: '100vh', paddingTop: '150px' }}>
        {/* Logo */}
        <img src="/layer5_logo.png" alt="JCL Logo" className="w-1/2" />
      </header>

      {/* Buildings */}
      <div className="relative" style={{ marginTop: '100vh', height: '100vh', zIndex: '0' }}>
        <img 
          src="/layer3_building.png" 
          alt="Buildings 1" 
          className="absolute bottom-0 left-0 w-full"
          style={{
            transform: `translateY(${-offset * 0.3}px)`,
            zIndex: '1',
          }}
        />
        <img 
          src="/layer4_front.png" 
          alt="Buildings 2" 
          className="absolute bottom-0 left-0 w-full"
          style={{
            transform: `translateY(${-offset * 0.5}px)`,
            zIndex: '2',
          }}
        />
      </div>

      {/* Scrollable content */}
      <main className="relative z-20 bg-transparent" style={{ marginTop: '0' }}>
        <section className="min-h-screen p-8">
          <h2 className="text-3xl font-bold mb-4">Section 1</h2>
          <p>Your content here...</p>
        </section>
        <section className="min-h-screen p-8 bg-transparent">
          <h2 className="text-3xl font-bold mb-4">Section 2</h2>
          <p>More content here...</p>
        </section>
        <section className="min-h-screen p-8 bg-transparent">
          <h2 className="text-3xl font-bold mb-4">Section 3</h2>
          <p>Even more content here...</p>
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default ParallaxDesign;
