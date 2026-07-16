# @white-diamond/stylelint-config

Stylelint configuration for the WHITE DIAMOND design specification. This config enforces architectural integrity by detecting and preventing CSS violations of core design principles.

## Why This Matters

WHITE DIAMOND is a fundamental design specification for interfaces that emphasizes:
- **Architectural geometry** - Only rectangles exist in space
- **Spatial hierarchy** - Every object has Physical Boundary → Inner Surface → Content
- **Physics-based animation** - Motion demonstrates space physics, not decoration
- **Absolute control** - Users feel control through predictability

This Stylelint config helps you catch design violations early in CSS development.

## Installation

```bash
npm install --save-dev @white-diamond/stylelint-config stylelint
```

## Usage

Extend the config in your `.stylelintrc.js`:

```javascript
module.exports = {
  extends: ['@white-diamond/stylelint-config'],
};
```

Or use the recommended preset:

```javascript
module.exports = {
  extends: ['@white-diamond/stylelint-config/recommended'],
};
```

## Rules

### no-border-radius
Ban the `border-radius` property entirely. Only rectangles are allowed in WHITE DIAMOND.

### no-fade-transition
Ban `opacity` in `transition` properties. Objects enter/exit the viewport, never fade in/out.

### require-border
Require explicit `border` property on interactive elements. Without a border, an object doesn't exist in space.

### no-circular-shapes
Ban `50%` border-radius and `circle()` clip-path. Only rectangles exist. Organic shapes violate architectural integrity.

### spatial-spacing
Enforce the 4px base spacing system. All spacing must align to the architectural grid.

## Recommended Preset

The `recommended` preset enables all rules at the `warn` level:

```javascript
module.exports = {
  extends: ['@white-diamond/stylelint-config/recommended'],
};
```

## Learn More

Read the [WHITE DIAMOND specification](https://white-diamond.dev) for full details on the design philosophy.

## License

MIT