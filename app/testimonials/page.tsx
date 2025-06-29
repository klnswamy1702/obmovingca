'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dara and James Levine',
    location: 'Toronto to Ottawa',
    rating: 5,
    service: 'Long Distance Moving',
    date: 'November 2024',
    text: 'From booking to unloading, everything was seamless. The team communicated well and made sure I was comfortable every step of the way. Professional service that exceeded our expectations.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    verified: true
  },
  {
    id: 2,
    name: 'The Webers',
    location: 'Brampton to Mississauga',
    rating: 5,
    service: 'Local Moving',
    date: 'October 2024',
    text: 'They handled my fragile items with so much care. The crew was polite, efficient, and very professional throughout. Would definitely recommend OB Moving to anyone.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    verified: true
  },
  {
    id: 3,
    name: 'Christina Watts',
    location: 'Hamilton to Toronto',
    rating: 5,
    service: 'Local Moving',
    date: 'October 2024',
    text: 'I needed last-minute help and they delivered! Quick response, fair pricing, and zero damage to my stuff. The team was incredibly professional and efficient.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    verified: true
  },
  {
    id: 4,
    name: 'Michael Chen',
    location: 'Oakville to Burlington',
    rating: 5,
    service: 'Packing & Unpacking',
    date: 'September 2024',
    text: 'Outstanding packing service! They took care of everything from start to finish. The unpacking service was equally impressive. Highly recommend their professional team.',
    image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150',
    verified: true
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    location: 'Milton to Georgetown',
    rating: 5,
    service: 'Storage Services',
    date: 'September 2024',
    text: 'Excellent storage solution! Clean, secure facility with easy access. The staff was helpful and the pricing was very reasonable. Perfect for our temporary storage needs.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    verified: true
  },
  {
    id: 6,
    name: 'David Thompson',
    location: 'Toronto to Brampton',
    rating: 4,
    service: 'Local Moving',
    date: 'August 2024',
    text: 'Good experience overall. The team was professional and completed the move efficiently. There was a minor delay, but they kept us informed throughout the process.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
    verified: true
  }
];

const serviceFilters = ['All', 'Local Moving', 'Long Distance Moving', 'Storage Services', 'Packing & Unpacking'];

export default function Testimonials() {
  const [selectedService, setSelectedService] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const filteredTestimonials = selectedService === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service === selectedService);

  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = filteredTestimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const handleFilterChange = (service: string) => {
    setSelectedService(service);
    setCurrentPage(1);
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Read what our satisfied customers have to say about their moving experience with OB Moving. 
            These genuine reviews reflect our commitment to excellence.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-primary">5.0★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600">Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by service:</span>
              <div className="flex flex-wrap gap-2">
                {serviceFilters.map((service) => (
                  <Button
                    key={service}
                    variant={selectedService === service ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterChange(service)}
                  >
                    {service}
                  </Button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + testimonialsPerPage, filteredTestimonials.length)} of {filteredTestimonials.length} reviews
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {testimonial.text}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{testimonial.date}</span>
                    <div className="flex items-center space-x-1">
                      <span>Rating:</span>
                      <span className="font-medium">{testimonial.rating}/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <Button
                variant="outline"
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              
              <Button
                variant="outline"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the same quality service that our customers rave about. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Get Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:+13653665937">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}