import React from "react";

/**
 * Icon-chip + title + one-liner card. Powers the Four Commitments block.
 */
export interface CommitmentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Outline SVG icon for the navy chip. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  /** One-line supporting copy. */
  children?: React.ReactNode;
  /** `row` = chip beside text, `stack` = chip above. Default row. */
  layout?: "row" | "stack";
}

export function CommitmentCard(props: CommitmentCardProps): JSX.Element;
