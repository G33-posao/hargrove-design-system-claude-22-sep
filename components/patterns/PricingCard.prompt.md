**PricingCard** — a fixed-fee tier card; three sit side-by-side with the middle "Advanced" tier `featured`.

```jsx
<PricingCard name="Advanced Planning Package" price="$4,000" featured
  description="Best for clients who want to asset-protect what they leave to kids and grandkids."
  featuresLabel="Everything in Essential, Plus"
  features={["A-B or Disclaimer Trust Planning", "Asset Protection Trusts", "One LLC assignment"]}
  cta="Get started" />
```

Canonical tiers: Essential **$3,000** · Advanced **$4,000** (`featured`) · Private Wealth Counsel **$6,000** (`priceNote="initial fee"`). Signature line nearby: "Fixed fee. No surprises." Built on `Button`.
