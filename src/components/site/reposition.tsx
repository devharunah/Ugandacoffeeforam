import { siteConfig } from "@/src/lib/site-config";

const columns = [
  {
    k: "01 — Diagnose",
    title: "Catch disease early",
    body: "Farmers lose harvests to disease they spot too late. KawaScan turns any phone camera into a field diagnosis tool.",
  },
  {
    k: "02 — Trade",
    title: "Sell coffee directly",
    body: "Our marketplace still connects farmers, cafés and buyers — now as one part of a wider toolkit, not the whole story.",
  },
  {
    k: "03 — Grow",
    title: "Learn what works",
    body: "Plain-language guidance and an offline disease library, written for the realities of smallholder farming.",
  },
];

export default function Reposition() {
  return (
    <section className="band-dark reposition">
      <div className="container">
        <span className="eyebrow on-dark">Our mission</span>
        <p className="big">
          {siteConfig.name} is no longer just a marketplace.{" "}
          <span className="hl">
            We build digital solutions for the people who grow coffee — and the
            farms they depend on.
          </span>
        </p>
        <div className="cols">
          {columns.map((c) => (
            <div className="col" key={c.k}>
              <div className="k">{c.k}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
