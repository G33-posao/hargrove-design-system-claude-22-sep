import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * Pricing card — tier name, price, description, feature list, CTA.
 * The middle/highlighted tier is inverted (navy fill, white text) via `featured`.
 */
export function PricingCard({
  name,
  price,
  priceNote,
  description,
  features = [],
  featuresLabel,
  cta,
  featured = false,
  onCta,
  style = {},
  ...rest
}) {
  const dark = featured;
  const c = {
    heading: dark ? "var(--hg-white)" : "var(--hg-navy)",
    body: dark ? "var(--hg-subhead-navy-cool)" : "var(--hg-grey-600)",
    muted: dark ? "var(--hg-subhead-navy)" : "var(--hg-grey-400)",
    rule: dark ? "var(--hg-hairline-navy)" : "var(--hg-card-border)",
    check: dark ? "var(--hg-link-navy)" : "var(--hg-navy)",
  };
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        borderRadius: "var(--radius-card)",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        background: dark ? "var(--hg-navy)" : "var(--surface-card)",
        border: `1px solid ${dark ? "var(--hg-navy)" : "var(--border-card)"}`,
        boxShadow: dark ? "var(--shadow-raise)" : "var(--shadow-card)",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontSize: "var(--fs-eyebrow)",
          textTransform: "uppercase",
          letterSpacing: "var(--ls-eyebrow)",
          fontWeight: 600,
          color: c.muted,
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          marginTop: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 44,
            lineHeight: 1,
            letterSpacing: "var(--ls-display)",
            color: c.heading,
          }}
        >
          {price}
        </span>
        {priceNote && (
          <span style={{ fontSize: "var(--fs-caption)", color: c.muted }}>
            {priceNote}
          </span>
        )}
      </div>
      {description && (
        <p
          style={{
            fontSize: "var(--fs-small)",
            lineHeight: "var(--lh-body)",
            color: c.body,
            margin: "14px 0 0",
          }}
        >
          {description}
        </p>
      )}
      {featuresLabel && (
        <div
          style={{
            fontSize: "var(--fs-caption)",
            fontWeight: 600,
            color: c.heading,
            marginTop: 20,
            paddingTop: 18,
            borderTop: `1px solid ${c.rule}`,
          }}
        >
          {featuresLabel}
        </div>
      )}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: featuresLabel ? "12px 0 0" : "20px 0 0",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              gap: 10,
              fontSize: "var(--fs-small)",
              lineHeight: 1.45,
              color: c.body,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={c.check}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flex: "none", marginTop: 3 }}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <div style={{ marginTop: 24 }}>
          <Button
            variant={dark ? "onNavy" : "secondary"}
            onClick={onCta}
            style={{ width: "100%" }}
          >
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
}
