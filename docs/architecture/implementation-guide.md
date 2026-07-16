# Implementation Guide

## Why This Matters

This guide helps developers implement WHITE DIAMOND specifications in their projects. It provides practical guidance for translating principles into code.

## Getting Started

### Step 1: Understand the Principles

Before implementing, read:
1. [Core Principles](../philosophy/core-principles.md) — The foundational pillars
2. [Design Philosophy](../philosophy/design-philosophy.md) — The reasoning behind decisions
3. [Architectural Thinking](../philosophy/architectural-thinking.md) — How to think about implementation

### Step 2: Set Up Design Tokens

Create a design tokens file:

```css
:root {
  /* Colors */
  --color-primary: #3B82F6;
  --color-primary-dark: #2563EB;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-text: #1F2937;
  --color-text-muted: #6B7280;
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
  
  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  
  /* Typography */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-caption: 12px;
  --font-size-body: 14px;
  --font-size-h4: 16px;
  --font-size-h3: 18px;
  --font-size-h2: 22px;
  --font-size-h1: 28px;
  --font-size-display: 36px;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Borders */
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 12px;
  --border-radius-full: 9999px;
  --border-color-subtle: #E5E7EB;
  --border-color-default: #D1D5DB;
  --border-color-strong: #9CA3AF;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Motion */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in: cubic-bezier(0.32, 0, 0.67, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### Step 3: Implement Base Styles

Create base styles for common elements:

```css
/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Body */
body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-background);
}

/* Headings */
h1 { font-size: var(--font-size-h1); font-weight: var(--font-weight-bold); }
h2 { font-size: var(--font-size-h2); font-weight: var(--font-weight-semibold); }
h3 { font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); }
h4 { font-size: var(--font-size-h4); font-weight: var(--font-weight-medium); }

/* Links */
a {
  color: var(--color-primary);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Focus */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Step 4: Implement Components

Implement components following specifications:

```css
/* Button */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.button:hover {
  background-color: var(--color-primary-dark);
}

.button:active {
  transform: scale(0.98);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Input */
.input {
  width: 100%;
  padding: var(--spacing-2) var(--spacing-3);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  color: var(--color-text);
  background-color: var(--color-background);
  border: var(--border-width-thin) solid var(--border-color-default);
  border-radius: var(--border-radius-small);
  transition: border-color var(--duration-fast) var(--ease-out);
}

.input:hover {
  border-color: var(--border-color-strong);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary);
}

/* Card */
.card {
  background-color: var(--color-surface);
  border: var(--border-width-thin) solid var(--border-color-subtle);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
```

### Step 5: Add Responsive Design

Implement responsive layouts:

```css
/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-6);
  }
}

/* Grid */
.grid {
  display: grid;
  gap: var(--spacing-6);
}

.grid-2 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-3 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Step 6: Add Accessibility

Implement accessibility features:

```css
/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-2) var(--spacing-4);
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Step 7: Test

Test your implementation:
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] 200% zoom works
- [ ] High contrast mode works
- [ ] Reduced motion works
- [ ] Responsive design works
- [ ] Color contrast sufficient

## See Also

- [Technology Agnostic](technology-agnostic.md) — Platform-independent approach
- [Design Tokens](../tokens/design-tokens.md) — Atomic values
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
