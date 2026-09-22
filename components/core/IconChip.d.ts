import React from "react";

/** Rounded-square navy tile holding a white outline icon. */
export interface IconChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Square size in px. Default 48. */
  size?: number;
  /** Pull the chip up so it overlaps the top edge of a card. */
  overlap?: boolean;
  /** An outline SVG icon (e.g. Lucide) rendered in white. */
  children?: React.ReactNode;
}

export function IconChip(props: IconChipProps): JSX.Element;
