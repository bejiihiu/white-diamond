# Appearance Sequence

## Why This Matters

How objects appear and disappear communicates their relationship to other objects. Without consistent appearance sequences, users cannot predict where content comes from or where it goes, breaking spatial understanding. The appearance sequence is the temporal dimension of spatial architecture—it tells users where objects exist when they are not visible, and how they move through space when they become visible.

In the WHITE DIAMOND system, appearance and disappearance are not arbitrary animations—they are architectural events that follow strict spatial laws. Every object enters from somewhere and exits to somewhere. Nothing appears from nothing. Nothing vanishes into nothing.

## The Principle of Spatial Continuity

Every object must appear from somewhere and disappear somewhere. Objects do not materialize from nothing—they transition from one spatial state to another. This continuity tells users:

- **Where the object came from (origin)** — Objects have spatial origins that communicate their relationship to other objects
- **How it relates to other objects (proximity)** — Objects that appear near other objects are spatially related
- **What will happen next (anticipation)** — Predictable sequences allow users to anticipate what will happen
- **Where it went when dismissed (memory)** — Objects that exit predictably create spatial memory that persists after they disappear

**Why this matters:** Spatial continuity is the architectural law that ensures objects exist in a coherent space. Without it, objects would pop in and out of existence randomly, destroying the user's mental model of the interface. Continuity creates the illusion that the interface is a physical space where objects have permanent locations, even when they are not visible.

**Architectural principle:** The viewport is a window into an infinite space. Objects exist in this space whether they are visible or not. When an object exits the viewport, it still exists somewhere—it has merely moved out of view. When an object enters the viewport, it is not being created—it is moving into view from an existing location.

## Entrance Types

### Entrance from Edge

Objects enter from outside the viewport. This communicates:
- The object comes from an adjacent space
- The object is in a specific spatial direction
- The object relates to content in that direction

**Use cases:**
- Navigation drawers entering from the left
- Notifications entering from the top
- Panels entering from the right
- Action sheets entering from the bottom

**Architectural logic:** Entrance from edge is the most explicit form of spatial continuity. The object's origin is clearly defined—it comes from the left, right, top, or bottom. This creates a strong spatial relationship: content on the left is adjacent to navigation drawers; content at the top is adjacent to notifications.

**Timing specification:**
- Duration: 300-400ms (medium speed)
- Easing: Ease-out (decelerate as arriving)
- Distance: Full viewport width/height
- Stagger: Sequential for multiple items

### Entrance from Origin

Objects appear from the element that triggered them. This communicates:
- The object is spawned by the trigger element
- The object belongs to the trigger element
- The object will return to the trigger element when dismissed

**Use cases:**
- Dropdowns appearing from buttons
- Tooltips appearing from icons
- Popovers appearing from interactive elements
- Menus appearing from menu triggers

**Architectural logic:** Entrance from origin creates parent-child relationships. The trigger element is the parent; the appearing object is the child. The child originates from the parent, belongs to the parent, and returns to the parent. This relationship is communicated through spatial continuity—the object appears to be born from the trigger.

**Timing specification:**
- Duration: 200-300ms (fast-medium)
- Easing: Ease-out (decelerate as arriving)
- Distance: 0-50px (depending on trigger size)
- Stagger: Simultaneous for dropdown items

### Entrance from Behind

Objects emerge from behind other objects. This communicates:
- The object was always there, just hidden
- The object exists in a deeper layer
- The object is revealed, not created

**Use cases:**
- Content revealed by scrolling
- Layers revealed by interaction
- Details revealed by expansion
- Backgrounds revealed by movement

**Architectural logic:** Entrance from behind is the most subtle form of spatial continuity. The object does not appear to be created or spawned—it appears to be revealed. This communicates permanence: the object existed all along, it was merely hidden behind another object. This creates a sense of depth and layering in the interface.

**Timing specification:**
- Duration: 400-500ms (medium-slow)
- Easing: Ease-in-out (smooth transition)
- Distance: 0px (revealed in place)
- Stagger: Sequential for list items

### Entrance from Within

Objects emerge from within other objects. This communicates:
- The object is part of the parent object
- The object was contained within the parent
- The object is a child of the parent

**Use cases:**
- Content expanding within a card
- Options appearing within a menu
- Details appearing within a row
- Nested content appearing within a container

**Architectural logic:** Entrance from within is the most intimate form of spatial continuity. The object does not come from outside the parent—it comes from within it. This communicates containment: the object was stored inside the parent, and now it is being extracted. This creates a strong sense of belonging and hierarchy.

**Timing specification:**
- Duration: 200-300ms (fast-medium)
- Easing: Ease-out (decelerate as arriving)
- Distance: 0px (expanded in place)
- Stagger: Sequential for nested items

## Exit Types

### Exit to Edge

Objects leave toward the viewport edge. This communicates:
- The object is returning to adjacent space
- The object remains accessible from that direction
- The object has a persistent location

**Architectural logic:** Exit to edge is the mirror of entrance from edge. The object returns to the direction it came from, maintaining spatial consistency. This tells users the object still exists—it has merely moved out of view. The object can be recalled by triggering the same action that caused it to appear.

**Timing specification:**
- Duration: 300-400ms (medium speed)
- Easing: Ease-in (accelerate as departing)
- Distance: Full viewport width/height
- Stagger: Reverse order of entrance

### Exit to Origin

Objects return to the element that spawned them. This communicates:
- The object belongs to the trigger element
- The object can be re-triggered from the same element
- The object is temporary and cyclical

**Architectural logic:** Exit to origin completes the parent-child cycle. The object appears from the trigger, exists temporarily, and returns to the trigger. This creates a sense of closure—the object has completed its lifecycle and returned to its source. The trigger remains the permanent anchor.

**Timing specification:**
- Duration: 200-300ms (fast-medium)
- Easing: Ease-in (accelerate as departing)
- Distance: 0-50px (depending on trigger size)
- Stagger: Simultaneous for dropdown items

### Exit to Behind

Objects disappear behind other objects. This communicates:
- The object still exists, just hidden
- The object can be revealed again
- The object is part of a layer system

**Architectural logic:** Exit to behind is the mirror of entrance from behind. The object does not disappear—it becomes hidden. This communicates permanence: the object is still there, it is merely obscured. Users can reveal it again by reversing the action that caused it to hide.

**Timing specification:**
- Duration: 400-500ms (medium-slow)
- Easing: Ease-in-out (smooth transition)
- Distance: 0px (hidden in place)
- Stagger: Reverse order of entrance

### Exit to Within

Objects shrink back into their parent. This communicates:
- The object was part of the parent
- The object is returning to containment
- The object is rejoining its source

**Architectural logic:** Exit to within is the mirror of entrance from within. The object returns to its container, completing the containment cycle. This tells users the object is being stored again—it has returned to its source and can be extracted again when needed.

**Timing specification:**
- Duration: 200-300ms (fast-medium)
- Easing: Ease-in (accelerate as departing)
- Distance: 0px (collapsed in place)
- Stagger: Reverse order of entrance

## Timing Rules

### Duration

Appearance duration should communicate relationship:
- **Fast (100-200ms)** — Small, simple appearances (tooltips, hover effects)
- **Medium (200-400ms)** — Medium appearances (dropdowns, popovers)
- **Slow (400-600ms)** — Large appearances (modals, panels, pages)

**Why:** Duration communicates weight. Small objects feel light and appear quickly. Large objects feel heavy and appear slowly. This physical analogy helps users understand the relative importance and permanence of objects.

### Easing

Appearance easing should communicate physics:
- **Ease-out** — Objects decelerate as they arrive (natural stopping)
- **Ease-in** — Objects accelerate as they leave (natural starting)
- **Ease-in-out** — Objects accelerate and decelerate (smooth transitions)
- **Linear** — Objects move at constant speed (mechanical motion)

**Why:** Easing communicates physics. In the real world, objects accelerate when starting and decelerate when stopping. Ease-in mimics this natural behavior, creating a sense of physical reality. Linear motion feels artificial and mechanical—it communicates that the object is not bound by physical laws.

### Stagger

Multiple objects appearing together should stagger:
- **Sequential** — One at a time, in order
- **Grouped** — Related items together, then next group
- **Simultaneous** — All at once (only for very few items)

**Why:** Staggering creates visual rhythm and scanability. When objects appear simultaneously, the eye cannot track them individually. When objects appear sequentially, the eye follows a path, creating a narrative. This narrative communicates hierarchy and order.

## Sequence Rules

### Rule 1: Every Entrance Has a Matching Exit

If an object enters from the left, it should exit to the left. If it appears from a button, it should return to the button. Inconsistent sequences break spatial memory.

**Why:** Spatial memory depends on consistency. If an object enters from the left but exits to the right, the user's mental model of the space is violated. The object appears to teleport, breaking the illusion of a physical space. Matching entrances and exits create the predictable spatial relationships that allow users to build mental models.

### Rule 2: Entrance Speed Matches Exit Speed

Objects should take the same time to appear as to disappear. Asymmetric timing feels wrong—objects that appear quickly but disappear slowly feel stuck; objects that appear slowly but disappear quickly feel jarring.

**Why:** Asymmetric timing communicates inconsistency. If an object appears quickly, it suggests the object is light and easily moved. If it disappears slowly, it suggests the object is heavy and difficult to move. This contradiction breaks the physical model that the interface is trying to establish.

### Rule 3: Distance Matches Duration

Objects traveling longer distances should take more time. An object crossing the entire screen should take longer than an object moving a few pixels. This maintains perceived speed.

**Why:** Perceived speed is the relationship between distance and time. If an object travels a long distance in a short time, it appears to be moving very fast. If it travels a short distance in a long time, it appears to be moving very slow. Maintaining consistent perceived speed creates the illusion of physical objects moving through space.

### Rule 4: Related Objects Use Related Sequences

Objects that are related should use similar or complementary sequences. Objects in the same group should use the same type. Objects in different groups can use different types to distinguish them.

**Why:** Related sequences communicate related purpose. If two objects use the same entrance type, users unconsciously understand that they are related. If they use different types, users understand they are distinct. This spatial coding helps users categorize objects without explicit labels.

## Spatial Memory

Spatial memory is the user's mental model of where objects exist when they are not visible. This memory persists across interactions and creates the illusion that the interface is a physical space.

**How spatial memory works:**
1. An object appears from a specific direction (e.g., left)
2. The user sees the object and notes its origin
3. The object disappears back to its origin (e.g., left)
4. The user remembers the object came from the left
5. When the user triggers the object again, they expect it to come from the left
6. If it does, spatial memory is reinforced; if it doesn't, spatial memory is broken

**Why this matters:** Spatial memory is the cognitive architecture that allows users to navigate interfaces efficiently. Without it, users would have to re-learn the location of every object every time they interact with it. With it, users can predict where objects will appear and where they will go, reducing cognitive load and increasing efficiency.

## Exceptions and Edge Cases

### Simultaneous Appearances

When multiple objects appear simultaneously, they should follow these rules:
- **Maximum 3 simultaneous objects** — More than 3 creates visual chaos
- **Group by type** — Related objects appear together; unrelated objects stagger
- **Prioritize by importance** — The most important object appears first, even if staggered

### Interrupted Sequences

When an appearance sequence is interrupted (e.g., user clicks away before animation completes):
- **Complete the current motion** — The object should finish its current trajectory
- **Then reverse** — The object should immediately begin its exit sequence
- **Maintain timing** — The exit should take the same time as the entrance

### Rapid Successions

When objects appear and disappear rapidly (e.g., user clicking multiple buttons):
- **Debounce** — Prevent rapid toggling within 200ms
- **Queue** — If a new sequence starts before the current one completes, queue it
- **Cancel** — If the queued sequence is the same type as the current one, cancel the current and start the new one

### Accessibility Considerations

For users with reduced motion preferences:
- **Replace motion with opacity** — Objects enter/exit viewport via opacity change instead of sliding
- **Maintain timing** — The same duration applies, but without spatial movement
- **Preserve spatial memory** — The origin and destination concepts are communicated through other means (e.g., position changes without animation)

## See Also

- [Animation Principles](../motion/animation-principles.md) — How motion should feel
- [Movement Physics](../motion/movement-physics.md) — Physical laws of motion
- [Depth Perception](depth-perception.md) — How objects communicate depth
- [Object Structure](object-structure.md) — How objects are structured
- [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
- [Spatial Continuity](../space-physics/spatial-continuity.md) — How space preserves object permanence
