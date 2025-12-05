import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Awards', href: '#awards' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/60 backdrop-blur-2xl border-b border-border/50'
            : 'bg-transparent'
        }`}
        data-testid="navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              data-testid="link-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              AM
            </a>

            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-border/30">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="relative px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-primary/10"
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    {index < navItems.length - 1 && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-border/50" />
                    )}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="ml-4 gap-2 rounded-full border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                data-testid="button-resume"
                onClick={() => console.log('Resume download triggered')}
              >
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-card border-l border-border p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                className="mt-4 gap-2"
                data-testid="button-mobile-resume"
              >
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
