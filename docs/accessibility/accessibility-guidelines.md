# Accessibility Guidelines

## Why Accessibility Is Architecture

Accessibility is not a feature. It is not an add-on. It is not charity. Accessibility is a property of interfaces that are fundamentally well-designed. An inaccessible interface is a broken building—a structure that excludes people from its space. WHITE DIAMOND treats accessibility as a structural requirement: if an interface cannot be navigated, understood, and operated by every human being, it has failed as architecture.

The screen is a [window into infinite space](../space-physics/screen-as-window.md). Every element within that space is an [architectural construction](../space-physics/object-existence.md) with mass, boundaries, and hierarchy. Accessibility ensures that every person can enter this space, perceive its structures, and move through it with control. Without accessibility, the architectural space ceases to exist for large populations of users.

## The Architectural Principle of Universal Access

Every WHITE DIAMOND interface must work for every human being. This is not aspirational—it is mandatory. The interface must accommodate:

- **Blind users** — Who experience space through speech and braille, perceiving the [three-layer hierarchy](../spatial-hierarchy/layer-system.md) as sequential audio announcements
- **Low vision users** — Who require magnification or high contrast to perceive [borders and surfaces](../geometry/border-principles.md)
- **Deaf users** — Who require visual equivalents for all auditory information
- **Motor-impaired users** — Who navigate space through keyboard, switch, voice, or eye tracking rather than direct pointing
- **Cognitively different users** — Who require consistent [spatial physics](../space-physics/space-behavior.md) and predictable behavior
- **Elderly users** — Who may experience age-related limitations in vision, hearing, motor control, or cognition
- **Situational limitations** — Bright sunlight, noisy environments, one-handed use, gloved hands

Accessibility is not about disability. It is about the architectural integrity of the interface. A building with stairs but no ramp is a broken building. An interface without keyboard support is a broken interface.

## WCAG Compliance and Spatial Physics

WHITE DIAMOND targets WCAG 2.1 Level AA compliance. However, WCAG compliance alone is insufficient. WHITE DIAMOND interfaces must satisfy both WCAG requirements and the spatial physics principles that govern all WHITE DIAMOND constructions.

### Perceivable

Every element in the architectural space must be perceivable through multiple sensory channels. This maps directly to the WHITE DIAMOND principle that [objects have mass and boundaries](../space-physics/object-existence.md):

**Text alternatives** — Every image, icon, and non-text element must have a text alternative. An image without alt text is an architectural object without mass—it exists visually but has no presence in the non-visual space. Alt text is the mass of the object translated to audio.

**Captions** — Audio and video content must have captions. Sound is a dimension of the architectural space. Without captions, this dimension is inaccessible. Captions make the auditory dimension perceivable through reading.

**Adaptable content** — Content must be presentable in different ways without losing information. This requirement emerges from the principle that the screen is a [window into space](../space-physics/screen-as-window.md). The window can be viewed from different angles and distances, but the architectural structures within must remain intact.

**Distinguishable presentation** — Elements must be easy to see and hear. This maps to the WHITE DIAMOND requirement that [borders are everything](../geometry/border-principles.md). Without sufficient contrast or visual distinction, objects lose their boundaries and cease to exist as discrete architectural entities.

### Operable

Every interaction mechanism must be available to all users. This maps directly to the WHITE DIAMOND principle that [absolute control](../philosophy/absolute-control.md) is achieved through predictability:

**Keyboard accessible** — All functionality must be available via keyboard. The keyboard is the primary spatial navigation tool for users who cannot use a pointing device. Keyboard navigation represents [viewport movement](./keyboard-navigation.md) through architectural space.

**Adjustable timing** — Time limits must be adjustable or removable. Time pressure violates the principle of absolute control. A user must be able to explore architectural space at their own pace, examining each object's [three-layer hierarchy](../spatial-hierarchy/layer-system.md) without temporal constraints.

**Seizure safe** — No content must flash more than three times per second. Flashing violates the spatial physics of WHITE DIAMOND. Objects in WHITE DIAMOND space do not flicker—they have persistent mass and boundaries. Flashing suggests material instability, which contradicts the monumentality of architectural construction.

**Navigable structure** — Content must be easy to navigate. Navigation is spatial movement through architectural space. Users must be able to move between objects, understand the [spatial hierarchy](../spatial-hierarchy/layer-system.md), and orient themselves within the space.

### Understandable

Information and operation must be comprehensible. This maps to the WHITE DIAMOND principle that every element is an [architectural construction](../space-physics/object-existence.md) with clear purpose:

**Readable text** — Text must be readable and understandable. Text is content within the [inner surface](../spatial-hierarchy/layer-system.md) of an object. It must be legible and comprehensible to fulfill its architectural purpose.

**Predictable behavior** — The interface must behave predictably. Predictability is the foundation of [absolute control](../philosophy/absolute-control.md). When an interface behaves unexpectedly, users lose their sense of spatial orientation. Every interaction must produce the expected spatial consequence.

**Input assistance** — Users must be helped to avoid and correct mistakes. Errors in WHITE DIAMOND space are architectural failures—they indicate that a user has attempted to place an object in an invalid location or modify an immutable property. Error messages must explain what happened and how to correct the spatial configuration.

### Robust

Content must be robust enough for assistive technology. This maps to the WHITE DIAMOND principle that the interface must survive [different viewing conditions](../space-physics/screen-as-window.md):

**Compatible markup** — Content must work with current and future assistive technologies. The architectural space must be perceivable through any sensory channel—visual, auditory, tactile.

**Semantic structure** — Content must use semantic HTML elements. Semantic elements are the structural beams of the architectural space. They communicate the purpose and hierarchy of each construction to both sighted and non-sighted users.

**Valid markup** — Content must use valid, well-formed markup. Invalid markup is a crack in the architectural foundation. It causes unpredictable behavior in assistive technology, breaking the spatial experience for non-visual users.

## Visual Accessibility Specifications

### Color Independence

Never rely solely on color to convey information. Color is a surface property—the paint on a wall. Without color, the wall still exists because it has mass and boundaries. Information conveyed only through color is information that exists only on the surface, not in the structural depth of the object.

Every status indicator must use multiple visual cues:
- **Color + icon** — Red color plus an error icon conveys error status through both surface and structure
- **Color + text** — Green color plus a "Success" label conveys success through both surface and content
- **Color + pattern** — Color plus a distinct pattern provides redundant visual information
- **Color + position** — Color plus spatial position provides orientation cues

### Contrast Ratios

Contrast ratios define the boundary between objects and their environment. Without sufficient contrast, objects dissolve into the background, losing their existence as architectural entities:

| Element | Minimum Ratio | Reasoning |
|---------|--------------|-----------|
| Normal text | 4.5:1 | Text is content within the [inner surface](../spatial-hierarchy/layer-system.md). It must be legible against its background. |
| Large text | 3:1 | Large text has more mass. Its increased size provides additional boundary definition. |
| UI components | 3:1 | Interactive elements are [objects with mass](../space-physics/object-existence.md). Their boundaries must be clearly distinguishable. |
| Focus indicators | 3:1 | Focus is the user's [presence in space](./keyboard-navigation.md). It must be visible to maintain spatial orientation. |

### Text Resizing

Text must be resizable to 200% without loss of content or functionality. Use relative units (rem, em) not absolute units (px). The screen is a [window into space](../space-physics/screen-as-window.md). When the window is enlarged, the architectural structures within must scale proportionally. Text that breaks at 200% zoom is a structure that collapses when the window expands.

Layout must adapt to larger text. The [three-layer hierarchy](../spatial-hierarchy/layer-system.md) must remain intact: the Physical Boundary must contain the Inner Surface, which must contain the Content. At no magnification level should content overflow or layer boundaries break.

### Motion Sensitivity

Motion in WHITE DIAMOND serves [physics](../motion/animation-principles.md). It exists to demonstrate spatial relationships—how objects move through space, how surfaces expand and contract, how focus travels from one object to another. Motion that does not serve physics is prohibited.

For motion sensitivity:
- Provide a reduced motion option that respects `prefers-reduced-motion`
- No content may flash more than 3 times per second
- All animations must be pausable or stoppable
- Motion must communicate spatial relationships, not decorative transitions

## Keyboard Accessibility Specifications

Keyboard accessibility is the foundation of non-pointer interaction. See [Keyboard Navigation](./keyboard-navigation.md) for the complete specification.

### Focus Management

All interactive elements must be focusable. Focus represents the user's [presence in architectural space](../space-physics/object-existence.md). A user without focus is a ghost—present in the space but unable to interact with it.

Focus order must be logical and intuitive:
- Matches the visual reading order (left-to-right, top-to-bottom in LTR layouts)
- Follows the [spatial hierarchy](../spatial-hierarchy/layer-system.md) from outer to inner layers
- Never skips elements (focus cannot teleport across architectural space)
- Never gets trapped unexpectedly (the user must always be able to move through space)

### Focus Indicators

Focus indicators are the visual representation of the user's presence. They must be:
- **Always visible** — A user who cannot see their focus is lost in architectural space
- **High contrast** — Minimum 3:1 ratio against adjacent colors
- **Consistent** — Same indicator style for same types of objects throughout the interface
- **Outline-based** — Use outline, not background changes, to avoid layout shift

## Screen Reader Accessibility Specifications

Screen readers translate the visual architectural space into audio. See [Screen Readers](./screen-readers.md) for the complete specification.

### Semantic HTML

Semantic HTML elements are the structural beams of the architectural space. They communicate the purpose and hierarchy of each construction:

- **Heading hierarchy** — `<h1>` through `<h6>` define the document's structural skeleton. The heading hierarchy is the architectural blueprint—the frame that holds all other elements.
- **Landmark elements** — `<nav>`, `<main>`, `<aside>`, `<footer>` define the major regions of the architectural space. They are the load-bearing walls that divide the space into navigable zones.
- **List elements** — `<ul>`, `<ol>`, `<dl>` communicate group relationships. They are the columns and rows that organize content into structural patterns.
- **Table elements** — `<table>`, `<th>`, `<td>` communicate data relationships. They are the grid systems that structure information within the architectural space.

### ARIA Labels

ARIA labels provide the audio equivalent of visual properties:

- **`aria-label`** — Names an element. This is the object's title, its architectural designation.
- **`aria-describedby`** — Provides additional description. This is the detailed specification of the architectural construction.
- **`aria-live`** — Announces dynamic content. This is the sound of architectural change—objects appearing, disappearing, or transforming in space.
- **`aria-hidden`** — Hides decorative elements. Decorative elements have no structural purpose; they are ornamentation, not architecture.

### Content Structure

Content must be organized in a logical reading order that matches the [spatial hierarchy](../spatial-hierarchy/layer-system.md):

- Logical reading order matches visual layout
- Meaningful link text describes the destination, not the action
- Descriptive form labels explain the purpose of each input
- Clear error messages explain what went wrong and how to fix it

## Motor Accessibility Specifications

Motor accessibility ensures that all interactions can be performed through alternative input methods:

### Touch Targets

Every interactive element must have a minimum touch target size of 44×44 points. This minimum size exists because:
- It matches the average fingertip size
- Adequate spacing between targets prevents accidental activation
- No hover-only interactions are permitted (hover is not available on touch devices)
- Alternatives to precise gestures must be provided (pinch, swipe, etc.)

### Timing

- No time limits, or time limits must be adjustable
- No rapid sequential interactions required
- No simultaneous multi-touch required
- Adequate hold times for long-press interactions
- All interactions must accommodate slower input speeds

### Input Methods

The interface must support multiple input methods simultaneously:
- Keyboard navigation (see [Keyboard Navigation](./keyboard-navigation.md))
- Voice control (elements must have accessible names that match visible labels)
- Switch access (sequential navigation through focusable elements)
- Eye tracking (large, well-spaced interactive elements)

## Cognitive Accessibility Specifications

Cognitive accessibility ensures that the architectural space is comprehensible:

### Clear Language

- Use simple, direct language in all user-facing text
- Use consistent terminology throughout the interface (same concept, same word)
- Provide clear instructions before complex interactions
- Avoid jargon unless the audience is known to understand it

### Consistent Layout

- Navigation must be in the same position on every page
- Interactive elements must be in predictable locations
- The [visual hierarchy](../spatial-hierarchy/layer-system.md) must be consistent across all views
- No unexpected changes to layout or behavior without user initiation

### Error Prevention

- Confirm before destructive actions (delete, discard, send)
- Validate input before submission
- Provide clear error messages that explain the problem and suggest correction
- Show current state at all times (users must know where they are in the architectural space)

### Memory Support

- Never rely solely on memory
- Show current state (position in navigation, form progress, etc.)
- Provide breadcrumbs showing the path through architectural space
- Save user progress in multi-step processes

## Accessibility Testing

### Automated Testing

Automated tools catch structural violations—cracks in the architectural foundation:

- **axe** — Comprehensive accessibility testing that validates structural requirements
- **Lighthouse** — Performance and accessibility audit that checks for common violations
- **WAVE** — Web accessibility evaluation that visualizes accessibility issues
- **Pa11y** — Automated accessibility testing for continuous integration

### Manual Testing

Manual testing catches experiential failures that automated tools miss:

- **Keyboard only** — Navigate the entire interface with keyboard only. Can you move through all architectural space? Can you reach every object? Can you operate every mechanism?
- **Screen reader** — Test with NVDA, VoiceOver, or JAWS. Can you perceive the architectural space through audio? Do objects have names, descriptions, and states?
- **Zoom** — Test at 200% zoom. Does the architectural space scale correctly? Do layers remain intact?
- **High contrast** — Test with high contrast mode. Do object boundaries remain visible?
- **Reduced motion** — Test with reduced motion enabled. Do spatial relationships remain clear without animation?

### User Testing

Test with users who have disabilities. Users with disabilities are experts in non-standard interaction patterns. They will reveal architectural failures that standard testing misses:

- **Blind users** — Screen reader testing reveals whether the audio representation of architectural space is coherent
- **Low vision users** — Magnification testing reveals whether architectural boundaries survive scaling
- **Motor-impaired users** — Keyboard and switch testing reveals whether all objects are reachable and operable
- **Cognitive differences** — Simplified interface testing reveals whether the architectural space is comprehensible

## See Also

- [Keyboard Navigation](./keyboard-navigation.md) — Non-pointer interaction through architectural space
- [Screen Readers](./screen-readers.md) — Non-visual perception of architectural space
- [Color System](../tokens/color-system.md) — Accessible color definitions and contrast ratios
- [Animation Principles](../motion/animation-principles.md) — Motion that serves spatial physics
- [Prohibited Animations](../motion/prohibited-animations.md) — Motion that violates spatial physics
- [Object Existence](../space-physics/object-existence.md) — How objects exist in WHITE DIAMOND space
- [Screen as Window](../space-physics/screen-as-window.md) — The screen as a viewport into infinite space
- [Layer System](../spatial-hierarchy/layer-system.md) — The three-layer hierarchy of every object
