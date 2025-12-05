import { Github, Linkedin, Mail, Heart, ExternalLink, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/portfolio-data';

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 py-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#08085C]/30 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Applied Mathematics & Computer Science<br />
              Brown University, Class of 2029
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => window.open(socialLinks.github, '_blank')}
                  data-testid="link-footer-github"
                >
                  <Github className="w-5 h-5" />
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => window.open(socialLinks.linkedin, '_blank')}
                  data-testid="link-footer-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              )}
              {socialLinks.email && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => window.open(`mailto:${socialLinks.email}`, '_blank')}
                  data-testid="link-footer-email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              )}
              {socialLinks.instagram && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => window.open(socialLinks.instagram, '_blank')}
                  data-testid="link-footer-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              )}
              {socialLinks.twitter && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => window.open(socialLinks.twitter, '_blank')}
                  data-testid="link-footer-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              )}
              {socialLinks.youtube && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => window.open(socialLinks.youtube, '_blank')}
                  data-testid="link-footer-youtube"
                >
                  <Youtube className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {['About', 'Experience', 'Projects', 'Research', 'Skills', 'Leadership', 'Awards'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  data-testid={`link-footer-${item.toLowerCase()}`}
                >
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Get In Touch
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              I'm always open to discussing new opportunities, research collaborations, or just having a chat about technology and space.
            </p>
            {socialLinks.email && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/30 hover:border-primary/60"
                onClick={() => window.open(`mailto:${socialLinks.email}`, '_blank')}
              >
                <Mail className="w-4 h-4" />
                Say Hello
              </Button>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {currentYear} {name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
