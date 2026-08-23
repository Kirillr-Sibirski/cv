/* eslint-disable @next/next/no-img-element */
import fs from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";


export const alt = "karl ryberg cv";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Static export renders this at build time, where the avatar has to be inlined:
// @vercel/og cannot resolve a relative path the way the running server could.
const avatar = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public", "image.png"))
  .toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={avatar}
            alt={RESUME_DATA.name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10%",
              marginBottom: "2rem",
            }}
          />
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            {RESUME_DATA.name}
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              color: "#666",
              maxWidth: "600px",
              lineHeight: "1.4",
            }}
          >
            {RESUME_DATA.about}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "1rem",
            }}
          >
            {RESUME_DATA.contact.email && (
              <div style={{ fontSize: "1rem", color: "#666" }}>
                {RESUME_DATA.contact.email}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
