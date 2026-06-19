import { BrandIcon, type BrandIconName } from './BrandIcon';

const points: Array<{ icon: BrandIconName; title: string; desc: string }> = [
  { icon: 'lock', title: 'ข้อมูลเป็นความลับ', desc: 'รูปถ่ายและข้อมูลที่ส่งให้ทีมงานใช้เพื่อการนัดหมายและการให้คำปรึกษาเท่านั้น ไม่เปิดเผยต่อสาธารณะโดยไม่ได้รับอนุญาต' },
  { icon: 'phone', title: 'คุยส่วนตัว ตรงประเด็น', desc: 'ปรึกษาแบบส่วนตัวทางโทรศัพท์ ถามต่อได้จนเข้าใจ เน้นแนวทางที่นำไปใช้ต่อได้จริง' },
  { icon: 'compass', title: 'เป็นแนวทางประกอบการตัดสินใจ', desc: 'หมอแจวช่วยมองภาพรวมและชี้จังหวะ ไม่ใช่การฟันธงผลลัพธ์ การตัดสินใจสุดท้ายอยู่ที่คุณเสมอ' },
];

export function TrustPrivacy() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">ความน่าเชื่อถือและความเป็นส่วนตัว</p>
          <h2 className="section__title">ปรึกษาได้อย่างสบายใจ</h2>
        </div>
        <div className="trust-box">
          {points.map((p) => (
            <div className="trust-box__row" key={p.title}>
              <span className="ico icon-badge" aria-hidden="true">
                <BrandIcon name={p.icon} />
              </span>
              <span>
                <strong>{p.title}</strong>
                <br />
                {p.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
