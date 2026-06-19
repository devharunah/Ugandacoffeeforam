import { Play } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";
import Reveal from "./reveal";

export default function CtaBand() {
  return (
    <section className="cta-band" id="get" style={{ padding: 0 }}>
      <div className="container inner">
        <Reveal>
          <h2>Get KawaCoffee on Android.</h2>
          <p>
            Start with KawaScan free, then build from there. One account for
            every {siteConfig.name} tool.
          </p>
        </Reveal>
        <Reveal className="actions" delay={0.05}>
          <a
            href={siteConfig.androidDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wbtn wbtn-on-dark"
          >
            <Play />
            Download for Android
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="wbtn wbtn-dark-ghost"
          >
            Talk to the team
          </a>
        </Reveal>
      </div>
    </section>
  );
}
