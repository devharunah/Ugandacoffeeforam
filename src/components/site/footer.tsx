import { Linkedin, Instagram } from "lucide-react";
import { siteConfig } from "@/src/lib/site-config";
import { TikTokIcon, ThreadsIcon } from "./icons";
import Logo from "./logo";

const productLinks = [
  { label: "KawaScan", href: "#kawascan" },
  { label: "KawaCoffee Market", href: "#solutions" },
  { label: "Agronomy guide", href: "#farmers" },
  { label: "Pricing", href: "#get" },
];

const companyLinks = [
  { label: "About", href: "#solutions" },
  { label: "Help", href: "#faq" },
  { label: "Contact", href: siteConfig.social.instagram, external: true },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ksite-footer">
      <div className="container">
        <div className="top">
          <div>
            <span className="brand" aria-label={siteConfig.name}>
              <Logo size={32} variant="dark" />
            </span>
            <p className="about">
              Digital solutions for coffee farmers and agriculture. Made with
              care in Uganda.
            </p>
          </div>

          <div className="fcol">
            <b>Product</b>
            <div className="lk">
              {productLinks.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="fcol">
            <b>Company</b>
            <div className="lk">
              {companyLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="fcol">
            <b>Get the app</b>
            <div className="lk">
              <a
                href={siteConfig.androidDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Android
              </a>
              <a href="#get">iOS (soon)</a>
            </div>
          </div>
        </div>

        <div className="bottom">
          <span>
            Made with ❤ in Uganda © {year} {siteConfig.name}
          </span>
          <div className="socials">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href={siteConfig.social.threads}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <ThreadsIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
