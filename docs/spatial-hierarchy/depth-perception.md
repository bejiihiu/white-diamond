# Depth Perception

## Why This Matters

Depth communicates hierarchy, focus, and relationship. Without depth, all elements exist on the same plane, making it impossible to distinguish foreground from background, primary from secondary, or active from inactive.

## The Principle of Spatial Layers

Digital interfaces have depth, even on 2D screens. Depth is communicated through visual cues that simulate three-dimensional space. WHITE DIAMOND defines layers from back to front:

### Layer 0: Background

The deepest layer. Content here is:
- Furthest from the user
- Least important
- Supporting context
- Non-interactive

Examples: Page backgrounds, decorative patterns, ambient imagery

### Layer 1: Content

The base layer. Content here is:
- The primary content of the view
- Read-only or informational
- The reason the user is here
- Scrollable with the view

Examples: Article text, images, data, lists

### Layer 2: Inline

Elements that exist within content. Content here is:
- Part of the content flow
- Locally interactive
- Supporting the main content
- Scrolling with content

Examples: Inline buttons, embedded inputs, expandable sections

### Layer 3: Sticky

Elements that stick to the viewport. Elements here are:
- Persistently visible
- Contextually relevant
- Not part of the content flow
- Anchored to the viewport

Examples: Sticky headers, floating action buttons, fixed navigation

### Layer 4: Overlay

Elements that appear above content. Elements here are:
- Temporarily visible
- Requiring focus
- Blocking interaction with content
- Appearing on demand

Examples: Dropdowns, popovers, tooltips

### Layer 5: Modal

Elements that take over the viewport. Elements here are:
- Requiring immediate attention
- Blocking all other interaction
- Dismissing other overlays
- Demanding focus

Examples: Modal dialogs, confirmation prompts, full-screen editors

### Layer 6: System

The deepest layer. Elements here are:
- Operating system level
- Beyond the application
- System notifications
- OS-level dialogs

Examples: System permissions, OS notifications, browser dialogs

## Depth Cues

### Size Scaling

Larger objects feel closer. Smaller objects feel farther away. WHITE DIAMOND uses subtle size differences to communicate depth:
- Foreground elements: 100% scale
- Midground elements: 98-100% scale
- Background elements: 95-98% scale

### Shadow Depth

Shadows communicate elevation. More shadow means higher elevation:
- **Level 0 (no shadow)** — Flat on surface
- **Level 1 (subtle)** — Slightly elevated
- **Level 2 (medium)** — Moderately elevated
- **Level 3 (prominent)** — Significantly elevated
- **Level 4 (dramatic)** — Floating above surface

### Opacity Depth

Transparent objects feel farther away. Opaque objects feel closer:
- Background: 60-80% opacity
- Content: 90-100% opacity
- Foreground: 100% opacity

### Blur Depth

Blurred objects feel out of focus (farther away). Sharp objects feel in focus (closer):
- Background blur: For deep background
- Content blur: For overlay backdrop
- Foreground blur: For frosted glass effects

## Depth Rules

### Rule 1: Higher Layers Have Higher Priority

Elements on higher layers take precedence over lower layers. A modal blocks a dropdown, which blocks content, which blocks background.

### Rule 2: Higher Layers Have Stronger Shadows

The higher the layer, the more prominent the shadow. This reinforces the sense of elevation:
- Content: No shadow
- Sticky: Subtle shadow
- Overlay: Medium shadow
- Modal: Dramatic shadow

### Rule 3: Higher Layers Have More Contrast

Higher layers should have more visual contrast than lower layers. This draws attention upward:
- Background: Low contrast
- Content: Medium contrast
- Foreground: High contrast

### Rule 4: Layer Transitions Use Depth Motion

When moving between layers, objects should move through depth:
- **Ascending** — Grow slightly, increase shadow, move to center
- **Descending** — Shrink slightly, reduce shadow, move away

This communicates vertical movement through layers.

### Rule 5: Background Layers Are De-emphasized

When foreground elements are active, background elements should be:
- Reduced opacity (dimmed)
- Reduced saturation (muted)
- Blurred (if appropriate)

This focuses attention on the active layer.

## Depth in Practice

### Card Elevation

Cards exist at different depths based on context:
- **Content card** — Layer 1, no shadow
- **Sidebar card** — Layer 2, subtle shadow
- **Floating card** — Layer 3, medium shadow
- **Popup card** — Layer 4, prominent shadow

### Modal Depth

Modals exist at the highest interactive layer:
- **Backdrop** — Layer 4, dimmed
- **Modal content** — Layer 5, prominent shadow
- **Modal within modal** — Layer 6, dramatic shadow

### Navigation Depth

Navigation exists at different depths:
- **Inline links** — Layer 1, no special treatment
- **Sticky nav** — Layer 3, subtle shadow
- **Dropdown menu** — Layer 4, medium shadow
- **Full navigation** — Layer 5, prominent shadow

## See Also

- [Object Structure](object-structure.md) — How objects are structured
- [Space Behavior](../space-physics/space-behavior.md) — How space responds to objects
- [Animation Principles](../motion/animation-principles.md) — How motion communicates depth
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Border System](../tokens/border-system.md) — Border definitions for depth
