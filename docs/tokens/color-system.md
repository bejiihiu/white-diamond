# Color System

## Why This Matters

Color communicates meaning, creates hierarchy, and affects mood. Without a systematic color system, interfaces feel inconsistent and inaccessible. The color system ensures colors are used purposefully and accessibly.

## Color Philosophy

Color in interfaces serves three purposes:
1. **Information** — Communicates status, meaning, and hierarchy
2. **Differentiation** — Distinguishes elements from each other
3. **Atmosphere** — Creates visual tone and personality

Color should never be the only way to convey information.

## Color Categories

### Primary Colors

The brand's main colors:
- **Primary** — Main brand color, used for key actions
- **Primary Light** — Lighter variant for backgrounds, hovers
- **Primary Dark** — Darker variant for text, active states

Usage:
- Primary actions (buttons, links)
- Brand identity (logo, headers)
- Active states (selected, focused)

### Secondary Colors

Supporting brand colors:
- **Secondary** — Complementary brand color
- **Secondary Light** — Lighter variant
- **Secondary Dark** — Darker variant

Usage:
- Secondary actions
- Supporting elements
- Visual variety

### Neutral Colors

Non-chromatic colors:
- **Gray scale** — Black, grays, white
- **Warm grays** — Grays with warm undertone
- **Cool grays** — Grays with cool undertone

Usage:
- Text (various contrasts)
- Backgrounds (page, card, input)
- Borders (subtle, default, strong)
- Disabled states

### Semantic Colors

Colors with specific meaning:
- **Success** — Positive outcomes, confirmation
- **Warning** — Caution, attention needed
- **Error** — Problems, destructive actions
- **Info** — Informational, neutral alerts

Usage:
- Status indicators
- Feedback messages
- Validation states
- Alert types

### Interactive Colors

Colors for interactive elements:
- **Link** — Clickable text
- **Link Hover** — Link on hover
- **Link Active** — Link being clicked
- **Focus** — Keyboard focus indicator

Usage:
- Links
- Interactive elements
- Focus states

## Color Scales

Each color has a scale from light to dark:

### Primary Scale (Example)
- **50** — Lightest (backgrounds)
- **100** — Light (hover backgrounds)
- **200** — Light medium (borders)
- **300** — Medium (icons)
- **400** — Medium dark (text on light)
- **500** — Dark (primary use)
- **600** — Darker (hover)
- **700** — Darkest (active)
- **800-900** — Very dark (text on light)

### Neutral Scale (Example)
- **50** — White (backgrounds)
- **100** — Near white (subtle backgrounds)
- **200** — Light gray (borders)
- **300** — Medium light gray (disabled)
- **400** — Medium gray (placeholder text)
- **500** — Medium dark gray (secondary text)
- **600** — Dark gray (primary text)
- **700** — Near black (emphasis)
- **800** — Very dark (headings)
- **900** — Black (maximum contrast)

## Color Rules

### Rule 1: Colors Have Meaning

Every color must communicate something:
- **Status** — Success, warning, error, info
- **Action** — Primary, secondary, tertiary
- **Hierarchy** — Important, normal, subtle
- **State** — Default, hover, active, disabled

Colors without meaning are decorative noise.

### Rule 2: Colors Are Consistent

The same color must be used for the same purpose:
- **Same success** — Always the same green
- **Same primary** — Always the same blue
- **Same error** — Always the same red
- **Same neutral** — Always the same gray

Inconsistent colors confuse users.

### Rule 3: Colors Are Accessible

Colors must meet accessibility requirements:
- **Contrast ratio** — 4.5:1 for normal text, 3:1 for large text
- **Color independence** — Information not conveyed by color alone
- **Focus indicators** — High contrast focus rings
- **Dark mode** — Colors work in dark theme

Inaccessible colors exclude users.

### Rule 4: Colors Are Limited

Too many colors create visual chaos:
- **Primary colors** — 1-2
- **Secondary colors** — 1-2
- **Neutral colors** — 1 scale (10 values)
- **Semantic colors** — 4 (success, warning, error, info)

More colors than needed create inconsistency.

### Rule 5: Colors Are Themeable

Colors must support multiple themes:
- **Light theme** — Dark text on light backgrounds
- **Dark theme** — Light text on dark backgrounds
- **High contrast** — Enhanced contrast ratios
- **Custom themes** — User-defined color palettes

Non-themeable colors limit adaptability.

## Color Application

### Text Colors

- **Primary text** — High contrast (near-black on white)
- **Secondary text** — Medium contrast (dark gray)
- **Tertiary text** — Lower contrast (medium gray)
- **Disabled text** — Low contrast (light gray)
- **Link text** — Distinct color (blue)
- **Error text** — Error color (red)

### Background Colors

- **Page background** — Lowest contrast (white/light gray)
- **Card background** — Slightly elevated (white)
- **Input background** — Interactive (white)
- **Hover background** — Slightly darker
- **Active background** — Slightly darker still
- **Disabled background** — Slightly darker, muted

### Border Colors

- **Subtle border** — Lowest contrast (light gray)
- **Default border** — Medium contrast (medium gray)
- **Strong border** — Higher contrast (dark gray)
- **Focus border** — High contrast (primary color)
- **Error border** — Error color (red)
- **Success border** — Success color (green)

### Interactive Colors

- **Link default** — Primary color
- **Link hover** — Primary dark
- **Link active** — Primary darker
- **Button primary** — Primary color
- **Button secondary** — Neutral color
- **Focus ring** — Primary color, high contrast

## See Also

- [Design Tokens](design-tokens.md) — The atomic values
- [Spacing System](spacing-system.md) — Spacing token definitions
- [Border System](border-system.md) — Border token definitions
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Screen Readers](../accessibility/screen-readers.md) — Non-visual access
