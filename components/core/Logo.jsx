import React from "react";

const SRC = {
  blue: "assets/logo.svg",
  navy: "assets/logo.svg",
  black: "assets/logo-black.svg",
  white: "assets/logo-white.svg",
};

/**
 * The HARGROVE wordmark (real vector only). Never typed as live text.
 * `basePath` prefixes the asset URL so it resolves from any directory depth.
 */
export function Logo({
  variant = "navy",
  width = 180,
  basePath = "",
  style = {},
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + SRC[variant];
  return (
    <img
      src={src}
      alt="Hargrove"
      style={{ width, height: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
