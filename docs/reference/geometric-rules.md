# Geometric Rules (Reference)

## Why This Document Exists

This reference document consolidates all information about geometric rules in the WHITE DIAMOND system. Geometric rules transform abstract spatial concepts into concrete, testable guidelines. Without specific rules, designers and developers make arbitrary decisions, leading to inconsistency.

This document provides a concise reference for geometric rules, constraints, and principles. For detailed exploration, see the linked specification documents.

---

## Fundamental Constraint

**Only rectangles exist.**

Circles, ovals, organic shapes, and freeform geometry are forbidden. This constraint is not arbitrary—it follows from the spatial model itself. Rectangles are the geometry of construction. They are what humans build with—walls, floors, ceilings, doors, windows. They are the geometry of order, predictability, and alignment.

---

## Fundamental Rules

### Rule 1: All Space Is Aligned

No element should exist at an arbitrary position. Every element must align to:
- A grid line (column or row boundary)
- Another element's edge (left, right, top, or bottom)
- A consistent spacing value (multiple of the base unit)
- A mathematical center point (center of container or viewport)

**Why:** Alignment creates order. The human visual system groups aligned objects automatically.

### Rule 2: All Spacing Is Proportional

Spacing values must relate through consistent ratios. WHITE DIAMOND uses a doubling sequence:

```
4 → 8 → 16 → 32 → 64 → 128 → 256
```

**Why:** Proportional spacing creates visual rhythm. The eye can predict the next spacing value.

### Rule 3: All Sizes Are Constrained

No element should grow without constraint. Every element must have:
- **Maximum width** — Prevents unreadable line lengths
- **Minimum width** — Prevents unusable sizes
- **Preferred width** — The element's natural size
- **Flexible width** — How the element responds to available space

**Why:** Unconstrained growth breaks layouts.

### Rule 4: All Boundaries Are Intentional

Every boundary must serve a purpose. Boundaries without purpose are visual noise.

**Why:** Random boundaries create visual noise and break spatial understanding.

### Rule 5: All Geometry Is Rectangular

All objects must be rectangular. Radius is permitted for visual softness (0-8px maximum) but must not create organic or circular shapes.

**Why:** Rectangles communicate construction; circles communicate nature.

---

## Geometric Properties

### Alignment

Alignment creates implicit boundaries through shared edges:

- **Left alignment** — Elements share a left edge
- **Center alignment** — Elements share a center axis
- **Right alignment** — Elements share a right edge
- **Grid alignment** — Elements align to column boundaries

### Spacing

Spacing creates separation through consistent gaps:

- **Intra-element spacing (padding)** — Space inside the boundary
- **Inter-element spacing (margin/gap)** — Space between boundaries
- **Grid spacing (gutter)** — Space between columns

### Proportion

Proportion creates visual harmony through consistent ratios:

- **Type scale** — 1.25 ratio between sizes
- **Spacing scale** — 2:1 ratio between values
- **Border weight scale** — 1px increments

---

## Geometric Anti-Patterns

### Arbitrary Positioning (Prohibited)

Elements placed at random positions without alignment. Creates chaos and breaks spatial understanding.

### Inconsistent Spacing (Prohibited)

Different spacing values for similar elements. Creates visual noise and breaks rhythm.

### Unconstrained Growth (Prohibited)

Elements that expand without maximum width. Creates unreadable line lengths and broken layouts.

### Organic Shapes (Prohibited)

Circles, ovals, organic shapes. Break the architectural language and create inconsistency.

---

## Cross-References

- **Detailed specification:** [Geometric Rules](../geometry/geometric-rules.md) — Full geometric specification
- **Object boundaries:** [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- **Space geometry:** [Space Geometry](../geometry/space-geometry.md) — Mathematical foundations
- **Grid system:** [Grid System](../layout/grid-system.md) — Spatial organization
- **Spacing tokens:** [Spacing System](../tokens/spacing-system.md) — Spacing definitions
- **Core axioms:** [Core Principles](../philosophy/core-principles.md) — The axioms from which geometry derives
