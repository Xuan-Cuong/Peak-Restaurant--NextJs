"use client";
import ClientScrollReveal from './ClientScrollReveal';
import Button from './Button';

export default function NewsletterSection() {
  // Basic form handler (prevent default); replace with actual logic
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Newsletter form submitted with email:", event.target.email_address.value);
    alert("Thank you for subscribing!"); // Simple feedback
    event.target.reset(); // Clear the form
  };

  return (
    <section className="newsletter-section content-section bg-surface">
      <div className="container mx-auto px-4 text-center">
        <ClientScrollReveal tag="div" className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 text-primary">Stay Connected</h2>
          <p className="text-text-muted mb-8">
            Subscribe to our mailing list for exclusive updates, events, and offers.
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form flex flex-col sm:flex-row gap-4 justify-center">
            <div className="form-group flex-grow">
              <label htmlFor="newsletter-email" className="visually-hidden">Email Address</label>
              <input
                type="email"
                id="newsletter-email"
                name="email_address"
                placeholder="Your Email Address"
                required
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text placeholder-text-muted transition-colors duration-300"
              />
            </div>
            {/* Using Button component for submission */}
            <Button type="submit" variant="primary" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </ClientScrollReveal>
      </div>
    </section>
  );
}