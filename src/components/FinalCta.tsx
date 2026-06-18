import { site } from '../config/site';
import { LineButton } from './LineButton';

export function FinalCta() {
  return (
    <section className="section final-cta" id="booking-cta">
      <div className="container final-cta__grid">
        <div>
          <p className="section__eyebrow" style={{ color: 'var(--gold-soft)' }}>
            นัดปรึกษาส่วนตัว
          </p>
          <h2 className="section__title">พร้อมคุยเมื่อคุณพร้อม</h2>
          <p>
            ทักทีมงานหมอแจวผ่าน LINE เพื่อสอบถามรอบว่าง ส่งข้อมูลเบื้องต้น
            และนัดเวลาปรึกษาส่วนตัวทางโทรศัพท์ เริ่มต้น {site.priceStart} บาท
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            เพื่อความรวดเร็ว โปรดเตรียม: รูปถ่ายใบหน้าที่ชัดเจน · เรื่องที่ต้องการปรึกษา · ช่วงเวลาที่สะดวก
          </p>
          <LineButton>จองคิวผ่าน LINE {site.lineOaId}</LineButton>
        </div>

        <div className="qr-box">
          <img src="/line-qr.png" alt={`QR code สำหรับเพิ่ม LINE ${site.lineOaId}`} width={180} height={180} />
          <span>สแกนเพื่อเพิ่ม LINE</span>
          <span className="qr-box__id">{site.lineOaId}</span>
        </div>
      </div>
    </section>
  );
}
