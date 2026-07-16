# Spacing System

## Why This Matters

Spacing creates rhythm, hierarchy, and relationships between elements. Without a systematic spacing system, layouts feel arbitrary and inconsistent. The spacing system ensures consistent spatial relationships across all views.

## Spacing Philosophy

Spacing is not empty space—it is a material with properties. Spacing:
- **Communicates relationship** — Close elements are related
- **Creates hierarchy** — More space = more important
- **Provides rhythm** — Consistent spacing creates visual flow
- **Ensures readability** — Adequate space improves comprehension

## Spacing Scale

WHITE DIAMOND uses a base-4 spacing scale:

### Base Unit

The fundamental spacing unit: **4px**

All spacing values derive from this base unit through multiplication.

### Scale Values

| Token | Value | Usage |
|-------|-------|-------|
| `spacing-0` | 0px | No space |
| `spacing-1` | 4px | Tightest space |
| `spacing-2` | 8px | Tight space |
| `spacing-3` | 12px | Compact space |
| `spacing-4` | 16px | Standard space |
| `spacing-5` | 20px | Moderate space |
| `spacing-6` | 24px | Comfortable space |
| `spacing-8` | 32px | Wide space |
| `spacing-10` | 40px | Larger space |
| `spacing-12` | 48px | Major space |
| `spacing-16` | 64px | Page-level space |
| `spacing-20` | 80px | Section-level space |
| `spacing-24` | 96px | Major section space |

### Semantic Tokens

| Token | Reference | Usage |
|-------|-----------|-------|
| `spacing-tightest` | `spacing-1` | Within compact elements |
| `spacing-tight` | `spacing-2` | Within default elements |
| `spacing-compact` | `spacing-3` | Between related elements |
| `spacing-default` | `spacing-4` | Standard spacing |
| `spacing-comfortable` | `spacing-6` | Between sections |
| `spacing-wide` | `spacing-8` | Between major sections |
| `spacing-page` | `spacing-16` | Page-level margins |

## Spacing Types

### Internal Spacing (Padding)

Space inside an element's boundaries:
- **Input padding** — Space inside input fields
- **Button padding** — Space inside buttons
- **Card padding** — Space inside cards
- **Section padding** — Space inside sections

Padding rules:
- **Consistent** — Same type of element, same padding
- **Proportional** — Larger elements can have more padding
- **Responsive** — Can adapt to screen size
- **Accessible** — Touch targets have adequate padding

### External Spacing (Margin)

Space outside an element's boundaries:
- **Element margin** — Space between elements
- **Section margin** — Space between sections
- **Page margin** — Space at page edges
- **Grid margin** — Space at grid edges

Margin rules:
- **Consistent** — Same type of spacing, same value
- **Proportional** — More important elements get more margin
- **Collapse** — Adjacent margins collapse to larger value
- **Responsive** — Can adapt to screen size

### Gap Spacing

Space between items in a container:
- **Flex gap** — Space between flex items
- **Grid gap** — Space between grid items
- **List gap** — Space between list items
- **Form gap** — Space between form fields

Gap rules:
- **Consistent** — Same type of container, same gap
- **Proportional** — Can vary by container size
- **Visual** — Creates clear separation
- **Rhythmic** — Creates consistent visual flow

## Spacing Rules

### Rule 1: Spacing Is Consistent

The same type of spacing must use the same value:
- **Same padding** — Same element type, same padding
- **Same margin** — Same spacing type, same margin
- **Same gap** — Same container type, same gap
- **Same rhythm** — Consistent visual beat

Inconsistent spacing breaks visual rhythm.

### Rule 2: Spacing Is Proportional

Spacing values must relate to each other:
- **Base unit** — 4px
- **Doubling** — 4, 8, 16, 32, 64
- **Consistent steps** — Each step is noticeable
- **Clear hierarchy** — More space = more importance

Non-proportional spacing feels arbitrary.

### Rule 3: Spacing Is Purposeful

Every space must serve a purpose:
- **Separation** — Keeping unrelated elements apart
- **Grouping** — Keeping related elements together
- **Emphasis** — Making important elements stand out
- **Rhythm** — Creating consistent visual flow

Space without purpose is waste.

### Rule 4: Spacing Is Responsive

Spacing must adapt to context:
- **Screen size** — More space on larger screens
- **Content density** — Less space when content is dense
- **User preference** — Respect user spacing settings
- **Accessibility** — Ensure space supports assistive technology

Rigid spacing breaks on different contexts.

### Rule 5: Spacing Is Testable

Spacing values must be verifiable:
- **Pixel values** — Exact pixel measurements
- **Token references** — Named spacing values
- **Visual examples** — Clear visual examples
- **Code examples** — Implementation examples

Untestable spacing is inconsistent spacing.

## Spacing Patterns

### Element Spacing

Space between similar elements:
- **List items** — `spacing-2` (8px)
- **Form fields** — `spacing-4` (16px)
- **Card grid** — `spacing-6` (24px)
- **Section separators** — `spacing-8` (32px)

### Container Spacing

Space inside containers:
- **Tight container** — `spacing-2` (8px)
- **Default container** — `spacing-4` (16px)
- **Comfortable container** — `spacing-6` (24px)
- **Spacious container** — `spacing-8` (32px)

### Page Spacing

Space at page level:
- **Page margin** — `spacing-6` to `spacing-8` (24-32px)
- **Section margin** — `spacing-8` to `spacing-12` (32-48px)
- **Major section** — `spacing-12` to `spacing-16` (48-64px)

## See Also

- [Design Tokens](design-tokens.md) — The atomic values
- [Color System](color-system.md) — Color token definitions
- [Border System](border-system.md) — Border token definitions
- [Grid System](../layout/grid-system.md) — Grid implementation
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
