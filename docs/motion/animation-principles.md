# Animation Principles

## Why This Matters

Animation in WHITE DIAMOND is not decoration—it is the language of spatial physics. Every movement communicates something about the architectural reality of the interface: the mass of objects, the depth of space, the relationships between elements, and the continuity of time. Without consistent animation principles, the interface becomes a collection of arbitrary visual effects rather than a coherent spatial environment.

When animation is purposeful, users develop an intuitive understanding of the interface's physics. They learn that heavy objects move slowly, that elements originate from specific locations, and that motion follows predictable patterns. This understanding creates what we call "spatial memory"—the ability to predict where elements will appear and how they will behave.

## The Purpose of Motion

Motion in WHITE DIAMOND serves one primary function: **to demonstrate space physics**. Every animation must communicate something about the architectural reality of the interface. This is fundamentally different from traditional UI animation, where motion often serves aesthetic or attentional purposes.

### Informational Motion

Motion that communicates spatial information:

- **Spatial relationships** — Where elements come from and go to, establishing their position in three-dimensional space. When a modal slides in from the right, it communicates that the modal exists in a specific location relative to the viewport. This is not arbitrary—it follows the spatial hierarchy defined in [appearance-sequence.md](../spatial-hierarchy/appearance-sequence.md).

- **Cause and effect** — What triggered what, establishing temporal causality. When a button press causes a panel to expand, the animation sequence communicates the causal relationship. The panel doesn't appear instantly—it moves, creating a temporal bridge between cause and effect.

- **State changes** — What changed and how, establishing transformation logic. When a checkbox animates from unchecked to checked, the motion communicates the state transformation. The direction, speed, and easing of this transformation convey information about the nature of the change.

- **Temporal sequences** — What happens in what order, establishing temporal order. When multiple elements animate in sequence, the timing communicates their relationship. Simultaneous animation implies independence; sequential animation implies dependency.

### Functional Motion

Motion that enables interaction:

- **Feedback** — Confirming user actions, establishing the interface's responsiveness. When a button depresses on click, the animation confirms that the interface received the input. This feedback is immediate and physical—it demonstrates that the interface has mass and responds to force.

- **Affordance** — Showing what's interactive, establishing the interface's interactivity. When an element subtly moves on hover, it communicates that the element is interactive. This movement is not decorative—it demonstrates that the element has mass and can be manipulated.

- **Guidance** — Directing attention, establishing the interface's focus. When an element animates into view, it directs the user's attention to a specific location. This animation follows the spatial hierarchy, appearing from outside the viewport rather than materializing from nothing.

- **Continuity** — Connecting related elements, establishing the interface's relationships. When an element moves from one location to another, the animation maintains spatial continuity. The element doesn't teleport—it travels through space, demonstrating the interface's spatial coherence.

### Aesthetic Motion

In WHITE DIAMOND, aesthetic motion is **prohibited**. Motion that exists solely for aesthetic purposes—delight, polish, personality, engagement—is decoration, and decoration distracts from spatial communication. The aesthetic quality of WHITE DIAMOND comes from the coherence of its physics, not from decorative effects.

This does not mean the interface feels cold or mechanical. The coherence of its physics creates a sense of monumentality and architectural solidity that is inherently aesthetic. When every element follows the same physical laws, the interface achieves a visual harmony that is more profound than any decorative effect.

## Animation Principles

### Principle 1: Motion Is Purposeful

Every animation must have a reason. Animation without purpose is decoration, and decoration distracts. Before animating, ask:

- What spatial information does this motion communicate?
- What physical property does this motion demonstrate?
- What temporal relationship does this motion establish?

If the answer is "nothing," don't animate. This principle is absolute—there are no exceptions for "delight" or "polish." The delight comes from the coherence of the physics, not from arbitrary motion.

**Architectural reasoning:** In physical architecture, movement has meaning. A door opening communicates that a space is accessible. A window blinds adjusting communicates that light is being controlled. These movements are purposeful—they communicate something about the architectural reality. WHITE DIAMOND follows the same principle: every movement must communicate something about the interface's spatial reality.

### Principle 2: Motion Is Physical

Motion should follow intuitive physics—not mathematical easing, but physical laws. The interface is a window into a vast architectural space where objects have mass and respond to forces. This physical reality must be consistent across all animations.

- **Inertia** — Objects have mass and resist changes in motion. A heavy object doesn't accelerate instantly—it takes time to build momentum. This demonstrates that the object has mass and exists in a physical space.

- **Momentum** — Moving objects continue moving. When force is applied, objects don't stop instantly when the force ceases—they continue moving and gradually slow down due to friction. This demonstrates that the object exists in a space with physical properties.

- **Friction** — Objects slow down over time. Friction is not a mathematical curve—it's a physical force that demonstrates the interface's spatial properties. High friction creates a sense of solidity; low friction creates a sense of weightlessness.

- **Gravity** — Objects fall when unsupported. Gravity demonstrates the interface's directional reality. Objects fall downward, establishing the interface's vertical orientation and spatial consistency.

**Architectural reasoning:** Physical architecture follows physical laws. Buildings don't float, doors don't teleport, windows don't materialize from nothing. WHITE DIAMOND follows the same principle: the interface obeys physical laws, creating a coherent spatial reality.

### Principle 3: Motion Is Consistent

Similar actions must produce similar motions. This consistency creates learning and predictability—users develop spatial memory and can predict how the interface will behave.

- **Same triggers** — Same input produces same animation. If pressing a button causes a panel to slide in from the right, pressing the same button again should produce the same animation. Inconsistency breaks spatial memory.

- **Same elements** — Same element type animates the same way. All buttons should animate similarly. All panels should animate similarly. This consistency creates a coherent spatial language.

- **Same contexts** — Same context produces same timing. Transitions in the same context should have the same duration and easing. This consistency creates temporal predictability.

- **Same directions** — Same action produces same direction. If navigation moves left-to-right, all navigation should move left-to-right. Directional inconsistency breaks spatial orientation.

**Architectural reasoning:** In physical architecture, similar elements behave similarly. All doors open the same way. All windows let in light the same way. This consistency creates intuitive understanding. WHITE DIAMOND follows the same principle: consistent behavior creates intuitive spatial understanding.

### Principle 4: Motion Is Proportional

Motion magnitude should match importance. This proportionality maintains visual balance and spatial hierarchy.

- **Small changes** — Small, fast animations. Minor state changes should have minimal animation—just enough to communicate the change without drawing unnecessary attention.

- **Medium changes** — Medium, moderate animations. Standard transitions should have moderate animation—enough to communicate the spatial relationship without overwhelming the user.

- **Large changes** — Large, slower animations. Major transitions should have prominent animation—enough to communicate the significant spatial transformation.

**Architectural reasoning:** In physical architecture, scale matters. A small window opening has different visual impact than a large door opening. WHITE DIAMOND follows the same principle: animation scale should match the scale of the change.

### Principle 5: Motion Is Reversible

Every animation must be reversible. Users must be able to:

- **Undo** — Return to previous state. If an animation moves an element to a new location, the user must be able to reverse that movement.

- **Cancel** — Stop an in-progress animation. If a user initiates an action that triggers an animation, they must be able to cancel that action and stop the animation.

- **Skip** — Bypass non-essential animations. While animation is important for spatial communication, users must be able to skip non-essential animations for efficiency.

- **Control** — Adjust animation preferences. Users must be able to control animation speed, reduce motion, or disable non-essential animations.

**Architectural reasoning:** In physical architecture, movement is reversible. Doors can be opened and closed. Windows can be opened and closed. WHITE DIAMOND follows the same principle: all movement must be reversible.

### Principle 6: Motion Is Spatial

All animation must maintain spatial continuity. Objects exist in three-dimensional space and must move through that space continuously—no teleportation, no materialization, no dematerialization.

- **Entrance from outside** — Objects enter from outside the viewport, never appear from nothing. This demonstrates that objects exist in a larger space beyond the viewport.

- **Exit to outside** — Objects exit to outside the viewport, never disappear into nothing. This demonstrates that objects continue to exist beyond the viewport.

- **Continuous paths** — Objects move through continuous paths, never jumping from point A to point B. This demonstrates that objects move through physical space.

- **Object permanence** — Objects maintain their identity during movement. An object that moves from one location to another is the same object—it doesn't split, duplicate, or transform.

**Architectural reasoning:** In physical architecture, objects exist in continuous space. A person walking from room A to room B doesn't teleport—they walk through the doorway. WHITE DIAMOND follows the same principle: objects move through continuous space.

## Animation Types

### Transition

Smooth change from one state to another. Transitions communicate transformation—they show how an element changes from one state to another while maintaining spatial continuity.

- **State transitions** — Button states, hover effects. These transitions communicate interactivity—they show that elements respond to user input by changing state.

- **Layout transitions** — Size, position, opacity changes. These transitions communicate spatial transformation—they show how elements move through space and change their spatial properties.

- **Content transitions** — Text, image, data changes. These transitions communicate content transformation—they show how content changes while maintaining spatial continuity.

- **Navigation transitions** — Page, view, screen changes. These transitions communicate spatial navigation—they show how the user moves through the interface's spatial hierarchy.

### Entrance

Object appearing in the scene. In WHITE DIAMOND, objects never "appear"—they enter from outside the viewport. This demonstrates that objects exist in a larger space beyond the viewport.

- **Slide in** — Movement from off-screen. This is the primary entrance animation—it demonstrates that objects exist in a larger space and move into the viewport from a specific direction.

- **Fade in** — Gradual opacity increase. This demonstrates that objects become visible as they enter the viewport—they don't materialize from nothing.

- **Scale in** — Growth from small to full size. This demonstrates that objects are approaching from a distance—they appear small because they're far away, then grow as they approach.

- **Pop in** — Spring-like appearance. This demonstrates that objects are under spring tension—they overshoot their final position and bounce back, demonstrating elasticity.

### Exit

Object leaving the scene. In WHITE DIAMOND, objects never "disappear"—they exit to outside the viewport. This demonstrates that objects continue to exist beyond the viewport.

- **Slide out** — Movement to off-screen. This is the primary exit animation—it demonstrates that objects leave the viewport and continue existing in a larger space.

- **Fade out** — Gradual opacity decrease. This demonstrates that objects become less visible as they leave the viewport—they don't dematerialize into nothing.

- **Scale out** — Shrink from full to small size. This demonstrates that objects are moving away into the distance—they appear smaller as they move away.

- **Pop out** — Spring-like disappearance. This demonstrates that objects are under spring tension—they overshoot their exit position and bounce back, demonstrating elasticity.

### Emphasis

Drawing attention to an element. In WHITE DIAMOND, emphasis is achieved through spatial hierarchy, not decorative effects.

- **Pulse** — Rhythmic size change. This demonstrates that the element is "alive"—it's under constant force and responding to that force.

- **Bounce** — Elastic movement. This demonstrates that the element is under spring tension—it's being pulled and released.

- **Shake** — Rapid horizontal movement. This demonstrates that the element is under external force—it's being pushed and pulled.

- **Glow** — Radiance increase. This demonstrates that the element is emitting energy—it's active and powerful.

### Feedback

Responding to user input. In WHITE DIAMOND, feedback is immediate and physical—it demonstrates that the interface has mass and responds to force.

- **Press** — Slight size reduction on click. This demonstrates that the element has mass and responds to pressure—it's being pushed down.

- **Release** — Return to original size. This demonstrates that the element has elasticity—it returns to its original shape after being released.

- **Drag** — Follow cursor movement. This demonstrates that the element has mass and can be moved—it responds to the user's force.

- **Drop** — Snap to destination. This demonstrates that the element has momentum—it continues moving after being released and snaps to its destination.

## Timing

### Duration

Animation duration should match the change. Duration communicates the scale of the transformation—larger transformations take longer.

- **Micro (50-100ms)** — Instant feedback (hover, press). These durations communicate immediate response—the interface is highly responsive and reacts instantly to user input.

- **Fast (100-200ms)** — Quick responses (tooltips, toggles). These durations communicate quick transformation—the interface is efficient and responsive.

- **Normal (200-400ms)** — Standard transitions (menus, panels). These durations communicate standard transformation—the interface follows predictable physical laws.

- **Slow (400-600ms)** — Major transitions (page changes, modals). These durations communicate significant transformation—the interface is making a major spatial change.

### Easing

Animation easing should feel natural—following physical laws, not mathematical curves.

- **Ease-out** — Decelerating (arriving, stopping). This demonstrates that objects have inertia—they don't stop instantly, they gradually slow down.

- **Ease-in** — Accelerating (departing, starting). This demonstrates that objects have mass—they don't start instantly, they gradually build momentum.

- **Ease-in-out** — Smooth (continuous motion). This demonstrates that objects are in continuous motion—they accelerate and decelerate smoothly.

- **Spring** — Bouncy (playful, responsive). This demonstrates that objects are under spring tension—they overshoot and bounce back, demonstrating elasticity.

### Stagger

Multiple animations should be coordinated to communicate spatial relationships.

- **Sequential** — One after another. This demonstrates dependency—the second animation depends on the first.

- **Overlapping** — Slightly overlapping. This demonstrates partial independence—the animations are related but not dependent.

- **Simultaneous** — All at once. This demonstrates independence—the animations are unrelated and happen simultaneously.

- **Grouped** — Related items together. This demonstrates grouping—related items animate together, demonstrating their relationship.

## See Also

- [Prohibited Animations](prohibited-animations.md) — What motion should never do
- [Movement Physics](movement-physics.md) — Physical laws of motion
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Depth Perception](../spatial-hierarchy/depth-perception.md) — How objects communicate depth
- [Control Feeling](../psychology/control-feeling.md) — The sense of agency
- [Space Behavior](../space-physics/space-behavior.md) — How space responds to objects
- [Spatial Hierarchy](../spatial-hierarchy/) — The three-layer architectural structure