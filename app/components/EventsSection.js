"use client";
import Image from 'next/image';
import ClientScrollReveal from './ClientScrollReveal';
import Button from './Button';

export default function EventsSection() {
  const eventImageUrl = "/images/4.png"; // Assuming local image

  return (
    <section id="events" className="content-section bg-background overflow-hidden"> {/* Alternate background and overflow */}
      <div className="container mx-auto px-4">
        <div className="events-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Column (Order changed on mobile) */}
          <ClientScrollReveal tag="div" className="events-text text-center md:text-left order-2 md:order-1" delay={0.2}>
            <h3 className="text-3xl lg:text-4xl font-serif mb-6 text-primary">Host Your Event Above the Clouds</h3>
            <p className="text-lg text-text-muted mb-8">
              From intimate gatherings to grand celebrations, Peak offers versatile spaces and bespoke services to create truly unforgettable private events against the backdrop of the Manhattan skyline.
            </p>
            <Button href="https://www.peaknyc.com/private-events/" variant="outline" aria-label="Inquire About Events">
              Inquire About Events
            </Button>
          </ClientScrollReveal>

          {/* Image Column (Order changed on mobile) */}
          <ClientScrollReveal tag="div" className="events-image relative aspect-video md:aspect-auto md:h-full order-1 md:order-2">
             {/* Using Next/Image for local image */}
             <Image
                src={eventImageUrl}
                alt="Elegant event space setup with city view"
                width={600} // Provide appropriate width
                height={400} // Provide appropriate height
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ensure cover
                className="rounded-lg shadow-lg"
             />
          </ClientScrollReveal>
        </div>
      </div>
    </section>
  );
}