import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Brand "O" favicon in the same muted brown/gold used throughout wigomaniav2.
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
          background: "#fbf7f4",
          borderRadius: "50%",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#8F7040",
          }}
        >
          O
        </span>
      </div>
    ),
    { ...size }
  );
}
