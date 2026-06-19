import { BrandIcon, type BrandIconName } from './BrandIcon';
import { DecorativeLayer } from './DecorativeLayer';

const pillars: Array<{ icon: BrandIconName; title: string; desc: string }> = [
  {
    icon: 'work',
    title: 'ปรึกษางานและธุรกิจ',
    desc: 'เหมาะกับคนที่กำลังเริ่ม ขยาย เปลี่ยนงาน คุยหุ้นส่วน หรือเลือกจังหวะลงทุน',
  },
  {
    icon: 'heart',
    title: 'ปรึกษาความสัมพันธ์',
    desc: 'เหมาะกับคนที่อยากเข้าใจภาพรวมความรัก ครอบครัว คู่ครอง หรือการสื่อสารกับคนสำคัญ',
  },
  {
    icon: 'home',
    title: 'ปรึกษาบ้านและฮวงจุ้ย',
    desc: 'เหมาะกับคนที่กำลังซื้อ ย้าย ปรับบ้าน ดูที่ดิน หรืออยากเช็กทิศทางก่อนตัดสินใจ',
  },
  {
    icon: 'compass',
    title: 'ปรึกษาจังหวะชีวิต',
    desc: 'เหมาะกับคนที่รู้สึกติดขัด ลังเล หรืออยากเห็นแนวทางที่เหมาะกับช่วงชีวิตตอนนี้',
  },
];

export function Pillars() {
  return (
    <section className="section section--alt section--services" id="pillars">
      <DecorativeLayer variant="services" />
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">บริการที่ผูกกับเรื่องของคุณ</p>
          <h2 className="section__title">เลือกรูปแบบปรึกษาที่เหมาะกับสถานการณ์</h2>
          <p className="section__lead">
            บริการถูกออกแบบให้คุยสั้น กระชับ และตรงประเด็น ทีมงานจะช่วยแนะนำแพ็กเกจที่เหมาะสมใน LINE
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <div className="pillar__icon icon-badge" aria-hidden="true">
                <BrandIcon name={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
