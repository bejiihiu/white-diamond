# Common Mistakes

## Why This Matters

Common mistakes are errors that occur frequently in interface design. Recognizing these mistakes helps designers and developers avoid them, creating better interfaces faster.

## Layout Mistakes

### Mistake: Inconsistent Margins

**Symptom:** Elements have different margins throughout the view.

**Cause:** Not using a spacing system.

**Fix:** Apply spacing tokens consistently:
```css
/* Bad */
.card { margin: 15px; }
.section { margin: 20px; }

/* Good */
.card { margin: var(--spacing-4); }
.section { margin: var(--spacing-6); }
```

### Mistake: Misaligned Elements

**Symptom:** Elements don't align to grid or each other.

**Cause:** Not using grid or alignment tools.

**Fix:** Align all elements to grid lines or other elements.

### Mistake: Cramped Content

**Symptom:** Elements too close together, hard to distinguish.

**Cause:** Insufficient spacing.

**Fix:** Apply appropriate spacing tokens:
```css
/* Bad */
.item + .item { margin-top: 4px; }

/* Good */
.item + .item { margin-top: var(--spacing-2); }
```

### Mistake: No Visual Hierarchy

**Symptom:** All elements look equally important.

**Cause:** No size, color, or spacing differentiation.

**Fix:** Create clear hierarchy through size, color, and spacing.

## Typography Mistakes

### Mistake: Too Many Font Sizes

**Symptom:** Many different font sizes, no consistent scale.

**Cause:** Not using a type scale.

**Fix:** Use the type scale consistently:
```css
/* Bad */
.title { font-size: 24px; }
.heading { font-size: 20px; }
.subheading { font-size: 18px; }

/* Good */
.title { font-size: var(--font-size-h1); }
.heading { font-size: var(--font-size-h2); }
.subheading { font-size: var(--font-size-h3); }
```

### Mistake: Poor Line Height

**Symptom:** Text feels cramped or too spread out.

**Cause:** Not setting appropriate line height.

**Fix:** Use appropriate line heights:
```css
/* Bad */
p { line-height: 1.2; } /* Too tight */

/* Good */
p { line-height: 1.5; } /* Comfortable */
```

### Mistake: Long Line Lengths

**Symptom:** Text lines too long to read comfortably.

**Cause:** No max-width on text containers.

**Fix:** Limit line length to 50-75 characters:
```css
/* Bad */
.content { width: 100%; }

/* Good */
.content { max-width: 65ch; }
```

## Color Mistakes

### Mistake: Insufficient Contrast

**Symptom:** Text hard to read against background.

**Cause:** Low contrast color combinations.

**Fix:** Ensure 4.5:1 contrast for text:
```css
/* Bad */
.text { color: #999; } /* On white background */

/* Good */
.text { color: #666; } /* Better contrast */
```

### Mistake: Inconsistent Status Colors

**Symptom:** Success is green in one place, blue in another.

**Cause:** Not using semantic color tokens.

**Fix:** Use consistent status colors:
```css
/* Bad */
.success { color: #2196F3; } /* Blue */
.error { color: #f44336; } /* Red */

/* Good */
.success { color: var(--color-success); }
.error { color: var(--color-error); }
```

### Mistake: Too Many Colors

**Symptom:** Interface looks like a rainbow.

**Cause:** Not limiting color palette.

**Fix:** Use limited, purposeful colors:
- 1-2 primary colors
- 1-2 secondary colors
- Neutral scale
- 4 semantic colors

## Interaction Mistakes

### Mistake: No Focus Indicators

**Symptom:** Keyboard users can't see where focus is.

**Cause:** Removing or hiding focus styles.

**Fix:** Always show visible focus indicators:
```css
/* Bad */
:focus { outline: none; }

/* Good */
:focus { outline: 2px solid var(--color-focus); }
```

### Mistake: Missing Hover States

**Symptom:** Users don't know what's clickable.

**Cause:** No visual change on hover.

**Fix:** Provide hover feedback:
```css
/* Bad */
.button { /* No hover state */ }

/* Good */
.button:hover { background-color: var(--primary-600); }
```

### Mistake: No Loading States

**Symptom:** Users click buttons multiple times because nothing happens.

**Cause:** No feedback during processing.

**Fix:** Show loading state during processing:
```css
/* Bad */
.button.processing { /* No visual change */ }

/* Good */
.button.processing { 
  opacity: 0.7;
  pointer-events: none;
}
.button.processing::after { content: "Loading..."; }
```

## Accessibility Mistakes

### Mistake: Missing Alt Text

**Symptom:** Screen readers announce "image" without description.

**Cause:** No alt text on images.

**Fix:** Add descriptive alt text:
```html
<!-- Bad -->
<img src="chart.png">

<!-- Good -->
<img src="chart.png" alt="Sales increased 20% from January to March">
```

### Mistake: Missing Labels

**Symptom:** Screen readers announce "edit text" without context.

**Cause:** No labels on inputs.

**Fix:** Add labels to all inputs:
```html
<!-- Bad -->
<input type="email">

<!-- Good -->
<label for="email">Email address</label>
<input id="email" type="email">
```

### Mistake: Color-Only Information

**Symptom:** Color-blind users can't distinguish status.

**Cause:** Using only color to convey meaning.

**Fix:** Pair color with text or icons:
```html
<!-- Bad -->
<span style="color: green;">Active</span>

<!-- Good -->
<span style="color: green;">● Active</span>
```

## Content Mistakes

### Mistake: Placeholder Labels

**Symptom:** Users don't know what to enter after typing.

**Cause:** Using placeholder as only label.

**Fix:** Always use visible labels:
```html
<!-- Bad -->
<input placeholder="Email address">

<!-- Good -->
<label for="email">Email address</label>
<input id="email" placeholder="john@example.com">
```

### Mistake: Unclear Error Messages

**Symptom:** Users don't understand what went wrong.

**Cause:** Generic error messages.

**Fix:** Provide specific, helpful error messages:
```html
<!-- Bad -->
<span class="error">Invalid input</span>

<!-- Good -->
<span class="error">Please enter a valid email address (e.g., user@example.com)</span>
```

### Mistake: Missing Confirmation

**Symptom:** Users accidentally delete or modify data.

**Cause:** No confirmation for destructive actions.

**Fix:** Confirm before destructive actions:
```html
<!-- Bad -->
<button onclick="deleteItem()">Delete</button>

<!-- Good -->
<button onclick="confirmDelete()">Delete</button>
```

## See Also

- [Prohibited Patterns](prohibited-patterns.md) — What to avoid
- [Best Practices](../best-practices/recommended-approaches.md) — What works well
- [Decision Making](../best-practices/decision-making.md) — How to choose
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
