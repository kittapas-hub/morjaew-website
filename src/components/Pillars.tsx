const pillars = [
  {
    icon: '💼',
    title: 'งาน / ธุรกิจ',
    desc: 'การงาน การเงิน หุ้นส่วน และจังหวะลงทุน ช่วยมองภาพรวมและจุดที่ควรระวังก่อนตัดสินใจ',
  },
  {
    icon: '💗',
    title: 'ความสัมพันธ์',
    desc: 'ช่วยวิเคราะห์ภาพรวมความสัมพันธ์และทางเลือกในการสื่อสาร เพื่อประกอบการตัดสินใจ',
  },
  {
    icon: '🏠',
    title: 'บ้าน / ที่ดิน / การตัดสินใจใหญ่',
    desc: 'ซื้อบ้าน ย้ายบ้าน หรือเริ่มต้นสิ่งใหม่ ช่วยมองจังหวะและแนวทางที่ใช้ต่อได้จริง',
  },
];

export function Pillars() {
  return (
    <section className="section section--alt" id="pillars">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">ปรึกษาเรื่องอะไรได้บ้าง</p>
          <h2 className="section__title">สามเสาหลักของการปรึกษา</h2>
          <p className="section__lead">
            ทุกหัวข้อใช้ศาสตร์จีนและโหงวเฮ้งร่วมกับญาณหยั่งรู้ เพื่อชี้จังหวะและแนวทางประกอบการตัดสินใจ
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <div className="pillar__icon" aria-hidden="true">
                {p.icon}
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
