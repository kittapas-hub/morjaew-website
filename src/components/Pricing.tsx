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
      <div className="container pricing-layout">
        <div className="pricing-copy">
          <div className="section__head">
            <p className="section__eyebrow">ค่าปรึกษา</p>
            <h2 className="section__title">ค่าปรึกษาชัดเจน โปร่งใสตั้งแต่ต้น</h2>
            <p className="section__lead">
              แจ้งรายละเอียดผ่าน LINE ก่อนเริ่มทุกครั้ง คุณเลือกหัวข้อและรูปแบบการปรึกษาที่เหมาะกับสถานการณ์ของตัวเองได้
            </p>
          </div>
          <ul className="pricing-checks">
            {includes.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <div className="price-card">
          <span className="price-card__tag">ปรึกษาส่วนตัวกับหมอแจว</span>
          <div className="price-card__amount">
            <small>เริ่มต้น</small>
            {site.priceStart.toLocaleString()}
            <small>บาท / ครั้ง</small>
          </div>
          <ul className="price-card__list">
            <li>ปรึกษาตรงประเด็นกับหมอแจว</li>
            <li>ให้แนวทางที่นำไปใช้ประกอบการตัดสินใจ</li>
            <li>สอบถามเบื้องต้นผ่าน LINE ก่อนได้</li>
          </ul>
          <LineButton block>สอบถามคิวผ่าน LINE {site.lineOaId}</LineButton>
          <p className="price-note">
            ราคานี้เป็นจุดเริ่มต้นของการปรึกษาส่วนตัว บริการเฉพาะทางหรือเชิงลึกจะแนะนำตามรายละเอียดที่ต้องการปรึกษา
          </p>
        </div>
      </div>
    </section>
  );
}
