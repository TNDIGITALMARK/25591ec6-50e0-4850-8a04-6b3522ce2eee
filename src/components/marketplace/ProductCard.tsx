import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export function ProductCard({
  name,
  image,
  price,
  rating,
  reviews,
  inStock,
}: ProductCardProps) {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-200 cursor-pointer border border-gray-200">
      <CardContent className="p-4">
        {/* Product Image */}
        <div className="relative aspect-square mb-3 bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold bg-destructive px-3 py-1 rounded">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-star-rating text-star-rating'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating.toFixed(1)} ({reviews})
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="price-badge">${price.toFixed(2)}</span>
          </div>
          <Button
            size="sm"
            className="bg-coral hover:bg-coral-orange text-white"
            disabled={!inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
