# Migrating from Material Design

## Why This Matters

Material Design is a comprehensive design system with its own philosophy. This guide helps migrate from Material Design to WHITE DIAMOND's approach, highlighting differences and providing migration paths.

## Material Design vs. WHITE DIAMOND

### Philosophy Differences

| Aspect | Material Design | WHITE DIAMOND |
|--------|----------------|---------------|
| **Metaphor** | Physical paper and ink | Spatial physics |
| **Depth** | Elevation levels | Layer system |
| **Motion** | Meaningful motion | Physical motion |
| **Color** | Dynamic color | Semantic color |
| **Typography** | Type scale | Type hierarchy |
| **Components** | Comprehensive library | Specification-based |

### Key Differences

**Material Design:**
- Defines specific components with specific behaviors
- Uses 24dp grid
- Has 5 elevation levels
- Uses dynamic color from wallpaper
- Has specific component specifications

**WHITE DIAMOND:**
- Defines principles, not components
- Uses flexible grid system
- Has continuous depth system
- Uses semantic color palette
- Has behavioral specifications

## Migration Strategy

### Step 1: Understand the Differences

Before migrating, understand why the systems differ:
- **Material** — Defines what components look like and how they behave
- **WHITE DIAMOND** — Defines principles for creating components

### Step 2: Map Components

Map Material components to WHITE DIAMOND principles:

| Material Component | WHITE DIAMOND Approach |
|-------------------|------------------------|
| FAB | Primary action button with clear purpose |
| Snackbar | Toast notification with clear feedback |
| Bottom navigation | Primary navigation with clear hierarchy |
| Cards | Content containers with clear boundaries |
| Text fields | Inputs with clear labels and feedback |

### Step 3: Adopt Spatial System

Replace Material's elevation with WHITE DIAMOND's layer system:

**Material:**
```css
.elevation-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.elevation-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16); }
.elevation-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19); }
```

**WHITE DIAMOND:**
```css
.layer-content { /* No shadow */ }
.layer-sticky { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.layer-overlay { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.layer-modal { box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
```

### Step 4: Adopt Color System

Replace Material's dynamic color with WHITE DIAMOND's semantic color:

**Material:**
```css
--md-sys-color-primary: /* Dynamic from wallpaper */
```

**WHITE DIAMOND:**
```css
--color-primary: #3B82F6;
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
```

### Step 5: Adopt Typography System

Replace Material's type scale with WHITE DIAMOND's hierarchy:

**Material:**
```css
.display-large { font-size: 57px; line-height: 64px; }
.display-medium { font-size: 45px; line-height: 52px; }
```

**WHITE DIAMOND:**
```css
.font-display { font-size: var(--font-size-display); }
.font-h1 { font-size: var(--font-size-h1); }
.font-h2 { font-size: var(--font-size-h2); }
```

### Step 6: Adopt Motion System

Replace Material's motion with WHITE DIAMOND's physical motion:

**Material:**
```css
.ease-in { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
.ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
```

**WHITE DIAMOND:**
```css
.ease-out { transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1); }
.ease-in { transition-timing-function: cubic-bezier(0.32, 0, 0.67, 0); }
.ease-in-out { transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
```

## Component Migration

### Buttons

**Material:**
```css
.md-button {
  height: 40px;
  padding: 0 16px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

**WHITE DIAMOND:**
```css
.button {
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius-medium);
  /* No text transformation */
  /* Natural letter spacing */
}
```

### Cards

**Material:**
```css
.md-card {
  border-radius: 12px;
  background: var(--md-sys-color-surface);
}
```

**WHITE DIAMOND:**
```css
.card {
  border-radius: var(--border-radius-medium);
  background: var(--color-surface);
  border: 1px solid var(--border-color-subtle);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

### Text Fields

**Material:**
```css
.md-text-field {
  border-bottom: 1px solid var(--md-sys-color-outline);
  padding: 16px 0 8px;
}
```

**WHITE DIAMOND:**
```css
.input {
  border: 1px solid var(--border-color-default);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-2) var(--spacing-3);
}
```

## Migration Checklist

- [ ] Map all Material components to WHITE DIAMOND principles
- [ ] Replace elevation system with layer system
- [ ] Replace dynamic color with semantic color
- [ ] Replace type scale with type hierarchy
- [ ] Replace motion curves with physical motion
- [ ] Remove Roboto font (use system font or appropriate alternative)
- [ ] Remove ripple effects (use subtle hover/active states)
- [ ] Remove text transformation (use natural case)
- [ ] Test with keyboard navigation
- [ ] Test with screen readers
- [ ] Test at 200% zoom

## See Also

- [From Flat Design](from-flat-design.md) — Transitioning from flat interfaces
- [Design Tokens](../tokens/design-tokens.md) — Atomic values
- [Color System](../tokens/color-system.md) — Color definitions
- [Spacing System](../tokens/spacing-system.md) — Spacing definitions
- [Animation Principles](../motion/animation-principles.md) — How motion should work
