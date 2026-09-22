import React from "react";

export type ButtonVariant = "primary" | "secondary" | "onNavy" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Hargrove pill button.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. `onNavy` = white fill for dark backgrounds. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as an anchor when set. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
