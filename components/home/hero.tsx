import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Trusted Moving Partners in Canada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted
                <span className="block text-primary">Moving Partner</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                We're more than just movers — we're your trusted partners in every step of your relocation journey. 
                Making moving simple, stress-free, and affordable across Canada.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 rounded-full p-2">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">100% Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 rounded-full p-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">On-Time Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-100 rounded-full p-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Quality Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="#quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8">
                <Link href="tel:+13653665937">Call Now</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional movers loading truck"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Quality Guarantee</p>
                  <p className="text-xs text-gray-500">100% Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Trusted Service</p>
                  <p className="text-xs text-gray-500">Hundreds of Moves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}