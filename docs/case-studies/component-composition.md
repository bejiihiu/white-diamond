# Component Composition

## Why This Matters

Components do not exist in isolation. They are assembled into larger structures—forms, pages, dashboards, workflows. How components are composed determines whether the interface feels like a unified architecture or a collection of unrelated pieces. Component composition is the discipline of assembling atomic elements into coherent spatial structures.

Without composition rules, designers and developers make arbitrary decisions about how elements relate. One team groups elements by proximity; another groups them by background. One team uses heavy borders for emphasis; another uses shadows. The result is an interface that feels fragmented—each section following its own logic, with no overarching structure.

WHITE DIAMOND defines composition rules that ensure every assembly of components follows the same spatial logic. These rules are not suggestions—they are architectural requirements that produce consistent, predictable, and navigable interfaces.

---

## The Principles of Composition

### Principle 1: Proximity Communicates Relationship

Elements that are close together are perceived as related. Elements that are far apart are perceived as independent. This is the most fundamental composition principle—it follows directly from the spatial model's pressure property.

**Proximity rules:**
- Related elements should be within 8-16px of each other
- Unrelated elements should be separated by 32-64px
- Proximity transitions must be gradual, never abrupt
- Proximity must be consistent within a group

**Why this matters:** Proximity is the primary mechanism for communicating grouping without explicit boundaries. When elements are close, users unconsciously understand they belong together. When elements are far apart, users understand they are independent. This unconscious understanding reduces cognitive load and increases scanning efficiency.

### Principle 2: Alignment Creates Order

Elements sharing edges are aligned. Alignment creates implicit boundaries that the eye follows automatically. Alignment is the invisible structure that gives order to spatial relationships.

**Alignment rules:**
- Elements should align to grid lines or other objects
- Alignment edges should be consistent within a region
- Misalignment must be intentional and justified
- Alignment creates implicit grouping

**Why this matters:** The human visual system groups aligned objects automatically. When elements share a left edge, the eye follows that edge vertically, discovering relationships and hierarchies without conscious effort. When elements are misaligned, the eye cannot find a pattern, and the interface feels chaotic.

### Principle 3: Repetition Creates Consistency

When the same composition pattern is used across the interface, users learn the pattern once and apply it everywhere. Repetition creates predictability—the user knows what to expect because they have seen it before.

**Repetition rules:**
- Similar content types should use similar composition patterns
- Composition patterns should be consistent across views
- New patterns should be introduced gradually
- Patterns should be documented and referenced

**Why this matters:** Repetition is the mechanism through which users build mental models. When the same pattern repeats, users transfer knowledge from one context to another. When patterns vary, users must re-learn each context, increasing cognitive load and reducing efficiency.

### Principle 4: Contrast Communicates Hierarchy

When elements differ in size, weight, color, or position, the differences communicate hierarchy. Contrast is the mechanism through which users determine what is important and what is incidental.

**Contrast rules:**
- Primary elements should have the strongest contrast
- Secondary elements should have moderate contrast
- Tertiary elements should have the weakest contrast
- Contrast must be sufficient to be perceivable
- Contrast must be consistent across similar elements

**Why this matters:** Contrast guides attention. When primary elements have the strongest contrast, the eye is drawn to them first. When secondary elements have moderate contrast, the eye moves to them next. This natural reading order reduces cognitive load and increases scanning efficiency.

### Principle 5: Balance Distributes Weight

Visual weight should be distributed across the interface to create a sense of stability. Heavy elements on one side balanced by heavy elements on the other side create equilibrium. Unbalanced weight creates tension—the user feels that the interface is unstable.

**Balance rules:**
- Heavy elements should be balanced by other heavy elements
- Light elements should be balanced by other light elements
- Center alignment creates natural balance
- Asymmetry must be intentional and justified

**Why this matters:** Balance communicates stability. When the interface feels stable, users feel confident. When the interface feels unstable, users feel anxious. Balance is the visual expression of architectural stability.

---

## Composition Patterns

### The Card Grid Pattern

Cards arranged in a grid, each with consistent structure and spacing:

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Card 1  │ │ Card 2  │ │ Card 3  │
│         │ │         │ │         │
└─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Card 4  │ │ Card 5  │ │ Card 6  │
│         │ │         │ │         │
└─────────┘ └─────────┘ └─────────┘
```

**Composition rules:**
- Cards must have consistent borders (same weight, same color)
- Cards must have consistent spacing (same gap between all cards)
- Cards must have consistent internal structure (same layer hierarchy)
- Cards must align to a grid (same columns, same rows)

### The Form Pattern

Inputs arranged vertically, each with label, field, and helper text:

```
┌─────────────────────────────┐
│ Label                       │
│ ┌─────────────────────────┐ │
│ │ Input                   │ │
│ └─────────────────────────┘ │
│ Helper text                 │
└─────────────────────────────┘
┌─────────────────────────────┐
│ Label                       │
│ ┌─────────────────────────┐ │
│ │ Input                   │ │
│ └─────────────────────────┘ │
│ Helper text                 │
└─────────────────────────────┘
```

**Composition rules:**
- Inputs must have consistent spacing (same gap between all fields)
- Labels must align to the same edge (left or top)
- Helper text must be consistently positioned (below input)
- Error states must be consistently communicated (border color change)

### The Navigation Pattern

Navigation items arranged vertically or horizontally, each with consistent structure:

```
┌─────────────────────────────┐
│ Logo                        │
├─────────────────────────────┤
│ Item 1                      │
│ Item 2                      │
│ Item 3                      │
│ Item 4                      │
├─────────────────────────────┤
│ Action                      │
└─────────────────────────────┘
```

**Composition rules:**
- Navigation must be separated from content by a structural border
- Items must have consistent spacing (same gap between all items)
- Active item must be clearly indicated (border, background, or color)
- Navigation must be consistently positioned across views

### The Data Table Pattern

Data arranged in rows and columns, with consistent header and cell structure:

```
┌─────────┬─────────┬─────────┐
│ Header 1│ Header 2│ Header 3│
├─────────┼─────────┼─────────┤
│ Cell 1  │ Cell 2  │ Cell 3  │
├─────────┼─────────┼─────────┤
│ Cell 4  │ Cell 5  │ Cell 6  │
└─────────┴─────────┴─────────┘
```

**Composition rules:**
- Table must have a structural border (defines the table boundary)
- Rows must be separated by decorative borders (horizontal lines)
- Columns must be separated by spacing or decorative borders
- Header must be visually distinct (heavier border or background)

### The Modal Pattern

Modal overlaying content, with clear separation and focus:

```
┌─────────────────────────────┐
│        Dimmed Background    │
│  ┌───────────────────────┐  │
│  │ Modal                 │  │
│  │ ┌───────────────────┐ │  │
│  │ │ Header            │ │  │
│  │ ├───────────────────┤ │  │
│  │ │ Content           │ │  │
│  │ ├───────────────────┤ │  │
│  │ │ Actions           │ │  │
│  │ └───────────────────┘ │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**Composition rules:**
- Modal must have a prominent border and shadow (highest elevation)
- Background must be dimmed (60% opacity)
- Modal must be centered in the viewport
- Modal must capture all interaction until dismissed

---

## Composition Rules

### Rule 1: Related Elements Share Boundaries

Elements that belong together should share a container boundary. The container boundary groups them visually and spatially. Without shared boundaries, related elements appear independent.

### Rule 2: Unrelated Elements Have Separate Boundaries

Elements that are independent should have separate boundaries. Separate boundaries create visual separation and spatial independence. Without separate boundaries, unrelated elements appear grouped.

### Rule 3: Boundary Weight Matches Importance

More important elements have heavier boundaries. Less important elements have lighter boundaries. This weight hierarchy creates visual order and guides attention.

### Rule 4: Spacing Follows Proximity Rules

Related elements are close (8-16px). Unrelated elements are far (32-64px). Spacing transitions must be gradual. Spacing must be consistent within a view.

### Rule 5: Alignment Is Consistent

Elements within a region must align to the same edges. Alignment creates order. Misalignment creates chaos. Misalignment must be intentional and justified.

---

## Composition Anti-Patterns

### Inconsistent Spacing (Prohibited)

If one card group uses 16px spacing, all card groups must use 16px spacing. Inconsistent spacing creates visual noise and breaks rhythm.

### Mixed Boundary Types (Prohibited)

If one section uses borders for grouping, all similar sections must use borders. Mixing borders and backgrounds for the same purpose creates confusion.

### Overlapping Boundaries (Prohibited)

When one object's boundary extends into another object's boundary, clarity is lost. The user cannot determine which object owns the contested space.

### Visual Noise (Prohibited)

Decorative elements—gradients, patterns, shadows without purpose—create visual noise. Every element must serve a structural, communicative, or rhythmic purpose.

---

## See Also

- [Composition Rules](../layout/composition-rules.md) — The spatial logic of layout
- [Grid System](../layout/grid-system.md) — Spatial organization systems
- [Object Structure](../spatial-hierarchy/object-structure.md) — How objects are structured
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Border Principles](../geometry/border-principles.md) — Why borders are everything
- [Spacing System](../tokens/spacing-system.md) — Spacing token definitions
