import { site } from '../config/site';
import { DecorativeLayer } from './DecorativeLayer';
import { LineButton } from './LineButton';

const includes = [
  'ปรึกษาส่วนตัวทางโทรศัพท์',
  'ใช้รูปถ่ายใบหน้าประกอบการดูโหงวเฮ้ง',
  'ไม่จำเป็นต้องทราบเวลาเกิด',
  'ทีมงานช่วยแนะนำรูปแบบบริการที่เหมาะกับเรื่องของคุณ',
];

export function Pricing() {
  return (
    <section className="section section--pricing" id="pricing">
      <DecorativeLayer variant="pricing" />
      <div className="container">
        <div className="section__head" style={{ textAlign: 'center' }}>
          <p className="section__eyebrow">บริการและราคา</p>
          <h2 className="section__title">ค่าปรึกษาส่วนตัว เริ่มต้น {site.priceStart.toLocaleString()} บาท</h2>
        </div>

        <div className="price-card">
          <span className="price-card__tag">สอบถามรายละเอียดผ่าน LINE</span>
          <h3 style={{ marginBottom: 6 }}>ปรึกษาส่วนตัวกับหมอแจว</h3>
          <div className="price-card__amount">
            เริ่มต้น {site.priceStart.toLocaleString()} บาท <small>/ ครั้ง</small>
          </div>
          <ul className="price-card__list">
            {includes.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <LineButton block>สอบถามคิวและรายละเอียดผ่าน LINE {site.lineOaId}</LineButton>
          <p className="price-note">
            ราคานี้เป็นจุดเริ่มต้นของการปรึกษาส่วนตัว หากเรื่องของคุณเหมาะกับบริการเฉพาะทาง
            ทีมงานจะแนะนำตัวเลือกเพิ่มเติมใน LINE
          </p>
        </div>
      </div>
    </section>
  );
}
