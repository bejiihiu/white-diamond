# Object Structure

## Why This Matters

Objects are the fundamental units of interfaces. Without understanding how objects are structured, designers cannot create consistent, predictable interfaces. Object structure defines what an object is, what it contains, and how it relates to other objects. In the WHITE DIAMOND system, every object follows the same immutable structural laws—these laws are not suggestions but architectural requirements that ensure spatial coherence across the entire interface.

## What Is an Object?

In WHITE DIAMOND, an object is any discrete element that exists in the interface. Objects include:
- **Interactive elements** — Buttons, inputs, links
- **Content elements** — Text blocks, images, videos
- **Container elements** — Cards, panels, modals
- **Structural elements** — Headers, footers, sidebars

Every object has the same structural properties, regardless of type. This uniformity is not arbitrary—it ensures that every object can be understood, manipulated, and predicted using the same mental model. When structure varies without reason, cognitive load increases and spatial understanding breaks down.

## Object Anatomy

### The Three-Layer Hierarchy

Every object in WHITE DIAMOND consists of exactly three layers, arranged from outermost to innermost. This hierarchy is immutable—it cannot be rearranged, inverted, or simplified.

```
┌─────────────────────────────────┐
│         Physical Boundary       │  ← Layer 1: Defines existence
│  ┌───────────────────────────┐  │
│  │       Inner Surface       │  │  ← Layer 2: Defines appearance
│  │  ┌─────────────────────┐  │  │
│  │  │      Content        │  │  │  ← Layer 3: Defines purpose
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

#### Layer 1: Physical Boundary

The boundary is the outermost layer of any object. It defines the object's existence in space—without a boundary, an object does not exist. The boundary is not merely a visual border; it is the architectural edge that separates the object from the infinite space surrounding it.

**Properties:**
- **Position (x, y)** — Where the object exists in 2D space
- **Size (width, height)** — How much space the object occupies
- **Margin** — The buffer zone between this object and adjacent objects
- **Border** — The visible edge that defines the boundary

**Why this matters:** The boundary establishes spatial relationships. When two objects share a boundary, they are architecturally connected. When they do not, they are spatially independent. The boundary is the contract that says "this object ends here, and something else begins."

**Architectural principle:** Boundaries are never implicit. Even when a border is not visually rendered, the boundary exists as a defined rectangle. Implicit boundaries—those suggested only by proximity or alignment—are architecturally unstable and create ambiguous spatial relationships.

#### Layer 2: Inner Surface

The surface is the middle layer that defines the object's appearance and materiality. It is the architectural skin that communicates what the object is made of, how it feels, and what state it is in.

**Properties:**
- **Background** — The fill color, gradient, or pattern
- **Border style** — The visual treatment of the boundary edge
- **Shadow** — The elevation signal (see [Depth Perception](depth-perception.md))
- **Opacity** — The transparency level
- **State indicators** — Visual changes for hover, active, disabled states

**Why this matters:** The surface is the interface between boundary and content. It communicates materiality—a solid surface feels permanent, a transparent surface feels ephemeral, a blurred surface feels distant. The surface also communicates state: a button's surface changes when pressed, signaling that the boundary remains but the material has shifted.

**Architectural principle:** The surface never exists without a boundary. A surface without an edge is formless and spatially meaningless. Similarly, content never touches the boundary directly—content always rests on a surface, and that surface always rests within a boundary.

#### Layer 3: Content

Content is the innermost layer—the reason the object exists. It is the information, text, imagery, or controls that serve the user's purpose.

**Properties:**
- **Primary content** — The main information or action
- **Secondary content** — Supporting information or context
- **Iconography** — Visual symbols that communicate meaning
- **Typography** — Text content and formatting

**Why this matters:** Content is the purpose, but it cannot exist without the structure that contains it. Content placed directly on a boundary (without a surface) lacks context and appears unanchored. Content that fills the entire surface (without padding) creates visual tension. Content needs the architectural framework of boundary and surface to be legible and meaningful.

**Architectural principle:** Content never escapes its container. Text never bleeds beyond the boundary. Images never overflow without explicit clipping. Content is always contained within the surface, which is always contained within the boundary. This containment is not a limitation—it is the structure that makes content readable.

### Layer Relationships

The three layers have strict hierarchical relationships:

```
Boundary → Surface → Content
    ↑           ↑         ↑
    │           │         │
    ▼           ▼         ▼
  Defines     Defines   Serves
  existence   appearance  purpose
```

**Boundary dominates Surface:** The boundary constrains the surface. No matter how the surface appears, it cannot extend beyond the boundary. The boundary is the law; the surface is the expression.

**Surface dominates Content:** The surface constrains the content. Content exists within the surface, and the surface determines how content is presented—a dark surface presents light content, a padded surface provides breathing room.

**Content justifies the entire structure:** Without content, the surface and boundary serve no purpose. Every object exists to deliver content, and the structural layers exist to present that content clearly and predictably.

### Layer Properties

Each layer has specific properties that define its architectural role:

**Boundary Properties:**
- **Weight** — The visual prominence of the boundary edge. Heavy weight means the boundary is clearly defined; light weight means the boundary is subtle but still present.
- **Density** — How solid the boundary feels. A dense boundary (thick, dark) feels permanent; a light boundary (thin, light) feels provisional.

**Surface Properties:**
- **Opacity** — The transparency level. Fully opaque surfaces feel solid and permanent; semi-transparent surfaces feel temporary and layered.
- **Texture** — The material quality. Smooth surfaces feel clean and modern; rough surfaces feel tactile and organic (but must remain rectangular—see [Geometry](../geometry/object-boundaries.md)).
- **Elevation** — The shadow depth that communicates how far the surface is from the background (see [Depth Perception](depth-perception.md)).

**Content Properties:**
- **Density** — How packed the content is. Dense content feels information-rich; sparse content feels focused and calm.
- **Weight** — The visual prominence. Heavy content (bold, large) draws attention; light content (regular, small) recedes.

## Object Rules

### Rule 1: Every Object Has Clear Boundaries

No object should exist without defined boundaries. Boundaries can be:
- **Visible** — Borders, backgrounds, shadows
- **Implicit** — Spacing, alignment, proximity
- **Minimum** — Touch/click target sizes

Objects without boundaries are invisible to users.

**Why:** A boundary is the architectural declaration of existence. Without it, an object is merely content floating in space—uncontained, undefined, and unpredictable. Users cannot interact with what they cannot locate.

### Rule 2: Every Object Has a Single Purpose

Each object should do one thing well. A button should trigger an action. A card should contain related content. A modal should focus attention.

Multi-purpose objects confuse users about what action to take.

**Why:** Architectural clarity requires functional clarity. A wall that is simultaneously structural and decorative serves two purposes, but it is still a wall. An object that tries to be a button and a card simultaneously is architecturally contradictory—it cannot fulfill either purpose well.

### Rule 3: Every Object Has Consistent Behavior

Similar objects must behave similarly. All buttons should respond to clicks the same way. All inputs should respond to typing the same way. All cards should expand/collapse the same way.

Inconsistent behavior breaks user expectations.

**Why:** Consistency is the architectural standardization that allows users to build mental models. When every object follows the same structural laws, users can predict behavior without learning new patterns. Inconsistency is architectural chaos.

### Rule 4: Every Object Communicates Its State

Users must always know what state an object is in. State changes must be visible through:
- Color changes
- Size changes
- Position changes
- Content changes
- Motion changes

Hidden states create confusion.

**Why:** State is the temporal dimension of object structure. An object exists in space (boundary), has appearance (surface), serves a purpose (content), and occupies time (state). Without visible state, users cannot understand whether an object is available, active, or inactive.

### Rule 5: Every Object Has Appropriate Depth

Objects exist at different depths. Foreground objects (active, focused) should be visually closer than background objects (inactive, contextual). Depth is communicated through:
- Size (larger feels closer)
- Shadow (more shadow feels elevated)
- Position (higher on screen feels closer)
- Focus (focused objects feel foreground)

Flat objects lose spatial meaning.

**Why:** Depth is the third dimension of spatial structure. Without it, all objects exist on the same plane, making it impossible to establish hierarchy. Depth creates the architectural layering that allows users to understand what is in front of what, what is active, and what is merely background.

## Object Patterns

### The Card Pattern

Cards are containers that group related content. Card structure:

```
┌─────────────────────────────┐
│ Boundary                    │
│ ┌─────────────────────────┐ │
│ │ Surface                 │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ Header (optional)   │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Primary Content     │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Secondary Content   │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Actions (optional)  │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Architectural logic:** Cards communicate grouping through shared boundaries. The boundary defines the card's extent; the surface provides visual materiality; the content arranges information within. The card is an architectural unit—remove any layer, and the card ceases to exist.

### The Input Pattern

Inputs capture user data. Input structure:

```
┌─────────────────────────────┐
│ Boundary                    │
│ ┌─────────────────────────┐ │
│ │ Surface                 │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ Label               │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ ┌─────────────────┐ │ │ │
│ │ │ │ Value           │ │ │ │
│ │ │ └─────────────────┘ │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Helper Text (opt.)  │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Architectural logic:** Inputs communicate purpose through structure. The label identifies the input's purpose; the value field provides the interaction surface; helper text provides context. The boundary contains the entire input assembly, ensuring it exists as a single architectural unit.

### The Action Pattern

Actions trigger behaviors. Action structure:

```
┌─────────────────────────────┐
│ Boundary                    │
│ ┌─────────────────────────┐ │
│ │ Surface                 │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ Icon (optional)     │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Label               │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ State Feedback      │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Architectural logic:** Actions communicate affordance through structure. The icon provides visual recognition; the label provides semantic meaning; state feedback communicates availability. The boundary ensures the action is a discrete, clickable target.

### The Modal Pattern

Modals focus attention by capturing the entire viewport. Modal structure:

```
┌─────────────────────────────┐
│ Boundary (full viewport)    │
│ ┌─────────────────────────┐ │
│ │ Surface (dimmed)        │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ Content             │ │ │
│ │ │ (focused, centered) │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Architectural logic:** Modals are architectural intrusions—they expand the boundary to fill the viewport, dim the surface to de-emphasize everything else, and focus content to a single point. The modal's boundary is absolute: nothing exists outside it during its lifetime.

### The Navigation Pattern

Navigation provides spatial orientation. Navigation structure:

```
┌─────────────────────────────┐
│ Boundary (viewport edge)    │
│ ┌─────────────────────────┐ │
│ │ Surface                 │ │
│ │ ┌─────────────────────┐ │ │
│ │ │ Logo/Brand          │ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Navigation Items    │ │ │
│ │ │ ├─────────────────┤ │ │
│ │ │ │ Item 1          │ │ │
│ │ │ │ Item 2          │ │ │
│ │ │ │ Item 3          │ │ │
│ │ │ └─────────────────┘ │ │
│ │ ├─────────────────────┤ │ │
│ │ │ Actions (optional)  │ │ │
│ │ └─────────────────────┘ │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Architectural logic:** Navigation provides the spatial framework for the entire interface. Its boundary is fixed to the viewport edge, providing a constant reference point. The surface materializes the navigation structure, and the content provides orientation and wayfinding.

## How Structure Communicates Purpose

The three-layer hierarchy is not merely a visual convention—it is a communication system. Users unconsciously read object structure to understand purpose:

**Heavy boundary + light surface + dense content = Information container**
A card with a strong border but subtle background communicates "this is a container for related information."

**Light boundary + heavy surface + sparse content = Interactive element**
A button with a subtle border but prominent background communicates "this is an action I can take."

**Heavy boundary + heavy surface + minimal content = Structural element**
A header with a strong border and strong background communicates "this is a permanent framework element."

**No boundary + no surface + raw content = Ambient content**
Text without a container communicates "this is content that belongs to the surrounding space."

Each structural pattern creates a different architectural meaning, and users learn to read these meanings to navigate interfaces efficiently.

## See Also

- [Appearance Sequence](appearance-sequence.md) — How objects emerge and disappear
- [Depth Perception](depth-perception.md) — How objects communicate depth
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Space Behavior](../space-physics/space-behavior.md) — How space interacts with objects
- [Border System](../tokens/border-system.md) — Border definitions for structure
- [Token System](../tokens/token-system.md) — Design token architecture
