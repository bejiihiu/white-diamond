# Component Template

## Why This Matters

A component is not a UI element. It is an **architectural construction** — a rectangular object with defined boundaries, a physical surface, and meaningful content. The component template provides the structural foundation for defining these constructions with the precision that WHITE DIAMOND demands.

Without a template, component specifications would vary in structure, depth, and rigor. Some would explain reasoning; others would not. Some would include anti-patterns; others would not. The template ensures that every component specification meets the same architectural standard, making the system coherent and complete.

## The Three-Layer Model

Every component in WHITE DIAMOND follows the three-layer hierarchy. This is not optional — it is a law:

1. **Physical Boundary** — The outermost edge of the component. Defines the extent of the object in space. Without a physical boundary, the object does not exist.

2. **Inner Surface** — The material layer between the boundary and the content. Defines the object's substance. Without an inner surface, the boundary is empty and meaningless.

3. **Content** — The semantic payload. The information or interaction that the component exists to deliver. Without content, the component is an empty vessel.

Every component specification must address all three layers explicitly. The template provides the structure for doing this consistently.

## Component Specification Structure

Every component specification must follow this structure:

```markdown
# [Component Name]

## Why This Matters
[Explain the architectural problem this component solves]
[Explain what happens without this component]

## Physical Boundary
[Define the component's extent, borders, and spatial dimensions]

## Inner Surface
[Define the component's material, background, and surface properties]

## Content
[Define the semantic payload and its hierarchy]

## States
[Define all possible states and their visual properties]

## Interaction
[Define how the user interacts with the component]

## Rules
[Specific, testable rules governing the component]

## Examples
[Concrete demonstrations of correct application]

## Anti-Patterns
[What is explicitly prohibited and why]

## Cross-References
[Links to related specifications]
```

## Component HTML Structure

```html
<div class="component" role="..." aria-...>
  <!-- Header (optional) -->
  <div class="component-header">
    <!-- Header content -->
  </div>
  
  <!-- Content -->
  <div class="component-content">
    <!-- Main content -->
  </div>
  
  <!-- Footer (optional) -->
  <div class="component-footer">
    <!-- Footer content -->
  </div>
</div>
```

### Why This Structure

The HTML structure mirrors the three-layer hierarchy:

- The outer `<div class="component">` represents the **Physical Boundary**. It defines the component's extent in space.
- The inner `<div class="component-header">`, `<div class="component-content">`, and `<div class="component-footer">` represent the **Inner Surface** and **Content** layers.
- The content within these divs represents the **Content** layer.

The `role` and `aria-*` attributes are mandatory because they communicate the component's purpose to assistive technologies. A component without proper ARIA attributes is architecturally incomplete because it excludes users who rely on screen readers.

## Button Specification

The button is the most fundamental interactive component. It is a rectangular object that responds to user input with physical feedback.

### HTML

```html
<button 
  class="button button--primary"
  type="button"
  aria-label="Action description"
>
  <span class="button-icon" aria-hidden="true">
    <!-- Icon SVG -->
  </span>
  <span class="button-label">Button Label</span>
</button>
```

### CSS

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  transition: all 100ms ease-out;
}

.button:hover {
  background-color: var(--color-primary-dark);
}

.button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.button:active {
  transform: scale(0.98);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--secondary {
  color: var(--color-text);
  background-color: transparent;
  border: 1px solid var(--border-color-default);
}

.button--secondary:hover {
  background-color: var(--color-surface);
}
```

### Why `border: none` on Primary Buttons

The primary button uses `border: none` because its background color provides sufficient visual boundary. The background color IS the physical boundary in this case. However, the secondary button requires `border: 1px solid` because it has a transparent background — without a border, the secondary button would have no physical boundary and would not exist as a distinct object.

### Why `transform: scale(0.98)` on Active State

The `scale(0.98)` transform provides physical feedback that the button is being pressed. This is not decoration — it communicates the physical interaction between the user and the button. The scale is subtle (2% reduction) because the button is a small object, and large-scale transforms would feel unrealistic.

### Why `transition: all 100ms` Is Used

The 100ms transition provides feedback that a state change has occurred. It is short enough to feel responsive but long enough to be perceptible. Transitions longer than 200ms feel sluggish; transitions shorter than 50ms feel abrupt.

### Anti-Patterns

- **Circular buttons.** Circular buttons violate the rectangle constraint. They are not architectural objects.
- **Buttons without borders.** Buttons without borders (and without background colors) have no physical boundary. They do not exist as distinct objects.
- **Decorative hover effects.** Hover effects that add shadows, glows, or color shifts beyond the defined states are decorative animation, which is forbidden.

## Input Specification

The input is a data entry component. It is a rectangular object that accepts user input and provides visual feedback about its state.

### HTML

```html
<div class="input-group">
  <label class="input-label" for="input-id">
    Label
    <span class="input-required" aria-hidden="true">*</span>
  </label>
  <input 
    class="input"
    id="input-id"
    type="text"
    placeholder="Placeholder text"
    aria-required="true"
    aria-describedby="input-help input-error"
  >
  <span class="input-help" id="input-help">
    Helper text
  </span>
  <span class="input-error" id="input-error" role="alert">
    Error message
  </span>
</div>
```

### CSS

```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.input-label {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.input-required {
  color: var(--color-error);
}

.input {
  padding: var(--spacing-2) var(--spacing-3);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--border-color-default);
  border-radius: var(--border-radius-small);
  transition: border-color 100ms ease-out;
}

.input:hover {
  border-color: var(--border-color-strong);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-focus);
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input--error {
  border-color: var(--color-error);
}

.input-help {
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
}

.input-error {
  font-size: var(--font-size-caption);
  color: var(--color-error);
}
```

### Why Labels Are Mandatory

Labels are not optional. They are the semantic content layer of the input. Without a label, the input has no meaning — it is an empty vessel. The `for` attribute connects the label to the input, creating a semantic relationship that assistive technologies depend on.

### Why `border: 1px solid` Is Required

The input's border defines its physical boundary. Without a border, the input has no extent — it merges with the surrounding space. The border color changes to communicate state (hover, focus, error) because the border is the primary visual indicator of the input's boundary.

### Why `box-shadow` on Focus

The focus ring (`box-shadow: 0 0 0 2px var(--color-focus)`) provides a clear visual indicator that the input is focused. This is not decoration — it is essential for keyboard navigation. Without a visible focus indicator, keyboard users cannot determine which input is active.

### Anti-Patterns

- **Inputs without labels.** Inputs without labels are meaningless. They violate the content layer principle.
- **Inputs without borders.** Inputs without borders have no physical boundary. They do not exist as distinct objects.
- **Floating labels.** Floating labels move, which violates the principle of absolute control. The user should not have to track moving elements.

## Card Specification

The card is a content container. It groups related information into a single rectangular object with defined boundaries.

### HTML

```html
<article class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-content">
    <p class="card-description">Card description text.</p>
  </div>
  <div class="card-footer">
    <button class="button button--secondary">Cancel</button>
    <button class="button button--primary">Action</button>
  </div>
</article>
```

### CSS

```css
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-surface);
  border: 1px solid var(--border-color-subtle);
  border-radius: var(--border-radius-medium);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 200ms ease-out;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: var(--spacing-4) var(--spacing-4) 0;
}

.card-title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
}

.card-content {
  padding: var(--spacing-4);
}

.card-description {
  color: var(--color-text-secondary);
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-2);
  padding: 0 var(--spacing-4) var(--spacing-4);
}
```

### Why `border: 1px solid` Is Required

The card's border defines its physical boundary. Without a border, the card has no extent — it merges with the background. The border is the existential marker that makes the card a distinct object.

### Why `box-shadow` Changes on Hover

The shadow change on hover communicates that the card is interactive. The shadow becomes more pronounced to suggest the card is lifting slightly in space — a physical response to user interaction. This is not decoration; it is spatial communication.

### Why Cards Use `<article>` Element

The `<article>` element communicates that the card is a self-contained piece of content. This semantic choice reflects the card's architectural role: a bounded container for meaningful content.

### Anti-Patterns

- **Cards without borders.** Cards without borders have no physical boundary. They are not distinct objects.
- **Cards with rounded corners beyond `border-radius-medium`.** Excessive rounding violates the rectangle constraint.
- **Cards with image backgrounds.** Image backgrounds obscure the inner surface layer and violate the material principle.

## Modal Specification

The modal is a spatial interruption. It creates a new layer of space that overlays the existing content, demanding the user's attention.

### HTML

```html
<div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">Modal Title</h2>
      <button class="modal-close" aria-label="Close modal">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-content">
      <p>Modal content here.</p>
    </div>
    <div class="modal-footer">
      <button class="button button--secondary">Cancel</button>
      <button class="button button--primary">Confirm</button>
    </div>
  </div>
</div>
```

### CSS

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  transition: opacity 300ms ease-out;
}

.modal-backdrop.open {
  opacity: 1;
}

.modal {
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  background-color: var(--color-surface);
  border-radius: var(--border-radius-large);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  transition: transform 300ms ease-out;
  overflow: hidden;
}

.modal-backdrop.open .modal {
  transform: scale(1);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-4) var(--spacing-2);
}

.modal-title {
  font-size: var(--font-size-h2);
}

.modal-close {
  padding: var(--spacing-2);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--color-text-muted);
}

.modal-content {
  padding: var(--spacing-2) var(--spacing-4);
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4) var(--spacing-4);
}
```

### Why the Backdrop Exists

The backdrop is not decorative. It is the spatial boundary between the modal and the underlying content. Without the backdrop, the modal has no spatial separation from the page — it floats without context. The backdrop's opacity (50% black) ensures the underlying content is visible but not interactive, establishing the modal as the primary spatial layer.

### Why `transform: scale(0.95)` Is Used

The scale transform communicates the modal's entry into space. It starts slightly smaller and grows to full size, suggesting it is moving from a distance toward the user. This is spatial communication, not decoration.

### Why `aria-modal="true"` Is Mandatory

The `aria-modal="true"` attribute tells assistive technologies that the modal is a separate spatial layer. Without this attribute, screen readers may allow interaction with the underlying content, breaking the spatial isolation that the modal creates.

### Anti-Patterns

- **Modals without backdrop.** Modals without backdrop have no spatial separation from the page. They float without context.
- **Full-screen modals.** Full-screen modals eliminate the spatial relationship between the modal and the page. They are page replacements, not modals.
- **Modals with animations beyond the defined transitions.** Additional animations are decorative and violate the physics principle.

## Accessibility Checklist

- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Color contrast sufficient
- [ ] Responsive design works

### Why Every Item Is Mandatory

Every checklist item is mandatory because WHITE DIAMOND defines universal principles. An inaccessible component excludes users from the space, violating the architectural vision. Accessibility is not a feature — it is a fundamental requirement.

## See Also

- [Page Template](page-template.md) — How components fit within page structure
- [Component Philosophy](../components/component-philosophy.md) — Why components exist as architectural objects
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access requirements
- [Design Tokens](../tokens/design-tokens.md) — Atomic values that define component properties
- [Button Specification](../components/button-specification.md) — Complete button behavior specification
