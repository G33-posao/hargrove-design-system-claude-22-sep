import React from "react";
import { Card } from "../core/Card.jsx";
import { IconChip } from "../core/IconChip.jsx";

/**
 * Commitment card — icon chip + bold navy title + grey one-liner.
 * The canonical Four Commitments block (Accountability / Visibility /
 * Fixed Price / Nationwide Scale) and the site's advisor value-prop cards.
 * Layout `row` (chip left of text) or `stack` (chip above).
 */
export function CommitmentCard({
  icon,
  title,
  children,
  layout = "row",
  style = {},
  ...rest
}) {
  const row = layout === "row";
  return (
    <Card
      interactive
      padding={26}
      style={{
        display: "flex",
        flexDirection: row ? "row" : "column",
        gap: row ? 18 : 16,
        alignItems: row ? "flex-start" : "flex-start",
        ...style,
      }}
      {...rest}
    >
      {icon != null && <IconChip size={44}>{icon}</IconChip>}
      <div>
        <div
          style={{
            fontWeight: 700,
            fontSize: "var(--fs-h4)",
            color: "var(--hg-navy)",
            letterSpacing: "var(--ls-heading)",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "var(--fs-body)",
            lineHeight: "var(--lh-body)",
            color: "var(--hg-grey-600)",
            marginTop: 6,
          }}
        >
          {children}
        </div>
      </div>
    </Card>
  );
}
