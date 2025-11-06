'use client';

import { MarketHeader } from '@/components/markets/MarketHeader';
import { MarketFooter } from '@/components/markets/MarketFooter';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

export default function PortfolioPage() {
  const positions = [
    {
      id: '1',
      title: 'Will Bitcoin reach $100,000 by end of 2025?',
      shares: 100,
      avgPrice: 65,
      currentPrice: 68,
      position: 'Yes',
    },
    {
      id: '2',
      title: 'Will the S&P 500 exceed 6000 by year end?',
      shares: 150,
      avgPrice: 60,
      currentPrice: 63,
      position: 'Yes',
    },
    {
      id: '3',
      title: 'Will inflation fall below 2% by June 2025?',
      shares: 80,
      avgPrice: 42,
      currentPrice: 38,
      position: 'No',
    },
  ];

  const totalValue = positions.reduce(
    (sum, p) => sum + (p.shares * p.currentPrice) / 100,
    0
  );
  const totalCost = positions.reduce(
    (sum, p) => sum + (p.shares * p.avgPrice) / 100,
    0
  );
  const totalPnL = totalValue - totalCost;
  const pnlPercent = ((totalPnL / totalCost) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <MarketHeader />

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
          <p className="text-muted-foreground">Track your positions and performance</p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Total Value</span>
            </div>
            <p className="text-3xl font-bold">${totalValue.toFixed(2)}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Total Cost</span>
            </div>
            <p className="text-3xl font-bold">${totalCost.toFixed(2)}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              {totalPnL >= 0 ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive" />
              )}
              <span className="text-sm text-muted-foreground">Total P&L</span>
            </div>
            <p
              className={`text-3xl font-bold ${
                totalPnL >= 0 ? 'text-success' : 'text-destructive'
              }`}
            >
              {totalPnL >= 0 ? '+' : ''}${totalPnL.toFixed(2)}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              {parseFloat(pnlPercent) >= 0 ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive" />
              )}
              <span className="text-sm text-muted-foreground">Return</span>
            </div>
            <p
              className={`text-3xl font-bold ${
                parseFloat(pnlPercent) >= 0 ? 'text-success' : 'text-destructive'
              }`}
            >
              {parseFloat(pnlPercent) >= 0 ? '+' : ''}
              {pnlPercent}%
            </p>
          </div>
        </div>

        {/* Positions Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="text-xl font-bold">Open Positions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Market</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Position</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold">Shares</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold">Avg Price</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold">Current</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold">Value</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold">P&L</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((position) => {
                  const value = (position.shares * position.currentPrice) / 100;
                  const cost = (position.shares * position.avgPrice) / 100;
                  const pnl = value - cost;
                  const pnlPct = ((pnl / cost) * 100).toFixed(2);

                  return (
                    <tr key={position.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="max-w-md">
                          <p className="font-medium">{position.title}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            position.position === 'Yes'
                              ? 'bg-success/20 text-success'
                              : 'bg-destructive/20 text-destructive'
                          }`}
                        >
                          {position.position}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-medium">{position.shares}</td>
                      <td className="px-6 py-4 text-right font-medium">{position.avgPrice}¢</td>
                      <td className="px-6 py-4 text-right font-medium">{position.currentPrice}¢</td>
                      <td className="px-6 py-4 text-right font-bold">${value.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right">
                        <div className={`font-bold ${pnl >= 0 ? 'text-success' : 'text-destructive'}`}>
                          {pnl >= 0 ? '+' : ''}${pnl.toFixed(2)}
                        </div>
                        <div className={`text-xs ${pnl >= 0 ? 'text-success' : 'text-destructive'}`}>
                          ({pnl >= 0 ? '+' : ''}
                          {pnlPct}%)
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State for no positions */}
        {positions.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
            <p className="text-muted-foreground mb-6">
              Start trading to see your positions here
            </p>
            <a href="/dashboard" className="btn-primary inline-block px-6 py-3">
              Browse Markets
            </a>
          </div>
        )}
      </main>
      <MarketFooter />
    </div>
  );
}
