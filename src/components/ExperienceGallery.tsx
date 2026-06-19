import { useEffect, useState } from 'react';
import { DecorativeLayer } from './DecorativeLayer';

const photos = [
  {
    src: '/gallery/471164547_2017488522009345_5935863155780163297_n.jpg',
    alt: 'ภาพบรรยากาศการพบปะและพูดคุยในพื้นที่รับรอง',
    caption: 'ภาพบรรยากาศจากการพบปะและกิจกรรม',
    width: 1280,
    height: 960,
  },
  {
    src: '/gallery/Welcome to hotel.jpg',
    alt: 'ภาพบรรยากาศการต้อนรับและกิจกรรมหน้าอาคาร',
    caption: 'ภาพบรรยากาศจากกิจกรรมต่าง ๆ',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/470991680_2017488535342677_2782170254806095880_n.jpg',
    alt: 'ภาพบรรยากาศการพบปะระหว่างการเดินทาง',
    caption: 'การเดินทางและการพบปะผู้คน',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/471092086_2017488512009346_9032585567358442966_n.jpg',
    alt: 'ภาพบรรยากาศการพูดคุยและพบปะภายในพื้นที่รับรอง',
    caption: 'ภาพบรรยากาศจากการพบปะและกิจกรรม',
    width: 1440,
    height: 700,
  },
  {
    src: '/gallery/525339454_1321296316665204_2923614766305938835_n.jpg',
    alt: 'ภาพบรรยากาศจากกิจกรรมวัฒนธรรมและการพบปะผู้คน',
    caption: 'ภาพบรรยากาศจากกิจกรรมต่าง ๆ',
    width: 1477,
    height: 1108,
  },
  {
    src: '/gallery/472695163_2028546647570199_4819619876847507409_n.jpg',
    alt: 'ภาพอาคารจากการเดินทางและกิจกรรมที่ผ่านมา',
    caption: 'ภาพบรรยากาศจากประสบการณ์ที่ผ่านมา',
    width: 1212,
    height: 930,
  },
  {
    src: '/gallery/472770001_2028546707570193_4504578443042822604_n.jpg',
    alt: 'ภาพบรรยากาศการเดินทางบริเวณอาคารและสวน',
    caption: 'ช่วงเวลาหนึ่งจากการเดินทาง',
    width: 1440,
    height: 810,
  },
  {
    src: '/gallery/471235542_2017488398676024_5062744874238336249_n.jpg',
    alt: 'ภาพบรรยากาศการเดินทางและการต้อนรับบริเวณหน้าอาคาร',
    caption: 'การเดินทางและการพบปะผู้คน',
    width: 960,
    height: 1280,
  },
  {
    src: '/gallery/472690289_2028546670903530_3600735354073165593_n.jpg',
    alt: 'ภาพบรรยากาศการพบปะและพูดคุยในพื้นที่กิจกรรม',
    caption: 'ภาพบรรยากาศจากกิจกรรมต่าง ๆ',
    width: 1440,
    height: 1080,
  },
  {
    src: '/gallery/472401925_2028546554236875_8583338569384398293_n.jpg',
    alt: 'ภาพบรรยากาศจากการเดินทางบริเวณอาคาร',
    caption: 'ช่วงเวลาหนึ่งจากการเดินทาง',
    width: 1080,
    height: 1440,
  },
  {
    src: '/gallery/522927627_1316399743821528_8886331329605476171_n.jpg',
    alt: 'ภาพบรรยากาศจากกิจกรรมพิธีและการพบปะผู้คน',
    caption: 'ภาพบรรยากาศจากกิจกรรมต่าง ๆ',
    width: 1477,
    height: 1108,
  },
  {
    src: '/gallery/525339839_1321296346665201_2656325234407034636_n.jpg',
    alt: 'ภาพบรรยากาศเครื่องประกอบพิธีและกิจกรรมที่ผ่านมา',
    caption: 'ภาพบรรยากาศจากประสบการณ์ที่ผ่านมา',
    width: 1477,
    height: 1108,
  },
  {
    src: '/gallery/Rollroys.jpg',
    alt: 'ภาพบรรยากาศจากการเดินทางและยานพาหนะ',
    caption: 'ภาพบรรยากาศจากประสบการณ์ที่ผ่านมา',
    width: 1706,
    height: 960,
  },
];

const lowerRowPhotoIndexes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function ExperienceGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? current : (current + photos.length - 1) % photos.length));
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? current : (current + 1) % photos.length));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const openPhoto = (index: number) => setActiveIndex(index);
  const goToPrevious = () => setActiveIndex((current) => (current === null ? current : (current + photos.length - 1) % photos.length));
  const goToNext = () => setActiveIndex((current) => (current === null ? current : (current + 1) % photos.length));

  return (
    <section className="section section--gallery" id="experience">
      <DecorativeLayer variant="gallery" />
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">ประสบการณ์และบรรยากาศจริง</p>
          <h2 className="section__title">ประสบการณ์จริง จากการเดินทางและการพบปะผู้คน</h2>
          <p className="section__lead">
            ภาพบางส่วนจากการเดินทาง การพบปะ และกิจกรรมต่าง ๆ ที่สะท้อนประสบการณ์ของหมอแจวตลอดหลายปีที่ผ่านมา
          </p>
        </div>

        <div className="experience-gallery" aria-label="แกลเลอรีภาพบรรยากาศและประสบการณ์">
          <button className="gallery-card gallery-card--main" type="button" onClick={() => openPhoto(0)}>
            <img src={photos[0].src} alt={photos[0].alt} width={photos[0].width} height={photos[0].height} loading="lazy" />
            <span>{photos[0].caption}</span>
          </button>

          <div className="gallery-side">
            {[1, 2].map((index) => (
              <button className="gallery-card gallery-card--support" type="button" onClick={() => openPhoto(index)} key={photos[index].src}>
                <img src={photos[index].src} alt={photos[index].alt} width={photos[index].width} height={photos[index].height} loading="lazy" />
                <span>{photos[index].caption}</span>
              </button>
            ))}
          </div>

          <p className="gallery-strip__label">ภาพบรรยากาศเพิ่มเติม</p>
          <div className="gallery-marquee" aria-label="ภาพบรรยากาศเพิ่มเติมแบบเลื่อน">
            <div className="gallery-strip">
              {[0, 1].map((setIndex) => (
                <div className="gallery-strip__set" aria-hidden={setIndex === 1 ? 'true' : undefined} key={setIndex}>
                  {lowerRowPhotoIndexes.map((index) => (
                    <button
                      className="gallery-card gallery-card--small"
                      type="button"
                      onClick={() => openPhoto(index)}
                      key={`${setIndex}-${photos[index].src}`}
                      tabIndex={setIndex === 1 ? -1 : undefined}
                    >
                      <img src={photos[index].src} alt={photos[index].alt} width={photos[index].width} height={photos[index].height} loading="lazy" />
                      <span>{photos[index].caption}</span>
                    </button>
                  ))}
                  <button className="gallery-more" type="button" onClick={() => openPhoto(5)} tabIndex={setIndex === 1 ? -1 : undefined}>
                    <span className="gallery-more__icon" aria-hidden="true" />
                    <span className="gallery-more__count">+{photos.length - 5}</span>
                    <span className="gallery-more__title">ภาพเพิ่มเติม</span>
                    <span className="gallery-more__hint">กดเพื่อดูภาพทั้งหมด</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activePhoto && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="ดูภาพบรรยากาศแบบขยาย">
          <button className="gallery-lightbox__backdrop" type="button" aria-label="ปิดภาพขยาย" onClick={() => setActiveIndex(null)} />
          <div className="gallery-lightbox__panel">
            <button className="gallery-lightbox__close" type="button" onClick={() => setActiveIndex(null)}>
              ปิด
            </button>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={goToPrevious}>
              ก่อนหน้า
            </button>
            <img src={activePhoto.src} alt={activePhoto.alt} width={activePhoto.width} height={activePhoto.height} />
            <p>{activePhoto.caption}</p>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={goToNext}>
              ถัดไป
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
