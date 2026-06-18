// Anonymized placeholders — replace with real (still anonymized) reviews later.
const reviews = [
  { quote: 'หลังปรึกษา รู้สึกมองเห็นทางเลือกและจังหวะชีวิตชัดเจนขึ้น', who: '— เจ้าของกิจการ' },
  { quote: 'ได้รับมุมมองที่ช่วยให้ตัดสินใจเรื่องงานและธุรกิจอย่างรอบคอบมากขึ้น', who: '— ผู้บริหาร' },
  { quote: 'คำแนะนำตรงประเด็นและเป็นส่วนตัว ทำให้เข้าใจสิ่งที่ควรระวังมากขึ้น', who: '— ผู้รับคำปรึกษาด้านบ้านและทรัพย์สิน' },
];

export function Testimonials() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">เสียงจากผู้รับคำปรึกษา</p>
          <h2 className="section__title">รีวิวแบบไม่เปิดเผยตัวตน</h2>
        </div>
        <div className="review-grid">
          {reviews.map((r) => (
            <figure className="review" key={r.quote}>
              <blockquote className="review__quote">{r.quote}</blockquote>
              <figcaption className="review__who">{r.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
