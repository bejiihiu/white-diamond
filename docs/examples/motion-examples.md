# Motion Examples

## Why This Matters

Motion examples demonstrate how animation principles apply in practice. These examples show common motion patterns implemented according to WHITE DIAMOND principles.

## Button Press

A button responds to being pressed:

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

**Motion principles applied:**
- Immediate feedback (100ms)
- Subtle scale change (0.98)
- Color change on hover
- Smooth easing

## Dropdown Menu

A menu appears from its trigger:

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

**Motion principles applied:**
- Origin: appears from trigger
- Duration: 200ms (fast)
- Easing: ease-out (decelerating)
- Direction: downward (natural)

## Modal Dialog

A modal appears with backdrop:

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

**Motion principles applied:**
- Entrance: scale from center
- Duration: 300ms (medium)
- Easing: ease-out (natural stopping)
- Backdrop fades simultaneously

## Card Hover

A card lifts on hover:

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

**Motion principles applied:**
- Subtle elevation change
- Duration: 200ms (fast)
- Easing: ease-out
- Indicates interactivity

## Page Transition

Content transitions between views:

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

**Motion principles applied:**
- Exit: fades and moves left
- Enter: fades and moves from right
- Duration: 200ms each
- Easing: ease-in for exit, ease-out for enter

## Toast Notification

A toast slides in and out:

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

**Motion principles applied:**
- Entrance: slides up from bottom
- Exit: slides down to bottom
- Entrance: 300ms ease-out
- Exit: 200ms ease-in (faster)

## Loading Spinner

A spinner indicates processing:

```css
.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Motion principles applied:**
- Continuous rotation
- Duration: 1s (one full rotation)
- Easing: linear (constant speed)
- Infinite loop

## Accordion Expand

Content expands within a container:

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

**Motion principles applied:**
- Smooth expansion
- Duration: 300ms (medium)
- Easing: ease-out
- Overflow hidden during animation

## Tab Switch

Content switches between tabs:

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

**Motion principles applied:**
- Fade in with slight upward movement
- Duration: 200ms (fast)
- Easing: ease-out
- Simultaneous fade and translate

## Reduced Motion

All animations respect user preferences:

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

**Motion principles applied:**
- Respects user preference
- Disables all animations
- Maintains functionality
- Accessible to all users

## See Also

- [Animation Principles](../motion/animation-principles.md) — How motion should feel
- [Movement Physics](../motion/movement-physics.md) — Physical laws of motion
- [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
