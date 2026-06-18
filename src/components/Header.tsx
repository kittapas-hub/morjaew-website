import { site } from '../config/site';
import { LineButton } from './LineButton';

const navLinks = [
  { href: '#about', label: 'รู้จักหมอแจว' },
  { href: '#pillars', label: 'บริการ' },
  { href: '#pricing', label: 'ราคา' },
  { href: '#process', label: 'ขั้นตอน' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top">
          <span className="brand__seal" aria-hidden="true">
            แจว
          </span>
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
