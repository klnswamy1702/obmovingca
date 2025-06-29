import Hero from '@/components/home/hero';
import QuoteForm from '@/components/home/quote-form';
import ServicesSection from '@/components/home/services-section';
import WhyChooseUs from '@/components/home/why-choose-us';
import TestimonialsSection from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuoteForm />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
}