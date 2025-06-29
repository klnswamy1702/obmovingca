import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle
} from 'lucide-react';

const services = [
  'Local Moving',
  'Long Distance Moving', 
  'Storage Services',
  'Packing & Unpacking',
  'Residential Moving',
  'Commercial Moving'
];

const cities = [
  'Brampton', 'Toronto', 'Mississauga', 'Oakville', 
  'Hamilton', 'Burlington', 'Milton', 'Georgetown'
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary rounded-lg p-2">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">OB Moving</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partners in every step of your relocation journey. 
              We make moving simple, stress-free, and affordable for everyone.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 h-auto" asChild>
                <a href="https://facebook.com/obmoving" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto" asChild>
                <a href="https://instagram.com/obmoving" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto" asChild>
                <a href="https://twitter.com/obmoving" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto" asChild>
                <a href="https://wa.me/13653665937" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <span className="text-gray-400 text-sm">{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-400 text-sm">+1 365 366 5937</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-400 text-sm">obmoving.ca@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-gray-400 text-sm">
                  46 Pappain Crescent<br />
                  Brampton, ON L7A 3J6
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 OB Moving. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}