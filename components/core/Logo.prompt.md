**Logo** — renders the real HARGROVE wordmark SVG; use wherever the mark appears (headers, footer signature).

```jsx
<Logo variant="navy" width={180} basePath="../.." />
<Logo variant="white" width={140} />   {/* on a navy field */}
```

Variants: `navy`/`blue` (#16335D on light), `white` (on navy), `black`. Set `basePath` to the relative path back to the project root so the SVG resolves (e.g. `"../.."` from `ui_kits/website/`). Never retype the wordmark as text or recolor outside these variants.
