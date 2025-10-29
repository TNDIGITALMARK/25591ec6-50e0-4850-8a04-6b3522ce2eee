import { Header } from '@/components/marketplace/Header';
import { Sidebar } from '@/components/marketplace/Sidebar';
import { StatCard } from '@/components/marketplace/StatCard';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Package,
  DollarSign,
  ShoppingBag,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import { mockProducts, dashboardStats, salesChartData } from '@/lib/mock-data';

export default function DashboardPage() {
  const trendingProducts = mockProducts.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          {/* Hero Banner */}
          <div className="gradient-hero py-12 px-6 text-white">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold mb-2">
                Unlock Your E-commerce Potential
              </h1>
              <p className="text-lg opacity-90">
                Manage, Analyze, Grow Your Business
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 py-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Recent Orders"
                value={dashboardStats.recentOrdersCount}
                change="+12.5%"
                changeType="positive"
                icon={Package}
              />
              <StatCard
                title="Total Sales"
                value={`$${dashboardStats.totalSalesThisMonth.toFixed(2)}`}
                change="+23%"
                changeType="positive"
                icon={DollarSign}
              />
              <StatCard
                title="Active Listings"
                value={dashboardStats.activeListings}
                change="+5"
                changeType="positive"
                icon={ShoppingBag}
              />
              <StatCard
                title="Unread Messages"
                value={dashboardStats.messagesUnread}
                change="2 new"
                changeType="neutral"
                icon={MessageSquare}
              />
            </div>

            {/* Trending Items Section */}
            <Card className="mb-8 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Trending Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {trendingProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bottom Row: Sales Analytics & Top Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Overview Chart */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-accent" />
                    Sales Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salesChartData.map((item, index) => (
                      <div key={item.month}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">
                            {item.month}
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            ${item.sales.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-accent h-2 rounded-full transition-all"
                            style={{
                              width: `${(item.sales / 3500) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Categories */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Top Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 200 200" className="transform -rotate-90">
                          {/* Donut Chart Segments */}
                          <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="#5b7fe6"
                            strokeWidth="40"
                            strokeDasharray="226 452"
                            strokeDashoffset="0"
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="#ff8563"
                            strokeWidth="40"
                            strokeDasharray="113 452"
                            strokeDashoffset="-226"
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="40"
                            strokeDasharray="90 452"
                            strokeDashoffset="-339"
                          />
                          <circle
                            cx="100"
                            cy="100"
                            r="80"
                            fill="none"
                            stroke="#6b7280"
                            strokeWidth="40"
                            strokeDasharray="45 452"
                            strokeDashoffset="-429"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-accent" />
                          <span className="text-sm font-medium">Electronics</span>
                        </div>
                        <span className="text-sm font-bold">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-coral" />
                          <span className="text-sm font-medium">Accessories</span>
                        </div>
                        <span className="text-sm font-bold">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#fbbf24' }} />
                          <span className="text-sm font-medium">Wearables</span>
                        </div>
                        <span className="text-sm font-bold">20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-500" />
                          <span className="text-sm font-medium">Others</span>
                        </div>
                        <span className="text-sm font-bold">10%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity Table */}
            <Card className="mt-6 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                          Product
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                          Sales
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                          Stock
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                          Price
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded" />
                            <span className="font-medium text-sm">
                              Wireless Headphones
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">$150,000</td>
                        <td className="py-3 px-4 text-sm">8653</td>
                        <td className="py-3 px-4 text-sm font-bold">$89</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 text-sm font-medium">29%</span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded" />
                            <span className="font-medium text-sm">
                              Smart Speaker
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">$98,000</td>
                        <td className="py-3 px-4 text-sm">1435</td>
                        <td className="py-3 px-4 text-sm font-bold">$129</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 text-sm font-medium">23%</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded" />
                            <span className="font-medium text-sm">
                              Ergonomic Mouse
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm font-medium">$110,000</td>
                        <td className="py-3 px-4 text-sm">1854</td>
                        <td className="py-3 px-4 text-sm font-bold">$49</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 text-sm font-medium">19%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-primary">
                    Start Your 2-Year Trial Today
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-navy text-white py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    Blog Post
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral-orange transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm">hello@marketvibe.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-coral-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-coral-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
