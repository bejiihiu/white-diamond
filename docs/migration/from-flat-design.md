# Migrating from Flat Design

## Why This Matters

Flat design was a reaction against skeuomorphism, but it often strips interfaces of spatial cues that help users understand hierarchy and interaction. This guide helps migrate from flat design to WHITE DIAMOND's spatial approach.

## What Is Flat Design?

Flat design characteristics:
- **No depth** — Everything on same plane
- **Minimal styling** — No shadows, gradients, or textures
- **Bright colors** — Saturated color palettes
- **Simple shapes** — Basic geometric forms
- **Focus on content** — Minimal chrome

## Problems with Flat Design

### Lack of Hierarchy

Flat design struggles to communicate importance:
- All elements look similar
- No visual cues for priority
- Difficult to scan
- Users must read everything

### Unclear Interactivity

Flat design makes it hard to know what's clickable:
- No affordance cues
- No hover states
- No visual feedback
- Users must guess

### No Spatial Relationships

Flat design doesn't show how elements relate:
- No grouping cues
- No containment
- No depth
- No layering

## Migration Strategy

### Step 1: Add Depth

Introduce subtle depth to communicate hierarchy:

**Before (Flat):**
```css
.card {
  background: white;
  border: 1px solid #eee;
}
```

**After (Spatial):**
```css
.card {
  background: white;
  border: 1px solid var(--border-color-subtle);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

### Step 2: Add Hierarchy

Use size, color, and spacing to create hierarchy:

**Before (Flat):**
```css
/* Everything same size */
h1, h2, h3 { font-size: 16px; }
```

**After (Spatial):**
```css
/* Clear hierarchy */
h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }
```

### Step 3: Add Affordances

Make interactive elements look clickable:

**Before (Flat):**
```css
.button {
  background: #3B82F6;
  color: white;
  border: none;
}
```

**After (Spatial):**
```css
.button {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-medium);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: transform 100ms ease-out, box-shadow 100ms ease-out;
}
.button:hover {
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.button:active {
  transform: scale(0.98);
}
```

### Step 4: Add Boundaries

Define clear spatial boundaries:

**Before (Flat):**
```css
/* No clear boundaries */
.section {
  padding: 20px;
}
```

**After (Spatial):**
```css
/* Clear boundaries */
.section {
  padding: var(--spacing-6);
  border-bottom: 1px solid var(--border-color-subtle);
}
```

### Step 5: Add Motion

Introduce purposeful motion:

**Before (Flat):**
```css
/* No motion */
.menu { display: none; }
.menu.open { display: block; }
```

**After (Spatial):**
```css
/* Purposeful motion */
.menu {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.menu.open {
  opacity: 1;
  transform: translateY(0);
}
```

## Common Patterns

### Buttons

**Flat:**
```css
.btn {
  background: blue;
  color: white;
  padding: 10px 20px;
}
```

**Spatial:**
```css
.btn {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius-medium);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: all 100ms ease-out;
}
.btn:hover {
  background: var(--color-primary-dark);
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.btn:active {
  transform: scale(0.98);
}
```

### Cards

**Flat:**
```css
.card {
  background: white;
  border: 1px solid #eee;
}
```

**Spatial:**
```css
.card {
  background: white;
  border: 1px solid var(--border-color-subtle);
  border-radius: var(--border-radius-medium);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: box-shadow 200ms ease-out;
}
.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### Forms

**Flat:**
```css
.input {
  border: 1px solid #ccc;
  padding: 10px;
}
```

**Spatial:**
```css
.input {
  border: 1px solid var(--border-color-default);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-2) var(--spacing-3);
  transition: border-color 100ms ease-out;
}
.input:focus {
  border-color: var(--color-primary);
  outline: 2px solid var(--color-focus);
}
```

## Migration Checklist

- [ ] Add shadows to cards and elevated elements
- [ ] Add hover states to interactive elements
- [ ] Add focus indicators to all interactive elements
- [ ] Add transitions to state changes
- [ ] Add clear boundaries to sections
- [ ] Add hierarchy through size and spacing
- [ ] Add motion to state changes
- [ ] Test with keyboard navigation
- [ ] Test with screen readers
- [ ] Test at 200% zoom

## See Also

- [From Material Design](from-material-design.md) — Transitioning from Google's system
- [Space Behavior](../space-physics/space-behavior.md) — How space works
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Animation Principles](../motion/animation-principles.md) — How motion should work
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
