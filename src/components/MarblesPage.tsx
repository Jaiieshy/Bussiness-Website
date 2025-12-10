import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { CheckCircle } from 'lucide-react';

export function MarblesPage() {
  const marbles = [
    {
      id: 1,
      name: 'Carrara White Marble',
      origin: 'Italy',
      price: 'Start from 95/sq.ft',
      image: '/images/j4.jpg',
      premium: true,
      description: 'Classic white marble with subtle grey veining',
    },
    {
      id: 2,
      name: 'Luxury Kitchen Marble',
      origin: 'Greece',
      price: 'Start from 95/sq.ft',
      image: '/images/j9.jpg',
      premium: true,
      description: 'Perfect for countertops and high-end applications',
    },
    {
      id: 3,
      name: 'Imperial Marble',
      origin: 'India',
      price: 'Start from 95/sq.ft',
      image: 'https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjB0aWxlc3xlbnwxfHx8fDE3NjA1NTA3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      premium: false,
      description: 'Elegant patterns suitable for all spaces',
    },
    {
      id: 4,
      name: 'Calacatta Gold',
      origin: 'Italy',
      price: 'Start from 95/sq.ft',
      image: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYwNDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      premium: true,
      description: 'Rare marble with distinctive gold veining',
    },
    {
      id: 5,
      name: 'Statuario Marble',
      origin: 'Italy',
      price: 'Start from 95/sq.ft',
      image: 'https://images.unsplash.com/photo-1709751745503-bdef18219afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwbWFyYmxlJTIwY291bnRlcnRvcHxlbnwxfHx8fDE3NjA1NTA3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      premium: true,
      description: 'Premium quality with dramatic veining',
    },
    {
      id: 6,
      name: 'Emperador Dark',
      origin: 'Spain',
      price: 'Start from 95/sq.ft',
      image: 'https://images.unsplash.com/photo-1758548157378-46bc8e6dc6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjB0aWxlc3xlbnwxfHx8fDE3NjA1NTA3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      premium: false,
      description: 'Rich brown tones with white veining',
    },
  ];

  const benefits = [
    'Natural beauty and uniqueness',
    'Long-lasting durability',
    'Increases property value',
    'Easy to clean and maintain',
    'Heat resistant',
    'Timeless elegance',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Exquisite Marble Collection</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Sourced from the world's finest quarries, our marble selection brings timeless luxury to your space
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-50 rounded-xl p-8">
          <h2 className="mb-6 text-center">Why Choose Natural Marble?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marbles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marbles.map((marble) => (
            <Card key={marble.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={marble.image}
                  alt={marble.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {marble.premium && (
                  <Badge className="absolute top-4 right-4 bg-amber-600">Premium</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="mb-1">{marble.name}</h3>
                <p className="text-slate-500 mb-3">Origin: {marble.origin}</p>
                <p className="text-slate-600 mb-4">{marble.description}</p>
                <div className="mb-4">
                  <span className="text-slate-900">{marble.price}</span>
                </div>
                {/* <div className="flex gap-2">
                  <Button className="flex-1">View Details</Button>
                  <Button variant="outline" className="flex-1">Request Sample</Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Need Help Choosing?</h2>
          <p className="text-slate-600 mb-8">
            Our marble experts are here to guide you through the selection process and help you find the perfect match for your project.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
            Schedule Consultation
          </Button>
        </div>
      </div> */}
    </div>
  );
}
