import React from "react";

export type LogoVariant = "navy" | "blue" | "black" | "white";

/** The real HARGROVE wordmark SVG. */
export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  /** `navy`/`blue` (#16335D) on light, `white` on navy, `black` where required. */
  variant?: LogoVariant;
  width?: number;
  /** Prefix for the asset path, e.g. "../.." from a deep directory. */
  basePath?: string;
}

export function Logo(props: LogoProps): JSX.Element;
