import { site } from '../config/site';

const items = [
  { icon: '📅', title: 'จองคิววันนี้', desc: `เริ่มปรึกษา ${site.priceStart} บาท`, href: site.lineUrl, external: true },
  { icon: '📋', title: 'บริการและราคา', desc: 'ดูเรื่องที่ปรึกษาได้ / ราคา', href: '#pricing' },
  { icon: '💬', title: 'รีวิวจากลูกค้า', desc: 'ประสบการณ์แบบไม่เปิดเผยตัวตน', href: '#reviews' },
  { icon: '❓', title: 'คำถามที่พบบ่อย', desc: 'ต้องเตรียมอะไร ใช้เวลานานไหม', href: '#faq' },
  { icon: '📝', title: 'วิธีเตรียมตัวก่อนปรึกษา', desc: 'รูปถ่ายใบหน้า · หัวข้อ · เวลาสะดวก', href: '#process' },
  { icon: '🧭', title: 'รู้จักหมอแจว', desc: 'ประวัติและศาสตร์ที่ใช้', href: '#about' },
];

export function QuickMenu() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">เริ่มต้นที่นี่</p>
          <h2 className="section__title">อยากดูเรื่องไหน เลือกได้เลย</h2>
        </div>
        <div className="quick-grid">
          {items.map((it) => (
            <a
              key={it.title}
              className="quick-card"
              href={it.href}
              {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="quick-card__icon" aria-hidden="true">
                {it.icon}
              </span>
              <span>
                <span className="quick-card__title">{it.title}</span>
                <br />
                <span className="quick-card__desc">{it.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
