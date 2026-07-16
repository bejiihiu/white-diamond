# Migrating from Material Design

## Why This Matters

Material Design is Google's comprehensive design system — one of the most influential and well-documented design languages ever created. It has shaped how millions of developers think about interfaces. Migrating from Material Design is not a matter of replacing one set of CSS rules with another. It is a fundamental shift in how you conceptualize what an interface *is*.

Material Design says: the interface is a collection of digital "materials" — paper-like sheets that cast shadows, respond to touch, and transform over time. WHITE DIAMOND says: the interface is a window into an infinite architectural space, where every element is a construction with mass, boundaries, and spatial relationships.

These are not minor philosophical differences. They produce fundamentally different interfaces. This guide provides the framework for understanding those differences and migrating between them with architectural integrity.

## Philosophical Divergence

### Material Design's Metaphor: Paper and Ink

Material Design is built on a metaphor of physical paper. Sheets of material exist at different elevations, cast shadows according to their height above the surface, and transform over time through meaningful motion. The metaphor is powerful and intuitive — everyone understands paper.

But paper has limitations:
- Paper is two-dimensional. It has length and width, but its depth is negligible.
- Paper is opaque. You cannot see through it.
- Paper is lightweight. It has no mass or structural presence.
- Paper exists in a finite stack. There are only so many sheets before the stack collapses.

### WHITE DIAMOND's Metaphor: Architectural Space

WHITE DIAMOND replaces the paper metaphor with an architectural metaphor. The screen is a window into a vast, infinite space. Elements are not sheets of paper — they are architectural constructions: walls, floors, columns, beams. These constructions have mass, occupy space, and exist in a three-dimensional coordinate system.

The architectural metaphor offers capabilities that paper cannot:
- Architecture is three-dimensional. Elements have length, width, and depth.
- Architecture is transparent. Glass walls, open doorways, and layered materials allow visibility through depth.
- Architecture has mass. Heavy elements feel permanent and immovable. Light elements feel temporary and dismissible.
- Architecture is infinite. The space extends beyond the visible frame, and elements can be positioned anywhere within it.

### The Core Philosophical Shifts

| Aspect | Material Design | WHITE DIAMOND |
|--------|----------------|---------------|
| **Metaphor** | Physical paper and ink | Spatial physics and architecture |
| **Depth model** | Discrete elevation levels (0–24dp) | Continuous spatial depth |
| **Motion purpose** | Meaningful motion (choreographed transitions) | Physical motion (demonstrates spatial physics) |
| **Color source** | Dynamic color (extracted from wallpaper) | Semantic color (meaning-driven palette) |
| **Typography** | Type scale (Roboto, specific sizes) | Type hierarchy (system font, semantic roles) |
| **Component model** | Comprehensive library (pre-built components) | Specification-based (principles for creating components) |
| **Grid system** | 24dp grid (fixed unit) | Flexible grid (adaptive proportions) |
| **Shape system** | Shape theming (corners, cuts, folds) | Rectangular only (no circles, ovals, or organic shapes) |
| **Interaction model** | Ripple effects, bottom sheets, FABs | Spatial feedback, progressive disclosure, layered overlays |
| **Elevation** | 5 discrete levels (0, 1, 2, 3, 4) with specific shadows | Continuous depth system with context-appropriate shadows |

### Why These Differences Matter

These are not aesthetic preferences. They are architectural decisions that produce fundamentally different user experiences.

**Discrete vs. continuous depth:** Material Design's 5 elevation levels create a rigid hierarchy. Content sits at elevation 0, cards at elevation 1, app bars at elevation 4. This rigidity works for simple interfaces but breaks down when the spatial relationships are more nuanced. WHITE DIAMOND's continuous depth system allows any element to be positioned at any depth, enabling more precise spatial communication.

**Dynamic vs. semantic color:** Material Design's dynamic color extracts a palette from the user's wallpaper, creating a personalized aesthetic. But color that derives from wallpaper is decorative — it communicates brand identity, not functional meaning. WHITE DIAMOND's semantic color assigns specific colors to specific meanings (success, warning, error, info), creating a functional vocabulary that the user learns and relies upon.

**Paper vs. architecture:** Material Design's paper metaphor limits the interface to flat, opaque sheets. WHITE DIAMOND's architectural metaphor enables layered, transparent, and structurally complex spatial arrangements. This is not about making interfaces "look like buildings" — it is about using the spatial capabilities that architecture provides and paper does not.

## Migration Strategy

### Step 1: Understand the Philosophical Shift

Before changing a single line of code, internalize the philosophical differences. This is not a component-by-component replacement. It is a change in how you conceptualize the interface.

**Material thinking:** "I have a card at elevation 2 with a shadow that corresponds to 6dp height."

**WHITE DIAMOND thinking:** "I have an architectural construction with defined boundaries, an inner surface, and content. It exists at a specific depth in the spatial field, and its shadow communicates that depth to the user."

The migration is complete not when the CSS changes are applied, but when the thinking changes.

### Step 2: Map Material Components to WHITE DIAMOND Principles

| Material Component | WHITE DIAMOND Equivalent | Reasoning |
|-------------------|--------------------------|-----------|
| FAB (Floating Action Button) | Primary action button (elevated) | FABs are Material-specific. In WHITE DIAMOND, the primary action is a button with clear spatial elevation, not a floating circle. |
| Snackbar | Toast notification | Snackbar and toast are conceptually identical — temporary, non-blocking notifications. Remove Material-specific styling and apply spatial principles. |
| Bottom navigation bar | Primary navigation (elevated) | Bottom navigation is a Material pattern. In WHITE DIAMOND, navigation is an elevated spatial element with clear hierarchy. |
| Cards | Content containers with boundaries | Cards in Material are elevation 1 sheets. In WHITE DIAMOND, cards are architectural constructions with explicit borders and shadows. |
| Text fields (filled/outlined) | Inputs with clear boundaries | Material offers two input styles. WHITE DIAMOND specifies a single input style with clear boundary definition. |
| Dialogs | Modal overlays | Material dialogs are elevation 24 sheets. WHITE DIAMOND modals are elevated spatial layers with explicit overlay treatment. |
| Chips | Tags/badges | Material chips are interactive pills. In WHITE DIAMOND, these become rectangular tags with clear boundaries. |
| Bottom sheets | Layered overlays | Material bottom sheets slide up from below. WHITE DIAMOND overlays are spatial layers positioned at the appropriate depth. |
| Navigation drawer | Spatial panel | Material drawers slide in from the edge. WHITE DIAMOND panels are architectural elements that occupy defined spatial positions. |
| Switches/Toggles | Binary state controls | Material switches are animated toggles. WHITE DIAMOND switches are rectangular controls with clear on/off states. |

### Step 3: Replace the Elevation System

Material Design uses 5 discrete elevation levels. WHITE DIAMOND uses continuous depth.

**Material:**
```css
/* 5 discrete levels */
.elevation-0 { box-shadow: none; }
.elevation-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
.elevation-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); }
.elevation-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
.elevation-4 { box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); }
```

**WHITE DIAMOND:**
```css
/* Continuous depth based on spatial role */
.layer-content {
  /* No shadow — content is the deepest visible plane */
  box-shadow: none;
}
.layer-surface {
  /* Subtle shadow — surface is slightly elevated */
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.layer-elevated {
  /* Moderate shadow — elevated element */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.layer-overlay {
  /* Strong shadow — overlay element */
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.layer-modal {
  /* Maximum shadow — modal element */
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
}
```

**Architectural reasoning:** Material's discrete levels force every element into one of 5 depth categories. WHITE DIAMOND's continuous system allows any element to be positioned at any depth, with shadows that communicate that depth precisely. This is the difference between a building with 5 floor levels and a building with an elevator that stops at any floor.

### Step 4: Replace the Color System

Material Design uses dynamic color — a palette extracted from the user's wallpaper. WHITE DIAMOND uses semantic color — colors that communicate functional meaning.

**Material:**
```css
/* Dynamic color — derived from wallpaper */
--md-sys-color-primary: /* Extracted dynamically */
--md-sys-color-on-primary: /* Derived from primary */
--md-sys-color-primary-container: /* Derived from primary */
--md-sys-color-secondary: /* Derived from wallpaper */
/* ... 50+ color tokens */
```

**WHITE DIAMOND:**
```css
/* Semantic color — meaning-driven */
:root {
  /* Primary actions */
  --color-primary: #3B82F6;
  --color-primary-dark: #2563EB;
  --color-primary-light: #60A5FA;

  /* Semantic states */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Neutral scale */
  --color-surface: #FFFFFF;
  --color-surface-elevated: #F8FAFC;
  --color-text-primary: #0F172A;
  --color-text-secondary: #64748B;
  --color-border-default: #E2E8F0;
  --color-border-subtle: #F1F5F9;
}
```

**Architectural reasoning:** Dynamic color creates personalized aesthetics but communicates no functional meaning. A "primary" color derived from wallpaper may be red in one user's theme and blue in another's. This inconsistency undermines the user's ability to learn a color vocabulary. WHITE DIAMOND's semantic colors are consistent across all users and all contexts, creating a reliable functional language.

### Step 5: Replace the Typography System

Material Design uses Roboto with a specific type scale. WHITE DIAMOND uses system fonts with a semantic hierarchy.

**Material:**
```css
/* Material type scale */
.display-large { font-size: 57px; line-height: 64px; letter-spacing: -0.25px; }
.display-medium { font-size: 45px; line-height: 52px; }
.display-small { font-size: 36px; line-height: 44px; }
.headline-large { font-size: 32px; line-height: 40px; }
.headline-medium { font-size: 28px; line-height: 36px; }
.headline-small { font-size: 24px; line-height: 32px; }
.title-large { font-size: 22px; line-height: 28px; }
.title-medium { font-size: 16px; line-height: 24px; letter-spacing: 0.15px; }
.title-small { font-size: 14px; line-height: 20px; letter-spacing: 0.1px; }
.body-large { font-size: 16px; line-height: 24px; letter-spacing: 0.5px; }
.body-medium { font-size: 14px; line-height: 20px; letter-spacing: 0.25px; }
.body-small { font-size: 12px; line-height: 16px; letter-spacing: 0.4px; }
.label-large { font-size: 14px; line-height: 20px; letter-spacing: 0.1px; }
.label-medium { font-size: 12px; line-height: 16px; letter-spacing: 0.5px; }
.label-small { font-size: 11px; line-height: 16px; letter-spacing: 0.5px; }
```

**WHITE DIAMOND:**
```css
/* Semantic type hierarchy */
:root {
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-size-caption: 12px;
  --font-size-body: 14px;
  --font-size-h4: 16px;
  --font-size-h3: 18px;
  --font-size-h2: 22px;
  --font-size-h1: 28px;
  --font-size-display: 36px;

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

**Architectural reasoning:** Material's 15 named type styles create a granular but opaque system. WHITE DIAMOND's 7 semantic sizes create a simpler, more transparent hierarchy. The user does not need to understand the difference between "title-large" and "headline-medium" — they need to understand "heading" and "body." The system font is preferred over Roboto because it matches the user's operating system, reducing visual friction.

### Step 6: Replace the Motion System

Material Design uses choreographed motion with specific easing curves. WHITE DIAMOND uses physical motion that demonstrates spatial physics.

**Material:**
```css
/* Material motion */
.md-motion-easing-standard { transition-timing-function: cubic-bezier(0.2, 0, 0, 1); }
.md-motion-easing-emphasized { transition-timing-function: cubic-bezier(0.2, 0, 0, 1); }
.md-motion-easing-decelerate { transition-timing-function: cubic-bezier(0, 0, 0, 1); }
.md-motion-easing-accelerate { transition-timing-function: cubic-bezier(0.3, 0, 1, 1); }
```

**WHITE DIAMOND:**
```css
/* Physical motion — demonstrates spatial physics */
:root {
  /* Elements entering the spatial field: ease-out (decelerate into position) */
  --ease-enter: cubic-bezier(0.33, 1, 0.68, 1);

  /* Elements leaving the spatial field: ease-in (accelerate out of position) */
  --ease-exit: cubic-bezier(0.32, 0, 0.67, 0);

  /* Elements transforming in place: ease-in-out (smooth transition) */
  --ease-transform: cubic-bezier(0.65, 0, 0.35, 1);
}

/* Duration based on spatial distance */
.duration-instant { transition-duration: 100ms; }
.duration-fast { transition-duration: 200ms; }
.duration-normal { transition-duration: 300ms; }
.duration-slow { transition-duration: 400ms; }
```

**Architectural reasoning:** Material's motion is choreographed — it tells a story. A dialog opens with a specific sequence of scaling, fading, and positioning. This choreography is meaningful but artificial. WHITE DIAMOND's motion is physical — it demonstrates how objects behave in space. An element entering the field decelerates (ease-out) as if arriving from a distance. An element leaving the field accelerates (ease-in) as if departing. This physics-based approach produces motion that feels natural rather than performed.

### Step 7: Remove Material-Specific Patterns

Several Material Design patterns have no WHITE DIAMOND equivalent. These must be removed, not replaced.

**Ripple effects:** Material uses ripple animations on touch/click. WHITE DIAMOND uses subtle scale and shadow changes. Ripples are decorative — they do not communicate spatial physics. Remove all ripple animations.

**Text transformation:** Material often uses uppercase text for labels and buttons (`text-transform: uppercase`). WHITE DIAMOND uses natural case. Text transformation reduces readability and adds visual noise.

**Extended floating action buttons:** Material's FABs and extended FABs are Material-specific patterns. In WHITE DIAMOND, primary actions are elevated buttons positioned within the spatial hierarchy, not floating elements.

**Bottom sheets:** Material's bottom sheets slide up from below the viewport. In WHITE DIAMOND, overlays are positioned within the spatial field, not anchored to viewport edges.

**Navigation rail:** Material's navigation rail is a side panel with icons. In WHITE DIAMOND, navigation is a spatial element with clear boundaries and hierarchy, not a Material-specific pattern.

**Shape theming:** Material's shape system adds rounded corners, cuts, and folds to elements. WHITE DIAMOND uses only rectangles. All rounded corners, cuts, and organic shapes must be removed.

**Snackbar positioning:** Material positions snackbars at the bottom of the viewport. In WHITE DIAMOND, toast notifications are positioned based on spatial hierarchy, not viewport anchoring.

## Component Migration Details

### Buttons

**Material:**
```css
.md-button {
  height: 40px;
  padding: 0 16px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--md-sys-typescale-label-large-font);
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
.md-button--filled { /* Filled variant */ }
.md-button--outlined { /* Outlined variant */ }
.md-button--text { /* Text-only variant */ }
.md-button--tonal { /* Tonal variant */ }
```

**WHITE DIAMOND:**
```css
.button {
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius-medium);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  background: var(--color-primary);
  color: var(--color-surface);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: all 100ms ease-out;
  cursor: pointer;
}
.button:hover {
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  background: var(--color-primary-dark);
}
.button:active {
  transform: scale(0.98);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
```

**Key differences:** No text transformation. No extreme border radius. No Material-specific variants. System font. Spatial feedback through shadow and scale.

### Cards

**Material:**
```css
.md-card {
  border-radius: 12px;
  background: var(--md-sys-color-surface);
  padding: 16px;
}
```

**WHITE DIAMOND:**
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--border-color-subtle);
  border-radius: var(--border-radius-medium);
  padding: var(--spacing-4);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

**Key differences:** Explicit border (Material relies on shadow alone). Defined spacing from the spacing scale. Shadow communicates depth rather than elevation level.

### Text Fields

**Material:**
```css
.md-text-field {
  border-bottom: 1px solid var(--md-sys-color-outline);
  padding: 16px 0 8px;
  background: transparent;
}
.md-text-field--filled {
  border-bottom: none;
  background: var(--md-sys-color-surface-variant);
  border-radius: 4px 4px 0 0;
}
```

**WHITE DIAMOND:**
```css
.input {
  border: 1px solid var(--border-color-default);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-surface);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  transition: border-color 100ms ease-out, box-shadow 100ms ease-out;
}
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}
```

**Key differences:** Full border (Material uses bottom-only or filled backgrounds). Consistent padding. Focus ring communicates spatial activation.

### Dialogs

**Material:**
```css
.md-dialog {
  border-radius: 28px;
  background: var(--md-sys-color-surface);
  box-shadow: 0 24px 38px rgba(0,0,0,0.14), 0 9px 46px rgba(0,0,0,0.12), 0 11px 15px rgba(0,0,0,0.2);
}
```

**WHITE DIAMOND:**
```css
.modal {
  border-radius: var(--border-radius-medium);
  background: var(--color-surface);
  border: 1px solid var(--border-color-subtle);
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  padding: var(--spacing-6);
}
.modal-backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}
```

**Key differences:** Smaller border radius. Explicit border. Backdrop provides spatial context (the modal exists in front of the content plane).

## Migration Checklist

### Philosophical Shift
- [ ] Understand the architectural metaphor (space, not paper)
- [ ] Understand the spatial depth model (continuous, not discrete)
- [ ] Understand the color philosophy (semantic, not dynamic)
- [ ] Understand the motion philosophy (physical, not choreographed)

### Component Replacement
- [ ] Replace Material elevation levels with WHITE DIAMOND layer system
- [ ] Replace dynamic color palette with semantic color palette
- [ ] Replace Material type scale with WHITE DIAMOND type hierarchy
- [ ] Replace Material motion curves with physical motion curves
- [ ] Replace Material buttons with spatially aware buttons
- [ ] Replace Material cards with architecturally defined cards
- [ ] Replace Material text fields with boundary-defined inputs
- [ ] Replace Material dialogs with layered modal overlays

### Material Pattern Removal
- [ ] Remove all ripple animations
- [ ] Remove all text transformation (uppercase)
- [ ] Remove all rounded corners beyond border-radius-medium
- [ ] Remove all Material-specific components (FAB, bottom sheet, navigation rail)
- [ ] Remove all shape theming (cuts, folds, organic shapes)
- [ ] Remove Roboto font (use system font)

### Testing
- [ ] Test with keyboard navigation (all interactive elements must be focusable)
- [ ] Test with screen readers (all spatial relationships must be communicated semantically)
- [ ] Test at 200% zoom (spatial relationships must remain clear at all scales)
- [ ] Test color contrast (all text must meet 4.5:1 ratio minimum)
- [ ] Verify spatial depth communicates correctly (shadows, borders, layering)

## See Also

- [From Flat Design](from-flat-design.md) — Transitioning from flat interfaces
- [Design Tokens](../tokens/design-tokens.md) — Atomic values that replace Material tokens
- [Color System](../tokens/color-system.md) — Semantic color definitions
- [Spacing System](../tokens/spacing-system.md) — Spatial proportions
- [Animation Principles](../motion/animation-principles.md) — Physical motion in WHITE DIAMOND
