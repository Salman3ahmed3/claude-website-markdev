import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0c12",
          borderRadius: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "104px",
            height: "104px",
            borderRadius: "26px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontSize: "68px",
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size },
  );
}
