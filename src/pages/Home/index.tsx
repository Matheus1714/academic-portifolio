import { CursorAnimation } from '../../components/Cursor';
import { Phrase } from '../../components/Phrase';
import { HOME } from '../../config';
import { Container } from './styled';


export function Home() {
  return (
    <Container>
      <CursorAnimation
        firstText={HOME.firstText}
        secondText={HOME.secondText}
      />
      <Phrase
        author={HOME.phrase.author}
        text={HOME.phrase.text}
      />
    </Container>
  );
}
