"use client";
import Image from 'next/image';
import ClientScrollReveal from './ClientScrollReveal'; // Import component hiệu ứng

export default function HeroSection() {
  const heroImageUrl = 'https://www.peaknyc.com/wp-content/uploads/2022/01/AneeAtelier_RagoRafanelli2021HolidayParty-15-scaled.jpg';

  return (
    <section
      className="hero-section relative h-screen min-h-[600px] flex items-center justify-center text-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${heroImageUrl}')` }} // Inline style for background image
    >
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 bg-overlay z-0"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Use ClientScrollReveal for animations */}
        <ClientScrollReveal delay={0.1} className="hero-logo mb-8 max-w-[200px] md:max-w-[250px] mx-auto">
           {/* Logo - Ensure you have width/height or use 'fill' with positioning */}
           <img
             src="https://www.peaknyc.com/wp-content/themes/peak/library/images/peak-logo-white-2022.png"
             alt="Peak Logo"
             className="w-full h-auto" // Let the container control the size
           />
        </ClientScrollReveal>

        <ClientScrollReveal delay={0.3}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif uppercase tracking-tight leading-tight">
            Experience Dining<br />At New Heights
          </h1>
        </ClientScrollReveal>
      </div>
    </section>
  );
}