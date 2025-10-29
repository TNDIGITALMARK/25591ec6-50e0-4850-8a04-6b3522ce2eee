// Mock data for MarketVibe marketplace

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  seller: string;
  inStock: boolean;
}

export interface Order {
  id: string;
  product: string;
  image: string;
  price: number;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  quantity: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Professional Wireless Headphones',
    description: 'Premium over-ear headphones with active noise cancellation',
    price: 89.99,
    image: '/generated/headphones.png',
    rating: 4.7,
    reviews: 234,
    category: 'Electronics',
    seller: 'TechGear_Pro',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Speaker with Voice Assistant',
    description: 'High-quality smart speaker with built-in voice assistant',
    price: 129.99,
    image: '/generated/speaker.png',
    rating: 4.5,
    reviews: 189,
    category: 'Electronics',
    seller: 'SmartHome_Hub',
    inStock: true,
  },
  {
    id: '3',
    name: 'Ergonomic Wireless Mouse',
    description: 'Comfortable ergonomic design with precision tracking',
    price: 49.99,
    image: '/generated/mouse.png',
    rating: 4.8,
    reviews: 412,
    category: 'Accessories',
    seller: 'ComputerWorld',
    inStock: true,
  },
  {
    id: '4',
    name: 'Fitness Smartwatch',
    description: 'Track your health and fitness with advanced sensors',
    price: 199.99,
    image: '/generated/smartwatch.png',
    rating: 4.6,
    reviews: 567,
    category: 'Wearables',
    seller: 'FitTech_Store',
    inStock: true,
  },
  {
    id: '5',
    name: 'Consumer Drone with 4K Camera',
    description: 'Professional-grade drone with stabilized 4K camera',
    price: 799.99,
    image: '/generated/drone.png',
    rating: 4.9,
    reviews: 156,
    category: 'Electronics',
    seller: 'SkyVision_Tech',
    inStock: false,
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    product: 'Wireless Headphones',
    image: '/generated/headphones.png',
    price: 89.99,
    date: '2024-01-15',
    status: 'delivered',
    quantity: 1,
  },
  {
    id: 'ORD-002',
    product: 'Smart Speaker',
    image: '/generated/speaker.png',
    price: 129.99,
    date: '2024-01-18',
    status: 'shipped',
    quantity: 2,
  },
];

export const dashboardStats = {
  recentOrdersCount: 12,
  totalSalesThisMonth: 2847.50,
  activeListings: 23,
  messagesUnread: 4,
  trendingCategory: 'Electronics',
  recommendedProducts: [
    'Wireless Headphones',
    'Smartphone Cases',
    'Laptop Stands',
  ],
};

export const sellerDashboardStats = {
  monthlyRevenue: 3420.75,
  totalProductsSold: 156,
  currentInventoryItems: 45,
  pendingOrders: 8,
  sellerRating: 4.9,
  responseTime: 'Under 2 hours',
};

// Simulated chart data
export const salesChartData = [
  { month: 'Jan', sales: 1200 },
  { month: 'Feb', sales: 1900 },
  { month: 'Mar', sales: 1500 },
  { month: 'Apr', sales: 2200 },
  { month: 'May', sales: 2800 },
  { month: 'Jun', sales: 3100 },
];

export const categoryData = [
  { category: 'Electronics', value: 45, color: '#5b7fe6' },
  { category: 'Accessories', value: 25, color: '#ff8563' },
  { category: 'Wearables', value: 20, color: '#fbbf24' },
  { category: 'Others', value: 10, color: '#6b7280' },
];
