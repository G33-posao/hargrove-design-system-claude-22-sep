import React from "react";

/**
 * Hargrove pill button. Navy primary, navy-outline secondary, white on-navy.
 * Full-pill radius, calm hover (darken / lift), never shrinks on press.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 18px", fontSize: 13 },
    md: { padding: "12px 26px", fontSize: 15 },
    lg: { padding: "15px 34px", fontSize: 16 },
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    whiteSpace: "nowrap",
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition:
      "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
    ...sizes[size],
  };
  const variants = {
    primary: { background: "var(--hg-navy)", color: "var(--hg-white)" },
    secondary: {
      background: "transparent",
      color: "var(--hg-navy)",
      borderColor: "var(--hg-navy)",
    },
    onNavy: { background: "var(--hg-white)", color: "var(--hg-navy)" },
    ghost: { background: "transparent", color: "var(--hg-navy)" },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle =
    hover && !disabled
      ? variant === "primary"
        ? { background: "var(--hg-navy-300)", boxShadow: "var(--shadow-chip)" }
        : variant === "onNavy"
        ? { boxShadow: "var(--shadow-raise)" }
        : { background: "rgba(22,51,93,0.06)" }
      : {};
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
