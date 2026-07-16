# Movement Physics (Reference)

## Why This Document Exists

This reference document consolidates all information about movement physics in the WHITE DIAMOND system. Movement physics defines how objects move through space—their mass, inertia, friction, and easing. Understanding these physics is essential for creating animations that feel natural and predictable.

This document provides a concise reference for movement physics, timing, and patterns. For detailed exploration, see the linked specification documents.

---

## Core Principle

**Animation serves physics. Motion exists only to demonstrate spatial relationships.**

Every animation in WHITE DIAMOND must answer one question: "What spatial relationship does this motion reveal?" If an animation cannot answer this question, it does not belong in WHITE DIAMOND.

---

## Physical Properties

### Mass

Objects have perceived mass that affects how they move:

| Mass Category | Duration | Usage |
|---------------|----------|-------|
| Light | 50-100ms | Buttons, icons, toggles |
| Medium | 100-200ms | Cards, panels, modals |
| Heavy | 200-400ms | Pages, sections, layouts |

**Mass affects:**
- Acceleration (how quickly objects reach full speed)
- Deceleration (how quickly objects come to rest)
- Momentum (how much objects continue after force stops)
- Impact (how objects collide with boundaries)

### Friction

Friction slows objects over time:

| Friction Level | Value | Usage |
|---------------|-------|-------|
| High | 0.8-1.0 | Solid, grounded elements |
| Medium | 0.5-0.8 | Most UI elements |
| Low | 0.2-0.5 | Light, floating elements |

### Elasticity

Objects bounce when they hit boundaries:

| Elasticity Level | Value | Usage |
|-----------------|-------|-------|
| High | 0.8-1.0 | Playful interactions, drag-and-drop |
| Medium | 0.5-0.8 | Most UI interactions |
| Low | 0.2-0.5 | Serious interactions, subtle transitions |

---

## Movement Laws

### Law 1: Ease-In-Out

Objects accelerate and decelerate smoothly. This demonstrates that objects have inertia and exist in physical space.

- **Starting:** Objects accelerate gradually (ease-in)
- **Stopping:** Objects decelerate gradually (ease-out)
- **Turning:** Objects decelerate, change direction, accelerate

### Law 2: Distance-Speed Proportion

Objects traveling longer distances take more time:

| Distance | Duration |
|----------|----------|
| Short (0-100px) | 100-200ms |
| Medium (100-300px) | 200-400ms |
| Long (300-600px) | 400-600ms |
| Very long (600px+) | 600-800ms |

### Law 3: Size-Speed Proportion

Larger objects move more slowly:

| Size | Duration |
|------|----------|
| Small (0-50px) | 100-150ms |
| Medium (50-200px) | 150-250ms |
| Large (200-500px) | 250-400ms |
| Very large (500px+) | 400-600ms |

### Law 4: Importance-Speed Proportion

More important objects move more deliberately:

| Importance | Duration |
|-----------|----------|
| Primary | 200-400ms |
| Secondary | 150-250ms |
| Tertiary | 100-150ms |

### Law 5: Spatial Continuity

Objects move through continuous paths. No teleportation, no invisibility, no duplication.

---

## Timing Functions

| Function | Usage |
|----------|-------|
| **Linear** | Continuous motion, progress indicators |
| **Ease-out** | Arriving, stopping, appearing |
| **Ease-in** | Departing, starting, disappearing |
| **Ease-in-out** | Continuous motion, state changes |
| **Spring** | Playful interactions, emphasis, drag |

---

## Movement Patterns

### The Slide

Objects move horizontally or vertically. Demonstrates continuous motion through physical space.

- **Horizontal slide:** Navigation (left/right)
- **Vertical slide:** Scrolling (up/down)

### The Scale

Objects change size. Demonstrates mass and physical dimensions.

- **Grow:** Emphasis, opening, activation
- **Shrink:** De-emphasis, closing, deactivation

### The Fade

Objects change opacity. Demonstrates visibility changes as objects move through space.

- **Fade in:** Appearance, emphasis
- **Fade out:** Disappearance, de-emphasis

---

## Cross-References

- **Detailed specification:** [Movement Physics](../motion/movement-physics.md) — Full physics specification
- **Animation principles:** [Animation Principles](../motion/animation-principles.md) — How motion should feel
- **Prohibited animations:** [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
- **Appearance sequence:** [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects enter and exit
- **Core axioms:** [Core Principles](../philosophy/core-principles.md) — The axioms from which physics derives
