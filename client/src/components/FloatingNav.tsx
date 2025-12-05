import { useState, useEffect } from 'react';
import { Home, Briefcase, FolderGit2, GraduationCap, Code2, Trophy, User, BookOpen } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'research', label: 'Research', icon: BookOpen },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'leadership', label: 'Leadership', icon: GraduationCap },
  { id: 'awards', label: 'Awards', icon: Trophy },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      data-testid="floating-nav"
    >
      <div className="relative flex flex-col gap-3 p-2 rounded-full bg-card/80 backdrop-blur-xl border border-border/50">
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 transition-all duration-300"
          style={{
            top: `${8 + navItems.findIndex(item => item.id === activeSection) * 44}px`,
          }}
        />
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <Tooltip key={item.id} delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border border-primary/50 animate-pulse" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" className="ml-2">
                {item.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      
      <div className="absolute -left-1 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
    </nav>
  );
}
