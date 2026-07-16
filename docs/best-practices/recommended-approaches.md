# Recommended Approaches

## Why This Matters

In any design system, the gap between principle and practice is where confusion breeds. WHITE DIAMOND principles establish *what* to believe; recommended approaches establish *how* to act. These approaches are not arbitrary suggestions — they are patterns that have been validated through rigorous application against the eight foundational pillars. Each approach exists because it consistently produces interfaces that feel monumental, physically coherent, and predictably controllable.

When you deviate from these approaches, you are not simply choosing a different path — you are choosing to abandon the spatial certainty that gives WHITE DIAMOND its architectural integrity. Every recommendation below carries the weight of that commitment.

## Layout Approaches

### Use a Grid System

**Recommendation:** Every layout must use a consistent grid system. No exceptions.

**Why:** The grid is the skeleton of spatial architecture. Without it, elements float without reference, and the user loses the sense that the interface exists within a defined, measurable space. The grid provides the invisible scaffold that allows objects to feel anchored to an infinite spatial plane. It transforms chaos into order without imposing visible constraint.

A grid is not about alignment for alignment's sake — it is about establishing the spatial coordinates that prove the screen is a window into a vast, structured world. When elements align to a grid, they share a coordinate system. When they do not, each element exists in isolation, and the sense of architectural unity collapses.

**How:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-6);
}
```

**Scale considerations:** The grid must remain consistent across breakpoints. A 12-column grid on desktop may collapse to 4 columns on mobile, but the underlying unit relationships must persist. The grid is not responsive — it is *adaptive*, revealing more or fewer columns while maintaining proportional integrity.

### Use Whitespace for Separation

**Recommendation:** Prefer whitespace over visual separators (lines, shadows, background changes) for grouping and separating content.

**Why:** Whitespace is the most honest form of spatial separation. It relies on proximity — the most fundamental Gestalt principle — to communicate relationships. Lines and borders are artificial constructs that interrupt the spatial field. Whitespace allows the spatial plane to remain continuous while still communicating structure. It is the difference between a building with walls and a building with open floor plans that use elevation changes to define zones.

In WHITE DIAMOND, every element is an architectural construction. When you place a line between two elements, you are inserting a foreign object into the spatial field. When you use whitespace, you are allowing the natural distance between constructions to speak for itself.

**How:**
```css
/* Anti-pattern: Artificial separation */
.section { border-bottom: 1px solid #ccc; }

/* Proven approach: Spatial separation */
.section { margin-bottom: var(--spacing-8); }
```

**Exception:** Borders are mandatory for *defining object boundaries* — see [Object Boundaries](../geometry/object-boundaries.md). Use whitespace for separation between objects, use borders for defining where objects begin and end.

### Use Progressive Disclosure

**Recommendation:** Show only what is needed at the current moment. Reveal complexity on demand.

**Why:** A monumental interface does not mean a cluttered one. Architecture achieves grandeur through the careful choreography of revelation — the way a cathedral reveals its nave only after you pass through the narthex. Every element visible simultaneously competes for attention. Progressive disclosure respects the user's cognitive bandwidth by presenting information in deliberate sequence.

This approach directly serves the principle of absolute control. When the user sees everything at once, they must search. When information is revealed in response to their actions, they feel in command of the pace and direction of discovery.

**How:**
- Collapse secondary content behind expandable boundaries
- Use layered overlays for context-dependent information
- Reveal detail on explicit user action (click, not hover)
- Paginate or virtualize lists that exceed a single viewport

## Typography Approaches

### Use a Type Scale

**Recommendation:** All text in the interface must conform to a predefined, mathematically derived type scale.

**Why:** Typography is the voice of architecture. Just as a building communicates its hierarchy through the relative mass of its floors — ground floor larger, upper floors diminishing — an interface communicates importance through relative text size. A type scale ensures that every piece of text knows its rank in the hierarchy.

Without a type scale, text sizes become arbitrary. Arbitrary sizes produce interfaces that feel handcrafted rather than architected. The type scale is the constitution of textual hierarchy — it cannot be violated without undermining the entire structure.

**How:**
```css
:root {
  --font-size-caption: 12px;
  --font-size-body: 14px;
  --font-size-h4: 16px;
  --font-size-h3: 18px;
  --font-size-h2: 22px;
  --font-size-h1: 28px;
  --font-size-display: 36px;
}
```

**Relationship to spacing:** The type scale and spacing scale must be harmonically related. Text size influences line height, which influences spacing, which influences grid density. A disconnected type scale produces interfaces where text and space feel like they belong to different systems.

### Limit Line Length

**Recommendation:** Restrict body text to a maximum of 50–75 characters per line.

**Why:** The human eye tracks text in a sweeping motion, and each line requires a precise return sweep to the beginning of the next line. When lines are too long, the return sweep overshoots or undershoots, causing fatigue and re-reading. When lines are too short, the eye constantly jumps, fragmenting comprehension.

The architectural parallel is clear: a corridor that is too wide loses its sense of direction. A corridor that is too narrow feels claustrophobic. The 50–75 character range is the corridor of optimal passage.

**How:**
```css
.content { max-width: 65ch; }
```

### Use Semantic Headings

**Recommendation:** Every heading must follow strict hierarchical nesting (h1 → h2 → h3). Never skip levels.

**Why:** Headings are the structural beams of textual architecture. An h1 is a primary load-bearing wall. An h2 is a secondary partition. An h3 is a tertiary brace. Skipping heading levels is like removing a load-bearing wall — the structure may stand temporarily, but it is fundamentally compromised.

For screen readers and assistive technologies, heading hierarchy is not optional — it is the primary navigation mechanism. A skipped heading level breaks the document outline, making the content inaccessible to users who rely on structural navigation.

**How:**
```html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
```

## Color Approaches

### Use Semantic Colors

**Recommendation:** Every color must communicate meaning, not decoration.

**Why:** Color in WHITE DIAMOND is not aesthetic — it is communicative. A red element does not exist because red is a nice color. It exists because red communicates error, danger, or critical attention. When color serves only decoration, it introduces noise into the spatial field, making it harder for the user to extract meaning.

Semantic colors create a shared vocabulary between interface and user. Over time, the user learns that green means success, yellow means caution, and red means error. This vocabulary cannot be taught through arbitrary color choices.

**How:**
```css
:root {
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

### Ensure Sufficient Contrast

**Recommendation:** All text must maintain a minimum contrast ratio of 4.5:1 against its background.

**Why:** An interface that cannot be read is an interface that does not exist. Contrast is not a suggestion — it is a requirement of architectural integrity. If the text on a building's facade were painted in the same color as the facade itself, the building would be functionally blind.

This requirement extends beyond compliance. Even if no accessibility standard mandated contrast, the spatial principle demands it: objects must be distinguishable from their environment. Low-contrast text violates this principle by allowing content to dissolve into its container.

**How:** Use automated contrast checkers during development. Prefer dark text on light backgrounds for body content. Reserve light text on dark backgrounds for focused, short-duration reading.

### Limit Color Palette

**Recommendation:** Use no more than 10 distinct colors across the entire interface.

**Why:** Color is information. When you introduce more than 10 colors, the user must decode an increasingly complex chromatic vocabulary. Each additional color dilutes the semantic weight of every other color. A restricted palette forces each color to carry more meaning, which is precisely the point.

The palette should be structured as:
- 1–2 primary colors (brand identity, primary actions)
- 1–2 secondary colors (supporting elements, secondary actions)
- Neutral scale (8–10 values from near-white to near-black)
- 4 semantic colors (success, warning, error, info)

## Interaction Approaches

### Provide Immediate Feedback

**Recommendation:** Every user action must produce visible feedback within 100 milliseconds.

**Why:** The 100ms threshold is the boundary of perceived immediacy. Beyond it, the user begins to question whether their action was registered. Within it, the user experiences a direct cause-and-effect relationship with the interface, which is the foundation of absolute control.

In architectural terms, feedback is the sound of a door closing, the resistance of a light switch, the click of a lock. Without feedback, the user is operating in a void, uncertain whether their inputs have any effect.

**How:**
```css
.button {
  transition: transform 100ms ease-out;
}
.button:active {
  transform: scale(0.98);
}
```

**What constitutes feedback:** A button press producing a visible depression. An input receiving focus producing a visible border change. A form submission producing a loading indicator. A destructive action producing a confirmation dialog. Every action, without exception, must have a response.

### Use Consistent Patterns

**Recommendation:** The same action must produce the same visual pattern, everywhere, without exception.

**Why:** Consistency is the language of predictability. When every button looks and behaves the same way, the user learns the vocabulary once and applies it universally. Inconsistency forces the user to relearn for each instance, which is the opposite of absolute control.

In architecture, this is the principle of standardization. A light switch in one room should work the same way as a light switch in every other room. If switches behaved differently in different rooms, the building would be maddening.

**How:**
- All buttons share identical visual treatment and interaction behavior
- All inputs have labels positioned above
- All modals include visible close mechanisms
- All navigational links are underlined

### Make Interactive Elements Obvious

**Recommendation:** Users must never have to guess whether an element is interactive.

**Why:** Ambiguity is the enemy of control. When a user cannot distinguish between static text and a clickable link, they are forced into trial-and-error exploration. Trial-and-error is not control — it is experimentation born of confusion.

Every interactive element must communicate its interactivity through at least two distinct cues: a visual style difference from static content (color, underline, background), and a state change on hover or focus. This dual-cue approach ensures that even users with limited vision can identify interactive elements.

**How:**
- Buttons use elevated styling (shadows, borders, distinct backgrounds)
- Links use underline styling with distinct color
- Cursor changes to pointer on hover over interactive elements
- Hover states produce visible visual feedback

## Accessibility Approaches

### Use Semantic HTML

**Recommendation:** Every HTML element must be used according to its semantic purpose. Never repurpose elements for visual effect.

**Why:** Semantic HTML is the foundation of accessible architecture. A `<button>` communicates "this is interactive" to assistive technologies. A `<div class="button">` communicates nothing — it is a wall painted to look like a door. The assistive technology user cannot walk through a painted door.

This requirement is not about compliance. It is about architectural honesty. A column that looks like a column but cannot bear weight is a lie. A div that looks like a button but cannot be activated is equally deceptive.

**How:**
```html
<!-- Architecturally dishonest -->
<div class="button" onclick="submit()">Submit</div>

<!-- Architecturally honest -->
<button onclick="submit()">Submit</button>
```

### Add Labels to All Inputs

**Recommendation:** Every form input must have a visible, persistent label.

**Why:** A label is the architectural identification of a form field. Without it, the field is an unnamed opening in a wall — the user can see it, but they cannot know its purpose without guessing. Placeholder text is not a substitute for a label; placeholder text disappears when the user types, removing the identification exactly when the user may need it most.

Visible labels also serve users with cognitive disabilities, users with memory impairments, and users operating under high cognitive load. They are not optional enhancements — they are structural necessities.

**How:**
```html
<label for="email">Email address</label>
<input id="email" type="email">
```

### Show Focus Indicators

**Recommendation:** Never remove or dim focus indicators on interactive elements.

**Why:** Focus indicators are the keyboard user's equivalent of a hover state. For users who cannot use a mouse, the focus indicator is the only visual confirmation that they have navigated to the correct element. Removing focus indicators is equivalent to removing all navigational signage from a building — the exits still exist, but they become invisible.

This is not a matter of taste. It is a matter of fundamental architectural accessibility.

**How:**
```css
:focus { outline: 2px solid var(--color-focus); }
:focus:not(:focus-visible) { outline: none; }
```

The second rule ensures that mouse users do not see focus outlines, while keyboard users always do.

## Component Approaches

### One Component, One Purpose

**Recommendation:** Each component must perform exactly one function and perform it with maximum clarity.

**Why:** Multi-purpose components are the architectural equivalent of a room that serves as bedroom, kitchen, and bathroom simultaneously. Each function conflicts with the others, and none can be executed optimally. Single-purpose components allow each function to be designed, tested, and optimized independently.

When a component tries to do too much, its interaction model becomes ambiguous. The user cannot predict how it will behave because its behavior varies by context. Predictability — the core of absolute control — requires single-purpose components.

**How:**
- Button: triggers an action, nothing else
- Input: captures data, nothing else
- Card: groups related content, nothing else
- Modal: focuses attention on a single task, nothing else

### Use Component Variants

**Recommendation:** Use variants to communicate relative importance and context, not as decoration.

**Why:** Variants are the hierarchical differentiation of components. A primary button communicates "this is the most important action." A secondary button communicates "this is a supporting action." A ghost button communicates "this is an inline, low-priority action."

Variants without hierarchical meaning are decoration. Decoration introduces noise. Noise undermines the spatial system.

**How:**
- Primary button: the dominant call to action
- Secondary button: alternative or supporting actions
- Ghost button: inline, low-emphasis actions
- Each variant must be visually distinct in weight, not just color

### Compose Components

**Recommendation:** Build complex interfaces from simple, composable components.

**Why:** Composition is the architectural principle of modularity. A cathedral is not carved from a single block of stone — it is assembled from arches, columns, vaults, and walls. Each module is simple. Their combination produces complexity.

Composable components are maintainable because they can be modified independently. They are predictable because each module behaves consistently regardless of context. They are accessible because each module can be tested for accessibility in isolation.

**How:**
- Card = Container + Header + Content + Actions
- Form = Input + Label + Helper + Error
- Modal = Backdrop + Container + Header + Content + Footer

## Performance Approaches

### Optimize Images

**Recommendation:** Use the smallest, most appropriate image format for each context.

**Why:** An image that takes 5 seconds to load is a wall that takes 5 seconds to become solid. The user stands in front of an incomplete structure, unable to proceed. Performance is not a technical concern — it is an architectural one. The user experiences the interface as a physical space, and slow-loading images make that space feel unstable.

**How:**
- Use WebP for photographic content (smaller file size, equivalent quality)
- Use SVG for icons and vector graphics (infinitely scalable, minimal file size)
- Lazy load images below the viewport fold (they do not yet exist in the user's spatial awareness)
- Provide multiple sizes for responsive contexts (the image adapts to its container, not the reverse)

### Minimize JavaScript

**Recommendation:** Load only the JavaScript that the current view requires.

**Why:** JavaScript is the electrical wiring of architecture. Loading unnecessary JavaScript is running wiring to rooms that are not being used — it adds weight, complexity, and potential failure points without providing value. A bundle that contains code for every possible view is a building wired for every possible configuration, most of which will never exist.

**How:**
- Code split by route (load only the current page's logic)
- Lazy load non-critical code (defer secondary functionality)
- Use tree shaking (eliminate unused code from the bundle)
- Avoid unnecessary dependencies (each dependency is a load-bearing wall — remove it carefully)

### Use CSS Over JavaScript for Visual Effects

**Recommendation:** All animations, transitions, and visual effects must be implemented in CSS unless JavaScript is demonstrably required.

**Why:** CSS animations are rendered by the browser's compositor thread, which is separate from the main thread. JavaScript animations compete with application logic for main thread time. When a JavaScript animation runs during a complex UI update, the animation stutters, the interface feels physically broken.

The architectural parallel is structural. CSS is the building material — it exists natively within the rendering system. JavaScript is the construction equipment — powerful but resource-intensive. Use the material first; use the equipment only when the material cannot achieve the desired result.

**How:**
```css
/* Architecturally sound */
.button { transition: transform 100ms ease-out; }

/* Architecturally unsound */
.button { /* JavaScript-driven animation */ }
```

## See Also

- [Decision Making](decision-making.md) — How to choose between competing approaches
- [Prohibited Patterns](../anti-patterns/prohibited-patterns.md) — What to avoid and why
- [Common Mistakes](../anti-patterns/common-mistakes.md) — Frequent errors in applying these approaches
- [Component Philosophy](../components/component-philosophy.md) — Why components exist as architectural units
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access as architectural requirement
