import { site, disclaimer } from '../config/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="brand__name">{site.brand}</span>
          <p style={{ marginTop: 8 }}>
            {site.subtitle} — {site.positioning} · LINE OA {site.lineOaId}
          </p>
        </div>

        <div>
          <h4>บริการ</h4>
          <nav className="footer__links">
            <a href="#pillars">งาน / ธุรกิจ</a>
            <a href="#pillars">ความสัมพันธ์</a>
            <a href="#pillars">บ้าน / ที่ดิน</a>
            <a href="#pricing">ราคา</a>
          </nav>
        </div>

        <div>
          <h4>ติดต่อ</h4>
          <nav className="footer__links">
            <a href={site.lineUrl} target="_blank" rel="noopener noreferrer">
              นัดปรึกษาผ่าน LINE
            </a>
            <a href="#faq">คำถามที่พบบ่อย</a>
            <a href="/booking">ระบบจองคิว (เร็ว ๆ นี้)</a>
          </nav>
        </div>
      </div>

      <div className="container">
        <p className="footer__disclaimer">
          {disclaimer} กรณีเรื่องการเงิน ธุรกิจ กฎหมาย หรือสุขภาพ ควรพิจารณาข้อมูลเฉพาะด้านร่วมด้วย
          <br />
          <br />© {new Date().getFullYear()} {site.brand} — {site.subtitle}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
