import { site } from '../config/site';

const badges = ['ศาสตร์จีนและโหงวเฮ้ง', `ประสบการณ์กว่า ${site.yearsExperience} ปี`, 'ปรึกษาส่วนตัวทางโทรศัพท์', 'ข้อมูลเป็นความลับ'];

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <img
          className="about__portrait"
          src="/morjaew-portrait.png"
          alt="หมอแจว พ่อปู่โหรา ญาณหยั่งรู้"
          loading="lazy"
        />
        <div>
          <p className="section__eyebrow">รู้จักหมอแจว</p>
          <h2 className="section__title">
            {site.brand} {site.subtitle}
          </h2>
          <p>
            {site.brand} คือ {site.positioning} มีประสบการณ์ในการให้คำปรึกษามากกว่า{' '}
            {site.yearsExperience} ปี
          </p>
          <p>
            แนวทางของหมอแจวไม่ได้เน้นเพียงการทำนาย แต่เป็นการชี้จังหวะชีวิต จุดที่ควรระวัง
            และแนวทางในการตัดสินใจ โดยเฉพาะเรื่องการงาน การเงิน ธุรกิจ หุ้นส่วน บ้าน ที่ดิน
            ความสัมพันธ์ และเรื่องสำคัญที่ต้องการมุมมองอย่างรอบด้าน
          </p>
          <p>
            การปรึกษาเป็นแบบส่วนตัวทางโทรศัพท์ สามารถใช้รูปถ่ายใบหน้าประกอบการดูโหงวเฮ้งได้
            โดยไม่จำเป็นต้องทราบเวลาเกิด
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
