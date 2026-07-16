# Recommended Approaches

## Why This Matters

Recommended approaches are patterns that consistently work well. These approaches have been proven through practice and align with WHITE DIAMOND principles.

## Layout Approaches

### Use a Grid System

**Recommendation:** Use a consistent grid system for all layouts.

**Why:** Grids create order, alignment, and consistency.

**How:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-6);
}
```

### Use Whitespace for Separation

**Recommendation:** Use whitespace instead of lines for separation.

**Why:** Whitespace is cleaner and more flexible than borders.

**How:**
```css
/* Bad */
.section { border-bottom: 1px solid #ccc; }

/* Good */
.section { margin-bottom: var(--spacing-8); }
```

### Use Progressive Disclosure

**Recommendation:** Show only what's needed, reveal details on demand.

**Why:** Reduces cognitive load and keeps interfaces clean.

**How:**
- Collapse secondary content
- Use expandable sections
- Show details on click/hover
- Paginate long lists

## Typography Approaches

### Use a Type Scale

**Recommendation:** Use a consistent type scale for all text.

**Why:** Creates visual hierarchy and consistency.

**How:**
```css
:root {
  --font-size-caption: 12px;
  --font-size-body: 14px;
  --font-size-h4: 16px;
  --font-size-h3: 18px;
  --font-size-h2: 22px;
  --font-size-h1: 28px;
  --font-size-display: 36px;
}
```

### Limit Line Length

**Recommendation:** Keep lines between 50-75 characters.

**Why:** Optimal for readability.

**How:**
```css
.content { max-width: 65ch; }
```

### Use Semantic Headings

**Recommendation:** Use headings hierarchically (h1 → h2 → h3).

**Why:** Creates document outline for screen readers and scanners.

**How:**
```html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
```

## Color Approaches

### Use Semantic Colors

**Recommendation:** Use colors with meaning, not just aesthetics.

**Why:** Semantic colors communicate status and meaning.

**How:**
```css
:root {
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

### Ensure Sufficient Contrast

**Recommendation:** Ensure 4.5:1 contrast for text.

**Why:** Readable for all users, including those with low vision.

**How:** Use contrast checkers. Prefer dark text on light backgrounds.

### Limit Color Palette

**Recommendation:** Use 5-10 colors maximum.

**Why:** Too many colors create visual chaos.

**How:**
- 1-2 primary colors
- 1-2 secondary colors
- Neutral scale (10 values)
- 4 semantic colors

## Interaction Approaches

### Provide Immediate Feedback

**Recommendation:** Show feedback within 100ms of user action.

**Why:** Users need to know their action was received.

**How:**
```css
.button {
  transition: transform 100ms ease-out;
}
.button:active {
  transform: scale(0.98);
}
```

### Use Consistent Patterns

**Recommendation:** Same action, same pattern, everywhere.

**Why:** Users learn once and apply everywhere.

**How:**
- All buttons look and behave the same
- All inputs have labels above
- All modals have close buttons
- All links are underlined

### Make Interactive Elements Obvious

**Recommendation:** Make it clear what's clickable.

**Why:** Users shouldn't have to guess.

**How:**
- Use button styles for actions
- Use link styles for navigation
- Show cursor change on hover
- Provide hover feedback

## Accessibility Approaches

### Use Semantic HTML

**Recommendation:** Use HTML elements for their intended purpose.

**Why:** Semantic HTML is accessible by default.

**How:**
```html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button onclick="submit()">Submit</button>
```

### Add Labels to All Inputs

**Recommendation:** Every input has a visible label.

**Why:** Labels are essential for accessibility.

**How:**
```html
<label for="email">Email address</label>
<input id="email" type="email">
```

### Show Focus Indicators

**Recommendation:** Never remove focus indicators.

**Why:** Keyboard users need to see focus.

**How:**
```css
:focus { outline: 2px solid var(--color-focus); }
```

## Component Approaches

### One Component, One Purpose

**Recommendation:** Each component does one thing well.

**Why:** Multi-purpose components confuse users.

**How:**
- Button: triggers actions
- Input: captures data
- Card: groups content
- Modal: focuses attention

### Use Component Variants

**Recommendation:** Use variants for different contexts.

**Why:** Variants maintain consistency while adapting to context.

**How:**
- Primary button: main actions
- Secondary button: supporting actions
- Ghost button: inline actions

### Compose Components

**Recommendation:** Build complex interfaces from simple components.

**Why:** Composable components are flexible and maintainable.

**How:**
- Card = Container + Header + Content + Actions
- Form = Input + Label + Helper + Error
- Modal = Backdrop + Container + Header + Content + Footer

## Performance Approaches

### Optimize Images

**Recommendation:** Use appropriate image formats and sizes.

**Why:** Large images slow down interfaces.

**How:**
- Use WebP for photos
- Use SVG for icons
- Lazy load below-fold images
- Provide multiple sizes

### Minimize JavaScript

**Recommendation:** Load only what's needed.

**Why:** Large bundles slow down interfaces.

**How:**
- Code split by route
- Lazy load non-critical code
- Use tree shaking
- Avoid unnecessary dependencies

### Use CSS Over JavaScript

**Recommendation:** Use CSS for animations and transitions.

**Why:** CSS is more performant than JavaScript for visual effects.

**How:**
```css
/* Good */
.button { transition: transform 100ms; }

/* Avoid */
.button { /* JavaScript animation */ }
```

## See Also

- [Decision Making](decision-making.md) — How to choose between options
- [Prohibited Patterns](../anti-patterns/prohibited-patterns.md) — What to avoid
- [Common Mistakes](../anti-patterns/common-mistakes.md) — Frequent errors
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
