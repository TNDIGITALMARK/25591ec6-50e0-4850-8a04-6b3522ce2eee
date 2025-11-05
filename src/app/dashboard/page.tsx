'use client';

import { useState } from 'react';
import { MarketHeader } from '@/components/markets/MarketHeader';
import { MarketCard } from '@/components/markets/MarketCard';
import { mockMarkets, categories, marketStats } from '@/lib/mock-markets';
import { TrendingUp, Activity, Users, BarChart3 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Markets');

  const filteredMarkets =
    selectedCategory === 'All Markets'
      ? mockMarkets
      : mockMarkets.filter((market) => market.category === selectedCategory);

  return (
    <div className="min-h-screen bg-light-blue">
      <MarketHeader />

      <main className="container py-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Volume</span>
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">
              ${(marketStats.totalVolume / 1000000).toFixed(1)}M
            </p>
            <p className="text-xs text-success mt-1">+23% this week</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Active Markets</span>
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">{marketStats.activeMarkets.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {marketStats.marketsToday} new today
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Traders</span>
              <Users className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">{marketStats.totalUsers.toLocaleString()}</p>
            <p className="text-xs text-success mt-1">+12% this month</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Avg. Volume</span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">$19.6k</p>
            <p className="text-xs text-success mt-1">+8.4% today</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Trade the Future
          </h1>
          <p className="text-lg text-muted-foreground">
            The first regulated exchange where you can trade on real-world events
          </p>
        </div>

        {/* Trending Markets Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Trending Markets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockMarkets
              .filter((market) => market.trending)
              .map((market) => (
                <MarketCard key={market.id} {...market} />
              ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-6">
          <Tabs defaultValue="All Markets" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto bg-card border border-border p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* All Markets Grid */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            {selectedCategory === 'All Markets' ? 'All Markets' : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMarkets.map((market) => (
              <MarketCard key={market.id} {...market} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="btn-secondary px-8 py-3">
            Load More Markets
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div className="md:col-span-1">
              <Link href="/dashboard" className="flex items-center gap-3 mb-4">
                <Image
                  src="/generated/anthos-icon.png"
                  alt="Anthos"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-foreground">Anthos</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                Trade the future with confidence on the first regulated prediction market exchange.
              </p>
            </div>

            {/* Markets Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Markets</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Economics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Politics
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Learn</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Trading Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Risk Disclosure
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Anthos. CFTC-regulated exchange. Trading involves risk.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
