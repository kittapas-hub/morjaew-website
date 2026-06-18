import { site } from '../config/site';
import { LineButton } from './LineButton';

const ZODIAC = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

const trust = [
  { icon: '✦', label: `ประสบการณ์กว่า ${site.yearsExperience} ปี` },
  { icon: '☎', label: 'ปรึกษาส่วนตัวทางโทรศัพท์' },
  { icon: '🔒', label: 'ข้อมูลเป็นความลับ' },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__zodiac" aria-hidden="true">
          {ZODIAC.map((z) => (
            <span key={z}>{z}</span>
          ))}
        </div>

        <h1 className="hero__title">
          มองจังหวะให้ชัด<br />
          <span className="accent">ก่อนตัดสินใจเรื่องสำคัญ</span>
        </h1>

        <p className="hero__lead">
          {site.brand} {site.subtitle} — {site.positioning}{' '}
          สำหรับผู้ที่กำลังตัดสินใจเรื่องการงาน ธุรกิจ บ้าน ที่ดิน หุ้นส่วน หรือความสัมพันธ์
        </p>

        <div className="hero__cta">
          <LineButton>จองคิวปรึกษาผ่าน LINE</LineButton>
          <a className="btn btn--ghost" href="#pillars">
            ดูรูปแบบบริการ
          </a>
        </div>

        <div className="trust-strip">
          {trust.map((t) => (
            <div className="trust-strip__item" key={t.label}>
              <span className="trust-strip__icon" aria-hidden="true">
                {t.icon}
              </span>
              <span className="trust-strip__label">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
