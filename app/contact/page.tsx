'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 365 366 5937'],
    description: 'Available for your convenience'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['obmoving.ca@gmail.com'],
    description: 'We reply within 2 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['46 Pappain Crescent', 'Brampton, ON L7A 3J6'],
    description: 'Main office location'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['+1 365 366 5937'],
    description: 'Quick support via WhatsApp'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    fromLocation: '',
    toLocation: '',
    movingDate: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        fromLocation: '',
        toLocation: '',
        movingDate: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to make your move? Fill out our quick form and get a no-obligation quote tailored to your needs. 
            We'll provide a transparent estimate with no hidden fees. Let's get started!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                  <p className="text-blue-100">Fill out the form and we'll get back to you within 2 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600">Your message has been sent successfully. We'll contact you within 2 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="local">Local Moving</SelectItem>
                            <SelectItem value="longdistance">Long Distance Moving</SelectItem>
                            <SelectItem value="storage">Storage Services</SelectItem>
                            <SelectItem value="packing">Packing & Unpacking</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="from">Moving From *</Label>
                          <Input
                            id="from"
                            placeholder="Current city/location"
                            value={formData.fromLocation}
                            onChange={(e) => handleInputChange('fromLocation', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to">Moving To *</Label>
                          <Input
                            id="to"
                            placeholder="Destination city/location"
                            value={formData.toLocation}
                            onChange={(e) => handleInputChange('toLocation', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Moving Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.movingDate}
                          onChange={(e) => handleInputChange('movingDate', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your moving requirements..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                      <p className="text-sm text-gray-500 text-center">
                        * Required fields. We'll never share your information with third parties.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="shadow-md border-0">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                              ))}
                              <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="shadow-md border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-green-600 font-medium">
                      Emergency support available
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at our main office in Brampton for personalized consultation
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-xl border-0 overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500">46 Pappain Crescent, Brampton, ON L7A 3J6</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help you with your moving needs
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+13653665937">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://wa.me/13653665937" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}