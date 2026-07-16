# Geometric Rules

## Why This Matters

Geometric rules transform abstract spatial concepts into concrete, testable guidelines. Without specific rules, designers and developers must make arbitrary decisions, leading to inconsistency. Two people solving the same layout problem will produce incompatible solutions. Users will sense the inconsistency. The interface will feel like a collection of unrelated pieces rather than a unified architecture.

WHITE DIAMOND rejects this outcome. Every geometric decision is governed by rules. These rules are not suggestions—they are constraints. They are derived from the core principles of the system and must be followed without exception.

---

## Fundamental Rules

### Rule 1: All Space Is Aligned

No element should exist at an arbitrary position. Every element must align to one of the following:

- A grid line (the nearest column or row boundary)
- Another element's edge (left, right, top, or bottom)
- A consistent spacing value (a multiple of the base unit)
- A mathematical center point (the exact center of a container or viewport)

Alignment creates order. Random positioning creates chaos. The human visual system groups aligned objects automatically—alignment is not an aesthetic preference, it is a perceptual law.

**Why this rule exists:** Without alignment, the eye has no anchor. Every element becomes an independent entity with no relationship to its neighbors. The interface loses coherence. With alignment, the eye follows edges and centers effortlessly, discovering relationships and hierarchies without conscious effort.

### Rule 2: All Spacing Is Proportional

Spacing values must relate to each other through consistent ratios. WHITE DIAMOND uses a doubling sequence:

```
4 → 8 → 16 → 32 → 64 → 128 → 256
```

Each value is exactly double the previous. This produces clear, distinguishable steps without excessive jumps. The ratio between any two adjacent values is 2:1. The ratio between any two values separated by one step is 4:1.

**Why this rule exists:** Proportional spacing creates visual rhythm. The eye can predict the next spacing value before seeing it. This predictability makes the interface feel deliberate and unified. Arbitrary spacing values (4, 7, 13, 21, 35) create visual noise—the eye cannot find a pattern, so it perceives disorder.

### Rule 3: All Sizes Are Constrained

No element should grow without constraint. Every element must have:

- **A maximum width** — Prevents unreadable line lengths. Text lines longer than approximately 75 characters become difficult to read. Content containers must enforce maximum widths.
- **A minimum width** — Prevents unusable sizes. A button narrower than its label is broken. A card narrower than its content is unusable. Every element must define the smallest size at which it remains functional.
- **A preferred width** — The element's natural size, determined by its content or its design specification.
- **A flexible width** — How the element responds to available space. Does it expand to fill? Does it maintain a fixed width? Does it grow to a maximum and then stop?

**Why this rule exists:** Unconstrained growth breaks layouts. A text container that expands to the full viewport width produces lines so long they are unreadable. A sidebar that grows to accommodate its content pushes main content off-screen. Constraints prevent these failures.

### Rule 4: All Boundaries Are Intentional

Every boundary must serve a purpose:

- **Separation** — Keeping unrelated elements apart
- **Grouping** — Keeping related elements together
- **Emphasis** — Making important elements stand out
- **Structure** — Creating visual hierarchy

A boundary without purpose is visual noise. If removing a boundary does not change the user's understanding of the interface, the boundary should not exist. See [Object Boundaries](object-boundaries.md) for the complete boundary system.

**Why this rule exists:** Every unnecessary boundary adds cognitive load. The user must process it, interpret it, and assign meaning to it. If it has no meaning, that processing is wasted. Unnecessary borders, shadows, backgrounds, and gaps degrade the interface incrementally—one at a time they are harmless, but collectively they create visual static.

### Rule 5: All Overflow Is Handled

Content will exceed its boundaries. This is not a possibility—it is a certainty. Every element must define what happens when:

- **Text is too long** — Ellipsis (truncation with "…"), wrap (flow to next line), or scroll (overflow region becomes scrollable)
- **Images are too large** — Scale (resize to fit), crop (clip to boundary), or overflow (extend beyond boundary with scroll)
- **Containers are too small** — Scroll (make overflow region scrollable), collapse (hide overflow content), or expand (grow to accommodate content)
- **Data is too complex** — Paginate (divide into pages), virtualize (render only visible items), or truncate (show summary with "view more")

**Why this rule exists:** Unhandled overflow is broken layout. Content that extends beyond its boundary without a defined behavior creates overlapping text, clipped images, or layout shifts. These are not minor aesthetic issues—they are usability failures. The user cannot read, interact with, or understand content that is improperly displayed.

---

## Proportional Rules

### The Rule of Thirds

Divide any rectangular space into thirds both horizontally and vertically. This produces nine equal rectangles and four intersection points. Key elements should be placed at:

- **Intersection points** — Strongest visual weight. The eye is drawn to these positions. Use for primary actions, key messages, and focal points.
- **Along third lines** — Moderate visual weight. Use for secondary elements, supporting content, and structural divisions.
- **Within third sections** — Weakest visual weight. Use for background content, supporting details, and non-essential information.

**Why this rule exists:** The rule of thirds creates compositions that are balanced but not static. Perfect center placement feels static and predictable. Off-center placement along third lines creates visual tension and interest while maintaining balance. The four intersection points are natural focal positions where the eye rests comfortably.

### The Rule of Golden Ratio

When dividing space into two unequal parts, prefer proportions close to the golden ratio (approximately 1:1.618). The golden ratio is derived from the Fibonacci sequence and appears throughout nature—in spiral shells, leaf arrangements, and facial proportions.

Common golden ratio applications:

- **Main content to sidebar** — 61.8% to 38.2%. The main content area is approximately 1.618 times wider than the sidebar.
- **Header to content** — 38.2% to 61.8%. The header is approximately 0.618 times the height of the content area.
- **Card image to card text** — 38.2% to 61.8%. The image occupies approximately 38.2% of the card height; the text occupies the remainder.

**Why this rule exists:** The golden ratio produces divisions that feel naturally balanced. Neither side dominates. Neither side is neglected. The proportion is neither equal (which feels static) nor extreme (which feels lopsided). It occupies the perceptual middle ground where visual harmony lives.

### The Rule of Harmonic Spacing

Spacing values should be mathematically related. The doubling sequence (4, 8, 16, 32, 64) is harmonic because each value is a multiple of the base unit and each step is a consistent ratio.

Harmonic spacing produces visual rhythm. The eye perceives regularity and responds with a sense of order. Non-harmonic spacing (4, 7, 13, 21, 35) produces visual noise—the eye cannot find a pattern, so it perceives disorder.

**Why this rule exists:** The human visual system is pattern-seeking. Regular spacing is perceived as order; irregular spacing is perceived as chaos. Harmonic spacing satisfies the visual system's demand for pattern, creating a sense of calm and coherence.

---

## Alignment Rules

### Edge Alignment

Elements sharing an edge are perceived as related. The shared edge creates an implicit boundary—a line that connects the elements visually.

- **Left alignment** — The default for text, lists, and left-to-right reading contexts. Left edges of all elements in a group align to the same vertical line. This creates a strong left edge that the eye can scan efficiently.
- **Right alignment** — For numerical data, timestamps, and secondary content. Right edges align to the same vertical line, creating a clean column of aligned values. Right alignment is appropriate for tabular data where decimal alignment matters.
- **Top alignment** — For elements in horizontal layouts where height varies. Top edges align, allowing heights to vary naturally. This creates a clean top edge while accommodating content of different lengths.
- **Bottom alignment** — For elements in horizontal layouts where visual weight should be anchored to a common baseline. Bottom alignment is appropriate for buttons of different widths, tags of different lengths, or cards of different heights.

### Center Alignment

Center alignment positions elements along a common center line. It creates balance and emphasis but reduces scannability. Center alignment is limited to:

- **Headings** — When the heading should dominate the view
- **Empty states** — When the message should be central and prominent
- **Featured content** — When prominence matters more than scanability
- **Navigation** — For simple, limited-choice menus (3-5 items)

Center alignment is inappropriate for:
- **Lists** — Breaks left-edge scanning. The eye must re-center for each item.
- **Forms** — Breaks field-label alignment. Labels and fields become disconnected.
- **Data tables** — Breaks column alignment. Values become difficult to compare.

**Why this rule exists:** Center alignment creates symmetry, which the eye perceives as formal and important. But symmetry also breaks scanning patterns. The eye scans left-to-right along a consistent edge; center alignment forces the eye to jump between center points, increasing cognitive load.

### Grid Alignment

All structural elements should align to the nearest grid line. Elements that fall between grid lines should snap to the closest line. This creates consistent visual rhythm across the entire view.

Grid alignment is mandatory for:
- Column boundaries (sidebar, main content, cards)
- Section edges (headers, footers, content areas)
- Navigation items (menu items, tab labels)
- Form layouts (labels, inputs, buttons)

Grid alignment is optional for:
- Decorative elements (backgrounds, patterns)
- Overlays (tooltips, dropdowns)
- Floating elements (fab buttons, back-to-top)

---

## Proportion Rules

### Size Proportion

Element sizes should follow consistent proportions relative to a base size:

- **Primary element** — 1x (the reference size). The most important element in the view.
- **Secondary element** — 0.75x (three-quarters of primary). Supporting elements that complement the primary.
- **Tertiary element** — 0.5x (half of primary). Minor elements that provide detail or context.
- **Quaternary element** — 0.25x (quarter of primary). The smallest elements: icons, badges, indicators.

**Why this rule exists:** Consistent proportions create a sense of scale. The user can judge relative importance by size alone. Without consistent proportions, size becomes arbitrary—the user cannot determine whether a larger element is more important or simply styled differently.

### Spacing Proportion

Spacing around elements should reflect their importance:

- **High importance** — 2x standard spacing. Important elements are isolated by generous whitespace, drawing attention.
- **Normal importance** — 1x standard spacing. Standard elements receive standard treatment.
- **Low importance** — 0.5x standard spacing. Low-importance elements are compressed, de-emphasized.

**Why this rule exists:** Spacing communicates importance. More space means more prominence. Less space means less prominence. Consistent spacing proportions ensure that the importance hierarchy is communicated clearly and consistently across the interface.

### Typography Proportion

Text sizes follow a modular scale. Each step is a consistent multiple of the previous step:

- **Display** — Largest. For hero sections and primary messages.
- **Heading 1** — Major section headings. The structural anchors of the page.
- **Heading 2** — Subsection headings. The divisions within sections.
- **Heading 3** — Minor headings. The subdivisions within subsections.
- **Body** — Regular content. The primary reading text.
- **Caption** — Supporting text. Labels, timestamps, metadata.

**Why this rule exists:** A modular type scale creates visual hierarchy through size alone. The user can determine the importance of text by its size relative to other text on the page. Without a consistent scale, text sizes become arbitrary, and hierarchy becomes ambiguous.

---

## Rule Derivation

All geometric rules derive from the same core principles:

1. **Spatial order** — Elements must be aligned, not arbitrary.
2. **Visual rhythm** — Spacing must be proportional, not random.
3. **Containment** — Sizes must be constrained, not unbounded.
4. **Intentionality** — Boundaries must be purposeful, not decorative.
5. **Graceful degradation** — Overflow must be handled, not ignored.

These principles are not independent—they reinforce each other. Alignment supports rhythm. Rhythm supports containment. Containment supports boundaries. Boundaries support overflow handling. Together, they form a coherent geometric system that produces interfaces that are predictable, navigable, and visually unified.

---

## See Also

- [Space Geometry](space-geometry.md) — The mathematical foundations of digital space
- [Object Boundaries](object-boundaries.md) — How objects define their limits
- [Spacing System](../tokens/spacing-system.md) — Spacing token values and their relationships
- [Grid System](../layout/grid-system.md) — Grid implementation details
- [Typography System](../tokens/typography-system.md) — Typography scale and modular sizing
