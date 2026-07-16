# Composition Rules

## Why This Matters

Composition is the art of arranging elements to create visual order and communicate meaning. Without composition rules, layouts feel arbitrary and disorganized. Rules ensure consistency and clarity across all views.

## Fundamental Composition Rules

### Rule 1: Alignment Creates Order

Every element must align to something:
- **Grid alignment** — Align to grid lines
- **Edge alignment** — Align to other elements' edges
- **Center alignment** — Align to centers
- **Baseline alignment** — Align text baselines

Random positioning creates chaos. Alignment creates order.

### Rule 2: Proximity Creates Relationship

Related elements should be close together; unrelated elements should be far apart:
- **Very close** (4-8px) — Directly related (label and input)
- **Close** (8-16px) — In the same group (form fields)
- **Medium** (16-32px) — In the same section (sections)
- **Far** (32-64px) — In the same view (major sections)
- **Very far** (64+px) — In different contexts (header and footer)

Distance communicates relationship.

### Rule 3: Similarity Creates Grouping

Similar elements are perceived as related:
- **Visual similarity** — Same style, color, shape
- **Positional similarity** — Same alignment, same grid
- **Functional similarity** — Same behavior, same affordance
- **Temporal similarity** — Same appearance timing

Similarity reduces cognitive load.

### Rule 4: Contrast Creates Hierarchy

Different elements communicate different importance:
- **Size contrast** — Larger = more important
- **Color contrast** — Higher contrast = more important
- **Position contrast** — Top/center = more important
- **Spacing contrast** — More space = more important

Contrast guides the eye.

### Rule 5: Balance Creates Stability

Visual weight should be distributed evenly:
- **Symmetrical balance** — Left mirrors right
- **Asymmetrical balance** — Different elements, equal weight
- **Radial balance** — Elements radiate from center
- **Crystal balance** — Repeating patterns

Unbalanced compositions feel unstable.

## Composition Techniques

### The Grid

Grids provide structure for composition:
- **Column grid** — Vertical divisions for content
- **Modular grid** — Row and column divisions for complex layouts
- **Baseline grid** — Horizontal divisions for text alignment
- **Responsive grid** — Adapts to screen size

Grid rules:
- **Consistent gutters** — Same space between columns
- **Consistent margins** — Same space at edges
- **Appropriate columns** — Enough for content needs
- **Responsive behavior** — Adapts to different screens

### White Space

White space is active composition:
- **Macro white space** — Space between major sections
- **Micro white space** — Space between elements
- **Active white space** — Intentional, purposeful space
- **Passive white space** — Default, leftover space

White space rules:
- **Purposeful** — Every space serves a function
- **Consistent** — Same types of space, same values
- **Proportional** — Space relates to content importance
- **Responsive** — Adapts to available space

### Visual Flow

Visual flow guides the eye through content:
- **F-pattern** — For text-heavy content (left to right, top to bottom)
- **Z-pattern** — For visual content (diagonal scanning)
- **Guttenberg diagram** — For balanced content (optical center)
- **Rule of thirds** — For dynamic content (intersection points)

Flow rules:
- **Predictable** — Users can anticipate where to look next
- **Natural** — Follows reading patterns
- **Purposeful** — Guides toward important content
- **Consistent** — Same flow patterns everywhere

### Composition Patterns

#### The Hero Pattern

Large, prominent element at the top:
```
┌─────────────────────────┐
│                         │
│     Hero Content        │
│     (Large, prominent)  │
│                         │
├─────────────────────────┤
│ Supporting Content      │
└─────────────────────────┘
```

Use for: Landing pages, feature highlights

#### The Card Pattern

Multiple equal-weight elements:
```
┌─────┐ ┌─────┐ ┌─────┐
│     │ │     │ │     │
│Card │ │Card │ │Card │
│  1  │ │  2  │ │  3  │
│     │ │     │ │     │
└─────┘ └─────┘ └─────┘
```

Use for: Listings, portfolios, features

#### The Split Pattern

Two-column layout:
```
┌───────────┬───────────┐
│           │           │
│  Content  │  Content  │
│  (Left)   │  (Right)  │
│           │           │
└───────────┴───────────┘
```

Use for: Comparisons, forms with preview

#### The Stack Pattern

Vertical stacking:
```
┌─────────────────────────┐
│ Section 1               │
├─────────────────────────┤
│ Section 2               │
├─────────────────────────┤
│ Section 3               │
└─────────────────────────┘
```

Use for: Articles, forms, settings

## See Also

- [Grid System](grid-system.md) — Grid implementation details
- [Spatial Layout](spatial-layout.md) — Layout as spatial arrangement
- [Space Geometry](../geometry/space-geometry.md) — Fundamentals of digital space
- [Geometric Rules](../geometry/geometric-rules.md) — Specific geometric guidelines
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
