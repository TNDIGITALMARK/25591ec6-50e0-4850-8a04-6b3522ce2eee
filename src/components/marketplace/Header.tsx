import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <Image
            src="/generated/anthos-icon.png"
            alt="Anthos"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-foreground">Anthos</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="text-white hover:text-coral-orange transition-colors font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/products"
            className="text-white hover:text-coral-orange transition-colors font-medium"
          >
            Products
          </Link>
          <Link
            href="/seller"
            className="text-white hover:text-coral-orange transition-colors font-medium"
          >
            Seller Center
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 bg-white border-0 focus:ring-2 focus:ring-coral-orange"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-coral-orange hover:bg-slate-700"
          >
            <User className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-coral-orange hover:bg-slate-700 relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-coral text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-coral-orange hover:bg-slate-700"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
