import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
  stars,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`group overflow-visible hover-elevate transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {featured && (
            <Badge className="absolute top-3 right-3" variant="default">
              Featured
            </Badge>
          )}
        </div>
      )}
      
      <CardContent className={`${imageUrl ? 'pt-4' : 'pt-6'} pb-2`}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          {stars !== undefined && stars > 0 && (
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span>{stars}</span>
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 gap-2 flex-wrap">
        {liveUrl && (
          <Button
            variant="default"
            size="sm"
            className="gap-2"
            onClick={() => window.open(liveUrl, '_blank')}
            data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open(githubUrl, '_blank')}
            data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Github className="w-4 h-4" />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
