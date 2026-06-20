import { site } from '../config/site';
import { LineButton } from './LineButton';

const navLinks = [
  { href: '#services', label: 'บริการ' },
  { href: '#about', label: 'เกี่ยวกับหมอแจว' },
  { href: '#proof', label: 'ผลงานจริง' },
  { href: '#pricing', label: 'ค่าปรึกษา' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top">
          <img className="brand__logo" src="/assets/dragon-seal.png" alt="ตราหมอแจว" />
          <span>
            <span className="brand__name">{site.brand} · พ่อปู่โหรา</span>
            <span className="brand__sub">ที่ปรึกษาชีวิตและธุรกิจ</span>
          </span>
        </a>

        <nav className="nav" aria-label="เมนูหลัก">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <LineButton className="header__cta">ทักผ่าน LINE</LineButton>
      </div>
    </header>
  );
}
