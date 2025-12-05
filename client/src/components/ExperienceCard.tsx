import { Building2, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  tags?: string[];
  logoUrl?: string;
  isLast?: boolean;
}

export default function ExperienceCard({
  role,
  company,
  location,
  startDate,
  endDate = 'Present',
  description,
  tags = [],
  logoUrl,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-border" />
      )}
      
      <Card className="overflow-visible hover-elevate">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            {logoUrl && (
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                <img src={logoUrl} alt={company} className="w-8 h-8 object-contain" />
              </div>
            )}
            {!logoUrl && (
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                <Building2 className="w-6 h-6 text-muted-foreground" />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {role}
              </h3>
              <p className="text-primary font-medium mb-2">{company}</p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {startDate} - {endDate}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
              </div>
              
              <ul className="space-y-2 mb-4">
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
              
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
