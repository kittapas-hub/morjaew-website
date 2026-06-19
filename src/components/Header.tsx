import { site } from '../config/site';
import { LineButton } from './LineButton';

const navLinks = [
  { href: '#consult', label: 'เรื่องที่ปรึกษาได้' },
  { href: '#about', label: 'ความน่าเชื่อถือ' },
  { href: '#reviews', label: 'รีวิว' },
  { href: '#pillars', label: 'บริการ' },
  { href: '#booking-cta', label: 'จองคิว' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top">
          <img className="brand__logo" src="/logo-mohjaew.jpg" alt="หมอแจว" />
          <span>
            <span className="brand__name">{site.brand}</span>{' '}
            <span className="brand__sub">{site.subtitle}</span>
          </span>
        </a>

        <nav className="nav" aria-label="เมนูหลัก">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <LineButton className="header__cta">จองคิวผ่าน LINE</LineButton>
      </div>
    </header>
  );
}
