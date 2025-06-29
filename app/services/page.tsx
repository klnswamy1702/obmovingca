import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Home, 
  MapPin, 
  Package, 
  Truck,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Local Moving',
    description: 'Our local moving service is quick, efficient, and tailored to your schedule, getting you settled into your new home in no time.',
    features: [
      'Same-day service available',
      'Flexible scheduling options',
      'Local area expertise',
      'Professional packing materials',
      'Furniture disassembly/assembly',
      'Careful handling of fragile items'
    ],
    pricing: 'Starting from $150/hour',
    image: 'https://images.pexels.com/photos/7464729/pexels-photo-7464729.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: MapPin,
    title: 'Long Distance Moving',
    description: 'Our long distance moving service is reliable, well-coordinated, and designed to make your move stress-free, no matter how far you\'re going.',
    features: [
      'Cross-country moving expertise',
      'GPS tracking throughout journey',
      'Coordinated logistics planning',
      'Regular status updates',
      'Secure transportation',
      'Professional project management'
    ],
    pricing: 'Custom quotes available',
    image: 'https://images.pexels.com/photos/7464231/pexels-photo-7464231.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Package,
    title: 'Storage Services',
    description: 'Our secure storage service offers flexible options to keep your belongings safe and accessible, whether for short-term needs or long-term solutions.',
    features: [
      'Climate-controlled environment',
      '24/7 security surveillance',
      'Easy access and retrieval',
      'Flexible storage duration',
      'Inventory management system',
      'Fire safety systems'
    ],
    pricing: 'Starting from $100/month',
    image: 'https://images.pexels.com/photos/4464327/pexels-photo-4464327.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Truck,
    title: 'Packing & Unpacking',
    description: 'Our professional packing and unpacking service ensures your items are carefully handled from start to finish, saving you time and effort on moving day.',
    features: [
      'High-quality packing materials',
      'Professional packing techniques',
      'Careful handling of fragile items',
      'Labeling and organization',
      'Unpacking at destination',
      'Time-saving convenience'
    ],
    pricing: 'Starting from $50/hour',
    image: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const additionalServices = [
  {
    title: 'Furniture Assembly',
    description: 'Professional furniture disassembly and assembly',
    icon: Package
  },
  {
    title: 'Loading & Unloading',
    description: 'Safe loading and unloading by trained staff',
    icon: Truck
  },
  {
    title: 'Moving Supplies',
    description: 'Quality packing materials and moving supplies',
    icon: Shield
  },
  {
    title: 'Same-Day Service',
    description: 'Quick service for urgent moving needs',
    icon: Clock
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Moving Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive moving solutions tailored to meet your specific needs across Canada. 
            From local moves to long-distance relocations, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Quality Guaranteed
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              On-Time Delivery
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Professional Service
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="shadow-lg border-0 overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-primary/10 rounded-full p-3">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-primary font-semibold">{service.pricing}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                          <Link href="/contact">
                            Get Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                          <Link href="tel:+13653665937">Call Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to make your moving experience even better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures a smooth and hassle-free moving experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Get Quote', description: 'Contact us for a free, detailed quote' },
              { step: '2', title: 'Schedule', description: 'Book your moving date and time' },
              { step: '3', title: 'Pack & Move', description: 'Our team handles packing and loading' },
              { step: '4', title: 'Deliver', description: 'Safe delivery and unpacking at destination' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us handle your moving needs professionally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="tel:+13653665937">Call Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}