import { site } from '../config/site';
import { BrandIcon, type BrandIconName } from './BrandIcon';
import { LineButton } from './LineButton';

const trust: Array<{ icon: BrandIconName; label: string }> = [
  { icon: 'sparkle', label: `ประสบการณ์กว่า ${site.yearsExperience} ปี` },
  { icon: 'phone', label: 'ปรึกษาส่วนตัวทางโทรศัพท์/LINE' },
  { icon: 'lock', label: 'ข้อมูลเป็นความลับ' },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__mountain" src="/morjaew-mountain-landscape.svg" alt="" aria-hidden="true" />
      <img className="hero__cloud" src="/morjaew-cloud-leaf.svg" alt="" aria-hidden="true" />
      <div className="container">
        <div className="hero__inner">

          <div className="hero__content">
            <p className="section__eyebrow">ปรึกษาส่วนตัวกับหมอแจว</p>
            <h1 className="hero__title">กำลังลังเลกับการตัดสินใจเรื่องสำคัญอยู่ใช่ไหม?</h1>
            <p className="hero__tagline">
              ดูจังหวะชีวิต งาน เงิน ธุรกิจ ความสัมพันธ์ และแนวทางที่เหมาะกับคุณ
            </p>
            <p className="hero__intro">
              หมอแจว {site.subtitle} ให้คำปรึกษาแบบส่วนตัว เพื่อช่วยให้คุณเห็นภาพรวม จุดที่ควรระวัง
              และทางเลือกก่อนตัดสินใจเรื่องสำคัญ
            </p>
            <img className="hero__divider" src="/morjaew-lotus-divider.svg" alt="" aria-hidden="true" />
            <div className="hero__cta">
              <LineButton>จองคิวปรึกษาผ่าน LINE</LineButton>
              <a className="btn btn--ghost" href="#consult">ดูบริการที่เหมาะกับคุณ</a>
            </div>
            <div className="trust-strip">
              {trust.map((t) => (
                <div className="trust-strip__item" key={t.label}>
                  <span className="trust-strip__icon icon-badge" aria-hidden="true">
                    <BrandIcon name={t.icon} />
                  </span>
                  <span className="trust-strip__label">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__portrait-col">
            <img
              className="hero__dragon"
              src="/decorations/dragon-watermark.png"
              alt=""
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
