import { ImageResponse } from "next/og";

export const alt = "MarkDev — we design, build & grow premium digital products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#07080c",
          backgroundImage:
            "radial-gradient(900px 500px at 78% -10%, rgba(37,99,235,0.55), transparent), radial-gradient(700px 500px at 0% 120%, rgba(99,102,241,0.35), transparent)",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "44px",
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, letterSpacing: "-1px" }}>
            <span style={{ color: "#ffffff" }}>MARK</span>
            <span style={{ color: "#60a5fa" }}>DEV.</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              color: "#93bbfd",
              fontSize: "26px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {"{ Learn · Build · Grow }"}
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            We design, build & grow the digital products premium brands are judged by.
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9aa3b5",
            fontSize: "24px",
          }}
        >
          <span style={{ display: "flex" }}>
            Web · Shopify · Apps · SEO · Ads · CRO · Design
          </span>
          <span style={{ display: "flex", color: "#ffffff" }}>markdev.agency</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
