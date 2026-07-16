# Input Specification

## Why This Matters

Inputs are how users provide information to interfaces. Without consistent input behavior, users cannot predict how to enter data, what format is expected, or how errors will be communicated. The input specification ensures predictable, accessible, and spatially coherent data entry.

## What Is an Input?

An input is an interactive element that captures user data. Inputs are:
- **Editable** — Users can change their value
- **Validatable** — Can be checked for correctness
- **Labelable** — Have associated labels
- **Accessible** — Work with assistive technology

Inputs are not buttons. Inputs capture; buttons trigger.

## Input Types

### Text Input

Single-line text entry:
- **Use** — Names, emails, search queries
- **Validation** — Format, length, required
- **Example** — "Enter your name"

### Text Area

Multi-line text entry:
- **Use** — Comments, descriptions, messages
- **Validation** — Length, required
- **Example** — "Describe your issue"

### Number Input

Numeric entry:
- **Use** — Quantities, ages, amounts
- **Validation** — Range, format, required
- **Example** — "Enter quantity"

### Email Input

Email address entry:
- **Use** — Email addresses
- **Validation** — Email format, required
- **Example** — "Enter your email"

### Password Input

Secure text entry:
- **Use** — Passwords, PINs
- **Validation** — Complexity, match, required
- **Example** — "Enter your password"

### Search Input

Search query entry:
- **Use** — Search queries
- **Validation** — None typically
- **Example** — "Search..."

### Select Input

Option selection from dropdown:
- **Use** — Choosing from predefined options
- **Validation** — Required, valid option
- **Example** — "Select your country"

### Checkbox

Boolean selection:
- **Use** — On/off, yes/no, agree/disagree
- **Validation** — Required (if applicable)
- **Example** — "I agree to the terms"

### Radio Button

Single selection from options:
- **Use** — Choosing one option from set
- **Validation** — Required (if applicable)
- **Example** — "Select your plan"

### Toggle

Switch between two states:
- **Use** — Enabling/disabling features
- **Validation** — None typically
- **Example** — "Enable notifications"

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

- **Label** — Describes what the input is for
- **Input control** — The editable area
- **Accessible name** — Screen reader label

### Optional Elements

- **Placeholder** — Hint text (not a label substitute)
- **Helper text** — Additional guidance
- **Error message** — Validation feedback
- **Icon** — Visual indicator (prefix or suffix)
- **Clear button** — Remove entered value

## Input States

### Default
- Normal appearance
- Ready for input
- Empty or pre-filled

### Hover
- Subtle border color change
- Indicates interactivity

### Focus
- Visible focus indicator (2px outline)
- Border color change
- Keyboard ready

### Filled
- Contains user input
- Different border color (optional)
- Clear button visible (optional)

### Error
- Error color border
- Error message below
- Error icon (optional)

### Disabled
- Reduced opacity
- Cursor not-allowed
- Not focusable

### Readonly
- Same appearance as default
- Not editable
- Focusable but not changeable

## Input Behavior

### Entry

Inputs respond to:
- **Click/Tap** — Focus the input
- **Keyboard** — Type characters
- **Paste** — Insert clipboard content
- **Autocomplete** — Suggest previous entries

### Validation

Inputs validate:
- **On blur** — When leaving the input
- **On submit** — When form is submitted
- **Real-time** — As user types (for some validations)
- **Programmatic** — Via API calls

### Feedback

Input validation produces:
- **Visual** — Color change, icon change
- **Textual** — Error message below
- **Accessible** — aria-invalid, aria-describedby

### Clearing

Inputs can be cleared:
- **Clear button** — Explicit clear action
- **Escape key** — Clear on escape
- **Double-click** — Select all, then type replaces

## Input Rules

### Rule 1: Labels Are Always Visible

Labels must always be visible, not just as placeholders:
- **Placeholder** — Disappears when typing
- **Label** — Always visible
- **Floating label** — Moves above when focused
- **Above label** — Always visible above input

Placeholder-only inputs are inaccessible.

### Rule 2: Inputs Have Clear Boundaries

Inputs must have clear visual boundaries:
- **Border** — Explicit input area
- **Background** — Different from page background
- **Size** — Large enough to be easily targeted
- **Spacing** — Adequate space from other elements

Unclear boundaries make inputs hard to find.

### Rule 3: Error Messages Are Specific

Error messages must explain what's wrong and how to fix it:
- **Good** — "Email must be in format user@example.com"
- **Bad** — "Invalid email"

Specific errors help users recover.

### Rule 4: Inputs Are Accessible

Inputs must work with assistive technology:
- **Label association** — Labels linked to inputs
- **Error announcement** — Errors announced to screen readers
- **Keyboard access** — All inputs keyboard accessible
- **Color independence** — Errors not conveyed by color alone

Inaccessible inputs exclude users.

### Rule 5: Inputs Respect User Preferences

Inputs must adapt to user settings:
- **Font size** — Respects browser font size
- **Zoom** — Works at 200% zoom
- **Color scheme** — Respects dark/light mode
- **Reduced motion** — Respects motion preferences

Rigid inputs break on user preferences.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist
- [Button Specification](button-specification.md) — Button behavior and constraints
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](../accessibility/keyboard-navigation.md) — Non-pointer interaction
- [Cognitive Load](../psychology/cognitive-load.md) — Mental effort and clarity
