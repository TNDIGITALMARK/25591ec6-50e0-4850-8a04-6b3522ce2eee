'use client';

import { useState } from 'react';
import { Header } from '@/components/marketplace/Header';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'electronics', label: 'Electronics', count: 245 },
    { id: 'accessories', label: 'Accessories', count: 156 },
    { id: 'wearables', label: 'Wearables', count: 89 },
    { id: 'audio', label: 'Audio & Video', count: 123 },
    { id: 'computing', label: 'Computing', count: 198 },
  ];

  const brands = [
    { id: 'techgear', label: 'TechGear', count: 45 },
    { id: 'smarthome', label: 'SmartHome', count: 32 },
    { id: 'fittech', label: 'FitTech', count: 28 },
    { id: 'skyvision', label: 'SkyVision', count: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover Products
          </h1>
          <p className="text-gray-600">
            Browse through our extensive collection of quality products
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Search for products, brands, or categories..."
              className="pl-12 pr-4 py-3 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Card className="p-6 sticky top-24 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-gray-700" />
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={category.id} />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {category.label}
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">
                        ({category.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">
                  Price Range
                </h3>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-3"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">Brands</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={brand.id} />
                        <label
                          htmlFor={brand.id}
                          className="text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {brand.label}
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">
                        ({brand.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">
                  Rating
                </h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="text-sm font-medium text-gray-700 cursor-pointer flex items-center"
                      >
                        <span>{rating}</span>
                        <span className="text-star-rating ml-1">★</span>
                        <span className="ml-1">& up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply/Reset Buttons */}
              <div className="space-y-2">
                <Button className="w-full btn-primary">Apply Filters</Button>
                <Button variant="outline" className="w-full">
                  Reset All
                </Button>
              </div>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold">1-12</span> of{' '}
                  <span className="font-semibold">245</span> results
                </p>
              </div>
              <div>
                <select className="px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'default' : 'outline'}
                  size="sm"
                  className={page === 1 ? 'bg-blue-accent hover:bg-blue-accent' : ''}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
