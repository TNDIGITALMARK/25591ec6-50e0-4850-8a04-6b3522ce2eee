'use client';

import { useParams } from 'next/navigation';
import { MarketHeader } from '@/components/markets/MarketHeader';
import { MarketFooter } from '@/components/markets/MarketFooter';
import { mockMarkets } from '@/lib/mock-markets';
import { TrendingUp, TrendingDown, Clock, Users, BarChart3, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function MarketDetailPage() {
  const params = useParams();
  const market = mockMarkets.find((m) => m.id === params.id) || mockMarkets[0];

  return (
    <div className="min-h-screen bg-background">
      <MarketHeader />

      <main className="container py-8">
        {/* Back Button */}
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Markets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Market Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-1 bg-card border border-border rounded">
                  {market.category}
                </span>
                {market.trending && (
                  <span className="flex items-center gap-1 text-xs font-medium text-primary px-2 py-1 bg-primary/10 border border-primary/20 rounded">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-4">{market.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{(market.volume / 100).toFixed(0)} traders</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>${(market.volume / 1000).toFixed(1)}k volume</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Closes Dec 31, 2025</span>
                </div>
              </div>
            </div>

            {/* Price Chart Area */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Price History</h2>
              <div className="h-64 flex items-end justify-between gap-2">
                {/* Simplified bar chart visualization */}
                {[45, 52, 48, 55, 62, 58, 65, 68, 64, 70, 67, 68].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-success/20 hover:bg-success/30 transition-colors rounded-t"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Description */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-3">About this Market</h2>
              <p className="text-muted-foreground leading-relaxed">
                This market will resolve to "Yes" if {market.title.toLowerCase()} occurs by the specified deadline.
                The market is based on verified, publicly available data from reputable sources. All trades are
                subject to CFTC regulations and market rules.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <h3 className="font-semibold mb-2">Resolution Criteria</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Market resolves based on official public data</li>
                  <li>Data will be verified from multiple sources</li>
                  <li>Resolution occurs within 24 hours of event conclusion</li>
                </ul>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  { user: 'Trader1234', action: 'bought', amount: 150, price: 68, time: '2 min ago' },
                  { user: 'MarketPro', action: 'sold', amount: 80, price: 67, time: '5 min ago' },
                  { user: 'InvestorX', action: 'bought', amount: 200, price: 68, time: '8 min ago' },
                  { user: 'TradeKing', action: 'bought', amount: 120, price: 67, time: '12 min ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-muted-foreground">
                        {activity.action} {activity.amount} shares at {activity.price}¢
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trading Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Current Prices */}
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h2 className="text-lg font-semibold mb-4">Current Prices</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Yes</span>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-success">{market.yesPrice}¢</span>
                      {market.change >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">No</span>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-destructive">{market.noPrice}¢</span>
                      {market.change < 0 ? (
                        <TrendingUp className="w-4 h-4 text-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trading Panel */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Place Order</h2>
                <div className="space-y-4">
                  {/* Order Type */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="btn-yes w-full">
                      Buy Yes
                    </button>
                    <button className="btn-no w-full">
                      Buy No
                    </button>
                  </div>

                  {/* Shares Input */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Shares</label>
                    <Input type="number" placeholder="100" defaultValue="100" />
                  </div>

                  {/* Price Input */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Limit Price</label>
                    <Input type="number" placeholder="68" defaultValue={market.yesPrice.toString()} />
                  </div>

                  {/* Order Summary */}
                  <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shares</span>
                      <span className="font-medium">100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price per share</span>
                      <span className="font-medium">{market.yesPrice}¢</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="font-semibold">Total Cost</span>
                      <span className="font-bold">${((market.yesPrice * 100) / 100).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full btn-primary">
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing this order, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MarketFooter />
    </div>
  );
}
