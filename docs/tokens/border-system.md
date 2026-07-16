# Border System

## Why This Matters

Borders define the edges of elements, creating visual boundaries that communicate separation, containment, and hierarchy. Without a systematic border system, elements float without clear limits, creating visual confusion.

## Border Philosophy

Borders are not decoration—they are spatial communication:
- **Separation** — Borders separate unrelated elements
- **Containment** — Borders define where elements begin and end
- **Hierarchy** — Border emphasis communicates importance
- **Focus** — Borders indicate interactive states

## Border Categories

### Border Width

The thickness of border lines:

| Token | Value | Usage |
|-------|-------|-------|
| `border-width-none` | 0px | No border |
| `border-width-thin` | 1px | Subtle separation |
| `border-width-medium` | 2px | Default borders |
| `border-width-thick` | 3px | Emphasis borders |
| `border-width-heavy` | 4px | Strong emphasis |

Width rules:
- **Consistent** — Same type of element, same width
- **Proportional** — More emphasis = thicker border
- **Accessible** — Focus indicators are at least 2px
- **Responsive** — Can adapt to screen density

### Border Radius

The rounding of border corners:

| Token | Value | Usage |
|-------|-------|-------|
| `border-radius-none` | 0px | Sharp corners |
| `border-radius-small` | 4px | Subtle rounding |
| `border-radius-medium` | 8px | Default rounding |
| `border-radius-large` | 12px | Prominent rounding |
| `border-radius-xl` | 16px | Very round |
| `border-radius-full` | 9999px | Pill shape |

Radius rules:
- **Consistent** — Same type of element, same radius
- **Proportional** — Larger elements can have larger radius
- **Harmonious** — Related elements have related radius
- **Accessible** — Focus indicators follow radius

### Border Style

The appearance of border lines:

| Token | Value | Usage |
|-------|-------|-------|
| `border-style-solid` | — | Default borders |
| `border-style-dashed` | — | Secondary borders |
| `border-style-dotted` | — | Tertiary borders |
| `border-style-double` | — | Special emphasis |

Style rules:
- **Consistent** — Same type of element, same style
- **Meaningful** — Style communicates meaning
- **Accessible** — Styles are visible at all sizes
- **Platform-appropriate** — Follow platform conventions

### Border Color

The color of border lines:

| Token | Reference | Usage |
|-------|-----------|-------|
| `border-color-subtle` | `gray-200` | Light separation |
| `border-color-default` | `gray-300` | Standard borders |
| `border-color-strong` | `gray-400` | Emphasis borders |
| `border-color-focus` | `primary-500` | Focus indicators |
| `border-color-error` | `error-500` | Error states |
| `border-color-success` | `success-500` | Success states |

Color rules:
- **Meaningful** — Color communicates status
- **Accessible** — Colors meet contrast requirements
- **Consistent** — Same status, same color
- **Themeable** — Works in light and dark themes

## Border Patterns

### Input Borders

Borders for input elements:
```
Default: 1px solid gray-300
Hover: 1px solid gray-400
Focus: 2px solid primary-500
Error: 2px solid error-500
Disabled: 1px solid gray-200
```

### Card Borders

Borders for card elements:
```
Default: 1px solid gray-200
Hover: 1px solid gray-300
Elevated: No border (use shadow)
Interactive: 1px solid gray-200, cursor pointer
```

### Button Borders

Borders for button elements:
```
Primary: No border (filled)
Secondary: 1px solid gray-300
Outline: 1px solid primary-500
Ghost: No border
Disabled: 1px solid gray-200
```

### Table Borders

Borders for table elements:
```
Cell: 1px solid gray-200
Header: 1px solid gray-300
Row hover: 1px solid gray-200
Selected: 2px solid primary-500
```

## Border Rules

### Rule 1: Borders Are Consistent

The same type of element must have the same border treatment:
- **Same input** — Same border width, style, color
- **Same card** — Same border treatment
- **Same button** — Same border treatment
- **Same table** — Same border treatment

Inconsistent borders break visual coherence.

### Rule 2: Borders Are Purposeful

Every border must serve a purpose:
- **Separation** — Keeping elements apart
- **Containment** — Defining element boundaries
- **Emphasis** — Drawing attention
- **Status** — Communicating state

Borders without purpose are visual noise.

### Rule 3: Borders Are Accessible

Borders must work for all users:
- **Focus indicators** — Visible for keyboard users
- **Status colors** — Not the only indicator
- **Sufficient contrast** — Visible against backgrounds
- **Minimum width** — At least 1px for visibility

Inaccessible borders exclude users.

### Rule 4: Borders Are Minimal

Less is more with borders:
- **Default** — Use minimal border width
- **Emphasis** — Increase only when needed
- **Style** — Solid is preferred over dashed/dotted
- **Color** — Subtle is preferred over strong

Overusing borders creates visual clutter.

### Rule 5: Borders Are Themeable

Borders must work across themes:
- **Light theme** — Dark borders on light backgrounds
- **Dark theme** — Light borders on dark backgrounds
- **High contrast** — Enhanced border visibility
- **Custom themes** — Border values can be overridden

Non-themeable borders limit adaptability.

## See Also

- [Design Tokens](design-tokens.md) — The atomic values
- [Color System](color-system.md) — Color token definitions
- [Spacing System](spacing-system.md) — Spacing token definitions
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
