import { site } from '../config/site';
import { DecorativeLayer } from './DecorativeLayer';

const badges = [
  `ประสบการณ์กว่า ${site.yearsExperience} ปี`,
  'ปรึกษาส่วนตัวทางโทรศัพท์/LINE',
  'เหมาะกับเจ้าของกิจการและผู้ตัดสินใจเรื่องสำคัญ',
  'ข้อมูลเป็นความลับ',
];

export function About() {
  return (
    <section className="section section--about" id="about">
      <DecorativeLayer variant="about" />
      <div className="container about">
        <div className="portrait-wrap">
          <img
            className="dragon-watermark about__dragon-watermark"
            src="/assets/dragon-watermark.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img className="about__mandala" src="/assets/mandala.png" alt="" aria-hidden="true" />
          <img
            className="about__portrait"
            src="/assets/about-portrait.png"
            alt="หมอแจว พ่อปู่โหรา ญาณหยั่งรู้"
            loading="lazy"
          />
        </div>
        <div className="about__content">
          <p className="section__eyebrow">เกี่ยวกับหมอแจว</p>
          <h2 className="section__title">
            ที่ปรึกษาที่อยู่เคียงข้างในทุกการตัดสินใจสำคัญ
          </h2>
          <p>
            {site.brand} {site.subtitle} คือ {site.positioning} มีประสบการณ์ให้คำปรึกษามากกว่า{' '}
            {site.yearsExperience} ปี โดยเน้นการดูจังหวะและแนวทางประกอบการตัดสินใจ ไม่ใช่เพียงการทำนายทั่วไป
          </p>
          <p>
            เหมาะกับผู้ประกอบการ เจ้าของกิจการ คนทำงานที่กำลังเปลี่ยนเส้นทาง
            หรือคนที่มีเรื่องสำคัญต้องตัดสินใจ เช่น งาน เงิน ธุรกิจ หุ้นส่วน ความสัมพันธ์ บ้าน ที่ดิน
            และช่วงชีวิตที่ต้องการมุมมองรอบด้านก่อนเดินต่อ
          </p>
          <p>
            การปรึกษาเป็นแบบส่วนตัวทางโทรศัพท์/LINE ทีมงานช่วยจัดคิวและดูแลขั้นตอนเบื้องต้น
            สามารถใช้รูปถ่ายใบหน้าประกอบการดูโหงวเฮ้งได้ โดยไม่จำเป็นต้องทราบเวลาเกิด
          </p>
          <div className="about__badges">
            {badges.map((b) => (
              <span className="badge" key={b}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
