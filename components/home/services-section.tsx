import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Home, 
  MapPin, 
  Package, 
  Truck,
  Shield, 
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Local Moving',
    description: 'Our local moving service is quick, efficient, and tailored to your schedule, getting you settled into your new home in no time.',
    features: ['Same-day service', 'Flexible scheduling', 'Local expertise'],
    image: 'https://images.pexels.com/photos/7464729/pexels-photo-7464729.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: MapPin,
    title: 'Long Distance Moving',
    description: 'Our long distance moving service is reliable, well-coordinated, and designed to make your move stress-free, no matter how far you\'re going.',
    features: ['Cross-country moves', 'GPS tracking', 'Coordinated logistics'],
    image: 'https://images.pexels.com/photos/7464231/pexels-photo-7464231.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Package,
    title: 'Storage Services',
    description: 'Our secure storage service offers flexible options to keep your belongings safe and accessible, whether for short-term needs or long-term solutions.',
    features: ['Climate controlled', '24/7 security', 'Flexible terms'],
    image: 'https://images.pexels.com/photos/4464327/pexels-photo-4464327.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Truck,
    title: 'Packing & Unpacking',
    description: 'Our professional packing and unpacking service ensures your items are carefully handled from start to finish, saving you time and effort on moving day.',
    features: ['Professional materials', 'Careful handling', 'Time-saving'],
    image: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Moving Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive moving solutions tailored to your specific needs across Canada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <Shield className="h-3 w-3 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}