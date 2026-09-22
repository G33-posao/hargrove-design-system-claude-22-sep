import React from "react";

/**
 * Step badge — numbered marker for process/step lists.
 * `circle` = 01–04 ringed circle (step lists);
 * `tab` = large numeral in a navy tab that overlaps a card corner (journey).
 *
 * The numeral is always drawn as SVG with text-anchor="middle" +
 * dominant-baseline="central" — a text node never centres reliably inside
 * its box (see guidelines/layout-alignment.md).
 */
export function StepBadge({
  n,
  variant = "circle",
  onNavy = false,
  style = {},
  ...rest
}) {
  const label = String(n).padStart(2, "0");
  // The SVG fills the badge box and is display:block — an inline SVG sits on a
  // text baseline, which adds descender space below and pushes the numeral up.
  const Numeral = ({ w, h, size, weight, fill }) => (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <text
        x={w / 2}
        y={h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={fill}
        fontFamily="Inter"
        fontWeight={weight}
        fontSize={size}
      >
        {label}
      </text>
    </svg>
  );
  if (variant === "tab") {
    return (
      <div
        style={{
          background: "var(--hg-navy)",
          borderRadius: 10,
          width: 74,
          height: 50,
          flex: "none",
          boxShadow: "var(--shadow-chip)",
          ...style,
        }}
        {...rest}
      >
        <Numeral w={74} h={50} size={30} weight={800} fill="var(--hg-white)" />
      </div>
    );
  }
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "var(--radius-pill)",
        border: `1.5px solid ${onNavy ? "var(--hg-hairline-navy)" : "var(--hg-card-border)"}`,
        flex: "none",
        ...style,
      }}
      {...rest}
    >
      <Numeral
        w={44}
        h={44}
        size={15}
        weight={700}
        fill={onNavy ? "var(--hg-white)" : "var(--hg-navy)"}
      />
    </div>
  );
}
