import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import { site } from '../config/site';
import { MobileFloatingCta } from '../components/MobileFloatingCta';
import './home.css';
const NAV_SCROLL_OFFSET = 76;

// Faithful reproduction of the "หมอแจว · พ่อปู่โหรา" brand prototype
// (Prototype from brand images/หมอแจว พ่อปู่โหรา.dc.html). Inline styles match
// the original 1:1; the global resets in index.css mirror the prototype's
// helmet, so it renders as designed. The original has no breakpoints — it is a
// fixed 1200px design — so this port is intentionally desktop-first too.
const LINE = site.lineUrl;
const BOOKING = site.bookingUrl;

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
  { title: 'ความรักและคู่ครอง', desc: 'คนที่อยู่ข้างคุณวันนี้ คือคนที่ควรไปต่อด้วยกัน หรือเป็นความสัมพันธ์ที่กำลังทำให้คุณเหนื่อยอยู่ฝ่ายเดียว', paths: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M5 19c0-2.5 2-4 5-4M19 19c0-2.5-2-4-5-4"/>' },
  { title: 'งานและธุรกิจ', desc: 'จะเปลี่ยนงาน ขยายกิจการ ร่วมมือกับใคร หรือไปต่อกับทางเดิม หมอแจวช่วยดูจังหวะและจุดที่ควรรอบคอบ', paths: '<path d="M4 8h16v11H4z"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>' },
  { title: 'การเงินและการตัดสินใจสำคัญ', desc: 'เงินก้อนหนึ่ง โอกาสหนึ่ง หรือแผนหนึ่ง อาจเปลี่ยนหลายอย่างในชีวิต ควรเดินหน้า รอ หรือระวังตรงไหน', paths: '<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10.5h3.5a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3H14"/>' },
  { title: 'โหงวเฮ้งและจังหวะชีวิต', desc: 'ดูจุดแข็ง บุคลิกภาพ และจังหวะชีวิต เพื่อเข้าใจตัวเองมากขึ้นก่อนเลือกทางสำคัญ', paths: '<circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="11" r="1"/><circle cx="12" cy="15" r="1"/>' },
];

const aboutPoints = [
  'เริ่มจากประเด็นที่คุณกำลังเผชิญ',
  'ศาสตร์จีนและโหงวเฮ้งเป็นอีกมุมมอง',
  'ช่วยให้เห็นปัจจัยและทางเลือกชัดขึ้น',
  'ปรึกษาส่วนตัวตามเวลานัดหมาย',
];

const whyUs = [
  { num: '01', title: 'เรื่องที่คุณกำลังเจอ มีความหมายอย่างไร', desc: 'มองภาพรวมของปัญหา ว่าอะไรคือจุดสำคัญที่คุณกำลังเผชิญ' },
  { num: '02', title: 'คนที่เกี่ยวข้อง ควรไว้ใจแค่ไหน', desc: 'ใช้โหงวเฮ้งและข้อมูลที่มี เพื่ออ่านลักษณะ นิสัย และจังหวะความสัมพันธ์' },
  { num: '03', title: 'ควรเดินหน้า รอ หรือถอยมาตั้งหลัก', desc: 'ช่วยให้เห็นจังหวะที่ควรเร่ง จังหวะที่ควรรอ และสิ่งที่ควรระวัง' },
  { num: '04', title: 'สิ่งที่คุณอาจยังไม่ทันมองเห็น', desc: 'เปิดอีกมุมหนึ่งของเรื่องเดิม เพื่อให้ตัดสินใจโดยไม่ใช้อารมณ์เพียงอย่างเดียว' },
];

const pricingCardIncludes = [
  'ปรึกษาส่วนตัวทางโทรศัพท์ตามเวลานัดหมาย',
  'นำหลายเรื่องมาพูดคุยได้ภายในคิวเดียว',
  'ส่งรูปหน้าตรงเพื่อประกอบการพิจารณา',
  'ทีมงานยืนยันคิวหลังชำระเงินเรียบร้อย',
];

const consultSteps = [
  { num: 'ขั้นตอนที่ 1', title: 'ส่งเรื่องที่อยากรู้ให้ชัด', desc: 'บอกสิ่งที่กำลังทำให้คุณลังเล กังวล หรือยังตัดสินใจไม่ลง', cta: 'เริ่มต้นผ่าน LINE →', ctaHref: LINE },
  { num: 'ขั้นตอนที่ 2', title: 'เลือกวันและเวลาที่สะดวก', desc: 'เลือกจากรอบคิวที่เปิดให้จอง เพื่อเตรียมเวลาพูดคุยอย่างเหมาะสม', cta: 'เช็กคิวปรึกษา →', ctaHref: BOOKING },
  { num: 'ขั้นตอนที่ 3', title: 'พูดคุยส่วนตัวทางโทรศัพท์', desc: 'นำเรื่องสำคัญของคุณมาพูดคุยกับหมอแจวตามเวลานัดหมาย', cta: 'จองเวลาปรึกษา →', ctaHref: BOOKING },
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

function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    style.overflow = 'hidden';
    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.left = '0';
    style.right = '0';
    style.width = '100%';

    return () => {
      style.overflow = '';
      style.position = '';
      style.top = '';
      style.left = '';
      style.right = '';
      style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}

function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}

function useAnchorScroll(onNavigate?: () => void) {
  useEffect(() => {
    const scrollTo = (hash: string) => {
      const id = hash.replace(/^#/, '');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link?.hash || link.hash === '#') return;
      if (!document.getElementById(link.hash.slice(1))) return;
      e.preventDefault();
      scrollTo(link.hash);
      history.pushState(null, '', link.hash);
      onNavigate?.();
    };

    document.addEventListener('click', onClick);

    if (window.location.hash) {
      const timer = window.setTimeout(() => scrollTo(window.location.hash), 50);
      return () => {
        document.removeEventListener('click', onClick);
        window.clearTimeout(timer);
      };
    }

    return () => document.removeEventListener('click', onClick);
  }, [onNavigate]);
}

function Divider() {
  return (
    <div className="home-divider" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
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
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const headerScrolled = useHeaderScroll();
  useScrollLock(menuOpen);
  useAnchorScroll(closeMenu);
  return (
    <div className="home" style={{ fontFamily: "'Noto Sans Thai', sans-serif", backgroundColor: '#FBF7EF', backgroundImage: 'radial-gradient(rgba(176,134,60,0.10) 1px, transparent 1.6px)', backgroundSize: '24px 24px', color: '#29271F', overflowX: 'clip', lineHeight: 1.7 }}>      <style>{`
        .svc-card{position:relative;display:flex;flex-direction:column;transition:box-shadow .25s,transform .25s,border-color .25s}
        .svc-card:hover{box-shadow:0 16px 38px rgba(120,95,40,.14);transform:translateY(-4px);border-color:#E0C994}
        .svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#D8BE82,#B0863C);transform:scaleX(0);transform-origin:left;transition:transform .25s}
        .svc-card:hover::before{transform:scaleX(1)}
        .home-services-cta{display:inline-flex;align-items:center;gap:6px;margin-top:28px;color:#B0863C;font-weight:600;font-size:15px;text-decoration:none;transition:gap .2s}
        .home-services-cta:hover{gap:12px}
        .mq-wrap:hover .mq{animation-play-state:paused}
        .mq{display:flex;width:max-content;animation:mq 48s linear infinite}
        @keyframes mq{to{transform:translateX(-50%)}}
      `}</style>

      {/* ============ HEADER ============ */}
      <header className={`home-header${headerScrolled ? ' home-header--scrolled' : ''}`}>
        <div className="home-header__wrap">
          <div className="home-header__inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
              <img className="home-brand-logo" src="/assets/dragon-seal.png" alt="ตราหมอแจว" style={{ width: '46px', height: '46px', objectFit: 'contain' }} />
              <div style={{ lineHeight: 1.25 }}>
                <div className="home-brand-name" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '19px', color: '#15233A', letterSpacing: '.2px' }}>หมอแจว · พ่อปู่โหรา</div>
                <div className="home-brand-sub" style={{ fontSize: '11.5px', color: '#9A8F73', letterSpacing: '2px', fontWeight: 500 }}>ที่ปรึกษาชีวิตและธุรกิจ</div>
              </div>
            </div>
            <button
              type="button"
              className="home-nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="home-nav"
              aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="home-nav-toggle__bar" />
            </button>
            <nav id="home-nav" className={`home-nav${menuOpen ? ' home-nav--open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <a href="#services" style={navLink}>เรื่องที่ปรึกษา</a>
              <a href="#about" style={navLink}>หมอแจว</a>
              <a href="#proof" style={navLink}>กิจกรรม</a>
              <a href="#pricing" style={navLink}>ค่าปรึกษา</a>
              <a href={BOOKING} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '15px', padding: '10px 20px', borderRadius: '999px', boxShadow: '0 6px 16px rgba(6,199,85,.28)' }}>
                <span style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', display: 'inline-block' }} />เช็กคิวปรึกษา
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className="home-header-spacer" aria-hidden="true" />
      {/* ============ 1 · HERO ============ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(120% 120% at 80% 0%, #F6EEDC 0%, #FBF7EF 55%)' }}>
        <img src="/assets/mountain.png" alt="" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />
        <div className="home-hero-grid" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '92px 40px 84px', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div className="home-hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #E8DcBC', padding: '7px 16px', borderRadius: '999px', marginBottom: '26px', boxShadow: '0 2px 10px rgba(120,95,40,.06)' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4F6E58' }} />
              <span style={{ fontSize: '13.5px', color: '#6E6550', fontWeight: 600, letterSpacing: '.4px' }}>คำปรึกษาดวงส่วนตัว โดยหมอแจว พ่อปู่โหรา</span>
            </div>
            <h1 className="home-hero-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '56px', lineHeight: 1.22, color: '#15233A', margin: '0 0 22px', letterSpacing: '-.3px' }}>
              เรื่องที่คุณยังมองไม่เห็น<br />
              หมอแจวอาจเห็นก่อน<br />
              <span style={{ color: '#B0863C' }}>ดูจากดวงและโหงวเฮ้ง<br />เพื่ออ่านจังหวะชีวิตให้ชัด</span>
            </h1>
            <p className="home-hero-lead" style={{ fontSize: '19px', color: '#5F5949', maxWidth: '500px', margin: '0 0 36px' }}>
              เรื่องรัก งาน เงิน ธุรกิจ หรือการตัดสินใจครั้งสำคัญ<br />
              หมอแจวจะดูจากพื้นดวงและโหงวเฮ้ง เพื่อชี้ให้เห็น<br />
              จังหวะที่ควรเดินหน้า เรื่องที่ควรรอ<br />
              และสิ่งที่ไม่ควรมองข้าม
            </p>
            <div className="home-hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={BOOKING} style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '19px', padding: '17px 34px', borderRadius: '999px', boxShadow: '0 12px 26px rgba(6,199,85,.32)' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
                ให้หมอแจวช่วยดู
              </a>
              <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'transparent', color: '#3A372D', textDecoration: 'none', fontWeight: 600, fontSize: '17px', padding: '16px 26px', borderRadius: '999px', border: '1.5px solid #D8C9A4' }}>
                ดูบริการทั้งหมด
              </a>
            </div>
            <p style={{ fontSize: '13.5px', color: '#9A8F73', margin: '14px 0 0', letterSpacing: '.2px' }}>
              ปรึกษาส่วนตัวทางโทรศัพท์ · นัดหมายล่วงหน้า
            </p>
          </div>
          <div className="home-hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="home-hero-glow" style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, #FBF3E1 0%, rgba(251,243,225,0) 70%)' }} />
            <img className="home-hero-mandala" src="/assets/mandala.png" alt="" style={{ position: 'absolute', width: '500px', height: '500px', objectFit: 'contain', pointerEvents: 'none', opacity: 0.9 }} />
            <img className="home-hero-seal" src="/assets/dragon-seal.png" alt="ตราสัญลักษณ์มังกร หมอแจว" style={{ position: 'relative', width: '366px', height: '366px', objectFit: 'contain', filter: 'drop-shadow(0 18px 40px rgba(120,90,40,.16))' }} />          </div>
        </div>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #E3D2A8, transparent)', maxWidth: '1200px', margin: '0 auto' }} />
      </section>

      {/* ============ 2 · SERVICES ============ */}
      <section className="home-section-pad" style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 40px 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="home-eyebrow" style={eyebrow}>เรื่องที่คนมักเก็บไว้คิดคนเดียว</div>
          <Divider />
          <h2 id="services" className="home-section-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 14px' }}>บางคำถามไม่มีใครตอบแทนคุณได้<br />แต่คุณไม่จำเป็นต้องหาคำตอบคนเดียว</h2>          <p style={{ fontSize: '18px', color: '#6B6450', maxWidth: '560px', margin: '0 auto' }}>ภายในหนึ่งคิว คุณนำทุกเรื่องที่กำลังค้างอยู่ในใจมาพูดคุยได้<br />เพราะเรื่องความรัก งาน เงิน และครอบครัว<br />หลายครั้งเกี่ยวข้องกันมากกว่าที่คิด</p>
        </div>
        <div className="home-services-grid" style={{ display: 'grid', gap: '22px' }}>          {services.map((s) => (
            <div key={s.title} className="svc-card" style={{ background: 'linear-gradient(180deg, #fff, #FFFDF8)', border: '1px solid #EDE4D0', borderRadius: '18px', padding: '30px 28px', boxShadow: '0 4px 20px rgba(120,95,40,.04)', overflow: 'hidden', color: 'inherit' }}>
              <div style={{ width: '58px', height: '58px', borderRadius: '16px', background: 'linear-gradient(145deg, #F8F0DC, #fff)', border: '1px solid #EADFC4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 6px 14px rgba(176,134,60,.10)' }}><Icon paths={s.paths} /></div>
              <h3 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '22px', color: '#15233A', margin: '0 0 9px' }}>{s.title}</h3>
              <p style={{ fontSize: '15.5px', color: '#6B6450', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <a href="#pricing" className="home-services-cta">ดูรายละเอียดการปรึกษาส่วนตัว →</a>
        </div>
      </section>

      {/* ============ 3 · ABOUT ============ */}
      <section id="about" className="home-about" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FBF7EF 0%, #F4ECDB 100%)', marginTop: '70px' }}>
        <img src="/assets/dragon-watermark.png" alt="" style={{ position: 'absolute', right: '-140px', bottom: '-160px', width: '560px', opacity: 0.12, pointerEvents: 'none' }} />
        <div className="home-about-grid" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '88px 40px', display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: '58px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img className="home-about-blossom" src="/assets/blossom.png" alt="" style={{ position: 'absolute', top: '-64px', right: '-58px', width: '250px', height: 'auto', zIndex: 3, pointerEvents: 'none' }} />            <div style={{ position: 'absolute', inset: '18px -18px -18px 18px', border: '1.5px solid #D8BE82', borderRadius: '18px' }} />
            <img src="/assets/about-portrait.png" alt="หมอแจว" style={{ position: 'relative', width: '100%', borderRadius: '18px', display: 'block', boxShadow: '0 24px 50px rgba(60,45,20,.20)' }} />
          </div>
          <div>
            <div className="home-eyebrow" style={eyebrow}>เมื่อเรื่องสำคัญ ไม่ควรฝากไว้กับคำตอบทั่วไป</div>
            <Diamond />
            <h2 className="home-section-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', lineHeight: 1.3, color: '#15233A', margin: '0 0 22px' }}>คำปรึกษาที่เริ่มจากเรื่องของคุณ<br />ไม่ใช่คำทำนายสำเร็จรูป</h2>            <p style={{ fontSize: '18px', color: '#514C3E', margin: '0 0 30px' }}>หมอแจวให้คำปรึกษาด้วยศาสตร์จีนและโหงวเฮ้งมาอย่างต่อเนื่อง โดยให้ความสำคัญกับสิ่งที่คุณกำลังเผชิญจริง เพื่อช่วยมองภาพรวม จังหวะ และปัจจัยที่อาจถูกมองข้าม ก่อนคุณตัดสินใจในเรื่องที่มีความหมายกับชีวิตของตัวเอง</p>
            <div className="home-about-points" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>              {aboutPoints.map((p) => (
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
      <section id="proof" className="home-section-pad home-section-pad--lg" style={{ maxWidth: '1200px', margin: '0 auto', padding: '90px 40px 80px' }}>
        <div style={{ marginBottom: '46px', maxWidth: '640px' }}>
          <div className="home-eyebrow" style={eyebrow}>ได้รับความไว้วางใจในเรื่องสำคัญ</div>
          <Diamond />
          <h2 className="home-section-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 14px' }}>เมื่อการตัดสินใจไม่ได้กระทบแค่วันนี้<br />แต่ส่งผลต่อชีวิต ครอบครัว และธุรกิจในระยะยาว</h2>          <p style={{ fontSize: '18px', color: '#6B6450', margin: 0 }}>ตลอดเส้นทางการให้คำปรึกษา หมอแจวได้รับความไว้วางใจจากผู้ประกอบการ<br />ผู้บริหาร และผู้ที่ต้องตัดสินใจในเรื่องสำคัญของชีวิตและธุรกิจ<br />เพราะบางเรื่องไม่ควรใช้ความรู้สึกเพียงอย่างเดียวในการเลือกทางต่อไป</p>
        </div>
        <div className="home-gallery-layout" style={{ display: 'flex', gap: '18px' }}>
          <div className="home-gallery-main" style={{ flex: '1.7', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <figure style={{ position: 'relative', margin: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 14px 36px rgba(60,45,20,.14)' }}>
              <img src="/assets/activity-rollsroyce.jpg" alt="หมอแจวกับลูกค้าระหว่างทำงานต่างประเทศ" style={{ width: '100%', height: '384px', objectFit: 'cover', display: 'block' }} />              <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 24px 18px', background: 'linear-gradient(0deg, rgba(20,30,50,.78), transparent)', color: '#fff', fontSize: '15px', fontWeight: 500 }}>ดูแลลูกค้าระดับธุรกิจระหว่างเดินทางทำงานต่างประเทศ</figcaption>
            </figure>
            <div className="home-gallery-side" style={{ display: 'flex', gap: '18px' }}>              <figure style={{ position: 'relative', margin: 0, flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 26px rgba(60,45,20,.12)' }}>
                <img src="/assets/activity-consult.jpg" alt="บรรยากาศการให้คำปรึกษากับลูกค้า" style={{ width: '100%', height: '248px', objectFit: 'cover', display: 'block' }} />
                <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px 13px', background: 'linear-gradient(0deg, rgba(20,30,50,.74), transparent)', color: '#fff', fontSize: '14px', fontWeight: 500 }}>พูดคุยให้คำปรึกษาแบบใกล้ชิด</figcaption>
              </figure>
              <figure style={{ position: 'relative', margin: 0, flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 26px rgba(60,45,20,.12)' }}>
                <img src="/assets/activity-table.jpg" alt="ดูฮวงจุ้ยสถานที่และพื้นที่ธุรกิจ" style={{ width: '100%', height: '248px', objectFit: 'cover', display: 'block' }} />
                <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px 13px', background: 'linear-gradient(0deg, rgba(20,30,50,.74), transparent)', color: '#fff', fontSize: '14px', fontWeight: 500 }}>ตรวจฮวงจุ้ยสถานที่และพื้นที่ธุรกิจ</figcaption>
              </figure>
            </div>
          </div>
          <figure className="home-gallery-tall" style={{ position: 'relative', margin: 0, flex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 14px 36px rgba(60,45,20,.14)' }}>            <img src="/assets/activity-redcarpet.jpg" alt="หมอแจวในงานต้อนรับลูกค้าคนสำคัญ" style={{ width: '100%', height: '650px', objectFit: 'cover', display: 'block' }} />
            <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 24px 18px', background: 'linear-gradient(0deg, rgba(20,30,50,.78), transparent)', color: '#fff', fontSize: '15px', fontWeight: 500 }}>ได้รับการต้อนรับในงานสำคัญของลูกค้า</figcaption>
          </figure>
        </div>

        <div style={{ marginTop: '44px' }}>
          <div style={{ ...eyebrow, textAlign: 'center', marginBottom: '20px' }}>ภาพบรรยากาศเพิ่มเติม</div>
          <div className="mq-wrap" style={{ overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
            <div className="mq">
              {[...marquee, ...marquee].map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" className="home-marquee" style={{ height: '210px', width: 'auto', marginRight: '18px', borderRadius: '14px', objectFit: 'cover', display: 'block', boxShadow: '0 10px 24px rgba(60,45,20,.12)' }} />              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section id="approach" className="home-section-pad home-section-pad--lg" style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 40px 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="home-eyebrow" style={eyebrow}>มาดูแล้ว หมอแจวจะบอกอะไร</div>
          <Divider />
          <h2 className="home-section-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 18px' }}>ไม่ใช่แค่ให้คุณเล่าเรื่อง<br />แต่หมอแจวจะบอกสิ่งที่คุณควรมองให้ชัด</h2>
          <p style={{ fontSize: '18px', color: '#6B6450', maxWidth: '640px', margin: '0 auto' }}>หมอแจวไม่ได้ให้คำปลอบใจสำเร็จรูป<br />แต่จะดูจากดวงและโหงวเฮ้ง แล้วพูดตรงตามสิ่งที่เห็น<br />เพื่อให้คุณรู้ว่าเรื่องนี้กำลังอยู่ในจังหวะแบบไหน<br />มีอะไรที่ควรเดินหน้า และอะไรที่ไม่ควรมองข้าม</p>
        </div>
        <div className="home-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid #EAE0CB', borderRadius: '18px', overflow: 'hidden', background: '#fff' }}>          {whyUs.map((w, i) => (
            <div key={w.num} style={{ padding: '36px 30px', borderRight: i < whyUs.length - 1 ? '1px solid #EFE7D4' : 'none' }}>
              <div style={{ fontFamily: "'Noto Serif Thai', serif", fontSize: '34px', fontWeight: 700, color: '#D8BE82', marginBottom: '14px' }}>{w.num}</div>
              <h3 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '20px', color: '#15233A', margin: '0 0 10px' }}>{w.title}</h3>
              <p style={{ fontSize: '15px', color: '#6B6450', margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 7 · CONSULTATION OPTIONS ============ */}
      <section id="consult" className="home-section-pad home-consult" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="home-eyebrow" style={eyebrow}>เมื่อคุณพร้อมจะรู้คำตอบ</div>
          <Divider />
          <h2 className="home-section-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: '0 0 18px' }}>เริ่มจากเรื่องที่คุณคิดไม่ตก<br />แล้วให้หมอแจวช่วยอ่านภาพที่อยู่ข้างหน้า</h2>
          <p style={{ fontSize: '18px', color: '#6B6450', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>ส่งหัวข้อที่กำลังหนักใจผ่าน LINE เลือกเวลาที่สะดวก<br />แล้วพูดคุยกับหมอแจวเป็นการส่วนตัวทางโทรศัพท์ตามเวลานัดหมาย</p>
        </div>
        <div className="home-consult-steps">
          {consultSteps.map((step, i) => (
            <div key={step.title} className="home-consult-step" data-step={i + 1}>
              <div className="home-consult-step__num">{step.num}</div>
              <h3 className="home-consult-step__title">{step.title}</h3>
              <p className="home-consult-step__desc">{step.desc}</p>
              <a href={step.ctaHref} className="home-consult-cta" style={{ marginTop: '18px' }}>{step.cta}</a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a href={BOOKING} className="home-consult-cta">เช็กคิวปรึกษา →</a>
        </div>
      </section>

      {/* ============ 8 · MAIN LINE CTA ============ */}
      <section id="line" className="home-line-section" style={{ padding: '78px 40px' }}>
        <div className="home-line-card" style={{ maxWidth: '1140px', margin: '0 auto', background: '#15233A', borderRadius: '28px', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 70px rgba(20,30,50,.30)' }}>          <img src="/assets/dragon-watermark.png" alt="" style={{ position: 'absolute', right: '-80px', top: '-70px', width: '390px', opacity: 0.16, pointerEvents: 'none' }} />
          <img src="/assets/cloud.png" alt="" style={{ position: 'absolute', left: '-30px', bottom: '-36px', width: '320px', height: 'auto', opacity: 0.55, pointerEvents: 'none', transform: 'scaleX(-1)' }} />
          <div className="home-line-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '50px', alignItems: 'center', padding: '60px 62px' }}>
            <div>
              <div className="home-eyebrow" style={{ fontSize: '14px', letterSpacing: '4px', color: '#D8BE82', fontWeight: 600, marginBottom: '18px' }}>อย่าปล่อยให้เรื่องสำคัญค้างอยู่ในใจนานเกินไป</div>
              <h2 className="home-line-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '42px', lineHeight: 1.35, color: '#fff', margin: '0 0 20px' }}>ถ้าวันนี้คุณยังตัดสินใจไม่ลง<br />ให้หมอแจวช่วยดูอีกมุมหนึ่งก่อน</h2>              <p style={{ fontSize: '19px', color: '#C3CEDE', margin: '0 0 34px', maxWidth: '460px' }}>ส่งเรื่องที่คุณกำลังคิดไม่ตกมาได้<br />แล้วเริ่มต้นจากการมองสิ่งที่อยู่ตรงหน้าให้ชัดกว่าเดิม</p>
              <a href={LINE} className="home-line-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '20px', padding: '18px 38px', borderRadius: '999px', boxShadow: '0 14px 30px rgba(6,199,85,.4)' }}>                <span style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
                ทัก LINE เพื่อเช็กคิว
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
        <div className="home-pricing-grid" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '86px 40px', display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="home-eyebrow" style={eyebrow}>การปรึกษาส่วนตัว</div>
            <Diamond />
            <h2 className="home-pricing-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '42px', lineHeight: 1.3, color: '#15233A', margin: '0 0 22px' }}>หนึ่งคิว<br />สำหรับเรื่องที่คุณไม่อยากปล่อยให้ค้างอยู่ในใจ</h2>
            <p style={{ fontSize: '18px', color: '#514C3E', margin: 0 }}>คุณไม่จำเป็นต้องเลือกว่าจะถามเรื่องความรัก งาน เงิน หรือธุรกิจก่อน<br />เพราะภายในหนึ่งคิว คุณสามารถนำทุกเรื่องที่กำลังหนักใจมาพูดคุยได้</p>
          </div>
          <div className="home-pricing-card" style={{ background: '#fff', border: '1px solid #E8DcBC', borderRadius: '24px', padding: '44px 44px 38px', boxShadow: '0 22px 50px rgba(120,95,40,.12)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '28px', color: '#15233A', margin: '0 0 22px', lineHeight: 1.35 }}>แพ็กเกจปรึกษาส่วนตัว</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="home-pricing-price" style={{ fontFamily: "'Noto Serif Thai', serif", fontSize: '64px', fontWeight: 700, color: '#15233A', lineHeight: 1 }}>{site.priceStart}</span>
              <span style={{ fontSize: '22px', color: '#15233A', fontWeight: 600 }}>บาท</span>
            </div>
            <div style={{ fontSize: '15px', color: '#8A8068', marginBottom: '22px' }}>ต่อ 1 ครั้ง</div>
            <p style={{ fontSize: '15px', color: '#514C3E', margin: '0 0 28px', lineHeight: 1.75 }}>สำหรับการพูดคุยเรื่องสำคัญที่คุณต้องการรู้ให้ชัด<br />ทั้งความรัก คู่ครอง งาน ธุรกิจ การเงิน ครอบครัว และจังหวะชีวิต</p>
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', padding: '22px 0', borderTop: '1px solid #F0E7D3', borderBottom: '1px solid #F0E7D3', marginBottom: '28px' }}>
              {pricingCardIncludes.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '11px', fontSize: '15.5px', color: '#4A463C' }}><span style={{ color: '#4F6E58', fontWeight: 700 }}>✓</span> {f}</div>
              ))}
            </div>
            <a href={BOOKING} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '11px', background: '#06C755', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '18px', padding: '16px', borderRadius: '999px', boxShadow: '0 12px 26px rgba(6,199,85,.3)' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#fff', color: '#06C755', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>L</span>
              จองคิวปรึกษาส่วนตัว
            </a>
          </div>
        </div>
      </section>

      {/* ============ 10 · FAQ ============ */}
      <section id="faq" className="home-faq" style={{ maxWidth: '820px', margin: '0 auto', padding: '88px 40px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div className="home-eyebrow" style={eyebrow}>คำถามที่พบบ่อย</div>
          <Divider />
          <h2 className="home-section-title" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 700, fontSize: '40px', color: '#15233A', margin: 0 }}>เรื่องที่คนมักถามก่อนทัก</h2>        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqData.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} style={{ background: '#fff', border: '1px solid #EAE0CB', borderRadius: '14px', overflow: 'hidden' }}>
                <button className="home-faq-btn" onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', padding: '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontFamily: "'Noto Sans Thai', sans-serif" }}>
                  <span className="home-faq-q" style={{ fontFamily: "'Noto Serif Thai', serif", fontWeight: 600, fontSize: '19px', color: '#15233A' }}>{f.q}</span>                  <span style={{ flex: 'none', fontSize: '24px', color: '#B0863C', fontWeight: 300 }}>{open ? '−' : '+'}</span>
                </button>
                {open && <div style={{ padding: '0 26px 24px', fontSize: '16.5px', color: '#5F5949', lineHeight: 1.75 }}>{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ 11 · FOOTER ============ */}
      <footer style={{ background: '#15233A', color: '#C3CEDE' }}>
        <div className="home-footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '48px' }}>          <div>
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
              <a href="#services" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>เรื่องที่ปรึกษา</a>
              <a href="#about" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>หมอแจว</a>
              <a href="#proof" style={{ color: '#9FB0CB', textDecoration: 'none', fontSize: '15px' }}>กิจกรรม</a>
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
          <div className="home-footer-bar" style={{ maxWidth: '1200px', margin: '0 auto', padding: '22px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13.5px', color: '#74849E' }}>            <span>© 2569 หมอแจว · พ่อปู่โหรา สงวนลิขสิทธิ์</span>
            <span>การปรึกษาเป็นแนวทางประกอบการตัดสินใจ มิใช่การรับประกันผลลัพธ์</span>
          </div>
        </div>
      </footer>
      <MobileFloatingCta />
    </div>
  );
}
