# Design Tokens

## Why This Matters

Design tokens are the atomic values that define an interface's visual language. Without tokens, design decisions are arbitrary and inconsistent. Tokens create a single source of truth for all visual values, ensuring consistency and enabling systematic design.

## What Are Design Tokens?

Design tokens are named values that represent visual design decisions:
- **Colors** — Backgrounds, text, borders
- **Spacing** — Margins, padding, gaps
- **Typography** — Font sizes, weights, line heights
- **Borders** — Widths, radii, styles
- **Shadows** — Elevations, depths
- **Motion** — Durations, easings
- **Breakpoints** — Screen size thresholds

Tokens are not CSS variables—they are the design decisions that CSS variables implement.

## Token Categories

### Color Tokens

Define the color palette:
- **Primitive colors** — Base color values (blue-500: #3B82F6)
- **Semantic colors** — Meaning-based colors (primary, secondary, success)
- **Component colors** — Component-specific colors (button-bg, card-border)
- **State colors** — State-based colors (hover, active, disabled)

### Spacing Tokens

Define spatial relationships:
- **Base unit** — Fundamental spacing value (4px)
- **Scale** — Derived spacing values (4, 8, 12, 16, 20, 24, 32, 40, 48, 64)
- **Semantic spacing** — Meaning-based spacing (padding-sm, margin-lg, gap-md)
- **Component spacing** — Component-specific spacing (button-padding, card-gap)

### Typography Tokens

Define text styling:
- **Font family** — Typefaces (primary, monospace)
- **Font size** — Text sizes (caption, body, heading-1, display)
- **Font weight** — Text weights (regular, medium, semibold, bold)
- **Line height** — Text line heights (tight, normal, relaxed)
- **Letter spacing** — Character spacing (tight, normal, wide)

### Border Tokens

Define edges and boundaries:
- **Border width** — Line thickness (thin, medium, thick)
- **Border radius** — Corner rounding (none, small, medium, large, full)
- **Border style** — Line style (solid, dashed, dotted)
- **Border color** — Edge colors (default, subtle, strong)

### Shadow Tokens

Define depth and elevation:
- **Elevation levels** — Shadow intensity (none, low, medium, high)
- **Shadow color** — Shadow tint (black, colored)
- **Shadow blur** — Softness (tight, medium, soft)
- **Shadow spread** — Size (tight, medium, wide)

### Motion Tokens

Define animation:
- **Duration** — Animation length (fast, normal, slow)
- **Easing** — Animation curve (linear, ease-in, ease-out, ease-in-out, spring)
- **Delay** — Animation delay (none, short, medium)
- **Stagger** — Animation delay between elements (none, short, medium)

### Breakpoint Tokens

Define responsive thresholds:
- **Phone** — Small screens (< 640px)
- **Tablet** — Medium screens (640-1024px)
- **Desktop** — Large screens (1024-1440px)
- **Large desktop** — Extra large screens (> 1440px)

## Token Hierarchy

### Global Tokens

Base values without semantic meaning:
```
blue-500: #3B82F6
spacing-4: 4px
font-size-14: 14px
```

### Alias Tokens

Semantic names that reference global tokens:
```
color-primary: {blue-500}
spacing-padding: {spacing-16}
font-size-body: {font-size-14}
```

### Component Tokens

Component-specific tokens that reference alias tokens:
```
button-background: {color-primary}
card-padding: {spacing-padding}
input-font-size: {font-size-body}
```

## Token Rules

### Rule 1: Tokens Are Named by Purpose, Not Value

Tokens should describe what they do, not what they look like:
- **Good** — `color-primary`, `spacing-large`, `font-size-heading`
- **Bad** — `blue`, `16px`, `bold`

Purpose-based names remain valid when values change.

### Rule 2: Tokens Are Consistent

The same token must be used for the same purpose everywhere:
- **Same color** — Primary is always the same blue
- **Same spacing** — Large is always the same size
- **Same typography** — Heading is always the same size

Inconsistent tokens break visual coherence.

### Rule 3: Tokens Are Limited

Too many tokens create confusion:
- **Colors** — 5-10 primitive colors, 5-10 semantic colors
- **Spacing** — 8-12 spacing values
- **Typography** — 3-5 font sizes, 3-4 weights
- **Borders** — 2-3 widths, 3-4 radii

More tokens than needed create inconsistency.

### Rule 4: Tokens Are Documented

Every token must have documentation:
- **Name** — Clear, purpose-based name
- **Value** — The actual value
- **Usage** — When to use this token
- **Example** — Visual example of the token

Undocumented tokens are used incorrectly.

### Rule 5: Tokens Are Themeable

Tokens must support theming:
- **Light theme** — Default values
- **Dark theme** — Inverted values
- **High contrast** — Enhanced contrast values
- **Custom themes** — User-defined values

Non-themeable tokens limit adaptability.

## See Also

- [Color System](color-system.md) — Color token definitions
- [Spacing System](spacing-system.md) — Spacing token definitions
- [Border System](border-system.md) — Border token definitions
- [Type System](../typography/type-system.md) — Typography foundations
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
