"use client";
import Link from 'next/link';
import Image from 'next/image'; // For social icons if needed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.facebook.com/Peaknyc", title: "Facebook", ariaLabel: "Peak Facebook", imgSrc: "https://www.peaknyc.com/wp-content/themes/peak/library/images/social_icons/facebook-orange.svg" },
    { href: "https://www.instagram.com/peakhudsonyards/", title: "Instagram", ariaLabel: "Peak Instagram", imgSrc: "https://www.peaknyc.com/wp-content/themes/peak/library/images/social_icons/instagram-orange.svg" },
    // Add more social links here if needed
  ];

  const footerLinks = [
    { href: "https://www.peaknyc.com/about/", label: "About" },
    { href: "https://www.peaknyc.com/restaurant-bars/", label: "Restaurant & Bar" },
    { href: "https://www.peaknyc.com/private-events/", label: "Private Events" },
    { href: "https://giftcards.peaknyc.com/product/gift-card/", label: "Gift Cards" },
    { href: "https://www.edgenyc.com/en", label: "Edge" },
  ];

  const legalLinks = [
      { href: "https://rhchospitality.com/", label: "Managed by RHC" },
      { href: "https://www.related.com/terms-use", label: "Terms" },
      { href: "https://www.related.com/privacy-policy", label: "Privacy" },
      { href: "https://privacyportal-cdn.onetrust.com/dsarwebform/679d7477-7e03-4d1d-8596-4ba05c7a40f9/33af1b77-041a-4265-a598-6d30835f164d.html", label: "Accessibility" }
  ];

  return (
    <footer className="site-footer bg-secondary text-text-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Column 1: Hours */}
          <div className="footer-column">
            <h3 className="footer-heading text-lg font-semibold text-white uppercase tracking-wider mb-5">Hours</h3>
            <div className="footer-hours space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-text mb-1">Lunch</h4>
                <p>Mon - Thu: 11:30 AM - 2:30 PM</p>
                <p>Fri - Sun: 11:00 AM - 2:30 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">Dinner</h4>
                <p>Sun - Wed: 5:00 PM - 10:00 PM</p>
                <p>Thu - Sat: 5:00 PM - 10:30 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-text mb-1">Lounge</h4>
                <p>Quin Bar: Daily 4:30 PM - 10:30 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading text-lg font-semibold text-white uppercase tracking-wider mb-5">Explore</h3>
            <ul className="footer-links space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  {/* Use Link for internal, <a> for external */}
                  {link.href.startsWith('/') ? (
                     <Link href={link.href} className="hover:text-primary transition-colors duration-300">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Visit & Contact */}
          <div className="footer-column">
            <h3 className="footer-heading text-lg font-semibold text-white uppercase tracking-wider mb-5">Visit</h3>
            <address className="footer-address not-italic mb-3 text-sm">
              30 Hudson Yards, 101st Floor<br />
              New York, NY 10001
            </address>
            <a
              href="https://www.google.com/maps/place/Peak+with+Priceless+Restaurant+%26+Bar/@40.753877,-74.0012984,19.52z/data=!3m1!5s0x89c259b40f09b0eb:0xcb2673126c6c5549!4m6!3m5!1s0x89c259933d0feaf7:0x550a717eeb137cf5!8m2!3d40.7539962!4d-74.0010727!16s%2Fg%2F11j1sn4jrp?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D"
              className="footer-map-link block mb-3 text-sm hover:text-primary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer">
              View Google Maps →
            </a>
            <a href="mailto:peak@rhchospitality.com" className="footer-email-link block mb-5 text-sm hover:text-primary transition-colors duration-300">
               Email: peak@rhchospitality.com
            </a>
            {/* Social Icons */}
            <div className="footer-social flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.href}
                  href={social.href}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="hover:opacity-80 transition-opacity duration-300"
                 >
                  {/* Using img tag directly as Next/Image might be overkill for small external SVGs */}
                  <img src={social.imgSrc} alt={`${social.title} Icon`} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-border pt-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="footer-legal mb-4 md:mb-0">
             {legalLinks.map((link, index) => (
                <span key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                        {link.label}
                    </a>
                    {index < legalLinks.length - 1 && <span className="mx-2">|</span>}
                </span>
             ))}
          </div>
          <div className="footer-copyright">
            © {currentYear} Peak NYC. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}