interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 
        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        data-testid={`text-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
