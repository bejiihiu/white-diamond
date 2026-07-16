# Design Tokens (Reference)

## Why This Document Exists

This reference document consolidates all information about design tokens in the WHITE DIAMOND system. Design tokens are the atomic values that form the design system's foundation—colors, spacing, borders, typography, shadows, and motion. Without tokens, design decisions become arbitrary.

This document provides a concise reference for token categories, hierarchy, and usage. For detailed exploration, see the linked specification documents.

---

## Core Principle

**Tokens are named values that represent design decisions.**

They are not CSS variables, though CSS variables may implement them. They are not color swatches, though colors are among their values. Tokens are the decisions themselves—abstracted from implementation, named by purpose, and applied consistently.

---

## Token Categories

| Category | Purpose | Examples |
|----------|---------|----------|
| **Color** | Chromatic values | Backgrounds, text, borders, indicators |
| **Spacing** | Spatial relationships | Margins, padding, gaps |
| **Typography** | Textual properties | Size, weight, line-height, family |
| **Border** | Edges and boundaries | Width, radius, style, color |
| **Shadow** | Depth and elevation | Blur, spread, color, offset |
| **Motion** | Temporal properties | Duration, easing, delay |
| **Breakpoint** | Responsive thresholds | Screen size boundaries |

---

## Token Hierarchy

### Global Tokens

Raw values without semantic meaning:

```
blue-500: #3B82F6
gray-200: #E5E7EB
spacing-4: 4px
spacing-8: 8px
font-size-14: 14px
font-size-16: 16px
```

### Alias Tokens

Semantic names that reference global tokens:

```
color-primary: {blue-500}
color-border-subtle: {gray-200}
spacing-padding-default: {spacing-4}
spacing-margin-section: {spacing-8}
font-size-body: {font-size-14}
font-size-heading: {font-size-16}
```

### Component Tokens

Component-specific tokens that reference alias tokens:

```
button-background: {color-primary}
button-padding-horizontal: {spacing-padding-default}
card-border: {color-border-subtle}
card-padding: {spacing-padding-section}
input-font-size: {font-size-body}
```

---

## Token Naming Convention

```
{category}-{purpose}-{variant}
```

**Examples:**
- `color-primary` — Primary brand color
- `color-primary-light` — Lighter variant
- `spacing-padding-default` — Default padding
- `font-size-body` — Body text size
- `border-width-medium` — Medium border width

**Rules:**
1. Use lowercase with hyphens
2. Be descriptive, not prescriptive
3. Avoid abbreviations
4. Group by category
5. Use variant suffixes

---

## Token Limits

| Category | Minimum | Maximum |
|----------|---------|---------|
| Colors (primitive) | 5 | 10 |
| Colors (semantic) | 4 | 8 |
| Spacing | 8 | 12 |
| Typography sizes | 3 | 5 |
| Typography weights | 3 | 4 |
| Border widths | 2 | 3 |
| Border radii | 3 | 5 |
| Shadows | 3 | 5 |
| Motion durations | 3 | 4 |

---

## Token Rules

### Do
- Use tokens for every visual value
- Reference alias tokens in components
- Document every token
- Test token application
- Respect token limits

### Don't
- Create tokens for one-off values
- Skip the alias layer
- Invent tokens
- Hardcode values

---

## Cross-References

- **Detailed specification:** [Design Tokens](../tokens/design-tokens.md) — Full token specification
- **Color tokens:** [Color System](../tokens/color-system.md) — Color definitions
- **Spacing tokens:** [Spacing System](../tokens/spacing-system.md) — Spacing definitions
- **Border tokens:** [Border System](../tokens/border-system.md) — Border definitions
- **Typography tokens:** [Typography System](../tokens/typography-system.md) — Typography definitions
- **Core axioms:** [Core Principles](../philosophy/core-principles.md) — The axioms from which tokens derive
