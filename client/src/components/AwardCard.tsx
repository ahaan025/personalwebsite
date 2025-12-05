import { Trophy, Calendar, Award as AwardIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AwardCardProps {
  title: string;
  organization: string;
  date?: string;
  description?: string;
  logoUrl?: string;
}

export default function AwardCard({
  title,
  organization,
  date,
  description,
  logoUrl,
}: AwardCardProps) {
  return (
    <Card 
      className="overflow-visible hover-elevate"
      data-testid={`card-award-${title.toLowerCase().replace(/\s+/g, '-').slice(0, 30)}`}
    >
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          {logoUrl && (
            <div className="flex-shrink-0 w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden">
              <img src={logoUrl} alt={organization} className="w-8 h-8 object-contain" />
            </div>
          )}
          {!logoUrl && (
            <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground mb-1 leading-tight">
              {title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                <AwardIcon className="w-3 h-3 mr-1" />
                {organization}
              </Badge>
              {date && (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {date}
                </span>
              )}
            </div>
            
            {description && (
              <p className="text-muted-foreground text-sm">
                {description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
