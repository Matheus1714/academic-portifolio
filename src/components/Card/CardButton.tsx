import { CardButtonContainer } from './styled';
import { useNavigate } from 'react-router-dom';

interface CardButtonProps {
  title: string;
  url: string;
  useNav?: boolean;
}

export function CardButton({ title, url, useNav = false }: CardButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (useNav) {
      const currentPath = window.location.pathname;
      const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
      const newPath = `${basePath}/${url}`;
      navigate(newPath);
    } else {
      window.open(url, '_blanck');
    }
  };

  return (
    <CardButtonContainer onClick={handleClick}>{title}</CardButtonContainer>
  );
}
