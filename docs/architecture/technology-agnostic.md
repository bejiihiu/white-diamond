# Technology Agnostic

## Why This Matters

WHITE DIAMOND must work across all technologies. This document explains how to apply WHITE DIAMOND principles regardless of your tech stack.

## Principles

### 1. Behavior Over Implementation

WHITE DIAMOND specifies behavior, not implementation:
- **Spec:** "Buttons must provide visual feedback when clicked"
- **Implementation:** CSS `:active`, React `onClick`, Vue `@click`, etc.

The what is universal; the how depends on your technology.

### 2. Design Over Code

WHITE DIAMOND provides design principles, not code:
- **Spec:** "Use a consistent spacing system"
- **Implementation:** CSS variables, CSS-in-JS, Tailwind, etc.

The principle is universal; the implementation varies.

### 3. Accessibility Over Framework

Accessibility requirements are universal:
- **Spec:** "All interactive elements must be keyboard accessible"
- **Implementation:** HTML `tabindex`, React `onKeyDown`, Vue `@keydown`, etc.

The requirement is universal; the implementation varies.

## Framework Adaptation

### React

```jsx
// Button component following WHITE DIAMOND
function Button({ children, variant = 'primary', ...props }) {
  return (
    <button
      className={`button button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Input component following WHITE DIAMOND
function Input({ label, error, ...props }) {
  const id = useId();
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`input ${error ? 'input--error' : ''}`}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && <span id={`${id}-error`} className="input-error">{error}</span>}
    </div>
  );
}
```

### Vue

```vue
<!-- Button component following WHITE DIAMOND -->
<template>
  <button
    :class="['button', `button--${variant}`]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<!-- Input component following WHITE DIAMOND -->
<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :class="['input', { 'input--error': error }]"
      :aria-describedby="error ? `${id}-error` : undefined"
      v-bind="$attrs"
    />
    <span v-if="error" :id="`${id}-error`" class="input-error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    error: String
  },
  data() {
    return {
      id: `input-${Math.random().toString(36).substr(2, 9)}`
    };
  }
}
</script>
```

### Angular

```typescript
// Button component following WHITE DIAMOND
@Component({
  selector: 'app-button',
  template: `
    <button
      [class]="['button', 'button--' + variant]"
      [attr.aria-label]="ariaLabel"
    >
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: string = 'primary';
  @Input() ariaLabel: string;
}

// Input component following WHITE DIAMOND
@Component({
  selector: 'app-input',
  template: `
    <div class="input-group">
      <label [for]="id">{{ label }}</label>
      <input
        [id]="id"
        [class]="['input', { 'input--error': error }"
        [attr.aria-describedby]="error ? id + '-error' : null"
      />
      <span *ngIf="error" [id]="id + '-error'" class="input-error">{{ error }}</span>
    </div>
  `
})
export class InputComponent {
  @Input() label: string;
  @Input() error: string;
  id = `input-${Math.random().toString(36).substr(2, 9)}`;
}
```

### Svelte

```svelte
<!-- Button component following WHITE DIAMOND -->
<script>
  export let variant = 'primary';
</script>

<button
  class="button button--{variant}"
  on:click
>
  <slot />
</button>

<!-- Input component following WHITE DIAMOND -->
<script>
  export let label;
  export let error = '';
  
  const id = `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="input-group">
  <label for={id}>{label}</label>
  <input
    {id}
    class="input"
    class:input--error={error}
    aria-describedby={error ? `${id}-error` : undefined}
    on:input
  />
  {#if error}
    <span id="{id}-error" class="input-error">{error}</span>
  {/if}
</div>
```

### CSS-Only

```css
/* Button following WHITE DIAMOND */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #3B82F6;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 100ms ease-out;
}

.button:hover {
  background-color: #2563EB;
}

.button:active {
  transform: scale(0.98);
}

/* Input following WHITE DIAMOND */
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: #1F2937;
  background-color: white;
  border: 1px solid #D1D5DB;
  border-radius: 0.25rem;
  transition: border-color 100ms ease-out;
}

.input:hover {
  border-color: #9CA3AF;
}

.input:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 2px #3B82F6;
}
```

## Design Tool Adaptation

### Figma

- Use auto-layout for spacing
- Use components for consistency
- Use variables for tokens
- Use prototyping for motion

### Sketch

- Use symbols for components
- Use shared styles for consistency
- Use libraries for tokens
- Use prototype for motion

### Adobe XD

- Use components for consistency
- Use character styles for typography
- Use colors for tokens
- Use prototype for motion

## Testing Across Technologies

### Accessibility Testing

Test with:
- Keyboard navigation
- Screen readers (NVDA, VoiceOver, JAWS)
- 200% zoom
- High contrast mode
- Reduced motion

### Visual Testing

Test with:
- Multiple screen sizes
- Multiple browsers
- Multiple operating systems
- Light and dark themes

### Performance Testing

Test with:
- Lighthouse
- WebPageTest
- Browser dev tools

## See Also

- [Implementation Guide](implementation-guide.md) — Practical implementation
- [Design Tokens](../tokens/design-tokens.md) — Atomic values
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
