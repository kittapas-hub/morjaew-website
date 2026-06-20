import { site } from '../config/site';
import { BrandIcon, type BrandIconName } from './BrandIcon';
import { LineButton } from './LineButton';

const options: Array<{
  icon: BrandIconName;
  tag: string;
  title: string;
  desc: string;
  featured?: boolean;
}> = [
  {
    icon: 'message',
    tag: 'เริ่มง่ายที่สุด',
    title: 'ทัก LINE เพื่อเล่าเรื่องเบื้องต้น',
    desc: `ส่งหัวข้อที่อยากปรึกษาและรูปถ่ายใบหน้าที่ชัดเจน ทีมงานจะช่วยแนะนำขั้นตอนผ่าน LINE ${site.lineOaId}`,
    featured: true,
  },
  {
    icon: 'phone',
    tag: 'คุยส่วนตัว',
    title: 'ปรึกษาทางโทรศัพท์',
    desc: 'นัดเวลาที่สะดวก แล้วคุยกับหมอแจวแบบส่วนตัว เน้นประเด็นที่ต้องตัดสินใจจริง',
  },
  {
    icon: 'calendar',
    tag: 'ลงรายละเอียด',
    title: 'นัดคิวบริการเฉพาะทาง',
    desc: 'เหมาะกับเรื่องบ้าน ที่ดิน ธุรกิจ ฮวงจุ้ย หรือฤกษ์สำคัญที่ต้องเตรียมข้อมูลเพิ่มเติม',
  },
];

export function ConsultationOptions() {
  return (
    <section className="section section--options" id="options">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">ช่องทางการปรึกษา</p>
          <h2 className="section__title">เริ่มจาก LINE แล้วเลือกวิธีคุยที่เหมาะกับคุณ</h2>
          <p className="section__lead">
            ทุกช่องทางยังคงเริ่มจาก LINE เพื่อให้ทีมงานช่วยดูรายละเอียด คิวว่าง และรูปแบบบริการก่อนยืนยันนัดหมาย
          </p>
        </div>

        <div className="option-grid">
          {options.map((option) => (
            <article className={`option-card${option.featured ? ' option-card--featured' : ''}`} key={option.title}>
              <div className="option-card__head">
                <span className="option-card__icon icon-badge" aria-hidden="true">
                  <BrandIcon name={option.icon} />
                </span>
                <span className="option-card__tag">{option.tag}</span>
              </div>
              <h3>{option.title}</h3>
              <p>{option.desc}</p>
              {option.featured && <LineButton>ทัก LINE เพื่อเริ่มต้น</LineButton>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
