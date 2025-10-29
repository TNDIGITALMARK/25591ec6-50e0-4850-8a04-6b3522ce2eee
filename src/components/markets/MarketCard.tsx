'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import Link from 'next/link';

interface MarketCardProps {
  id: string;
  title: string;
  category: string;
  yesPrice: number;
  noPrice: number;
  volume: number;
  change: number;
  trending?: boolean;
}

export function MarketCard({
  id,
  title,
  category,
  yesPrice,
  noPrice,
  volume,
  change,
  trending = false,
}: MarketCardProps) {
  const isPositive = change >= 0;

  return (
    <Link href={`/market/${id}`} className="block">
      <div className="market-card group">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
        {trending && (
          <span className="flex items-center gap-1 text-xs font-medium text-turquoise">
            <TrendingUp className="w-3 h-3" />
            Trending
          </span>
        )}
      </div>

      {/* Market Title */}
      <h3 className="text-base font-semibold mb-4 line-clamp-2 group-hover:text-turquoise transition-colors">
        {title}
      </h3>

      {/* Price Display */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground mb-1">Yes</span>
          <span className="text-2xl font-bold text-success">
            {yesPrice}¢
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground mb-1">No</span>
          <span className="text-2xl font-bold text-destructive">
            {noPrice}¢
          </span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between text-xs border-t border-border pt-3">
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Volume:</span>
          <span className="font-semibold">${(volume / 1000).toFixed(1)}k</span>
        </div>
        <div className={`flex items-center gap-1 font-semibold ${isPositive ? 'text-success' : 'text-destructive'}`}>
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>
      </div>
    </Link>
  );
}
