import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { 
  Home, 
  MapPin, 
  Package,
  Truck,
  CheckCircle,
  Star,
  Shield,
  Clock
} from 'lucide-react';

const pricingPlans = [
  {
    icon: Home,
    title: 'Local Moving',
    subtitle: 'Within the city',
    price: '$150',
    originalPrice: '$200',
    duration: 'Per hour',
    popular: true,
    features: [
      'Professional packing materials',
      'Loading & unloading',
      'Local transportation',
      'Furniture disassembly/assembly',
      'Same-day service available',
      'Flexible scheduling'
    ],
    additionalInfo: 'Minimum 2 hours. Price varies based on crew size'
  },
  {
    icon: MapPin,
    title: 'Long Distance Moving',
    subtitle: 'Cross-country moves',
    price: 'Custom',
    originalPrice: 'Quote',
    duration: 'Based on distance',
    popular: false,
    features: [
      'Professional packing service',
      'GPS tracking throughout',
      'Coordinated logistics',
      'Regular status updates',
      'Secure transportation',
      'Delivery scheduling'
    ],
    additionalInfo: 'Pricing based on distance, volume, and services'
  },
  {
    icon: Package,
    title: 'Storage Services',
    subtitle: 'Secure storage',
    price: '$100',
    originalPrice: '$150',
    duration: 'Per month',
    popular: false,
    features: [
      'Climate controlled facility',
      '24/7 security surveillance',
      'Easy access during hours',
      'Inventory management',
      'Fire safety systems',
      'Flexible rental terms'
    ],
    additionalInfo: 'Discounts available for long-term storage'
  },
  {
    icon: Truck,
    title: 'Packing & Unpacking',
    subtitle: 'Professional service',
    price: '$50',
    originalPrice: '$75',
    duration: 'Per hour',
    popular: false,
    features: [
      'High-quality materials',
      'Professional techniques',
      'Fragile item handling',
      'Labeling and organization',
      'Unpacking at destination',
      'Time-saving convenience'
    ],
    additionalInfo: 'Can be combined with moving services'
  }
];

const faqs = [
  {
    question: 'How is the moving cost calculated?',
    answer: 'Moving cost is calculated based on several factors including the volume of goods, distance between locations, type of service required, packing materials needed, and any additional services. We provide transparent pricing with no hidden charges.'
  },
  {
    question: 'Do you provide free quotations?',
    answer: 'Yes, we provide completely free quotations. Our experts will assess your requirements and provide an accurate quote. There are no charges for the quotation service.'
  },
  {
    question: 'What is included in the basic moving package?',
    answer: 'Our basic package includes professional packing materials, loading and unloading services, transportation, and basic protection for your belongings. Additional services can be added as per your needs.'
  },
  {
    question: 'Do you offer insurance coverage?',
    answer: 'Yes, we provide basic protection for all moves. We also offer additional insurance options for valuable items to provide complete peace of mind during your move.'
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 1-2 weeks in advance for local moves and 2-4 weeks for long-distance moves. However, we also accommodate last-minute bookings based on availability.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including cash, bank transfer, credit/debit cards, and e-transfers. Payment can be made in installments - deposit upon booking and balance on completion.'
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, and specialized materials for fragile items. Quality packing materials are included in our service packages.'
  },
  {
    question: 'What if something gets damaged during the move?',
    answer: 'All moves are covered under our protection policy. In the rare event of damage, we have a quick resolution process. Our team takes utmost care to prevent any damage, and we\'re fully accountable for your belongings.'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            No hidden charges, no surprises. Get the best value for your money with our 
            competitive and transparent pricing structure across Canada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              No Hidden Charges
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Star className="h-4 w-4 mr-2" />
              Best Value Guarantee
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              Instant Quotes
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the service that best fits your needs. All prices are starting from and may vary based on specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className={`relative shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        {plan.originalPrice !== 'Quote' && (
                          <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{plan.duration}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-4">
                      <Button className="w-full" asChild>
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                      <p className="text-xs text-gray-500 text-center">{plan.additionalInfo}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Price Calculator CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Get Accurate Pricing</h3>
              <p className="text-xl text-blue-100 mb-8">
                Fill out our quick form and get a detailed, personalized quote within 2 hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get Detailed Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link href="tel:+13653665937">Call for Instant Quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-blue-100">Hidden Charges</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0★</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}