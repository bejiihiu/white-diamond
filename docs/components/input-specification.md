# Input Specification

## Why This Matters

Inputs are how users provide information to interfaces. In WHITE DIAMOND, an input is not a visual form field—it is an architectural construction that captures data. Without consistent input behavior, users cannot predict how to enter data, what format is expected, or how errors will be communicated. The input specification ensures predictable, accessible, and spatially coherent data entry.

## What Is an Input?

An input is an interactive architectural construction that captures user data. In WHITE DIAMOND, an input is:

- **A data vessel** — It contains and manages user-provided information
- **A spatial container** — It defines a region where data enters the system
- **A conversational element** — It engages in a dialogue with the user
- **A boundary marker** — It defines where user data begins and system data ends
- **A behavioral contract** — It responds to interactions according to predictable physics

Inputs are not buttons. Inputs capture; buttons trigger. An input is a container; a button is a trigger. This distinction is fundamental to spatial design.

## The Three-Layer Hierarchy for Inputs

### Physical Boundary

The input's outermost container defines its footprint in space:

- **Border** — The explicit edge that separates the input from surrounding space. Without a border, the input does not exist. The border is always visible, always defined, and always present.
- **Dimensions** — The input's width and height define how much space it occupies. Minimum touch target: 44×44 points. Minimum click target: 24×24 pixels.
- **Mass expression** — Border weight communicates the input's importance. Thicker borders suggest greater mass.
- **Elevation** — The input exists at a specific height above the base plane. Shadows indicate this elevation.

### Inner Surface

The region between the boundary and the content:

- **Background** — The input's surface treatment. Always present, even when transparent.
- **Padding** — The space between the boundary and the content. Consistent across all inputs of the same type.
- **Visual treatment** — Color, texture, and other surface properties that communicate the input's state.
- **Transition zone** — The area where the boundary meets the surface, creating the input's visual weight.

### Content

The actual information within the input:

- **Value** — The user-provided data. May be empty, pre-filled, or actively being edited.
- **Placeholder** — Hint text that appears when the input is empty. Never a substitute for a label.
- **Label** — Describes what the input is for. Always visible, always associated.
- **Helper text** — Additional guidance that appears below the input.
- **Error message** — Validation feedback that appears below the input when validation fails.

## Input Types

### Text Input

Single-line text entry—the most basic data vessel:

- **Use** — Names, emails, search queries, any single-line data
- **Validation** — Format, length, required
- **Example** — "Enter your name"
- **Spatial behavior** — Occupies a single line, expands horizontally with content

### Text Area

Multi-line text entry—a larger data vessel:

- **Use** — Comments, descriptions, messages, any multi-line data
- **Validation** — Length, required
- **Example** — "Describe your issue"
- **Spatial behavior** — Occupies multiple lines, expands vertically with content

### Number Input

Numeric entry—a specialized data vessel:

- **Use** — Quantities, ages, amounts, any numeric data
- **Validation** — Range, format, required
- **Example** — "Enter quantity"
- **Spatial behavior** — Restricts input to numeric characters, provides increment/decrement controls

### Email Input

Email address entry—a formatted data vessel:

- **Use** — Email addresses
- **Validation** — Email format, required
- **Example** — "Enter your email"
- **Spatial behavior** — Provides email-specific keyboard on mobile, validates format

### Password Input

Secure text entry—a protected data vessel:

- **Use** — Passwords, PINs, any sensitive data
- **Validation** — Complexity, match, required
- **Example** — "Enter your password"
- **Spatial behavior** — Masks input characters, provides visibility toggle

### Search Input

Search query entry—a transient data vessel:

- **Use** — Search queries
- **Validation** — None typically
- **Example** — "Search..."
- **Spatial behavior** — Provides clear button, may trigger search on type

### Select Input

Option selection from dropdown—a choice vessel:

- **Use** — Choosing from predefined options
- **Validation** — Required, valid option
- **Example** — "Select your country"
- **Spatial behavior** — Expands to show options, collapses after selection

### Checkbox

Boolean selection—a toggle vessel:

- **Use** — On/off, yes/no, agree/disagree
- **Validation** — Required (if applicable)
- **Example** — "I agree to the terms"
- **Spatial behavior** — Toggles between checked and unchecked states

### Radio Button

Single selection from options—a choice vessel:

- **Use** — Choosing one option from set
- **Validation** — Required (if applicable)
- **Example** — "Select your plan"
- **Spatial behavior** — Selects one option, deselects others in group

### Toggle

Switch between two states—a state vessel:

- **Use** — Enabling/disabling features
- **Validation** — None typically
- **Example** — "Enable notifications"
- **Spatial behavior** — Slides between on and off states

## Input Anatomy

```
┌─────────────────────────────┐
│ Label                       │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ Placeholder/Value       │ │
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ Helper Text (optional)      │
└─────────────────────────────┘
```

### Required Elements

- **Label** — Describes what the input is for. Always visible, never hidden.
- **Input control** — The editable area where data enters the system. Always defined by a border.
- **Accessible name** — Screen reader label that communicates the input's purpose.

### Optional Elements

- **Placeholder** — Hint text that appears when the input is empty. Never a substitute for a label.
- **Helper text** — Additional guidance that appears below the input.
- **Error message** — Validation feedback that appears below the input when validation fails.
- **Icon** — Visual indicator (prefix or suffix) that communicates additional information.
- **Clear button** — Remove entered value action that resets the input.

## Input States

### Default State

The input's resting appearance—its state after all interactions:

- **Visual** — Normal appearance with defined border, background, and content
- **Mass** — Base elevation, standard shadow
- **Functional** — Ready for input, waiting for user data
- **Spatial** — At rest, occupying its designated position
- **Accessible** — Visible, focusable, and clearly interactive

### Hover State

When the cursor approaches—the spatial signal that interaction is imminent:

- **Visual** — Subtle border color change, cursor changes to text
- **Mass** — Slight elevation increase, shadow deepens slightly
- **Functional** — Ready for click, indicating data entry is possible
- **Spatial** — The input lifts slightly, acknowledging the approaching force
- **Accessible** — Indicates interactivity, provides visual feedback

### Focus State

When the input has keyboard focus—the spatial indicator of active data entry:

- **Visual** — Focus indicator (2px outline) that is always visible, border color intensifies
- **Mass** — Same as default, but highlighted
- **Functional** — Ready for keyboard interaction, accepting data input
- **Spatial** — The input is highlighted, indicating its position in the keyboard map
- **Accessible** — Visible focus for keyboard users, never hidden

### Filled State

When the input contains user data—the state of active data:

- **Visual** — Contains user input, different border color (optional), clear button visible (optional)
- **Mass** — Same as default, but with content weight
- **Functional** — Contains data, ready for validation or submission
- **Spatial** — The input holds data, demonstrating its containment function
- **Accessible** — Communicates that data has been entered

### Error State

When the input has validation problems—a spatial indication of dysfunction:

- **Visual** — Error color border, error message below, error icon (optional)
- **Mass** — May reduce elevation, indicating failure
- **Functional** — Indicates problem, may prevent submission
- **Spatial** — The input signals distress, demanding attention
- **Accessible** — Communicates error status, explains what went wrong

### Disabled State

When the input is not available—a spatial indication of unavailability:

- **Visual** — Reduced opacity, cursor not-allowed, desaturated colors
- **Mass** — Reduced elevation, minimal shadow, input recedes
- **Functional** — Not focusable, not editable, does not respond to interaction
- **Spatial** — The input indicates it is not part of the active space
- **Accessible** — Indicates unavailability, explains why through context

### Readonly State

When the input displays data but cannot be edited—a spatial indication of display:

- **Visual** — Same appearance as default, but with visual indication of non-editability
- **Mass** — Same as default, but with static quality
- **Functional** — Focusable but not changeable, displays data without allowing modification
- **Spatial** — The input exists in the space but does not accept new data
- **Accessible** — Communicates that data is displayed but not editable

## Input Appearance Sequence

When an input enters the viewport, it follows the WHITE DIAMOND appearance sequence:

1. **Entry from outside** — The input slides into view from outside the viewport boundary
2. **Boundary establishment** — The physical boundary becomes visible, defining the input's footprint
3. **Surface filling** — The inner surface fills with color and treatment
4. **Content reveal** — The label and any pre-filled value become visible
5. **Elevation settling** — The input settles to its resting elevation, shadow stabilizes

The input never appears from nothing. It always enters from outside, maintaining spatial continuity.

## Input Disappearance Sequence

When an input exits the viewport:

1. **Elevation lift** — The input rises slightly, indicating departure
2. **Content fade** — The label and value fade, maintaining structure
3. **Surface draining** — The inner surface loses color
4. **Boundary dissolution** — The physical boundary fades
5. **Exit to outside** — The input slides out of the viewport boundary

The input never disappears. It always exits to outside, maintaining spatial continuity.

## Input Timing and Physics

### Timing Specifications

- **Hover response** — 150ms transition for border color changes
- **Focus response** — Immediate appearance of focus indicator
- **Error appearance** — Error state appears immediately on validation failure
- **Error dismissal** — Error state disappears immediately on correction
- **Loading appearance** — Loading indicator appears after 500ms of processing

### Physics Behavior

- **Inertia** — The input resists change, then transitions smoothly
- **Momentum** — The input maintains motion during state changes
- **Friction** — Data entry resists movement, then releases
- **Gravity** — Related inputs attract, unrelated inputs repel
- **Collision** — Inputs cannot overlap without explicit spatial relationships

## Input Behavior and Feedback

### Entry

Inputs respond to:
- **Click/Tap** — Focus the input, preparing for data entry
- **Keyboard** — Type characters, entering data into the vessel
- **Paste** — Insert clipboard content, bulk data entry
- **Autocomplete** — Suggest previous entries, reducing data entry effort

### Validation

Inputs validate:
- **On blur** — When leaving the input, confirming data at the boundary
- **On submit** — When form is submitted, confirming all data
- **Real-time** — As user types (for some validations), immediate feedback
- **Programmatic** — Via API calls, system-initiated validation

### Feedback

Input validation produces:
- **Visual** — Color change, icon change, border change
- **Textual** — Error message below, explaining what went wrong
- **Accessible** — aria-invalid, aria-describedby, communicating status to assistive technology

### Clearing

Inputs can be cleared:
- **Clear button** — Explicit clear action, removing all data
- **Escape key** — Clear on escape, quick data removal
- **Double-click** — Select all, then type replaces, efficient data replacement

## Input Rules

### Rule 1: Labels Are Always Visible

Labels must always be visible, not just as placeholders. Placeholder-only inputs are inaccessible because:
- **Placeholder disappears** — When typing, the hint vanishes
- **Label remains** — The label stays visible, maintaining context
- **Floating label** — Moves above when focused, maintaining visibility
- **Above label** — Always visible above input, permanent context

### Rule 2: Inputs Have Clear Boundaries

Inputs must have clear visual boundaries because:
- **Border** — Explicit input area, defining where data enters
- **Background** — Different from page background, creating visual separation
- **Size** — Large enough to be easily targeted, accessible interaction
- **Spacing** — Adequate space from other elements, preventing collision

Unclear boundaries make inputs hard to find and interact with.

### Rule 3: Error Messages Are Specific

Error messages must explain what's wrong and how to fix it:
- **Good** — "Email must be in format user@example.com" (specific, actionable)
- **Bad** — "Invalid email" (vague, unhelpful)

Specific errors help users recover. Vague errors create frustration.

### Rule 4: Inputs Are Accessible

Inputs must work with assistive technology:
- **Label association** — Labels linked to inputs, communicating purpose
- **Error announcement** — Errors announced to screen readers, communicating problems
- **Keyboard access** — All inputs keyboard accessible, enabling navigation
- **Color independence** — Errors not conveyed by color alone, ensuring visibility

Inaccessible inputs exclude users from the spatial environment.

### Rule 5: Inputs Respect User Preferences

Inputs must adapt to user settings:
- **Font size** — Respects browser font size, maintaining readability
- **Zoom** — Works at 200% zoom, maintaining usability
- **Color scheme** — Respects dark/light mode, maintaining visibility
- **Reduced motion** — Respects motion preferences, maintaining comfort

Rigid inputs break on user preferences. Flexible inputs adapt.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist as architectural constructions
- [Button Specification](button-specification.md) — Button as action trigger
- [Card Specification](card-specification.md) — Card as content container
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](../accessibility/keyboard-navigation.md) — Non-pointer interaction