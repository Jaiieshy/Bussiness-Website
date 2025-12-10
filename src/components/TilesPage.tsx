import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

export function TilesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tiles' },
    { id: 'ceramic', label: 'Ceramic' },
    { id: 'porcelain', label: 'Porcelain' },
    { id: 'mosaic', label: 'Mosaic' },
    { id: 'natural', label: 'Natural Stone' },
  ];

  const tiles = [
    {
      id: 1,
      name: 'Modern Ceramic Floor Tiles',
      category: 'ceramic',
      price: 'Start from 31/sq.ft',
      image: '/images/j10.jpg',
      featured: true,
    },
    {
      id: 2,
      name: 'Luxury Bathroom Tiles',
      category: 'porcelain',
      price: 'Start from 31/sq.ft',
      image: '/images/j5.jpg',
      featured: false,
    },
    {
      id: 3,
      name: 'Premium Marble Effect Tiles',
      category: 'porcelain',
      price: 'Start from 31/sq.ft',
      image: '/images/j6.jpg',
      featured: true,
    },
    {
      id: 4,
      name: 'Designer Mosaic Tiles',
      category: 'mosaic',
      price: 'Start from 31/sq.ft',
      image:'/images/j7.jpg',
      featured: false,
    },
    {
      id: 5,
      name: 'Natural Stone Tiles',
      category: 'natural',
      price: 'Start from 31/sq.ft',
      image: '/images/j8.jpg',
      featured: true,
    },
    {
      id: 6,
      name: 'Classic Ceramic Collection',
      category: 'ceramic',
      price: 'Start from 31/sq.ft',
      image: '/images/j9.jpg',
      featured: false,
    },
  ];

  const filteredTiles = selectedCategory === 'all' 
    ? tiles 
    : tiles.filter(tile => tile.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Premium Tiles Collection</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Discover our extensive range of high-quality tiles for every space and style
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Tiles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTiles.map((tile) => (
            <Card key={tile.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={tile.image}
                  alt={tile.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {tile.featured && (
                  <Badge className="absolute top-4 right-4 bg-slate-900">Featured</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2">{tile.name}</h3>
                <p className="text-slate-600 mb-4">{tile.price}</p>
                {/* <div className="flex gap-2">
                  <Button className="flex-1">View Details</Button>
                  <Button variant="outline" className="flex-1">Get Quote</Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
