import { site } from '../config/site';
import { BrandIcon, type BrandIconName } from './BrandIcon';
import { DecorativeLayer } from './DecorativeLayer';

const items: Array<{
  icon: BrandIconName;
  title: string;
  desc: string;
}> = [
  { icon: 'work', title: 'งาน / ธุรกิจ', desc: 'มองจังหวะเริ่มงาน ขยับตำแหน่ง ลงทุน หรือคุยหุ้นส่วนให้ชัดขึ้น' },
  { icon: 'checklist', title: 'เงิน / การลงทุน', desc: 'ดูช่วงที่ควรระวัง โอกาสที่น่าพิจารณา และแนวทางก่อนตัดสินใจใหญ่' },
  { icon: 'heart', title: 'ความรัก / ครอบครัว', desc: 'เข้าใจภาพรวมความสัมพันธ์ การสื่อสาร และทางเลือกที่เหมาะกับสถานการณ์' },
  { icon: 'home', title: 'บ้าน / ฮวงจุ้ย', desc: 'ปรึกษาเรื่องบ้าน ที่ดิน ย้ายที่อยู่ หรือทิศทางที่ส่งผลกับชีวิตและงาน' },
  { icon: 'compass', title: 'จังหวะชีวิต', desc: 'เช็กช่วงเปลี่ยนผ่าน สำรวจทางที่ควรเดิน และเรื่องที่ควรวางแผนล่วงหน้า' },
  { icon: 'question', title: 'เรื่องเฉพาะตัว', desc: 'คุยประเด็นส่วนตัวที่ต้องการมุมมองรอบด้านแบบเป็นความลับ' },
];

export function QuickMenu() {
  return (
    <section className="section section--services-list" id="services">
      <DecorativeLayer variant="consult" />
      <div className="container">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">หัวข้อที่ปรึกษาได้</p>
          <h2 className="section__title">อยากดูเรื่องไหน เลือกได้เลย</h2>
          <p className="section__lead">
            แต่ละเรื่องจะคุยแบบส่วนตัว ทีมงานช่วยแนะนำรูปแบบบริการและคิวว่างผ่าน LINE {site.lineOaId}
          </p>
        </div>
        <div className="quick-grid">
          {items.map((it) => (
            <article
              key={it.title}
              className="quick-card"
            >
              <div className="quick-card__head">
                <span className="quick-card__icon icon-badge" aria-hidden="true">
                  <BrandIcon name={it.icon} />
                </span>
                <h3 className="quick-card__title">{it.title}</h3>
              </div>
              <p className="quick-card__desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
