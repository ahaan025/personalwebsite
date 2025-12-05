import ExperienceCard from '../ExperienceCard';

export default function ExperienceCardExample() {
  // todo: remove mock functionality
  return (
    <ExperienceCard
      role="Software Engineering Intern"
      company="Google"
      location="Mountain View, CA"
      startDate="May 2024"
      endDate="Aug 2024"
      description={[
        "Developed a machine learning pipeline that improved model training efficiency by 40%",
        "Collaborated with a team of 5 engineers to ship a new feature to 10M+ users",
        "Implemented automated testing that increased code coverage from 60% to 95%",
      ]}
      tags={["Python", "TensorFlow", "Kubernetes", "GCP"]}
    />
  );
}
