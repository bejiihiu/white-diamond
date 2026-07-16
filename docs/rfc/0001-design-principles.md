# RFC 0001: Design Principles

## Status

Accepted

## Summary

This RFC defines the core design principles that guide all WHITE DIAMOND specifications. It establishes ten axioms from which all specifications derive, explains the reasoning behind each axiom, defines how axioms relate to each other, and describes how specifications must be validated against these axioms.

---

## Motivation

WHITE DIAMOND needs explicit design principles for three reasons:

1. **Consistency** — Without explicit principles, specifications may contradict each other. Two specifications derived from different implicit assumptions will conflict when applied to the same interface.

2. **Adaptability** — Rules without reasoning cannot be adapted to new contexts. A rule that says "use 8px spacing" is useless to someone who needs 4px or 16px. A rule that explains spacing creates rhythm, which creates hierarchy, which creates scannability — that developer can derive the right spacing.

3. **Validation** — Without explicit principles, there is no mechanism to determine whether a specification is correct. Principles provide the criteria against which specifications are measured.

---

## The Axioms

### Axiom I: Space Is Infinite

**Statement:** The screen is a window into a vast architectural space that existed before the user arrived and continues after they leave.

**Reasoning:** This axiom reframes the screen from a canvas to a viewport. A canvas is created when you begin painting and destroyed when you stop. A viewport is a fixed position through which you observe something larger than yourself.

**Implications:**
- Content does not begin at the top-left corner. The viewport shows a portion of a larger spatial reality.
- The user does not create the space. The space is already there. The user occupies a position within it.
- Layout is positional, not generative. You do not generate content into existence. You position content within a pre-existing spatial structure.
- Persistence is absolute. Elements outside the viewport continue to exist.

**Validation criteria:** Does the specification treat space as existing before the user arrives? Does it treat scrolling as revelation, not creation? Does it treat layout as positional, not generative?

**Related axioms:** Axiom IV (Appearance Sequence), Axiom IX (No Birth, No Death)

**Derives specifications:** [Screen as Window](../space-physics/screen-as-window.md), [Space Geometry](../geometry/space-geometry.md), [Object Existence](../space-physics/object-existence.md), [Viewport](../glossary/glossary.md#viewport)

---

### Axiom II: Objects Have Mass and Boundaries

**Statement:** Every element is an architectural construction with physical boundaries, weight, and position in space.

**Reasoning:** An object in WHITE DIAMOND is not a rectangle drawn on a screen. It is a construction — something built with intent, occupying space, exerting presence. Like a brick in a wall, it has:
- **Boundaries** — Definite edges that separate it from surrounding space
- **Weight** — Visual density that communicates importance
- **Position** — Specific coordinates within the spatial structure
- **Volume** — The three-dimensional impression of occupying real space

**Implications:**
- Without clear boundaries, users cannot determine what is interactive and what is decorative.
- Without weight, users cannot determine what is important and what is incidental.
- Without position, users cannot determine how things relate.
- Without volume, the interface is flat and lifeless.

**Validation criteria:** Does the element have perceivable boundaries? Does it communicate importance through visual weight? Does it occupy specific spatial coordinates? Does it convey depth?

**Related axioms:** Axiom VI (Borders Are Everything), Axiom III (Three-Layer Hierarchy), Axiom X (Monumentality)

**Derives specifications:** [Object Boundaries](../geometry/object-boundaries.md), [Object Structure](../spatial-hierarchy/object-structure.md), [Border System](../tokens/border-system.md), [Component Philosophy](../components/component-philosophy.md)

---

### Axiom III: The Three-Layer Hierarchy Is Immutable

**Statement:** Every object has: Physical Boundary → Inner Surface → Content. This order cannot be violated.

**Reasoning:** This is the fundamental anatomy of every interface element. It mirrors physical reality:
1. **Physical Boundary** — The outermost edge that defines the object's existence in space. Without a boundary, the object does not exist.
2. **Inner Surface** — The space within the boundary that separates content from the void. The inner surface provides context, padding, and the ground upon which content rests.
3. **Content** — The information, text, images, or controls that the object exists to carry.

This hierarchy is immutable because it mirrors physical reality. A box has walls (boundary), an interior (surface), and contents (what is inside). You cannot have contents without a surface, and you cannot have a surface without boundaries.

**Implications:**
- Reversing the order (placing content before boundaries) produces interfaces that feel like painted walls rather than constructed spaces.
- Every element, from buttons to modals to pages, must follow this hierarchy.
- The hierarchy is structural, not stylistic — it cannot be overridden for aesthetic reasons.

**Validation criteria:** Does the element have a perceivable boundary? Does it have an inner surface that separates content from the boundary? Is the content clearly distinct from the surface?

**Related axioms:** Axiom II (Objects Have Boundaries), Axiom VI (Borders Are Everything)

**Derives specifications:** [Object Structure](../spatial-hierarchy/object-structure.md), [Button Specification](../components/button-specification.md), [Card Specification](../components/card-specification.md)

---

### Axiom IV: Appearance Sequence Is Reversal, Not Generation

**Statement:** Objects enter from outside the viewport, never appear from nothing. Disappearance is the reverse.

**Reasoning:** When a new element appears on screen, it does not materialize from nothing. It enters from beyond the viewport boundary — from above, from below, from the left, from the right, or from a position outside the visible area. This is because space is infinite (Axiom I), and objects within space have position (Axiom II).

The reverse is equally true: when an element disappears, it does not vanish. It exits the viewport in the opposite direction from which it entered. It continues to exist in spatial position, outside the visible area.

**The sequence of appearance:**
1. The object exists at a position outside the viewport
2. The viewport or the object moves
3. The object enters the viewport from the boundary
4. The object reaches its spatial position within the viewport

**Implications:**
- Generating objects from nothing violates the physics of infinite space.
- "Appear" implies creation from nothing — **forbidden**.
- "Disappear" implies destruction — **forbidden**.
- "Enter the viewport" implies movement from outside to inside — **permitted**.
- "Exit the viewport" implies movement from inside to outside — **permitted**.

**Validation criteria:** Does the animation show the object entering from outside the viewport? Does the exit animation show the object leaving the viewport? Does the animation avoid fading without movement?

**Related axioms:** Axiom I (Space Is Infinite), Axiom IX (No Birth, No Death), Axiom VII (Animation Serves Physics)

**Derives specifications:** [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md), [Animation Principles](../motion/animation-principles.md), [Movement Physics](../motion/movement-physics.md)

---

### Axiom V: Only Rectangles Exist

**Statement:** Circles, ovals, organic shapes, and freeform geometry are forbidden. Only rectangles, lines, and their derivatives are permitted.

**Reasoning:** Circles and organic shapes are products of nature. They are born, they grow, they decay. They are irregular, unpredictable, and alive. Interfaces are not alive. Interfaces are constructions — built by humans, governed by logic, operating within constraints. Constructions are rectangular because construction is the act of imposing order on space, and rectangles are the geometry of order.

A rectangle has:
- **Four edges** — Clear, measurable boundaries
- **Right angles** — Predictable spatial relationships
- **Parallel sides** — Consistent width and height
- **Aligned vertices** — Points that connect to grid systems

A circle has:
- **No edges** — Continuous curvature with no beginning or end
- **No angles** — No measurable spatial relationships
- **No alignment** — No vertices that connect to rectangular grids
- **Infinite points** — Every point on the circumference is a potential boundary

**Implications:**
- When organic shapes enter an interface, the architectural language breaks.
- The interface ceases to feel like a construction and begins to feel like an illustration.
- Illustrations are beautiful but unstructured. Constructions are structured and purposeful.
- Radius is permitted as a modification of rectangular corners, but must be used sparingly.

**Validation criteria:** Are all elements rectangular? Do all elements have aligned vertices that connect to grid systems? Are organic shapes avoided?

**Related axioms:** Axiom II (Objects Have Boundaries), Axiom VI (Borders Are Everything)

**Derives specifications:** [Geometric Rules](../geometry/geometric-rules.md), [Space Geometry](../geometry/space-geometry.md), [Prohibited Patterns](../anti-patterns/prohibited-patterns.md)

---

### Axiom VI: Borders Are Everything

**Statement:** The border is the most important visual element. Without a border, an object does not exist.

**Reasoning:** This follows directly from Axiom II (Objects Have Boundaries). If an object has boundaries, those boundaries must be perceivable. A border is the perceivable expression of a boundary.

Without borders, objects dissolve into the background. They become indistinguishable from surrounding space. Users cannot determine where one thing ends and another begins. The interface becomes a wash of content without structure.

Borders are not decoration. They are **infrastructure**. Like the walls of a building, they define the space within. Remove the walls and the building collapses. Remove the borders and the interface collapses.

**The hierarchy of border importance:**
1. **Structural borders** — The boundaries between major regions (navigation, content, sidebar)
2. **Component borders** — The boundaries of interactive elements (buttons, inputs, cards)
3. **Decorative borders** — Borders that exist for visual rhythm (dividers, separators)

**Implications:**
- Borders are the mechanism through which users develop spatial understanding.
- A borderless interface is like a building without walls — everything is connected, nothing is contained, and navigation is impossible.
- Even subtle borders (low contrast, thin lines) are required — they must exist.

**Validation criteria:** Does every element have perceivable boundaries? Are borders treated as infrastructure, not decoration? Do borders follow the hierarchy of importance?

**Related axioms:** Axiom II (Objects Have Boundaries), Axiom III (Three-Layer Hierarchy)

**Derives specifications:** [Border System](../tokens/border-system.md), [Object Boundaries](../geometry/object-boundaries.md), [Component Philosophy](../components/component-philosophy.md)

---

### Axiom VII: Animation Serves Physics

**Statement:** Motion exists only to demonstrate spatial physics. It never exists for decoration or emotional effect.

**Reasoning:** Every animation in WHITE DIAMOND must answer one question: **What spatial relationship does this motion reveal?**

- A button that slides into a panel reveals that the button is part of the panel's spatial structure
- An element that enters from the right reveals that there is space to the right of the viewport
- A modal that overlays the background reveals that the modal occupies a higher spatial plane
- A menu that expands downward reveals that the menu content exists below the trigger

If an animation cannot answer this question, it does not belong in WHITE DIAMOND.

**The types of permitted motion:**
1. **Entrance** — Moving from outside the viewport to inside
2. **Exit** — Moving from inside the viewport to outside
3. **Translation** — Moving from one position to another
4. **Transformation** — Changing size or shape
5. **State change** — Changing visual properties to communicate state

**The types of prohibited motion:**
1. **Bounce** — Implies organic elasticity, not architectural structure
2. **Wobble** — Implies instability, not permanence
3. **Spin** — Implies playfulness, not purpose
4. **Fade in/out without movement** — Implies appearing from nothing, violating Axiom IV
5. **Emphasis without spatial meaning** — Motion that draws attention without revealing structure

**Implications:**
- Animation is the temporal expression of spatial relationships.
- When animation serves physics, users learn how space works through movement.
- When animation serves decoration, users learn nothing about the structure of the interface.

**Validation criteria:** Does the animation reveal a spatial relationship? Is the motion type permitted? Does the animation avoid prohibited motion types?

**Related axioms:** Axiom IV (Appearance Sequence), Axiom I (Space Is Infinite)

**Derives specifications:** [Animation Principles](../motion/animation-principles.md), [Prohibited Animations](../motion/prohibited-animations.md), [Movement Physics](../motion/movement-physics.md)

---

### Axiom VIII: Absolute Control Through Predictability

**Statement:** Users feel control not through flashy effects but through perfect predictability and order.

**Reasoning:** Control is the perception that one's actions produce expected results. It is not about power or complexity — it is about consistency. When a user clicks a button, they expect a specific result. When that result occurs every time, the user develops trust. When the result varies, the user develops anxiety.

WHITE DIAMOND achieves control through:
- **Consistent behavior** — The same element always behaves the same way in the same context
- **Predictable motion** — Animations always follow the same spatial physics
- **Clear boundaries** — Users always know where one thing ends and another begins
- **Reliable feedback** — Every action produces a visible, consistent response
- **Stable hierarchy** — The most important element is always the most prominent

**Implications:**
- Control is not a feature — it is a property of well-designed systems.
- It cannot be added after the fact. It must be built into the foundation.
- When users feel control, they feel competent. When they feel competent, they feel confident.

**Validation criteria:** Is the behavior consistent across all instances? Is the motion predictable? Are boundaries clear? Is feedback reliable? Is hierarchy stable?

**Related axioms:** Axiom VI (Borders Are Everything), Axiom VII (Animation Serves Physics)

**Derives specifications:** [Control Feeling](../psychology/control-feeling.md), [User Psychology](../psychology/user-psychology.md), [Consistency Creates Learning](../philosophy/architectural-thinking.md#consistency-creates-learning)

---

### Axiom IX: No Birth, No Death

**Statement:** Objects never "appear" or "disappear." They enter and exit the viewport.

**Reasoning:** This is the consequence of Axiom I (Space Is Infinite) and Axiom IV (Appearance Sequence). If space is infinite and objects have position, then objects cannot be created or destroyed — they can only move into or out of the viewport.

The language matters:
- "Appear" implies creation from nothing — **forbidden**
- "Disappear" implies destruction — **forbidden**
- "Enter the viewport" implies movement from outside to inside — **permitted**
- "Exit the viewport" implies movement from inside to outside — **permitted**

This is not pedantry. It is precision. The language we use to describe interface behavior shapes how we design it.

**Implications:**
- The mental model determines the implementation.
- Thinking in terms of visibility leads to `display: none` and `opacity: 0`.
- Thinking in terms of spatial movement leads to `transform: translateX(100%)` and viewport-relative positioning.
- The second approach produces interfaces that feel like they exist in real space.

**Validation criteria:** Does the specification use "enter/exit" language instead of "appear/disappear"? Does the implementation use spatial movement instead of visibility toggling?

**Related axioms:** Axiom I (Space Is Infinite), Axiom IV (Appearance Sequence)

**Derives specifications:** [Object Existence](../space-physics/object-existence.md), [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md), [Space Behavior](../space-physics/space-behavior.md)

---

### Axiom X: Monumentality Over Decoration

**Statement:** Every element should feel like a massive architectural construction, not a flat UI widget.

**Reasoning:** Monumentality is the quality of feeling substantial, permanent, and purposeful. A monument is not decorative — it exists to signify something important. It is not transient — it exists to endure. It is not frivolous — it exists to serve.

In WHITE DIAMOND, every element should convey:
- **Substance** — The element has weight and presence
- **Permanence** — The element feels like it was built to last
- **Purpose** — The element exists for a reason
- **Authority** — The element communicates confidence

**Implications:**
- Flat UI widgets feel like paper cutouts — thin, temporary, disposable.
- Monumental constructions feel like buildings — substantial, permanent, trustworthy.
- The difference is not aesthetic; it is psychological.
- Users trust structures that feel solid. They distrust structures that feel flimsy.

**Validation criteria:** Does the element feel substantial? Does it convey permanence? Does it communicate purpose? Does it project authority?

**Related axioms:** Axiom II (Objects Have Boundaries), Axiom III (Three-Layer Hierarchy), Axiom VI (Borders Are Everything)

**Derives specifications:** [Component Philosophy](../components/component-philosophy.md), [Border System](../tokens/border-system.md), [Depth Perception](../spatial-hierarchy/depth-perception.md)

---

## Axiom Dependencies

The axioms are not independent — they form a dependency hierarchy:

```
Axiom I: Space Is Infinite
├── Axiom IV: Appearance Sequence Is Reversal
│   └── Axiom IX: No Birth, No Death
├── Axiom V: Only Rectangles Exist
│   └── Axiom VI: Borders Are Everything
└── (Axiom I informs all spatial reasoning)

Axiom II: Objects Have Mass and Boundaries
├── Axiom III: The Three-Layer Hierarchy Is Immutable
├── Axiom VI: Borders Are Everything
└── Axiom X: Monumentality Over Decoration

Axiom VII: Animation Serves Physics
├── Axiom IV: Appearance Sequence
└── Axiom I: Space Is Infinite

Axiom VIII: Absolute Control Through Predictability
├── Axiom VI: Borders Are Everything
└── Axiom VII: Animation Serves Physics
```

---

## The Reasoning Imperative

Every rule in WHITE DIAMOND must explain its reasoning. A rule without reasoning is dogma. Dogma cannot adapt to new contexts. When a developer encounters a specification they disagree with, the reasoning allows them to:

- **Understand the problem** the rule solves
- **Evaluate whether the rule applies** to their context
- **Make informed deviations** when appropriate
- **Convince others** of the rule's validity

A specification that says "use 8px spacing" without explaining why is useless to someone who needs 4px or 16px. A specification that explains spacing creates rhythm, which creates hierarchy, which creates scannability, which creates usability — that developer can derive the right spacing for their context.

**The reasoning chain:**
1. **What** is the rule? (The specification)
2. **Why** does the rule exist? (The reasoning)
3. **Where** does the rule apply? (The context)
4. **When** can the rule be deviated? (The exceptions)
5. **How** does the rule relate to others? (The cross-references)

---

## Technology Agnosticism

WHITE DIAMOND specifications must apply regardless of:
- Programming language
- UI framework
- Design tool
- Operating system
- Device type
- Screen size

If a specification only works in React, it is not a WHITE DIAMOND specification. If a specification only applies to web browsers, it is not a WHITE DIAMOND specification. The goal is universal applicability through fundamental principles.

**The test of agnosticism:** Could this specification be implemented in a native mobile app, a web application, a desktop application, and a terminal interface? If yes, it is agnostic. If no, it is technology-specific and therefore not WHITE DIAMOND.

---

## Composability

Specifications in WHITE DIAMOND build on each other, not against each other. The spacing system does not contradict the typography system; it complements it. The motion system does not override the spatial hierarchy; it reinforces it.

This composability means that learning any individual specification also teaches you about the others. The system is not a list of independent rules; it is an interconnected framework where understanding one part illuminates the others.

**The composability principle:**
- Every specification must reference at least one other specification
- No specification may contradict another specification
- Every specification must derive from the axioms in this document
- New specifications must be consistent with existing specifications

---

## Implementation

These principles apply to all WHITE DIAMOND specifications. Specifications that violate these principles are incorrect and must be revised.

**The validation process:**
1. Identify which axiom(s) the specification derives from
2. Verify that the specification's reasoning traces back to the axiom
3. Verify that the specification does not contradict other specifications
4. Verify that the specification is technology-agnostic
5. Verify that the specification explains its reasoning

---

## Alternatives Considered

### No Explicit Principles

**Rejected because:** Without explicit principles, specifications may contradict each other. Two specifications derived from different implicit assumptions will conflict when applied to the same interface.

### Different Principles

**Rejected because:** The proposed principles are foundational and cannot be derived from other principles. They are the atoms from which the specification system is built.

### Implicit Principles

**Rejected because:** Implicit principles cannot be validated, challenged, or evolved. They remain hidden assumptions that produce inconsistent results.

---

## Unresolved Questions

- How do we measure adherence to these principles?
- How do we handle conflicts between principles?
- How do we evolve principles over time?
- How do we ensure new specifications derive from these principles?
- How do we teach these principles to new contributors?

---

## See Also

- [Core Principles](../philosophy/core-principles.md) — Detailed explanation of principles
- [Design Philosophy](../philosophy/design-philosophy.md) — Broader philosophical framework
- [Architectural Thinking](../philosophy/architectural-thinking.md) — Applying principles architecturally
- [Glossary](../glossary/glossary.md) — Terminology definitions
- [Specification Index](../reference/specification-index.md) — Complete index of specifications
- [FAQ](../faq/faq.md) — Frequently asked questions
