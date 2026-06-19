import { Play, Leaf } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";
import KawaPhone from "./kawa-phone";
import Reveal from "./reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hgrid">
        <Reveal className="copy" once y={18}>
          <span className="eyebrow">{siteConfig.tagline}</span>
          <h1>
            Software for the people who <em>grow coffee.</em>
          </h1>
          <p className="lead">
            {siteConfig.name} builds simple, reliable apps for coffee farmers and
            agriculture across East Africa — starting with KawaScan, the app that
            diagnoses plant disease from a single photo.
          </p>
          <div className="cta">
            <a
              href={siteConfig.androidDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wbtn wbtn-primary"
            >
              <Play />
              Get KawaScan for Android
            </a>
            <a href="#solutions" className="wbtn wbtn-ghost">
              See what we build
            </a>
          </div>
          <div className="trust">
            <div className="t">
              <b>Uganda</b>
              <span>Built for East African farms</span>
            </div>
            <div className="divr" />
            <div className="t">
              <b>Free</b>
              <span>Start scanning at no cost</span>
            </div>
            <div className="divr" />
            <div className="t">
              <b>Offline</b>
              <span>Works in the field</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="stage" once y={14} delay={0.12}>
          <div className="badge">
            <span className="dot">
              <Leaf />
            </span>
            Diagnosing Coffee Leaf Rust…
          </div>
          <KawaPhone screen="home" />
        </Reveal>
      </div>
    </section>
  );
}
