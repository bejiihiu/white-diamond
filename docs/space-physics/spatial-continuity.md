# Spatial Continuity

## Why This Matters

Spatial continuity is the principle that objects exist in continuous space and move through continuous paths. Objects do not teleport. Objects do not materialize from nothing. Objects do not dematerialize into nothing. Objects enter from outside the viewport and exit to outside the viewport. This continuity is what creates the illusion that the interface is a physical space where objects have permanent locations, even when they are not visible.

Without spatial continuity, users cannot predict where objects will appear or where they will go. The interface becomes a collection of random states rather than a coherent spatial reality. Users lose their mental model of the space, and navigation becomes disorienting.

---

## The Principle of Continuous Space

In WHITE DIAMOND, the interface is a window into a vast architectural space. This space is continuous—it does not have gaps, holes, or discontinuities. Objects exist in this space at all times, whether visible or not. When an object exits the viewport, it still exists somewhere—it has merely moved out of view.

### Why Continuity Matters

**Spatial memory:** When objects move continuously, users develop spatial memory—they can predict where objects will appear and where they will go. This memory persists across interactions and creates the illusion that the interface is a physical space.

**Predictability:** When objects follow continuous paths, users can anticipate their behavior. Predictability creates control, and control creates confidence.

**Coherence:** When all objects follow the same spatial laws, the interface feels like a unified space rather than a collection of unrelated states.

---

## Continuity Laws

### Law 1: No Teleportation

Objects must not jump from one position to another without moving through continuous space. Teleportation breaks spatial memory and destroys predictability.

**Violation example:** A modal appears instantly in the center of the screen.

**Correct behavior:** A modal slides in from the right side of the viewport, demonstrating that it exists in a specific spatial location.

**Why:** Teleportation implies that space is discontinuous—that objects can exist in one location and instantly exist in another. This contradicts the fundamental principle that the interface is a window into a vast architectural space.

### Law 2: No Materialization

Objects must not appear from nothing. Materialization breaks object permanence and destroys the illusion of continuous space.

**Violation example:** A notification badge appears instantly on a button.

**Correct behavior:** A notification badge scales in from the center of the button, demonstrating that it's approaching from a distance.

**Why:** Materialization implies that space is empty and objects are created within it. This contradicts the principle that the interface is a window into a vast architectural space where objects already exist.

### Law 3: No Dematerialization

Objects must not disappear into nothing. Dematerialization breaks object permanence and destroys the illusion of continuous space.

**Violation example:** A menu disappears instantly when the user clicks outside.

**Correct behavior:** A menu slides back to its origin (the button that spawned it), demonstrating that it returns to its spatial position.

**Why:** Dematerialization implies that space consumes objects—that objects can cease to exist. This contradicts the principle that the interface is a window into a vast architectural space where objects persist.

### Law 4: No Duplication

Objects must not split into multiple copies. Duplication breaks object identity and destroys the illusion of unique architectural constructions.

**Violation example:** A dropdown menu appears to be cloned when opened.

**Correct behavior:** A dropdown menu enters from the button that spawned it, demonstrating that it has a single spatial origin.

**Why:** Duplication implies that objects can be copied infinitely. This contradicts the principle that objects are unique architectural constructions with specific spatial positions.

### Law 5: Continuous Paths

Objects must move through continuous paths when transitioning between positions. No jumping, no fading without movement, no instant repositioning.

**Violation example:** A tab indicator jumps from one tab to another.

**Correct behavior:** A tab indicator slides from one tab to another, demonstrating continuous movement through space.

**Why:** Continuous paths demonstrate that objects exist in physical space and cannot teleport. The path is the evidence of the object's spatial journey.

---

## Entrance Continuity

### Objects Enter from Outside the Viewport

When an object appears, it must enter from outside the viewport. This demonstrates that the object exists in a larger space beyond what the user can currently see.

**Entrance types:**
- **From edge:** Object enters from the viewport boundary (left, right, top, bottom)
- **From origin:** Object enters from the element that triggered it (button → dropdown)
- **From behind:** Object is revealed by scrolling or layer changes
- **From within:** Object expands from within its parent container

**Entrance rules:**
- Direction must be consistent (left navigation always enters from the left)
- Duration must match distance (longer distances take more time)
- Easing must follow physics (ease-out for arrival)

---

## Exit Continuity

### Objects Exit to Outside the Viewport

When an object disappears, it must exit to outside the viewport. This demonstrates that the object continues to exist beyond the viewport.

**Exit types:**
- **To edge:** Object exits toward the viewport boundary (reverse of entrance)
- **To origin:** Object returns to the element that spawned it
- **To behind:** Object is hidden by scrolling or layer changes
- **To within:** Object collapses back into its parent container

**Exit rules:**
- Direction must match entrance (if it entered from the left, it exits to the left)
- Duration must match entrance (same time to appear and disappear)
- Easing must follow physics (ease-in for departure)

---

## Translation Continuity

### Objects Move Through Continuous Paths

When objects move between positions within the viewport, they must move through continuous paths. No jumping, no instant repositioning.

**Translation rules:**
- Path must be continuous (no teleportation)
- Speed must be proportional to distance (longer distances take more time)
- Direction must be consistent (same direction throughout the movement)
- Easing must follow physics (accelerate when starting, decelerate when stopping)

---

## Spatial Memory

Spatial memory is the user's mental model of where objects exist when they are not visible. This memory persists across interactions and creates the illusion that the interface is a physical space.

### How Spatial Memory Works

1. An object appears from a specific direction (e.g., left)
2. The user sees the object and notes its origin
3. The object disappears back to its origin (e.g., left)
4. The user remembers the object came from the left
5. When the user triggers the object again, they expect it to come from the left
6. If it does, spatial memory is reinforced; if it doesn't, spatial memory is broken

### Why Spatial Memory Matters

Spatial memory is the cognitive architecture that allows users to navigate interfaces efficiently. Without it, users would have to re-learn the location of every object every time they interact with it. With it, users can predict where objects will appear and where they will go, reducing cognitive load and increasing efficiency.

---

## Exceptions and Edge Cases

### Reduced Motion

For users with reduced motion preferences:
- Replace spatial movement with opacity change
- Maintain timing (same duration, no movement)
- Preserve spatial memory through other means (position changes without animation)

### Rapid Successions

When objects appear and disappear rapidly:
- Debounce within 200ms
- Queue new sequences
- Cancel same-type queued sequences

### Interrupted Sequences

When an appearance sequence is interrupted:
- Complete the current motion
- Then reverse
- Maintain timing

---

## See Also

- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects enter and exit
- [Animation Principles](../motion/animation-principles.md) — How motion should feel
- [Movement Physics](../motion/movement-physics.md) — Physical laws of motion
- [Screen as Window](screen-as-window.md) — The viewport metaphor
- [Object Existence](object-existence.md) — What it means for objects to exist
- [Core Principles](../philosophy/core-principles.md) — The axioms from which continuity derives
