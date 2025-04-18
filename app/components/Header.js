"use client"; // Needed for state (menu toggle) and effects (scroll)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image for optimization
import NavigationPopup from './NavigationPopup';
import Button from './Button'; // Import reusable button

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Prevent body scroll when nav is open
    document.body.style.overflow = !isNavOpen ? 'hidden' : '';
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = '';
  };

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page loads already scrolled
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Ensure body scroll is reset if component unmounts while nav is open
      document.body.style.overflow = '';
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Close nav on route change (useful if using Next/Link within the popup)
  // You might need to import `usePathname` from `next/navigation` if needed

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
          isScrolled ? 'bg-surface shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="header-content flex items-center justify-between h-20 md:h-24">
            {/* Left: Nav Toggle (Mobile) */}
            <div className="nav-toggle-container lg:hidden">
              <button
                aria-label="Toggle navigation"
                aria-expanded={isNavOpen}
                aria-controls="nav-popup"
                className="nav-toggle js-nav-trigger text-white p-2 -ml-2"
                onClick={toggleNav}
              >
                {/* Hamburger Icon */}
                <span className={`hamburger-icon ${isNavOpen ? 'active' : ''}`}>
                  <span className={isScrolled && !isNavOpen ? 'bg-text-heading' : 'bg-white'}></span>
                  <span className={isScrolled && !isNavOpen ? 'bg-text-heading' : 'bg-white'}></span>
                  <span className={isScrolled && !isNavOpen ? 'bg-text-heading' : 'bg-white'}></span>
                </span>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="logo-container flex-grow lg:flex-grow-0 text-center lg:text-left">
              <Link href="/" className="header-logo inline-block">
                {/* Use Next/Image if you have dimensions or use fill */}
                {/* Adjust src based on scroll/nav state if needed */}
                <img
                  src="https://www.peaknyc.com/wp-content/themes/peak/library/images/peak-logo-white-2022.png"
                  alt="Peak Logo"
                  className="h-8 md:h-10 w-auto" // Adjust height as needed
                  // width={150} // Required if not using fill
                  // height={40} // Required if not using fill
                />
              </Link>
            </div>

            {/* Right: Desktop Nav & Booking */}
            <div className="booking-container hidden lg:flex items-center space-x-8">
               {/* Desktop Navigation Links */}
               <nav className="hidden lg:block" aria-label="Main desktop navigation">
                 <ul className="flex space-x-6 items-center">
                    {/* Add key prop for list items */}
                   <li><Link href="https://www.peaknyc.com/about/" className={`text-sm font-medium uppercase tracking-wider ${isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-primary-dark'} transition-colors`}>About</Link></li>
                   <li><Link href="https://www.peaknyc.com/restaurant-bars/" className={`text-sm font-medium uppercase tracking-wider ${isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-primary-dark'} transition-colors`}>Restaurant</Link></li>
                   <li><Link href="https://www.peaknyc.com/menus/" className={`text-sm font-medium uppercase tracking-wider ${isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-primary-dark'} transition-colors`}>Menus</Link></li>
                   <li><Link href="https://www.peaknyc.com/private-events/" className={`text-sm font-medium uppercase tracking-wider ${isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-primary-dark'} transition-colors`}>Events</Link></li>
                   {/* Add other links */}
                 </ul>
               </nav>
              <Button href="#" variant="primary" className="reserve-button">
                Reserve Now
              </Button>
            </div>

             {/* Mobile Only: Spacer to balance logo when toggle is present */}
             <div className="lg:hidden w-8"> {/* Adjust width to match toggle button */}
             </div>
          </div>
        </div>
      </header>

      {/* Navigation Popup */}
      <NavigationPopup isOpen={isNavOpen} onClose={closeNav} />
    </>
  );
}