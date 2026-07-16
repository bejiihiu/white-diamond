# Movement Physics

## Why This Matters

Digital objects that move according to intuitive physics feel natural and predictable. Movement that violates physics feels wrong—even if users can't articulate why. Understanding movement physics ensures animations feel coherent.

## Physical Properties

### Mass

Objects have perceived mass that affects how they move:
- **Light objects** — Move quickly, change direction easily, stop quickly
- **Heavy objects** — Move slowly, change direction slowly, stop slowly

Mass affects:
- **Acceleration** — How quickly objects reach full speed
- **Deceleration** — How quickly objects come to rest
- **Momentum** — How much objects continue after force stops
- **Impact** — How objects collide with boundaries

### Friction

Friction slows objects over time:
- **High friction** — Objects stop quickly
- **Low friction** — Objects slide further
- **No friction** — Objects never stop (not useful)

Friction creates natural stopping behavior.

### Elasticity

Objects bounce when they hit boundaries:
- **High elasticity** — Objects bounce significantly
- **Low elasticity** — Objects barely bounce
- **No elasticity** — Objects stop dead (not natural)

Elasticity creates playful, responsive motion.

### Gravity

Objects fall when unsupported:
- **Strong gravity** — Objects fall quickly
- **Weak gravity** — Objects fall slowly
- **No gravity** — Objects float (useful for floating elements)

Gravity creates directional motion.

## Movement Laws

### Law 1: Ease-In-Out

Objects should accelerate and decelerate smoothly:
- **Starting** — Objects don't jump to full speed instantly
- **Stopping** — Objects don't stop instantly
- **Turning** — Objects don't change direction instantly

Smooth easing feels natural.

### Law 2: Distance-Speed Proportion

Objects traveling longer distances should take more time:
- **Short distance** — Quick movement
- **Medium distance** — Moderate movement
- **Long distance** — Slower movement

This maintains perceived speed.

### Law 3: Size-Speed Proportion

Larger objects should move more slowly:
- **Small elements** — Quick, nimble movement
- **Medium elements** — Moderate movement
- **Large elements** — Slower, more deliberate movement

This maintains visual balance.

### Law 4: Importance-Speed Proportion

More important objects should move more deliberately:
- **Primary actions** — Moderate speed, high prominence
- **Secondary actions** — Faster speed, lower prominence
- **Tertiary actions** — Fastest speed, lowest prominence

This maintains visual hierarchy.

### Law 5: Spatial Continuity

Objects should move through continuous paths:
- **No teleportation** — Objects don't jump from point A to point B
- **No invisibility** — Objects don't disappear and reappear elsewhere
- **No duplication** — Objects don't split into multiple copies

Spatial continuity maintains object permanence.

## Movement Patterns

### The Slide

Objects move horizontally or vertically:
- **Horizontal slide** — For navigation (left/right movement)
- **Vertical slide** - For scrolling (up/down movement)
- **Diagonal slide** — For emphasis (rare, use sparingly)

Slide rules:
- Maintain direction consistency
- Match distance to duration
- Use appropriate easing

### The Scale

Objects change size:
- **Grow** — For emphasis, opening, activation
- **Shrink** — For de-emphasis, closing, deactivation
- **Pulse** — For attention, loading, alive feeling

Scale rules:
- Scale from center by default
- Maintain aspect ratio
- Use spring easing for playful feel

### The Fade

Objects change opacity:
- **Fade in** — For appearance, emphasis
- **Fade out** — For disappearance, de-emphasis
- **Fade transition** — For content change

Fade rules:
- Fade in: ease-out
- Fade out: ease-in
- Don't fade interactive elements too much

### The Rotate

Objects change orientation:
- **Spin** — For loading, processing
- **Turn** — For expansion, reveal
- **Flip** — For state change, front/back

Rotate rules:
- Rotate from center
- Use appropriate speed (not too fast)
- Consider accessibility (can cause vestibular issues)

### The Spring

Objects overshoot and bounce back:
- **Entrance** — Pop in with slight overshoot
- **Exit** — Pop out with slight bounce
- **Drag** — Follow with spring tension
- **Drop** — Snap to position with bounce

Spring rules:
- Use appropriate tension (not too bouncy)
- Maintain spatial continuity
- Respect user motion preferences

## Timing Functions

### Linear

Constant speed:
- **Use for:** Continuous motion, progress indicators
- **Don't use for:** Natural motion, UI transitions

### Ease-Out

Decelerating:
- **Use for:** Arriving, stopping, appearing
- **Don't use for:** Departing, starting, disappearing

### Ease-In

Accelerating:
- **Use for:** Departing, starting, disappearing
- **Don't use for:** Arriving, stopping, appearing

### Ease-In-Out

Smooth acceleration and deceleration:
- **Use for:** Continuous motion, state changes
- **Don't use for:** One-directional motion

### Spring

Overshooting and bouncing:
- **Use for:** Playful interactions, emphasis, drag
- **Don't use for:** Serious contexts, subtle transitions

## See Also

- [Animation Principles](animation-principles.md) — How motion should feel
- [Prohibited Animations](prohibited-animations.md) — What motion should never do
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Space Behavior](../space-physics/space-behavior.md) — How space responds to objects
- [Control Feeling](../psychology/control-feeling.md) — The sense of agency
