# Layer System

## Why This Matters

Interfaces have depth. Even on a flat screen, elements exist at different elevations—some are in the foreground, some in the background, some temporarily elevated above others. Without a defined layer system, depth is arbitrary. Elements stack unpredictably. Users cannot determine what is active, what is passive, what is temporary, and what is permanent. The interface loses its spatial meaning.

WHITE DIAMOND defines a precise layer system that maps every element to a specific depth. This system is not a suggestion—it is an architectural requirement. Every element must exist at a defined layer, and that layer determines its behavior, appearance, and interaction priority.

---

## The Layer Hierarchy

The WHITE DIAMOND layer system defines seven layers, from deepest to shallowest. Each layer has specific architectural properties that determine how elements within it behave and interact.

```
Layer 6: System        ← Deepest (OS-level, beyond application control)
Layer 5: Modal         ← Exclusive focus, blocks all interaction
Layer 4: Overlay       ← Focused interaction, blocks parent
Layer 3: Sticky        ← Persistent visibility, anchored to viewport
Layer 2: Inline        ← Part of content flow, locally interactive
Layer 1: Content       ← Primary content, read-only
Layer 0: Background    ← Deepest, non-interactive, contextual
```

### Layer 0: Background

The deepest layer. Background elements are:
- Furthest from the user
- Least important
- Supporting context
- Non-interactive

**Architectural role:** The background is the foundation upon which all other layers are built. It provides the spatial context that gives meaning to everything else. Without a background, objects would float in an undefined void.

**Elements at this layer:** Page backgrounds, decorative patterns, ambient imagery, watermarks

**Properties:**
- Shadow: None (the background is the lowest point)
- Opacity: 60-80% (receded, not dominant)
- Blur: None (the background is the reference point for focus)
- Interactivity: None (the background cannot be clicked or focused)

### Layer 1: Content

The base content layer. Content elements are:
- The primary content of the view
- Read-only or informational
- The reason the user is here
- Scrollable with the view

**Architectural role:** Content is the purpose of the interface. Everything else—the background, the navigation, the controls—exists to present content. Content is the architectural core that justifies the existence of all other layers.

**Elements at this layer:** Article text, images, data, lists, tables, media

**Properties:**
- Shadow: None (content is grounded in the background)
- Opacity: 90-100% (clear and legible)
- Blur: None (content must be sharp and readable)
- Interactivity: Read-only (content is consumed, not manipulated)

### Layer 2: Inline

Elements that exist within content. Inline elements are:
- Part of the content flow
- Locally interactive
- Supporting the main content
- Scrolling with content

**Architectural role:** Inline elements are the interactive components within content. They provide the controls that allow users to manipulate content without leaving the content layer. Inline elements are architecturally subordinate to content.

**Elements at this layer:** Inline buttons, embedded inputs, expandable sections, inline links

**Properties:**
- Shadow: None (inline elements are embedded in content)
- Opacity: 100% (inline elements must be clearly visible)
- Blur: None (inline elements must be sharp and clickable)
- Interactivity: Local (inline elements affect only their immediate context)

### Layer 3: Sticky

Elements that stick to the viewport. Sticky elements are:
- Persistently visible
- Contextually relevant
- Not part of the content flow
- Anchored to the viewport

**Architectural role:** Sticky elements provide persistent navigation and context. They are architectural anchors that remain visible regardless of scroll position. Sticky elements exist above content because they are not part of the content flow.

**Elements at this layer:** Sticky headers, floating action buttons, fixed navigation, scroll-to-top buttons

**Properties:**
- Shadow: Subtle (slight elevation above content)
- Opacity: 100% (sticky elements must be clearly visible)
- Blur: None (sticky elements must be sharp and readable)
- Interactivity: Global (sticky elements affect the entire view)

### Layer 4: Overlay

Elements that appear above content. Overlay elements are:
- Temporarily visible
- Requiring focus
- Blocking interaction with content
- Appearing on demand

**Architectural role:** Overlay elements are temporary architectural intrusions. They appear above content to provide additional information or controls, then disappear when no longer needed. Overlays are architecturally temporary.

**Elements at this layer:** Dropdowns, popovers, tooltips, context menus, date pickers

**Properties:**
- Shadow: Medium (clearly elevated above content)
- Opacity: 100% (overlays must be clearly visible)
- Blur: None (overlays must be sharp and readable)
- Interactivity: Focused (overlays capture all interaction until dismissed)

### Layer 5: Modal

Elements that take over the viewport. Modal elements are:
- Requiring immediate attention
- Blocking all other interaction
- Dismissing other overlays
- Demanding focus

**Architectural role:** Modals are the most severe architectural intrusion. They expand to fill the entire viewport, dim the background, and capture all interaction. Modals are architectural absolutes—they allow no other interaction until dismissed.

**Elements at this layer:** Modal dialogs, confirmation prompts, full-screen editors, alert dialogs

**Properties:**
- Shadow: Prominent (highly elevated above everything)
- Opacity: 100% (modals must be clearly visible)
- Blur: Backdrop only (the background is blurred to focus attention)
- Interactivity: Exclusive (modals capture all interaction)

### Layer 6: System

The deepest layer, beyond application control. System elements are:
- Operating system level
- Beyond the application
- System notifications
- OS-level dialogs

**Architectural role:** System elements exist outside the application's architectural framework. They are not part of the WHITE DIAMOND system—they are part of the operating system that hosts the application.

**Elements at this layer:** System permissions, OS notifications, browser dialogs, OS-level modals

**Properties:**
- Shadow: Defined by the OS (not controlled by the application)
- Opacity: Defined by the OS (not controlled by the application)
- Blur: Defined by the OS (not controlled by the application)
- Interactivity: Defined by the OS (not controlled by the application)

---

## Layer Rules

### Rule 1: Higher Layers Have Higher Priority

Elements on higher layers take precedence over lower layers. A modal (Layer 5) blocks a dropdown (Layer 4), which blocks content (Layer 1), which blocks background (Layer 0).

**Why:** Priority is the architectural expression of hierarchy. Higher layers are architecturally more important—they require more attention, provide more immediate value, and demand more immediate interaction.

### Rule 2: Higher Layers Have Stronger Shadows

The higher the layer, the more prominent the shadow. This reinforces the sense of elevation:

| Layer | Shadow Level | Shadow Specification |
|-------|-------------|---------------------|
| Background (0) | None | — |
| Content (1) | None | — |
| Inline (2) | None | — |
| Sticky (3) | Subtle | 0px 2px 4px rgba(0,0,0,0.1) |
| Overlay (4) | Medium | 0px 4px 8px rgba(0,0,0,0.12) |
| Modal (5) | Prominent | 0px 8px 16px rgba(0,0,0,0.14) |
| System (6) | OS-defined | — |

**Why:** Shadows communicate elevation, and elevation communicates importance. Higher layers are more important, so they have more prominent shadows.

### Rule 3: Higher Layers Have More Contrast

Higher layers should have more visual contrast than lower layers. This draws attention upward:

- Background: Low contrast
- Content: Medium contrast
- Foreground: High contrast

**Why:** Contrast communicates visual importance. High contrast elements draw the eye; low contrast elements recede. By giving higher layers more contrast, the most architecturally important elements are also the most visually prominent.

### Rule 4: Layer Transitions Use Depth Motion

When moving between layers, objects should move through depth:

- **Ascending (content → overlay):** Grow slightly, increase shadow, move toward center
- **Descending (overlay → content):** Shrink slightly, reduce shadow, move away
- **Elevating (content → modal):** Grow more, increase shadow significantly, center
- **De-elevating (modal → content):** Shrink more, reduce shadow significantly

**Why:** Depth motion communicates architectural transitions. When an object moves from one layer to another, it should appear to rise or fall—growing or shrinking, casting more or less shadow. This motion communicates the architectural shift.

### Rule 5: Background Layers Are De-emphasized

When foreground elements are active, background elements should be:
- Reduced opacity (dimmed)
- Reduced saturation (muted)
- Blurred (if appropriate)

**Why:** De-emphasis communicates architectural subordination. When a modal appears, the background fades to signal that it is now architecturally irrelevant. The user's attention should be on the modal, not the background.

---

## Layer Transitions

### Transition Specifications

When objects move between layers, they follow these specifications:

**Ascending (content → overlay):**
- Duration: 300ms
- Easing: Ease-out
- Shadow: Animate from Level 0 to Level 2
- Scale: Animate from 100% to 102%

**Descending (overlay → content):**
- Duration: 300ms
- Easing: Ease-in
- Shadow: Animate from Level 2 to Level 0
- Scale: Animate from 102% to 100%

**Elevating (content → modal):**
- Duration: 400ms
- Easing: Ease-out
- Shadow: Animate from Level 0 to Level 3
- Scale: Animate from 100% to 105%

**De-elevating (modal → content):**
- Duration: 400ms
- Easing: Ease-in
- Shadow: Animate from Level 3 to Level 0
- Scale: Animate from 105% to 100%

### Backdrop Behavior

When a modal appears, the backdrop should:
- Dim to 60% opacity
- Blur to 8px (if supported)
- Block all interaction with lower layers
- Animate in sync with the modal

**Why:** The backdrop communicates that lower layers are temporarily inactive. The dimming and blurring focus attention on the modal while maintaining spatial awareness of the content below.

---

## Layer Application Patterns

### Card Layering

Cards exist at different layers based on context:
- **Content card:** Layer 1, no shadow (part of content flow)
- **Sidebar card:** Layer 2, subtle shadow (locally interactive)
- **Floating card:** Layer 3, medium shadow (persistent)
- **Popup card:** Layer 4, prominent shadow (temporary overlay)

### Navigation Layering

Navigation exists at different layers:
- **Inline links:** Layer 1, no special treatment
- **Sticky nav:** Layer 3, subtle shadow
- **Dropdown menu:** Layer 4, medium shadow
- **Full navigation overlay:** Layer 5, prominent shadow

### Form Layering

Form elements exist at different layers:
- **Inline input:** Layer 2, no shadow
- **Sticky form header:** Layer 3, subtle shadow
- **Dropdown select:** Layer 4, medium shadow
- **Form modal:** Layer 5, prominent shadow

---

## Accessibility Considerations

### Reduced Motion

For users with reduced motion preferences:
- Replace depth motion with opacity change
- Maintain layer hierarchy through static visual cues
- Preserve shadow differences without animating them

### Screen Readers

Screen readers must communicate layer context:
- Modals should announce their elevated status
- Overlays should indicate they are temporary
- Sticky elements should indicate their persistent nature

### Keyboard Navigation

Layer transitions must maintain keyboard focus:
- Focus must move to the new layer when ascending
- Focus must return to the previous layer when descending
- Focus traps must be established at modal and overlay layers

---

## See Also

- [Depth Perception](depth-perception.md) — How depth is communicated visually
- [Object Structure](object-structure.md) — How objects are structured within layers
- [Appearance Sequence](appearance-sequence.md) — How objects enter and exit layers
- [Animation Principles](../motion/animation-principles.md) — How motion communicates layer transitions
- [Component Philosophy](../components/component-philosophy.md) — Why components exist at specific layers
- [Border System](../tokens/border-system.md) — Border definitions for layer communication
