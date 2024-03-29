import { PresentationProps, presentations } from '../../data/presentations';
import { Container } from './styled';
import { Card } from '../../components/Card';

export function Presentations() {
  return (
    <Container>
      {presentations.map((presentation: PresentationProps) => (
        <Card.Root key={presentation.title}>
          <Card.Image
            url={presentation.image.url}
            description={presentation.image.description}
          />
          <Card.Title title={presentation.title} />
          <Card.Subtitle subtitle={presentation.date} />
          <Card.Content content={presentation.summary} />
          <Card.Button
            title="Presentation"
            url={presentation.id}
            useNav={true}
          />
        </Card.Root>
      ))}
    </Container>
  );
}
