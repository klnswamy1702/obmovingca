'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Dara and James Levine',
    location: 'Toronto to Ottawa',
    rating: 5,
    text: 'From booking to unloading, everything was seamless. The team communicated well and made sure I was comfortable every step of the way.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Long Distance Moving'
  },
  {
    name: 'The Webers',
    location: 'Brampton to Mississauga',
    rating: 5,
    text: 'They handled my fragile items with so much care. The crew was polite, efficient, and very professional throughout.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Local Moving'
  },
  {
    name: 'Christina Watts',
    location: 'Hamilton to Toronto',
    rating: 5,
    text: 'I needed last-minute help and they delivered! Quick response, fair pricing, and zero damage to my stuff.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    service: 'Local Moving'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Happy Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-primary/5 to-blue-50">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-primary/30 mb-4 mx-auto md:mx-0" />
                  <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-center md:justify-start items-center space-x-1 mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full p-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full p-2"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/testimonials">
              Read More Reviews
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}