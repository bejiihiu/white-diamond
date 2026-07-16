# Button Specification

## Why This Matters

Buttons are the primary mechanism for triggering actions. Without consistent button behavior, users cannot predict what will happen when they interact with an interface. The button specification ensures predictable, accessible, and spatially coherent action triggers.

## What Is a Button?

A button is an interactive element that triggers an action when activated. Buttons are:
- **Clickable** — Respond to pointer events
- **Focusable** — Can receive keyboard focus
- **Activatable** — Can be activated by click, tap, or key press
- **Visible** — Clearly indicate their interactive nature

Buttons are not links. Links navigate; buttons act.

## Button Types

### Primary Button

The main action on a page or section:
- **Visual** — High contrast, prominent
- **Placement** — One per section (maximum)
- **Use** — Submit, confirm, save, continue
- **Example** — "Submit Form", "Add to Cart"

### Secondary Button

Supporting actions:
- **Visual** — Medium contrast, less prominent
- **Placement** — Multiple per section acceptable
- **Use** — Cancel, skip,次要 actions
- **Example** — "Cancel", "Skip", "Save Draft"

### Tertiary Button

Minimal actions:
- **Visual** — Low contrast, subtle
- **Placement** — Multiple acceptable
- **Use** — Less important actions
- **Example** — "Learn More", "Show Details"

### Ghost Button

Actions within content:
- **Visual** — No background, border only
- **Placement** — Within content areas
- **Use** — Actions that don't break content flow
- **Example** — "Read More", "View All"

### Icon Button

Actions represented by icons:
- **Visual** — Icon only (with accessible label)
- **Placement** — Where space is limited
- **Use** — Simple, well-known actions
- **Example** — Close, search, settings

### Link Button

Actions that look like links:
- **Visual** — Text-only, underlined
- **Placement** — Within text content
- **Use** — Actions that are contextual
- **Example** — "Forgot password?", "Create account"

## Button Anatomy

```
┌─────────────────────────────┐
│  ┌───┐                     │
│  │ I │  Button Label       │
│  └───┘                     │
└─────────────────────────────┘
     ↑         ↑
   Icon      Text
 (optional) (required)
```

### Required Elements

- **Label** — Text describing the action
- **Clickable area** — Minimum 44x44 points (touch) or 24x24 pixels (click)

### Optional Elements

- **Icon** — Visual representation of the action
- **Loading indicator** — Shows processing state
- **Badge** — Shows count or status

## Button States

### Default
- Normal appearance
- Ready for interaction
- Visible and focusable

### Hover
- Slight color change (darker or lighter)
- Cursor changes to pointer
- Indicates interactivity

### Active/Pressed
- Slight size reduction (scale 0.98)
- Color change to pressed state
- Confirms interaction

### Focus
- Visible focus indicator (2px outline)
- High contrast focus ring
- Keyboard accessible

### Disabled
- Reduced opacity (0.5-0.6)
- Cursor not-allowed
- Not focusable or activatable

### Loading
- Loading spinner replaces content
- Button is not activatable
- Maintains size and position

### Error
- Error color treatment
- Error message below (if applicable)
- Maintains functionality

## Button Behavior

### Activation

Buttons respond to:
- **Click** — Primary activation method
- **Tap** — Touch device activation
- **Enter key** — Keyboard activation when focused
- **Space key** — Keyboard activation when focused

### Feedback

Button activation produces:
- **Visual feedback** — State change (pressed, loading)
- **Haptic feedback** — Vibration on mobile (optional)
- **Auditory feedback** — Sound (optional, not recommended)
- **Result feedback** — Action completes or fails

### Timing

Button interactions should be:
- **Immediate** — Visual response within 100ms
- **Loading** — Spinner appears after 500ms of processing
- **Timeout** — Error after 30 seconds of no response
- **Reset** — Return to default state after action completes

## Button Rules

### Rule 1: One Primary Button Per Section

Each section should have at most one primary button. Multiple primary buttons compete for attention and confuse users about what action is most important.

### Rule 2: Labels Describe Actions

Button labels should describe what happens when clicked:
- **Good** — "Submit Form", "Delete Account", "Save Changes"
- **Bad** — "OK", "Yes", "Submit" (without context)

### Rule 3: Buttons Are Clearly Interactive

Buttons must look clickable:
- **Visual distinction** — Different from static content
- **Affordance** — Visual cues that suggest clickability
- **Consistency** — Similar buttons look similar
- **Size** — Large enough to be easily targeted

### Rule 4: Disabled Buttons Explain Why

When a button is disabled, users should understand why:
- **Tooltip** — Explains why disabled
- **Helper text** — Explains requirement
- **Visual context** — Shows what's missing
- **Error message** — Explains the problem

### Rule 5: Loading Buttons Show Progress

When a button is loading:
- **Show spinner** — Indicate processing
- **Maintain size** — Don't resize the button
- **Prevent re-click** — Disable during processing
- **Show progress** — If determinate, show progress

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist
- [Input Specification](input-specification.md) — Input behavior and constraints
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](../accessibility/keyboard-navigation.md) — Non-pointer interaction
- [Control Feeling](../psychology/control-feeling.md) — The sense of agency
