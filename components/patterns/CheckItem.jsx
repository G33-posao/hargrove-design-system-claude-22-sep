import React from "react";

/**
 * Check item — navy square with a white check, before a line of list copy.
 * Used inline before section titles on checklist docs and in list items.
 */
export function CheckItem({
  children,
  size = 22,
  align = "center",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: align === "top" ? "flex-start" : "center",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: size,
          height: size,
          flex: "none",
          borderRadius: 5,
          background: "var(--hg-navy)",
          color: "var(--hg-white)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: align === "top" ? 2 : 0,
        }}
        aria-hidden="true"
      >
        <svg
          width={Math.round(size * 0.6)}
          height={Math.round(size * 0.6)}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span
        style={{
          fontSize: "var(--fs-body)",
          lineHeight: "var(--lh-body)",
          color: "var(--hg-grey-600)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
