# Specification Index

## Why This Document Exists

A specification index is not a table of contents — it is a map of relationships. Every specification in WHITE DIAMOND depends on other specifications, derives from axioms, and connects to the broader architectural framework. This index explains how specifications relate to each other, what prerequisites each requires, and how to navigate the specification system.

---

## How to Read This Index

### Navigation Principles

WHITE DIAMOND specifications are organized in a dependency hierarchy. Understanding this hierarchy is essential for effective navigation:

1. **Start with axioms** — The [Core Principles](../philosophy/core-principles.md) are the foundation. All specifications derive from them.
2. **Understand the worldview** — The [Design Philosophy](../philosophy/design-philosophy.md) explains the reasoning that shapes all specifications.
3. **Learn architectural thinking** — The [Architectural Thinking](../philosophy/architectural-thinking.md) document teaches how to apply principles to specific decisions.
4. **Read specifications in dependency order** — Each specification lists its prerequisites. Read prerequisites first.

### Dependency Notation

Each specification entry includes:
- **Prerequisites** — Specifications that must be understood first
- **Dependents** — Specifications that build on this one
- **Cross-references** — Specifications that are related but not dependent

---

## Foundation

The foundation documents define the axioms, worldview, and reasoning framework from which all specifications derive. Every other document in WHITE DIAMOND depends on these.

### Core Principles

**File:** [Core Principles](../philosophy/core-principles.md)

The ten axioms that define the foundational truths of WHITE DIAMOND. These are not guidelines — they are axioms from which all other specifications derive. Like the laws of physics, they are the constraints within which the system operates.

**Axioms:**
1. Space Is Infinite — The screen is a window into vast architectural space
2. Objects Have Mass and Boundaries — Every element is an architectural construction
3. The Three-Layer Hierarchy Is Immutable — Physical Boundary → Inner Surface → Content
4. Appearance Sequence Is Reversal — Objects enter from outside the viewport
5. Only Rectangles Exist — Circles and organic shapes are forbidden
6. Borders Are Everything — Without a border, an object doesn't exist
7. Animation Serves Physics — Motion exists only to demonstrate spatial physics
8. Absolute Control Through Predictability — Users feel control through predictability
9. No Birth, No Death — Objects enter and exit the viewport
10. Monumentality Over Decoration — Every element feels like a massive construction

**Prerequisites:** None
**Dependents:** All other specifications
**Cross-references:** [Design Philosophy](../philosophy/design-philosophy.md), [Architectural Thinking](../philosophy/architectural-thinking.md)

---

### Design Philosophy

**File:** [Design Philosophy](../philosophy/design-philosophy.md)

The worldview that shapes all WHITE DIAMOND decisions. This document explains how WHITE DIAMOND perceives digital interfaces, what values it prioritizes, and why those values produce the architectural decisions documented throughout this specification.

**Key concepts:**
- Space Is Not Empty — Space is a material with properties
- Order Over Chaos — The minimum order necessary for comprehension
- Human Perception as Architectural Foundation — Design for the brain, not the screen
- Consistency Is Not Uniformity — Same behavior, not same appearance
- The Minimum Viable Interface — Every element must earn its place
- Progressive Disclosure — Reveal complexity gradually
- Error Prevention Over Error Recovery — The best error message is no error message
- Accessibility Is Not a Feature — A property of well-designed interfaces

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)
**Dependents:** All specification documents
**Cross-references:** [Architectural Thinking](../philosophy/architectural-thinking.md)

---

### Architectural Thinking

**File:** [Architectural Thinking](../philosophy/architectural-thinking.md)

The discipline of seeing interfaces as structures, not collections. This document teaches how to think about interfaces as architecture — with load-bearing elements, connections, flow, and constraints.

**Key concepts:**
- The Four Layers: Spatial, Information, Interaction, Temporal
- Architectural Principles: Hierarchy, Boundaries, Consistency, Minimalism, Feedback
- Architectural Patterns: Container, Flow, State, Feedback
- Mental Models: Viewport, Structural, Hierarchy, Flow, Layer

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Design Philosophy](../philosophy/design-philosophy.md)
**Dependents:** All specification documents
**Cross-references:** [Space Behavior](../space-physics/space-behavior.md), [Composition Rules](../layout/composition-rules.md)

---

## Space & Geometry

Specifications that define how digital space works and how objects exist within it.

### Space Geometry

**File:** [Space Geometry](../geometry/space-geometry.md)

The physics of digital space — how space behaves, how objects exist within it, and how spatial relationships are defined.

**Key concepts:**
- Space as material, not canvas
- Spatial properties: density, pressure, gravity, temperature
- Positional relationships: proximity, alignment, containment

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)
**Dependents:** [Object Boundaries](object-boundaries.md), [Geometric Rules](geometric-rules.md), [Spacing System](../tokens/spacing-system.md)
**Cross-references:** [Space Behavior](../space-physics/space-behavior.md)

---

### Object Boundaries

**File:** [Object Boundaries](../geometry/object-boundaries.md)

How objects define their limits and communicate their presence through boundaries.

**Key concepts:**
- Boundaries as structural, not decorative
- The relationship between boundaries and borders
- How boundaries create spatial understanding

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Space Geometry](../geometry/space-geometry.md)
**Dependents:** [Border System](../tokens/border-system.md), [Object Structure](../spatial-hierarchy/object-structure.md)
**Cross-references:** [Geometric Rules](../geometry/geometric-rules.md)

---

### Geometric Rules

**File:** [Geometric Rules](../geometry/geometric-rules.md)

Rules governing geometric relationships — why only rectangles, how alignment works, and how geometric precision creates architectural coherence.

**Key concepts:**
- Rectangular geometry as the language of construction
- Alignment and grid relationships
- Radius as a modification of rectangular geometry

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Space Geometry](../geometry/space-geometry.md)
**Dependents:** [Grid System](../layout/grid-system.md), [Composition Rules](../layout/composition-rules.md)
**Cross-references:** [Object Boundaries](../geometry/object-boundaries.md)

---

### Space Behavior

**File:** [Space Behavior](../space-physics/space-behavior.md)

How space responds to objects — density, pressure, gravity, and temperature as spatial forces.

**Key concepts:**
- Density as communication of information richness
- Pressure as the force of proximity
- Gravity as the tendency toward structural anchors
- Temperature as emotional quality of spatial regions

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Space Geometry](../geometry/space-geometry.md)
**Dependents:** [Spacing System](../tokens/spacing-system.md), [Composition Rules](../layout/composition-rules.md)
**Cross-references:** [Object Existence](../space-physics/object-existence.md)

---

### Object Existence

**File:** [Object Existence](../space-physics/object-existence.md)

How objects exist in space — position, weight, volume, and persistence.

**Key concepts:**
- Objects have position in continuous space
- Objects have weight that communicates importance
- Objects persist outside the viewport
- Objects enter and exit the viewport (never appear/disappear)

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Space Behavior](../space-physics/space-behavior.md)
**Dependents:** [Object Structure](../spatial-hierarchy/object-structure.md), [Animation Principles](../motion/animation-principles.md)
**Cross-references:** [Screen as Window](../space-physics/screen-as-window.md)

---

### Screen as Window

**File:** [Screen as Window](../space-physics/screen-as-window.md)

The viewport metaphor — the screen as a window into infinite space, not a canvas.

**Key concepts:**
- Viewport as fixed position through which you observe
- Scrolling as revelation, not creation
- Content persistence outside viewport

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)
**Dependents:** [Object Existence](../space-physics/object-existence.md), [Animation Principles](../motion/animation-principles.md)
**Cross-references:** [Space Geometry](../geometry/space-geometry.md)

---

## Hierarchy & Depth

Specifications that define how elements are structured and how depth is communicated.

### Object Structure

**File:** [Object Structure](../spatial-hierarchy/object-structure.md)

How objects are structured — the three-layer hierarchy and its application to all interface elements.

**Key concepts:**
- Physical Boundary → Inner Surface → Content (immutable)
- Application to components, containers, and regions
- Structural borders as the most important visual element

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Object Boundaries](../geometry/object-boundaries.md), [Object Existence](../space-physics/object-existence.md)
**Dependents:** [Component Philosophy](../components/component-philosophy.md), [Button Specification](../components/button-specification.md)
**Cross-references:** [Depth Perception](../spatial-hierarchy/depth-perception.md)

---

### Appearance Sequence

**File:** [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md)

The order of visual emergence — how elements enter and exit the viewport.

**Key concepts:**
- Objects enter from outside the viewport, never appear from nothing
- Entrance reveals spatial structure
- Exit is the reverse of entrance
- The sequence of appearance: exist outside → viewport moves → enter from boundary → reach position

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Object Existence](../space-physics/object-existence.md)
**Dependents:** [Animation Principles](../motion/animation-principles.md), [Movement Physics](../motion/movement-physics.md)
**Cross-references:** [Screen as Window](../space-physics/screen-as-window.md)

---

### Depth Perception

**File:** [Depth Perception](../spatial-hierarchy/depth-perception.md)

Creating spatial depth on a two-dimensional screen through layering, shadows, and spatial relationships.

**Key concepts:**
- Z-axis as the depth dimension
- Layering as the primary depth cue
- Shadows as depth communication
- Overlap as spatial relationship

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Object Structure](../spatial-hierarchy/object-structure.md)
**Dependents:** [Animation Principles](../motion/animation-principles.md), [Component Philosophy](../components/component-philosophy.md)
**Cross-references:** [Space Behavior](../space-physics/space-behavior.md)

---

## Motion

Specifications that define how animation and transitions work.

### Animation Principles

**File:** [Animation Principles](../motion/animation-principles.md)

How motion should feel — physics-based animation that reveals spatial relationships.

**Key concepts:**
- Animation serves physics, not decoration
- Every animation answers: "What spatial relationship does this motion reveal?"
- Permitted motion: entrance, exit, translation, transformation, state change
- Easing as the temporal signature of spatial physics

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md), [Depth Perception](../spatial-hierarchy/depth-perception.md)
**Dependents:** [Movement Physics](movement-physics.md), [Prohibited Animations](prohibited-animations.md)
**Cross-references:** [Component Philosophy](../components/component-philosophy.md)

---

### Prohibited Animations

**File:** [Prohibited Animations](../motion/prohibited-animations.md)

What motion should never do — animations that violate spatial physics.

**Prohibited types:**
- Bounce — Implies organic elasticity
- Wobble — Implies instability
- Spin — Implies playfulness
- Fade without movement — Implies appearing from nothing
- Emphasis without spatial meaning — Motion without structural revelation

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Animation Principles](../motion/animation-principles.md)
**Dependents:** None (constrains other specifications)
**Cross-references:** [Recommended Approaches](../best-practices/recommended-approaches.md)

---

### Movement Physics

**File:** [Movement Physics](../motion/movement-physics.md)

Physical laws of digital motion — how mass, inertia, and friction translate to interface animation.

**Key concepts:**
- Mass as the resistance to motion change
- Inertia as the tendency to continue moving
- Friction as the force that slows motion
- Easing functions as the expression of physical forces

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Animation Principles](../motion/animation-principles.md)
**Dependents:** [Component Specifications](../components/component-philosophy.md)
**Cross-references:** [Animation Principles](../motion/animation-principles.md)

---

## Typography

Specifications that define how text is structured and presented.

### Type System

**File:** [Type System](../typography/type-system.md)

Typography foundations — font families, sizes, weights, and their relationships.

**Key concepts:**
- Type scale as the proportional system of text
- Font families as the voice of the information layer
- Font weights as emphasis hierarchy
- Line height as vertical rhythm

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Space Geometry](../geometry/space-geometry.md)
**Dependents:** [Text Hierarchy](../typography/text-hierarchy.md), [Text in Space](../typography/text-in-space.md)
**Cross-references:** [Spacing System](../tokens/spacing-system.md)

---

### Text Hierarchy

**File:** [Text Hierarchy](../typography/text-hierarchy.md)

Organizing text by importance — how typographic properties communicate hierarchy.

**Key concepts:**
- Size as primary hierarchy mechanism
- Weight as secondary hierarchy mechanism
- Color as tertiary hierarchy mechanism
- Spacing as hierarchical separation

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Type System](../typography/type-system.md)
**Dependents:** [Composition Rules](../layout/composition-rules.md)
**Cross-references:** [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation)

---

### Text in Space

**File:** [Text in Space](../typography/text-in-space.md)

Typography and spatial relationships — how text interacts with the spatial structure.

**Key concepts:**
- Text as a spatial element
- Line length and readability
- Text alignment and spatial structure
- Inline vs. block text elements

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Type System](../typography/type-system.md)
**Dependents:** [Composition Rules](../layout/composition-rules.md)
**Cross-references:** [Space Geometry](../geometry/space-geometry.md)

---

## Layout

Specifications that define how elements are arranged in space.

### Composition Rules

**File:** [Composition Rules](../layout/composition-rules.md)

Rules for arranging elements — the spatial logic of layout.

**Key concepts:**
- Proximity as relationship communication
- Alignment as spatial order
- Repetition as consistency
- Contrast as hierarchy
- Balance as spatial weight distribution

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Space Geometry](../geometry/space-geometry.md), [Geometric Rules](../geometry/geometric-rules.md), [Text Hierarchy](../typography/text-hierarchy.md)
**Dependents:** [Grid System](../layout/grid-system.md), [Spatial Layout](../layout/spatial-layout.md)
**Cross-references:** [Architectural Thinking](../philosophy/architectural-thinking.md)

---

### Grid System

**File:** [Grid System](../layout/grid-system.md)

Spatial organization systems — how grids define alignment and proportion.

**Key concepts:**
- Grid columns as vertical modules
- Gutters as horizontal boundaries
- Responsive grid adaptation
- Grid as the invisible structure of spatial construction

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Geometric Rules](../geometry/geometric-rules.md), [Composition Rules](../layout/composition-rules.md)
**Dependents:** [Spatial Layout](../layout/spatial-layout.md), [Component Specifications](../components/component-philosophy.md)
**Cross-references:** [Spacing System](../tokens/spacing-system.md)

---

### Spatial Layout

**File:** [Spatial Layout](../layout/spatial-layout.md)

Layout as spatial arrangement — how spatial thinking informs layout decisions.

**Key concepts:**
- Layout as positional, not generative
- Spatial relationships: containment, separation, proximity, alignment
- Responsive layout as spatial adaptation

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Composition Rules](../layout/composition-rules.md), [Grid System](../layout/grid-system.md)
**Dependents:** [Component Specifications](../components/component-philosophy.md)
**Cross-references:** [Space Behavior](../space-physics/space-behavior.md)

---

## Components

Specifications that define how interface elements behave.

### Component Philosophy

**File:** [Component Philosophy](../components/component-philosophy.md)

Why components exist and how they relate to architectural construction.

**Key concepts:**
- Components as architectural constructions, not UI widgets
- The three-layer hierarchy applied to components
- Component states as temporal communication
- Component composition as architectural assembly

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Object Structure](../spatial-hierarchy/object-structure.md), [Depth Perception](../spatial-hierarchy/depth-perception.md)
**Dependents:** [Button Specification](../components/button-specification.md), [Input Specification](../components/input-specification.md), [Card Specification](../components/card-specification.md), [Modal Specification](../components/modal-specification.md), [Navigation Specification](../components/navigation-specification.md)
**Cross-references:** [Animation Principles](../motion/animation-principles.md)

---

### Button Specification

**File:** [Button Specification](../components/button-specification.md)

The button as a primitive — behavior, states, and spatial properties.

**Key concepts:**
- Button as three-layer construction
- Button states: default, hover, active, focus, disabled, loading
- Button hierarchy: primary, secondary, tertiary
- Button spatial properties: size, padding, border, radius

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Component Philosophy](../components/component-philosophy.md)
**Dependents:** None (leaf specification)
**Cross-references:** [Input Specification](../components/input-specification.md)

---

### Input Specification

**File:** [Input Specification](../components/input-specification.md)

Input behavior and constraints — how data collection elements work.

**Key concepts:**
- Input as three-layer construction
- Input states: default, focus, disabled, error, loading
- Input types: text, number, select, checkbox, radio
- Input validation as error prevention

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Component Philosophy](../components/component-philosophy.md)
**Dependents:** None (leaf specification)
**Cross-references:** [Button Specification](../components/button-specification.md), [Accessibility Guidelines](../accessibility/accessibility-guidelines.md)

---

### Card Specification

**File:** [Card Specification](../components/card-specification.md)

Cards as content containers — spatial properties and composition.

**Key concepts:**
- Card as container construction
- Card spatial properties: border, padding, shadow
- Card composition: header, body, footer
- Card hierarchy through visual weight

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Component Philosophy](../components/component-philosophy.md)
**Dependents:** None (leaf specification)
**Cross-references:** [Modal Specification](../components/modal-specification.md)

---

### Modal Specification

**File:** [Modal Specification](../components/modal-specification.md)

Overlays and focused interaction — how modals create spatial planes.

**Key concepts:**
- Modal as higher spatial plane
- Modal entrance as layer creation
- Modal exit as layer removal
- Modal spatial properties: overlay, border, shadow

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Component Philosophy](../components/component-philosophy.md), [Depth Perception](../spatial-hierarchy/depth-perception.md)
**Dependents:** None (leaf specification)
**Cross-references:** [Card Specification](../components/card-specification.md)

---

### Navigation Specification

**File:** [Navigation Specification](../components/navigation-specification.md)

Wayfinding and movement — how navigation elements guide users through spatial structure.

**Key concepts:**
- Navigation as flow system
- Navigation spatial properties: position, hierarchy, consistency
- Navigation states: active, inactive, disabled
- Navigation hierarchy: primary, secondary, tertiary

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Component Philosophy](../components/component-philosophy.md)
**Dependents:** None (leaf specification)
**Cross-references:** [Composition Rules](../layout/composition-rules.md)

---

## Design Tokens

Specifications that define the atomic values of the design system.

### Design Tokens

**File:** [Design Tokens](../tokens/design-tokens.md)

The atomic values — colors, spacing, borders, typography that form the design system's foundation.

**Key concepts:**
- Tokens as the bridge between principles and implementation
- Token hierarchy: global, semantic, component
- Token naming conventions
- Token documentation and usage

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)
**Dependents:** [Color System](../tokens/color-system.md), [Spacing System](../tokens/spacing-system.md), [Border System](../tokens/border-system.md)
**Cross-references:** [Component Specifications](../components/component-philosophy.md)

---

### Color System

**File:** [Color System](../tokens/color-system.md)

Color as information — how color communicates hierarchy, state, and meaning.

**Key concepts:**
- Semantic color tokens (not raw values)
- Color hierarchy: primary, secondary, neutral, semantic
- Color contrast requirements
- Dark mode as color adaptation

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Design Tokens](../tokens/design-tokens.md)
**Dependents:** [Component Specifications](../components/component-philosophy.md)
**Cross-references:** [Accessibility Guidelines](../accessibility/accessibility-guidelines.md)

---

### Spacing System

**File:** [Spacing System](../tokens/spacing-system.md)

Rhythm and proportion — how spacing creates relationships and hierarchy.

**Key concepts:**
- Spacing scale as proportional system
- Padding as inner surface spacing
- Margin as outer spacing
- Gap as container spacing
- Gutter as grid spacing

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Design Tokens](design-tokens.md), [Space Geometry](../geometry/space-geometry.md)
**Dependents:** [Component Specifications](../components/component-philosophy.md), [Grid System](../layout/grid-system.md)
**Cross-references:** [Composition Rules](../layout/composition-rules.md)

---

### Border System

**File:** [Border System](../tokens/border-system.md)

Edges and boundaries — how borders define spatial structure.

**Key concepts:**
- Border as the most important visual element
- Border hierarchy: structural, component, decorative
- Border properties: width, color, style, radius
- Border as spatial infrastructure

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Design Tokens](../tokens/design-tokens.md), [Object Boundaries](../geometry/object-boundaries.md)
**Dependents:** [Component Specifications](../components/component-philosophy.md)
**Cross-references:** [Spacing System](../tokens/spacing-system.md)

---

## Accessibility

Specifications that ensure interfaces work for all users.

### Accessibility Guidelines

**File:** [Accessibility Guidelines](../accessibility/accessibility-guidelines.md)

Universal access principles — how to ensure interfaces work for users with disabilities.

**Key concepts:**
- WCAG 2.1 Level AA compliance
- Color independence
- Reduced motion support
- Semantic HTML requirements

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)
**Dependents:** [Keyboard Navigation](../accessibility/keyboard-navigation.md), [Screen Readers](../accessibility/screen-readers.md)
**Cross-references:** [Component Specifications](../components/component-philosophy.md)

---

### Keyboard Navigation

**File:** [Keyboard Navigation](../accessibility/keyboard-navigation.md)

Non-pointer interaction — how to ensure interfaces work without a mouse.

**Key concepts:**
- Tab order as spatial navigation
- Focus indicators as spatial markers
- Keyboard shortcuts as spatial shortcuts
- No keyboard traps

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Accessibility Guidelines](../accessibility/accessibility-guidelines.md)
**Dependents:** None (constrains other specifications)
**Cross-references:** [Component Specifications](../components/component-philosophy.md)

---

### Screen Readers

**File:** [Screen Readers](../accessibility/screen-readers.md)

Non-visual access — how to ensure interfaces work without seeing the screen.

**Key concepts:**
- Semantic HTML as spatial structure in code
- ARIA roles as behavioral communication
- Live regions as temporal communication
- Alternative text as content communication

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Accessibility Guidelines](../accessibility/accessibility-guidelines.md)
**Dependents:** None (constrains other specifications)
**Cross-references:** [Component Specifications](../components/component-philosophy.md)

---

## Psychology

Specifications that define how users think and feel.

### User Psychology

**File:** [User Psychology](../psychology/user-psychology.md)

How users think and feel — the cognitive science behind interface design.

**Key concepts:**
- Mental models as cognitive representations
- Pattern recognition as learning mechanism
- Cognitive load as mental effort
- Trust as predictable outcomes

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)
**Dependents:** [Control Feeling](../psychology/control-feeling.md), [Cognitive Load](../psychology/cognitive-load.md)
**Cross-references:** [Design Philosophy](../philosophy/design-philosophy.md)

---

### Control Feeling

**File:** [Control Feeling](../psychology/control-feeling.md)

The sense of agency — how users feel in control of the interface.

**Key concepts:**
- Control as perception of expected outcomes
- Consistency as the mechanism of control
- Predictability as the foundation of trust
- Feedback as the communication of control

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [User Psychology](../psychology/user-psychology.md)
**Dependents:** None (constrains other specifications)
**Cross-references:** [Animation Principles](../motion/animation-principles.md)

---

### Cognitive Load

**File:** [Cognitive Load](../psychology/cognitive-load.md)

Mental effort and clarity — how interfaces affect the brain's processing capacity.

**Key concepts:**
- Cognitive load as mental effort
- Element count and cognitive load (exponential relationship)
- Progressive disclosure as load reduction
- Hierarchy as load management

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [User Psychology](../psychology/user-psychology.md)
**Dependents:** None (constrains other specifications)
**Cross-references:** [Composition Rules](../layout/composition-rules.md)

---

## Examples

Practical demonstrations of WHITE DIAMOND principles in action.

### Basic Layout

**File:** [Basic Layout](../examples/basic-layout.md)

Layout examples demonstrating spatial principles in practice.

**Prerequisites:** [Composition Rules](../layout/composition-rules.md), [Grid System](../layout/grid-system.md)

---

### Component Composition

**File:** [Component Composition](../examples/component-composition.md)

Combining components to create spatial structures.

**Prerequisites:** [Component Philosophy](../components/component-philosophy.md), [Composition Rules](../layout/composition-rules.md)

---

### Motion Examples

**File:** [Motion Examples](../examples/motion-examples.md)

Animation examples demonstrating physics-based motion.

**Prerequisites:** [Animation Principles](../motion/animation-principles.md), [Movement Physics](../motion/movement-physics.md)

---

## Anti-Patterns

What to avoid and common mistakes.

### Prohibited Patterns

**File:** [Prohibited Patterns](../anti-patterns/prohibited-patterns.md)

Patterns that violate WHITE DIAMOND principles.

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)

---

### Common Mistakes

**File:** [Common Mistakes](../anti-patterns/common-mistakes.md)

Frequent errors and how to avoid them.

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)

---

## Best Practices

Recommended approaches and decision-making frameworks.

### Recommended Approaches

**File:** [Recommended Approaches](../best-practices/recommended-approaches.md)

Approaches that work well within WHITE DIAMOND principles.

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Architectural Thinking](../philosophy/architectural-thinking.md)

---

### Decision Making

**File:** [Decision Making](../best-practices/decision-making.md)

How to choose between options using WHITE DIAMOND principles.

**Prerequisites:** [Core Principles](../philosophy/core-principles.md), [Design Philosophy](../philosophy/design-philosophy.md)

---

## Migration

Guides for transitioning from other design systems.

### From Flat Design

**File:** [From Flat Design](../migration/from-flat-design.md)

Moving beyond flat interfaces to spatial architecture.

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)

---

### From Material Design

**File:** [From Material Design](../migration/from-material-design.md)

Transitioning from Google's design system to WHITE DIAMOND.

**Prerequisites:** [Core Principles](../philosophy/core-principles.md)

---

## Quick Reference

### By Role

**For Designers:**
1. [Core Principles](../philosophy/core-principles.md) — Understand the axioms
2. [Design Philosophy](../philosophy/design-philosophy.md) — Understand the worldview
3. [Composition Rules](../layout/composition-rules.md) — Arrange elements spatially
4. [Component Philosophy](../components/component-philosophy.md) — Build components as constructions
5. [Design Tokens](../tokens/design-tokens.md) — Define atomic values

**For Developers:**
1. [Core Principles](../philosophy/core-principles.md) — Understand the axioms
2. [Component Philosophy](../components/component-philosophy.md) — Implement components as constructions
3. [Animation Principles](../motion/animation-principles.md) — Implement physics-based motion
4. [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Implement accessible interfaces
5. [Design Tokens](../tokens/design-tokens.md) — Implement design system values

**For Product Managers:**
1. [Core Principles](../philosophy/core-principles.md) — Understand the axioms
2. [Design Philosophy](../philosophy/design-philosophy.md) — Understand the reasoning
3. [Decision Making](../best-practices/decision-making.md) — Make principled decisions
4. [User Psychology](../psychology/user-psychology.md) — Understand user needs
5. [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Ensure universal access

### By Topic

**Spatial Structure:**
- [Space Geometry](../geometry/space-geometry.md) → [Object Boundaries](../geometry/object-boundaries.md) → [Geometric Rules](../geometry/geometric-rules.md)
- [Space Behavior](../space-physics/space-behavior.md) → [Object Existence](../space-physics/object-existence.md)
- [Grid System](../layout/grid-system.md) → [Spatial Layout](../layout/spatial-layout.md)

**Visual Hierarchy:**
- [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation) → [Text Hierarchy](../typography/text-hierarchy.md)
- [Depth Perception](../spatial-hierarchy/depth-perception.md) → [Component Philosophy](../components/component-philosophy.md)

**Motion:**
- [Animation Principles](../motion/animation-principles.md) → [Movement Physics](../motion/movement-physics.md)
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) → [Prohibited Animations](../motion/prohibited-animations.md)

**Accessibility:**
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) → [Keyboard Navigation](../accessibility/keyboard-navigation.md)
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) → [Screen Readers](../accessibility/screen-readers.md)

---

## See Also

- [Glossary](../glossary/glossary.md) — Terminology definitions
- [FAQ](../faq/faq.md) — Frequently asked questions
- [RFC: Design Principles](../rfc/0001-design-principles.md) — Formal principle definitions
- [Contributing](../../CONTRIBUTING.md) — How to contribute
