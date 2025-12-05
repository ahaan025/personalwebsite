import { ExternalLink, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PublicationCardProps {
  title: string;
  authors: string[];
  highlightAuthor?: string;
  venue: string;
  year: string;
  abstract?: string;
  paperUrl?: string;
  venueLogoUrl?: string;
}

export default function PublicationCard({
  title,
  authors,
  highlightAuthor,
  venue,
  year,
  abstract,
  paperUrl,
  venueLogoUrl,
}: PublicationCardProps) {
  return (
    <Card 
      className="overflow-visible hover-elevate"
      data-testid={`card-publication-${title.toLowerCase().replace(/\s+/g, '-').slice(0, 30)}`}
    >
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          {venueLogoUrl && (
            <div className="flex-shrink-0 w-16 h-16 rounded-md bg-muted flex items-center justify-center overflow-hidden">
              <img src={venueLogoUrl} alt={venue} className="w-12 h-12 object-contain" />
            </div>
          )}
          {!venueLogoUrl && (
            <div className="flex-shrink-0 w-16 h-16 rounded-md bg-muted flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="default">{venue}</Badge>
              <Badge variant="secondary">{year}</Badge>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
              {title}
            </h3>
            
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
              <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="line-clamp-2">
                {authors.map((author, index) => (
                  <span key={author}>
                    {author === highlightAuthor ? (
                      <span className="text-primary font-medium">{author}</span>
                    ) : (
                      author
                    )}
                    {index < authors.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </div>
            
            {abstract && (
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {abstract}
              </p>
            )}
            
            {paperUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(paperUrl, '_blank')}
                data-testid="button-read-paper"
              >
                <ExternalLink className="w-4 h-4" />
                Read Paper
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
