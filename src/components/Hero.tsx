import { LineButton } from './LineButton';

export function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__mountain" src="/assets/mountain.png" alt="" aria-hidden="true" />
      <div className="container">
        <div className="hero__inner">

          <div className="hero__content">
            <p className="hero__kicker">
              ศาสตร์จีนเพื่อการตัดสินใจ · ฮวงจุ้ย · โหงวเฮ้ง · ฤกษ์มงคล
            </p>
            <h1 className="hero__title">
              กำลังลังเลกับการ
              <br />
              ตัดสินใจเรื่องสำคัญ
              <br />
              <span>อยู่ใช่ไหม?</span>
            </h1>
            <p className="hero__tagline">
              ดูจังหวะชีวิต งาน เงิน ธุรกิจ ความสัมพันธ์ และแนวทางที่เหมาะกับคุณ
            </p>
            <p className="hero__intro">
              เรื่องธุรกิจ งาน เงิน ครอบครัว ความสัมพันธ์ และเส้นทางชีวิต — ปรึกษาหมอแจวเพื่อมองเห็น
              ทางเลือกที่ชัดเจน และตัดสินใจได้อย่างมั่นใจ
            </p>
            <div className="hero__cta">
              <LineButton>ปรึกษาผ่าน LINE</LineButton>
              <a className="btn btn--ghost" href="#services">ดูบริการทั้งหมด</a>
            </div>
          </div>

          <div className="hero__portrait-col">
            <img className="hero__mandala" src="/assets/mandala.png" alt="" aria-hidden="true" />
            <img
              className="hero__dragon"
              src="/assets/dragon-seal.png"
              alt="ตราสัญลักษณ์มังกร หมอแจว"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
