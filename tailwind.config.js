/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- Define Custom Theme ---
      colors: {
        primary: {
          DEFAULT: '#C0A062', // Gold/Bronze accent
          dark: '#A08450',
        },
        secondary: '#2B3A42', // Dark Blue/Gray
        background: '#0F171B', // Very Dark Background
        surface: '#1A242A', // Slightly Lighter Surface
        text: {
          DEFAULT: '#E0E0E0', // Off-white text
          muted: '#A0AEC0',   // Grayer text
          heading: '#FFFFFF', // White for main headings
        },
        border: '#3A4A52', // Border color
        'overlay': 'rgba(0, 0, 0, 0.6)', // Overlay color for hero
      },
      fontFamily: {
        // Define fonts matching the original HTML <link> tags
        sans: ['Poppins', 'sans-serif'],
        serif: ['Montserrat', 'serif'], // Or use Montserrat as another sans-serif option
      },
      spacing: {
        // Define consistent spacing units if needed (Tailwind defaults are good)
        'section': '6rem', // Example: Spacing between sections
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
      },
      backgroundImage: {
        // Example for Hero if using local image:
        // 'hero-pattern': "url('/images/hero-background.jpg')",
      },
      transitionTimingFunction: {
       'custom-ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};