import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickMenu } from '../components/QuickMenu';
import { About } from '../components/About';
import { Pillars } from '../components/Pillars';
import { Pricing } from '../components/Pricing';
import { Process } from '../components/Process';
import { TrustPrivacy } from '../components/TrustPrivacy';
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
        <Pillars />
        <Pricing />
        <Process />
        <TrustPrivacy />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
