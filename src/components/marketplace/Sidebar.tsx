'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  MessageSquare,
  BarChart3,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Package, label: 'Orders', href: '/dashboard/orders' },
  { icon: ShoppingBag, label: 'Listings', href: '/dashboard/listings' },
  { icon: Users, label: 'Customers', href: '/dashboard/customers' },
  { icon: MessageSquare, label: 'Messages', href: '/dashboard/messages' },
  { icon: BarChart3, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-accent text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
