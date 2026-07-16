# Design Tokens

## Why This Document Exists

Every interface is an architectural construction. Like a building, it requires materials—precisely defined, consistently applied, and rigorously controlled. Design tokens are these materials. They are the atoms of the design system: indivisible values from which all visual structures emerge.

Without tokens, design decisions become arbitrary. A designer chooses 16px padding here, 18px there. A developer uses `#333` for text in one component, `#3B3B3B` in another. These micro-inconsistencies accumulate into a system that feels uncoherent—built, perhaps, but not designed.

Tokens eliminate this entropy. They create a single source of truth for every visual value, ensuring that when a decision is made once, it is honored everywhere. This is not convenience—it is structural integrity.

---

## What Are Design Tokens?

Design tokens are **named values that represent design decisions**. They are not CSS variables, though CSS variables may implement them. They are not color swatches, though colors are among their values. Tokens are the *decisions themselves*—abstracted from implementation, named by purpose, and applied consistently.

Consider the difference:

- **Without tokens:** `padding: 16px;` — a magic number, repeated arbitrarily
- **With tokens:** `padding: var(--spacing-padding-default);` — a named decision, applied consistently

The token `spacing-padding-default` is not merely 16px. It is a *statement*: "This is the standard internal spacing for containers." If the value changes, every reference updates. The decision remains valid.

### Token Categories

Tokens are organized by the physical properties they define:

- **Color tokens** — Define chromatic values: backgrounds, text, borders, indicators
- **Spacing tokens** — Define spatial relationships: margins, padding, gaps
- **Typography tokens** — Define textual properties: size, weight, line-height, family
- **Border tokens** — Define edges and boundaries: width, radius, style, color
- **Shadow tokens** — Define depth and elevation: blur, spread, color, offset
- **Motion tokens** — Define temporal properties: duration, easing, delay
- **Breakpoint tokens** — Define responsive thresholds: screen size boundaries

Each category represents a dimension of visual design. Together, they define the complete material palette of the system.

---

## Token Hierarchy

Tokens are not flat. They exist in a three-tier hierarchy that mirrors architectural construction:

### Global Tokens

Global tokens are **raw values without semantic meaning**. They are the periodic table of the design system:

```
blue-500: #3B82F6
gray-200: #E5E7EB
spacing-4: 4px
spacing-8: 8px
font-size-14: 14px
font-size-16: 16px
```

Global tokens answer the question: "What values exist?" They do not answer "What are these values for?" That is the role of alias tokens.

### Alias Tokens

Alias tokens are **semantic names that reference global tokens**. They answer the question: "What is this value *for*?"

```
color-primary: {blue-500}
color-border-subtle: {gray-200}
spacing-padding-default: {spacing-4}
spacing-margin-section: {spacing-8}
font-size-body: {font-size-14}
font-size-heading: {font-size-16}
```

Alias tokens create a layer of indirection that separates *purpose* from *value*. When you read `color-primary`, you understand its role immediately. You do not need to know it is `#3B82F6`—that is an implementation detail.

This separation is critical for theming. In a dark theme, `color-primary` might reference `blue-400` instead of `blue-500`. The purpose remains constant; only the value changes.

### Component Tokens

Component tokens are **component-specific tokens that reference alias tokens**. They answer the question: "What value does this specific component use?"

```
button-background: {color-primary}
button-padding-horizontal: {spacing-padding-default}
card-border: {color-border-subtle}
card-padding: {spacing-padding-section}
input-font-size: {font-size-body}
```

Component tokens create a boundary between the global system and component implementation. A component never references global tokens directly—it always goes through alias tokens. This ensures that changes to the global system propagate correctly.

---

## Why Tokens Are Structural

Tokens are not a convenience layer. They are **structural infrastructure** that affects every aspect of the system:

### Consistency

Without tokens, consistency relies on memory. A developer must remember that "primary blue is `#3B82F6`" and apply it everywhere. Memory fails. Tokens replace memory with reference.

When every component references `color-primary`, the value is guaranteed to be consistent. There is no possibility of divergence because there is only one source.

### Scalability

Tokens enable systems to scale without proportional increases in complexity. A design system with 10 components and 100 tokens can grow to 100 components without growing to 1000 decisions. The tokens already exist; new components simply reference them.

### Maintainability

When a design decision changes—a blue shifts from `#3B82F6` to `#2563EB`—tokens make the change trivial. Update the global token, and every reference updates automatically. Without tokens, you would search through codebase files, hoping to catch every occurrence.

### Theming

Tokens are the foundation of theming. A theme is not a different design—it is a different set of values for the same purposes. Light theme, dark theme, high-contrast theme: all share the same alias tokens, each pointing to different global values.

---

## Token Naming Conventions

Tokens follow a strict naming convention that communicates purpose, category, and specificity:

### Structure

```
{category}-{purpose}-{variant}
```

### Examples

- `color-primary` — Primary brand color
- `color-primary-light` — Lighter variant of primary
- `color-border-subtle` — Subtle border color
- `spacing-padding-default` — Default padding spacing
- `spacing-margin-section` — Section-level margin
- `font-size-body` — Body text size
- `font-weight-semibold` — Semibold font weight
- `border-width-medium` — Medium border width
- `border-radius-large` — Large border radius

### Rules

1. **Use lowercase with hyphens** — `color-primary`, not `Color_Primary`
2. **Be descriptive, not prescriptive** — `spacing-padding-default`, not `spacing-16px`
3. **Avoid abbreviations** — `spacing`, not `spc` or `sp`
4. **Group by category** — All color tokens start with `color-`
5. **Use variant suffixes** — `-light`, `-dark`, `-hover`, `-active`

---

## Token Usage Guidelines

### Do

- **Use tokens for every visual value** — No hardcoded colors, sizes, or weights
- **Reference alias tokens in components** — Never reference global tokens directly
- **Document every token** — Name, value, purpose, usage, example
- **Test token application** — Verify consistency across components
- **Respect token limits** — More tokens create more inconsistency

### Don't

- **Don't create tokens for one-off values** — If a value is used once, it is not a token
- **Don't skip the alias layer** — Direct global-to-component references break theming
- **Don't invent tokens** — Use existing tokens before creating new ones
- **Don't hardcode values** — Even if you "know" the value, use the token

---

## Token Limits

Tokens must be limited to remain useful. Too many tokens create confusion; too few create workarounds:

| Category | Minimum | Maximum | Reasoning |
|----------|---------|---------|-----------|
| Colors (primitive) | 5 | 10 | Enough for brand and semantics |
| Colors (semantic) | 4 | 8 | Status, action, hierarchy |
| Spacing | 8 | 12 | Scale must be navigable |
| Typography sizes | 3 | 5 | Hierarchy without excess |
| Typography weights | 3 | 4 | Regular, medium, semibold, bold |
| Border widths | 2 | 3 | Thin, medium, thick |
| Border radii | 3 | 5 | None, small, medium, large, full |
| Border styles | 2 | 3 | Solid, dashed, dotted |
| Shadows | 3 | 5 | Elevation levels |
| Motion durations | 3 | 4 | Fast, normal, slow |

These limits are not arbitrary. They reflect cognitive constraints: humans can distinguish approximately 7±2 categories before confusion begins. Token systems that exceed these limits force developers to make choices rather than follow rules.

---

## Token Relationships

Tokens do not exist in isolation. They form relationships:

- **Spacing tokens relate to grid tokens** — The spacing scale must align with the grid system
- **Color tokens relate to contrast requirements** — Every color combination must meet accessibility standards
- **Border tokens relate to spacing tokens** — Border width affects perceived spacing
- **Shadow tokens relate to border tokens** — Shadows can replace borders for depth indication
- **Typography tokens relate to spacing tokens** — Line-height affects vertical rhythm

These relationships mean that changing one token may require adjusting related tokens. Documentation must capture these dependencies.

---

## Token Implementation

Tokens are implemented through platform-specific mechanisms:

- **CSS Custom Properties** — `--color-primary: #3B82F6;`
- **JavaScript Constants** — `export const COLOR_PRIMARY = '#3B82F6';`
- **Design Tools** — Figma variables, Sketch symbols
- **Configuration Files** — JSON, YAML, or TOML token definitions

The implementation mechanism is secondary to the token itself. A token that exists only in documentation is incomplete. A token that exists only in code is undocumented. Both must be maintained.

---

## See Also

- [Color System](color-system.md) — Color token definitions and relationships
- [Spacing System](spacing-system.md) — Spacing token definitions and scale
- [Border System](border-system.md) — Border token definitions and patterns
- [Type System](../typography/type-system.md) — Typography foundations
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Core Principles](../philosophy/core-principles.md) — The axioms from which tokens derive
