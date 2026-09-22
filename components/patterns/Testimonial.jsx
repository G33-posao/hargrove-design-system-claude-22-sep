import React from "react";
import { Card } from "../core/Card.jsx";

/**
 * Testimonial card — round headshot (optional), quote, then name / title / firm.
 * Left-aligned. Used in "In Their Words" / "What Our Clients Are Saying".
 */
export function Testimonial({
  quote,
  name,
  title,
  firm,
  avatar,
  style = {},
  ...rest
}) {
  return (
    <Card
      padding={26}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        ...style,
      }}
      {...rest}
    >
      {avatar &&
        (typeof avatar === "string" ? (
          <img
            src={avatar}
            alt={name}
            style={{
              width: 64,
              height: 64,
              borderRadius: "var(--radius-pill)",
              objectFit: "cover",
            }}
          />
        ) : (
          avatar
        ))}
      <p
        style={{
          fontSize: "var(--fs-body)",
          lineHeight: "var(--lh-body)",
          color: "var(--hg-grey-600)",
          margin: 0,
        }}
      >
        {quote}
      </p>
      <div style={{ marginTop: "auto" }}>
        <div style={{ fontWeight: 700, color: "var(--hg-navy)", fontSize: "var(--fs-small)" }}>
          {name}
        </div>
        {title && (
          <div style={{ fontSize: "var(--fs-caption)", color: "var(--hg-grey-600)", marginTop: 2 }}>
            {title}
          </div>
        )}
        {firm && (
          <div style={{ fontSize: "var(--fs-caption)", color: "var(--hg-grey-400)" }}>
            {firm}
          </div>
        )}
      </div>
    </Card>
  );
}
