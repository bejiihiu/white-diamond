# Motion Examples

## Why This Document Exists

Motion in WHITE DIAMOND is not decoration—it is the language of spatial physics. Every animation communicates something about the architectural reality of the interface: the mass of objects, the depth of space, the relationships between elements, and the continuity of time. Without consistent animation principles, the interface becomes a collection of arbitrary visual effects rather than a coherent spatial environment.

These examples demonstrate how WHITE DIAMOND animations are constructed, and why each animation follows from the axioms of digital space. Understanding these examples teaches you to derive animations from principles rather than copying effects.

---

## Fundamental Motion Principles

Before examining specific animations, every motion must answer one question: **What spatial relationship does this motion reveal?**

**Motion serves physics.** Every animation must communicate something about the interface's spatial reality. A button that depresses on click communicates that the button has mass and responds to force. A modal that slides in from the right communicates that the modal exists in a specific location relative to the viewport. If an animation cannot answer "what spatial relationship does this reveal?" it does not belong in WHITE DIAMOND.

**Motion is physical.** Animations follow intuitive physics—not mathematical easing, but physical laws. Objects have mass, inertia, momentum, and friction. Heavy objects move slowly. Light objects move quickly. Objects decelerate when arriving (ease-out). Objects accelerate when departing (ease-in). These physical properties create a coherent spatial reality.

**Motion is consistent.** Similar actions produce similar animations. All buttons depress the same way. All modals slide in the same way. All menus expand the same way. This consistency creates spatial memory—users learn how the interface behaves and can predict its responses.

---

## Button Press

A button press demonstrates that the button has mass and responds to force—the fundamental spatial property of interactive elements.

```css
.button {
  transition: transform 100ms ease-out, background-color 100ms ease-out;
}

.button:hover {
  background-color: var(--primary-600);
}

.button:active {
  transform: scale(0.98);
  background-color: var(--primary-700);
}
```

### Animation Construction

**Step 1: Establish the resting state.** The button exists in its default state—it has a visible boundary (border), a surface (background), and content (label). The button is at rest—it has not been acted upon.

**Step 2: Construct the hover state.** When the cursor enters the button's boundary, the background color shifts slightly darker. This shift communicates that the button is interactive—it responds to proximity. The transition duration is 100ms (micro), communicating that the response is immediate. The ease-out easing communicates that the button decelerates into its hover state—it does not snap, it arrives.

**Step 3: Construct the active state.** When the button is pressed, it scales down to 0.98 and the background darkens further. The scale change communicates that the button has mass and responds to pressure—it is being pushed down. The 0.98 scale is subtle—this is not a dramatic compression, it is a physical acknowledgment of force. The background darkening communicates depth—the button is pressed into the surface.

**Step 4: Construct the release.** When the button is released, it returns to its resting state. The return transition follows the same timing (100ms ease-out), communicating that the button has elasticity—it returns to its original shape after being released.

### Architectural Reasoning

The button press animation communicates **mass and responsiveness**. The scale change demonstrates that the button is a physical construction with weight—it compresses under force and returns when released. The background color change demonstrates depth—the button moves closer to the surface when pressed.

The 100ms duration is the micro timing tier—it communicates immediate response. The interface reacts instantly to user input, creating the sense of responsiveness that is fundamental to control.

The ease-out easing communicates deceleration—the button arrives at its pressed state gradually, not instantly. This physical behavior demonstrates that the button has inertia—it does not change state instantaneously, it transitions through physical space.

**What this animation communicates to the user:** "This button has mass. It responds to your touch. It compresses when pressed and returns when released. The interface is responsive and physical."

---

## Dropdown Menu

A dropdown menu demonstrates spatial origin—the menu exists in a specific location relative to its trigger and enters the viewport from that location.

```css
.menu {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

.menu.open {
  opacity: 1;
  transform: translateY(0);
}
```

### Animation Construction

**Step 1: Establish the menu's spatial origin.** The menu originates from its trigger element. When closed, the menu exists at a position slightly above its final position (translateY(-8px)). This position communicates that the menu is "above" the viewport—it exists in spatial position but is not yet visible.

**Step 2: Construct the entrance.** When the menu opens, it moves from its origin position (Y: -8px) to its final position (Y: 0). This translation demonstrates that the menu enters the viewport from above—it does not materialize from nothing, it moves from outside the visible area to inside.

**Step 3: Construct the opacity transition.** The opacity transitions from 0 to 1 simultaneously with the translation. This simultaneous transition communicates that the menu becomes visible as it enters the viewport—it does not appear from nothing, it becomes visible as it enters the visible area.

**Step 4: Establish the timing.** The 200ms duration is the fast timing tier—it communicates quick transformation. The menu is a temporary element—it appears quickly and disappears quickly. The ease-out easing communicates deceleration—the menu arrives at its final position gradually, not instantly.

### Architectural Reasoning

The dropdown menu animation communicates **spatial origin and entrance**. The translation from Y: -8px to Y: 0 demonstrates that the menu exists at a specific location relative to its trigger. The menu does not appear from nothing—it enters the viewport from a defined spatial position.

The direction (downward) follows the natural spatial expectation—the menu expands downward from the trigger, following the direction of gravity. This consistency creates spatial predictability—users learn that menus expand downward.

The opacity transition prevents the menu from appearing abruptly. The simultaneous fade and translate creates a smooth entrance that demonstrates the menu's spatial reality—it moves into the visible area, becoming visible as it enters.

**What this animation communicates to the user:** "This menu exists above the trigger. It enters the viewport from that position. It becomes visible as it enters. The spatial origin is the trigger."

---

## Modal Dialog

A modal dialog demonstrates spatial layering—the modal occupies a higher spatial plane than the background content.

```css
.backdrop {
  opacity: 0;
  transition: opacity 300ms ease-out;
}

.modal {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.modal.open {
  opacity: 1;
  transform: scale(1);
}

.backdrop.open {
  opacity: 1;
}
```

### Animation Construction

**Step 1: Establish the spatial layers.** The backdrop exists at the background layer—it is the surface behind the modal. The modal exists at the foreground layer—it is closer to the viewer than the background. This layering communicates depth—the modal is "in front of" the background.

**Step 2: Construct the backdrop entrance.** The backdrop fades in from opacity 0 to opacity 1. This fade communicates that the background becomes less visible as the modal becomes more visible—the background still exists but is de-emphasized. The 300ms duration is the normal timing tier—this is a standard transformation.

**Step 3: Construct the modal entrance.** The modal scales from 0.95 to 1.0 and fades from opacity 0 to opacity 1. The scale change demonstrates that the modal approaches from a slightly smaller size—it is "coming toward" the viewer. The simultaneous fade and scale create a smooth entrance that demonstrates the modal's spatial reality.

**Step 4: Establish the timing coordination.** The backdrop and modal animate simultaneously with the same duration (300ms). This coordination communicates that they are spatially related—the backdrop de-emphasizes as the modal emphasizes, creating a unified spatial transformation.

### Architectural Reasoning

The modal dialog animation communicates **spatial layering and focused attention**. The backdrop demonstrates that the background still exists—it is not destroyed, it is de-emphasized. The modal demonstrates that it is closer to the viewer—it is in the foreground, demanding attention.

The scale change (0.95 to 1.0) is subtle—this is not a dramatic zoom, it is a subtle approach. The modal comes slightly closer to the viewer, demonstrating that it is in a different spatial plane. The opacity transition ensures the modal becomes visible as it approaches—it does not materialize from nothing, it becomes visible as it enters the foreground.

The 300ms duration is appropriate for a modal—this is a significant spatial transformation (a new layer is being established), so it deserves a moderate duration. The ease-out easing communicates that the modal arrives at its final position gradually—it does not snap, it arrives.

**What this animation communicates to the user:** "A new spatial layer is being established. The background still exists but is temporarily unavailable. The modal is closer to you. Focus your attention here."

---

## Card Hover

A card hover demonstrates elevation change—the card lifts slightly, communicating that it is interactive and has physical depth.

```css
.card {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: box-shadow 200ms ease-out, transform 200ms ease-out;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
```

### Animation Construction

**Step 1: Establish the resting elevation.** The card has a subtle shadow (0 1px 3px)—this shadow communicates that the card is slightly elevated above the background surface. The shadow is the visual signal of depth—it demonstrates that the card is not flat against the background, it is floating slightly above it.

**Step 2: Construct the hover elevation.** When the cursor enters the card's boundary, the shadow deepens (0 4px 12px) and the card moves upward (translateY(-2px)). The deeper shadow communicates increased elevation—the card is "lifting" away from the background. The upward translation reinforces this—the card is physically moving away from the surface.

**Step 3: Establish the timing.** The 200ms duration is the fast timing tier—this is a quick response to hover. The ease-out easing communicates deceleration—the card arrives at its elevated state gradually, not instantly.

### Architectural Reasoning

The card hover animation communicates **interactive depth**. The shadow change demonstrates that the card has physical depth—it is not a flat element, it is a construction with volume. The hover animation demonstrates that the card is interactive—it responds to proximity by lifting slightly.

The 2px upward translation is subtle—this is not a dramatic lift, it is a physical acknowledgment of proximity. The card moves slightly closer to the viewer when hovered, demonstrating that it is responsive and interactive.

The shadow change is the primary spatial signal—it communicates elevation more clearly than the translation. The deeper shadow demonstrates that the card is farther from the background surface, creating a sense of three-dimensional space.

**What this animation communicates to the user:** "This card is interactive. It has physical depth. It responds to your proximity by lifting slightly. The deeper shadow demonstrates increased elevation."

---

## Page Transition

A page transition demonstrates spatial navigation—the user moves through the interface's spatial structure, and the animation communicates this movement.

```css
.page-exit {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 200ms ease-in, transform 200ms ease-in;
}

.page-exit.active {
  opacity: 0;
  transform: translateX(-20px);
}

.page-enter {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

.page-enter.active {
  opacity: 1;
  transform: translateX(0);
}
```

### Animation Construction

**Step 1: Establish the current page's spatial position.** The current page exists at position X: 0—it is centered in the viewport. The page is visible (opacity: 1) and at its final position.

**Step 2: Construct the exit.** When the user navigates away, the current page moves left (translateX(-20px)) and fades out (opacity: 0). The leftward movement demonstrates that the page exits the viewport to the left—it continues to exist in spatial position, just outside the visible area. The fade prevents an abrupt disappearance.

**Step 3: Construct the entrance.** The new page starts at position X: 20px (to the right of the viewport) and opacity: 0. When the transition begins, the page moves left to X: 0 and fades in to opacity: 1. The rightward starting position demonstrates that the new page enters from the right—it exists in spatial position outside the viewport and moves into the visible area.

**Step 4: Establish the timing.** Both exit and entrance use 200ms duration—the fast timing tier. The exit uses ease-in (accelerating—the page speeds up as it leaves). The entrance uses ease-out (decelerating—the page slows down as it arrives). This asymmetry communicates physical behavior—objects accelerate when departing and decelerate when arriving.

### Architectural Reasoning

The page transition animation communicates **spatial navigation**. The exit demonstrates that the current page does not disappear—it exits the viewport to the left, continuing to exist in spatial position. The entrance demonstrates that the new page does not appear from nothing—it enters the viewport from the right, moving from a position outside the visible area.

The directional consistency (left exit, right entrance) communicates a spatial metaphor—the user is moving through a linear spatial structure. Pages to the left are "behind" the current page; pages to the right are "ahead" of the current page. This metaphor creates spatial memory—users learn where pages are in the spatial structure.

The 200ms duration is appropriate for page transitions—this is a quick navigation action, not a major spatial transformation. The easing asymmetry (ease-in for exit, ease-out for entrance) communicates physical behavior—objects accelerate when departing and decelerate when arriving.

**What this animation communicates to the user:** "You are moving through a spatial structure. The current page exits to the left. The new page enters from the right. Pages exist in linear spatial order."

---

## Toast Notification

A toast notification demonstrates spatial origin—the notification enters from a specific location and exits to that same location.

```css
.toast {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

.toast.hide {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 200ms ease-in, opacity 200ms ease-in;
}
```

### Animation Construction

**Step 1: Establish the toast's spatial origin.** The toast originates from below the viewport (translateY(100%)). This position communicates that the toast exists outside the visible area, below the current viewport.

**Step 2: Construct the entrance.** When the toast appears, it moves from Y: 100% (below viewport) to Y: 0 (visible position). The upward movement demonstrates that the toast enters the viewport from below—it does not materialize from nothing, it moves from outside the visible area to inside.

**Step 3: Construct the exit.** When the toast is dismissed, it moves from Y: 0 to Y: 100% (below viewport) and fades out. The downward movement demonstrates that the toast exits the viewport to below—it returns to its original spatial position outside the visible area.

**Step 4: Establish the timing asymmetry.** The entrance uses 300ms ease-out (normal duration, decelerating). The exit uses 200ms ease-in (fast duration, accelerating). The entrance is slower because the user needs to read the notification. The exit is faster because the user has already read it and wants it to leave quickly.

### Architectural Reasoning

The toast notification animation demonstrates **spatial origin and return**. The toast enters from below the viewport, communicates its message, and exits to below the viewport. It does not appear from nothing and does not disappear into nothing—it follows the spatial continuity principle.

The directional consistency (below entrance, below exit) communicates that the toast has a fixed spatial origin—it exists below the viewport and enters/exits from that position. This consistency creates spatial predictability—users learn that toasts come from below.

The timing asymmetry (slower entrance, faster exit) communicates the toast's purpose—the entrance needs time for the user to read the message, the exit can be quick because the user has already absorbed the information.

**What this animation communicates to the user:** "This notification enters from below. It exists in a specific spatial position. It returns to that position when dismissed. The spatial origin is below the viewport."

---

## Accordion Expand

An accordion expand demonstrates content revelation—the container expands to reveal content that was already present but hidden.

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease-out;
}

.accordion.open .accordion-content {
  max-height: 500px;
}
```

### Animation Construction

**Step 1: Establish the closed state.** The accordion content exists at max-height: 0—it has a boundary but no visible surface or content. The content is not destroyed—it is contained within a collapsed boundary. This demonstrates that the content exists in spatial position, just not within the visible area.

**Step 2: Construct the expansion.** When the accordion opens, the max-height transitions from 0 to 500px. This transition demonstrates that the boundary expands—the container grows to accommodate its content. The content does not appear from nothing—it was always present, and the boundary expanded to reveal it.

**Step 3: Establish the timing.** The 300ms duration is the normal timing tier—this is a standard spatial transformation. The ease-out easing communicates that the expansion decelerates—it arrives at its final size gradually.

### Architectural Reasoning

The accordion expand animation demonstrates **content containment and revelation**. The content was always present—it existed within the collapsed boundary. The expansion animation demonstrates that the boundary grows to reveal the content, not that the content materializes from nothing.

This animation follows the "no birth, no death" axiom—the content does not appear (birth), it is revealed through boundary expansion. The content was always there, just not visible within the collapsed boundary.

**What this animation communicates to the user:** "This content was always here. The boundary expanded to reveal it. The content did not appear from nothing—it was contained within the collapsed structure."

---

## Tab Switch

A tab switch demonstrates content replacement—the current content exits and new content enters, maintaining spatial continuity.

```css
.tab-content {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

.tab-content.active {
  opacity: 1;
  transform: translateY(0);
}
```

### Animation Construction

**Step 1: Establish the current tab's spatial position.** The current tab content exists at Y: 0 (visible position) and opacity: 1 (fully visible). The content is at its final spatial position.

**Step 2: Construct the new tab's entrance.** The new tab content starts at Y: 8px (slightly below its final position) and opacity: 0 (invisible). When the tab switches, the new content moves from Y: 8px to Y: 0 and fades from opacity: 0 to opacity: 1. This demonstrates that the new content enters from below—it does not materialize from nothing, it moves from a position below its final location.

**Step 3: Establish the timing.** The 200ms duration is the fast timing tier—this is a quick content replacement. The ease-out easing communicates that the content arrives at its final position gradually.

### Architectural Reasoning

The tab switch animation demonstrates **content replacement with spatial continuity**. The new content enters from below—this direction communicates that the new content is "underneath" the old content, and the switch reveals it. The upward movement demonstrates that the new content moves into position, not that it materializes from nothing.

The subtle 8px translation is enough to communicate spatial movement without being distracting. The content replacement is the primary function; the animation is the spatial signal that reinforces it.

**What this animation communicates to the user:** "New content is entering from below. The old content is being replaced. The spatial relationship is vertical—new content comes from underneath."

---

## Reduced Motion

All animations respect user preferences. The `prefers-reduced-motion` media query disables all animations for users who have requested reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Architectural Reasoning

Reduced motion is an accessibility requirement—it respects the user's physiological need for reduced visual stimulation. Users with vestibular disorders, motion sensitivity, or other conditions may experience discomfort from animations.

The `prefers-reduced-motion` query is the mechanism through which the interface adapts to user needs. When a user has requested reduced motion, all animations are effectively disabled—the duration is set to near-zero, so the transition happens instantaneously.

This adaptation does not destroy spatial communication—it simplifies it. The spatial relationships still exist (the modal is still centered, the toast still appears at the bottom), but the motion that demonstrates these relationships is removed. Users with reduced motion perceive the final state without the transition.

**What this adaptation communicates to the user:** "I respect your need for reduced motion. The spatial relationships are maintained, but the motion that demonstrates them is disabled. The interface remains functional and coherent."

---

## Motion and Spatial Hierarchy

Every animation follows the spatial hierarchy defined in [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md):

- **Entrance** — Objects enter from outside the viewport, never appear from nothing
- **Exit** — Objects exit to outside the viewport, never disappear into nothing
- **Translation** — Objects move from one position to another through continuous space
- **Transformation** — Objects change size or shape to communicate spatial constraints
- **State change** — Objects change visual properties to communicate object properties

These animation types are not arbitrary—they are the spatial expressions of the axioms defined in [Core Principles](../philosophy/core-principles.md). Every animation must follow these types. Animations that do not follow these types violate the physics of space and are prohibited.

**See also:** [Animation Principles](../motion/animation-principles.md) — How motion should feel, [Movement Physics](../motion/movement-physics.md) — Physical laws of motion

---

## See Also

- [Animation Principles](../motion/animation-principles.md) — How motion should feel
- [Movement Physics](../motion/movement-physics.md) — Physical laws of motion
- [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Core Principles](../philosophy/core-principles.md) — The axioms of digital space
