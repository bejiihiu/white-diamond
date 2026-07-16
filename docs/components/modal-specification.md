# Modal Specification

## Why This Matters

Modals focus user attention on specific content by blocking interaction with the rest of the interface. Without consistent modal behavior, users cannot predict how modals appear, how to interact with them, or how to dismiss them. The modal specification ensures predictable, accessible, and spatially coherent focused interaction.

## What Is a Modal?

A modal is an overlay that requires user interaction before returning to the main interface. Modals are:
- **Focused** — Demand user attention
- **Blocking** — Prevent interaction with background
- **Temporary** — Exist only for specific interaction
- **Dismissable** — Can be closed by user

Modals are not tooltips, popovers, or notifications. They interrupt workflow.

## Modal Types

### Dialog Modal

Requests user decision:
- **Use** — Confirmations, choices, alerts
- **Content** — Title, message, actions
- **Example** — "Delete this item?", "Save changes?"

### Form Modal

Captures user input:
- **Use** — Creating, editing, configuring
- **Content** — Title, form fields, actions
- **Example** — "Create new user", "Edit profile"

### Information Modal

Displays important information:
- **Use** — Announcements, details, help
- **Content** — Title, content, close action
- **Example** — "What's new", "Terms of service"

### Media Modal

Displays media content:
- **Use** — Images, videos, documents
- **Content** — Media, navigation, close action
- **Example** — Image gallery, video player

### Confirmation Modal

Confirms destructive actions:
- **Use** — Delete, remove, cancel
- **Content** — Warning, confirmation input, actions
- **Example** — "Type DELETE to confirm"

## Modal Anatomy

```
┌─────────────────────────────────┐
│ Backdrop (dimmed background)    │
│ ┌─────────────────────────────┐ │
│ │ Header                      │ │
│ │ Title              [Close]  │ │
│ ├─────────────────────────────┤ │
│ │                             │ │
│ │ Content                     │ │
│ │                             │ │
│ ├─────────────────────────────┤ │
│ │ Footer                      │ │
│ │ [Cancel]        [Confirm]   │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Required Elements

- **Backdrop** — Dimmed background (blocks interaction)
- **Container** — Modal content area
- **Close mechanism** — Way to dismiss (close button, escape key)
- **Focus trap** — Keyboard focus stays within modal

### Optional Elements

- **Header** — Title and close button
- **Footer** — Action buttons
- **Scroll** — For long content
- **Resize** — For adjustable modals

## Modal States

### Opening
- Backdrop fades in
- Modal scales up from center
- Focus moves to modal
- Background becomes inert

### Open
- Modal is visible and interactive
- Focus is trapped within modal
- Background is not interactive
- Escape key closes modal

### Closing
- Modal scales down
- Backdrop fades out
- Focus returns to trigger element
- Background becomes interactive

### Closed
- Modal is not in DOM (or hidden)
- Focus is on trigger element
- Background is fully interactive
- Scroll is restored

## Modal Behavior

### Opening

Modals open when:
- **User action** — Click button, trigger action
- **Programmatic** — API call
- **System event** — Required system interaction

Opening sequence:
1. Create modal element
2. Add backdrop
3. Show modal with animation
4. Move focus to modal
5. Trap focus within modal
6. Prevent background scroll

### Interaction

Within a modal:
- **Keyboard** — Tab through focusable elements
- **Escape** — Close modal
- **Click outside** — Close modal (optional)
- **Enter** — Submit form (if applicable)

### Closing

Modals close when:
- **Close button** — User clicks close
- **Escape key** — User presses escape
- **Action complete** — User completes action
- **Cancel** — User clicks cancel
- **Click outside** — User clicks backdrop (optional)

Closing sequence:
1. Animate modal out
2. Animate backdrop out
3. Remove modal from DOM
4. Return focus to trigger
5. Restore background scroll

## Modal Rules

### Rule 1: Modals Have Clear Purpose

Every modal must have a clear, specific purpose:
- **Required** — Must be completed before continuing
- **Focused** — One task per modal
- **Temporary** — Exists only for this interaction
- **Important** — Warrants interruption

Modals without clear purpose frustrate users.

### Rule 2: Modals Are Easy to Dismiss

Users must always be able to close modals:
- **Close button** — Always visible
- **Escape key** — Always works
- **Cancel action** — Always available
- **Click outside** — Optional but common

Un-closeable modals trap users.

### Rule 3: Modals Trap Focus

Keyboard focus must stay within the modal:
- **Tab** — Moves through modal focusable elements
- **Shift+Tab** — Moves backward through modal
- **No escape** — Focus cannot leave modal
- **Return** — Focus returns to trigger on close

Focus escaping modal confuses keyboard users.

### Rule 4: Modals Prevent Background Interaction

Background content must not be interactive:
- **Backdrop** — Visual dimming
- **Inert** — Background elements not focusable
- **Scroll lock** — Background cannot scroll
- **Click block** — Background clicks do nothing

Interactive background distracts from modal.

### Rule 5: Modals Are Accessible

Modals must work with assistive technology:
- **ARIA role** — role="dialog"
- **ARIA label** — aria-labelledby for title
- **ARIA description** — aria-describedby for content
- **Focus management** — Focus moves to and stays in modal
- **Return focus** — Focus returns to trigger on close

Inaccessible modals exclude users.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist
- [Depth Perception](../spatial-hierarchy/depth-perception.md) — How objects communicate depth
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](../accessibility/keyboard-navigation.md) — Non-pointer interaction
