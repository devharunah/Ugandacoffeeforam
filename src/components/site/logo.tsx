import Image from "next/image";
import { siteConfig } from "@/src/lib/site-config";

/**
 * Brand lockup: the app's leaf mark (shared symbol across KawaCoffee + KawaScan,
 * taken from the app icon) + the "KawaCoffee" wordmark. On dark surfaces the
 * wordmark switches to white.
 */
export default function Logo({
  size = 34,
  variant = "light",
  showText = true,
}: {
  size?: number;
  variant?: "light" | "dark";
  showText?: boolean;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Image
        src="/images/kawa-mark.png"
        alt={showText ? "" : siteConfig.name}
        width={size}
        height={size}
        priority
        style={{ display: "block", borderRadius: size * 0.26 }}
      />
      {showText && (
        <span
          style={{
            fontWeight: 750,
            fontSize: 19,
            letterSpacing: "-0.02em",
            color: variant === "dark" ? "var(--on-dark)" : "var(--ink)",
          }}
        >
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
