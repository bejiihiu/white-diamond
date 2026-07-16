# Appearance Sequence

## Why This Matters

How objects appear and disappear communicates their relationship to other objects. Without consistent appearance sequences, users cannot predict where content comes from or where it goes, breaking spatial understanding.

## The Principle of Spatial Continuity

Every object must appear from somewhere and disappear somewhere. Objects do not materialize from nothing—they transition from one spatial state to another. This continuity tells users:

- Where the object came from (origin)
- How it relates to other objects (proximity)
- What will happen next (anticipation)
- Where it went when dismissed (memory)

## Appearance Types

### Entrance from Edge

Objects enter from outside the viewport. This communicates:
- The object comes from an adjacent space
- The object is in a specific spatial direction
- The object relates to content in that direction

Use cases:
- Navigation drawers entering from the left
- Notifications entering from the top
- Panels entering from the right
- Action sheets entering from the bottom

### Entrance from Origin

Objects appear from the element that triggered them. This communicates:
- The object is spawned by the trigger element
- The object belongs to the trigger element
- The object will return to the trigger element when dismissed

Use cases:
- Dropdowns appearing from buttons
- Tooltips appearing from icons
- Popovers appearing from interactive elements
- Menus appearing from menu triggers

### Entrance from Behind

Objects emerge from behind other objects. This communicates:
- The object was always there, just hidden
- The object exists in a deeper layer
- The object is revealed, not created

Use cases:
- Content revealed by scrolling
- Layers revealed by interaction
- Details revealed by expansion
- Backgrounds revealed by movement

### Entrance from Within

Objects emerge from within other objects. This communicates:
- The object is part of the parent object
- The object was contained within the parent
- The object is a child of the parent

Use cases:
- Content expanding within a card
- Options appearing within a menu
- Details appearing within a row
- Nested content appearing within a container

## Exit Types

### Exit to Edge

Objects leave toward the viewport edge. This communicates:
- The object is returning to adjacent space
- The object remains accessible from that direction
- The object has a persistent location

### Exit to Origin

Objects return to the element that spawned them. This communicates:
- The object belongs to the trigger element
- The object can be re-triggered from the same element
- The object is temporary and cyclical

### Exit to Behind

Objects disappear behind other objects. This communicates:
- The object still exists, just hidden
- The object can be revealed again
- The object is part of a layer system

### Exit to Within

Objects shrink back into their parent. This communicates:
- The object was part of the parent
- The object is returning to containment
- The object is rejoining its source

## Timing Rules

### Duration

Appearance duration should communicate relationship:
- **Fast (100-200ms)** — Small, simple appearances (tooltips, hover effects)
- **Medium (200-400ms)** — Medium appearances (dropdowns, popovers)
- **Slow (400-600ms)** — Large appearances (modals, panels, pages)

### Easing

Appearance easing should communicate physics:
- **Ease-out** — Objects decelerate as they arrive (natural stopping)
- **Ease-in** — Objects accelerate as they leave (natural starting)
- **Ease-in-out** — Objects accelerate and decelerate (smooth transitions)
- **Linear** — Objects move at constant speed (mechanical motion)

### Stagger

Multiple objects appearing together should stagger:
- **Sequential** — One at a time, in order
- **Grouped** — Related items together, then next group
- **Simultaneous** — All at once (only for very few items)

Staggering creates visual rhythm and scanability.

## Sequence Rules

### Rule 1: Every Entrance Has a Matching Exit

If an object enters from the left, it should exit to the left. If it appears from a button, it should return to the button. Inconsistent sequences break spatial memory.

### Rule 2: Entrance Speed Matches Exit Speed

Objects should take the same time to appear as to disappear. Asymmetric timing feels wrong—objects that appear quickly but disappear slowly feel stuck; objects that appear slowly but disappear quickly feel jarring.

### Rule 3: Distance Matches Duration

Objects traveling longer distances should take more time. An object crossing the entire screen should take longer than an object moving a few pixels. This maintains perceived speed.

### Rule 4: Related Objects Use Related Sequences

Objects that are related should use similar or complementary sequences. Objects in the same group should use the same type. Objects in different groups can use different types to distinguish them.

## See Also

- [Animation Principles](../motion/animation-principles.md) — How motion should feel
- [Movement Physics](../motion/movement-physics.md) — Physical laws of motion
- [Depth Perception](depth-perception.md) — How objects communicate depth
- [Object Structure](object-structure.md) — How objects are structured
- [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
