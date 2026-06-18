import Image from "next/image";

/**
 * The site's one large photographic moment: a full-width field photo with a
 * bottom gradient scrim + overlaid statement. (Spec replaces the original
 * <image-slot> with a real image field, keeping the scrim pattern.)
 */
export default function FieldBanner() {
  return (
    <section style={{ padding: 0 }}>
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid var(--line)",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: 440 }}>
            <Image
              src="/images/manharvesting.jpg"
              alt="A farmer harvesting coffee cherries in the field in Uganda"
              fill
              sizes="(max-width: 1240px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              padding: 40,
              background:
                "linear-gradient(transparent, rgba(14,19,17,.72))",
              width: "100%",
              color: "#fff",
              pointerEvents: "none",
            }}
          >
            <span
              className="eyebrow on-dark plain"
              style={{ color: "#fff" }}
            >
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
