# Border System

## Why This Document Exists

In WHITE DIAMOND, borders are **the most important visual element**. This is not hyperbole—it is architectural law. Without a border, an object does not exist. The border is the physical boundary that separates an object from the void, that defines where an object begins and ends, that gives an object presence in space.

Consider a card without borders. It floats. It is indistinguishable from the background. It has no edges, no boundaries, no physical reality. Now add a border. Suddenly, the card *exists*. It has weight, presence, and definition. It occupies space.

This is not decoration. This is existence.

---

## Border Philosophy

Borders serve four fundamental purposes in WHITE DIAMOND:

### Existence

Borders define **object existence**. In a spatial system where elements occupy real space, existence requires boundaries. A boundary that cannot be perceived is a boundary that does not exist. An object without perceived boundaries is an object without existence.

Every visible element in WHITE DIAMOND has borders—even if those borders are 0px wide. The token `border-width-none` is not the absence of a border; it is a border with zero width. The distinction matters: zero width is a design decision; no border is an oversight.

### Separation

Borders **separate unrelated elements**. When two elements exist in proximity, borders communicate that they are distinct objects. Without borders, adjacent elements merge into visual undifferentiated mass.

Separation is not isolation. Borders separate objects while maintaining spatial relationships. Two cards with borders next to each other are clearly separate objects in a clear spatial relationship. Two borderless rectangles next to each other are ambiguous—is this one object or two?

### Containment

Borders **define where elements begin and end**. A button's border defines the clickable area. A card's border defines the content boundary. A modal's border defines the overlay extent.

Containment communicates interactivity. Users learn that borders indicate interactive boundaries—clicking within a border produces an effect; clicking outside does not.

### Hierarchy

Borders **communicate importance through emphasis**. A thicker border draws more attention. A colored border signals status. A focused border indicates keyboard navigation.

Hierarchy through borders is immediate and universal. Users do not need to learn that a thick border means "important"—it is perceptually obvious.

---

## Border Architecture

### Border Width

Width defines the **physical thickness** of borders. It communicates presence and emphasis:

| Token | Value | Usage | Reasoning |
|-------|-------|-------|-----------|
| `border-width-none` | 0px | Borderless objects | Object exists but has no visible boundary |
| `border-width-thin` | 1px | Subtle separation | Minimal visual weight |
| `border-width-medium` | 2px | Default borders | Standard visual weight |
| `border-width-thick` | 3px | Emphasis borders | Increased visual weight |
| `border-width-heavy` | 4px | Strong emphasis | Maximum visual weight |

#### Width Rules

1. **Progressive emphasis** — Width increases with importance
2. **Consistency** — Same element type, same width
3. **Accessibility** — Focus indicators minimum 2px (WCAG 2.1)
4. **Responsiveness** — Width may adapt to display density

#### Width Relationships

Width communicates hierarchy through magnitude:

- **0px** — Borderless (background elements, decorative surfaces)
- **1px** — Subtle (default separation, low emphasis)
- **2px** — Standard (primary elements, default state)
- **3px** — Emphasized (important elements, hover states)
- **4px** — Strong (critical elements, active states, error states)

---

### Border Radius

Radius defines the **corner treatment** of borders. It communicates character and form:

| Token | Value | Usage | Reasoning |
|-------|-------|-------|-----------|
| `border-radius-none` | 0px | Sharp corners | Maximum geometric precision |
| `border-radius-small` | 4px | Subtle rounding | Slight softening |
| `border-radius-medium` | 8px | Default rounding | Standard character |
| `border-radius-large` | 12px | Prominent rounding | Distinctive character |
| `border-radius-xl` | 16px | Very round | Strong character |
| `border-radius-full` | 9999px | Pill shape | Circular approximation |

**WHITE DIAMOND Axiom V: Only Rectangles Exist.** Circles, ovals, and organic shapes are forbidden. Border radius does not create circles—it creates rounded rectangles. Even `border-radius-full` produces a pill shape, not a circle. The distinction is structural: a pill has two straight edges; a circle has none.

#### Radius Rules

1. **Consistency** — Same element type, same radius
2. **Proportionality** — Larger elements may have larger radius
3. **Harmony** — Related elements have related radius
4. **Accessibility** — Focus indicators follow radius

#### Radius Patterns

| Element | Token | Value | Pattern |
|---------|-------|-------|---------|
| Button | `border-radius-button` | `border-radius-medium` (8px) | Consistent with inputs |
| Input | `border-radius-input` | `border-radius-medium` (8px) | Consistent with buttons |
| Card | `border-radius-card` | `border-radius-medium` (8px) | Standard container |
| Modal | `border-radius-modal` | `border-radius-large` (12px) | Elevated container |
| Badge | `border-radius-badge` | `border-radius-full` (9999px) | Pill shape |

---

### Border Style

Style defines the **visual treatment** of border lines:

| Token | Value | Usage | Reasoning |
|-------|-------|-------|-----------|
| `border-style-solid` | — | Default borders | Maximum clarity |
| `border-style-dashed` | — | Secondary borders | Reduced emphasis |
| `border-style-dotted` | — | Tertiary borders | Minimal emphasis |
| `border-style-double` | — | Special emphasis | Distinctive treatment |

#### Style Rules

1. **Solid is default** — Use solid for 90% of borders
2. **Dashed for secondary** — Use dashed for less important separations
3. **Dotted for tertiary** — Use dotted for minimal separations
4. **Double for emphasis** — Use double for distinctive emphasis
5. **Consistency** — Same element type, same style

#### Style Hierarchy

```
Primary elements:   solid    (maximum clarity)
Secondary elements: dashed   (reduced emphasis)
Tertiary elements:  dotted   (minimal emphasis)
Special emphasis:   double   (distinctive treatment)
```

---

### Border Color

Color defines the **chromatic treatment** of borders. It communicates status and emphasis:

| Token | Reference | Usage | Reasoning |
|-------|-----------|-------|-----------|
| `border-color-subtle` | `gray-200` | Light separation | Minimal visual weight |
| `border-color-default` | `gray-300` | Standard borders | Normal visual weight |
| `border-color-strong` | `gray-400` | Emphasis borders | Increased visual weight |
| `border-color-focus` | `blue-500` | Focus indicators | Interactive state |
| `border-color-error` | `red-500` | Error states | Status indication |
| `border-color-success` | `green-500` | Success states | Status indication |
| `border-color-warning` | `amber-500` | Warning states | Status indication |
| `border-color-info` | `cyan-500` | Information states | Status indication |

#### Color Rules

1. **Meaningful** — Color communicates status
2. **Accessible** — Colors meet contrast requirements
3. **Consistent** — Same status, same color
4. **Themeable** — Works in light and dark themes

#### Color Relationships

Border colors follow the same hierarchy as text colors:

```
Maximum emphasis:  border-color-strong (gray-400)
Standard emphasis: border-color-default (gray-300)
Minimum emphasis:  border-color-subtle (gray-200)
Interactive:       border-color-focus (blue-500)
Error:             border-color-error (red-500)
Success:           border-color-success (green-500)
```

---

## Border Patterns

### Input Borders

Inputs use borders to communicate state:

```
Default:  1px solid gray-300    (standard boundary)
Hover:    1px solid gray-400    (increased emphasis)
Focus:    2px solid blue-500    (interactive state)
Error:    2px solid red-500     (invalid state)
Disabled: 1px solid gray-200    (reduced emphasis)
```

**State transitions:**
- Default → Hover: Border darkens (1px gray-300 → 1px gray-400)
- Hover → Focus: Border thickens and colors (1px gray-400 → 2px blue-500)
- Focus → Error: Border recolors (2px blue-500 → 2px red-500)
- Any → Disabled: Border lightens and thins (respective → 1px gray-200)

### Card Borders

Cards use borders to define containment:

```
Default:     1px solid gray-200   (light separation)
Hover:       1px solid gray-300   (increased emphasis)
Elevated:    No border            (use shadow for depth)
Interactive: 1px solid gray-200, cursor pointer
```

**Border-shadow relationship:** Cards may use borders OR shadows for depth indication, not both. Borders define flat containment; shadows define elevated containment.

### Button Borders

Buttons use borders to define clickable area:

```
Primary:   No border            (filled background defines boundary)
Secondary: 1px solid gray-300   (border defines boundary)
Outline:   1px solid blue-500   (colored boundary)
Ghost:     No border            (no visible boundary)
Disabled:  1px solid gray-200   (reduced emphasis)
```

**Border-background relationship:** When a button has a filled background, the background defines the boundary. When a button has a transparent background, the border defines the boundary.

### Table Borders

Tables use borders to define structure:

```
Cell:       1px solid gray-200   (cell boundaries)
Header:     1px solid gray-300   (header emphasis)
Row hover:  1px solid gray-200   (row boundary)
Selected:   2px solid blue-500   (selection emphasis)
```

**Border-collapse behavior:** Adjacent table borders collapse to the thicker border, maintaining structural clarity without visual doubling.

---

## Border Rules

### Rule 1: Borders Are Consistent

The same element type must have the same border treatment. If inputs use 1px solid gray-300 in one form, they use 1px solid gray-300 in all forms. Inconsistency breaks visual coherence and confuses users.

### Rule 2: Borders Are Purposeful

Every border must serve a function:
- **Separation** — Keeping elements apart
- **Containment** — Defining element boundaries
- **Emphasis** — Drawing attention
- **Status** — Communicating state

Borders without purpose are visual noise. Visual noise competes with informational signals.

### Rule 3: Borders Are Accessible

Borders must work for all users:
- **Focus indicators** — Minimum 2px, high contrast (WCAG 2.1)
- **Status colors** — Not the only indicator (color independence)
- **Sufficient contrast** — 3:1 minimum against background
- **Minimum width** — At least 1px for visibility

### Rule 4: Borders Are Minimal

Use the minimum border treatment necessary:
- **Default** — Use minimal border width
- **Emphasis** — Increase only when needed
- **Style** — Solid is preferred over dashed/dotted
- **Color** — Subtle is preferred over strong

Overusing borders creates visual clutter. Visual clutter reduces the communicative power of borders.

### Rule 5: Borders Are Themeable

Borders must work across themes through alias token remapping:

**Light theme:**
```
border-color-subtle: {gray-200}
border-color-default: {gray-300}
border-color-strong: {gray-400}
```

**Dark theme:**
```
border-color-subtle: {gray-700}
border-color-default: {gray-600}
border-color-strong: {gray-500}
```

**High contrast theme:**
```
border-color-subtle: {gray-600}
border-color-default: {gray-700}
border-color-strong: {gray-800}
```

The mechanism is identical; only the values change. Themes change values, not purposes.

---

## Border Anti-Patterns

### Invisible Borders

**Problem:** Using `border: none` or `border: 0` instead of `border-width: 0`.
**Reason:** `border: none` removes the border object entirely. `border-width: 0` preserves the border object with zero width. The distinction matters for programmatic manipulation and consistency.

### Inconsistent Radii

**Problem:** Using 6px, 7px, 8px, and 9px radii across similar elements.
**Reason:** Arbitrary radii create visual inconsistency. Use scale values: 0px, 4px, 8px, 12px, 16px, 9999px.

### Over-Bordering

**Problem:** Using borders on every element, including backgrounds and decorative surfaces.
**Reason:** Borders exist to define interactive boundaries and structural separations. Decorative surfaces do not need borders.

### Under-Bordering

**Problem:** Removing borders from interactive elements, making them indistinguishable from static content.
**Reason:** Interactive elements require borders to communicate clickability. Borderless buttons are ambiguous.

### Shadow-Border Duplication

**Problem:** Using both borders and box-shadows on the same element.
**Reason:** Borders define flat containment; shadows define elevated containment. Using both creates visual conflict.

---

## Border and Spatial Hierarchy

Borders participate in the three-layer hierarchy:

```
Physical Boundary (Border) → Inner Surface (Padding) → Content
```

This hierarchy is immutable:
1. The border defines the object's existence
2. The padding (inner surface) provides context for content
3. The content is the reason for the object's existence

You cannot have content without a surface, and you cannot have a surface without boundaries. Borders are not optional—they are foundational.

---

## See Also

- [Design Tokens](design-tokens.md) — The atomic value architecture
- [Color System](color-system.md) — Chromatic definitions
- [Spacing System](spacing-system.md) — Spatial relationships
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Object Structure](../spatial-hierarchy/object-structure.md) — How objects occupy space
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access requirements
- [Core Principles](../philosophy/core-principles.md) — Axioms from which border rules derive
