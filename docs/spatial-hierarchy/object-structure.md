# Object Structure

## Why This Matters

Objects are the fundamental units of interfaces. Without understanding how objects are structured, designers cannot create consistent, predictable interfaces. Object structure defines what an object is, what it contains, and how it relates to other objects.

## What Is an Object?

In WHITE DIAMOND, an object is any discrete element that exists in the interface. Objects include:
- **Interactive elements** — Buttons, inputs, links
- **Content elements** — Text blocks, images, videos
- **Container elements** — Cards, panels, modals
- **Structural elements** — Headers, footers, sidebars

Every object has the same structural properties, regardless of type.

## Object Anatomy

### Core Properties

Every object has these fundamental properties:

**Bounds**
- Position (x, y)
- Size (width, height)
- Margins (space outside)
- Padding (space inside)

**Appearance**
- Background (color, gradient, image)
- Border (style, width, color)
- Shadow (offset, blur, spread, color)
- Opacity (transparency level)

**Content**
- Primary content (what the object displays)
- Secondary content (supporting information)
- Iconography (visual symbols)
- Typography (text content)

**State**
- Default state (normal appearance)
- Hover state (cursor over)
- Active state (being interacted with)
- Disabled state (not available)
- Loading state (processing)
- Error state (problem occurred)

### Relationship Properties

Objects also have properties that define relationships:

**Spatial Relationships**
- Parent object (what contains this object)
- Child objects (what this object contains)
- Sibling objects (objects at the same level)
- Adjacent objects (objects nearby)

**Hierarchical Relationships**
- Importance level (primary, secondary, tertiary)
- Depth level (front, middle, back)
- Temporal relationship (before, during, after)

## Object Rules

### Rule 1: Every Object Has Clear Boundaries

No object should exist without defined boundaries. Boundaries can be:
- **Visible** — Borders, backgrounds, shadows
- **Implicit** — Spacing, alignment, proximity
- **Minimum** — Touch/click target sizes

Objects without boundaries are invisible to users.

### Rule 2: Every Object Has a Single Purpose

Each object should do one thing well. A button should trigger an action. A card should contain related content. A modal should focus attention.

Multi-purpose objects confuse users about what action to take.

### Rule 3: Every Object Has Consistent Behavior

Similar objects must behave similarly. All buttons should respond to clicks the same way. All inputs should respond to typing the same way. All cards should expand/collapse the same way.

Inconsistent behavior breaks user expectations.

### Rule 4: Every Object Communicates Its State

Users must always know what state an object is in. State changes must be visible through:
- Color changes
- Size changes
- Position changes
- Content changes
- Motion changes

Hidden states create confusion.

### Rule 5: Every Object Has Appropriate Depth

Objects exist at different depths. Foreground objects (active, focused) should be visually closer than background objects (inactive, contextual). Depth is communicated through:
- Size (larger feels closer)
- Shadow (more shadow feels elevated)
- Position (higher on screen feels closer)
- Focus (focused objects feel foreground)

Flat objects lose spatial meaning.

## Object Patterns

### The Card Pattern

Cards are containers that group related content. Card structure:

```
┌─────────────────────┐
│ Header (optional)   │
├─────────────────────┤
│ Primary Content     │
├─────────────────────┤
│ Secondary Content   │
├─────────────────────┤
│ Actions (optional)  │
└─────────────────────┘
```

Cards communicate grouping through boundaries.

### The Input Pattern

Inputs capture user data. Input structure:

```
┌─────────────────────┐
│ Label               │
├─────────────────────┤
│ ┌─────────────────┐ │
│ │ Value           │ │
│ └─────────────────┘ │
├─────────────────────┤
│ Helper Text (opt.)  │
└─────────────────────┘
```

Inputs communicate purpose through structure.

### The Action Pattern

Actions trigger behaviors. Action structure:

```
┌─────────────────────┐
│ Icon (optional)     │
├─────────────────────┤
│ Label               │
├─────────────────────┤
│ State Feedback      │
└─────────────────────┘
```

Actions communicate affordance through structure.

## See Also

- [Appearance Sequence](appearance-sequence.md) — How objects emerge
- [Depth Perception](depth-perception.md) — How objects communicate depth
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Space Behavior](../space-physics/space-behavior.md) — How space interacts with objects
