# Spatial Model

## Why This Document Exists

Every design system assumes a model of digital space, but few define it explicitly. The spatial model is the foundational metaphor that shapes every decision in the system—how objects exist, how they relate, how they move, and how they communicate. Without a defined spatial model, designers and developers operate from contradictory assumptions, producing interfaces that feel fragmented and incoherent.

WHITE DIAMOND defines its spatial model with absolute precision because every specification in the system derives from it. If the spatial model is wrong, everything built upon it is wrong. If the spatial model is ambiguous, every decision based on it is ambiguous. The spatial model must be clear, consistent, and unambiguous.

---

## The Viewport as Window

The most fundamental concept in the WHITE DIAMOND spatial model is this: **the screen is a window into a vast architectural space that existed before the user arrived and continues after they leave.**

This is not a metaphor. It is a literal description of how the system models space. The screen does not contain the interface—it reveals a portion of a larger spatial reality. The interface exists in its entirety at all times, whether visible or not. The viewport simply determines which portion the user can see at any given moment.

### Why This Distinction Matters

When the screen is treated as a canvas, the mental model is:
- Content is placed on a blank surface
- New content is created when needed
- Content is destroyed when no longer needed
- Space begins at the top-left corner and ends at the bottom-right corner

When the screen is treated as a window, the mental model is:
- Content exists in a pre-existing spatial structure
- Content is positioned within that structure
- Content enters and exits the viewport, never appearing or disappearing
- Space extends infinitely in all directions beyond the viewport

The second model produces interfaces that feel consistent, predictable, and spatially coherent. The first model produces interfaces that feel arbitrary, fragile, and spatially incoherent.

### The Implications of the Window Model

**Content does not begin at the top-left corner.** The viewport shows a portion of a larger spatial reality. Scrolling does not create new content—it reveals existing content that was outside the viewport. This means that the first element the user sees is not "first" in any absolute sense—it is simply the element that happens to fall within the viewport at the current scroll position.

**The user does not create the space.** The space is already there. The user occupies a position within it and can move through it. This is the difference between a whiteboard and a window. A whiteboard is created when you begin drawing and destroyed when you stop. A window is a fixed position through which you observe something larger than yourself.

**Layout is positional, not generative.** You do not generate content into existence. You position content within a pre-existing spatial structure. Every element has coordinates in a continuous space, not just placement on a blank surface. This distinction determines whether layout feels deliberate or arbitrary.

**Persistence is absolute.** Elements outside the viewport continue to exist. They do not disappear when scrolled out of view. They remain in their spatial position, waiting to be revealed. This persistence is what creates spatial memory—the user's mental model of where things are, even when they cannot see them.

---

## The Spatial Properties of Space

WHITE DIAMOND models digital space as having physical properties, analogous to the properties of physical space. These properties are not merely conceptual—they translate directly to design decisions.

### Density

Density describes how much content occupies a given region of space. Dense space feels compressed and information-rich. Sparse space feels open and calm.

**Density communicates importance:** Dense regions signal that the information is compact and important. Sparse regions signal that the information is relaxed and contextual. A data dashboard uses density to communicate information richness; a landing page uses sparsity to communicate focus.

**Density rules:**
- Dense regions use smaller spacing values (4-8px)
- Sparse regions use larger spacing values (32-64px)
- Density transitions must be gradual, never abrupt
- Related elements should share density levels

### Pressure

Pressure is the force that proximity creates between objects. When objects are close together, they exert pressure on each other—this pressure communicates relationship. When objects are far apart, they exert no pressure—this communicates independence.

**Pressure communicates grouping:** High pressure between elements tells users they belong together. Low pressure tells users they are independent. This is not merely a visual effect—it is a spatial force that shapes how users understand the interface.

**Pressure rules:**
- Related elements should have high pressure (close together)
- Unrelated elements should have low pressure (far apart)
- Pressure transitions must be gradual
- Pressure must be consistent within a region

### Gravity

Gravity is the tendency of objects to settle toward structural anchors—navigation, headers, footers, and other permanent elements. Gravity communicates permanence and hierarchy.

**Gravity communicates importance:** Objects with strong gravity feel permanent and structural. Objects with weak gravity feel temporary and contextual. Navigation has strong gravity—it pulls elements toward it. Decorative elements have weak gravity—they float freely.

**Gravity rules:**
- Permanent elements have strong gravity
- Temporary elements have weak gravity
- Gravity direction follows the layout direction (usually downward)
- Gravity strength must be consistent within a hierarchy level

### Temperature

Temperature describes the emotional quality of a spatial region. Warm regions feel active, inviting, and dynamic. Cool regions feel calm, passive, and stable.

**Temperature communicates mood:** Warm temperatures are used for interactive regions—buttons, links, action areas. Cool temperatures are used for content regions—text, images, data. This temperature distinction helps users distinguish interactive from passive content.

**Temperature rules:**
- Interactive regions use warm temperatures
- Content regions use cool temperatures
- Temperature transitions must be gradual
- Temperature must be consistent within a region

---

## The Three-Layer Hierarchy in Spatial Context

The three-layer hierarchy—Physical Boundary → Inner Surface → Content—is not merely a component structure. It is the fundamental anatomy of every object in the spatial model. It defines how objects exist in space, how they relate to each other, and how they communicate their purpose.

### Physical Boundary

The boundary is the spatial definition of an object. It declares where the object exists and where it does not. Without a boundary, the object has no spatial definition—it is indistinguishable from surrounding space.

**Spatial role:** The boundary is the object's contract with space. It says "I exist here, and I do not exist there." This contract is what allows users to identify discrete objects and understand their relationships.

### Inner Surface

The surface is the material expression of the boundary. It communicates what the object is made of, how it feels, and what state it is in. The surface creates the visual ground upon which content rests.

**Spatial role:** The surface is the interface between boundary and content. It provides the padding, background, and visual treatment that separate content from the void. Without a surface, content would touch the boundary directly, creating visual tension.

### Content

Content is the purpose of the object. It is the information, text, imagery, or controls that serve the user's needs. Content exists within the surface, which exists within the boundary.

**Spatial role:** Content is the reason the object exists. The boundary and surface exist to present content clearly and predictably. Without content, the boundary and surface serve no purpose.

---

## Spatial Relationships

Objects in the WHITE DIAMOND spatial model relate to each other through spatial relationships. These relationships are not arbitrary—they follow from the spatial properties and the three-layer hierarchy.

### Containment

One object exists within another. The contained object's boundary is entirely within the container's boundary. Containment communicates hierarchy—the container is structurally above the contained object.

**Containment rules:**
- Child boundaries must not exceed parent boundaries
- Child objects inherit the parent's spatial context
- Containment depth should be limited (maximum 3 levels)
- Containment must be visually clear through borders, backgrounds, or spacing

### Proximity

Objects near each other are related. Objects far apart are independent. Proximity is the primary mechanism for communicating grouping without explicit boundaries.

**Proximity rules:**
- Related elements should be proximate (high pressure)
- Unrelated elements should be distant (low pressure)
- Proximity must be consistent within a group
- Proximity transitions must be gradual

### Alignment

Objects sharing edges are aligned. Alignment creates implicit boundaries that the eye follows automatically. Alignment is the invisible structure that gives order to spatial relationships.

**Alignment rules:**
- Objects should align to grid lines or other objects
- Alignment edges should be consistent within a region
- Misalignment must be intentional and justified
- Alignment creates implicit grouping

### Separation

Objects separated by significant distance or explicit boundaries are independent. Separation communicates that objects have no relationship—they exist in the same space but serve different purposes.

**Separation rules:**
- Unrelated regions should be separated by explicit boundaries
- Separation must be clear through borders, backgrounds, or spacing
- Separation transitions must be gradual
- Separation must be consistent within a view

---

## Spatial Continuity

Spatial continuity is the principle that objects exist in continuous space and move through continuous paths. Objects do not teleport. Objects do not materialize from nothing. Objects do not dematerialize into nothing. Objects enter from outside the viewport and exit to outside the viewport.

### Why Continuity Matters

Continuity creates the illusion that the interface is a physical space. When objects move continuously, users develop spatial memory—they can predict where objects will appear and where they will go. When objects teleport, spatial memory breaks and users become disoriented.

### Continuity Rules

**Entrance:** Objects enter from outside the viewport, moving from an invisible position to a visible position. The direction of entrance communicates the object's spatial origin.

**Exit:** Objects exit to outside the viewport, moving from a visible position to an invisible position. The direction of exit communicates the object's spatial destination.

**Translation:** Objects move between positions within the viewport. Translation communicates spatial relationships—objects that move closer are becoming related; objects that move apart are becoming independent.

**Persistence:** Objects outside the viewport continue to exist. They do not disappear when scrolled out of view. They remain in their spatial position, waiting to be revealed.

---

## The Rectangular Constraint

All objects in the WHITE DIAMOND spatial model are rectangular. Circles, ovals, organic shapes, and freeform geometry are forbidden. This constraint is not arbitrary—it follows from the spatial model itself.

### Why Only Rectangles

Rectangles are the geometry of construction. They are what humans build with—walls, floors, ceilings, doors, windows. They are the geometry of order, predictability, and alignment.

Circles and organic shapes are the geometry of nature. They are born, grow, and decay. They are irregular, unpredictable, and alive. Interfaces are not alive. Interfaces are constructions—built by humans, governed by logic, operating within constraints.

**Rectangles communicate:**
- Clear, measurable boundaries
- Predictable spatial relationships
- Aligned vertices that connect to grid systems
- Parallel sides that create consistent width and height

**Circles communicate:**
- No clear boundaries
- No measurable spatial relationships
- No alignment with rectangular grids
- No beginning or end

WHITE DIAMOND chooses rectangles because it chooses construction over nature, order over chaos, and predictability over surprise.

---

## How the Spatial Model Shapes Decisions

The spatial model is not abstract theory—it is the foundation that shapes every design decision:

| Decision | Spatial Model Implication |
|----------|--------------------------|
| Border or no border? | Borders are existential—without them, objects don't exist |
| Where to place an element? | Position within continuous space, not arbitrary placement |
| How to animate? | Objects move through continuous space, never teleport |
| How to group elements? | Proximity and containment, not decoration |
| How to show hierarchy? | Depth, shadow, and spatial layering |
| How to handle overflow? | Clip, scroll, or manage—content never escapes its boundary |

---

## See Also

- [Core Principles](core-principles.md) — The axioms from which the spatial model derives
- [Design Philosophy](design-philosophy.md) — The reasoning behind the spatial model
- [Architectural Thinking](architectural-thinking.md) — How to apply the spatial model
- [Screen as Window](../space-physics/screen-as-window.md) — The viewport metaphor in detail
- [Space Behavior](../space-physics/space-behavior.md) — How space responds to objects
- [Object Existence](../space-physics/object-existence.md) — What it means for objects to exist in space
- [Object Structure](../spatial-hierarchy/object-structure.md) — How objects are structured within the spatial model
