**StepBadge** — the numbered marker for process/step lists (01–04).

```jsx
<StepBadge n={1} />                {/* ringed circle for step lists */}
<StepBadge n={2} variant="tab" />  {/* large navy numeral, overlaps a card corner */}
```

`circle` for inline numbered lists; `tab` for the process-journey cards where a big numeral overlaps the card corner. Zero-pads automatically, and draws the numeral as **SVG** (`text-anchor="middle"` + `dominant-baseline="central"`) so it is optically centred in its box — never a text node. Use for the 4-stage process: Initial Consultation → Plan Design → Wrap-Up → Execution & Shipment.
