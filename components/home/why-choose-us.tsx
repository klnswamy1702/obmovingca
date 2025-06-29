import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Clock, 
  Users, 
  Award,
  Truck,
  HeadphonesIcon
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Your satisfaction is our top priority. We stand behind the quality of our work with a commitment to excellence on every move.',
    stat: '100%',
    statLabel: 'Guaranteed'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We value your time and ensure timely pickup and delivery as per the committed schedule.',
    stat: '98%',
    statLabel: 'On-Time'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our trained professionals handle your goods with utmost care and professionalism using modern equipment.',
    stat: '15+',
    statLabel: 'Experts'
  },
  {
    icon: Award,
    title: 'Trusted Service',
    description: 'We started with one goal: to provide reliable and honest moving service that people can count on.',
    stat: '500+',
    statLabel: 'Happy Moves'
  },
  {
    icon: Truck,
    title: 'Modern Fleet',
    description: 'Well-maintained vehicles equipped with GPS tracking and safety features for secure transportation.',
    stat: '20+',
    statLabel: 'Vehicles'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you throughout your moving journey.',
    stat: '24/7',
    statLabel: 'Support'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose OB Moving?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional moving services that exceed your expectations. 
            What sets us apart is our commitment to care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{feature.stat}</div>
                    <div className="text-sm text-gray-500">{feature.statLabel}</div>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}