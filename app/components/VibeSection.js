"use client";
import ClientScrollReveal from './ClientScrollReveal';
import Button from './Button';

export default function VibeSection() {
  return (
    <section id="vibe" className="content-section bg-background"> {/* Alternate background color */}
      <div className="container mx-auto px-4">
        <ClientScrollReveal tag="div" className="section-header max-w-4xl"> {/* Wider max-width */}
          <h2 className="text-primary">Discover Peak With Priceless</h2>
          <p className="lead">
            Peak with Priceless is a stunning restaurant, bar, and event space located on the 101st floor of 30 Hudson Yards. Managed by Rhubarb Hospitality Collection (RHC), Peak with Priceless is
            a modern American destination, offering a blend of stunning views of New York City, elevated menus, a vibrant atmosphere, and warm hospitality.
          </p>
          <p className="lead mb-8"> {/* Added margin bottom */}
            Positioned at the summit of the 1,296-foot tall tower, Peak with Priceless sits one level above Edge, the highest observation deck in the Western Hemisphere.
          </p>
          {/* Using the Button component for consistency */}
          <Button href="https://www.peaknyc.com/peakaboo/" variant="primary" className="mt-4">
            Explore Peakaboo Nights
          </Button>
        </ClientScrollReveal>
      </div>
    </section>
  );
}