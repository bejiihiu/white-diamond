# Component Template

## Why This Matters

Component templates provide a starting point for new components, ensuring consistent structure and applying WHITE DIAMOND principles from the start.

## Component Structure

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

## Button Template

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

### Button CSS

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

## Input Template

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

### Input CSS

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

## Card Template

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

### Card CSS

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

## Modal Template

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

### Modal CSS

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

## Accessibility Checklist

- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Color contrast sufficient
- [ ] Responsive design works

## See Also

- [Page Template](page-template.md) — Page template
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Design Tokens](../tokens/design-tokens.md) — Atomic values
- [Button Specification](../components/button-specification.md) — Button behavior
