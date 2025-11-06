import Link from 'next/link';
import Image from 'next/image';

export function MarketFooter() {
  return (
    <footer className="border-t border-border mt-16 py-12 bg-background">
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
              Turn your insights into returns on the first regulated prediction market exchange.
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
  );
}
