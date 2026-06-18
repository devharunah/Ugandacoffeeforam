import SiteNav from "@/src/components/site/nav";
import Hero from "@/src/components/site/hero";
import Reposition from "@/src/components/site/reposition";
import Solutions from "@/src/components/site/solutions";
import Flagship from "@/src/components/site/flagship";
import FieldBanner from "@/src/components/site/field-banner";
import Steps from "@/src/components/site/steps";
import FAQ from "@/src/components/site/faq";
import CtaBand from "@/src/components/site/cta-band";
import SiteFooter from "@/src/components/site/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Reposition />
        <Solutions />
        <Flagship />
        <FieldBanner />
        <Steps />
        <FAQ />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
