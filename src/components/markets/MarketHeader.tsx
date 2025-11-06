'use client';

import { Search, User, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function MarketHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 mr-8 transition-opacity hover:opacity-90">
          <Image
            src="/generated/anthos-icon.png"
            alt="Anthos"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div className="font-bold text-xl">
            <span className="bg-purple-500">Anthos</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium flex-1">
          <a href="/dashboard" className="text-foreground hover:text-primary transition-colors">
            Markets
          </a>
          <a href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Activity
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Leaderboard
          </a>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search markets..."
              className="pl-10 bg-card border-border"
            />
          </div>

          {/* User Menu */}
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden ml-auto">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
