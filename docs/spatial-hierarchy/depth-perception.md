# Depth Perception

## Why This Matters

Depth communicates hierarchy, focus, and relationship. Without depth, all elements exist on the same plane, making it impossible to distinguish foreground from background, primary from secondary, or active from inactive. Depth is the third dimension of spatial architecture—it transforms a flat screen into a layered environment where objects exist at different elevations.

In the WHITE DIAMOND system, depth is not merely a visual effect—it is an architectural property that communicates spatial relationships. Every object exists at a specific depth, and that depth tells users whether the object is permanent or temporary, active or passive, important or contextual.

## The Principle of Spatial Layers

Digital interfaces have depth, even on 2D screens. Depth is communicated through visual cues that simulate three-dimensional space. WHITE DIAMOND defines layers from back to front—each layer has specific architectural properties that determine how objects within it behave and interact.

### Layer 0: Background

The deepest layer. Content here is:
- Furthest from the user
- Least important
- Supporting context
- Non-interactive

**Examples:** Page backgrounds, decorative patterns, ambient imagery

**Architectural role:** The background is the foundation upon which all other layers are built. It provides the spatial context that gives meaning to everything else. Without a background, objects would float in an undefined void—the background anchors them in space.

**Properties:**
- **Shadow:** None (the background is the lowest point)
- **Opacity:** 60-80% (receded, not dominant)
- **Blur:** None (the background is the reference point for focus)
- **Interactivity:** None (the background cannot be clicked or focused)

### Layer 1: Content

The base layer. Content here is:
- The primary content of the view
- Read-only or informational
- The reason the user is here
- Scrollable with the view

**Examples:** Article text, images, data, lists

**Architectural role:** Content is the purpose of the interface. Everything else—the background, the navigation, the controls—exists to present content. Content is the architectural core that justifies the existence of all other layers.

**Properties:**
- **Shadow:** None (content is grounded in the background)
- **Opacity:** 90-100% (clear and legible)
- **Blur:** None (content must be sharp and readable)
- **Interactivity:** Read-only (content is consumed, not manipulated)

### Layer 2: Inline

Elements that exist within content. Content here is:
- Part of the content flow
- Locally interactive
- Supporting the main content
- Scrolling with content

**Examples:** Inline buttons, embedded inputs, expandable sections

**Architectural role:** Inline elements are the interactive components within content. They provide the controls that allow users to manipulate content without leaving the content layer. Inline elements are architecturally subordinate to content—they exist within it and serve it.

**Properties:**
- **Shadow:** None (inline elements are embedded in content)
- **Opacity:** 100% (inline elements must be clearly visible)
- **Blur:** None (inline elements must be sharp and clickable)
- **Interactivity:** Local (inline elements affect only their immediate context)

### Layer 3: Sticky

Elements that stick to the viewport. Elements here are:
- Persistently visible
- Contextually relevant
- Not part of the content flow
- Anchored to the viewport

**Examples:** Sticky headers, floating action buttons, fixed navigation

**Architectural role:** Sticky elements provide persistent navigation and context. They are architectural anchors that remain visible regardless of scroll position. Sticky elements exist above content because they are not part of the content flow—they are structural elements that frame the content.

**Properties:**
- **Shadow:** Subtle (slight elevation above content)
- **Opacity:** 100% (sticky elements must be clearly visible)
- **Blur:** None (sticky elements must be sharp and readable)
- **Interactivity:** Global (sticky elements affect the entire view)

### Layer 4: Overlay

Elements that appear above content. Elements here are:
- Temporarily visible
- Requiring focus
- Blocking interaction with content
- Appearing on demand

**Examples:** Dropdowns, popovers, tooltips

**Architectural role:** Overlay elements are temporary architectural intrusions. They appear above content to provide additional information or controls, then disappear when no longer needed. Overlays are architecturally temporary—they exist only as long as they are needed, then return to their spatial origin.

**Properties:**
- **Shadow:** Medium (clearly elevated above content)
- **Opacity:** 100% (overlays must be clearly visible)
- **Blur:** None (overlays must be sharp and readable)
- **Interactivity:** Focused (overlays capture all interaction until dismissed)

### Layer 5: Modal

Elements that take over the viewport. Elements here are:
- Requiring immediate attention
- Blocking all other interaction
- Dismissing other overlays
- Demanding focus

**Examples:** Modal dialogs, confirmation prompts, full-screen editors

**Architectural role:** Modals are the most severe architectural intrusion. They expand to fill the entire viewport, dim the background, and capture all interaction. Modals are architectural absolutes—they allow no other interaction until dismissed.

**Properties:**
- **Shadow:** Prominent (highly elevated above everything)
- **Opacity:** 100% (modals must be clearly visible)
- **Blur:** Backdrop only (the background is blurred to focus attention)
- **Interactivity:** Exclusive (modals capture all interaction)

### Layer 6: System

The deepest layer. Elements here are:
- Operating system level
- Beyond the application
- System notifications
- OS-level dialogs

**Examples:** System permissions, OS notifications, browser dialogs

**Architectural role:** System elements exist outside the application's architectural framework. They are not part of the WHITE DIAMOND system—they are part of the operating system that hosts the application. System elements are architecturally untouchable—the application cannot control their behavior or appearance.

**Properties:**
- **Shadow:** Defined by the OS (not controlled by the application)
- **Opacity:** Defined by the OS (not controlled by the application)
- **Blur:** Defined by the OS (not controlled by the application)
- **Interactivity:** Defined by the OS (not controlled by the application)

## Depth Cues

### Size Scaling

Larger objects feel closer. Smaller objects feel farther away. WHITE DIAMOND uses subtle size differences to communicate depth:
- **Foreground elements:** 100% scale
- **Midground elements:** 98-100% scale
- **Background elements:** 95-98% scale

**Why:** Size is the most primal depth cue. In the real world, objects that are closer appear larger. This cue is so strong that even subtle size differences create a sense of depth. However, size differences must be subtle—exaggerated size differences create visual instability and break the architectural framework.

**Architectural principle:** Size scaling is used to communicate relative depth, not absolute depth. A foreground object at 100% and a background object at 95% feel different in depth, but they are both architecturally valid objects. The size difference communicates hierarchy, not importance.

### Shadow Depth

Shadows communicate elevation. More shadow means higher elevation:
- **Level 0 (no shadow)** — Flat on surface
- **Level 1 (subtle)** — Slightly elevated (0-2px offset, 0-4px blur)
- **Level 2 (medium)** — Moderately elevated (2-4px offset, 4-8px blur)
- **Level 3 (prominent)** — Significantly elevated (4-8px offset, 8-16px blur)
- **Level 4 (dramatic)** — Floating above surface (8-16px offset, 16-32px blur)

**Why:** Shadows are the most explicit depth cue. They communicate that an object is elevated above the surface below it. The size and softness of the shadow communicate the height of the elevation—a small, sharp shadow means the object is close to the surface; a large, soft shadow means the object is far above it.

**Architectural principle:** Shadows are architectural tools, not decorative effects. Every shadow communicates a specific elevation, and that elevation must be consistent with the object's architectural role. A modal with a subtle shadow is architecturally inconsistent—it claims to be elevated but does not look elevated.

### Opacity Depth

Transparent objects feel farther away. Opaque objects feel closer:
- **Background:** 60-80% opacity
- **Content:** 90-100% opacity
- **Foreground:** 100% opacity

**Why:** Opacity communicates distance through atmospheric perspective. In the real world, objects that are farther away appear less saturated and less opaque due to atmospheric haze. This cue is subtle but effective—it creates a sense of depth without requiring size or shadow changes.

**Architectural principle:** Opacity is used to de-emphasize background elements and emphasize foreground elements. When a modal appears, the background fades to 60% opacity, signaling that it is now architecturally subordinate. This opacity change is not merely visual—it communicates a shift in architectural hierarchy.

### Blur Depth

Blurred objects feel out of focus (farther away). Sharp objects feel in focus (closer):
- **Background blur:** For deep background (0-2px blur)
- **Content blur:** For overlay backdrop (4-8px blur)
- **Foreground blur:** For frosted glass effects (8-16px blur)

**Why:** Blur communicates focus. In the real world, the human eye focuses on objects at a specific distance, and objects at other distances appear blurred. This cue is so strong that blurred objects immediately feel distant, even if they are the same size and opacity as sharp objects.

**Architectural principle:** Blur is used to create depth of field. When a modal appears, the background blurs to signal that it is out of focus. This blur is not merely visual—it communicates that the background is architecturally irrelevant at this moment. The user's attention should be on the modal, not the background.

## Depth Rules

### Rule 1: Higher Layers Have Higher Priority

Elements on higher layers take precedence over lower layers. A modal blocks a dropdown, which blocks content, which blocks background.

**Why:** Priority is the architectural expression of hierarchy. Higher layers are architecturally more important—they require more attention, provide more immediate value, and demand more immediate interaction. This priority is communicated through layering, which visually places higher elements above lower ones.

**Architectural principle:** Priority is not merely visual—it is behavioral. When a modal appears, it blocks all interaction with lower layers. This blocking is not merely a visual effect—it is an architectural constraint that ensures the user focuses on the most important element.

### Rule 2: Higher Layers Have Stronger Shadows

The higher the layer, the more prominent the shadow. This reinforces the sense of elevation:
- **Content:** No shadow
- **Sticky:** Subtle shadow
- **Overlay:** Medium shadow
- **Modal:** Prominent shadow

**Why:** Shadows communicate elevation, and elevation communicates importance. Higher layers are more important, so they should have more prominent shadows. This consistency reinforces the architectural hierarchy—users can look at the shadow to understand the elevation, and look at the elevation to understand the importance.

**Architectural principle:** Shadow strength is proportional to architectural importance. A modal's shadow is not merely decorative—it is an architectural signal that says "this is the most important element in the interface right now."

### Rule 3: Higher Layers Have More Contrast

Higher layers should have more visual contrast than lower layers. This draws attention upward:
- **Background:** Low contrast
- **Content:** Medium contrast
- **Foreground:** High contrast

**Why:** Contrast communicates visual importance. High contrast elements draw the eye; low contrast elements recede. By giving higher layers more contrast, we ensure that the most architecturally important elements are also the most visually prominent.

**Architectural principle:** Contrast is an architectural tool, not a decorative effect. Every contrast decision should communicate a specific architectural relationship. High contrast means "look here first"; low contrast means "this is background."

### Rule 4: Layer Transitions Use Depth Motion

When moving between layers, objects should move through depth:
- **Ascending** — Grow slightly, increase shadow, move to center
- **Descending** — Shrink slightly, reduce shadow, move away

This communicates vertical movement through layers.

**Why:** Depth motion communicates architectural transitions. When an object moves from the content layer to the overlay layer, it should appear to rise—growing slightly, casting a larger shadow, and moving toward the center. This motion communicates the architectural shift from "content" to "overlay."

**Architectural principle:** Depth motion is not merely visual—it is architectural storytelling. The motion tells users that the object is changing its architectural role. A button that expands into a dropdown is not merely animating—it is ascending from the inline layer to the overlay layer.

### Rule 5: Background Layers Are De-emphasized

When foreground elements are active, background elements should be:
- Reduced opacity (dimmed)
- Reduced saturation (muted)
- Blurred (if appropriate)

This focuses attention on the active layer.

**Why:** De-emphasis communicates architectural subordination. When a modal appears, the background fades to signal that it is now architecturally irrelevant. The user's attention should be on the modal, not the background. This de-emphasis is not merely visual—it is an architectural statement that says "ignore this for now."

**Architectural principle:** De-emphasis is not erasure. The background still exists—it is still architecturally valid, it is still part of the interface. It has merely been de-emphasized to focus attention on the more important foreground. When the foreground is dismissed, the background returns to its full prominence.

## Depth in Practice

### Card Elevation

Cards exist at different depths based on context:
- **Content card** — Layer 1, no shadow
- **Sidebar card** — Layer 2, subtle shadow
- **Floating card** — Layer 3, medium shadow
- **Popup card** — Layer 4, prominent shadow

**Architectural logic:** Card elevation communicates architectural role. A content card is part of the content flow—it has no shadow because it is grounded in the background. A popup card is an overlay—it has a prominent shadow because it is elevated above the content.

### Modal Depth

Modals exist at the highest interactive layer:
- **Backdrop** — Layer 4, dimmed
- **Modal content** — Layer 5, prominent shadow
- **Modal within modal** — Layer 6, dramatic shadow

**Architectural logic:** Modal depth communicates architectural severity. The backdrop dims the background to focus attention; the modal content casts a prominent shadow to signal elevation; a modal within a modal casts a dramatic shadow to signal extreme elevation.

### Navigation Depth

Navigation exists at different depths:
- **Inline links** — Layer 1, no special treatment
- **Sticky nav** — Layer 3, subtle shadow
- **Dropdown menu** — Layer 4, medium shadow
- **Full navigation** — Layer 5, prominent shadow

**Architectural logic:** Navigation depth communicates architectural permanence. Inline links are part of the content flow—they have no special treatment because they are subordinate to content. A full navigation is an architectural intrusion—it has a prominent shadow because it is elevated above everything else.

## Depth Specifications

### Elevation Scale

The WHITE DIAMOND elevation scale defines specific depth values for each architectural layer:

| Layer | Elevation | Shadow | Opacity | Blur |
|-------|-----------|--------|---------|------|
| Background | 0px | None | 60-80% | 0px |
| Content | 0px | None | 90-100% | 0px |
| Inline | 0px | None | 100% | 0px |
| Sticky | 4px | Subtle | 100% | 0px |
| Overlay | 8px | Medium | 100% | 0px |
| Modal | 16px | Prominent | 100% | Backdrop: 8px |
| System | 32px | OS-defined | OS-defined | OS-defined |

### Shadow Specification

Each elevation level has specific shadow parameters:

**Level 0 (0px elevation):**
- No shadow
- Object is flat on the surface

**Level 1 (4px elevation):**
- Offset: 0px 2px
- Blur: 4px
- Spread: 0px
- Color: rgba(0, 0, 0, 0.1)

**Level 2 (8px elevation):**
- Offset: 0px 4px
- Blur: 8px
- Spread: 0px
- Color: rgba(0, 0, 0, 0.12)

**Level 3 (16px elevation):**
- Offset: 0px 8px
- Blur: 16px
- Spread: 0px
- Color: rgba(0, 0, 0, 0.14)

**Level 4 (32px elevation):**
- Offset: 0px 16px
- Blur: 32px
- Spread: 0px
- Color: rgba(0, 0, 0, 0.16)

### Depth Transition Specifications

When objects move between layers, they follow these transition specifications:

**Ascending (content → overlay):**
- Duration: 300ms
- Easing: Ease-out
- Shadow: Animate from Level 0 to Level 2
- Scale: Animate from 100% to 102%
- Opacity: Animate from 100% to 100% (no change)

**Descending (overlay → content):**
- Duration: 300ms
- Easing: Ease-in
- Shadow: Animate from Level 2 to Level 0
- Scale: Animate from 102% to 100%
- Opacity: Animate from 100% to 100% (no change)

**Elevating (content → modal):**
- Duration: 400ms
- Easing: Ease-out
- Shadow: Animate from Level 0 to Level 3
- Scale: Animate from 100% to 105%
- Opacity: Animate from 100% to 100% (no change)

**De-elevating (modal → content):**
- Duration: 400ms
- Easing: Ease-in
- Shadow: Animate from Level 3 to Level 0
- Scale: Animate from 105% to 100%
- Opacity: Animate from 100% to 100% (no change)

## See Also

- [Object Structure](object-structure.md) — How objects are structured
- [Space Behavior](../space-physics/space-behavior.md) — How space responds to objects
- [Animation Principles](../motion/animation-principles.md) — How motion communicates depth
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Border System](../tokens/border-system.md) — Border definitions for depth
- [Token System](../tokens/token-system.md) — Design token architecture
- [Appearance Sequence](appearance-sequence.md) — How objects enter and exit layers
