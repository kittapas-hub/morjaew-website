import { DecorativeLayer } from './DecorativeLayer';

// Anonymized placeholders — replace with real (still anonymized) reviews later.
const reviews = [
  { quote: 'หลังปรึกษา รู้สึกมองเห็นทางเลือกและจังหวะชีวิตชัดเจนขึ้น', who: '— เจ้าของกิจการ' },
  { quote: 'ได้รับมุมมองที่ช่วยให้ตัดสินใจเรื่องงานและธุรกิจอย่างรอบคอบมากขึ้น', who: '— ผู้บริหาร' },
  { quote: 'คำแนะนำตรงประเด็นและเป็นส่วนตัว ทำให้เข้าใจสิ่งที่ควรระวังมากขึ้น', who: '— ผู้รับคำปรึกษาด้านบ้านและทรัพย์สิน' },
];

export function Testimonials() {
  return (
    <section className="section section--reviews" id="reviews">
      <DecorativeLayer variant="reviews" />
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">เสียงจากคนที่เคยปรึกษา</p>
          <h2 className="section__title">หลังจากได้คุย หลายคนเริ่มเห็นทางออกชัดขึ้น</h2>
          <p className="section__lead">
            รีวิวด้านล่างเป็นตัวอย่างแบบไม่เปิดเผยตัวตน เพื่อรักษาความเป็นส่วนตัวของผู้รับคำปรึกษา
          </p>
        </div>
        <div className="review-grid">
          <figure className="review review--featured" key={reviews[0].quote}>
            <span className="review__seal" aria-hidden="true">”</span>
            <blockquote className="review__quote">{reviews[0].quote}</blockquote>
            <figcaption className="review__who">{reviews[0].who}</figcaption>
          </figure>
          <div className="review-grid__support">
            {reviews.slice(1).map((r) => (
              <figure className="review" key={r.quote}>
                <blockquote className="review__quote">{r.quote}</blockquote>
                <figcaption className="review__who">{r.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
