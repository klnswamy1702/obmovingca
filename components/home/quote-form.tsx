'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Phone, User } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromLocation: '',
    toLocation: '',
    movingDate: '',
    serviceType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to make your move? Fill out our quick form and get a no-obligation quote tailored to your needs. 
            We'll provide a transparent estimate with no hidden fees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Quick Quote Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone Number</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Moving From</span>
                  </Label>
                  <Input
                    id="from"
                    placeholder="Current city/location"
                    value={formData.fromLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, fromLocation: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Moving To</span>
                  </Label>
                  <Input
                    id="to"
                    placeholder="Destination city/location"
                    value={formData.toLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, toLocation: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Moving Date</span>
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.movingDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, movingDate: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
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

                <div className="md:col-span-2 pt-4">
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Get Free Quote Now
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    No spam calls. We'll contact you within 2 hours with your personalized quote.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}