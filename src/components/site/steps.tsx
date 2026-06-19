import Reveal from "./reveal";

const steps = [
  {
    num: "Step 01",
    big: "01",
    title: "Scan",
    body: "Open KawaScan and photograph the affected leaf or berry. No typing, no signal required.",
  },
  {
    num: "Step 02",
    big: "02",
    title: "Diagnose",
    body: "Get the likely disease, how severe it is, and how confident the result is — in seconds.",
  },
  {
    num: "Step 03",
    big: "03",
    title: "Act",
    body: "Follow a plain-language treatment plan, read aloud in your language, and protect the rest of your crop.",
  },
];

export default function Steps() {
  return (
    <section className="steps ksection" id="farmers">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">How it works</span>
          <h2>From a worried leaf to a clear next step.</h2>
        </Reveal>
        <Reveal className="stgrid" delay={0.05}>
          {steps.map((s) => (
            <div className="step" key={s.big}>
              <div className="num">{s.num}</div>
              <div className="big-num">{s.big}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
