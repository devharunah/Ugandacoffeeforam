import { Play } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";

export default function CtaBand() {
  return (
    <section className="cta-band" id="get" style={{ padding: 0 }}>
      <div className="container inner">
        <div>
          <h2>Get KawaCoffee on Android.</h2>
          <p>
            Start with KawaScan free, then build from there. One account for
            every {siteConfig.name} tool.
          </p>
        </div>
        <div className="actions">
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
        </div>
      </div>
    </section>
  );
}
