import { CardContentContainer } from './styled';

interface CardContentProps {
  content: string;
}

export function CardContent({ content }: CardContentProps) {
  const validContentLength = 200;

  const reduceContent = () => {
    if (content.length <= validContentLength) {
      return content;
    }
    return content.substring(0, validContentLength).concat('...');
  };

  return <CardContentContainer>{reduceContent()}</CardContentContainer>;
}
