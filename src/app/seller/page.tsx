'use client';

import { useState } from 'react';
import { Header } from '@/components/marketplace/Header';
import { Footer } from '@/components/marketplace/Footer';
import { Sidebar } from '@/components/marketplace/Sidebar';
import { StatCard } from '@/components/marketplace/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DollarSign,
  Package,
  ShoppingBag,
  Clock,
  Star,
  Plus,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';
import { sellerDashboardStats, mockProducts } from '@/lib/mock-data';

export default function SellerPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <div className="container mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Seller Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your inventory, track sales, and grow your business
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Monthly Revenue"
                value={`$${sellerDashboardStats.monthlyRevenue.toFixed(2)}`}
                change="+18.2%"
                changeType="positive"
                icon={DollarSign}
              />
              <StatCard
                title="Products Sold"
                value={sellerDashboardStats.totalProductsSold}
                change="+12 today"
                changeType="positive"
                icon={Package}
              />
              <StatCard
                title="Active Listings"
                value={sellerDashboardStats.currentInventoryItems}
                change="3 pending"
                changeType="neutral"
                icon={ShoppingBag}
              />
              <StatCard
                title="Pending Orders"
                value={sellerDashboardStats.pendingOrders}
                change="2 urgent"
                changeType="neutral"
                icon={Clock}
              />
              <StatCard
                title="Seller Rating"
                value={sellerDashboardStats.sellerRating}
                change="234 reviews"
                changeType="positive"
                icon={Star}
              />
              <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        Response Time
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {sellerDashboardStats.responseTime}
                      </p>
                      <p className="text-sm font-medium mt-1 text-green-600">
                        Excellent
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-accent rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="add-product">Add Product</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Sales Chart */}
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">
                        Recent Sales
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { month: 'Jan', amount: 1200 },
                          { month: 'Feb', amount: 1900 },
                          { month: 'Mar', amount: 1500 },
                          { month: 'Apr', amount: 2200 },
                          { month: 'May', amount: 2800 },
                          { month: 'Jun', amount: 3100 },
                        ].map((item) => (
                          <div key={item.month}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-600">
                                {item.month}
                              </span>
                              <span className="text-sm font-bold text-gray-900">
                                ${item.amount}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-coral h-2 rounded-full"
                                style={{ width: `${(item.amount / 3500) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Top Products */}
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">
                        Top Performing Products
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockProducts.slice(0, 4).map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gray-200 rounded" />
                              <div>
                                <p className="font-semibold text-sm text-gray-900">
                                  {product.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {product.category}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-sm text-gray-900">
                                ${product.price}
                              </p>
                              <p className="text-xs text-green-600">
                                +{Math.floor(Math.random() * 30)}% sales
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Inventory Tab */}
              <TabsContent value="inventory">
                <Card className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold">
                        Product Inventory
                      </CardTitle>
                      <Button className="btn-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                      </Button>
                    </div>
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
                              Category
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Price
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Stock
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Status
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockProducts.map((product) => (
                            <tr
                              key={product.id}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gray-200 rounded" />
                                  <span className="font-medium text-sm">
                                    {product.name}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {product.category}
                              </td>
                              <td className="py-3 px-4 text-sm font-bold">
                                ${product.price}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {product.inStock ? (
                                  <span className="text-green-600 font-medium">
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="text-red-600 font-medium">
                                    Out of Stock
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    product.inStock
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-red-100 text-red-700'
                                  }`}
                                >
                                  {product.inStock ? 'Active' : 'Inactive'}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button size="sm" variant="ghost">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-red-600 hover:text-red-700"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      Recent Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Order ID
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Customer
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Product
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Amount
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Status
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              id: 'ORD-1234',
                              customer: 'John Smith',
                              product: 'Wireless Headphones',
                              amount: 89.99,
                              status: 'Processing',
                              date: '2024-01-20',
                            },
                            {
                              id: 'ORD-1235',
                              customer: 'Sarah Johnson',
                              product: 'Smart Speaker',
                              amount: 129.99,
                              status: 'Shipped',
                              date: '2024-01-19',
                            },
                            {
                              id: 'ORD-1236',
                              customer: 'Mike Davis',
                              product: 'Ergonomic Mouse',
                              amount: 49.99,
                              status: 'Delivered',
                              date: '2024-01-18',
                            },
                          ].map((order) => (
                            <tr
                              key={order.id}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-3 px-4 font-medium text-sm">
                                {order.id}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {order.customer}
                              </td>
                              <td className="py-3 px-4 text-sm">
                                {order.product}
                              </td>
                              <td className="py-3 px-4 text-sm font-bold">
                                ${order.amount}
                              </td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    order.status === 'Delivered'
                                      ? 'bg-green-100 text-green-700'
                                      : order.status === 'Shipped'
                                      ? 'bg-blue-100 text-blue-700'
                                      : 'bg-yellow-100 text-yellow-700'
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-sm text-gray-600">
                                {order.date}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      Sales Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <p className="text-3xl font-bold text-blue-accent mb-2">
                          $12,345
                        </p>
                        <p className="text-sm text-gray-600">Total Revenue</p>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <p className="text-3xl font-bold text-green-600 mb-2">
                          456
                        </p>
                        <p className="text-sm text-gray-600">Total Orders</p>
                      </div>
                      <div className="text-center p-6 bg-orange-50 rounded-lg">
                        <p className="text-3xl font-bold text-coral mb-2">
                          $27.05
                        </p>
                        <p className="text-sm text-gray-600">
                          Average Order Value
                        </p>
                      </div>
                    </div>
                    <p className="text-center text-gray-600">
                      Detailed analytics charts will be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Add Product Tab */}
              <TabsContent value="add-product">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      Add New Product
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Name
                          </label>
                          <Input placeholder="Enter product name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-200 rounded-md">
                            <option>Electronics</option>
                            <option>Accessories</option>
                            <option>Wearables</option>
                            <option>Audio & Video</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price
                          </label>
                          <Input type="number" placeholder="0.00" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stock Quantity
                          </label>
                          <Input type="number" placeholder="0" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <Textarea
                          placeholder="Enter product description"
                          rows={4}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Images
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <p className="text-gray-600 mb-2">
                            Drag and drop images here, or click to select
                          </p>
                          <Button variant="outline" type="button">
                            Select Files
                          </Button>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button type="submit" className="btn-primary">
                          Publish Product
                        </Button>
                        <Button type="button" variant="outline">
                          Save as Draft
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
