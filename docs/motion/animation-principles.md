# Animation Principles

## Why This Matters

Motion communicates what static images cannot: spatial relationships, cause and effect, temporal sequences, and physical properties. Without consistent animation principles, interfaces feel jarring, confusing, or lifeless.

## The Purpose of Motion

Motion in interfaces serves specific purposes:

### Informational Motion

Motion that communicates information:
- **Spatial relationships** — Where elements come from and go to
- **Cause and effect** — What triggered what
- **State changes** — What changed and how
- **Temporal sequences** — What happens in what order

### Functional Motion

Motion that enables interaction:
- **Feedback** — Confirming user actions
- **Affordance** — Showing what's interactive
- **Guidance** — Directing attention
- **Continuity** — Connecting related elements

### Aesthetic Motion

Motion that enhances experience:
- **Delight** — Creating pleasant moments
- **Polish** — Making interfaces feel refined
- **Personality** — Expressing brand character
- **Engagement** — Keeping users interested

## Animation Principles

### Principle 1: Motion Is Purposeful

Every animation must have a reason. Animation without purpose is decoration, and decoration distracts. Before animating, ask:
- What information does this motion communicate?
- What behavior does this motion enable?
- What experience does this motion enhance?

If the answer is "nothing," don't animate.

### Principle 2: Motion Is Physical

Motion should follow intuitive physics:
- **Inertia** — Objects have mass and resist changes in motion
- **Momentum** — Moving objects continue moving
- **Friction** — Objects slow down over time
- **Gravity** — Objects fall and bounce

Physical motion feels natural; mathematical motion feels robotic.

### Principle 3: Motion Is Consistent

Similar actions must produce similar motions:
- **Same triggers** — Same input produces same animation
- **Same elements** — Same element type animates the same way
- **Same contexts** — Same context produces same timing
- **Same directions** — Same action produces same direction

Consistent motion creates learning and predictability.

### Principle 4: Motion Is Proportional

Motion magnitude should match importance:
- **Small changes** — Small, fast animations
- **Medium changes** — Medium, moderate animations
- **Large changes** — Large, slower animations

Proportional motion maintains visual balance.

### Principle 5: Motion Is Reversible

Every animation must be reversible. Users must be able to:
- **Undo** — Return to previous state
- **Cancel** — Stop an in-progress animation
- **Skip** — Bypass non-essential animations
- **Control** — Adjust animation preferences

Irreversible motion traps users.

## Animation Types

### Transition

Smooth change from one state to another:
- **State transitions** — Button states, hover effects
- **Layout transitions** — Size, position, opacity changes
- **Content transitions** — Text, image, data changes
- **Navigation transitions** — Page, view, screen changes

### Entrance

Object appearing in the scene:
- **Fade in** — Gradual opacity increase
- **Slide in** — Movement from off-screen
- **Scale in** — Growth from small to full size
- **Pop in** — Spring-like appearance

### Exit

Object leaving the scene:
- **Fade out** — Gradual opacity decrease
- **Slide out** — Movement to off-screen
- **Scale out** — Shrink from full to small size
- **Pop out** — Spring-like disappearance

### Emphasis

Drawing attention to an element:
- **Pulse** — Rhythmic size change
- **Bounce** — Elastic movement
- **Shake** — Rapid horizontal movement
- **Glow** — Radiance increase

### Feedback

Responding to user input:
- **Press** — Slight size reduction on click
- **Release** — Return to original size
- **Drag** — Follow cursor movement
- **Drop** — Snap to destination

## Timing

### Duration

Animation duration should match the change:
- **Micro (50-100ms)** — Instant feedback (hover, press)
- **Fast (100-200ms)** — Quick responses (tooltips, toggles)
- **Normal (200-400ms)** — Standard transitions (menus, panels)
- **Slow (400-600ms)** — Major transitions (page changes, modals)

### Easing

Animation easing should feel natural:
- **Ease-out** — Decelerating (arriving, stopping)
- **Ease-in** — Accelerating (departing, starting)
- **Ease-in-out** — Smooth (continuous motion)
- **Spring** — Bouncy (playful, responsive)

### Stagger

Multiple animations should be coordinated:
- **Sequential** — One after another
- **Overlapping** — Slightly overlapping
- **Simultaneous** — All at once
- **Grouped** — Related items together

## See Also

- [Prohibited Animations](prohibited-animations.md) — What motion should never do
- [Movement Physics](movement-physics.md) — Physical laws of motion
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Depth Perception](../spatial-hierarchy/depth-perception.md) — How objects communicate depth
- [Control Feeling](../psychology/control-feeling.md) — The sense of agency
