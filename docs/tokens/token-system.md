# Token System

## Why This Matters

The token system is the bridge between design principles and implementation. Without a defined token system, design decisions become arbitrary—different developers use different values, different components use different scales, and the interface fragments into inconsistent pieces.

WHITE DIAMOND defines a token system that ensures every visual value derives from a single source of truth. This system is not a convenience layer—it is structural infrastructure that affects every aspect of the design.

---

## System Architecture

The token system follows a three-tier hierarchy that mirrors architectural construction:

### Tier 1: Global Tokens

Raw values without semantic meaning. The periodic table of the design system.

```
blue-500: #3B82F6
gray-200: #E5E7EB
spacing-4: 4px
spacing-8: 8px
font-size-14: 14px
font-size-16: 16px
border-width-1: 1px
border-width-2: 2px
```

**Purpose:** Define what values exist.
**Usage:** Never reference directly in components.

### Tier 2: Alias Tokens

Semantic names that reference global tokens. The vocabulary of the design system.

```
color-primary: {blue-500}
color-border-subtle: {gray-200}
spacing-padding-default: {spacing-4}
spacing-margin-section: {spacing-8}
font-size-body: {font-size-14}
font-size-heading: {font-size-16}
border-width-default: {border-width-1}
border-width-emphasis: {border-width-2}
```

**Purpose:** Define what values are for.
**Usage:** Reference in component tokens, not in components directly.

### Tier 3: Component Tokens

Component-specific tokens that reference alias tokens. The vocabulary of each component.

```
button-background: {color-primary}
button-padding-horizontal: {spacing-padding-default}
card-border: {color-border-subtle}
card-padding: {spacing-padding-section}
input-font-size: {font-size-body}
input-border-width: {border-width-default}
```

**Purpose:** Define what each component uses.
**Usage:** Reference in component implementations.

---

## Token Categories

### Color Tokens

Color as information—communicating hierarchy, state, and meaning.

**Primitive colors:**
- `blue-50` through `blue-900` — Brand palette
- `gray-50` through `gray-900` — Neutral palette
- `green-500` — Success states
- `red-500` — Error states
- `yellow-500` — Warning states

**Semantic colors:**
- `color-primary` — Primary brand color
- `color-secondary` — Secondary brand color
- `color-background` — Page background
- `color-surface` — Component background
- `color-border` — Default border color
- `color-text-primary` — Primary text color
- `color-text-secondary` — Secondary text color
- `color-text-disabled` — Disabled text color

**Rules:**
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Colors must be perceivable by users with color vision deficiencies
- Color changes must communicate state, not decoration

### Spacing Tokens

Spacing as rhythm—creating relationships and hierarchy through consistent gaps.

**Scale:**
```
spacing-0: 0px
spacing-1: 4px
spacing-2: 8px
spacing-3: 12px
spacing-4: 16px
spacing-5: 20px
spacing-6: 24px
spacing-8: 32px
spacing-10: 40px
spacing-12: 48px
spacing-16: 64px
```

**Usage:**
- `spacing-padding-default` — Default padding (16px)
- `spacing-padding-section` — Section padding (32px)
- `spacing-margin-default` — Default margin (16px)
- `spacing-margin-section` — Section margin (32px)
- `spacing-gap-default` — Default gap (8px)
- `spacing-gap-large` — Large gap (16px)

**Rules:**
- Spacing must follow the doubling sequence (4, 8, 16, 32, 64, 128, 256)
- Related elements use smaller spacing (8-16px)
- Unrelated elements use larger spacing (32-64px)
- Spacing must be consistent within a view

### Border Tokens

Border as existence—defining where objects begin and end.

**Width:**
```
border-width-0: 0px
border-width-1: 1px (default)
border-width-2: 2px (emphasis)
border-width-3: 3px (strong)
```

**Radius:**
```
border-radius-0: 0px (sharp)
border-radius-sm: 2px (minimal)
border-radius-md: 4px (moderate)
border-radius-lg: 8px (maximum)
```

**Style:**
```
border-style-solid: solid (default)
border-style-dashed: dashed (provisional)
border-style-double: double (emphasis)
```

**Rules:**
- Border must be present on every object (minimum 1px)
- Border weight must communicate hierarchy
- Border radius must not exceed 8px (preserves rectangular geometry)
- Border must be consistent within a component type

### Typography Tokens

Typography as voice—communicating information and hierarchy.

**Sizes:**
```
font-size-xs: 12px
font-size-sm: 14px
font-size-md: 16px
font-size-lg: 20px
font-size-xl: 24px
font-size-2xl: 32px
font-size-3xl: 40px
```

**Weights:**
```
font-weight-light: 300
font-weight-regular: 400
font-weight-medium: 500
font-weight-semibold: 600
font-weight-bold: 700
```

**Line heights:**
```
line-height-tight: 1.2 (headings)
line-height-normal: 1.5 (body)
line-height-loose: 1.6 (code)
```

**Rules:**
- Type scale must follow the 1.25 ratio
- Font weight must communicate hierarchy
- Line height must be consistent within a text block
- Typography must be consistent across similar elements

### Shadow Tokens

Shadow as depth—communicating elevation and hierarchy.

**Levels:**
```
shadow-none: none (flat on surface)
shadow-subtle: 0px 2px 4px rgba(0,0,0,0.1) (slightly elevated)
shadow-medium: 0px 4px 8px rgba(0,0,0,0.12) (moderately elevated)
shadow-prominent: 0px 8px 16px rgba(0,0,0,0.14) (significantly elevated)
shadow-dramatic: 0px 16px 32px rgba(0,0,0,0.16) (floating)
```

**Rules:**
- Shadow must communicate elevation
- Higher layers have stronger shadows
- Shadow must be consistent within a view
- Shadow must not be used for decoration

### Motion Tokens

Motion as physics—demonstrating spatial relationships through movement.

**Durations:**
```
duration-fast: 100ms
duration-normal: 200ms
duration-slow: 400ms
duration-slower: 600ms
```

**Easings:**
```
easing-default: ease-in-out
easing-enter: ease-out
easing-exit: ease-in
easing-linear: linear
```

**Rules:**
- Duration must match distance and importance
- Easing must follow physical laws
- Motion must demonstrate spatial relationships
- Motion must be consistent within a view

---

## Token Relationships

Tokens do not exist in isolation. They form relationships:

- **Spacing tokens relate to grid tokens** — The spacing scale aligns with the grid system
- **Color tokens relate to contrast requirements** — Every color combination meets accessibility standards
- **Border tokens relate to spacing tokens** — Border width affects perceived spacing
- **Shadow tokens relate to border tokens** — Shadows can replace borders for depth indication
- **Typography tokens relate to spacing tokens** — Line-height affects vertical rhythm

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

- **Detailed specification:** [Design Tokens](design-tokens.md) — Full token specification
- **Color system:** [Color System](color-system.md) — Color token definitions
- **Spacing system:** [Spacing System](spacing-system.md) — Spacing token definitions
- **Border system:** [Border System](border-system.md) — Border token definitions
- **Typography system:** [Typography System](typography-system.md) — Typography token definitions
- **Core axioms:** [Core Principles](../philosophy/core-principles.md) — The axioms from which tokens derive
- **Object structure:** [Object Structure](../spatial-hierarchy/object-structure.md) — How tokens define object structure
- **Depth perception:** [Depth Perception](../spatial-hierarchy/depth-perception.md) — How tokens communicate depth
