import ClientScrollReveal from './ClientScrollReveal';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
export default function ExperienceSection() {
    const experiences = [
        {
            imgSrc: "/images/1.png", // Assume local image
            alt: "Restaurant view with city skyline",
            title: "The Restaurant",
            description: "An extraordinary sky-high restaurant inspired by its incredible views of New York City.",
            link: "https://www.peaknyc.com/restaurant-bars/",
            ariaLabel: "Learn more about the Restaurant",
            delay: 0
        },
        {
            imgSrc: "/images/2.png", // Assume local image
            alt: "Elegant dining room set for a private event",
            title: "The Bar & Lounge",
            description: "Late-night cocktail bar and lounge featuring live entertainment every Friday and Saturday",
            link: "https://www.peaknyc.com/peakaboo/",
            ariaLabel: "Explore Peakaboo",
            delay: 0.15
        },
        {
            imgSrc: "/images/3.png", // Assume local image
            alt: "Modern bar area at sunset",
            title: "Private Events",
            description: "The ultimate tower top event space in New York City",
            link: "https://www.peaknyc.com/private-events/",
            ariaLabel: "Discover Private Events",
            delay: 0.3
        }
    ];

    return (
        <section id="experience" className="content-section bg-surface">
            <div className="container mx-auto px-4">
                <ClientScrollReveal tag="div" className="section-header">
                    <h2 className="text-primary">The Peak Experience</h2>
                    <p className="lead">
                        Discover a collection of extraordinary sky-high spaces, blending stunning views with elevated menus and warm hospitality.
                    </p>
                </ClientScrollReveal>

                <div className="experience-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {experiences.map((exp) => (
                        <ClientScrollReveal key={exp.title} tag="div" className="experience-item text-center bg-background p-6 rounded-lg shadow-lg flex flex-col" delay={exp.delay}>
                            <div className="mb-5 overflow-hidden rounded flex-grow">
                               {/* Adjust margin-bottom to create equal spacing */}
                               <Image
                                   src={exp.imgSrc}
                                   alt={exp.alt}
                                   width={500}
                                   height={350}
                                   className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                               />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold mb-3 text-primary">{exp.title}</h3>
                                <p className="text-text-muted mb-5">{exp.description}</p>
                            </div>
                            <a
                               href={exp.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="cta-link text-primary font-semibold uppercase tracking-wider text-sm hover:text-primary-dark mt-auto"
                               aria-label={exp.ariaLabel}
                            >
                               Learn More →
                           </a>
                        </ClientScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
