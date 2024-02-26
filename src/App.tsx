import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { renderTheme } from './styles/render-theme';

export function App() {
  return renderTheme(
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
  );
}
