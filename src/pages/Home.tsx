import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickMenu } from '../components/QuickMenu';
import { About } from '../components/About';
import { ExperienceGallery } from '../components/ExperienceGallery';
import { Pillars } from '../components/Pillars';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';
import { FinalCta } from '../components/FinalCta';
import { Footer } from '../components/Footer';
import { StickyCta } from '../components/StickyCta';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickMenu />
        <About />
        <ExperienceGallery />
        <img className="section-divider" src="/morjaew-lotus-divider.svg" alt="" aria-hidden="true" />
        <Testimonials />
        <img className="section-divider" src="/morjaew-lotus-divider.svg" alt="" aria-hidden="true" />
        <Pillars />
        <FinalCta />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
