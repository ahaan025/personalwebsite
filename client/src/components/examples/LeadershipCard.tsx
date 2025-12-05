import LeadershipCard from '../LeadershipCard';

export default function LeadershipCardExample() {
  return (
    <LeadershipCard
      role="Chief Organizer"
      organization="TISB Hacks"
      description={[
        "Directed India's largest student-run high school hackathon with 230+ participants from 8 countries",
        "Secured ₹250,000+ in sponsorship and managed cross-functional teams",
      ]}
    />
  );
}
