# WHITE DIAMOND VS Code Extension

VS Code extension for the WHITE DIAMOND design specification.

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "WHITE DIAMOND Specification"
4. Click Install

## Features

### Diagnostics

Real-time violations highlighting:

- **Red underline** on `border-radius: 50%` (circles are forbidden)
- **Warning** on `opacity` transitions (use viewport entry instead)
- **Info** on missing borders (every object must have a border)

### Code Actions

Quick fixes for violations:

- **"Remove border-radius"** → replace with `0px`
- **"Add border"** → insert `border: 1px solid #E5E5E5`
- **"Replace fade with viewport entry"** → suggest alternative

### Commands

- **"WHITE DIAMOND: Validate Current File"** - Validate the current CSS/SCSS/LESS file
- **"WHITE DIAMOND: Show Violations"** - Show all violations in the current file

## Usage

1. Open any CSS, SCSS, or LESS file
2. The extension will automatically detect violations
3. Hover over underlined code to see details
4. Click the lightbulb icon to see quick fixes
5. Use Command Palette (Ctrl+Shift+P) to run commands

## WHITE DIAMOND Philosophy

This extension enforces the WHITE DIAMOND design specification:

1. **Space is infinite** - The screen is a window into a vast architectural space
2. **Objects have mass and boundaries** - Every element is an architectural construction
3. **Three-layer hierarchy** - Physical Boundary → Inner Surface → Content
4. **Only rectangles** - Circles, ovals, organic shapes are forbidden
5. **Borders are everything** - Without a border, an object doesn't exist
6. **Animation serves physics** - Motion exists only to demonstrate space physics

## Development

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run in development
# Press F5 in VS Code to open Extension Development Host
```

## License

MIT