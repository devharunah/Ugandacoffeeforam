import Image from "next/image";

/**
 * The site's one large photographic moment: a full-width field photo with a
 * dark overlay + bottom gradient scrim and an overlaid statement.
 */
export default function FieldBanner() {
  return (
    <section style={{ padding: "56px 0 24px" }}>
      <div className="container">
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid var(--line)",
            marginTop: 16,
            boxShadow: "0 24px 60px -28px rgba(14,19,17,.35)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(380px, 42vw, 560px)",
            }}
          >
            <Image
              src="/images/manharvesting.jpg"
              alt="A farmer harvesting coffee cherries in the field in Uganda"
              fill
              sizes="(max-width: 1240px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "center 32%" }}
            />
            {/* dark overlay across the whole image for depth + legibility */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(14,19,17,.34) 0%, rgba(14,19,17,.22) 38%, rgba(14,19,17,.80) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              padding: "clamp(28px, 4vw, 48px)",
              width: "100%",
              color: "#fff",
              pointerEvents: "none",
            }}
          >
            <span className="eyebrow on-dark plain" style={{ color: "#fff" }}>
              In the field · Uganda
            </span>
            <p
              style={{
                fontSize: "clamp(24px,3vw,34px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginTop: 10,
                maxWidth: "22ch",
                lineHeight: 1.08,
              }}
            >
              Designed with the farmers who use it, every season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
