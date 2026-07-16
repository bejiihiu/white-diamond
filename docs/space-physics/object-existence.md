# Object Existence

## Why This Matters

Objects do not exist in isolation—they exist in spatial relationships with other objects. Understanding how objects exist in space ensures that interfaces feel coherent and navigable.

## The Principle of Spatial Existence

Every object exists at a specific location, with specific boundaries, in relation to other objects. This existence is defined by:

### Position

Where the object is located:
- **Absolute position** — Fixed location in the viewport
- **Relative position** — Position relative to other objects
- **Flow position** — Position within the document flow
- **Grid position** — Position within a grid system

### Extent

How much space the object occupies:
- **Size** — Width and height
- **Margins** — Space outside the object
- **Padding** — Space inside the object
- **Boundaries** — Where the object ends

### Relationship

How the object connects to other objects:
- **Parent** — What contains this object
- **Children** — What this object contains
- **Siblings** — Objects at the same level
- **Neighbors** — Objects nearby

### State

What condition the object is in:
- **Default** — Normal, resting state
- **Active** — Being interacted with
- **Disabled** — Not available
- **Loading** — Processing
- **Error** — Problem occurred

## Object Lifecycle

### Creation

Objects come into existence through:
- **Page load** — Objects present on initial render
- **User action** — Objects created by user interaction
- **Data change** — Objects created by data updates
- **System event** — Objects created by system events

### Persistence

Objects persist through:
- **View changes** — Objects remain across navigation
- **State changes** — Objects remain across state updates
- **Session persistence** — Objects remain across sessions (if saved)

### Destruction

Objects cease to exist through:
- **Explicit removal** — User or system removes the object
- **Navigation** — Object is no longer in the current view
- **State change** — Object is no longer relevant
- **Session end** — Object is no longer saved

## Object Rules

### Rule 1: Objects Have Clear Ownership

Every object must have a clear owner:
- **Parent owns children** — Parent controls child existence
- **Component owns elements** — Component controls element existence
- **View owns content** — View controls content existence
- **User owns data** — User controls data existence

Objects without ownership cannot be managed.

### Rule 2: Objects Have Consistent Lifecycle

Similar objects must have similar lifecycles:
- **Creation timing** — When similar objects appear
- **Persistence rules** — How long similar objects last
- **Destruction rules** — When similar objects disappear
- **State transitions** — How similar objects change state

Inconsistent lifecycles confuse users about object permanence.

### Rule 3: Objects Communicate State Changes

When an object changes state, the change must be visible:
- **Visual changes** — Color, size, position changes
- **Motion changes** — Animations and transitions
- **Content changes** — Text, icon, value changes
- **Boundary changes** — Border, shadow, opacity changes

Hidden state changes create confusion.

### Rule 4: Objects Respond to Context

Objects must adapt to their context:
- **Screen size** — Objects scale to available space
- **Content** — Objects accommodate their content
- **User preference** — Objects respect user settings
- **Accessibility** — Objects work with assistive technology

Rigid objects break in different contexts.

### Rule 5: Objects Have Memory

Objects should remember their state:
- **Form inputs** — Remember entered values
- **Scroll position** — Remember where the user was
- **Expanded state** — Remember what was open
- **Selection state** — Remember what was selected

Memoryless objects frustrate users.

## Object Patterns

### The Persistent Object

Objects that exist across views:
- **Navigation** — Always accessible
- **Header** — Always visible
- **Footer** — Always present
- **Sidebar** — Always available

### The Transient Object

Objects that exist temporarily:
- **Tooltips** — Appear on hover, disappear on leave
- **Notifications** — Appear for a duration, then disappear
- **Toasts** — Appear briefly, then disappear
- **Modals** — Appear for interaction, then disappear

### The Reactive Object

Objects that respond to data:
- **Lists** — Update when data changes
- **Tables** — Update when data changes
- **Charts** — Update when data changes
- **Forms** — Update when data changes

### The Interactive Object

Objects that respond to user input:
- **Buttons** — Respond to clicks
- **Inputs** — Respond to typing
- **Sliders** — Respond to dragging
- **Toggles** — Respond to toggling

## See Also

- [Space Behavior](space-behavior.md) — How space responds to objects
- [Screen as Window](screen-as-window.md) — The viewport metaphor
- [Object Structure](../spatial-hierarchy/object-structure.md) — How objects are structured
- [Animation Principles](../motion/animation-principles.md) — How motion communicates existence
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
