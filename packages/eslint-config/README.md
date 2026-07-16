# @white-diamond/eslint-config

ESLint configuration for the WHITE DIAMOND design specification. This config enforces architectural integrity by detecting and preventing violations of core design principles.

## Why This Matters

WHITE DIAMOND is a fundamental design specification for interfaces that emphasizes:
- **Architectural geometry** - Only rectangles exist in space
- **Spatial hierarchy** - Every object has Physical Boundary → Inner Surface → Content
- **Physics-based animation** - Motion demonstrates space physics, not decoration
- **Absolute control** - Users feel control through predictability

This ESLint config helps you catch design violations early in development.

## Installation

```bash
npm install --save-dev @white-diamond/eslint-config eslint
```

## Usage

Extend the config in your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@white-diamond/eslint-config'],
};
```

Or use the recommended preset:

```javascript
module.exports = {
  extends: ['@white-diamond/eslint-config/recommended'],
};
```

## Rules

### no-rounded-corners
Ban `border-radius` values greater than 0. Only rectangles are allowed in WHITE DIAMOND.

### require-borders
Warn when elements lack explicit borders. Without a border, an object doesn't exist in space.

### no-fade-animations
Ban opacity-based transitions and fadeIn/fadeOut animations. Objects enter/exit the viewport, never fade in/out.

### no-bounce
Ban bounce, elastic, spring, and overshoot animations. Animation serves physics, not decoration.

### rectangular-geometry
Ban circular, oval, and elliptical shapes. Only rectangles exist. Organic shapes violate architectural integrity.

### spatial-hierarchy
Warn on missing layer structure. Every object must have Physical Boundary → Inner Surface → Content.

## Recommended Preset

The `recommended` preset enables all rules at the `warn` level:

```javascript
module.exports = {
  extends: ['@white-diamond/eslint-config/recommended'],
};
```

## Learn More

Read the [WHITE DIAMOND specification](https://white-diamond.dev) for full details on the design philosophy.

## License

MIT