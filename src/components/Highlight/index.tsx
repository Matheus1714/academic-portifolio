import { StrongText } from './styled';

interface HighlightProps {
  text: string;
}

export function HighlightedText({ text }: HighlightProps) {
  const renderHighlightedText = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;

    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (index % 2) {
        const word = part.replace(/\*\*/g, '');
        return <StrongText key={index}>{word}</StrongText>;
      } else {
        return part;
      }
    });
  };

  return <>{renderHighlightedText(text)}</>;
}
