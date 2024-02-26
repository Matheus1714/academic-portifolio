import { Outlet } from 'react-router-dom';
import { Container } from './styled';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
