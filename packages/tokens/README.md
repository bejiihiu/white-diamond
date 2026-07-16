# @white-diamond/tokens

Design tokens for the WHITE DIAMOND specification — a fundamental design system for architectural interfaces.

## What are Design Tokens?

Design tokens are the visual atoms of the design system: colors, spacing, typography, borders, shadows, and animation timing. They are the single source of truth that connects design decisions to code.

Every token in this package follows the WHITE DIAMOND philosophy: architectural construction, infinite space, three-layer hierarchy, rectangles only, and physics-based animation.

## Installation

```bash
npm install @white-diamond/tokens
```

## Usage

### JavaScript / CommonJS

```javascript
const { colors, spacing, typography } = require('@white-diamond/tokens');

// Use tokens directly
element.style.padding = spacing[4];           // '16px'
element.style.color = colors.neutral[800];     // '#262626'
element.style.fontSize = typography.fontSize.lg; // '20px'
```

### ES Modules

```javascript
import tokens, { colors, spacing } from '@white-diamond/tokens';

// Access the full token object
console.log(tokens);

// Or destructure individual categories
const borderColor = colors.neutral[200];       // '#E5E5E5'
const gap = spacing[6];                        // '24px'
```

### JSON

Import tokens from `@white-diamond/tokens/tokens.json` for tools, build pipelines, or non-JavaScript environments.

```json
{
  "colors": {
    "neutral": { "800": "#262626" }
  }
}
```

### CSS Custom Properties

Import `@white-diamond/tokens/tokens.css` to use CSS custom properties:

```css
@import '@white-diamond/tokens/tokens.css';

.card {
  background: var(--wd-color-neutral-0);
  border: var(--wd-border-width-standard) solid var(--wd-border-color-subtle);
  padding: var(--wd-spacing-4);
  box-shadow: var(--wd-shadow-md);
}
```

## Available Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `neutral.0` | `#FFFFFF` | Content backgrounds |
| `neutral.50` | `#FAFAFA` | Surface backgrounds |
| `neutral.100` | `#F5F5F5` | Subtle backgrounds |
| `neutral.200` | `#E5E5E5` | Borders, dividers |
| `neutral.300` | `#D4D4D4` | Disabled states |
| `neutral.400` | `#A3A3A3` | Placeholder text |
| `neutral.500` | `#737373` | Secondary text |
| `neutral.600` | `#525252` | Body text |
| `neutral.700` | `#404040` | Headings |
| `neutral.800` | `#262626` | Primary text |
| `neutral.900` | `#171717` | Maximum contrast |
| `neutral.950` | `#0A0A0A` | Pure black (rare) |
| `functional.success` | `#16A34A` | Success states |
| `functional.warning` | `#D97706` | Warning states |
| `functional.error` | `#DC2626` | Error states |
| `functional.info` | `#2563EB` | Informational states |

### Spacing (base-4)

| Token | Value | Usage |
|-------|-------|-------|
| `spacing[0]` | `0px` | No spacing |
| `spacing[1]` | `4px` | Micro — tight internal |
| `spacing[2]` | `8px` | Small — related elements |
| `spacing[3]` | `12px` | Medium — grouped elements |
| `spacing[4]` | `16px` | Standard — default |
| `spacing[5]` | `20px` | Large — between sections |
| `spacing[6]` | `24px` | Extra large — major separation |
| `spacing[8]` | `32px` | Section — major sections |
| `spacing[10]` | `40px` | Page — page sections |
| `spacing[12]` | `48px` | Major — maximum standard |
| `spacing[16]` | `64px` | Hero — hero sections |

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `borders.width.thin` | `1px` | Subtle emphasis |
| `borders.width.standard` | `2px` | Default |
| `borders.width.thick` | `3px` | Strong emphasis |
| `borders.colors.subtle` | `#E5E5E5` | Default borders |
| `borders.colors.standard` | `#D4D4D4` | Emphasized borders |
| `borders.colors.strong` | `#A3A3A3` | Focus borders |
| `borders.radius.none` | `0px` | Only allowed radius |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| `typography.fontSize.xs` | `12px` | Small labels |
| `typography.fontSize.sm` | `14px` | Captions |
| `typography.fontSize.base` | `16px` | Body text |
| `typography.fontSize.lg` | `20px` | Subheadings |
| `typography.fontSize.xl` | `24px` | Section titles |
| `typography.fontSize.2xl` | `30px` | Page titles |
| `typography.fontSize.3xl` | `36px` | Hero text |
| `typography.fontSize.4xl` | `48px` | Display text |
| `typography.fontWeight.normal` | `400` | Body text |
| `typography.fontWeight.medium` | `500` | Emphasis |
| `typography.fontWeight.semibold` | `600` | Headings |
| `typography.fontWeight.bold` | `700` | Strong emphasis |
| `typography.fontFamily.sans` | Inter stack | Primary font |
| `typography.fontFamily.mono` | Mono stack | Code |

### Shadows (Depth)

| Token | Value | Usage |
|-------|-------|-------|
| `shadows.none` | `none` | Flat elements |
| `shadows.sm` | `0 1px 2px ...` | Subtle elevation |
| `shadows.md` | `0 4px 6px ...` | Standard elevation |
| `shadows.lg` | `0 10px 15px ...` | Prominent elevation |
| `shadows.xl` | `0 20px 25px ...` | Maximum elevation |

### Animation (Physics-Based)

| Token | Value | Usage |
|-------|-------|-------|
| `animation.duration.instant` | `0ms` | Immediate response |
| `animation.duration.fast` | `100ms` | Micro-interactions |
| `animation.duration.standard` | `200ms` | Default transitions |
| `animation.duration.slow` | `300ms` | Complex transitions |
| `animation.duration.verySlow` | `500ms` | Page transitions |
| `animation.easing.linear` | `linear` | Constant velocity |
| `animation.easing.easeOut` | `cubic-bezier(...)` | Most common (deceleration) |
| `animation.easing.easeInOut` | `cubic-bezier(...)` | Symmetric motion |

## Philosophy

WHITE DIAMOND is built on architectural principles:

- **Space is infinite** — the screen is a window into vast architectural space
- **Objects have mass and boundaries** — every element is a construction
- **Three-layer hierarchy** — Physical Boundary → Inner Surface → Content
- **Only rectangles** — no circles, ovals, or organic shapes
- **Borders are everything** — without a border, an object doesn't exist
- **Animation serves physics** — motion demonstrates space physics
- **Absolute control** — predictability over flashy effects

## License

MIT
