import { ReactNode } from 'react';
import { CardRootContainer } from './styled';

interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return <CardRootContainer>{children}</CardRootContainer>;
}
