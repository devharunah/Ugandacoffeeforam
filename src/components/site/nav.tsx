import Link from "next/link";
import { Leaf, Play } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "KawaScan", href: "#kawascan" },
  { label: "For farmers", href: "#farmers" },
  { label: "FAQ", href: "#faq" },
];

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="container inner">
        <Link href="#top" className="brand">
          <span className="mark">
            <Leaf />
          </span>
          {siteConfig.name}
        </Link>
        <nav className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="right">
          <a
            href={siteConfig.androidDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="signin"
          >
            Sign in
          </a>
          <a
            href={siteConfig.androidDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wbtn wbtn-primary sm"
          >
            <Play />
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
