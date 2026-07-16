# Prohibited Animations

## Why This Matters

Knowing what not to do is as important as knowing what to do. Prohibited animations are those that confuse, disorient, frustrate, or harm users. These prohibitions are not arbitrary—they are based on human perception, cognitive science, and accessibility requirements.

## Accessibility Prohibitions

### No Vestibular-Inducing Motion

Motion that can cause vestibular disorders (dizziness, nausea, disorientation) is prohibited:
- **Full-screen parallax** — Moving entire screens in response to scroll
- **Auto-playing video backgrounds** — Constant motion behind content
- **Pulsing elements** — Continuous rhythmic motion
- **Spinning elements** — Continuous rotation
- **Zooming transitions** — Full-screen zoom in/out effects

**Alternative:** Provide reduced motion options, or use subtle motion that doesn't affect the vestibular system.

### No Flashing Content

Content that flashes more than three times per second is prohibited:
- **Rapid color changes** — Alternating colors quickly
- **Blinking elements** — Elements that appear and disappear rapidly
- **Stroboscopic effects** — Repeated flashes

**Alternative:** Use smooth transitions or single flashes.

### No Auto-Scrolling

Forcing content to scroll automatically is prohibited:
- **Auto-advancing carousels** — Automatically moving to the next slide
- **Auto-scrolling feeds** — Automatically scrolling to new content
- **Parallax scrolling** — Background scrolling at different speeds

**Alternative:** Allow user-initiated scrolling.

## Cognitive Prohibitions

### No Unexpected Motion

Motion that surprises users is prohibited:
- **Unexpected direction** — Elements moving in unexpected directions
- **Unexpected speed** — Elements moving faster or slower than expected
- **Unexpected scale** — Elements changing size dramatically
- **Unexpected timing** — Elements appearing when not expected

**Alternative:** Motion should match user expectations based on context.

### No Distracting Motion

Motion that draws attention away from the primary task is prohibited:
- **Background animations** — Continuous motion behind content
- **Decorative animations** — Motion without purpose
- **Notification animations** — Overly prominent notifications
- **Loading animations** — Longer than necessary loading indicators

**Alternative:** Use motion purposefully and sparingly.

### No Disorienting Motion

Motion that breaks spatial understanding is prohibited:
- **Teleportation** — Elements appearing without transition
- **Random movement** — Elements moving without pattern
- **Inconsistent directions** — Similar actions producing different directions
- **Broken continuity** — Elements disappearing without exit animation

**Alternative:** Maintain spatial continuity.

## Performance Prohibitions

### No Heavy Animations

Animations that impact performance are prohibited:
- **Many simultaneous animations** — Too many elements animating at once
- **Complex path animations** — Elements following complex paths
- **High-frequency updates** — Animations updating faster than 60fps
- **Large element animations** — Animating very large elements

**Alternative:** Optimize animations for performance.

### No Layout-Triggering Animations

Animations that trigger layout recalculation are prohibited:
- **Animating layout properties** — Width, height, position, margin, padding
- **Animating text properties** — Font size, line height, letter spacing
- **Animating border properties** — Border width, border radius

**Alternative:** Animate only transform and opacity properties.

## Platform Prohibitions

### No Platform-Inconsistent Motion

Motion that contradicts platform conventions is prohibited:
- **iOS-style motion on Android** — Platform-specific animation patterns
- **Web-style motion on mobile** — Desktop-oriented animations on touch devices
- **Desktop-style motion on mobile** — Mouse-oriented animations on touch devices

**Alternative:** Follow platform-specific motion guidelines.

### No Device-Inappropriate Motion

Motion that doesn't suit the device is prohibited:
- **Hover effects on touch devices** — Effects that require hover state
- **Click effects on touch devices** — Effects that require click state
- **Precision animations on imprecise devices** — Animations requiring pixel precision

**Alternative:** Adapt motion to device capabilities.

## User Preference Prohibitions

### No Forced Motion

Motion that cannot be disabled is prohibited:
- **No reduced motion option** — Animations that can't be turned off
- **No animation preferences** — No way to adjust animation speed
- **No motion control** — No way to pause or stop animations

**Alternative:** Always respect user motion preferences.

### No Time-Consuming Motion

Motion that takes too long is prohibited:
- **Slow transitions** — Transitions longer than 600ms
- **Long loading animations** — Loading indicators longer than 3 seconds
- **Extended entrance animations** — Elements taking too long to appear

**Alternative:** Keep animations brief and purposeful.

## See Also

- [Animation Principles](animation-principles.md) — How motion should work
- [Movement Physics](movement-physics.md) — Physical laws of motion
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Cognitive Load](../psychology/cognitive-load.md) — Mental effort and clarity
- [Common Mistakes](../anti-patterns/common-mistakes.md) — Frequent errors
