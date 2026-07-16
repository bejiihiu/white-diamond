# Object Boundaries

## Why This Matters

Without clear boundaries, users cannot determine what is interactive, what belongs together, or where one element ends and another begins. Boundaries are the fundamental unit of spatial understanding. They are not decoration. They are not style. They are the structural lines that define the architecture of the interface.

In WHITE DIAMOND, an object without a boundary does not exist. This is not hyperbole—it is a design axiom. If there is no defined edge, there is no defined object. If there is no defined object, there is no defined interaction. If there is no defined interaction, the interface has failed.

Boundaries are everything.

---

## What Are Object Boundaries?

Object boundaries are the limits within which an element exists. Every element has boundaries, whether they are visible or not. A button has a boundary—the rectangular region where it can be clicked. A card has a boundary—the rectangular region that groups its content. A section has a boundary—the rectangular region that separates it from other sections.

Boundaries define:

- **Extent** — How much space the element occupies in the infinite plane
- **Relationship** — What other elements are nearby and how they relate
- **Interaction** — What areas respond to user input (click, tap, hover, focus)
- **Overflow** — What happens when content exceeds the boundary
- **Containment** — What elements exist within this boundary

### The Three-Layer Hierarchy

Every WHITE DIAMOND object follows a three-layer hierarchy. This hierarchy is immutable—it cannot be rearranged, simplified, or ignored:

1. **Physical Boundary** — The outermost edge. The absolute limit of the object's spatial extent. Nothing exists beyond this line. The physical boundary defines the object's size, position, and relationship to other objects. It is always rectangular.

2. **Inner Surface** — The region inside the physical boundary but outside the content area. This is where padding lives. The inner surface creates breathing room between the boundary and the content. It communicates density and importance.

3. **Content** — The actual material inside the object: text, images, icons, inputs, or other nested objects. Content exists within the inner surface, which exists within the physical boundary.

This hierarchy is non-negotiable. Every object, regardless of type or complexity, must conform to it. A button has a physical boundary (its clickable rectangle), an inner surface (its padding), and content (its label and icon). A card has a physical boundary (its border or background), an inner surface (its padding), and content (its text, images, and nested elements). A page section has a physical boundary (its spatial extent), an inner surface (its internal spacing), and content (its child elements).

---

## Types of Boundaries

### Explicit Boundaries

Explicit boundaries are visible, unmistakable, and unambiguous. The user can see exactly where the object begins and ends. Explicit boundaries are for interactive elements and elements that require hard separation.

#### Borders

Borders are lines drawn along the physical boundary of an object. They are the most direct expression of a boundary.

- **Solid borders** — Continuous lines. Communicate hard, permanent separation. Best for: cards, inputs, containers, data tables.
- **Dashed borders** — Interrupted lines. Communicate provisional or conditional boundaries. Best for: drop zones, optional regions, drag targets.
- **Double borders** — Two parallel lines. Communicate emphasis or distinct separation. Best for: active states, selected regions, highlighted areas.

Border width communicates the strength of the boundary:
- 1px — Default separation (most elements)
- 2px — Emphasized separation (active states, focused inputs)
- 3px — Strong separation (prominent containers, selected items)

Borders are always rectangular. They follow the physical boundary exactly. Curved borders, rounded corners, and organic shapes are forbidden in WHITE DIAMOND. The rectangle is the fundamental shape of architectural space.

#### Outlines

Outlines are lines drawn outside the physical boundary. They do not affect layout—they do not push other elements away. Outlines are for temporary indicators: focus rings, selection highlights, hover states.

- **Focus outlines** — Indicate keyboard focus. Must be visible and high-contrast. Minimum 2px width.
- **Selection outlines** — Indicate selected state. May be a different color than focus.
- **Hover outlines** — Indicate pointer proximity. May be subtle or prominent.

Outlines must not overlap with adjacent elements. If an outline would be obscured, offset it from the boundary or use an alternative indicator.

#### Shadows

Shadows are depth-based boundaries. They communicate elevation—the idea that the object exists on a layer above the surface behind it.

- **Subtle shadows** — Slight elevation. Used for: cards, panels, containers that are part of the default layer.
- **Medium shadows** — Moderate elevation. Used for: dropdowns, popovers, floating elements.
- **Strong shadows** — High elevation. Used for: modals, dialogs, elements that demand attention.

Shadows must be consistent within a view. If one card uses a 4px shadow, all cards must use a 4px shadow. Inconsistent shadows create spatial confusion—the user cannot determine which elements are elevated and which are flat.

#### Backgrounds

Backgrounds are filled areas that define regions. They communicate grouping by enclosing related elements in a shared visual field.

- **Solid backgrounds** — Single color fills. Communicate hard grouping. Best for: sections, panels, cards.
- **Tinted backgrounds** — Light color fills. Communicate soft grouping. Best for: alternating rows, highlighted sections.
- **Patterned backgrounds** — Textured fills. Communicate distinct regions. Best for: decorative areas, non-interactive zones.

Backgrounds must not conflict with adjacent backgrounds. If two backgrounds meet, the boundary between them must be clear—either through color contrast, a border, or sufficient spacing.

### Implicit Boundaries

Implicit boundaries are not drawn—they are inferred from spatial relationships. The user perceives the boundary without seeing it. Implicit boundaries are for content grouping where explicit borders would be visually heavy.

#### Whitespace

Whitespace creates separation without drawing lines. The gap between elements communicates that they are distinct, even though no border separates them.

- **Intra-element whitespace (padding)** — Space inside the physical boundary. Communicates the relationship between the boundary and its content.
- **Inter-element whitespace (margin/gap)** — Space between physical boundaries. Communicates the relationship between adjacent objects.

Whitespace is not empty—it is structural. A gap of 16px between two cards is not wasted space. It is a boundary—a region of separation that defines where one card ends and another begins.

#### Alignment

Alignment creates implicit boundaries through shared edges. When elements align to the same vertical line, they share a boundary. When they do not, they are perceived as separate.

- **Left-aligned elements** share an implicit left boundary
- **Centered elements** share an implicit center boundary
- **Grid-aligned elements** share implicit column boundaries

Alignment boundaries are invisible but powerful. They create order and rhythm without visual weight.

#### Typography

Text styles create implicit boundaries. A heading creates a boundary above and below it. A paragraph creates a boundary around its text. A label creates a boundary above its input.

Typography boundaries are:
- **Heading boundaries** — Separation between sections and subsections
- **Paragraph boundaries** — Separation between ideas
- **Label boundaries** — Separation between field identifiers and field values

### Soft Boundaries

Soft boundaries have gradual transitions. There is no sharp line where one region ends and another begins. Instead, the boundary is a gradient—a smooth transition from one state to another.

#### Gradients

Gradients transition color smoothly across a region. They communicate blending—two regions that merge rather than collide.

- **Linear gradients** — Transition along a straight line. Best for: background fading, atmospheric effects.
- **Radial gradients** — Transition from a center point. Best for: spotlight effects, focal emphasis.

Gradients are rarely used as primary boundaries in WHITE DIAMOND. They are atmospheric, not structural.

#### Opacity

Opacity transitions create boundaries through transparency. A semi-transparent overlay creates a boundary between the content below and the content above.

- **Semi-transparent overlays** — Communicate layering and depth
- **Dimmed backgrounds** — Communicate that background content is inactive
- **Faded content** — Communicates that content is unavailable or secondary

---

## Boundary Hierarchy

When multiple boundary types coexist in the same region, hierarchy determines which boundary dominates. The hierarchy is:

1. **Explicit borders** — The strongest boundary. Always dominant.
2. **Background color changes** — Strong grouping signal. Subordinate to borders.
3. **Spacing/whitespace** — Soft grouping signal. Subordinate to backgrounds.
4. **Alignment** — Weakest grouping signal. Subordinate to spacing.

When boundaries conflict, the higher-priority boundary wins. If a card has a border (explicit) and the cards are also spaced apart (whitespace), the border defines the card's boundary—the spacing defines the gap between cards. These are complementary, not conflicting.

When boundaries are contradictory—a border suggests grouping but spacing suggests separation—one must be removed. Contradictory boundaries confuse users about what belongs together.

---

## Boundary Rules

### Rule 1: Interactive Elements Must Have Explicit Boundaries

Users must know exactly where they can click, tap, or focus. This is non-negotiable. Implicit boundaries are insufficient for interactive elements.

- Buttons must have visible clickable areas (border, background, or outline)
- Inputs must have visible input areas (border, background, or underline)
- Links must have visible text areas (underline, color change, or background)
- Touch targets must have minimum sizes (44x44 points minimum)

An interactive element without an explicit boundary is a usability failure. The user cannot determine where the interaction region begins or ends.

### Rule 2: Similar Elements Must Have Similar Boundaries

If one card has a border, all cards must have borders. If one section uses a background color, all sections must use background color. Inconsistent boundaries confuse users about what belongs together.

This rule applies within a view. Different views may use different boundary styles for the same element type, but within a single view, consistency is mandatory.

### Rule 3: Boundary Type Must Match Boundary Purpose

| Purpose | Boundary Type |
|---|---|
| Hard separation between unrelated elements | Border or background |
| Soft grouping of related elements | Whitespace |
| Temporary highlight or focus | Outline |
| Layering and depth | Shadow |
| Blending or transition | Gradient or opacity |

Using the wrong boundary type for the purpose creates spatial confusion. A hard border around loosely related elements feels oppressive. Whitespace around tightly coupled elements feels undefined.

### Rule 4: All Interactive Boundaries Must Meet Minimum Sizes

Touch targets: Minimum 44x44 points. Click targets: Minimum 24x24 pixels. Focus indicators: Minimum 2px outline. Text input height: Minimum 40 points.

These minimums ensure usability for all users, including those with motor impairments, low vision, or touch interfaces.

### Rule 5: Boundaries Must Be Intentional

Every boundary must serve a purpose: separation, grouping, emphasis, or structure. Boundaries without purpose are visual noise. If removing a boundary does not change the user's understanding of the interface, the boundary should not exist.

---

## Boundary Interactions

### Overlapping Boundaries

When boundaries overlap—when one object's physical boundary extends into another object's physical boundary—clarity is lost. The user cannot determine which object owns the contested space.

WHITE DIAMOND handles overlaps through:

- **Z-index** — Layered boundaries have a clear stacking order. The object with the higher z-index owns the contested space. The object with the lower z-index is occluded.
- **Containment** — Overlapping elements are clearly contained within a parent. The parent boundary is authoritative; child boundaries are subordinate.
- **Disclosure** — Overlapping elements are clearly temporary. Tooltips, dropdowns, and modals overlap intentionally, and their temporariness is communicated through animation or visual treatment.
- **Dismissal** — Overlapping elements can be easily dismissed. The user can remove the overlapping element to restore the original spatial arrangement.

### Nested Boundaries

Objects can contain other objects. A card contains a title, a body, and an action bar. A form contains sections. A section contains fields. Each contained object has its own physical boundary, nested within the parent's boundary.

Nesting rules:
- Child boundaries must not exceed parent boundaries. If content overflows, it must be clipped, scrolled, or otherwise managed.
- Child boundaries are subordinate to parent boundaries. The parent defines the spatial context; children operate within it.
- Nesting depth should be limited. Deep nesting (more than 3 levels) creates spatial complexity that is difficult to navigate.

### Conflicting Boundaries

When boundaries contradict each other—when one boundary type suggests grouping but another suggests separation—users are confused. WHITE DIAMOND prevents conflicts through:

- **Hierarchy** — One boundary type dominates according to the boundary hierarchy.
- **Consistency** — Similar contexts use similar boundary types.
- **Convention** — Follow platform conventions for well-understood boundary types (e.g., card borders, input outlines, focus rings).

---

## See Also

- [Space Geometry](space-geometry.md) — The mathematical foundations of digital space
- [Geometric Rules](geometric-rules.md) — Constraints that enforce geometric consistency
- [Space Behavior](../space-physics/space-behavior.md) — How space reacts to objects and their boundaries
- [Object Existence](../space-physics/object-existence.md) — What it means for an object to exist
- [Design Tokens](../tokens/design-tokens.md) — Boundary-related tokens
