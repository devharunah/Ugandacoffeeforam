/**
 * KawaScan phone mockup — a faithful, scoped re-skin of the real app screens
 * (bold theme). All styling lives under `.phone` in globals.css so it never
 * collides with the app's own CSS. The product is shown via these native
 * mockups, never screenshots, so it stays crisp at any zoom.
 */
import {
  Camera,
  ChevronRight,
  Clock,
  Home,
  Leaf,
  User,
  Wallet,
  Check,
} from "lucide-react";

type Screen = "home" | "pay";
type Tab = "home" | "history" | "pay" | "account";

function StatusBar() {
  return (
    <div className="sb">
      <span>9:41</span>
      <span className="r">
        <i />
        <i />
      </span>
    </div>
  );
}

function TabBar({ active }: { active: Tab }) {
  return (
    <div className="tabbar">
      <div className={`tab${active === "home" ? " on" : ""}`}>
        <Home />
        <span>Home</span>
      </div>
      <div className={`tab${active === "history" ? " on" : ""}`}>
        <Clock />
        <span>History</span>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <div className="camkey">
          <Camera />
        </div>
      </div>
      <div className={`tab${active === "pay" ? " on" : ""}`}>
        <Wallet />
        <span>Pay</span>
      </div>
      <div className={`tab${active === "account" ? " on" : ""}`}>
        <User />
        <span>Account</span>
      </div>
    </div>
  );
}

function ProblemRow({ label }: { label: string }) {
  return (
    <div className="prow">
      <span className="tile">
        <Leaf />
      </span>
      <span className="lbl">{label}</span>
      <ChevronRight className="chev" />
    </div>
  );
}

function HomeScreen({ problems }: { problems: string[] }) {
  return (
    <div className="pv">
      <div className="ph-head">
        <h3>Hello, farmer</h3>
        <div className="loc">
          <b />
          Nakaseke
        </div>
      </div>
      <div className="strip">
        <div className="n">
          <b>3</b>
          <span>scans left</span>
        </div>
        <span className="buy">
          <Wallet />
          Buy more
        </span>
      </div>
      <div className="pcta">
        <button className="pbtn" type="button" tabIndex={-1}>
          <Camera />
          Scan a plant
        </button>
      </div>
      <div className="ph-sec">
        <div className="ph-eye">Common problems</div>
        <div className="plist">
          {problems.map((p) => (
            <ProblemRow key={p} label={p} />
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <TabBar active="home" />
    </div>
  );
}

function PayScreen() {
  return (
    <div className="pv">
      <div className="pay-head">
        <h3>Add scans</h3>
        <p>Pay with Mobile Money — no card needed.</p>
      </div>
      <div className="plan">
        <span className="radio">
          <Check />
        </span>
        <span className="info">
          <span className="pn">
            <b>Starter</b>
          </span>
          <span className="sc">10 scans · AI diagnosis</span>
        </span>
        <span className="price">
          <b>UGX 2,000</b>
          <span>one-time</span>
        </span>
      </div>
      <div className="plan sel">
        <span className="radio">
          <Check />
        </span>
        <span className="info">
          <span className="pn">
            <b>Premium</b>
            <span className="tag">Recommended</span>
          </span>
          <span className="sc">10 scans · expert-reviewed</span>
        </span>
        <span className="price">
          <b>UGX 5,000</b>
          <span>one-time</span>
        </span>
      </div>
      <div style={{ padding: "18px 18px 0" }}>
        <button className="pbtn" type="button" tabIndex={-1}>
          Pay UGX 5,000
        </button>
      </div>
      <div style={{ flex: 1 }} />
      <TabBar active="pay" />
    </div>
  );
}

export default function KawaPhone({
  screen = "home",
  className = "",
  problems = ["Coffee Leaf Rust", "Coffee Berry Borer", "Brown Eye Spot"],
}: {
  screen?: Screen;
  className?: string;
  problems?: string[];
}) {
  return (
    <div className={`phone${className ? ` ${className}` : ""}`} aria-hidden="true">
      <div className="screen">
        <StatusBar />
        {screen === "home" ? <HomeScreen problems={problems} /> : <PayScreen />}
      </div>
    </div>
  );
}
