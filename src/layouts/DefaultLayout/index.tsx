import { Outlet } from 'react-router-dom';
import { Container } from './styled';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Layout() {

  const routes = [
    { route: '/', title: 'Home', default: true},
    { route: '/about', title: 'About' },
    { route: '/publications', title: 'Publications' },
    { route: '/presentations', title: 'Presentations' },
    { route: '/projects', title: 'Projects' },
  ];

  return (
    <Container>
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </Container>
  );
}
