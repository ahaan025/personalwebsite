import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, MousePointer2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  name: string;
  titles: string[];
  bio: string;
  imageUrl?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  location?: string;
}

export default function HeroSection({
  name,
  titles,
  bio,
  imageUrl,
  github,
  linkedin,
  email,
  phone,
  location,
}: HeroSectionProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typeSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && displayedText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentTitle.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[#08085C]" />
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              data-testid="text-name"
            >
              {name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg sm:text-xl md:text-2xl font-mono text-muted-foreground">
                <span className="text-primary">{'> '}</span>
                {displayedText}
                <span className="animate-pulse text-primary">_</span>
              </span>
            </div>

            <p 
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              data-testid="text-bio"
            >
              {bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              {github && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open(github, '_blank')}
                  data-testid="link-github"
                >
                  <Github className="w-5 h-5" />
                </Button>
              )}
              {linkedin && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open(linkedin, '_blank')}
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              )}
              {email && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open(`mailto:${email}`, '_blank')}
                  data-testid="link-email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              )}
              {phone && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open(`tel:${phone}`, '_blank')}
                  data-testid="link-phone"
                >
                  <Phone className="w-5 h-5" />
                </Button>
              )}
              
              <div className="h-6 w-px bg-border/50 mx-2 hidden sm:block" />
              
              {location && (
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
              )}
            </div>

            <Button
              size="lg"
              className="rounded-full gap-2 bg-gradient-to-r from-primary to-cyan-500 hover:opacity-90 transition-opacity"
              onClick={scrollToAbout}
              data-testid="button-view-work"
            >
              <MousePointer2 className="w-4 h-4" />
              View My Work
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-cyan-400/30 to-primary/30 rounded-full blur-2xl opacity-60 animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full opacity-75" />
            <Avatar className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 border-4 border-background">
              <AvatarImage src={imageUrl} alt={name} className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-card">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
