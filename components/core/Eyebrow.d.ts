import React from "react";

/** Uppercase, letter-spaced muted label placed above a headline. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Use the cooler on-navy tint for dark backgrounds. */
  onNavy?: boolean;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
