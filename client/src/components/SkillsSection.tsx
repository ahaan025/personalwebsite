import { 
  SiPython, SiNumpy, SiPandas, SiGit, SiGithub
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Brain, Database, Code2, Terminal, Cpu, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { skillCategories, additionalInfo } from '@/data/portfolio-data';

const iconMap: Record<string, JSX.Element> = {
  "Python": <SiPython className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Java": <FaJava className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "NumPy": <SiNumpy className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Pandas": <SiPandas className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Matplotlib": <BarChart3 className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Git": <SiGit className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "GitHub": <SiGithub className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Terminal": <Terminal className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "DSA": <Code2 className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Machine Learning": <Brain className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "OOP Design": <Database className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Quantum Info": <Cpu className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I work with
          </p>
        </div>
        
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <Card 
                    key={skill} 
                    className="group overflow-visible hover-elevate border-border/50"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2 min-w-[80px]">
                      {iconMap[skill] || <Code2 className="w-8 h-8 text-foreground/80 group-hover:text-primary transition-colors" />}
                      <span className="text-xs text-muted-foreground text-center">
                        {skill}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-visible border-border/50">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Coursework</h4>
              <p className="text-sm text-muted-foreground">
                {additionalInfo.coursework}
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-visible border-border/50">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Languages</h4>
              <p className="text-sm text-muted-foreground">
                {additionalInfo.languages}
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-visible border-border/50">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Interests</h4>
              <p className="text-sm text-muted-foreground">
                {additionalInfo.interests}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
