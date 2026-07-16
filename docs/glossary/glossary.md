# Glossary

## Why This Document Exists

A glossary is not a list of definitions — it is a map of relationships. Every term in WHITE DIAMOND exists in relation to other terms, derived from the axioms, and connected to the specifications. When designers, developers, and AI systems use the same words to mean the same things, communication becomes precise rather than approximate.

This glossary defines every term used across all WHITE DIAMOND documents. Each definition includes its architectural meaning, its derivation from core principles, and its relationship to other terms. Terms are listed alphabetically, but their real structure is the web of connections between them.

---

## A

### Accessibility

The property of an interface that enables use by people with disabilities. Accessibility is not a feature to be added — it is a property of well-designed interfaces. An interface that works for blind users, keyboard-only users, color-blind users, and cognitively diverse users is an interface that is well-structured, well-organized, and well-communicated.

**Architectural meaning:** Accessibility is the measure of architectural integrity. If an interface cannot be navigated without a mouse, its spatial structure is incomplete. If an interface cannot be read by a screen reader, its information hierarchy is invisible. Accessibility reveals structural weaknesses that visual design can hide.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — all users must experience the same predictability. Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature).

**Relationships:** Related to [Keyboard Navigation](../accessibility/keyboard-navigation.md), [Screen Readers](../accessibility/screen-readers.md), [Color Contrast](#color-contrast), [Focus](#focus).

---

### Affordance

A visual cue that communicates how an element can be used. An affordance is not the interaction itself — it is the signal that an interaction is possible. A button's raised appearance affords pressing. An input field's bordered container affords typing. A slider's handle affords dragging.

**Architectural meaning:** Affordances are the vocabulary of the interaction layer. They are the elements that tell users what actions are available. Without affordances, the interface is a static construction with no behavioral information.

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries) — objects must communicate their interactive nature through their physical properties.

**Relationships:** Related to [Border](#border) (affordances require visible boundaries), [Hover State](#hover-state) (hover reveals affordances), [Disabled State](#disabled-state) (disabled removes affordances).

---

### Alignment

The arrangement of elements along a common axis or edge. Alignment creates order, establishes relationships, and produces visual rhythm. Alignment is not decoration — it is infrastructure. Without alignment, elements appear scattered; with alignment, elements appear constructed.

**Architectural meaning:** Alignment is the spatial expression of relationship. Elements aligned along a common edge share a structural relationship. Elements misaligned appear to exist independently, breaking the architectural language.

**Derivation:** Derived from [Axiom V: Only Rectangles Exist](../philosophy/core-principles.md#axiom-v-only-rectangles-exist) — rectangles have aligned vertices that connect to grid systems. Alignment is the mechanism through which rectangular elements form coherent structures.

**Relationships:** Related to [Grid](#grid), [Grid Column](#grid-column), [Gutter](#gutter), [Spacing](#spacing).

---

### Animation

The temporal expression of spatial relationships. Animation in WHITE DIAMOND is never decorative — it is informational. Every animation answers one question: *What spatial relationship does this motion reveal?* An element that slides in from the right reveals that space exists to the right of the viewport. A panel that expands downward reveals that its content exists below the trigger.

**Architectural meaning:** Animation is the temporal layer made visible. It is the mechanism through which users understand spatial structure over time. Without animation, the interface is a screenshot — spatial relationships are frozen and cannot be perceived dynamically.

**Derivation:** Derived from [Axiom VII: Animation Serves Physics](../philosophy/core-principles.md#axiom-vii-animation-serves-physics) — motion exists only to demonstrate spatial physics. Derived from [Axiom IV: Appearance Sequence Is Reversal](../philosophy/core-principles.md#axiom-iv-appearance-sequence-is-reversal-not-generation) — objects enter from outside the viewport.

**Relationships:** Related to [Entrance Animation](#entrance-animation), [Exit Animation](#exit-animation), [Easing](#easing), [Transition](#transition), [Motion](#motion), [Prohibited Animations](../motion/prohibited-animations.md).

---

## B

### Baseline

The invisible line upon which text characters rest. Baseline alignment ensures text appears to be at the same vertical position even when fonts, sizes, or weights differ. Baselines create rhythm across text elements and establish vertical alignment between non-text elements.

**Architectural meaning:** Baselines are the invisible structure of the information layer. They ensure that text elements, despite their visual variation, share a common spatial foundation.

**Derivation:** Derived from [Axiom III: The Three-Layer Hierarchy Is Immutable](../philosophy/core-principles.md#axiom-iii-the-three-layer-hierarchy-is-immutable) — content must rest on an inner surface, and baselines define where that rest occurs.

**Relationships:** Related to [Line Height](#line-height), [Font Size](#font-size), [Typography](#typography), [Text Hierarchy](../typography/text-hierarchy.md).

---

### Border

The most important visual element in WHITE DIAMOND. A border is the perceivable expression of an object's boundary. Without a border, an object does not exist. Borders are not decoration — they are infrastructure. Like the walls of a building, they define the space within.

**Architectural meaning:** Borders are the primary mechanism through which users develop spatial understanding. They separate objects from background, define containment, establish hierarchy, and create the structure that makes comprehension possible. The hierarchy of border importance is:
1. **Structural borders** — Boundaries between major regions (navigation, content, sidebar)
2. **Component borders** — Boundaries of interactive elements (buttons, inputs, cards)
3. **Decorative borders** — Borders that exist for visual rhythm (dividers, separators)

**Derivation:** Derived from [Axiom VI: Borders Are Everything](../philosophy/core-principles.md#axiom-vi-borders-are-everything). Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries) — boundaries must be perceivable.

**Relationships:** Related to [Boundary](#boundary), [Padding](#padding), [Margin](#margin), [Border System](../tokens/border-system.md), [Object Boundaries](../geometry/object-boundaries.md).

---

### Boundary

The limit within which an object exists. A boundary defines where one thing ends and another begins. Boundaries are structural — they are not decorative lines but the physical edges of architectural constructions.

**Architectural meaning:** Without boundaries, users cannot determine what is interactive, what belongs together, or where one element ends and another begins. Boundaries create the separation that makes comprehension possible. The boundary is the concept; the border is its visual expression.

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries). Derived from [Boundaries Create Understanding](../philosophy/architectural-thinking.md#boundaries-create-understanding).

**Relationships:** Related to [Border](#border) (the visual expression of a boundary), [Container](#container) (a boundary that encloses), [Object](#object) (an object defined by its boundaries).

---

## C

### Cognitive Load

The mental effort required to process information and make decisions. High cognitive load makes interfaces difficult to use; low cognitive load makes them effortless. Cognitive load is not about simplicity — it is about the number of elements the brain must process simultaneously.

**Architectural meaning:** Cognitive load is the measure of how efficiently the interface communicates its structure to the human brain. Every element on screen competes for attention. Every pixel of visual weight costs cognitive resources. The relationship between element count and cognitive load is exponential — the tenth element is harder to process than the first.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — predictable systems reduce cognitive load by enabling pattern recognition. Derived from [Human Perception as Architectural Foundation](../philosophy/design-philosophy.md#human-perception-as-architectural-foundation).

**Relationships:** Related to [Hierarchy](#hierarchy), [Minimalism](#minimalism), [Progressive Disclosure](#progressive-disclosure), [Cognitive Load](../psychology/cognitive-load.md).

---

### Color Contrast

The difference in luminance between an element and its background. Sufficient contrast ensures text is readable and UI components are distinguishable. Color contrast is not arbitrary — it is a minimum requirement for information accessibility.

**Architectural meaning:** Color contrast is the visual mechanism through which content separates from its surface. Without sufficient contrast, content merges with its background, and the three-layer hierarchy (boundary → surface → content) collapses at the perceptual level.

**Derivation:** Derived from [Axiom III: The Three-Layer Hierarchy Is Immutable](../philosophy/core-principles.md#axiom-iii-the-three-layer-hierarchy-is-immutable) — content must be distinguishable from its surface. Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature).

**Relationships:** Related to [Accessibility](#accessibility), [Color System](../tokens/color-system.md), [Readability](#readability).

---

### Component

A self-contained, reusable element that encapsulates structure, style, and behavior. Components are the building blocks of interfaces — but in WHITE DIAMOND, they are architectural constructions, not UI widgets. A button is not a rectangle with text; it is a three-layer construction (border → surface → content) with defined states and behaviors.

**Architectural meaning:** Components are the modular units of architectural construction. They follow the three-layer hierarchy (Physical Boundary → Inner Surface → Content), maintain consistent states, and communicate their purpose through spatial properties.

**Derivation:** Derived from [Axiom III: The Three-Layer Hierarchy Is Immutable](../philosophy/core-principles.md#axiom-iii-the-three-layer-hierarchy-is-immutable). Derived from [Component Philosophy](../components/component-philosophy.md).

**Relationships:** Related to [Object](#object), [Container](#container), [State](#state), [Button Specification](../components/button-specification.md), [Input Specification](../components/input-specification.md).

---

### Container

An element that contains other elements, defining spatial relationships and grouping. Containers create structure by establishing boundaries between regions. A container is not just a wrapper — it is an architectural construction with borders, surfaces, and spatial behavior.

**Architectural meaning:** Containers are the mechanism through which spatial hierarchy is established. They create the structure that makes information navigable. Without containers, all elements exist on the same plane, and hierarchy is impossible.

**Types of containers:**
- **Visible containers** — With explicit borders (cards, panels, modals)
- **Invisible containers** — Defined by spacing and alignment
- **Nested containers** — Containers within containers, creating hierarchy
- **Overlapping containers** — Containers that share space, creating depth

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries). Derived from [The Container Pattern](../philosophy/architectural-thinking.md#the-container-pattern).

**Relationships:** Related to [Object](#object), [Border](#border), [Padding](#padding), [Card Specification](../components/card-specification.md).

---

## D

### Default State

The normal, resting appearance of an element when not being interacted with. The default state communicates the element's purpose, availability, and position in the visual hierarchy. It is the state from which all other states transition.

**Architectural meaning:** The default state is the element at rest — the state in which its spatial properties are fully visible and its affordances are communicated. It is the baseline against which all state changes are measured.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — the default state must be consistent across all instances of the same element.

**Relationships:** Related to [State](#state), [Hover State](#hover-state), [Disabled State](#disabled-state), [Focus](#focus), [Loading State](#loading-state).

---

### Depth

The perceived distance of elements from the viewer. Depth is communicated through size, shadow, position, overlap, and focus. Even on a two-dimensional screen, objects convey depth through layering — elements on higher layers appear closer.

**Architectural meaning:** Depth is the Z-axis of spatial structure. It creates the perception of three-dimensional space, where elements occupy different spatial planes. Depth communicates hierarchy — higher layers are more important and closer to the user.

**Derivation:** Derived from [Axiom I: Space Is Infinite](../philosophy/core-principles.md#axiom-i-space-is-infinite) — infinite space has depth. Derived from [Depth Perception](../spatial-hierarchy/depth-perception.md).

**Relationships:** Related to [Layer](#layer), [Shadow](#shadow), [Hierarchy](#hierarchy), [Viewport](#viewport).

---

### Disabled State

The appearance of an element that is not available for interaction. Disabled elements are visually muted, not focusable, and do not respond to input. The disabled state communicates that the element exists but cannot currently be used.

**Architectural meaning:** The disabled state preserves the element's spatial presence while removing its interactive affordance. This maintains spatial consistency — the element is still visible and positioned, but its behavioral layer is inactive.

**Derivation:** Derived from [Error Prevention Over Error Recovery](../philosophy/design-philosophy.md#error-prevention-over-error-recovery) — disabled states prevent users from attempting invalid actions. Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability).

**Relationships:** Related to [State](#state), [Default State](#default-state), [Focus](#focus), [Affordance](#affordance).

---

## E

### Easing

The rate of change of an animation over time. Easing functions control acceleration and deceleration, producing motion that follows physical laws. Linear motion feels robotic; eased motion feels natural because it follows the physics of mass and inertia.

**Architectural meaning:** Easing is the temporal signature of spatial physics. It communicates that objects have mass, that movement requires force, and that motion follows physical laws. Without easing, animations feel artificial and violate the physics of space.

**Derivation:** Derived from [Axiom VII: Animation Serves Physics](../philosophy/core-principles.md#axiom-vii-animation-serves-physics). Derived from [Movement Physics](../motion/movement-physics.md).

**Relationships:** Related to [Animation](#animation), [Transition](#transition), [Entrance Animation](#entrance-animation), [Exit Animation](#exit-animation).

---

### Element

A single component or part of the interface. Elements include buttons, inputs, text, images, and containers. In WHITE DIAMOND, every element is an architectural construction — it has boundaries, a surface, content, weight, position, and state.

**Architectural meaning:** Elements are the atoms of interface architecture. Each element follows the three-layer hierarchy (Physical Boundary → Inner Surface → Content) and exists within the spatial structure defined by the grid system.

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries).

**Relationships:** Related to [Object](#object), [Component](#component), [Container](#container), [Element](../geometry/object-boundaries.md).

---

### Entrance Animation

An animation that shows an element entering the viewport from outside its boundaries. Entrance animations reveal spatial structure — they communicate where elements come from and how they relate to the larger spatial structure.

**Architectural meaning:** Entrance animations are the mechanism through which users perceive that space exists outside the viewport. They reinforce the viewport metaphor (Axiom I) and the no-birth principle (Axiom IX).

**Derivation:** Derived from [Axiom IV: Appearance Sequence Is Reversal, Not Generation](../philosophy/core-principles.md#axiom-iv-appearance-sequence-is-reversal-not-generation). Derived from [Axiom IX: No Birth, No Death](../philosophy/core-principles.md#axiom-ix-no-birth-no-death).

**Relationships:** Related to [Exit Animation](#exit-animation), [Animation](#animation), [Easing](#easing), [Viewport](#viewport).

---

### Exit Animation

An animation that shows an element leaving the viewport. Exit animations reveal spatial structure — they communicate where elements go and reinforce that elements continue to exist outside the viewport.

**Architectural meaning:** Exit animations are the complement to entrance animations. They reinforce that objects do not disappear — they exit the viewport and continue to exist in spatial position, outside the visible area.

**Derivation:** Derived from [Axiom IV: Appearance Sequence Is Reversal, Not Generation](../philosophy/core-principles.md#axiom-iv-appearance-sequence-is-reversal-not-generation). Derived from [Axiom IX: No Birth, No Death](../philosophy/core-principles.md#axiom-ix-no-birth-no-death).

**Relationships:** Related to [Entrance Animation](#entrance-animation), [Animation](#animation), [Easing](#easing), [Viewport](#viewport).

---

## F

### Focus

The state of an element being ready for keyboard interaction. Focused elements have visible indicators that communicate which element will receive keyboard input. Focus is the keyboard equivalent of hover — it communicates readiness for interaction.

**Architectural meaning:** Focus is the mechanism through which keyboard users navigate the spatial structure. Without visible focus indicators, keyboard users cannot determine where they are in the interface, and the spatial structure becomes invisible.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — focus must be visible and consistent. Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature).

**Relationships:** Related to [Focus Indicator](#focus-indicator), [Keyboard Accessibility](#keyboard-accessibility), [State](#state), [Disabled State](#disabled-state).

---

### Focus Indicator

A visual cue that shows which element currently has keyboard focus. Focus indicators are essential for keyboard navigation — they are the spatial map for non-pointer interaction. Without focus indicators, keyboard users are navigating blind.

**Architectural meaning:** Focus indicators are the spatial markers of the interaction layer. They reveal the tab order, communicate interactive boundaries, and provide the visual feedback that enables keyboard users to develop spatial understanding.

**Derivation:** Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature). Derived from [Keyboard Navigation](../accessibility/keyboard-navigation.md).

**Relationships:** Related to [Focus](#focus), [Keyboard Accessibility](#keyboard-accessibility), [Border](#border) (focus indicators are typically borders).

---

### Font Family

A set of fonts that share a common design. Font families include variations like regular, bold, and italic. Font families provide the typographic foundation for the information layer.

**Architectural meaning:** Font families are the voice of the information layer. They determine how text communicates — whether it feels monumental, precise, formal, or casual. The choice of font family affects readability, hierarchy, and personality.

**Derivation:** Derived from [Typography](../typography/type-system.md). Derived from [Text Hierarchy](../typography/text-hierarchy.md).

**Relationships:** Related to [Font Size](#font-size), [Font Weight](#font-weight), [Typography](#typography), [Type System](../typography/type-system.md).

---

### Font Size

The height of text characters, typically measured in pixels or points. Font sizes create hierarchy — larger text communicates greater importance. Font sizes must follow a consistent scale to maintain proportion and rhythm.

**Architectural meaning:** Font sizes are the primary mechanism of typographic hierarchy. They communicate importance through physical presence — larger elements attract attention first and communicate structural significance.

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation) — size communicates importance. Derived from [Text Hierarchy](../typography/text-hierarchy.md).

**Relationships:** Related to [Font Family](#font-family), [Font Weight](#font-weight), [Scale](#scale), [Hierarchy](#hierarchy).

---

### Font Weight

The thickness of text characters. Font weights include regular, medium, semibold, and bold. Font weights create contrast within text hierarchy — heavier weights communicate emphasis and importance.

**Architectural meaning:** Font weights are a secondary mechanism of typographic hierarchy. They create contrast within a consistent font size, allowing emphasis without breaking the spatial structure.

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation). Derived from [Text Hierarchy](../typography/text-hierarchy.md).

**Relationships:** Related to [Font Family](#font-family), [Font Size](#font-size), [Typography](#typography).

---

## G

### Gap

The space between items in a container. Gaps create visual separation and rhythm. Gaps are not empty — they are boundary forces that separate one element from another, communicating relationship and hierarchy.

**Architectural meaning:** Gaps are the spatial expression of separation. They communicate that elements are distinct but related. The size of the gap communicates the strength of the relationship — smaller gaps imply closer relationships, larger gaps imply weaker relationships.

**Derivation:** Derived from [Space Is Not Empty](../philosophy/design-philosophy.md#space-is-not-empty) — space is a material with properties. Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Spacing](#spacing), [Margin](#margin), [Padding](#padding), [Grid](#grid).

---

### Grid

An invisible structure that organizes space. Grids provide alignment, consistency, and proportion. A grid is not a visual element — it is the spatial framework upon which all visible elements are constructed.

**Architectural meaning:** Grids are the blueprint of spatial structure. They define where elements can be placed, how they align, and how they relate. A grid is to an interface what a foundation is to a building — invisible but essential.

**Derivation:** Derived from [Axiom V: Only Rectangles Exist](../philosophy/core-principles.md#axiom-v-only-rectangles-exist) — rectangles have aligned vertices that connect to grid systems. Derived from [Grid System](../layout/grid-system.md).

**Relationships:** Related to [Grid Column](#grid-column), [Gutter](#gutter), [Alignment](#alignment), [Spacing](#spacing).

---

### Grid Column

A vertical division of a grid. Columns define where elements can be placed and how they align. Columns create the vertical structure that ensures consistency across layouts.

**Architectural meaning:** Columns are the vertical modules of spatial construction. They provide the alignment system that ensures elements across different regions share a common spatial foundation.

**Derivation:** Derived from [Grid System](../layout/grid-system.md). Derived from [Axiom V: Only Rectangles Exist](../philosophy/core-principles.md#axiom-v-only-rectangles-exist).

**Relationships:** Related to [Grid](#grid), [Gutter](#gutter), [Alignment](#alignment).

---

### Gutter

The space between grid columns. Gutters create separation between columns and establish the rhythm of horizontal spacing. Gutters ensure that elements in adjacent columns do not merge.

**Architectural meaning:** Gutters are the horizontal boundaries of the grid system. They are the spatial forces that separate columns, creating the structural divisions that make layouts navigable.

**Derivation:** Derived from [Grid System](../layout/grid-system.md). Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Grid](#grid), [Grid Column](#grid-column), [Gap](#gap), [Spacing](#spacing).

---

## H

### Hierarchy

The arrangement of elements by importance. Hierarchy guides the eye through a sequence of attention — primary, secondary, tertiary — that mirrors the importance of the information. Hierarchy is not decoration — it is infrastructure.

**Architectural meaning:** Hierarchy is the navigation system of the interface. Without hierarchy, every element demands equal attention, and the user cannot determine where to look first. With hierarchy, the interface guides the user through a predictable sequence.

**How hierarchy is created:**
- **Size** — Larger elements attract attention first
- **Contrast** — High-contrast elements stand out from surroundings
- **Position** — Elements at the top or center draw more attention
- **Motion** — Moving elements attract attention before static ones
- **Spacing** — Elements with more surrounding space feel more important
- **Border weight** — Thicker borders communicate structural importance

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation). Derived from [Axiom X: Monumentality Over Decoration](../philosophy/core-principles.md#axiom-x-monumentality-over-decoration).

**Relationships:** Related to [Scale](#scale), [Depth](#depth), [Typography](#typography), [Visual Hierarchy](#visual-hierarchy).

---

### Hover State

The appearance of an element when the cursor is positioned over it. Hover states indicate interactivity — they acknowledge proximity and communicate that the element is ready for interaction. Hover is the pointer equivalent of focus.

**Architectural meaning:** Hover states are the feedback mechanism of the interaction layer. They communicate that the element has detected the user's presence and is ready to respond. Hover reveals affordances that are subtle in the default state.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — hover must be consistent and predictable. Derived from [Feedback Creates Trust](../philosophy/architectural-thinking.md#feedback-creates-trust).

**Relationships:** Related to [State](#state), [Default State](#default-state), [Focus](#focus), [Affordance](#affordance).

---

## I

### Icon

A visual symbol that represents an action, object, or concept. Icons communicate meaning quickly but must be paired with text for accessibility. Icons in WHITE DIAMOND are rectangular — they exist within rectangular boundaries and follow the same spatial rules as all other elements.

**Architectural meaning:** Icons are concentrated information. They communicate meaning through symbol rather than text, reducing cognitive load when the symbol is universally understood. They are elements of the information layer, not decorative additions.

**Derivation:** Derived from [Axiom V: Only Rectangles Exist](../philosophy/core-principles.md#axiom-v-only-rectangles-exist) — icons exist within rectangular boundaries. Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature).

**Relationships:** Related to [Label](#label), [Typography](#typography), [Accessibility](#accessibility).

---

### Inline Element

An element that exists within the content flow, not breaking the flow of text. Inline elements follow the reading direction and do not create new spatial rows.

**Architectural meaning:** Inline elements are the exceptions to the block-level spatial model. They exist within the text flow rather than defining new spatial regions. Understanding when to use inline vs. block elements is understanding when content should flow vs. when it should define structure.

**Derivation:** Derived from [Text in Space](../typography/text-in-space.md).

**Relationships:** Related to [Typography](#typography), [Line Height](#line-height), [Baseline](#baseline).

---

### Input

An interactive element that captures user data. Inputs include text fields, checkboxes, selects, and sliders. Inputs are three-layer constructions — they have borders (boundary), surfaces (background), and content (value or placeholder).

**Architectural meaning:** Inputs are the data collection mechanism of the interaction layer. They are architectural constructions that invite user contribution. Their borders define interactive boundaries, their surfaces provide context, and their content communicates their purpose.

**Derivation:** Derived from [Axiom III: The Three-Layer Hierarchy Is Immutable](../philosophy/core-principles.md#axiom-iii-the-three-layer-hierarchy-is-immutable). Derived from [Input Specification](../components/input-specification.md).

**Relationships:** Related to [Component](#component), [Label](#label), [State](#state), [Focus](#focus).

---

## J

### Justification

The alignment of text along one edge. Left justification aligns text to the left margin; right justification aligns to the right margin. Justification creates predictable reading patterns and establishes spatial rhythm in text.

**Architectural meaning:** Justification is the spatial structure of text. It determines where lines begin and end, creating the vertical edges that establish text as a spatial region rather than a floating element.

**Derivation:** Derived from [Text Hierarchy](../typography/text-hierarchy.md). Derived from [Axiom V: Only Rectangles Exist](../philosophy/core-principles.md#axiom-v-only-rectangles-exist) — text forms rectangular regions through justification.

**Relationships:** Related to [Typography](#typography), [Alignment](#alignment), [Readability](#readability).

---

## K

### Keyboard Accessibility

The ability to navigate and interact with an interface using only a keyboard. Keyboard accessibility is not optional — it is a fundamental requirement for interfaces that serve all users. Without keyboard accessibility, users with motor impairments cannot use the interface.

**Architectural meaning:** Keyboard accessibility is the measure of how well the interaction layer is structured. If an interface cannot be navigated with a keyboard, its spatial structure is incomplete — the interaction layer depends on pointer input and fails without it.

**Derivation:** Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature). Derived from [Keyboard Navigation](../accessibility/keyboard-navigation.md).

**Relationships:** Related to [Accessibility](#accessibility), [Focus](#focus), [Focus Indicator](#focus-indicator), [Tab Order](../accessibility/keyboard-navigation.md).

---

## L

### Label

Text that identifies an element. Labels describe what inputs are for and what buttons do. Labels are essential for accessibility — they provide the text that screen readers announce and that users read to understand element purpose.

**Architectural meaning:** Labels are the textual expression of element purpose. They are the bridge between the spatial layer (where the element exists) and the information layer (what the element means). Without labels, elements are anonymous — they exist in space but communicate nothing.

**Derivation:** Derived from [Axiom III: The Three-Layer Hierarchy Is Immutable](../philosophy/core-principles.md#axiom-iii-the-three-layer-hierarchy-is-immutable) — content includes the text that communicates purpose. Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature).

**Relationships:** Related to [Typography](#typography), [Input](#input), [Accessibility](#accessibility), [Screen Reader](#screen-reader).

---

### Layer

A level in the depth hierarchy. Layers organize elements from background to foreground, creating the Z-axis of spatial structure. Layers communicate spatial planes — elements on different layers exist at different depths.

**Architectural meaning:** Layers are the mechanism through which three-dimensional space is communicated on a two-dimensional screen. Higher layers are closer to the user; lower layers are farther away. Layering creates hierarchy, containment, and spatial relationships.

**Derivation:** Derived from [Axiom I: Space Is Infinite](../philosophy/core-principles.md#axiom-i-space-is-infinite) — infinite space has depth. Derived from [Depth Perception](../spatial-hierarchy/depth-perception.md).

**Relationships:** Related to [Depth](#depth), [Shadow](#shadow), [Hierarchy](#hierarchy), [Viewport](#viewport).

---

### Line Height

The distance between lines of text. Line height affects readability — too tight and lines merge, too loose and the text loses cohesion. Line height creates the vertical rhythm of text.

**Architectural meaning:** Line height is the vertical spacing of the information layer. It determines how text elements relate vertically — tight line heights create compact information, loose line heights create spacious information.

**Derivation:** Derived from [Spacing System](../tokens/spacing-system.md). Derived from [Typography](../typography/type-system.md).

**Relationships:** Related to [Typography](#typography), [Baseline](#baseline), [Font Size](#font-size), [Readability](#readability).

---

### Loading State

The appearance of an element while processing. Loading states communicate that something is happening and that the user should wait. Loading states must be spatial — they should not introduce new elements but rather modify existing elements to communicate processing.

**Architectural meaning:** Loading states are the temporal communication of the interaction layer. They reveal that an action has been triggered and that consequences are being computed. They maintain spatial structure while communicating temporal status.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — loading states must be predictable and consistent. Derived from [Feedback Creates Trust](../philosophy/architectural-thinking.md#feedback-creates-trust).

**Relationships:** Related to [State](#state), [Default State](#default-state), [Animation](#animation).

---

## M

### Margin

The space outside an element's boundaries. Margins create separation between elements and define the spatial relationships between adjacent objects. Margins are the external force that separates one element from another.

**Architectural meaning:** Margins are the spatial expression of separation. They communicate that elements are distinct — that one ends and another begins. Without margins, adjacent elements merge and the boundary between them disappears.

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries) — objects have boundaries that separate them from surrounding space. Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Padding](#padding), [Border](#border), [Gap](#gap), [Spacing](#spacing).

---

### Mental Model

A user's internal understanding of how an interface works. Mental models are built through experience — users observe patterns, form expectations, and predict outcomes. When expectations match reality, users develop confidence. When they don't, users develop anxiety.

**Architectural meaning:** Mental models are the cognitive representation of the interface's spatial structure. Users build mental models by observing spatial relationships, learning behavioral patterns, and predicting outcomes. Well-structured interfaces produce accurate mental models; chaotic interfaces produce confused ones.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability) — predictable systems enable accurate mental models. Derived from [User Psychology](../psychology/user-psychology.md).

**Relationships:** Related to [Consistency](#consistency), [Predictability](#predictability), [Control Feeling](../psychology/control-feeling.md).

---

### Modal

An overlay that requires user interaction before returning to the main interface. Modals focus attention by creating a new spatial plane above the existing content. They are architectural constructions — they have borders, surfaces, and content, and they exist on a higher layer than the background.

**Architectural meaning:** Modals are the mechanism through which focused interaction is achieved. They create a new spatial plane that demands attention, separating the modal's content from the background. This separation is communicated through depth (layering), boundaries (borders), and motion (entrance animation).

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries). Derived from [Modal Specification](../components/modal-specification.md).

**Relationships:** Related to [Layer](#layer), [Depth](#depth), [Component](#component), [Boundary](#boundary).

---

### Motion

The visual movement of elements. Motion communicates spatial relationships and state changes. In WHITE DIAMOND, motion is never decorative — it is informational. Every motion reveals a spatial relationship.

**Architectural meaning:** Motion is the temporal expression of spatial structure. It reveals relationships that static images cannot — where elements come from, where they go, how they relate, and what their physical properties are.

**Derivation:** Derived from [Axiom VII: Animation Serves Physics](../philosophy/core-principles.md#axiom-vii-animation-serves-physics). Derived from [Animation Principles](../motion/animation-principles.md).

**Relationships:** Related to [Animation](#animation), [Transition](#transition), [Easing](#easing), [Entrance Animation](#entrance-animation), [Exit Animation](#exit-animation).

---

## N

### Navigation

Elements that help users move through the interface. Navigation includes links, menus, and tabs. Navigation is the mechanism through which users traverse the spatial structure — it is the set of paths available for movement.

**Architectural meaning:** Navigation is the flow system of the interface. It defines the paths users can take, the decisions they must make, and the destinations they can reach. Navigation is architectural infrastructure — without it, the spatial structure is inaccessible.

**Derivation:** Derived from [The Flow Pattern](../philosophy/architectural-thinking.md#the-flow-pattern). Derived from [Navigation Specification](../components/navigation-specification.md).

**Relationships:** Related to [Hierarchy](#hierarchy), [Component](#component), [Flow](#flow), [Viewport](#viewport).

---

## O

### Object

Any discrete element that exists in the interface. Objects include buttons, inputs, text, and containers. In WHITE DIAMOND, every object is an architectural construction — it has boundaries, a surface, content, weight, position, and state. Objects do not float arbitrarily; they exist within spatial relationships.

**Architectural meaning:** Objects are the fundamental units of interface architecture. They follow the three-layer hierarchy (Physical Boundary → Inner Surface → Content), exist at specific positions in the spatial structure, and communicate their purpose through spatial properties.

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries). Derived from [Object Structure](../spatial-hierarchy/object-structure.md).

**Relationships:** Related to [Component](#component), [Container](#container), [Element](#element), [Boundary](#boundary).

---

### Overflow

What happens when content exceeds its boundaries. Overflow can be hidden, scrolled, or truncated. Overflow management is essential for maintaining the integrity of the spatial structure — content that exceeds its boundaries must be handled without breaking the architectural language.

**Architectural meaning:** Overflow is the spatial consequence of content density. When content exceeds its container, the interface must decide how to handle the excess — this decision affects the spatial, information, and interaction layers.

**Derivation:** Derived from [Axiom II: Objects Have Mass and Boundaries](../philosophy/core-principles.md#axiom-ii-objects-have-mass-and-boundaries) — boundaries define limits that content must respect.

**Relationships:** Related to [Container](#container), [Boundary](#border), [Scroll](#scroll), [Viewport](#viewport).

---

## P

### Padding

The space inside an element's boundaries. Padding creates space between content and borders, providing the inner surface upon which content rests. Padding is the internal force that separates content from its boundary.

**Architectural meaning:** Padding is the inner surface of the three-layer hierarchy. It is the space between the physical boundary (border) and the content. Without padding, content presses against borders, creating visual tension and reducing readability.

**Derivation:** Derived from [Axiom III: The Three-Layer Hierarchy Is Immutable](../philosophy/core-principles.md#axiom-iii-the-three-layer-hierarchy-is-immutable) — the inner surface exists between boundary and content. Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Margin](#margin), [Border](#border), [Container](#container), [Spacing](#spacing).

---

### Primary Color

The main brand color, used for key actions and emphasis. Primary colors communicate the most important interactive elements — they attract attention and signal where action is possible.

**Architectural meaning:** Primary colors are the chromatic hierarchy of the interface. They communicate importance through color contrast — primary elements stand out from their surroundings because their color is more prominent.

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation) — contrast communicates importance. Derived from [Color System](../tokens/color-system.md).

**Relationships:** Related to [Secondary Color](#secondary-color), [Color Contrast](#color-contrast), [Color System](../tokens/color-system.md).

---

### Progressive Disclosure

Revealing information gradually, showing only what is needed at each step. Progressive disclosure respects the limits of human cognition by presenting only what is relevant now and revealing complexity on demand.

**Architectural meaning:** Progressive disclosure is the architectural principle of layered revelation. Like walking through a building — you see the main corridors first, then rooms along the corridor, then details within rooms. The building reveals itself progressively as you navigate through it.

**Derivation:** Derived from [Progressive Disclosure](../philosophy/design-philosophy.md#progressive-disclosure). Derived from [Cognitive Load](../psychology/cognitive-load.md).

**Relationships:** Related to [Hierarchy](#hierarchy), [Navigation](#navigation), [Minimalism](#minimalism), [Cognitive Load](#cognitive-load).

---

## R

### Radius

The rounding of border corners. Radius creates soft, friendly appearances. In WHITE DIAMOND, radius is used sparingly — sharp corners communicate construction and precision, while rounded corners communicate organic qualities that should be used with caution.

**Architectural meaning:** Radius modifies the geometric language of borders. Sharp corners (radius: 0) communicate precision and construction. Rounded corners (radius > 0) communicate softness and approachability. The choice between them is architectural — it determines whether the interface feels constructed or organic.

**Derivation:** Derived from [Axiom V: Only Rectangles Exist](../philosophy/core-principles.md#axiom-v-only-rectangles-exist) — rectangles have sharp corners by default. Radius is a modification of this default.

**Relationships:** Related to [Border](#border), [Geometric Rules](../geometry/geometric-rules.md), [Component](#component).

---

### Readability

How easy text is to read. Readability is affected by font size, line height, line length, contrast, and color. Readability is not about aesthetics — it is about the information layer's ability to communicate its content.

**Architectural meaning:** Readability is the measure of how efficiently the information layer communicates text content. It is affected by spatial properties (line height, line length, spacing) and visual properties (contrast, color, font). Poor readability is a spatial failure.

**Derivation:** Derived from [Typography](../typography/type-system.md). Derived from [Text Hierarchy](../typography/text-hierarchy.md).

**Relationships:** Related to [Typography](#typography), [Color Contrast](#color-contrast), [Font Size](#font-size), [Line Height](#line-height).

---

### Responsive Design

Design that adapts to different screen sizes. Responsive design ensures interfaces work on all devices by adjusting spatial relationships, typography, and layout to fit the available viewport.

**Architectural meaning:** Responsive design is the adaptation of spatial structure to viewport constraints. The interface's architecture must remain coherent regardless of viewport size — this requires flexible grids, scalable typography, and adaptable spatial relationships.

**Derivation:** Derived from [Axiom I: Space Is Infinite](../philosophy/core-principles.md#axiom-i-space-is-infinite) — the viewport is a window into infinite space, and the window size varies. Derived from [Grid System](../layout/grid-system.md).

**Relationships:** Related to [Viewport](#viewport), [Grid](#grid), [Scale](#scale), [Spacing](#spacing).

---

## S

### Scale

The size relationship between elements. Scale creates hierarchy and proportion. Larger elements communicate greater importance; smaller elements communicate lesser importance. Scale must be consistent across all views.

**Architectural meaning:** Scale is the proportional system of spatial hierarchy. It determines how elements relate in size, creating the visual weight that communicates importance. Scale is not arbitrary — it follows a consistent system that ensures proportion across all elements.

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation) — size communicates importance. Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Hierarchy](#hierarchy), [Font Size](#font-size), [Grid](#grid), [Spacing](#spacing).

---

### Screen Reader

Assistive technology that reads interface content aloud for blind users. Screen readers interpret the DOM and announce element roles, states, and content. For screen readers to work, the interface must have semantic structure — the spatial hierarchy must be expressed through code, not just visuals.

**Architectural meaning:** Screen readers are the non-visual expression of the information layer. They reveal whether the interface's structure is truly architectural or merely visual. An interface that looks structured but reads as flat to a screen reader is not architecturally sound.

**Derivation:** Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature). Derived from [Screen Readers](../accessibility/screen-readers.md).

**Relationships:** Related to [Accessibility](#accessibility), [Label](#label), [Keyboard Accessibility](#keyboard-accessibility), [Focus](#focus).

---

### Secondary Color

A supporting brand color, used for less prominent actions. Secondary colors communicate secondary importance — they support the primary color without competing with it.

**Architectural meaning:** Secondary colors are the secondary tier of chromatic hierarchy. They communicate that an element is important but not the most important. They provide contrast without dominance.

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation). Derived from [Color System](../tokens/color-system.md).

**Relationships:** Related to [Primary Color](#primary-color), [Color Contrast](#color-contrast), [Color System](../tokens/color-system.md).

---

### Shadow

A visual effect that simulates depth. Shadows communicate elevation and layering — elements with shadows appear to float above their background, occupying a higher spatial plane.

**Architectural meaning:** Shadows are the depth cue of the spatial layer. They communicate that an element is elevated above its background, creating the three-dimensional impression that space has depth. Shadows are not decoration — they are spatial information.

**Derivation:** Derived from [Axiom I: Space Is Infinite](../philosophy/core-principles.md#axiom-i-space-is-infinite) — infinite space has depth. Derived from [Depth Perception](../spatial-hierarchy/depth-perception.md).

**Relationships:** Related to [Depth](#depth), [Layer](#layer), [Elevation](../spatial-hierarchy/depth-perception.md).

---

### Spacing

The space between elements. Spacing creates relationships, hierarchy, and rhythm. Spacing is not empty — it is a material with properties. The space between two elements communicates their relationship — close elements are related, distant elements are unrelated.

**Architectural meaning:** Spacing is the force that organizes elements in space. It creates separation (margin), containment (padding), rhythm (gap), and hierarchy (isolation). Spacing is the invisible structure of the spatial layer.

**Derivation:** Derived from [Space Is Not Empty](../philosophy/design-philosophy.md#space-is-not-empty). Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Gap](#gap), [Margin](#margin), [Padding](#padding), [Grid](#grid), [Gutter](#gutter).

---

### State

The condition of an element. States include default, hover, active, focus, disabled, loading, and error. States communicate availability, activity, and result. Consistent states create predictability; predictable states create trust.

**Architectural meaning:** States are the temporal communication of the interaction layer. They reveal how elements respond to user actions and environmental conditions. States must be consistent across all instances of the same element to maintain predictability.

**Derivation:** Derived from [Axiom VIII: Absolute Control Through Predictability](../philosophy/core-principles.md#axiom-viii-absolute-control-through-predictability). Derived from [The State Pattern](../philosophy/architectural-thinking.md#the-state-pattern).

**Relationships:** Related to [Default State](#default-state), [Hover State](#hover-state), [Focus](#focus), [Disabled State](#disabled-state), [Loading State](#loading-state).

---

## T

### Touch Target

The area that responds to touch input. Touch targets must be at least 44x44 points to ensure that users with motor impairments can interact accurately. Touch targets are the spatial expression of interactive affordance.

**Architectural meaning:** Touch targets define the minimum spatial boundary of interactive elements. They ensure that the interaction layer is accessible to all users, regardless of motor precision. Touch targets are a spatial requirement, not a visual one — they may be larger than the visible border.

**Derivation:** Derived from [Accessibility Is Not a Feature](../philosophy/design-philosophy.md#accessibility-is-not-a-feature). Derived from [Accessibility Guidelines](../accessibility/accessibility-guidelines.md).

**Relationships:** Related to [Accessibility](#accessibility), [Border](#border), [Padding](#padding), [Component](#component).

---

### Transition

A smooth change from one state to another. Transitions make state changes feel natural by revealing the spatial consequence of the change. They communicate that the change is continuous, not discontinuous — the element moves from one state to another, it does not teleport.

**Architectural meaning:** Transitions are the temporal bridge between states. They reveal the spatial relationship between the originating state and the target state. Without transitions, state changes are abrupt and the spatial relationship is invisible.

**Derivation:** Derived from [Axiom VII: Animation Serves Physics](../philosophy/core-principles.md#axiom-vii-animation-serves-physics). Derived from [Animation Principles](../motion/animation-principles.md).

**Relationships:** Related to [Animation](#animation), [Motion](#motion), [Easing](#easing), [State](#state).

---

### Typography

The art and technique of arranging text. Typography affects readability, hierarchy, and personality. In WHITE DIAMOND, typography is not decoration — it is the visual expression of the information layer's structure.

**Architectural meaning:** Typography is the voice of the information layer. It communicates hierarchy (through size, weight, and spacing), readability (through font choice and line height), and personality (through font family and style). Typography is the mechanism through which text becomes architecture.

**Derivation:** Derived from [Type System](../typography/type-system.md). Derived from [Text Hierarchy](../typography/text-hierarchy.md).

**Relationships:** Related to [Font Family](#font-family), [Font Size](#font-size), [Font Weight](#font-weight), [Line Height](#line-height), [Readability](#readability).

---

## V

### Vertical Alignment

The alignment of elements along a vertical line. Vertical alignment creates visual order and establishes spatial relationships between elements that share a vertical axis.

**Architectural meaning:** Vertical alignment is the spatial expression of vertical relationship. Elements aligned vertically share a structural axis — they are connected by their vertical position.

**Derivation:** Derived from [Alignment](#alignment). Derived from [Geometric Rules](../geometry/geometric-rules.md).

**Relationships:** Related to [Alignment](#alignment), [Grid](#grid), [Baseline](#baseline).

---

### Viewport

The visible area of the interface. The viewport is the user's window into the infinite spatial structure — it shows a portion of a larger spatial reality. Scrolling does not create content; it reveals content that exists outside the viewport.

**Architectural meaning:** The viewport is the fundamental metaphor of WHITE DIAMOND. It reframes the screen from a canvas (which is created when you begin painting) to a window (which is a fixed position through which you observe something larger than yourself). This reframing has profound implications for layout, scrolling, and spatial relationships.

**Derivation:** Derived from [Axiom I: Space Is Infinite](../philosophy/core-principles.md#axiom-i-space-is-infinite). Derived from [Screen as Window](../space-physics/screen-as-window.md).

**Relationships:** Related to [Depth](#depth), [Layer](#layer), [Entrance Animation](#entrance-animation), [Exit Animation](#exit-animation), [Responsive Design](#responsive-design).

---

### Visual Hierarchy

The arrangement of elements by visual importance. Visual hierarchy guides the eye through a sequence of attention using visual properties — size, contrast, position, color, and spacing.

**Architectural meaning:** Visual hierarchy is the perceptual expression of structural hierarchy. It translates importance into visual properties that the human visual system can process automatically. Without visual hierarchy, the structural hierarchy is invisible.

**Derivation:** Derived from [Hierarchy Creates Navigation](../philosophy/architectural-thinking.md#hierarchy-creates-navigation). Derived from [Human Perception as Architectural Foundation](../philosophy/design-philosophy.md#human-perception-as-architectural-foundation).

**Relationships:** Related to [Hierarchy](#hierarchy), [Scale](#scale), [Depth](#depth), [Color Contrast](#color-contrast).

---

## W

### Whitespace

The empty space between elements. Whitespace creates breathing room and visual clarity. Whitespace is not empty — it is a spatial force that separates, groups, and organizes elements.

**Architectural meaning:** Whitespace is the most undervalued architectural element. It creates the boundaries between regions, the rhythm between elements, and the hierarchy between levels. Without whitespace, elements merge and the interface becomes a wash of undifferentiated content.

**Derivation:** Derived from [Space Is Not Empty](../philosophy/design-philosophy.md#space-is-not-empty). Derived from [Spacing System](../tokens/spacing-system.md).

**Relationships:** Related to [Spacing](#spacing), [Margin](#margin), [Padding](#padding), [Gap](#gap).

---

### Width

The horizontal extent of an element. Width affects layout and proportion. Width must be defined in relation to the grid system and the viewport — elements have width that communicates their spatial presence.

**Architectural meaning:** Width is the horizontal dimension of spatial structure. It determines how much space an element occupies, how it relates to other elements, and how it adapts to different viewports.

**Derivation:** Derived from [Space Geometry](../geometry/space-geometry.md). Derived from [Grid System](../layout/grid-system.md).

**Relationships:** Related to [Scale](#scale), [Grid](#grid), [Viewport](#viewport), [Responsive Design](#responsive-design).

---

## Term Relationships Map

The terms in this glossary are not independent — they form a web of relationships derived from the axioms. Here is the dependency structure:

**Foundation terms** (derived directly from axioms):
- [Space](#space-is-infinite) → [Viewport](#viewport), [Depth](#depth), [Layer](#layer)
- [Object](#object) → [Boundary](#boundary), [Border](#border), [Component](#component)
- [Three-Layer Hierarchy](#the-three-layer-hierarchy-is-immutable) → [Padding](#padding), [Container](#container), [Content](#content)
- [Animation](#animation) → [Easing](#easing), [Transition](#transition), [Entrance Animation](#entrance-animation), [Exit Animation](#exit-animation)
- [Rectangles](#only-rectangles-exist) → [Grid](#grid), [Alignment](#alignment), [Radius](#radius)
- [Borders](#borders-are-everything) → [Border](#border), [Boundary](#boundary), [Container](#container)

**Structural terms** (derived from foundation terms):
- [Hierarchy](#hierarchy) → [Scale](#scale), [Visual Hierarchy](#visual-hierarchy), [Font Size](#font-size)
- [Spacing](#spacing) → [Gap](#gap), [Margin](#margin), [Padding](#padding), [Gutter](#gutter)
- [Typography](#typography) → [Font Family](#font-family), [Font Size](#font-size), [Font Weight](#font-weight), [Line Height](#line-height)
- [State](#state) → [Default State](#default-state), [Hover State](#hover-state), [Focus](#focus), [Disabled State](#disabled-state)

**Applied terms** (derived from structural terms):
- [Accessibility](#accessibility) → [Keyboard Accessibility](#keyboard-accessibility), [Screen Reader](#screen-reader), [Color Contrast](#color-contrast)
- [Cognitive Load](#cognitive-load) → [Progressive Disclosure](#progressive-disclosure), [Minimalism](#minimalism)
- [Readability](#readability) → [Typography](#typography), [Color Contrast](#color-contrast), [Line Height](#line-height)

---

## See Also

- [FAQ](../faq/faq.md) — Frequently asked questions
- [Specification Index](../reference/specification-index.md) — Complete index of all specifications
- [Core Principles](../philosophy/core-principles.md) — The ten axioms from which all terms derive
- [Design Philosophy](../philosophy/design-philosophy.md) — The worldview that shapes the terminology
- [Architectural Thinking](../philosophy/architectural-thinking.md) — How terms relate to architectural reasoning
