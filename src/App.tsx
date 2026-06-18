import { Home } from './pages/Home';
import { Booking } from './pages/Booking';

// ponytail: two pages → plain pathname switch, no router dependency.
// Swap in react-router when there's a third route or nested layouts.
export function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  if (path === '/booking' || path === '/line-booking') return <Booking />;
  return <Home />;
}
