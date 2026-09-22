import React from "react";

/**
 * Card — #F8F8F8 fill, 1px #E3E7EE border, 14px radius, soft navy shadow.
 * The base surface for testimonials, commitments, pricing and process steps.
 * `tone="navy"` inverts it (tone-on-tone navy tile, white text).
 */
export function Card({
  tone = "light",
  interactive = false,
  padding = 28,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      color: "var(--text-body)",
    },
    white: {
      background: "var(--hg-white)",
      border: "1px solid var(--border-card)",
      color: "var(--text-body)",
    },
    navy: {
      background: "var(--hg-navy)",
      border: "1px solid var(--hg-navy)",
      color: "var(--hg-white)",
    },
  };
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        fontFamily: "var(--font-sans)",
        borderRadius: "var(--radius-card)",
        padding,
        boxShadow: hover ? "var(--shadow-raise)" : "var(--shadow-card)",
        transition: "box-shadow var(--dur-base) var(--ease-standard)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
