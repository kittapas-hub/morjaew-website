import { DecorativeLayer } from './DecorativeLayer';

const pillars = [
  {
    num: '01',
    title: 'ให้คำปรึกษาแบบส่วนตัว',
    desc: 'คุยเรื่องสำคัญผ่านช่องทางส่วนตัว ทีมงานช่วยดูแลขั้นตอนและคิวปรึกษาให้ชัดเจน',
  },
  {
    num: '02',
    title: 'เน้นแนวทางที่ใช้ได้จริง',
    desc: 'ช่วยมองภาพรวม จุดที่ควรระวัง และทางเลือกที่นำไปประกอบการตัดสินใจได้',
  },
  {
    num: '03',
    title: 'เหมาะกับเรื่องสำคัญ',
    desc: 'งาน เงิน ธุรกิจ หุ้นส่วน ความสัมพันธ์ บ้าน ที่ดิน และจังหวะชีวิตที่ต้องคิดรอบด้าน',
  },
  {
    num: '04',
    title: 'รักษาความเป็นส่วนตัว',
    desc: 'ข้อมูล รูปถ่าย และเรื่องที่ปรึกษาใช้เพื่อการนัดหมายและการให้คำปรึกษาเท่านั้น',
  },
];

export function Pillars() {
  return (
    <section className="section section--benefits" id="pillars">
      <DecorativeLayer variant="services" />
      <div className="container">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">ทำไมต้องหมอแจว</p>
          <h2 className="section__title">ปรึกษาด้วยหลักการ ไม่ใช่แค่คำทำนาย</h2>
          <p className="section__lead">
            จุดสำคัญคือการช่วยให้คุณเห็นทางเลือกชัดขึ้น โดยยังตัดสินใจบนบริบทจริงของตัวเอง
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <div className="pillar__num" aria-hidden="true">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
