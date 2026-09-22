import React from "react";

/** Numbered step marker — ringed circle or navy corner tab. */
export interface StepBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step number; rendered zero-padded (1 → "01"). */
  n: number;
  /** `circle` (01–04 ring) or `tab` (large navy numeral). */
  variant?: "circle" | "tab";
  /** On-navy tint for the circle variant. */
  onNavy?: boolean;
}

export function StepBadge(props: StepBadgeProps): JSX.Element;
