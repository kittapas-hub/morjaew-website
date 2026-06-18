import { site } from '../config/site';

const steps = [
  { title: 'เพิ่ม LINE', desc: `ทักทีมงานผ่าน LINE OA ${site.lineOaId} เพื่อสอบถามรอบว่างและรายละเอียดเบื้องต้น` },
  { title: 'แจ้งหัวข้อที่อยากปรึกษา', desc: 'ส่งรูปถ่ายใบหน้าที่ชัดเจน พร้อมเรื่องที่ต้องการปรึกษา เช่น งาน เงิน ความรัก ธุรกิจ บ้าน หรือที่ดิน' },
  { title: 'นัดเวลาคอล', desc: 'เลือกช่วงเวลาที่สะดวก ทีมงานยืนยันรอบและรายละเอียดการปรึกษา' },
  { title: 'ปรึกษาทางโทรศัพท์', desc: 'หมอแจวให้คำแนะนำแบบสด ชี้จังหวะและแนวทางที่เหมาะสม เพื่อใช้ประกอบการตัดสินใจ' },
];

export function Process() {
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">ขั้นตอนการปรึกษา</p>
          <h2 className="section__title">เป็นระบบ ชัดเจน และเป็นส่วนตัว</h2>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
