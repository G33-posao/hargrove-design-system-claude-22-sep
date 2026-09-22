import React from "react";

/**
 * Quote card with attribution — the "In Their Words" motif.
 */
export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: React.ReactNode;
  name: React.ReactNode;
  title?: React.ReactNode;
  firm?: React.ReactNode;
  /** Image URL for a round headshot, or a custom node. */
  avatar?: string | React.ReactNode;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
