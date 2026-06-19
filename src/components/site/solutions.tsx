import { ScanLine, Store, BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";
import Reveal from "./reveal";

const cards = [
  {
    tonal: true,
    icon: ScanLine,
    flag: "Flagship app",
    title: "KawaScan",
    body: "Point your phone at a leaf and get an instant diagnosis, severity, and a treatment plan — even with no signal.",
    cta: "Explore KawaScan",
    href: "#kawascan",
  },
  {
    tonal: false,
    icon: Store,
    flag: "Marketplace",
    title: "KawaCoffee Market",
    body: "Post your coffee and products online, set your prices, and connect directly with roasters and buyers — no middlemen.",
    cta: "Start selling",
    href: siteConfig.androidDownloadUrl,
    external: true,
  },
  {
    tonal: false,
    icon: BookOpen,
    flag: "Knowledge",
    title: "Agronomy guide",
    body: "An offline library of coffee diseases and good practices, with read-aloud support in local languages.",
    cta: "Browse the guide",
    href: "#farmers",
  },
];

export default function Solutions() {
  return (
    <section className="solutions ksection" id="solutions">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">What we build</span>
          <h2>One toolkit for the coffee value chain.</h2>
          <p>
            Each {siteConfig.name} product solves a real problem farmers told us
            about. They share one account, one design language, and work on the
            phones people already own.
          </p>
        </Reveal>
        <Reveal className="sgrid" delay={0.05}>
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className={`scard${c.tonal ? " tonal" : ""}`}
              >
                <span className="tile">
                  <Icon />
                </span>
                <div className="flag">{c.flag}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <a
                  href={c.href}
                  className="go"
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {c.cta} <ArrowRight />
                </a>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
