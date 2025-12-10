import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Award, Truck, Headphones } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = [
    {
      title: 'Premium Marble',
      image: '/images/j1.jpg',
      category: 'marbles',
    },
    {
      title: 'Designer Tiles',
      image: '/images/j2.jpg',
      category: 'tiles',
    },
    {
      title: 'Modern Bath Tiles',
      image: '/images/j3.jpg',
      category: 'tiles',
    },
  ];

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Handpicked materials from the finest quarries worldwide',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: '30+ Years Experience',
      description: 'Trusted by thousands of satisfied customers',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Fast Delivery',
      description: 'Quick and safe delivery to your doorstep',
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Expert Support',
      description: 'Professional guidance for your project needs',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-slate-900">
        <ImageWithFallback
          src="/images/homebg.jpg"
          alt="Luxury marble tiles"
          className="w-full h-full object-cover opacity-60"
        />
       
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-6 text-[20px]">Transform Your Space with</h1>
            {/* Brand Logos */}
            <div className="flex gap-6 justify-center items-center mt-8 flex-wrap">
              <div className="h-12 w-auto">
                <ImageWithFallback
                  src="/images/varmora-seeklogo.png"
                  alt="Varmora"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="h-12 w-auto">
                <ImageWithFallback
                  src="/images/Velzone Granito LLP_idjdvDmiyC_0.png"
                  alt="Velzone Granito"
                  className="h-full w-auto object-contain"
                />
              </div>
              
              
            <h1 className="mb-0 text-[20px] w-full text-center text-white">Premium Tiles & Marble</h1>
            <p style={{ marginBottom: '2rem' }} className="text-slate-200 max-w-2xl mx-auto text-[20px]">
              Discover our exquisite collection of luxury tiles and marble. Quality craftsmanship meets timeless elegance.
            </p>
            <div className="flex gap-4 justify-center flex-wrap w-full">
              <Button size="lg" onClick={() => onNavigate('tiles')} className="bg-white text-slate-900 hover:bg-slate-100">
                Browse Tiles
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('marbles')} className="text-[rgb(26,11,92)] border-white hover:bg-white hover:text-slate-900">
                View Marble
              </Button>
            </div>
            
            
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Products</h2>
            <p className="text-slate-600">Explore our handpicked selection of premium materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate(product.category)}>
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2">{product.title}</h3>
                  <Button variant="outline" className="w-full">
                    View Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8 text-slate-300 max-w-2xl mx-auto">
            Visit our showroom or contact our experts for personalized guidance on selecting the perfect materials for your space.
          </p>
          <Button size="lg" variant="outline" onClick={() => onNavigate('about')} className="text-[rgb(54,18,95)] border-white hover:bg-white hover:text-slate-900">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
