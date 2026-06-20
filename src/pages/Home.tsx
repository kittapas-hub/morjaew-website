import { useState, type CSSProperties } from 'react';
import { site } from '../config/site';

// Faithful reproduction of the "หมอแจว · พ่อปู่โหรา" brand prototype
// (Prototype from brand images/หมอแจว พ่อปู่โหรา.dc.html). Inline styles match
// the original 1:1; the global resets in index.css mirror the prototype's
// helmet, so it renders as designed. The original has no breakpoints — it is a
// fixed 1200px design — so this port is intentionally desktop-first too.
const LINE = site.lineUrl;

// gold stroke icon, same SVG set as the prototype's renderVals()
function Icon({ paths }: { paths: string }) {
  return (
    <span
      style={{ display: 'flex' }}
      dangerouslySetInnerHTML={{
        __html:
          '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B0863C" ' +
          'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
          paths +
          '</svg>',
      }}
    />
  );
}

const services = [
  { title: 'งาน · ธุรกิจ', desc: 'ตัดสินใจเรื่องงาน ขยายกิจการ หรือเปลี่ยนเส้นทาง ให้มองเห็นจังหวะที่ใช่', paths: '<path d="M4 8h16v11H4z"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>' },
  { title: 'เงิน · การเงิน', desc: 'วางแผนการเงิน การลงทุน และจังหวะรับ-จ่าย ให้สอดคล้องกับดวงและความเป็นจริง', paths: '<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h3.5a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3H14"/>' },
  { title: 'ความรัก · ครอบครัว', desc: 'ความสัมพันธ์ คู่ครอง และเรื่องในบ้าน ให้เข้าใจกันและเดินต่อไปด้วยกัน', paths: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M5 19c0-2.5 2-4 5-4M19 19c0-2.5-2-4-5-4"/>' },
  { title: 'ฮวงจุ้ย', desc: 'จัดบ้าน ที่ทำงาน และพื้นที่ธุรกิจ ให้เสริมพลังและส่งเสริมความเจริญ', paths: '<rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)"/><path d="M12 7v10M7 12h10"/>' },
  { title: 'ดูดวง · โหราศาสตร์', desc: 'อ่านดวงชะตาและจังหวะชีวิต เพื่อวางแผนช่วงเวลาสำคัญได้อย่างมั่นใจ', paths: '<circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="11" r="1"/><circle cx="12" cy="15" r="1"/>' },
  { title: 'ฤกษ์มงคล', desc: 'เลือกวันเปิดกิจการ แต่งงาน ขึ้นบ้านใหม่ และพิธีสำคัญ ให้ได้ฤกษ์ดี', paths: '<path d="M12 3l2.3 4.7 5.2.8-3.8 3.6.9 5.1L12 14.8 7.4 17.2l.9-5.1L4.5 8.5l5.2-.8z"/>' },
];

const aboutPoints = [
  'ฟังก่อนเสมอ เข้าใจสถานการณ์จริงของคุณ',
  'ให้แนวทางที่นำไปปฏิบัติได้จริง',
  'พูดตรงไปตรงมา ไม่ขู่ ไม่บังคับ',
  'ดูแลลูกค้าทั้งในและต่างประเทศ',
];

const whyUs = [
  { num: '01', title: 'ให้คำปรึกษาเอง', desc: 'พูดคุยกับหมอแจวโดยตรง ไม่ผ่านระบบตอบอัตโนมัติ' },
  { num: '02', title: 'เน้นใช้ได้จริง', desc: 'ทุกคำแนะนำนำไปลงมือทำต่อได้ ไม่ลอย ไม่กว้างเกินไป' },
  { num: '03', title: 'ดูแลเรื่องสำคัญ', desc: 'ธุรกิจ การเงิน ครอบครัว และการตัดสินใจครั้งใหญ่' },
  { num: '04', title: 'รักษาความลับ', desc: 'ทุกเรื่องที่ปรึกษาเป็นความลับระหว่างคุณกับหมอแจว' },
];

const options = [
  { tag: 'สะดวกที่สุด', title: 'ปรึกษาผ่าน LINE', desc: 'พิมพ์คุยได้ทุกที่ทุกเวลา เหมาะกับเรื่องที่อยากค่อย ๆ ปรึกษา', bg: '#15233A', border: '#15233A', fg: '#EDEFF4', link: '#7DE6A8' },
  { tag: 'พูดคุยละเอียด', title: 'ปรึกษาทางโทรศัพท์', desc: 'นัดเวลาคุยทางโทรศัพท์ เหมาะกับเรื่องที่ต้องอธิบายและถามตอบ', bg: '#fff', border: '#E8DcBC', fg: '#29271F', link: '#B0863C' },
  { tag: 'เจาะลึกเต็มรูปแบบ', title: 'นัดพบตัวจริง', desc: 'พบหมอแจวเพื่อดูดวง ดูฮวงจุ้ยสถานที่ และวางแผนอย่างละเอียด', bg: '#fff', border: '#E8DcBC', fg: '#29271F', link: '#B0863C' },
];

const priceIncludes = [
  'แจ้งค่าปรึกษาชัดเจนก่อนเริ่มทุกครั้ง',
  'ไม่มีการบังคับซื้อของหรือพิธีเพิ่ม',
  'ราคาขึ้นกับหัวข้อและรูปแบบการปรึกษา',
  'สอบถามเบื้องต้นทาง LINE ได้ก่อนตัดสินใจ',
];

const faqData = [
  { q: 'ต้องเตรียมข้อมูลอะไรก่อนปรึกษา?', a: 'เบื้องต้นเตรียมวัน เดือน ปี และเวลาเกิดเท่าที่ทราบ พร้อมเรื่องที่อยากปรึกษา หากเป็นเรื่องฮวงจุ้ยหรือสถานที่ สามารถส่งรูปหรือผังพื้นที่มาทาง LINE ได้' },
  { q: 'ค่าปรึกษาเริ่มต้นเท่าไหร่?', a: 'เริ่มต้น 999 บาท โดยราคาขึ้นอยู่กับหัวข้อและรูปแบบการปรึกษา หมอแจวจะแจ้งค่าปรึกษาให้ทราบชัดเจนก่อนเริ่มทุกครั้ง' },
  { q: 'ปรึกษาทาง LINE ได้เลยไหม?', a: 'ได้เลย สามารถทัก LINE เพื่อสอบถามเบื้องต้นก่อนได้ว่าควรเริ่มจากเรื่องไหน แล้วค่อยตัดสินใจรูปแบบการปรึกษาที่เหมาะกับคุณ' },
  { q: 'ดูฮวงจุ้ยบ้านหรือร้านได้ไหม?', a: 'ได้ ทั้งแบบส่งรูปและผังมาดูทาง LINE หรือนัดให้หมอแจวไปดูสถานที่จริง เพื่อแนะนำการจัดวางที่เสริมพลังและความเจริญ' },
  { q: 'เลือกฤกษ์งาน หรือฤกษ์เปิดกิจการได้ไหม?', a: 'ได้ หมอแจวเลือกฤกษ์มงคลสำหรับงานแต่ง ขึ้นบ้านใหม่ เปิดกิจการ และพิธีสำคัญต่าง ๆ ให้เหมาะกับเจ้าของงานและช่วงเวลา' },
  { q: 'ข้อมูลที่ปรึกษาจะเป็นความลับไหม?', a: 'เป็นความลับทั้งหมด ทุกเรื่องที่คุณปรึกษาจะอยู่ระหว่างคุณกับหมอแจวเท่านั้น' },
];

// extra activity photos for the scrolling marquee strip
const marquee = [
  '471092086_2017488512009346_9032585567358442966_n.jpg',
  '471164547_2017488522009345_5935863155780163297_n.jpg',
  '471235542_2017488398676024_5062744874238336249_n.jpg',
  '472401925_2028546554236875_8583338569384398293_n.jpg',
  '472690289_2028546670903530_3600735354073165593_n.jpg',
  '472695163_2028546647570199_4819619876847507409_n.jpg',
  '472770001_2028546707570193_4504578443042822604_n.jpg',
  '522927627_1316399743821528_8886331329605476171_n.jpg',
  '525339454_1321296316665204_2923614766305938835_n.jpg',
  '525339839_1321296346665201_2656325234407034636_n.jpg',
  '470991680_2017488535342677_2782170254806095880_n.jpg',
].map((f) => '/gallery/' + encodeURIComponent(f));

const eyebrow: CSSProperties = { fontSize: '14px', letterSpacing: '4px', color: '#B0863C', fontWeight: 600, marginBottom: '14px' };
const navLink: CSSProperties = { fontSize: '15px', color: '#4A463C', textDecoration: 'none', fontWeight: 500 };

function Divider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
      <img src="/assets/divider.png" alt="" style={{ width: '340px', height: 'auto', opacity: 0.92 }} />
    </div>
  );
}

function Diamond() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '13px', marginBottom: '16px' }}>
      <span style={{ display: 'block', width: '7px', height: '7px', background: '#D8BE82', transform: 'rotate(45deg)' }} />
      <span style={{ display: 'block', width: '56px', height: '1px', background: 'linear-gradient(90deg, #D8BE82, transparent)' }} />
    </div>
  );
}

export function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ fontFamily: "'Noto Sans Thai', sans-serif", backgroundColor: '#FBF7EF', backgroundImage: 'radial-gradient(rgba(176,134,60,0.10) 1px, transparent 1.6px)', backgroundSize: '24px 24px', color: '#29271F', overflowX: 'hidden', lineHeight: 1.7 }}>
      <style>{`
        .svc-card{position:relative;display:flex;flex-direction:column;text-decoration:none;transition:box-shadow .25s,transform .25s,border-color .25s}
        .svc-card:hover{box-shadow:0 16px 38px rgba(120,95,40,.14);transform:translateY(-4px);border-color:#E0C994}
        .svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#D8BE82,#B0863C);transform:scaleX(0);transform-origin:left;transition:transform .25s}
        .svc-card:hover::before{transform:scaleX(1)}
        .svc-link{margin-top:auto;color:#B0863C;font-weight:600;font-size:15px;display:inline-flex;align-items:center;gap:6px;padding-top:16px;border-top:1px solid #F0E7D3;transition:gap .2s}
        .svc-card:hover .svc-link{gap:12px}
        .mq-wrap:hover .mq{animation-play-state:paused}
        .mq{display:flex;width:max-content;animation:mq 48s linear infinite}
        @keyframes mq{to{transform:translateX(-50%)}}
      `}</style>

      {/* ============ HEADER ============ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(251,247,239,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #ECE3CF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <img src="/assets/dragon-seal.png" alt="ตราหมอแจว" style={{ width: '46px', height: '46px', objectFit: 'contain' }} />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '19px', color: '#15233A', letterSpacing: '.2px' }}>หมอแจว · พ่อปู่โหรา</div>
              <div style={{ fontSize: '11.5px', color: '#9A8F73', letterSpacing: '2px', fontWeight: 500 }}>ที่ปรึกษาชีวิตและธุรกิจ</div>
            </div>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <a href="#services" style={navLink}>บริการ</a>
            <a href="#about" style={navLink}>เกี่ยวกับหมอแจว</a>
            <a href="#proof" style={navLink}>ผลงานจริง</a>
            <a href="#pricing" style={navLink}>ค่าปรึกษา</a>
            <a href={LINE} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '15px', padding: '10px 20px', borderRadius: '999px', boxShadow: '0 6px 16px rgba(6,199,85,.28)' }}>
              <span style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', display: 'inline-block' }} />ทักผ่าน LINE
            </a>
          </nav>
        </div>
      </header>

      {/* ============ 1 · HERO ============ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(120% 120% at 80% 0%, #F6EEDC 0%, #FBF7EF 55%)' }}>
        <img src="/assets/mountain.png" alt="" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '92px 40px 84px', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #E8DcBC', padding: '7px 16px', borderRadius: '999px', marginBottom: '26px', boxShadow: '0 2px 10px rgba(120,95,40,.06)' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4F6E58' }} />
              <span style={{ fontSize: '13.5px', color: '#6E6550', fontWeight: 600, letterSpacing: '.4px' }}>ศาสตร์จีนเพื่อการตัดสินใจ · ฮวงจุ้ย · โหงวเฮ้ง · ฤกษ์มงคล</span>
            </div>
            <h1 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '56px', lineHeight: 1.22, color: '#15233A', margin: '0 0 22px', letterSpacing: '-.3px' }}>
              กำลังลังเลกับการ<br />ตัดสินใจเรื่องสำคัญ<br /><span style={{ color: '#B0863C' }}>อยู่ใช่ไหม?</span>
            </h1>
            <p style={{ fontSize: '19px', color: '#5F5949', maxWidth: '500px', margin: '0 0 36px' }}>
              เรื่อง<strong style={{ color: '#3A372D', fontWeight: 600 }}>ธุรกิจ งาน เงิน ครอบครัว ความสัมพันธ์</strong> และเส้นทางชีวิต — ปรึกษาหมอแจวเพื่อมองเห็นทางเลือกที่ชัดเจน และตัดสินใจได้อย่างมั่นใจ
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={LINE} style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '19px', padding: '17px 34px', borderRadius: '999px', boxShadow: '0 12px 26px rgba(6,199,85,.32)' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
                ปรึกษาผ่าน LINE
              </a>
              <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'transparent', color: '#3A372D', textDecoration: 'none', fontWeight: 600, fontSize: '17px', padding: '16px 26px', borderRadius: '999px', border: '1.5px solid #D8C9A4' }}>
                ดูบริการทั้งหมด
              </a>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, #FBF3E1 0%, rgba(251,243,225,0) 70%)' }} />
            <img src="/assets/mandala.png" alt="" style={{ position: 'absolute', width: '500px', height: '500px', objectFit: 'contain', pointerEvents: 'none', opacity: 0.9 }} />
            <img src="/assets/dragon-seal.png" alt="ตราสัญลักษณ์มังกร หมอแจว" style={{ position: 'relative', width: '366px', height: '366px', objectFit: 'contain', filter: 'drop-shadow(0 18px 40px rgba(120,90,40,.16))' }} />
          </div>
        </div>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #E3D2A8, transparent)', maxWidth: '1200px', margin: '0 auto' }} />
      </section>

      {/* ============ 2 · SERVICES ============ */}
      <section id="services" style={{ maxWidth: '1200px', margin: '0 auto', padding: '86px 40px 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={eyebrow}>หัวข้อที่ปรึกษาได้</div>
          <Divider />
          <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 14px' }}>อยากดูเรื่องไหน เลือกได้เลย</h2>
          <p style={{ fontSize: '18px', color: '#6B6450', maxWidth: '560px', margin: '0 auto' }}>ทุกเรื่องสำคัญในชีวิตปรึกษาได้ หมอแจวจะช่วยอ่านจังหวะและให้แนวทางที่นำไปใช้ได้จริง</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
          {services.map((s) => (
            <a href={LINE} key={s.title} className="svc-card" style={{ background: 'linear-gradient(180deg, #fff, #FFFDF8)', border: '1px solid #EDE4D0', borderRadius: '18px', padding: '30px 28px', boxShadow: '0 4px 20px rgba(120,95,40,.04)', overflow: 'hidden', color: 'inherit' }}>
              <div style={{ width: '58px', height: '58px', borderRadius: '16px', background: 'linear-gradient(145deg, #F8F0DC, #fff)', border: '1px solid #EADFC4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 6px 14px rgba(176,134,60,.10)' }}><Icon paths={s.paths} /></div>
              <h3 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '22px', color: '#15233A', margin: '0 0 9px' }}>{s.title}</h3>
              <p style={{ fontSize: '15.5px', color: '#6B6450', margin: '0 0 20px' }}>{s.desc}</p>
              <span className="svc-link">ปรึกษาเรื่องนี้ →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ============ 3 · ABOUT ============ */}
      <section id="about" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FBF7EF 0%, #F4ECDB 100%)', marginTop: '70px' }}>
        <img src="/assets/dragon-watermark.png" alt="" style={{ position: 'absolute', right: '-140px', bottom: '-160px', width: '560px', opacity: 0.12, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: '58px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="/assets/blossom.png" alt="" style={{ position: 'absolute', top: '-64px', right: '-58px', width: '250px', height: 'auto', zIndex: 3, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: '18px -18px -18px 18px', border: '1.5px solid #D8BE82', borderRadius: '18px' }} />
            <img src="/assets/about-portrait.png" alt="หมอแจว" style={{ position: 'relative', width: '100%', borderRadius: '18px', display: 'block', boxShadow: '0 24px 50px rgba(60,45,20,.20)' }} />
          </div>
          <div>
            <div style={eyebrow}>เกี่ยวกับหมอแจว</div>
            <Diamond />
            <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', lineHeight: 1.3, color: '#15233A', margin: '0 0 22px' }}>ที่ปรึกษาที่อยู่เคียงข้าง<br />ในทุกการตัดสินใจสำคัญ</h2>
            <p style={{ fontSize: '18px', color: '#514C3E', margin: '0 0 18px' }}>หมอแจวให้คำปรึกษาด้วยศาสตร์จีนโบราณ — ฮวงจุ้ย โหงวเฮ้ง และการเลือกฤกษ์มงคล ผสานกับการรับฟังอย่างเข้าใจ เพื่อช่วยให้คุณมองเห็นภาพรวมของสถานการณ์ และเลือกทางที่เหมาะกับตัวเองมากที่สุด</p>
            <p style={{ fontSize: '18px', color: '#514C3E', margin: '0 0 30px' }}>ไม่ใช่การทำนายเพื่อความบันเทิง แต่คือการวางแผนชีวิต งาน และธุรกิจอย่างมีหลักการ พูดคุยตรงไปตรงมา และให้แนวทางที่นำไปปฏิบัติได้จริง</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {aboutPoints.map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,.6)', border: '1px solid #E7DcC2', borderRadius: '12px', padding: '15px 17px' }}>
                  <span style={{ flex: 'none', width: '24px', height: '24px', borderRadius: '50%', background: '#4F6E58', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', marginTop: '2px' }}>✓</span>
                  <span style={{ fontSize: '15.5px', color: '#3F3B30', fontWeight: 500 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 · REAL ACTIVITY GALLERY ============ */}
      <section id="proof" style={{ maxWidth: '1200px', margin: '0 auto', padding: '90px 40px 80px' }}>
        <div style={{ marginBottom: '46px', maxWidth: '640px' }}>
          <div style={eyebrow}>ภาพจากการทำงานจริง</div>
          <Diamond />
          <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 14px' }}>ประสบการณ์จริง จากการเดินทางและพบผู้คน</h2>
          <p style={{ fontSize: '18px', color: '#6B6450', margin: 0 }}>บรรยากาศการทำงานจริงกับลูกค้าทั้งในและต่างประเทศ ทั้งงานธุรกิจ การวางฮวงจุ้ยสถานที่ และการให้คำปรึกษาแบบใกล้ชิด</p>
        </div>
        <div style={{ display: 'flex', gap: '18px' }}>
          <div style={{ flex: '1.7', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <figure style={{ position: 'relative', margin: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 14px 36px rgba(60,45,20,.14)' }}>
              <img src="/assets/activity-rollsroyce.jpg" alt="หมอแจวกับลูกค้าระหว่างทำงานต่างประเทศ" style={{ width: '100%', height: '384px', objectFit: 'cover', display: 'block' }} />
              <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 24px 18px', background: 'linear-gradient(0deg, rgba(20,30,50,.78), transparent)', color: '#fff', fontSize: '15px', fontWeight: 500 }}>ดูแลลูกค้าระดับธุรกิจระหว่างเดินทางทำงานต่างประเทศ</figcaption>
            </figure>
            <div style={{ display: 'flex', gap: '18px' }}>
              <figure style={{ position: 'relative', margin: 0, flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 26px rgba(60,45,20,.12)' }}>
                <img src="/assets/activity-consult.jpg" alt="บรรยากาศการให้คำปรึกษากับลูกค้า" style={{ width: '100%', height: '248px', objectFit: 'cover', display: 'block' }} />
                <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px 13px', background: 'linear-gradient(0deg, rgba(20,30,50,.74), transparent)', color: '#fff', fontSize: '14px', fontWeight: 500 }}>พูดคุยให้คำปรึกษาแบบใกล้ชิด</figcaption>
              </figure>
              <figure style={{ position: 'relative', margin: 0, flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 26px rgba(60,45,20,.12)' }}>
                <img src="/assets/activity-table.jpg" alt="ดูฮวงจุ้ยสถานที่และพื้นที่ธุรกิจ" style={{ width: '100%', height: '248px', objectFit: 'cover', display: 'block' }} />
                <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px 13px', background: 'linear-gradient(0deg, rgba(20,30,50,.74), transparent)', color: '#fff', fontSize: '14px', fontWeight: 500 }}>ตรวจฮวงจุ้ยสถานที่และพื้นที่ธุรกิจ</figcaption>
              </figure>
            </div>
          </div>
          <figure style={{ position: 'relative', margin: 0, flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 14px 36px rgba(60,45,20,.14)' }}>
            <img src="/assets/activity-redcarpet.jpg" alt="หมอแจวในงานต้อนรับลูกค้าคนสำคัญ" style={{ width: '100%', height: '650px', objectFit: 'cover', display: 'block' }} />
            <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 24px 18px', background: 'linear-gradient(0deg, rgba(20,30,50,.78), transparent)', color: '#fff', fontSize: '15px', fontWeight: 500 }}>ได้รับการต้อนรับในงานสำคัญของลูกค้า</figcaption>
          </figure>
        </div>

        <div style={{ marginTop: '44px' }}>
          <div style={{ ...eyebrow, textAlign: 'center', marginBottom: '20px' }}>ภาพบรรยากาศเพิ่มเติม</div>
          <div className="mq-wrap" style={{ overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
            <div className="mq">
              {[...marquee, ...marquee].map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" style={{ height: '210px', width: 'auto', marginRight: '18px', borderRadius: '14px', objectFit: 'cover', display: 'block', boxShadow: '0 10px 24px rgba(60,45,20,.12)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 40px 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={eyebrow}>ทำไมต้องหมอแจว</div>
          <Divider />
          <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: 0 }}>ปรึกษาด้วยหลักการ ไม่ใช่แค่คำทำนาย</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid #EAE0CB', borderRadius: '18px', overflow: 'hidden', background: '#fff' }}>
          {whyUs.map((w, i) => (
            <div key={w.num} style={{ padding: '36px 30px', borderRight: i < whyUs.length - 1 ? '1px solid #EFE7D4' : 'none' }}>
              <div style={{ fontFamily: "'Noto Serif Thai', serif", fontSize: '34px', fontWeight: 700, color: '#D8BE82', marginBottom: '14px' }}>{w.num}</div>
              <h3 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '20px', color: '#15233A', margin: '0 0 10px' }}>{w.title}</h3>
              <p style={{ fontSize: '15px', color: '#6B6450', margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 7 · CONSULTATION OPTIONS ============ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={eyebrow}>รูปแบบการปรึกษา</div>
          <Divider />
          <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 14px' }}>เลือกรูปแบบที่เหมาะกับคุณ</h2>
          <p style={{ fontSize: '18px', color: '#6B6450', maxWidth: '560px', margin: '0 auto' }}>ทุกรูปแบบเริ่มต้นทาง LINE — เลือกได้ตามความสะดวกและความเร่งด่วนของเรื่อง</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
          {options.map((o) => (
            <div key={o.title} style={{ background: o.bg, border: `1px solid ${o.border}`, borderRadius: '18px', padding: '34px 30px', color: o.fg }}>
              <div style={{ fontSize: '13px', letterSpacing: '2px', fontWeight: 600, opacity: 0.7, marginBottom: '10px' }}>{o.tag}</div>
              <h3 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '24px', margin: '0 0 12px' }}>{o.title}</h3>
              <p style={{ fontSize: '15.5px', margin: '0 0 22px', opacity: 0.82 }}>{o.desc}</p>
              <a href={LINE} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', color: o.link }}>เริ่มปรึกษา →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 8 · MAIN LINE CTA ============ */}
      <section id="line" style={{ padding: '78px 40px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', background: '#15233A', borderRadius: '28px', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 70px rgba(20,30,50,.30)' }}>
          <img src="/assets/dragon-watermark.png" alt="" style={{ position: 'absolute', right: '-80px', top: '-70px', width: '390px', opacity: 0.16, pointerEvents: 'none' }} />
          <img src="/assets/cloud.png" alt="" style={{ position: 'absolute', left: '-30px', bottom: '-36px', width: '320px', height: 'auto', opacity: 0.55, pointerEvents: 'none', transform: 'scaleX(-1)' }} />
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '50px', alignItems: 'center', padding: '60px 62px' }}>
            <div>
              <div style={{ fontSize: '14px', letterSpacing: '4px', color: '#D8BE82', fontWeight: 600, marginBottom: '18px' }}>เริ่มต้นง่าย ๆ ผ่าน LINE</div>
              <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '42px', lineHeight: 1.35, color: '#fff', margin: '0 0 20px' }}>ยังไม่แน่ใจว่าควรเริ่ม<br />จากเรื่องอะไร?</h2>
              <p style={{ fontSize: '19px', color: '#C3CEDE', margin: '0 0 34px', maxWidth: '460px' }}>ทัก LINE เพื่อสอบถามเบื้องต้นได้ — หมอแจวจะช่วยดูว่าควรเริ่มจากเรื่องไหนก่อน แล้วค่อยตัดสินใจปรึกษาเต็มรูปแบบ</p>
              <a href={LINE} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '20px', padding: '18px 38px', borderRadius: '999px', boxShadow: '0 14px 30px rgba(6,199,85,.4)' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
                ทัก LINE {site.lineOaId}
              </a>
              <div style={{ fontSize: '14px', color: '#8FA0BC', marginTop: '18px' }}>ตอบกลับเองทุกข้อความ · ปรึกษาเบื้องต้นก่อนได้</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#fff', padding: '18px', borderRadius: '20px', boxShadow: '0 16px 40px rgba(0,0,0,.3)' }}>
                <img src="/assets/line-qr.png" alt="LINE QR code หมอแจว" style={{ width: '210px', height: '210px', display: 'block' }} />
              </div>
              <div style={{ marginTop: '16px', color: '#D8BE82', fontWeight: 600, fontSize: '16px' }}>สแกนเพื่อเพิ่มเพื่อน</div>
              <div style={{ color: '#9FB0CB', fontSize: '14px' }}>LINE: {site.lineOaId}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9 · PRICING ============ */}
      <section id="pricing" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FBF7EF, #F4ECDB)' }}>
        <img src="/assets/dragon-watermark.png" alt="" style={{ position: 'absolute', left: '-160px', top: '-130px', width: '580px', opacity: 0.1, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '86px 40px', display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={eyebrow}>ค่าปรึกษา</div>
            <Diamond />
            <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '42px', lineHeight: 1.3, color: '#15233A', margin: '0 0 22px' }}>ค่าปรึกษาชัดเจน<br />โปร่งใสตั้งแต่ต้น</h2>
            <p style={{ fontSize: '18px', color: '#514C3E', margin: '0 0 26px' }}>แจ้งค่าปรึกษาก่อนเริ่มทุกครั้ง ไม่มีการบังคับซื้อของหรือพิธีเพิ่มเติม คุณตัดสินใจได้เองว่าจะปรึกษาเรื่องใดและรูปแบบใด</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {priceIncludes.map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '13px', fontSize: '16.5px', color: '#3F3B30', fontWeight: 500 }}>
                  <span style={{ flex: 'none', width: '26px', height: '26px', borderRadius: '50%', background: '#4F6E58', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✓</span>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #E8DcBC', borderRadius: '24px', padding: '44px 44px 38px', boxShadow: '0 22px 50px rgba(120,95,40,.12)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', fontSize: '13px', letterSpacing: '2px', color: '#B0863C', fontWeight: 600, border: '1px solid #E8DcBC', borderRadius: '999px', padding: '6px 16px', marginBottom: '22px' }}>ปรึกษาส่วนตัวกับหมอแจว</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '18px', color: '#8A8068' }}>เริ่มต้น</span>
              <span style={{ fontFamily: "'Noto Serif Thai', serif", fontSize: '64px', fontWeight: 700, color: '#15233A', lineHeight: 1 }}>{site.priceStart}</span>
              <span style={{ fontSize: '22px', color: '#15233A', fontWeight: 600 }}>บาท</span>
            </div>
            <div style={{ fontSize: '15px', color: '#8A8068', marginBottom: '28px' }}>ขึ้นอยู่กับหัวข้อและรูปแบบการปรึกษา</div>
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', padding: '22px 0', borderTop: '1px solid #F0E7D3', borderBottom: '1px solid #F0E7D3', marginBottom: '28px' }}>
              {['ปรึกษาตรงประเด็นกับหมอแจวเอง', 'ให้แนวทางที่นำไปใช้ได้จริง', 'สอบถามเบื้องต้นก่อนได้'].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '11px', fontSize: '15.5px', color: '#4A463C' }}><span style={{ color: '#4F6E58', fontWeight: 700 }}>✓</span> {f}</div>
              ))}
            </div>
            <a href={LINE} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '11px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '18px', padding: '16px', borderRadius: '999px', boxShadow: '0 12px 26px rgba(6,199,85,.3)' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
              เริ่มปรึกษาผ่าน LINE
            </a>
          </div>
        </div>
      </section>

      {/* ============ 10 · FAQ ============ */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '88px 40px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={eyebrow}>คำถามที่พบบ่อย</div>
          <Divider />
          <h2 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: 0 }}>เรื่องที่คนมักถามก่อนทัก</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqData.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} style={{ background: '#fff', border: '1px solid #EAE0CB', borderRadius: '14px', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontFamily: "'Noto Sans Thai', sans-serif" }}>
                  <span style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '19px', color: '#15233A' }}>{f.q}</span>
                  <span style={{ flex: 'none', fontSize: '24px', color: '#B0863C', fontWeight: 300 }}>{open ? '−' : '+'}</span>
                </button>
                {open && <div style={{ padding: '0 26px 24px', fontSize: '16.5px', color: '#5F5949', lineHeight: 1.75 }}>{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ 11 · FOOTER ============ */}
      <footer style={{ background: '#15233A', color: '#C3CEDE' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px', marginBottom: '18px' }}>
              <img src="/assets/dragon-seal.png" alt="" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '20px', color: '#fff' }}>หมอแจว · พ่อปู่โหรา</div>
                <div style={{ fontSize: '12.5px', color: '#8FA0BC', letterSpacing: '2px' }}>ที่ปรึกษาชีวิตและธุรกิจ</div>
              </div>
            </div>
            <p style={{ fontSize: '15px', color: '#9FB0CB', maxWidth: '360px', margin: 0 }}>ที่ปรึกษาด้วยศาสตร์จีน ฮวงจุ้ย โหงวเฮ้ง และฤกษ์มงคล เพื่อช่วยให้ทุกการตัดสินใจสำคัญชัดเจนและมั่นใจยิ่งขึ้น</p>
          </div>
          <div>
            <div style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '17px', color: '#fff', marginBottom: '16px' }}>เมนู</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <a href="#services" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>บริการ</a>
              <a href="#about" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>เกี่ยวกับหมอแจว</a>
              <a href="#proof" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>ผลงานจริง</a>
              <a href="#pricing" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>ค่าปรึกษา</a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '17px', color: '#fff', marginBottom: '16px' }}>ติดต่อปรึกษา</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '15px', color: '#9FB0CB' }}>
              <div>LINE: <span style={{ color: '#06C755', fontWeight: 600 }}>{site.lineOaId}</span></div>
              <div>ปรึกษาเบื้องต้นก่อนได้</div>
              <div>ตอบกลับเองทุกข้อความ</div>
            </div>
            <a href={LINE} style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', marginTop: '18px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '15px', padding: '11px 22px', borderRadius: '999px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '5px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '11px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
              ทัก LINE
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #25364F' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '22px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13.5px', color: '#74849E' }}>
            <span>© 2569 หมอแจว · พ่อปู่โหรา สงวนลิขสิทธิ์</span>
            <span>การปรึกษาเป็นแนวทางประกอบการตัดสินใจ มิใช่การรับประกันผลลัพธ์</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
