import Image from "next/image";

/**
 * The Kawa wordmark logo (public/images/Kawa.png) — the brand's own logo.
 * Intrinsic 190×49 (≈3.88:1); scale by height, width stays auto.
 * On dark surfaces the black wordmark is rendered white via a filter.
 */
const RATIO = 190 / 49;

export default function Logo({
  height = 30,
  variant = "light",
}: {
  height?: number;
  variant?: "light" | "dark";
}) {
  return (
    <Image
      src="/images/Kawa.png"
      alt="Kawa"
      width={Math.round(height * RATIO)}
      height={height}
      priority
      style={{
        height,
        width: "auto",
        filter: variant === "dark" ? "brightness(0) invert(1)" : undefined,
      }}
    />
  );
}
