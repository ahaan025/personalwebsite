import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  // todo: remove mock functionality
  const mockData = {
    name: "Your Name",
    titles: [
      "Computer Science @ Brown University",
      "Full-Stack Developer",
      "AI/ML Researcher",
      "Open Source Contributor",
      "Problem Solver",
    ],
    bio: "Passionate about building elegant solutions to complex problems. Currently exploring the intersection of artificial intelligence and software engineering while pursuing my degree at Brown University.",
    imageUrl: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "your.email@brown.edu",
    phone: "+1 (555) 123-4567",
    location: "Providence, RI",
  };

  return <HeroSection {...mockData} />;
}
