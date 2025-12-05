import Navigation from '@/components/Navigation';
import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import PublicationCard from '@/components/PublicationCard';
import SkillsSection from '@/components/SkillsSection';
import AwardCard from '@/components/AwardCard';
import LeadershipCard from '@/components/LeadershipCard';
import Footer from '@/components/Footer';
import profileImage from '@assets/image_1764915114893.png';

import {
  profileData,
  aboutStats,
  aboutParagraphs,
  experiences,
  projects,
  publications,
  leadership,
  awards,
} from '@/data/portfolio-data';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingNav />
      
      <HeroSection 
        {...profileData} 
        imageUrl={profileImage}
      />
      
      <section id="about" className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08085C]/50 to-background" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionHeader
            title="About Me"
            subtitle="A brief introduction to who I am and what drives me"
          />
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="experience" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Experience"
            subtitle="Research and professional journey"
          />
          <div className="mt-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}`}
                {...experience}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            title="Projects"
            subtitle="Technical work and side projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="research" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Research & Publications"
            subtitle="Academic contributions and published work"
          />
          <div className="space-y-6">
            {publications.map((publication) => (
              <PublicationCard key={publication.title} {...publication} />
            ))}
          </div>
        </div>
      </section>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="relative">
          <SkillsSection />
        </div>
      </div>
      
      <section id="leadership" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Leadership & Involvement"
            subtitle="Making an impact beyond the classroom"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item) => (
              <LeadershipCard key={item.organization} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="awards" className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            title="Awards & Achievements"
            subtitle="Recognition for academic and competitive excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <AwardCard key={award.title} {...award} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer name={profileData.name} />
    </div>
  );
}
