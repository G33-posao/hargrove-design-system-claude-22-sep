import React from "react";

export type CardTone = "light" | "white" | "navy";

/**
 * Base surface card — panel fill, hairline border, soft navy shadow.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `light` = #F8F8F8, `white`, `navy` = inverted tone-on-tone tile. */
  tone?: CardTone;
  /** Raise the shadow on hover. */
  interactive?: boolean;
  /** Inner padding in px. */
  padding?: number;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
