import { CardSubtileContainer } from './styled';

interface CardSubtitleProps {
  subtitle: string;
}

export function CardSubtitle({ subtitle }: CardSubtitleProps) {
  return <CardSubtileContainer>{subtitle}</CardSubtileContainer>;
}
