"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxDesign = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const cloudsY = useTransform(scrollY, [0, 1000], [0, -50]);
  const buildingsY = useTransform(scrollY, [0, 1000], [0, -100]);
  const frontBuildingsY = useTransform(scrollY, [0, 1000], [0, -150]);

  const partners = [
    {name: "test1", logo: "/JCL_logo.png"},
    {name: "test1", logo: "/JCL_logo.png"},
    {name: "test1", logo: "/JCL_logo.png"},
    {name: "test1", logo: "/JCL_logo.png"},
  ]

  return (
    <div className="relative font-sans">
      {/* Container for parallax effect */}
      <div className="relative h-[200vh] overflow-hidden -mb-[149px]">
        {/* Fixed blue sky background */}
        <div className="absolute inset-0 bg-blue-400 z-[-10]"></div>

        {/* Clouds */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-[-9]"
          style={{
            backgroundImage: "url('/layer2_clouds.png')",
            y: cloudsY,
          }}
        />

        {/* Buildings */}
        <div className="absolute inset-0 bottom-0 h-full">
          <motion.img 
            src="/layer3_building.png" 
            alt="Buildings 1" 
            className="absolute bottom-0 left-0 w-full h-full object-bottom object-cover"
            style={{ y: buildingsY }}
          />
          <motion.img 
            src="/layer4_front.png" 
            alt="Buildings 2" 
            className="absolute bottom-0 left-0 w-full h-full object-bottom object-cover"
            style={{ y: frontBuildingsY }}
          />
        </div>

        {/* Header content */}
        <header className="relative z-10 flex flex-col items-center justify-center h-screen">
          <motion.img 
            src="/layer5_logo.png" 
            alt="JCL Logo" 
            className="h-full w-full md:w-1/3 mt-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
       
        </header>
      </div>

{/* Navbar */}
<nav className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center bg-black bg-opacity-50 backdrop-blur-md h-20"> {/* Increased height */}
  <div className="relative flex items-center justify-center h-full w-64 pl-2"> {/* Added padding for alignment */}
    <img 
      src="/JCL_logo.png" 
      alt="JCL Logo"
      style={{ maxHeight: '90%', maxWidth: 'none', height: 'auto' }} // Adjusted for larger logo
    />
  </div>

  <div className="hidden md:flex space-x-6 items-center justify-center">
    <a href="#" className="text-white hover:text-blue-300 transition duration-300">Home</a>
    <a href="#" className="text-white hover:text-blue-300 transition duration-300">About</a>
    <a href="#contact" className="text-white hover:text-blue-300 transition duration-300">Contact</a>
  </div>
  <a href='https://docs.google.com/forms/d/e/1FAIpQLSetPqgC-_qflmIUOjlFBeTOmcZfKAC9jExvuq8DIEuKQJCBRQ/viewform?usp=sf_link' target='_blank' className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 mr-2">
    Register
  </a>
  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white mr-2">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>
</nav>






      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8">
          <a href="#" className="text-white text-2xl hover:text-blue-300 transition duration-300">Home</a>
          <a href="#" className="text-white text-2xl hover:text-blue-300 transition duration-300">About</a>
          <a href="#" className="text-white text-2xl hover:text-blue-300 transition duration-300">Services</a>
          <a href="#" className="text-white text-2xl hover:text-blue-300 transition duration-300">Contact</a>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSetPqgC-_qflmIUOjlFBeTOmcZfKAC9jExvuq8DIEuKQJCBRQ/viewform?usp=sf_link' target='_blank' className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 mr-2">
    Register
  </a>
          <button onClick={() => setIsMenuOpen(false)} className="text-white mt-8">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Scrollable content */}
      <main className="relative z-20 bg-white">
      <section className="py-20 px-8">
  <h2 className="text-4xl font-bold mb-8 text-center">What is JCL?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <motion.div 
      className="bg-gray-100 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Team Building</h3>
      <p>
        JCL fosters a strong sense of community and collaboration through various team-building activities.
        We believe that teamwork is the cornerstone of any successful organization, and we provide ample 
        opportunities for our members to connect, grow, and succeed together.
      </p>
    </motion.div>
    
    <motion.div 
      className="bg-gray-100 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Exposure</h3>
      <p>
        At JCL, we offer unparalleled exposure to industry leaders and experts. 
        Our events, workshops, and networking opportunities are designed to provide 
        valuable insights and connections that can help advance your career and personal growth.
      </p>
    </motion.div>
    
    <motion.div 
      className="bg-gray-100 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Contribute to Charity</h3>
      <p>
        Giving back to the community is a core value at JCL. We organize and participate 
        in various charitable events and initiatives aimed at making a positive impact on society. 
        Join us in our mission to support those in need and create a better world for everyone.
      </p>
    </motion.div>
  </div>

  <div className="text-center mt-12">
    <motion.a 
      href='https://docs.google.com/forms/d/e/1FAIpQLSetPqgC-_qflmIUOjlFBeTOmcZfKAC9jExvuq8DIEuKQJCBRQ/viewform?usp=sf_link'
      target='_blank'
      className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Register Now
    </motion.a>
  </div>
</section>

<section className="py-20 px-8 bg-gray-800 text-white">
    <h2 className="text-4xl font-bold mb-8 text-center">Our Partners</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      { /* Assuming each logo is an object with properties for the image source and alt text */ }
      {partners.map((partner, index) => (
        <motion.div 
          key={partner.name}
          className="p-6 flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={partner.logo} alt={partner.name} className="max-h-12 md:max-h-20"/>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-12">
      <motion.button 
        className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Learn More About Our Partners
      </motion.button>
    </div>
  </section>


<section className="py-20 px-8 bg-blue-500 text-white">
  <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {['Expertise', 'Innovation', 'Reliability', 'Support'].map((reason, index) => (
      <motion.div 
        key={index}
        className="bg-blue-600 p-6 rounded-lg"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4">{reason}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </motion.div>
    ))}
  </div>

  <div className="text-center mt-12">
    <motion.a 
      href='https://docs.google.com/forms/d/e/1FAIpQLSetPqgC-_qflmIUOjlFBeTOmcZfKAC9jExvuq8DIEuKQJCBRQ/viewform?usp=sf_link'
      target='_blank'
      className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Register Now
    </motion.a>
  </div>
</section>
        <section id='contact' className="py-20 px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
            <textarea placeholder="Message" className="w-full mb-4 p-2 border rounded" rows={4}></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 w-full">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-8 text-center">
        <p>&copy; Jönköping Corporate League. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ParallaxDesign;
