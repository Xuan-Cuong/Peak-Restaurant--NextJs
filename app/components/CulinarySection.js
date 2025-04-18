"use client";
import Image from 'next/image';
import ClientScrollReveal from './ClientScrollReveal';
import Button from './Button';

export default function CulinarySection() {
  const culinaryImageUrl = "https://www.peaknyc.com/wp-content/uploads/2024/07/peak-196-1-scaled-e1722368096267.jpg";

  return (
    <section id="culinary" className="content-section bg-surface overflow-hidden"> {/* Added overflow-hidden for image reveal */}
      <div className="container mx-auto px-4">
        <div className="culinary-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <ClientScrollReveal tag="div" className="culinary-image relative aspect-video md:aspect-auto md:h-full">
  {/* Using Next/Image for local or external image */}
  <Image
    src={culinaryImageUrl}
    alt="Table setting with various dishes including oysters and bread"
    width={600} // same as the second image
    height={400}
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    className="rounded-lg shadow-lg"
  />
</ClientScrollReveal>


          {/* Text Column */}
          <ClientScrollReveal tag="div" className="culinary-text text-center md:text-left" delay={0.2}>
            <h3 className="text-3xl lg:text-4xl font-serif mb-6 text-primary">A Taste of Elevation</h3>
            <p className="text-lg text-text-muted mb-8">
              Our menus feature seasonally inspired Modern American dishes, crafted with locally sourced ingredients and presented with artistic flair. Complement your meal with our curated selection of fine wines and innovative cocktails.
            </p>
            <Button href="https://www.peaknyc.com/menus/" variant="secondary" aria-label="View Our Menus">
              View Menus
            </Button>
          </ClientScrollReveal>
        </div>
      </div>
    </section>
  );
}