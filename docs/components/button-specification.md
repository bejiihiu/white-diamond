# Button Specification

## Why This Matters

Buttons are the primary mechanism for triggering actions in the WHITE DIAMOND spatial environment. A button is not a visual decoration—it is an architectural construction with mass, boundaries, and physical responses to interaction. Without consistent button behavior, users cannot predict what will happen when they apply force to an interface element. The button specification ensures predictable, accessible, and spatially coherent action triggers.

## What Is a Button?

A button is an interactive architectural construction that triggers an action when activated. In WHITE DIAMOND, a button is:

- **A physical object** — It has mass, occupies space, and responds to force
- **An action trigger** — It converts user intention into system response
- **A spatial element** — It exists at a specific position with defined boundaries
- **A behavioral contract** — It responds to interactions according to predictable physics
- **A communicative form** — Its structure communicates its purpose

Buttons are not links. Links navigate; buttons act. A link is a path; a button is a construction. This distinction is fundamental to spatial design.

## The Three-Layer Hierarchy for Buttons

### Physical Boundary

The button's outermost container defines its footprint in space:

- **Border** — The explicit edge that separates the button from surrounding space. Without a border, the button does not exist. The border is always visible, always defined, and always present.
- **Dimensions** — The button's width and height define how much space it occupies. Minimum touch target: 44×44 points. Minimum click target: 24×24 pixels.
- **Mass expression** — Border weight communicates the button's importance. Thicker borders suggest greater mass.
- **Elevation** — The button exists at a specific height above the base plane. Shadows indicate this elevation.

### Inner Surface

The region between the boundary and the content:

- **Background** — The button's surface treatment. Always present, even when transparent.
- **Padding** — The space between the boundary and the content. Consistent across all buttons of the same type.
- **Visual treatment** — Color, texture, and other surface properties that communicate the button's state.
- **Transition zone** — The area where the boundary meets the surface, creating the button's visual weight.

### Content

The actual information within the button:

- **Label** — Text describing the action. Always present, always descriptive. "Submit Form" not "OK".
- **Icon** — Optional visual representation of the action. Must be positioned consistently.
- **Loading indicator** — Replaces content during processing. Maintains the button's spatial footprint.
- **Badge** — Optional count or status indicator. Must not obscure the label.

## Button Types

### Primary Button

The main action on a page or section—the most massive construction:

- **Visual** — High contrast, prominent, thickest border weight
- **Mass** — Greatest elevation, deepest shadow
- **Placement** — One per section maximum. Multiple primary buttons compete for spatial priority.
- **Use** — Submit, confirm, save, continue
- **Example** — "Submit Form", "Add to Cart"
- **Spatial behavior** — Occupies the most prominent position, attracts the most attention

### Secondary Button

Supporting actions—medium-mass constructions:

- **Visual** — Medium contrast, less prominent, medium border weight
- **Mass** — Medium elevation, medium shadow
- **Placement** — Multiple per section acceptable
- **Use** — Cancel, skip, secondary actions
- **Example** — "Cancel", "Skip", "Save Draft"
- **Spatial behavior** — Occupies supporting positions, complements primary actions

### Tertiary Button

Minimal actions—light-mass constructions:

- **Visual** — Low contrast, subtle, thinnest border weight
- **Mass** — Low elevation, minimal shadow
- **Placement** — Multiple acceptable
- **Use** — Less important actions
- **Example** — "Learn More", "Show Details"
- **Spatial behavior** — Occupies background positions, recedes when not needed

### Ghost Button

Actions within content—borderless constructions:

- **Visual** — No background, border only, minimal visual weight
- **Mass** — Minimal elevation, no shadow
- **Placement** — Within content areas where visual weight would disrupt flow
- **Use** — Actions that don't break content flow
- **Example** — "Read More", "View All"
- **Spatial behavior** — Blends with content, becomes part of the content's spatial structure

### Icon Button

Actions represented by icons—symbolic constructions:

- **Visual** — Icon only (with accessible label), square dimensions
- **Mass** — Variable, depends on icon size
- **Placement** — Where space is limited, icon communicates action without text
- **Use** — Simple, well-known actions
- **Example** — Close, search, settings
- **Spatial behavior** — Compact, efficient, communicates through symbol

### Link Button

Actions that look like links—text-based constructions:

- **Visual** — Text-only, underlined, minimal visual weight
- **Mass** — Minimal elevation, no shadow
- **Placement** — Within text content, contextual actions
- **Use** — Actions that are contextual to surrounding content
- **Example** — "Forgot password?", "Create account"
- **Spatial behavior** — Integrates with text flow, becomes part of content's spatial structure

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

- **Label** — Text describing the action. Always visible, always descriptive.
- **Clickable area** — Minimum 44×44 points (touch) or 24×24 pixels (click). The area is defined by the physical boundary.
- **Physical boundary** — Explicit border that defines the button's footprint. Without it, the button does not exist.

### Optional Elements

- **Icon** — Visual representation of the action. Must be positioned consistently within the inner surface.
- **Loading indicator** — Shows processing state. Replaces content but maintains spatial footprint.
- **Badge** — Shows count or status. Must not obscure the label or icon.

## Button States

### Default State

The button's resting appearance—its state after all interactions:

- **Visual** — Standard appearance with defined border, background, and content
- **Mass** — Base elevation, standard shadow
- **Functional** — Ready for interaction, waiting for applied force
- **Spatial** — At rest, occupying its designated position
- **Accessible** — Visible, focusable, and clearly interactive

### Hover State

When the cursor approaches—the spatial signal that interaction is imminent:

- **Visual** — Slight color shift (darker or lighter), border color intensifies
- **Mass** — Elevation increases slightly, shadow deepens
- **Cursor** — Changes to pointer, indicating interactivity
- **Spatial** — The button lifts slightly, acknowledging the approaching force
- **Accessible** — Indicates interactivity, provides visual feedback

### Active/Pressed State

When the button is being interacted with—the moment of applied force:

- **Visual** — Compressed appearance (scale 0.98), color shifts to pressed state
- **Mass** — Elevation decreases, shadow reduces, button compresses
- **Functional** — Processing interaction, committed to action
- **Spatial** — The button demonstrates physics by compressing under pressure
- **Accessible** — Indicates current action, confirms interaction

### Focus State

When the button has keyboard focus—the spatial indicator of keyboard navigation:

- **Visual** — Focus indicator (2px outline) that is always visible, high contrast focus ring
- **Mass** — Same as default, but highlighted
- **Functional** — Ready for keyboard interaction (Enter or Space to activate)
- **Spatial** — The button is highlighted, indicating its position in the keyboard map
- **Accessible** — Visible focus for keyboard users, never hidden

### Disabled State

When the button is not available—a spatial indication of unavailability:

- **Visual** — Reduced opacity (0.5-0.6), desaturated colors, cursor not-allowed
- **Mass** — Reduced elevation, minimal shadow, button recedes
- **Functional** — Does not respond to interaction, cannot be activated
- **Spatial** — The button indicates it is not part of the active space
- **Accessible** — Indicates unavailability, explains why through context

### Loading State

When the button is processing—a spatial indication of activity:

- **Visual** — Loading spinner replaces content, button maintains size and position
- **Mass** — Maintains elevation, demonstrates ongoing processing
- **Functional** — Not activatable during processing, prevents re-click
- **Spatial** — The button is in a state of transformation, processing input
- **Accessible** — Indicates processing status, shows progress if determinate

### Error State

When the button has encountered a problem—a spatial indication of dysfunction:

- **Visual** — Error color treatment, error message below if applicable
- **Mass** — May reduce elevation, indicating failure
- **Functional** — May prevent further action, indicates problem
- **Spatial** — The button signals distress, demanding attention
- **Accessible** — Communicates error status, explains what went wrong

## Button Appearance Sequence

When a button enters the viewport, it follows the WHITE DIAMOND appearance sequence:

1. **Entry from outside** — The button slides into view from outside the viewport boundary
2. **Boundary establishment** — The physical boundary becomes visible, defining the button's footprint
3. **Surface filling** — The inner surface fills with color and treatment
4. **Content reveal** — The label and optional icon become visible
5. **Elevation settling** — The button settles to its resting elevation, shadow stabilizes

The button never appears from nothing. It always enters from outside, maintaining spatial continuity.

## Button Disappearance Sequence

When a button exits the viewport:

1. **Elevation lift** — The button rises slightly, indicating departure
2. **Content fade** — The label and icon fade, maintaining structure
3. **Surface draining** — The inner surface loses color
4. **Boundary dissolution** — The physical boundary fades
5. **Exit to outside** — The button slides out of the viewport boundary

The button never disappears. It always exits to outside, maintaining spatial continuity.

## Button Timing and Physics

### Timing Specifications

- **Hover response** — 150ms transition for elevation and color changes
- **Active response** — 50ms transition for compression and release
- **Focus response** — Immediate appearance of focus indicator
- **Loading appearance** — Spinner appears after 500ms of processing
- **Error appearance** — Error state appears immediately on failure
- **Timeout** — Error after 30 seconds of no response

### Physics Behavior

- **Inertia** — The button resists movement, then transitions smoothly
- **Momentum** — The button maintains motion during state changes
- **Friction** — Interactions resist movement, then release
- **Gravity** — Related buttons attract, unrelated buttons repel
- **Collision** — Buttons cannot overlap without explicit spatial relationships

## Button Behavior and Feedback

### Activation

Buttons respond to:
- **Click** — Primary activation method, applies force to the button
- **Tap** — Touch device activation, applies pressure
- **Enter key** — Keyboard activation when focused, confirms selection
- **Space key** — Keyboard activation when focused, applies pressure

### Feedback

Button activation produces:
- **Visual feedback** — State change (pressed, loading) that demonstrates physics
- **Haptic feedback** — Vibration on mobile (optional) that confirms interaction
- **Auditory feedback** — Sound (optional, not recommended) that confirms action
- **Result feedback** — Action completes or fails, demonstrating system response

### Timing

Button interactions should be:
- **Immediate** — Visual response within 100ms, demonstrating responsiveness
- **Loading** — Spinner appears after 500ms of processing, demonstrating ongoing work
- **Timeout** — Error after 30 seconds of no response, demonstrating system limits
- **Reset** — Return to default state after action completes, demonstrating completion

## Button Rules

### Rule 1: One Primary Button Per Section

Each section should have at most one primary button. Multiple primary buttons compete for spatial priority and confuse users about what action is most important. The primary button is the most massive construction in its section.

### Rule 2: Labels Describe Actions

Button labels should describe what happens when clicked. "Submit Form" not "OK". "Delete Account" not "Yes". The label is the button's voice—it communicates purpose through structure.

### Rule 3: Buttons Are Clearly Interactive

Buttons must look clickable. They must have:
- **Visual distinction** — Different from static content
- **Affordance** — Visual cues that suggest clickability
- **Consistency** — Similar buttons look similar
- **Size** — Large enough to be easily targeted

A button that doesn't look like a button is not a button—it is a visual suggestion.

### Rule 4: Disabled Buttons Explain Why

When a button is disabled, users should understand why. Use:
- **Tooltip** — Explains why disabled
- **Helper text** — Explains requirement
- **Visual context** — Shows what's missing
- **Error message** — Explains the problem

A disabled button without explanation is a broken construction.

### Rule 5: Loading Buttons Show Progress

When a button is loading:
- **Show spinner** — Indicate processing
- **Maintain size** — Don't resize the button (maintain spatial footprint)
- **Prevent re-click** — Disable during processing (prevent collision)
- **Show progress** — If determinate, show progress (demonstrate temporal physics)

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist as architectural constructions
- [Input Specification](input-specification.md) — Input as data vessel
- [Card Specification](card-specification.md) — Card as content container
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Spatial Hierarchy](../spatial-hierarchy/object-structure.md) — How objects are structured