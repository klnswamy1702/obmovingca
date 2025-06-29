import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { 
//   Users, 
//   Award, 
//   Shield, 
//   Clock,
//   MapPin,
//   Truck,
//   CheckCircle
// } from 'lucide-react';
import {
  Users,
  Award,
  Shield,
  Clock,
  MapPin,
  Truck,
  CheckCircle,
  Phone,     // ✅ Add this
  Mail       // ✅ And this
} from 'lucide-react';


const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We handle your belongings with the utmost care and provide comprehensive protection for your move.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. Your satisfaction is our top priority.'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in service quality and continuously improve our processes.'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Punctual, professional, and dependable service that you can count on every time.'
  }
];

const milestones = [
  { year: '2019', event: 'Founded OB Moving', description: 'Started with a vision to provide reliable and honest moving services' },
  { year: '2020', event: 'Expanded Services', description: 'Added long-distance moving and storage solutions' },
  { year: '2022', event: '200+ Happy Customers', description: 'Reached a major milestone in customer satisfaction' },
  { year: '2023', event: 'Modern Fleet', description: 'Upgraded to modern vehicles with GPS tracking' },
  { year: '2024', event: '5 Years of Excellence', description: 'Celebrating 5 years of trusted moving services across Canada' }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                About OB Moving
              </h1>
              <p className="text-xl text-gray-600">
                At OB Moving, we're more than just movers — we're your trusted partners in every step of your relocation journey. 
                With years of experience in the moving industry, our mission is to make moving simple, stress-free, and affordable for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional moving team"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  Whether you're relocating locally or across the country, we bring a personal touch to every move. 
                  From careful packing to secure transport and on-time delivery, we treat your belongings like our own.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-2xl">Our Promise</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  We started this business with one goal: to provide a reliable and honest moving service that people can count on. 
                  Today, we're proud to have helped hundreds of families and businesses move with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Quality Guarantee
            </h2>
            <Card className="shadow-xl border-0 bg-gradient-to-r from-primary/5 to-blue-50">
              <CardContent className="p-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Your satisfaction is our top priority. At OB Moving, we stand behind the quality of our work with a commitment to excellence on every move. 
                  From the first box packed to the last item delivered, we guarantee careful handling, timely service, and transparent communication throughout the entire process.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We use high-quality packing materials, modern equipment, and skilled professionals to ensure your belongings are protected every step of the way. 
                  If something isn't right, we'll make it right — that's our promise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape the way we serve our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our growth and achievements over the years
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6 mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.event}</h3>
                        <span className="text-sm text-gray-500">{milestone.year}</span>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OB Moving Main Office
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <span className="text-xl">+1 365 366 5937</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <span className="text-xl">obmoving.ca@gmail.com</span>
                </div>
                <div className="flex items-start justify-center space-x-3">
                  <MapPin className="h-6 w-6 mt-1" />
                  <div className="text-xl">
                    <div>46 Pappain Crescent</div>
                    <div>Brampton, ON L7A 3J6</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Move with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us take the weight off your shoulders — literally. Join hundreds of satisfied customers who have trusted us with their moving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}