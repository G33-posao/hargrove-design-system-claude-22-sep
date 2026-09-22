import React from "react";

/**
 * Big display numeral + small grey label — the Hargrove proof-point motif.
 */
export interface StatCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big value, e.g. "$400B+", "Top 5". */
  value: React.ReactNode;
  /** Small grey caption beneath. */
  label: React.ReactNode;
  /** Numeral font-size in px (60–96 typical). Default 64. */
  size?: number;
  align?: "left" | "center";
  /** White numeral / cool label for navy backgrounds. */
  onNavy?: boolean;
}

export function StatCallout(props: StatCalloutProps): JSX.Element;
