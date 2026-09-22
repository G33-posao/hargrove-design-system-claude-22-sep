import React from "react";

/**
 * Navy icon chip — rounded-square navy tile holding a white line icon.
 * Sits at the top-left of a card, often overlapping its top edge (`overlap`).
 * Pass a Lucide (or any outline) SVG as children.
 */
export function IconChip({
  size = 48,
  overlap = false,
  children,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-chip)",
        background: "var(--chip-navy)",
        color: "var(--hg-white)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-chip)",
        flex: "none",
        marginTop: overlap ? -(size / 2 + 8) : 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
