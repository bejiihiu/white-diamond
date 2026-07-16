# Object Boundaries

## Why This Matters

Without clear boundaries, users cannot determine what is interactive, what belongs together, or where one element ends and another begins. Boundaries are the fundamental unit of spatial understanding.

## What Are Object Boundaries?

Object boundaries are the limits within which an element exists. Every element has boundaries, whether they are visible or not. Boundaries define:

- **Extent** — How much space the element occupies
- **Relationship** — What other elements are nearby
- **Interaction** — What areas respond to user input
- **Overflow** — What happens when content exceeds boundaries

## Types of Boundaries

### Visible Boundaries

Visible boundaries are explicit visual indicators:

**Borders**
- Solid lines around elements
- Communicate hard separation
- Best for: cards, inputs, containers
- Risk: Can feel heavy if overused

**Outlines**
- Lines that don't affect layout
- Communicate focus or selection
- Best for: focus indicators, temporary highlights
- Risk: Can overlap with other elements

**Shadows**
- Depth-based boundaries
- Communicate elevation and layering
- Best for: floating elements, dropdowns, modals
- Risk: Can feel decorative if inconsistent

**Backgrounds**
- Filled areas that define regions
- Communicate grouping
- Best for: sections, panels, cards
- Risk: Can feel heavy if overused

### Implicit Boundaries

Implicit boundaries are defined by spatial relationships:

**Whitespace**
- Space between elements creates separation
- Communicates soft grouping
- Best for: related content, reading flow
- Risk: Can feel undefined if inconsistent

**Alignment**
- Elements aligned to common edges
- Communicates relationship
- Best for: lists, grids, forms
- Risk: Can feel rigid if overused

**Typography**
- Text styles create implicit boundaries
- Communicates hierarchy
- Best for: headings, paragraphs, labels
- Risk: Can feel vague without visual boundaries

### Soft Boundaries

Soft boundaries have gradual transitions:

**Gradients**
- Smooth color transitions
- Communicate blending regions
- Best for: backgrounds, overlays
- Risk: Can feel undefined

**Opacity**
- Transparency-based separation
- Communicates layering
- Best for: overlays, disabled states
- Risk: Can reduce readability

## Boundary Rules

### The Rule of Explicit Boundaries

Interactive elements must have explicit boundaries. Users must know exactly where they can click, tap, or focus. This means:

- Buttons must have visible clickable areas
- Inputs must have visible input areas
- Links must have visible text areas
- Touch targets must have minimum sizes

### The Rule of Consistent Boundaries

Similar elements must have similar boundaries. If one card has a border, all cards must have borders. If one section uses background color, all sections must use background color.

Inconsistent boundaries confuse users about what belongs together.

### The Rule of Appropriate Boundaries

Boundary type must match boundary purpose:

- **Hard separation** → Use borders or backgrounds
- **Soft grouping** → Use whitespace
- **Temporary highlight** → Use outlines or shadows
- **Layering** → Use shadows or opacity

### The Rule of Minimum Size

All interactive boundaries must meet minimum size requirements:
- Touch targets: Minimum 44x44 points
- Click targets: Minimum 24x24 pixels
- Focus indicators: Minimum 2px outline
- Text input height: Minimum 40 points

These minimums ensure usability for all users.

## Boundary Interactions

### Overlapping Boundaries

When boundaries overlap, clarity is lost. WHITE DIAMOND handles overlaps through:

- **Z-index** — Layered boundaries have clear stacking order
- **Containment** — Overlapping elements are clearly contained
- **Disclosure** — Overlapping elements are clearly temporary
- **Dismissal** — Overlapping elements can be easily dismissed

### Conflicting Boundaries

When boundaries contradict, users are confused. WHITE DIAMOND prevents conflicts through:

- **Hierarchy** — One boundary type dominates
- **Consistency** — Similar contexts use similar boundaries
- **Convention** — Follow platform conventions for boundary types

## See Also

- [Space Geometry](space-geometry.md) — The fundamentals of digital space
- [Geometric Rules](geometric-rules.md) — Specific geometric guidelines
- [Design Tokens](../tokens/design-tokens.md) — Boundary-related tokens
- [Border System](../tokens/border-system.md) — Border token definitions
- [Component Philosophy](../components/component-philosophy.md) — How components define boundaries
