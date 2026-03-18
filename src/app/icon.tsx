import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 64,
  height: 64,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#ffffff",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.08em",
          borderRadius: 14,
        }}
      >
        KR
      </div>
    ),
    size,
  );
}
