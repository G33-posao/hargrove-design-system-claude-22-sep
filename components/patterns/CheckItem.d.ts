import React from "react";

/** Navy check-box square + line of copy. The checklist-doc motif. */
export interface CheckItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Square size in px. Default 22. */
  size?: number;
  /** `center` (default) or `top` — align the box for multi-line copy. */
  align?: "center" | "top";
}

export function CheckItem(props: CheckItemProps): JSX.Element;
