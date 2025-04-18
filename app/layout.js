import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Configure fonts
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins', // Optional: for use with Tailwind variable
  weight: ['300', '400', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Optional
  weight: ['400', '700']
});

// --- Metadata ---
export const metadata = {
  title: "Peak Restaurant | Elevated Dining Experience | Hudson Yards, NYC",
  description: "Experience unique sky-high dining at Peak, located in Hudson Yards, NYC. Enjoy breathtaking views, modern American cuisine, and vibrant atmosphere. Perfect for dinner, drinks, and private events.",
  // Add other meta tags as needed (keywords, open graph, etc.)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-background text-text font-sans">
        {/* Header is included in the layout */}
        <Header />

        {/* Page content is rendered here */}
        {children}

        {/* Footer is included in the layout */}
        <Footer />

        {/* Sticky Address Bar (Desktop Only) */}
        <div className="sticky-address hidden lg:block fixed bottom-0 left-0 right-0 bg-surface text-text-muted py-2 z-40 border-t border-border">
          <div className="container mx-auto flex justify-center items-center text-sm space-x-6">
            <span>
              <a href="https://www.google.com/maps/place/Peak+with+Priceless+Restaurant+%26+Bar/@40.753877,-74.0012984,19.52z/data=!3m1!5s0x89c259b40f09b0eb:0xcb2673126c6c5549!4m6!3m5!1s0x89c259933d0feaf7:0x550a717eeb137cf5!8m2!3d40.7539962!4d-74.0010727!16s%2Fg%2F11j1sn4jrp?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D"
                 target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors duration-300">
                30 Hudson Yards, 101st Fl, NYC
              </a>
            </span>
            <span>|</span>
            <span>
              <a href="mailto:peak@rhchospitality.com"
                 className="hover:text-primary transition-colors duration-300">
                peak@rhchospitality.com
              </a>
            </span>
          </div>
        </div>

      </body>
    </html>
  );
}