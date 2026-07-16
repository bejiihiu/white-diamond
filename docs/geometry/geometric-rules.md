# Geometric Rules

## Why This Matters

Geometric rules transform abstract spatial concepts into concrete, testable guidelines. Without specific rules, designers and developers must make arbitrary decisions, leading to inconsistency.

## Fundamental Rules

### Rule 1: All Space Is Aligned

No element should exist at an arbitrary position. Every element must align to:
- A grid line
- Another element's edge
- A consistent spacing value
- A mathematical center point

Alignment creates order. Random positioning creates chaos.

### Rule 2: All Spacing Is Proportional

Spacing values must relate to each other through consistent ratios. WHITE DIAMOND uses a base spacing unit and derives all other spacing values from it:

- **4x** — Tight internal spacing (within compact elements)
- **8x** — Standard internal spacing (within default elements)
- **16x** — Section spacing (between related sections)
- **32x** — Major section spacing (between distinct sections)
- **64x** — Page-level spacing (major structural divisions)

Where x is the base spacing unit.

### Rule 3: All Sizes Are Constrained

No element should grow without constraint. Every element must have:
- A maximum width (prevents unreadable line lengths)
- A minimum width (prevents unusable sizes)
- A preferred width (its natural size)
- A flexible width (how it responds to available space)

Constrained growth prevents layouts from breaking.

### Rule 4: All Boundaries Are Intentional

Every boundary must serve a purpose:
- **Separation** — Keeping unrelated elements apart
- **Grouping** — Keeping related elements together
- **Emphasis** — Making important elements stand out
- **Structure** — Creating visual hierarchy

Boundaries without purpose are visual noise.

### Rule 5: All Overflow Is Handled

Content will exceed its boundaries. Every element must define what happens when:
- Text is too long (ellipsis, wrap, or scroll)
- Images are too large (scale, crop, or overflow)
- Containers are too small (scroll, collapse, or expand)
- Data is too complex (paginate, virtualize, or truncate)

Unhandled overflow is broken layout.

## Proportional Rules

### The Rule of Thirds

Divide any rectangular space into thirds both horizontally and vertically. Key elements should exist at:
- Intersections of third lines
- Along third lines
- Within third sections

This creates balanced, dynamic compositions.

### The Rule of Golden Ratio

When dividing space, prefer proportions close to the golden ratio (approximately 1:1.618). This applies to:
- Column widths (main and sidebar)
- Header and content heights
- Card proportions
- Image cropping

The golden ratio creates naturally pleasing proportions.

### The Rule of Harmonic Spacing

Spacing values should be mathematically related. WHITE DIAMOND uses a doubling sequence:

```
4 → 8 → 16 → 32 → 64 → 128 → 256
```

Each value is double the previous. This creates consistent visual rhythm.

## Alignment Rules

### Edge Alignment

Elements sharing an edge are perceived as related. WHITE DIAMOND defines:
- **Left alignment** — Default for text and lists
- **Right alignment** — For numbers and secondary content
- **Top alignment** — For items in horizontal layouts
- **Bottom alignment** — For items with varying heights

### Center Alignment

Centered elements feel balanced but can reduce scannability. WHITE DIAMOND limits center alignment to:
- Headings (when prominent)
- Empty states (when appropriate)
- Featured content (when emphasized)
- Navigation (for simple menus)

### Grid Alignment

All elements should align to the nearest grid line. Elements that fall between grid lines should snap to the closest line. This creates consistent visual rhythm.

## Proportion Rules

### Size Proportion

Element sizes should follow consistent proportions:
- **Primary element** — 1x (base size)
- **Secondary element** — 0.75x (three-quarters)
- **Tertiary element** - 0.5x (half)
- **Quaternary element** — 0.25x (quarter)

### Spacing Proportion

Spacing around elements should reflect their importance:
- **High importance** — 2x standard spacing
- **Normal importance** — 1x standard spacing
- **Low importance** — 0.5x standard spacing

### Typography Proportion

Text sizes should follow a modular scale:
- **Display** — Largest, for hero sections
- **Heading 1** — Major section headings
- **Heading 2** — Subsection headings
- **Heading 3** — Minor headings
- **Body** — Regular content
- **Caption** — Supporting text

## See Also

- [Space Geometry](space-geometry.md) — The fundamentals of digital space
- [Object Boundaries](object-boundaries.md) — How objects define their limits
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Grid System](../layout/grid-system.md) — Grid implementation
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
