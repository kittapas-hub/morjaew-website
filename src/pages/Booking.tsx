import { site } from '../config/site';
import { LineButton } from './../components/LineButton';

/**
 * Phase 1: placeholder for the future LINE LIFF booking flow.
 * Today it just routes people to LINE OA — same as every other CTA.
 *
 * Phase 2 (LIFF booking) — wire it up here:
 *   1. Install @line/liff and add VITE_LIFF_ID to .env.
 *   2. On mount: `await liff.init({ liffId: import.meta.env.VITE_LIFF_ID })`,
 *      then `liff.getProfile()` for the user's LINE identity.
 *   3. Render the booking form (topic, preferred call time, face photo upload).
 *   4. On submit: POST to the booking backend, then `liff.sendMessages()` /
 *      `liff.closeWindow()` to confirm in the LINE chat.
 * Keep this page's route stable (/booking and /line-booking) so ad links don't break.
 */
export function Booking() {
  return (
    <div className="simple-page">
      <div className="simple-page__inner">
        <p className="section__eyebrow">ระบบจองคิว</p>
        <h1 className="section__title">ระบบจองคิวออนไลน์กำลังจะมา</h1>
        <p>
          ขณะนี้การจองคิวกับ {site.brand} ทำผ่าน LINE โดยตรง
          ทักเข้ามาเพื่อสอบถามรอบว่างและนัดเวลาปรึกษาส่วนตัวทางโทรศัพท์ เริ่มต้น {site.priceStart} บาท
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
          <LineButton>จองคิวผ่าน LINE {site.lineOaId}</LineButton>
          <a className="btn btn--ghost" href="/">
            กลับหน้าแรก
          </a>
        </div>
      </div>
    </div>
  );
}
