import React from "react";

/**
 * Stat callout — huge navy display numeral over a small grey label.
 * The primary attention motif ($400B+, 800+, $98.6B, Top 5, 42%+, $3,000).
 */
export function StatCallout({
  value,
  label,
  size = 64,
  align = "left",
  onNavy = false,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: size,
          lineHeight: 1,
          letterSpacing: "var(--ls-display)",
          color: onNavy ? "var(--hg-white)" : "var(--hg-navy)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "var(--fs-small)",
          lineHeight: 1.4,
          marginTop: 8,
          color: onNavy ? "var(--hg-subhead-navy-cool)" : "var(--hg-grey-400)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
