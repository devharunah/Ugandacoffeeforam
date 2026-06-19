import { Camera, Zap, Wallet, Volume2, Play } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";
import KawaPhone from "./kawa-phone";
import Reveal from "./reveal";

const feats = [
  {
    icon: Camera,
    title: "Diagnose from one photo",
    body: "Identify rust, borer, and leaf spot in seconds with a confidence score.",
  },
  {
    icon: Zap,
    title: "Built for the field",
    body: "High-contrast, large-type, works offline and in bright sunlight.",
  },
  {
    icon: Wallet,
    title: "Pay with Mobile Money",
    body: "Buy scan packs in a tap — no card or bank account needed.",
  },
  {
    icon: Volume2,
    title: "In your language",
    body: "Read-aloud results in Luganda so anyone on the farm can act.",
  },
];

export default function Flagship() {
  return (
    <section className="flagship ksection" id="kawascan">
      <div className="container fgrid">
        <Reveal className="copy">
          <span className="eyebrow">Flagship · KawaScan</span>
          <h2>Point your phone at a leaf. Know what&apos;s wrong.</h2>
          <p className="lead">
            KawaScan is the app at the heart of {siteConfig.name} — a fast,
            offline-first diagnosis tool designed for real farms, not lab
            conditions.
          </p>
          <div className="feats">
            {feats.map((f) => {
              const Icon = f.icon;
              return (
                <div className="feat" key={f.title}>
                  <span className="ic">
                    <Icon />
                  </span>
                  <div>
                    <b>{f.title}</b>
                    <p>{f.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cta">
            <a
              href={siteConfig.androidDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wbtn wbtn-primary"
            >
              <Play />
              Get KawaScan
            </a>
            <a href="#farmers" className="wbtn wbtn-ghost">
              See how it works
            </a>
          </div>
        </Reveal>

        <Reveal className="phones" y={16} delay={0.08}>
          <KawaPhone screen="home" problems={["Coffee Leaf Rust", "Coffee Berry Borer"]} />
          <KawaPhone screen="pay" />
        </Reveal>
      </div>
    </section>
  );
}
