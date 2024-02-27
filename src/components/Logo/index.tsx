import { Container } from './styled';

interface LogoProps{
  title: string;
  subtitle?: string;
  simplify?: boolean
}

export function Logo({
  title, 
  subtitle = "", 
  simplify = false
}: LogoProps) {
  const generateTitle = () => {
    if(!simplify){
      return title;
    }
    return title[0].concat(title[title.length - 1]).toUpperCase();
  }

  const generatedTitle = generateTitle();
  const showSubtitle = subtitle && !simplify;

  return (
    <Container>
      <h1>{generatedTitle}</h1>
      {showSubtitle && <p>{subtitle}</p>}
    </Container>
  );
}
