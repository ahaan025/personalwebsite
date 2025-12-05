import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  // todo: remove mock functionality
  return (
    <div className="max-w-md">
      <ProjectCard
        title="AI Code Assistant"
        description="An intelligent code assistant powered by GPT-4 that helps developers write better code with real-time suggestions and automated refactoring."
        tags={["Python", "TypeScript", "OpenAI", "React"]}
        liveUrl="https://example.com"
        githubUrl="https://github.com"
        stars={128}
        featured
      />
    </div>
  );
}
