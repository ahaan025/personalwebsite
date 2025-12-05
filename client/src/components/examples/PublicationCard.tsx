import PublicationCard from '../PublicationCard';

export default function PublicationCardExample() {
  // todo: remove mock functionality
  return (
    <PublicationCard
      title="Addressing Data Imbalance in Plant Disease Recognition through Contrastive Learning"
      authors={["Your Name", "Jane Smith", "John Doe", "Dr. Professor"]}
      highlightAuthor="Your Name"
      venue="IEEE ICCC"
      year="2024"
      abstract="The following study introduces a novel framework for recognizing plant diseases, tackling the issue of imbalanced datasets, which is prevalent in agriculture. Plant diseases can significantly affect crop quality and yield, making early and accurate detection vital for effective disease management."
      paperUrl="https://ieeexplore.ieee.org"
    />
  );
}
