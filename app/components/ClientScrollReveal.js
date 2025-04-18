"use client";

import { useEffect, useRef, useState } from 'react';

export default function ClientScrollReveal({ children, delay = 0, threshold = 0.1, className = '', tag = 'div' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Stop observing once visible
        }
      },
      {
        threshold: threshold, // Percentage of element visibility needed to trigger
      }
    );

    observer.observe(element);

    // Cleanup observer on component unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  const Tag = tag; // Use the tag prop to render the correct HTML element

  return (
    <Tag
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}