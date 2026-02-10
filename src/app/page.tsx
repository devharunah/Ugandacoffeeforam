import ContentSection from "../components/content-1";
import FAQsThree from "../components/faqs-3";
import FooterSection from "../components/footer";
import HeroSection from "../components/hero-section";
import LucyHero from "../components/mvpblocks/mockup-hero";

export default function Home() {
  return (
    <div>
      <HeroSection/>
    <ContentSection/>
    <FAQsThree/>
    <FooterSection/>
    </div>
  );
}
