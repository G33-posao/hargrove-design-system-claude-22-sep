import React from "react";

/**
 * Fixed-fee pricing tier card. Middle "Advanced" tier is `featured` (inverted navy).
 */
export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tier name, e.g. "Advanced Planning Package". */
  name: React.ReactNode;
  /** Big price, e.g. "$4,000". */
  price: React.ReactNode;
  /** Small note beside the price, e.g. "initial fee". */
  priceNote?: React.ReactNode;
  /** One-line "best for…" description. */
  description?: React.ReactNode;
  /** Feature bullet strings. */
  features?: React.ReactNode[];
  /** Label above the feature list, e.g. "Everything in Essential, Plus". */
  featuresLabel?: React.ReactNode;
  /** CTA button label. */
  cta?: React.ReactNode;
  onCta?: () => void;
  /** Invert to the highlighted navy tier (Advanced). */
  featured?: boolean;
}

export function PricingCard(props: PricingCardProps): JSX.Element;
