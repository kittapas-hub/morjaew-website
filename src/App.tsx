import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { Booking } from './pages/Booking';

function AppSkeleton() {
  return (
    <div className="app-skeleton" aria-label="กำลังโหลดหน้าเว็บ">
      <div className="app-skeleton__bar" />
      <div className="app-skeleton__hero">
        <div className="app-skeleton__copy">
          <span />
          <strong />
          <strong />
          <p />
          <div />
        </div>
        <div className="app-skeleton__seal" />
      </div>
      <div className="app-skeleton__cards">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

// ponytail: two pages → plain pathname switch, no router dependency.
// Swap in react-router when there's a third route or nested layouts.
export function App() {
  const [isReady, setIsReady] = useState(false);
  const path = window.location.pathname.replace(/\/$/, '');

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 220);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isReady) return <AppSkeleton />;

  if (path === '/booking' || path === '/line-booking') return <Booking />;
  return <Home />;
}
