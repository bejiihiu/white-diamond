# Color System

## Why This Document Exists

Color in interfaces is not decoration. It is **communication**. Every chromatic decision—every hue, saturation, and lightness value—must serve a purpose. Color without purpose is visual noise; color with purpose is information architecture.

The color system exists because arbitrary color choices produce arbitrary interfaces. When one developer uses `#333` for text and another uses `#1a1a1a`, the result is not variation—it is inconsistency. When a success message uses one green and an error message uses a similar green, the result is confusion.

Color systematization ensures that every color communicates something, that the same color always communicates the same thing, and that all color combinations meet accessibility requirements. This is not aesthetic preference—it is structural necessity.

---

## Color Philosophy

Color operates on three levels in WHITE DIAMOND:

### Information

Color communicates **status, meaning, and hierarchy**. A red border communicates error. A blue button communicates primary action. A gray background communicates de-emphasis. These are not decorative choices—they are informational signals that users learn to recognize and depend on.

When color information is inconsistent—when red sometimes means error and sometimes means warning—users cannot rely on color cues. The system fails.

### Differentiation

Color distinguishes **elements from each other**. In a list of items, alternating background colors help users track rows. In a navigation menu, active state color identifies the current location. Without differentiation, elements blend into visual undifferentiated mass.

### Atmosphere

Color creates **visual tone and personality**. A system with cool grays and blue accents feels technical and precise. A system with warm grays and amber accents feels approachable and friendly. Atmosphere is the only subjective dimension of color—and it must be restrained.

**Critical rule:** Color must never be the only way to convey information. Every color signal must have a redundant non-color indicator. This ensures accessibility for color-blind users and maintains clarity in high-contrast or monochrome contexts.

---

## Color Architecture

WHITE DIAMOND organizes color into five architectural layers:

### Layer 1: Primitive Colors

Primitive colors are **raw chromatic values without semantic meaning**. They are the periodic table of the color system:

#### Primary Scale

| Token      | Value     | Role          |
| ---------- | --------- | ------------- |
| `blue-50`  | `#EFF6FF` | Lightest tint |
| `blue-100` | `#DBEAFE` | Light tint    |
| `blue-200` | `#BFDBFE` | Light medium  |
| `blue-300` | `#93C5FD` | Medium light  |
| `blue-400` | `#60A5FA` | Medium        |
| `blue-500` | `#3B82F6` | Primary value |
| `blue-600` | `#2563EB` | Dark primary  |
| `blue-700` | `#1D4ED8` | Darker        |
| `blue-800` | `#1E40AF` | Very dark     |
| `blue-900` | `#1E3A8A` | Darkest       |

#### Neutral Scale

| Token      | Value     | Role          |
| ---------- | --------- | ------------- |
| `gray-50`  | `#F9FAFB` | Near white    |
| `gray-100` | `#F3F4F6` | Lightest gray |
| `gray-200` | `#E5E7EB` | Light gray    |
| `gray-300` | `#D1D5DB` | Medium light  |
| `gray-400` | `#9CA3AF` | Medium        |
| `gray-500` | `#6B7280` | Medium dark   |
| `gray-600` | `#4B5563` | Dark gray     |
| `gray-700` | `#374151` | Darker        |
| `gray-800` | `#1F2937` | Very dark     |
| `gray-900` | `#111827` | Near black    |

#### Semantic Scales

| Scale   | 500 Value | Purpose              |
| ------- | --------- | -------------------- |
| `green` | `#22C55E` | Success, positive    |
| `red`   | `#EF4444` | Error, destructive   |
| `amber` | `#F59E0B` | Warning, caution     |
| `cyan`  | `#06B6D4` | Information, neutral |

Each scale has 10 values (50-900) to provide flexibility across contexts. The 500 value is the "canonical" use; lighter values (50-300) serve backgrounds; darker values (600-900) serve text and emphasis.

### Layer 2: Semantic Colors

Semantic colors **assign meaning to primitive colors**. They answer: "What is this color _for_?"

```
color-primary: {blue-500}
color-primary-light: {blue-100}
color-primary-dark: {blue-700}

color-success: {green-500}
color-success-light: {green-100}
color-success-dark: {green-700}

color-error: {red-500}
color-error-light: {red-100}
color-error-dark: {red-700}

color-warning: {amber-500}
color-warning-light: {amber-100}
color-warning-dark: {amber-700}

color-info: {cyan-500}
color-info-light: {cyan-100}
color-info-dark: {cyan-700}
```

Semantic colors create a vocabulary of meaning. When a developer sees `color-error`, they understand its purpose without knowing its hex value. When the hex value changes, the purpose remains constant.

### Layer 3: Functional Colors

Functional colors **serve specific interface roles**:

#### Text Colors

| Token                  | Reference  | Usage                    | Contrast           |
| ---------------------- | ---------- | ------------------------ | ------------------ |
| `color-text-primary`   | `gray-900` | Headings, emphasis       | 17.4:1 on white    |
| `color-text-secondary` | `gray-600` | Body text                | 7.4:1 on white     |
| `color-text-tertiary`  | `gray-400` | Captions, hints          | 3.9:1 on white     |
| `color-text-disabled`  | `gray-300` | Unavailable text         | 2.3:1 on white     |
| `color-text-inverse`   | `gray-50`  | Text on dark backgrounds | 18.4:1 on gray-900 |

#### Background Colors

| Token               | Reference  | Usage                  |
| ------------------- | ---------- | ---------------------- |
| `color-bg-page`     | `gray-50`  | Page background        |
| `color-bg-surface`  | `white`    | Card, modal background |
| `color-bg-elevated` | `white`    | Elevated surface       |
| `color-bg-hover`    | `gray-100` | Hover state            |
| `color-bg-active`   | `gray-200` | Active/pressed state   |
| `color-bg-disabled` | `gray-100` | Disabled background    |

#### Border Colors

| Token                  | Reference   | Usage             |
| ---------------------- | ----------- | ----------------- |
| `color-border-subtle`  | `gray-200`  | Subtle separation |
| `color-border-default` | `gray-300`  | Standard borders  |
| `color-border-strong`  | `gray-400`  | Emphasis borders  |
| `color-border-focus`   | `blue-500`  | Focus indicators  |
| `color-border-error`   | `red-500`   | Error states      |
| `color-border-success` | `green-500` | Success states    |

### Layer 4: Interactive Colors

Interactive colors **indicate element states**:

#### Link Colors

| Token                | Reference    | Usage        |
| -------------------- | ------------ | ------------ |
| `color-link-default` | `blue-600`   | Default link |
| `color-link-hover`   | `blue-700`   | Hovered link |
| `color-link-active`  | `blue-800`   | Active link  |
| `color-link-visited` | `purple-600` | Visited link |

#### Button Colors

| Token                        | Reference  | Usage                       |
| ---------------------------- | ---------- | --------------------------- |
| `color-btn-primary-bg`       | `blue-500` | Primary button background   |
| `color-btn-primary-bg-hover` | `blue-600` | Primary button hover        |
| `color-btn-primary-text`     | `white`    | Primary button text         |
| `color-btn-secondary-bg`     | `white`    | Secondary button background |
| `color-btn-secondary-border` | `gray-300` | Secondary button border     |
| `color-btn-secondary-text`   | `gray-700` | Secondary button text       |
| `color-btn-disabled-bg`      | `gray-100` | Disabled button background  |
| `color-btn-disabled-text`    | `gray-300` | Disabled button text        |

### Layer 5: Component Colors

Component colors are **component-specific tokens that reference functional colors**:

```
input-border-default: {color-border-default}
input-border-focus: {color-border-focus}
input-border-error: {color-border-error}
input-bg: {color-bg-surface}
input-bg-disabled: {color-bg-disabled}
input-text: {color-text-primary}
input-text-placeholder: {color-text-tertiary}

card-bg: {color-bg-surface}
card-border: {color-border-subtle}
card-shadow: {shadow-low}

modal-bg: {color-bg-elevated}
modal-overlay: {color-bg-page}
modal-border: {color-border-default}
```

---

## Color Relationships and Contrast

### Contrast Requirements

Every color combination must meet WCAG 2.1 contrast requirements:

| Context                            | Minimum Ratio | Target Ratio |
| ---------------------------------- | ------------- | ------------ |
| Normal text (< 18px)               | 4.5:1         | 7:1          |
| Large text (≥ 18px bold or ≥ 24px) | 3:1           | 4.5:1        |
| UI components                      | 3:1           | 4.5:1        |
| Focus indicators                   | 3:1           | 4.5:1        |

### Contrast Calculations

The following combinations meet minimum requirements:

| Foreground  | Background | Ratio  | Pass |
| ----------- | ---------- | ------ | ---- |
| `gray-900`  | `white`    | 17.4:1 | AAA  |
| `gray-600`  | `white`    | 7.4:1  | AAA  |
| `gray-400`  | `white`    | 3.9:1  | AA   |
| `blue-500`  | `white`    | 4.6:1  | AA   |
| `red-500`   | `white`    | 4.5:1  | AA   |
| `green-500` | `white`    | 4.6:1  | AA   |
| `white`     | `gray-900` | 18.4:1 | AAA  |
| `white`     | `blue-500` | 4.6:1  | AA   |

### Color Independence

Color must not be the only indicator of meaning. Every color signal requires a redundant indicator:

- **Error states** — Red color + icon + text description
- **Success states** — Green color + icon + text description
- **Required fields** — Label text + asterisk + color
- **Interactive elements** — Color change + underline + cursor change
- **Disabled states** — Color change + opacity change + cursor change

---

## Color Rules

### Rule 1: Colors Have Purpose

Every color usage must answer: "What does this color communicate?" If the answer is "nothing" or "it looks nice," the color is decorative noise. Decorative noise competes with informational signals, reducing the system's communicative power.

### Rule 2: Colors Are Consistent

The same color must be used for the same purpose everywhere. `color-error` is always `red-500`. `color-primary` is always `blue-500`. There is no variation. Consistency enables recognition; recognition enables speed.

### Rule 3: Colors Are Limited

Too many colors create visual chaos. The system provides:

- 2-3 brand colors (primary, secondary, accent)
- 1 neutral scale (10 values)
- 4 semantic colors (success, warning, error, info)

Beyond these, colors are not added—they are composed from existing values.

### Rule 4: Colors Are Accessible

Every color combination must meet contrast requirements. If a combination fails, it is not a variation—it is an error. Accessibility is not a feature; it is a requirement.

### Rule 5: Colors Are Themeable

Colors must support multiple themes through alias token remapping:

- **Light theme** — Dark text on light backgrounds
- **Dark theme** — Light text on dark backgrounds
- **High contrast** — Enhanced contrast ratios
- **Custom themes** — User-defined color palettes

Themes change values, not purposes. `color-text-primary` is always primary text, regardless of theme.

---

## Color Application

### Text Application

Text colors follow a strict hierarchy:

1. **Primary text** — `gray-900` on `white` — Headings, emphasis
2. **Secondary text** — `gray-600` on `white` — Body text, descriptions
3. **Tertiary text** — `gray-400` on `white` — Captions, hints, timestamps
4. **Disabled text** — `gray-300` on `white` — Unavailable content
5. **Link text** — `blue-600` on `white` — Clickable references

### Background Application

Backgrounds establish spatial hierarchy:

1. **Page background** — `gray-50` — Lowest level, provides contrast
2. **Surface background** — `white` — Cards, modals, elevated elements
3. **Hover background** — `gray-100` — Interactive feedback
4. **Active background** — `gray-200` — Confirmation feedback
5. **Disabled background** — `gray-100` — Reduced emphasis

### Border Application

Borders communicate boundaries and states:

1. **Subtle borders** — `gray-200` — Light separation between surfaces
2. **Default borders** — `gray-300` — Standard element boundaries
3. **Strong borders** — `gray-400` — Emphasis, importance
4. **Focus borders** — `blue-500` — Keyboard navigation indicator
5. **Error borders** — `red-500` — Invalid state indicator
6. **Success borders** — `green-500` — Valid state indicator

---

## Color Theming

Themes are achieved through alias token remapping. The same alias tokens reference different primitive values:

### Light Theme

```
color-text-primary: {gray-900}
color-text-secondary: {gray-600}
color-bg-page: {gray-50}
color-bg-surface: {white}
color-border-default: {gray-300}
```

### Dark Theme

```
color-text-primary: {gray-50}
color-text-secondary: {gray-300}
color-bg-page: {gray-900}
color-bg-surface: {gray-800}
color-border-default: {gray-600}
```

### High Contrast Theme

```
color-text-primary: {black}
color-text-secondary: {gray-800}
color-bg-page: {white}
color-bg-surface: {white}
color-border-default: {gray-800}
```

The mechanism is identical; only the values change. This is the power of the token architecture.

---

## See Also

- [Design Tokens](design-tokens.md) — The atomic value architecture
- [Spacing System](spacing-system.md) — Spatial relationships
- [Border System](border-system.md) — Edge definitions
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access requirements
- [Screen Readers](../accessibility/screen-readers.md) — Non-visual access patterns
- [Core Principles](../philosophy/core-principles.md) — Axioms from which color rules derive
