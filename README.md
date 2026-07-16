# WHITE DIAMOND

**A fundamental design specification for interfaces**

WHITE DIAMOND is not a UI kit or component library. It is a design specification that defines the physics of space, geometry of objects, motion perception, user psychology, composition rules, component behavior, design constraints, and interaction philosophy. Any developer, designer, or AI reading these documents would arrive at nearly the same architectural decisions regardless of programming language, framework, platform, or design tool.

---

## Quick Start

| For whom | Start here |
|----------|------------|
| **Designers** | [Core Principles](docs/philosophy/core-principles.md) → [Design Philosophy](docs/philosophy/design-philosophy.md) |
| **Developers** | [Implementation Guide](docs/architecture/implementation-guide.md) → [Technology Agnostic](docs/architecture/technology-agnostic.md) |
| **Product Managers** | [User Psychology](docs/psychology/user-psychology.md) → [Best Practices](docs/best-practices/recommended-approaches.md) |
| **AI Systems** | [Glossary](docs/glossary/glossary.md) → [Specification Index](docs/reference/specification-index.md) |

---

## Documentation Map

### Foundation

The conceptual bedrock of WHITE DIAMOND.

- [Core Principles](docs/philosophy/core-principles.md) — The axioms that govern every decision
- [Design Philosophy](docs/philosophy/design-philosophy.md) — Why interfaces behave the way they do
- [Architectural Thinking](docs/philosophy/architectural-thinking.md) — Systems-level reasoning

### Space & Geometry

How digital space works and why it matters.

- [Space Geometry](docs/geometry/space-geometry.md) — The mathematical foundations of screen space
- [Object Boundaries](docs/geometry/object-boundaries.md) — Where one thing ends and another begins
- [Geometric Rules](docs/geometry/geometric-rules.md) — Constraints that create coherence

### Spatial Hierarchy

How objects are structured and perceived.

- [Object Structure](docs/spatial-hierarchy/object-structure.md) — Anatomy of interface elements
- [Appearance Sequence](docs/spatial-hierarchy/appearance-sequence.md) — The order in which things reveal themselves
- [Depth Perception](docs/spatial-hierarchy/depth-perception.md) — Z-axis meaning and layering

### Space Physics

The rules governing digital space.

- [Space Behavior](docs/space-physics/space-behavior.md) — How space reacts to interaction
- [Object Existence](docs/space-physics/object-existence.md) — What it means for something to be "on screen"
- [Screen as Window](docs/space-physics/screen-as-window.md) — The viewport metaphor

### Motion

How things move and why.

- [Animation Principles](docs/motion/animation-principles.md) — Purposeful movement
- [Prohibited Animations](docs/motion/prohibited-animations.md) — What never to do and why
- [Movement Physics](docs/motion/movement-physics.md) — Natural-feeling motion

### Typography

Text as a spatial element.

- [Type System](docs/typography/type-system.md) — Foundational type choices
- [Text Hierarchy](docs/typography/text-hierarchy.md) — Reading order and emphasis
- [Text in Space](docs/typography/text-in-space.md) — Typography as geometry

### Layout

Composition and structure.

- [Composition Rules](docs/layout/composition-rules.md) — How elements relate spatially
- [Grid System](docs/layout/grid-system.md) — Mathematical alignment
- [Spatial Layout](docs/layout/spatial-layout.md) — Three-dimensional composition

### Components

Behavioral specifications, not visual templates.

- [Component Philosophy](docs/components/component-philosophy.md) — Why components exist
- [Button Specification](docs/components/button-specification.md) — The button as a behavioral contract
- [Input Specification](docs/components/input-specification.md) — Data entry as conversation
- [Card Specification](docs/components/card-specification.md) — Content containers
- [Modal Specification](docs/components/modal-specification.md) — Focused interaction
- [Navigation Specification](docs/components/navigation-specification.md) — Wayfinding

### Design Tokens

The atoms of the system.

- [Design Tokens](docs/tokens/design-tokens.md) — Token architecture
- [Color System](docs/tokens/color-system.md) — Meaning through color
- [Spacing System](docs/tokens/spacing-system.md) — Rhythm and proportion
- [Border System](docs/tokens/border-system.md) — Edges and boundaries

### Accessibility

Universal design.

- [Accessibility Guidelines](docs/accessibility/accessibility-guidelines.md) — Foundational a11y
- [Keyboard Navigation](docs/accessibility/keyboard-navigation.md) — Non-pointer interaction
- [Screen Readers](docs/accessibility/screen-readers.md) — Assistive technology

### Psychology

The human behind the screen.

- [User Psychology](docs/psychology/user-psychology.md) — How people think about interfaces
- [Control Feeling](docs/psychology/control-feeling.md) — The sense of agency
- [Cognitive Load](docs/psychology/cognitive-load.md) — Mental effort and its limits

### Examples

Concrete applications of the specification.

- [Basic Layout](docs/examples/basic-layout.md) — Simple page compositions
- [Component Composition](docs/examples/component-composition.md) — Combining elements
- [Motion Examples](docs/examples/motion-examples.md) — Animation in practice

### Anti-Patterns

What to avoid and why.

- [Prohibited Patterns](docs/anti-patterns/prohibited-patterns.md) — Architectural mistakes
- [Common Mistakes](docs/anti-patterns/common-mistakes.md) — Frequent errors

### Best Practices

Recommended approaches.

- [Recommended Approaches](docs/best-practices/recommended-approaches.md) — Proven solutions
- [Decision Making](docs/best-practices/decision-making.md) — How to choose

### Migration

Moving from other systems.

- [From Flat Design](docs/migration/from-flat-design.md) — Transitioning approaches
- [From Material Design](docs/migration/from-material-design.md) — Divergence and adoption

### Reference

Deep reference material.

- [Specification Index](docs/reference/specification-index.md) — Complete specification listing
- [Glossary](docs/glossary/glossary.md) — Term definitions
- [FAQ](docs/faq/faq.md) — Common questions
- [RFC: Design Principles](docs/rfc/0001-design-principles.md) — The foundational RFC

### Templates & Architecture

- [Page Template](docs/templates/page-template.md) — Starting point for pages
- [Component Template](docs/templates/component-template.md) — Starting point for specifications
- [Implementation Guide](docs/architecture/implementation-guide.md) — How to implement WHITE DIAMOND
- [Technology Agnostic](docs/architecture/technology-agnostic.md) — Framework independence

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute to this specification.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Security

For reporting vulnerabilities, see [SECURITY.md](SECURITY.md).
