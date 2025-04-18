import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import VibeSection from './components/VibeSection';
import CulinarySection from './components/CulinarySection';
import EventsSection from './components/EventsSection';
import NewsletterSection from './components/NewsletterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <VibeSection />
      <CulinarySection />
      <EventsSection />
      <NewsletterSection />
    </main>
  );
}