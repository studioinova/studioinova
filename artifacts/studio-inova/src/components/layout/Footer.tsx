import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Studio Inova"
                className="h-8 w-auto"
              />
              <span className="font-display font-bold text-lg text-foreground">
                Studio Inova
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              We are a digital studio focused on building simple apps, AI-powered tools, and clean digital experiences for the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4 text-center">Legal                      </h4>
            <div className="flex items-center gap-2">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">Privacy Policy</Link>
              <span className="text-muted-foreground/40 select-none">|</span>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Studio Inova.</p>
        </div>
      </div>
    </footer>
  );
}
