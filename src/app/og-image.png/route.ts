import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3E2723 0%, #6F4E37 50%, #8D6E63 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        },
      },
      // Background decorative circle (top-right)
      React.createElement("div", {
        style: {
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(250,247,242,0.06)",
        },
      }),
      // Background decorative circle (bottom-left)
      React.createElement("div", {
        style: {
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(250,247,242,0.04)",
        },
      }),
      // Coffee cup icon row
      React.createElement(
        "div",
        {
          style: {
            fontSize: "80px",
            marginBottom: "28px",
            lineHeight: 1,
          },
        },
        "☕"
      ),
      // Brand name
      React.createElement(
        "div",
        {
          style: {
            fontSize: "72px",
            fontWeight: "bold",
            color: "#FAF7F2",
            letterSpacing: "-1px",
            marginBottom: "16px",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          },
        },
        "KoraChoco Coffee"
      ),
      // Tagline
      React.createElement(
        "div",
        {
          style: {
            fontSize: "32px",
            color: "#D2B48C",
            fontStyle: "italic",
            letterSpacing: "0.5px",
          },
        },
        "Cozy · Vibing · Specialty"
      ),
      // Bottom domain badge
      React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            bottom: "36px",
            right: "48px",
            fontSize: "22px",
            color: "rgba(250,247,242,0.55)",
            letterSpacing: "0.3px",
          },
        },
        "korachoco.coffee"
      )
    ),
    { width: 1200, height: 630 }
  );
}
