import { site } from '../config/site';
import { LineButton } from './LineButton';

const includes = [
  'ปรึกษาส่วนตัวทางโทรศัพท์',
  'ใช้รูปถ่ายใบหน้าประกอบการดูโหงวเฮ้ง',
  'ไม่จำเป็นต้องทราบเวลาเกิด',
  'ครอบคลุมงาน การเงิน ความรัก ธุรกิจ บ้าน ที่ดิน และการตัดสินใจสำคัญ',
];

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head" style={{ textAlign: 'center' }}>
          <p className="section__eyebrow">บริการและราคา</p>
          <h2 className="section__title">เริ่มต้นง่าย ราคาชัดเจน</h2>
        </div>

        <div className="price-card">
          <span className="price-card__tag">บริการหลัก</span>
          <h3 style={{ marginBottom: 6 }}>ปรึกษาดวงชะตาส่วนตัวทางโทรศัพท์</h3>
          <div className="price-card__amount">
            เริ่มต้น ฿{site.priceStart.toLocaleString()} <small>/ ครั้ง</small>
          </div>
          <ul className="price-card__list">
            {includes.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <LineButton block>จองคิวผ่าน LINE {site.lineOaId}</LineButton>
          <p className="price-note">
            บริการเฉพาะทางหรือการดูเชิงลึกเพิ่มเติม ทีมงานจะแนะนำรูปแบบที่เหมาะสมตามรายละเอียดที่ต้องการปรึกษา
          </p>
        </div>
      </div>
    </section>
  );
}
