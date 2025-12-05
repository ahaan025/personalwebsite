import { Users, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LeadershipCardProps {
  role: string;
  organization: string;
  location?: string;
  period?: string;
  description: string[];
}

export default function LeadershipCard({
  role,
  organization,
  location,
  period,
  description,
}: LeadershipCardProps) {
  return (
    <Card 
      className="overflow-visible hover-elevate"
      data-testid={`card-leadership-${organization.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {role}
            </h3>
            <p className="text-primary font-medium mb-2">{organization}</p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
              {period && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {period}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
              )}
            </div>
            
            <ul className="space-y-2">
              {description.map((item, index) => (
                <li key={index} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary mt-1.5 flex-shrink-0">
                    <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
