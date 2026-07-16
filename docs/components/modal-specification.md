# Modal Specification

## Why This Matters

Modals focus user attention on specific content by blocking interaction with the rest of the interface. In WHITE DIAMOND, a modal is not a popup or overlay—it is an architectural construction that temporarily claims spatial priority. Without consistent modal behavior, users cannot predict how modals appear, how to interact with them, or how to dismiss them. The modal specification ensures predictable, accessible, and spatially coherent focused interaction.

## What Is a Modal?

A modal is an overlay that requires user interaction before returning to the main interface. In WHITE DIAMOND, a modal is:

- **A focused environment** — It creates a temporary space where specific interaction occurs
- **A spatial priority** — It claims attention by elevating above the base plane
- **A blocking construction** — It prevents interaction with background content
- **A temporary existence** — It exists only for specific interaction, then exits
- **A dismissable object** — It can always be closed by the user

Modals are not tooltips, popovers, or notifications. They interrupt workflow. This interruption must be justified, controlled, and always reversible.

## The Three-Layer Hierarchy for Modals

### Physical Boundary

The modal's outermost container defines its footprint in the focused space:

- **Border** — The explicit edge that separates the modal from the background. Without a border, the modal does not exist. The border is always visible, always defined, and always present.
- **Dimensions** — The modal's width and height define how much space it occupies. Modals have maximum dimensions to maintain focus.
- **Mass expression** — Border weight communicates the modal's importance. Thicker borders suggest greater mass.
- **Elevation** — The modal exists at a high elevation above the base plane. This elevation creates spatial priority and blocks background interaction.

### Inner Surface

The region between the boundary and the content:

- **Background** — The modal's surface treatment. Always present, even when transparent.
- **Padding** — The space between the boundary and the content. Consistent across all modals of the same type.
- **Visual treatment** — Color, texture, and other surface properties that communicate the modal's purpose.
- **Transition zone** — The area where the boundary meets the surface, creating the modal's visual weight.

### Content

The actual information within the modal:

- **Title** — The modal's primary label. Always present, always descriptive.
- **Description** — Additional information about the modal's purpose.
- **Form fields** — Optional data entry elements (for form modals).
- **Actions** — Optional buttons or links that provide interaction.
- **Close mechanism** — Always present, always accessible, always visible.

## Modal Types

### Dialog Modal

Requests user decision—a focused decision space:

- **Use** — Confirmations, choices, alerts, any decision that requires attention
- **Content** — Title, message, actions
- **Example** — "Delete this item?", "Save changes?"
- **Spatial behavior** — Claims spatial priority, blocks background, demands decision

### Form Modal

Captures user input—a focused data entry space:

- **Use** — Creating, editing, configuring, any data entry that requires focus
- **Content** — Title, form fields, actions
- **Example** — "Create new user", "Edit profile"
- **Spatial behavior** — Claims spatial priority, blocks background, focuses data entry

### Information Modal

Displays important information—a focused information space:

- **Use** — Announcements, details, help, any information that requires attention
- **Content** — Title, content, close action
- **Example** — "What's new", "Terms of service"
- **Spatial behavior** — Claims spatial priority, blocks background, focuses information

### Media Modal

Displays media content—a focused media space:

- **Use** — Images, videos, documents, any media that requires focus
- **Content** — Media, navigation, close action
- **Example** — Image gallery, video player
- **Spatial behavior** — Claims spatial priority, blocks background, focuses media

### Confirmation Modal

Confirms destructive actions—a focused safety space:

- **Use** — Delete, remove, cancel, any destructive action that requires confirmation
- **Content** — Warning, confirmation input, actions
- **Example** — "Type DELETE to confirm"
- **Spatial behavior** — Claims spatial priority, blocks background, focuses safety

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

- **Backdrop** — Dimmed background (blocks interaction). Always present, always blocking.
- **Container** — Modal content area. Always defined, always focused.
- **Close mechanism** — Way to dismiss (close button, escape key). Always accessible, always visible.
- **Focus trap** — Keyboard focus stays within modal. Always active, always complete.

### Optional Elements

- **Header** — Title and close button. Provides context and dismissal.
- **Footer** — Action buttons. Provides interaction.
- **Scroll** — For long content. Maintains containment.
- **Resize** — For adjustable modals. Provides flexibility.

## Modal States

### Opening State

When the modal enters the viewport—the spatial sequence of focused interaction:

- **Backdrop fades in** — The background dims, creating visual separation
- **Modal scales up from center** — The modal enters from the center, demonstrating spatial priority
- **Focus moves to modal** — Keyboard focus shifts to the modal, creating spatial focus
- **Background becomes inert** — Background elements become non-interactive, blocking distraction

### Open State

When the modal is fully visible—the state of focused interaction:

- **Modal is visible and interactive** — The modal accepts interaction, focusing attention
- **Focus is trapped within modal** — Keyboard navigation stays within the modal, maintaining focus
- **Background is not interactive** — Background elements are blocked, preventing distraction
- **Escape key closes modal** — The modal can always be dismissed, maintaining control

### Closing State

When the modal exits the viewport—the spatial sequence of focused interaction ending:

- **Modal scales down** — The modal exits, demonstrating spatial departure
- **Backdrop fades out** — The background brightens, returning to normal
- **Focus returns to trigger element** — Keyboard focus shifts back, maintaining spatial context
- **Background becomes interactive** — Background elements become interactive again, restoring workflow

### Closed State

When the modal is not visible—the state after focused interaction:

- **Modal is not in DOM (or hidden)** — The modal is removed, clearing space
- **Focus is on trigger element** — Keyboard focus is restored, maintaining spatial context
- **Background is fully interactive** — Background elements are interactive, restoring workflow
- **Scroll is restored** — Background scrolling is restored, maintaining navigation

## Modal Appearance Sequence

When a modal enters the viewport, it follows the WHITE DIAMOND appearance sequence:

1. **Entry from outside** — The modal enters from the center of the viewport, claiming spatial priority
2. **Backdrop establishment** — The background dims, creating visual separation
3. **Boundary establishment** — The physical boundary becomes visible, defining the modal's footprint
4. **Surface filling** — The inner surface fills with color and treatment
5. **Content reveal** — The title, description, and other content become visible
6. **Focus capture** — Keyboard focus shifts to the modal, creating spatial focus

The modal never appears from nothing. It always enters from the center, maintaining spatial continuity.

## Modal Disappearance Sequence

When a modal exits the viewport:

1. **Content fade** — The content fades, maintaining structure
2. **Surface draining** — The inner surface loses color
3. **Boundary dissolution** — The physical boundary fades
4. **Backdrop dismissal** — The background brightens, returning to normal
5. **Exit to center** — The modal exits to the center, maintaining spatial continuity
6. **Focus restoration** — Keyboard focus returns to the trigger element, maintaining spatial context

The modal never disappears. It always exits to the center, maintaining spatial continuity.

## Modal Timing and Physics

### Timing Specifications

- **Backdrop viewport entry** — 200ms transition for background dimming
- **Modal viewport entry** — 300ms transition for modal appearance
- **Modal viewport exit** — 200ms transition for modal departure
- **Backdrop viewport exit** — 200ms transition for background brightening
- **Focus capture** — Immediate shift to modal, creating spatial focus
- **Focus restoration** — Immediate shift to trigger, maintaining spatial context

### Physics Behavior

- **Inertia** — The modal resists movement, then transitions smoothly
- **Momentum** — The modal maintains motion during state changes
- **Friction** — Interactions resist movement, then release
- **Gravity** — The modal attracts attention, blocking background
- **Collision** — The modal cannot overlap with background interaction

## Modal Behavior and Feedback

### Opening

Modals open when:
- **User action** — Click button, trigger action, user-initiated focus
- **Programmatic** — API call, system-initiated focus
- **System event** — Required system interaction, system-initiated focus

Opening sequence:
1. Create modal element, defining spatial footprint
2. Add backdrop, creating visual separation
3. Show modal with animation, demonstrating spatial priority
4. Move focus to modal, creating spatial focus
5. Trap focus within modal, maintaining spatial containment
6. Prevent background scroll, blocking distraction

### Interaction

Within a modal:
- **Keyboard** — Tab through focusable elements, maintaining spatial navigation
- **Escape** — Close modal, always providing dismissal
- **Click outside** — Close modal (optional), providing spatial dismissal
- **Enter** — Submit form (if applicable), providing confirmation

### Closing

Modals close when:
- **Close button** — User clicks close, providing explicit dismissal
- **Escape key** — User presses escape, providing keyboard dismissal
- **Action complete** — User completes action, providing completion
- **Cancel** — User clicks cancel, providing cancellation
- **Click outside** — User clicks backdrop (optional), providing spatial dismissal

Closing sequence:
1. Animate modal out, demonstrating spatial departure
2. Animate backdrop out, returning to normal
3. Remove modal from DOM, clearing space
4. Return focus to trigger, maintaining spatial context
5. Restore background scroll, restoring navigation

## Modal Rules

### Rule 1: Modals Have Clear Purpose

Every modal must have a clear, specific purpose because:
- **Required** — Must be completed before continuing, justifying interruption
- **Focused** — One task per modal, maintaining clarity
- **Temporary** — Exists only for this interaction, maintaining spatial economy
- **Important** — Warrants interruption, justifying spatial priority

Modals without clear purpose frustrate users. They break the principle of communicative form.

### Rule 2: Modals Are Easy to Dismiss

Users must always be able to close modals because:
- **Close button** — Always visible, providing explicit dismissal
- **Escape key** — Always works, providing keyboard dismissal
- **Cancel action** — Always available, providing cancellation
- **Click outside** — Optional but common, providing spatial dismissal

Un-closeable modals trap users. They break the principle of absolute control.

### Rule 3: Modals Trap Focus

Keyboard focus must stay within the modal because:
- **Tab** — Moves through modal focusable elements, maintaining spatial navigation
- **Shift+Tab** — Moves backward through modal, maintaining spatial navigation
- **No escape** — Focus cannot leave modal, maintaining spatial containment
- **Return** — Focus returns to trigger on close, maintaining spatial context

Focus escaping modal confuses keyboard users. It breaks the principle of spatial containment.

### Rule 4: Modals Prevent Background Interaction

Background content must not be interactive because:
- **Backdrop** — Visual dimming, creating spatial separation
- **Inert** — Background elements not focusable, blocking distraction
- **Scroll lock** — Background cannot scroll, maintaining spatial position
- **Click block** — Background clicks do nothing, blocking distraction

Interactive background distracts from modal. It breaks the principle of spatial priority.

### Rule 5: Modals Are Accessible

Modals must work with assistive technology because:
- **ARIA role** — role="dialog", communicating structure
- **ARIA label** — aria-labelledby for title, communicating purpose
- **ARIA description** — aria-describedby for content, communicating information
- **Focus management** — Focus moves to and stays in modal, maintaining spatial focus
- **Return focus** — Focus returns to trigger on close, maintaining spatial context

Inaccessible modals exclude users from the spatial environment.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist as architectural constructions
- [Button Specification](button-specification.md) — Button as action trigger
- [Input Specification](input-specification.md) — Input as data vessel
- [Card Specification](card-specification.md) — Card as content container
- [Depth Perception](../spatial-hierarchy/depth-perception.md) — How objects communicate depth