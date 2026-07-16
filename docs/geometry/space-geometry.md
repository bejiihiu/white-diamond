# Space Geometry

## Why This Matters

Space geometry is the mathematical foundation upon which every visual decision in WHITE DIAMOND is built. It is not decoration. It is not preference. It is the physics of our digital architecture. Every pixel, every gap, every proportion must be derived from these principles—not improvised, not guessed, not copied from another interface.

Without an explicit geometric model, layouts become arbitrary. Two designers solving the same problem will produce incompatible solutions. Users will sense the inconsistency even if they cannot articulate it. The interface will feel like a collection of unrelated pieces rather than a unified structure.

WHITE DIAMOND rejects this outcome. We define space precisely, measure it precisely, and divide it precisely.

---

## The Nature of Digital Space

Digital space is a two-dimensional Cartesian plane. It has width (horizontal axis) and height (vertical axis). Unlike physical space, it has no inherent scale—a pixel is a pixel regardless of whether it is displayed on a phone or a projector. This means WHITE DIAMOND must define its own spatial logic rather than relying on physical constants like centimeters or inches.

### The Infinite Plane

The total space available in WHITE DIAMOND is unbounded. There is no edge to the canvas. There is no maximum width or height. The viewport—the rectangular region currently visible on the user's screen—is a finite window into this infinite plane. This is not metaphor. This is architectural reality.

The implications are profound:

- **Objects exist before they are seen.** A form that extends beyond the viewport still exists; the user simply cannot see it until they scroll.
- **Space does not end.** There is no "bottom of the page" in a structural sense. The concept of "bottom" is a viewport artifact, not a spatial property.
- **Navigation is translation.** Moving between views is not teleportation. It is a transformation of the viewport's position within the infinite plane.

### The Coordinate System

WHITE DIAMOND uses a Cartesian coordinate system with the origin (0, 0) at the top-left corner of the viewport. The positive x-axis extends to the right. The positive y-axis extends downward. All spatial positions, sizes, and relationships are expressed as coordinate pairs (x, y) or dimension tuples (width, height).

Coordinates are expressed in logical pixels, not physical pixels. A logical pixel corresponds to a device-independent unit of measurement that remains consistent across screen densities. On a 2x Retina display, one logical pixel maps to four physical pixels (2x2). On a 3x display, it maps to nine (3x3). The designer specifies logical pixels; the rendering engine handles the mapping.

---

## The Unit System

All spatial measurements derive from a base unit. The base unit is not a fixed pixel value—it is a relationship between elements. The base unit adapts to context, producing three distinct scales:

### Micro Scale

The micro scale governs tight spaces: inline elements, small details, compact interfaces. Micro spacing uses the smallest increments in the spacing sequence. Micro elements have minimal internal padding and tight external margins.

Micro scale is for:
- Inline labels adjacent to input fields
- Icon-to-text gaps within buttons
- Small badge dimensions
- Tight table cell padding
- Compact list item spacing

### Standard Scale

The standard scale is the default. It governs typical layouts: card content, section spacing, form layouts, navigation elements. Standard spacing uses the middle increments in the spacing sequence.

Standard scale is for:
- Section-to-section gaps
- Card internal padding
- Form field vertical spacing
- Button height and padding
- Navigation item spacing

### Macro Scale

The macro scale governs large sections and structural divisions. Macro spacing uses the largest increments in the spacing sequence. Macro scale creates emphasis through spatial generosity.

Macro scale is for:
- Major page section separation
- Hero area internal spacing
- Full-width band padding
- Footer-to-content gaps
- Prominent call-to-action isolation

### Scale Relationships

The three scales are not arbitrary—they maintain proportional relationships. Micro is to Standard as Standard is to Macro. This means that if Standard spacing between sections is 32px, then Micro spacing between related elements is 16px, and Macro spacing between major divisions is 64px. The ratio is preserved regardless of the absolute values chosen for a specific implementation.

---

## Spatial Density

Digital space has density—the ratio of content to available area. Density affects readability, touch accuracy, perceived importance, and navigation difficulty. WHITE DIAMOND defines three density ranges rather than prescribing a single density:

### Compact Density

Maximum information density. Used for data tables, dashboards, admin interfaces, and any context where the user needs to scan or compare large amounts of information simultaneously.

Compact density characteristics:
- Smallest spacing increments from the micro scale
- Minimal internal padding on elements
- Narrow line heights relative to font size
- Tight gutters between grid columns
- Reduced border and shadow prominence

### Default Density

Balanced density. Used for most interfaces: forms, content pages, settings panels, communication interfaces.

Default density characteristics:
- Standard spacing increments
- Comfortable internal padding
- Standard line heights
- Normal gutters between grid columns
- Standard border and shadow prominence

### Spacious Density

Emphasis on whitespace. Used for marketing pages, presentations, onboarding flows, and any context where perceived quality and breathing room matter more than information density.

Spacious density characteristics:
- Largest spacing increments from the macro scale
- Generous internal padding
- Relaxed line heights
- Wide gutters between grid columns
- Prominent use of whitespace as a structural element

### Density Consistency

A single view must maintain consistent density. Mixing compact and spacious density within the same screen creates spatial dissonance. The density is chosen once per view and applied uniformly. The only exception is nested contexts—a compact data table within a spacious page is acceptable because the table is a self-contained spatial region with its own density rules.

---

## The Grid System

The grid is the invisible structure that organizes space. It is not visible by default—it is scaffolding. The grid provides alignment targets, proportional divisions, and spatial consistency. Without a grid, alignment becomes guesswork.

### Grid Composition

A WHITE DIAMOND grid consists of:

- **Columns** — Vertical divisions of available width. The number of columns varies by viewport size (12 columns on desktop, 8 on tablet, 4 on phone).
- **Gutters** — The space between columns. Gutters are constant within a view but may vary between views.
- **Margins** — The space between the outermost columns and the viewport edge. Margins provide breathing room at the screen edges.
- **Rows** — Horizontal divisions (implied by vertical rhythm, not explicit lines). Rows are defined by the spacing sequence.

### Grid Properties

WHITE DIAMOND grids are:

- **Consistent** — The same column count, gutter width, and margin width apply throughout a single view. Changing these mid-view breaks spatial rhythm.
- **Flexible** — Columns can span multiple grid units. A card might span 4 columns; a full-width section might span all 12. The grid accommodates varying content widths while maintaining alignment.
- **Aligning** — Elements snap to grid line positions. An element that begins at column 3 starts exactly at the grid line for column 3—not 2 pixels to the left, not 1 pixel to the right.
- **Proportional** — Grid divisions create harmonic relationships. A 12-column grid produces natural proportions: 3:9, 4:8, 5:7, 6:6. These proportions are visually balanced without being symmetrical.

### Grid and Content

The grid serves content, not the reverse. Content determines where grid usage is beneficial. Not every element must align to the grid—decorative elements, background patterns, and artistic compositions may exist outside the grid. But all functional, structural elements must respect the grid.

---

## Alignment

Alignment creates order from chaos. When elements align, they communicate relationship. Misalignment communicates disorder or error. WHITE DIAMOND treats alignment as a structural property, not an aesthetic choice.

### Edge Alignment

Edge alignment positions elements along a common edge. This is the most common alignment type and the most powerful for creating visual order.

- **Left alignment** — The default for text, lists, and left-to-right reading contexts. Left edges of all elements in a group align to the same vertical line.
- **Right alignment** — For numerical data, timestamps, and secondary content. Right edges align to the same vertical line, creating a clean column of aligned values.
- **Top alignment** — For elements in horizontal layouts where height varies. Top edges align, allowing heights to vary naturally.
- **Bottom alignment** — For elements in horizontal layouts where visual weight should be anchored to a common baseline.

### Center Alignment

Center alignment positions elements along a common center line. It creates balance and emphasis but reduces scannability. Center alignment is appropriate for:

- Headings and titles (when they should dominate)
- Empty states (when the message should be central)
- Featured content (when prominence matters more than scanability)
- Navigation (for simple, limited-choice menus)

Center alignment is inappropriate for:
- Lists (breaks left-edge scanning)
- Forms (breaks field-label alignment)
- Data tables (breaks column alignment)

### Optical Alignment

Mathematical alignment and visual alignment are not always identical. A circle centered in a square appears to be slightly above center. A triangle aligned to the top of a rectangle appears to float upward. Optical alignment corrects for these perceptual effects, adjusting position by small amounts to achieve visual correctness rather than mathematical correctness.

WHITE DIAMOND uses optical alignment when:
- Shapes with different visual weights are adjacent
- Icons are paired with text of different sizes
- Decorative elements interact with structural elements

---

## Proportion

Proportion creates visual harmony. When sizes, spacing, and relationships follow consistent ratios, the interface feels deliberate and unified. When they do not, the interface feels arbitrary and disjointed.

### Spacing Proportion

All spacing values in WHITE DIAMOND are derived from a base unit through a doubling sequence:

```
4 → 8 → 16 → 32 → 64 → 128 → 256
```

Each value is exactly double the previous. This creates consistent visual rhythm and predictable spatial relationships. The sequence is not arbitrary—it is the simplest mathematical progression that produces clear, distinguishable steps without excessive jumps.

### Size Proportion

Element sizes follow consistent ratios relative to a base size:

- **Primary element** — 1x (the reference size)
- **Secondary element** — 0.75x (three-quarters of primary)
- **Tertiary element** — 0.5x (half of primary)
- **Quaternary element** — 0.25x (quarter of primary)

These ratios ensure that size differences are proportional and consistent across all contexts.

### Typography Proportion

Text sizes follow a modular scale. Each step is a consistent multiple of the previous step. This ensures that heading hierarchies are visually distinct and that body text relationships are predictable. See [Typography System](../tokens/typography-system.md) for the complete scale.

### The Golden Ratio

When dividing space into two unequal parts, WHITE DIAMOND prefers proportions close to the golden ratio (approximately 1:1.618). This ratio appears throughout nature and has been used in architecture for millennia. It produces divisions that feel naturally balanced—neither equal nor lopsided.

Common golden ratio applications:
- Main content area to sidebar: approximately 62% to 38%
- Header height to content height: approximately 38% to 62%
- Card image height to card text height: approximately 38% to 62%

### The Rule of Thirds

For compositions that require dynamic balance, WHITE DIAMOND applies the rule of thirds. The viewport (or any rectangular region) is divided into thirds both horizontally and vertically, producing nine equal rectangles and four intersection points. Key elements are placed at:

- Intersection points (strongest visual weight)
- Along third lines (moderate visual weight)
- Within third sections (weakest visual weight)

This creates compositions that are balanced but not static, ordered but not rigid.

---

## Spatial Rules

### The Rule of Containment

Every element exists within a container, even if the container is invisible. This is not optional—it is structural reality. Containers define:

- **Position** — Where the element lives in the infinite plane
- **Boundaries** — Where the element begins and ends
- **Relationship** — What other elements share the same container
- **Behavior** — How the element responds to changes in available space
- **Overflow** — What happens when content exceeds the container

No element should exist in undefined space. An element without a container is an architectural violation—it has no defined position, no defined boundaries, and no defined behavior.

### The Rule of Relationship

Spatial proximity communicates relationship. This is not a design convention—it is a perceptual law. Humans group nearby objects and separate distant objects instinctively.

WHITE DIAMOND defines relationship through spacing:

- **Tight** (4-8px) — Elements are directly related. A label and its input. An icon and its accompanying text. These elements are perceived as a single unit.
- **Normal** (16px) — Elements are in the same group. Form fields within a section. Items in a list. These elements are perceived as members of the same collection.
- **Loose** (32px) — Elements are in the same view. Sections on a page. Cards in a grid. These elements are perceived as parts of the same context.
- **Distant** (64px+) — Elements are in different contexts. A header and a footer. A sidebar and main content. These elements are perceived as structurally distinct.

### The Rule of Hierarchy

Spatial hierarchy communicates importance. The most important element should be the most spatially prominent—larger, more surrounded by space, more centrally positioned, more contrasted against its background.

Hierarchy is communicated through:
- **Size** — Larger elements feel more important
- **Spacing** — More surrounding space feels more important
- **Position** — Top-center feels more important than bottom-right
- **Contrast** — Higher contrast elements feel more important

Hierarchy is not decoration. It is information architecture expressed through geometry.

### The Rule of Boundaries

Every spatial region has boundaries. Boundaries define where one thing ends and another begins. Without boundaries, spatial regions are undefined—users cannot determine what belongs together, what is interactive, or where to focus.

Boundaries can be:
- **Explicit** — Visible borders or backgrounds. Used when hard separation is needed.
- **Implicit** — Defined by spacing and alignment. Used when soft grouping is sufficient.
- **Soft** — Gradual transitions between regions. Used when blending is appropriate.
- **Hard** — Sharp transitions between regions. Used when clear division is required.

The choice of boundary type communicates the nature of the spatial relationship. See [Object Boundaries](object-boundaries.md) for the complete boundary system.

---

## See Also

- [Object Boundaries](object-boundaries.md) — How objects define their limits in space
- [Geometric Rules](geometric-rules.md) — Specific constraints that enforce geometric consistency
- [Space Behavior](../space-physics/space-behavior.md) — How space reacts to objects within it
- [Grid System](../layout/grid-system.md) — Grid implementation details
- [Spacing System](../tokens/spacing-system.md) — Spacing token values and their relationships
