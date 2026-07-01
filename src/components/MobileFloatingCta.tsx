import { useEffect, useState } from 'react';
import { site } from '../config/site';

const HIDE_WHEN_VISIBLE = ['pricing', 'line'] as const;

export function MobileFloatingCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = [
      ...HIDE_WHEN_VISIBLE.map((id) => document.getElementById(id)),
      document.querySelector('.home > footer'),
    ].filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (!targets.length) return;

    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setHidden(visible.size > 0);
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`home-mobile-floating-cta${hidden ? ' home-mobile-floating-cta--hidden' : ''}`}
      aria-hidden={hidden}
    >
      <a className="home-mobile-floating-cta__btn" href={site.bookingUrl}>
        เช็กคิวปรึกษา
      </a>
    </div>
  );
}
