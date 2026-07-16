# Object Boundaries (Reference)

## Why This Document Exists

This reference document consolidates all information about object boundaries in the WHITE DIAMOND system. Object boundaries define where objects exist, how they relate to each other, and how users perceive them. Without clear boundaries, users cannot determine what is interactive, what belongs together, or where one element ends and another begins.

This document provides a concise reference for boundary principles, properties, and rules. For detailed exploration, see the linked specification documents.

---

## Core Principle

**Without a border, an object does not exist.**

This is the most fundamental axiom of the WHITE DIAMOND system. A border is not decoration—it is the perceivable expression of an object's boundary. An object exists because it has a border. A border exists because the object exists. Remove either, and both cease to exist.

---

## The Three-Layer Hierarchy

Every WHITE DIAMOND object follows a three-layer hierarchy. This hierarchy is immutable—it cannot be rearranged, simplified, or ignored:

1. **Physical Boundary** — The outermost edge that defines the object's existence in space
2. **Inner Surface** — The space within the boundary that separates content from the void
3. **Content** — The information, text, images, or controls that the object exists to carry

**Hierarchy rules:**
- Boundary defines extent (where the object exists)
- Surface defines materiality (what the object looks like)
- Content defines purpose (why the object exists)
- The hierarchy cannot be reversed (content before boundary creates chaos)

---

## Boundary Types

### Explicit Boundaries

Visible, unmistakable, and unambiguous. The user can see exactly where the object begins and ends.

| Type | Usage | Properties |
|------|-------|------------|
| **Border** | Hard separation | Width, color, style, radius |
| **Outline** | Temporary indicators | Focus, selection, hover |
| **Shadow** | Depth communication | Elevation, blur, spread |
| **Background** | Region definition | Fill color, pattern, opacity |

### Implicit Boundaries

Not drawn—inferred from spatial relationships. The user perceives the boundary without seeing it.

| Type | Usage | Properties |
|------|-------|------------|
| **Whitespace** | Soft grouping | Padding, margin, gap |
| **Alignment** | Shared edges | Left, center, right |
| **Typography** | Text separation | Heading, paragraph, label |

### Soft Boundaries

Gradual transitions without sharp lines.

| Type | Usage | Properties |
|------|-------|------------|
| **Gradient** | Blending regions | Linear, radial |
| **Opacity** | Layering communication | Transparency level |

---

## Boundary Hierarchy

When multiple boundary types coexist, hierarchy determines which dominates:

1. **Explicit borders** — Strongest, always dominant
2. **Background color changes** — Strong grouping, subordinate to borders
3. **Spacing/whitespace** — Soft grouping, subordinate to backgrounds
4. **Alignment** — Weakest grouping, subordinate to spacing

When boundaries conflict, the higher-priority boundary wins.

---

## Boundary Rules

### Rule 1: Interactive Elements Must Have Explicit Boundaries

Users must know exactly where they can click, tap, or focus. Implicit boundaries are insufficient for interactive elements.

- Buttons: Visible clickable area (border, background, or outline)
- Inputs: Visible input area (border, background, or underline)
- Links: Visible text area (underline, color change, or background)
- Touch targets: Minimum 44x44 points

### Rule 2: Similar Elements Must Have Similar Boundaries

If one card has a border, all cards must have borders. Inconsistent boundaries confuse users about what belongs together.

### Rule 3: Boundary Type Must Match Boundary Purpose

| Purpose | Boundary Type |
|---------|---------------|
| Hard separation | Border or background |
| Soft grouping | Whitespace |
| Temporary highlight | Outline |
| Layering and depth | Shadow |
| Blending or transition | Gradient or opacity |

### Rule 4: All Interactive Boundaries Must Meet Minimum Sizes

- Touch targets: 44x44 points minimum
- Click targets: 24x24 pixels minimum
- Focus indicators: 2px outline minimum
- Text input height: 40 points minimum

### Rule 5: Boundaries Must Be Intentional

Every boundary must serve a purpose. If removing a boundary does not change the user's understanding, the boundary should not exist.

---

## Boundary Interactions

### Overlapping Boundaries

When boundaries overlap, clarity is lost. WHITE DIAMOND handles overlaps through:
- **Z-index** — Clear stacking order
- **Containment** — Clear parent-child relationship
- **Disclosure** — Clear temporariness
- **Dismissal** — Easy removal

### Nested Boundaries

Objects can contain other objects. Nesting rules:
- Child boundaries must not exceed parent boundaries
- Child boundaries are subordinate to parent boundaries
- Nesting depth should be limited (maximum 3 levels)

### Conflicting Boundaries

When boundaries contradict each other, one must be removed. WHITE DIAMOND prevents conflicts through hierarchy, consistency, and convention.

---

## Cross-References

- **Detailed specification:** [Object Boundaries](../geometry/object-boundaries.md) — Full boundary specification
- **Border tokens:** [Border System](../tokens/border-system.md) — Border token definitions
- **Geometric constraints:** [Geometric Rules](../geometry/geometric-rules.md) — Why only rectangles
- **Object structure:** [Object Structure](../spatial-hierarchy/object-structure.md) — Three-layer hierarchy
- **Core axioms:** [Core Principles](../philosophy/core-principles.md) — The axioms from which boundaries derive
- **Depth perception:** [Depth Perception](../spatial-hierarchy/depth-perception.md) — How boundaries communicate depth
