"use client";

import Link from 'next/link';
import Button from './Button'; // Import reusable button

// Navigation Links Data
const navLinks = [
    { href: "/", label: "HOME" },
    { href: "https://www.peaknyc.com/about/", label: "ABOUT PEAK" },
    { href: "https://www.peaknyc.com/restaurant-bars/", label: "RESTAURANT" }, // Typo fixed: RESTAURANT
    { href: "https://www.peaknyc.com/quin-bar/", label: "BAR & LOUNGE" },
    { href: "https://www.peaknyc.com/menus/", label: "MENUS" },
    { href: "https://www.peaknyc.com/private-events/", label: "PEAK EVENTS" },
    { href: "https://www.peaknyc.com/peakaboo/", label: "PEAKABOO" },
    { href: "https://www.peaknyc.com/contact/", label: "CONTACT & FAQS" },
    { href: "https://giftcards.peaknyc.com/product/gift-card/", label: "GIFT CARDS" },
];

export default function NavigationPopup({ isOpen, onClose }) {
    // Prevent scrolling background when popup is open
    // Handled in Header component now

    if (!isOpen) return null;

    const handleLinkClick = () => {
        onClose(); // Close the popup when a link is clicked
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="popup-overlay fixed inset-0 bg-black bg-opacity-70 z-[90] lg:hidden"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Popup Content */}
            <div
                id="nav-popup"
                role="dialog"
                aria-modal="true"
                aria-labelledby="nav-popup-title"
                className={`popup-nav fixed top-0 right-0 bottom-0 w-full max-w-md md:max-w-lg bg-background text-white z-[100] transform transition-transform duration-500 ease-in-out lg:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } flex flex-col shadow-xl`} // Added flex column layout
            >
                {/* Header */}
                <div className="popup-nav-header flex justify-between items-center p-6 border-b border-border">
                    <Link href="/" className="popup-logo" aria-label="Peak Homepage" onClick={handleLinkClick}>
                        <img
                          src="https://www.peaknyc.com/wp-content/themes/peak/library/images/peak-logo-text-mobile-white.svg"
                          alt="Peak Logo"
                          className="h-8 w-auto" // Adjust size
                        />
                    </Link>
                    <button
                        className="popup-close js-popup-close text-3xl text-text-muted hover:text-white transition-colors"
                        onClick={onClose}
                        aria-label="Close navigation"
                        aria-controls="nav-popup"
                    >
                        × {/* HTML entity for close */}
                    </button>
                </div>

                {/* Content Area (Scrollable) */}
                <div className="popup-nav-content flex-grow overflow-y-auto p-6 md:p-8">
                    {/* Main Navigation */}
                    <nav className="popup-main-nav mb-8" aria-label="Main Navigation" id="nav-popup-title">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    {/* Use <a> for external, Link for internal */}
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            href={link.href}
                                            className="block py-2 text-xl md:text-2xl font-medium uppercase tracking-wider hover:text-primary transition-colors"
                                            onClick={handleLinkClick} // Close on internal link click
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            target="_blank" // Open external links in new tab
                                            rel="noopener noreferrer"
                                            className="block py-2 text-xl md:text-2xl font-medium uppercase tracking-wider hover:text-primary transition-colors"
                                            onClick={handleLinkClick} // Also close for external links
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Secondary Content */}
                    <div className="popup-nav-secondary mt-auto pt-6 border-t border-border">
                        <Button href="#" variant="primary" className="w-full mb-6 text-lg">
                            Reserve Now
                        </Button>
                        <div className="popup-hours text-center text-text-muted">
                            <h4 className="font-semibold text-lg text-white mb-2">Opening Hours</h4>
                            {/* Simplified Hours for popup */}
                            <p className="text-sm">Lunch: Daily from 11:00/11:30 AM</p>
                            <p className="text-sm">Dinner: Daily from 5:00 PM</p>
                            <p className="text-sm">Lounge: Daily from 4:30 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}