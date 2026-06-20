import { site } from '../config/site';
import { DecorativeLayer } from './DecorativeLayer';
import { LineButton } from './LineButton';

export function FinalCta() {
  return (
    <section className="section final-cta" id="booking-cta">
      <DecorativeLayer variant="cta" />
      <div className="container">
        <div className="final-cta__card">
          <img className="final-cta__label" src="/morjaew-vertical-label.svg" alt="" aria-hidden="true" />
          <div className="final-cta__copy">
            <p className="section__eyebrow">
              นัดปรึกษาส่วนตัว
            </p>
            <h2 className="section__title">ทัก LINE เพื่อเริ่มต้นพูดคุย</h2>
            <p>
              แจ้งเรื่องที่ต้องการปรึกษา แล้วทีมงานจะช่วยแนะนำรูปแบบบริการ คิวว่าง
              และขั้นตอนต่อไปให้เหมาะกับคุณ
            </p>
            <p className="final-cta__note">
              เตรียมรูปถ่ายใบหน้าที่ชัดเจน · เรื่องที่ต้องการปรึกษา · ช่วงเวลาที่สะดวก
            </p>
            <LineButton>จองคิวปรึกษาผ่าน LINE {site.lineOaId}</LineButton>
          </div>

          <div className="qr-box">
            <div className="qr-box__qr">
              <img src="/assets/line-qr.png" alt={`QR code สำหรับเพิ่ม LINE ${site.lineOaId}`} width={180} height={180} />
            </div>
            <div className="qr-box__copy">
              <span className="qr-box__label">สแกนเพื่อเพิ่ม LINE</span>
              <span className="qr-box__id">{site.lineOaId}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
