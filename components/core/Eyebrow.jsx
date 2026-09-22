import React from "react";

/**
 * Eyebrow label — uppercase, letter-spaced, muted grey. Pairs above a headline.
 * The core recurring Hargrove label pattern ("WHY HARGROVE?", "IN THEIR WORDS").
 */
export function Eyebrow({ children, onNavy = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: "var(--fs-eyebrow)",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-eyebrow)",
        color: onNavy ? "var(--hg-subhead-navy-cool)" : "var(--hg-grey-400)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
