"use client"

import React, { useEffect, useState } from 'react';

const ParallaxDesign = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-blue-500 p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <img src="/logo.png" alt="JCL Logo" className="h-8 inline-block mr-2" /> JCL
        </div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded">
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
        }}
      />

      {/* Buildings */}
      <div className="fixed inset-0 z-0">
        <img src="/layer3_building.png" alt="Buildings 1" className="w-full absolute bottom-0 left-0" style={{zIndex: '0'}} />
        <img src="/layer4_front.png" alt="Buildings 2" className="w-full absolute bottom-0 left-0" style={{zIndex: '1'}} />
      </div>

      {/* Header content */}
      <header className="relative z-10 flex flex-col items-center justify-center" style={{height: '180vh', paddingTop: '150px'}}>
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center">
          Jönköping Corporate League
        </h1>
      </header>

      {/* Scrollable content */}
      <main className="relative z-20 bg-transparent">
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
