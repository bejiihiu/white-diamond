# Screen Readers

## Why Screen Readers Are Spatial Translation

Screen readers do not merely read text aloud. They translate the entire visual architectural space into a sequential audio experience. Every element, every boundary, every layer of the WHITE DIAMOND hierarchy is converted from visual information into speech or braille. This translation must preserve the spatial relationships, structural hierarchy, and architectural intent of the interface.

Without proper screen reader support, the architectural space does not exist for blind and low-vision users. The buildings are invisible. The doors have no handles. The rooms have no walls. The hierarchy collapses into silence.

Screen reader accessibility is not optional. It is a structural requirement of the architectural space. An interface without screen reader support is a building with no wheelchair ramp, no elevator, and no signage—it excludes entire populations from its space.

## How Screen Readers Interpret WHITE DIAMOND Space

Screen readers perform a fundamental transformation: they convert parallel visual information into sequential audio information. The screen presents a two-dimensional architectural space where all elements exist simultaneously. A screen reader converts this into a one-dimensional audio stream where elements are experienced one at a time, in sequence.

This transformation requires careful architectural planning. The interface must be designed so that the sequential audio experience accurately represents the parallel visual experience. This is achieved through:

1. **Parsing HTML** — Reading the DOM structure, which is the architectural blueprint
2. **Announcing elements** — Speaking element names and roles, which are the architectural designations of each construction
3. **Navigating by landmark** — Jumping between page sections, which are the load-bearing zones of the architectural space
4. **Navigating by heading** — Jumping between headings, which are the structural skeleton of the document
5. **Navigating by element** — Jumping between buttons, links, inputs, which are the interactive mechanisms within objects
6. **Reading content** — Speaking text content, which is the information within the [inner surface](../spatial-hierarchy/layer-system.md) of each object
7. **Announcing state** — Speaking element states (expanded, disabled, selected), which are the current conditions of each architectural construction

The screen reader user experiences the interface as a guided audio tour through architectural space. Each announcement is a description of what the user has encountered at their current position in the building.

## Semantic HTML: The Structural Blueprint

Semantic HTML elements are the structural beams of the architectural space. They communicate the purpose and hierarchy of each construction to both sighted and non-sighted users. Without semantic HTML, the screen reader has no blueprint to follow—it encounters objects without understanding their purpose.

### Landmarks

Landmarks define the major regions of the architectural space. They are the load-bearing walls that divide the building into navigable zones:

| Element | Role | Spatial Meaning | Usage |
|---------|------|-----------------|-------|
| `<header>` | banner | The entrance and reception area | Page header with branding and primary navigation |
| `<nav>` | navigation | The corridor system | Main navigation that connects rooms |
| `<main>` | main | The central hall | Primary content area where the main architectural activity occurs |
| `<aside>` | complementary | The side room | Sidebar content that supplements the main hall |
| `<footer>` | contentinfo | The exit and information desk | Page footer with legal, contact, and supplementary information |
| `<form>` | form | The interactive workshop | Form content where users input data |
| `<section>` | region | The named room | A distinct section with a clear purpose |
| `<article>` | article | The self-contained exhibit | Self-contained content that could stand alone |

Landmark rules:
- **Unique** — Only one `<main>` per page. The central hall is singular—there can be only one primary space.
- **Labeled** — Multiple landmarks of the same type must be labeled. If there are two `<nav>` elements, each must have an `aria-label` distinguishing them (e.g., "Main navigation" and "Footer navigation").
- **Semantic** — Use native HTML elements over ARIA roles. Native elements have inherent architectural meaning; ARIA roles are translations.
- **Nested properly** — Landmarks nest logically. The corridor (`<nav>`) leads to the central hall (`<main>`), which contains the exhibits (`<article>`).

### Headings

Headings create the document outline—the structural skeleton of the architectural space. They are the beams and columns that hold up the building. Without a proper heading hierarchy, the structure collapses:

```html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
    <h3>Subsection</h3>
  <h2>Section</h2>
```

Heading rules:
- **Sequential** — Don't skip levels. Skipping a heading level is like removing a floor from a building—it creates a structural void that confuses the architecture.
- **Hierarchical** — One `<h1>`, multiple `<h2>`s, etc. The `<h1>` is the building's name. The `<h2>`s are the major floors. The `<h3>`s are the rooms on each floor.
- **Meaningful** — Describe content, not style. A heading must communicate the architectural purpose of the section it introduces.
- **One h1** — One `<h1>` per page. The building has one name, one primary identity.

### Lists

Lists announce group relationships. They are the columns and rows that organize content into structural patterns:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

List rules:
- **Semantic** — Use `<ul>`/`<ol>` for lists. These elements communicate that items are part of a group.
- **Not for layout** — Don't use lists for visual layout. A list that exists only for visual arrangement is a structural lie—it communicates a relationship that does not exist.
- **Nested properly** — Lists within lists. This creates hierarchical structure within the architectural space.
- **Descriptive** — List items must make sense as a group. If the items are not related, they are not a list.

### Tables

Tables announce data relationships. They are the grid systems that structure information within the architectural space:

```html
<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>
```

Table rules:
- **Caption** — Every table has a caption. The caption is the table's name—its architectural designation.
- **Headers** — Use `<th>` with `scope`. Headers define the grid structure—columns and rows.
- **Semantic** — Don't use tables for layout. A table used for layout is a grid system with no data—it communicates structure that does not exist.
- **Simple** — Avoid complex table structures. Complex tables are labyrinthine architectures that confuse navigation.

## ARIA Attributes: The Audio Translation Layer

ARIA attributes translate visual properties into audio properties. They are the signage system of the architectural space—the labels, signs, and indicators that help blind users understand the building.

### Labels

Labels identify elements. They are the architectural names—the designations that distinguish one construction from another:

```html
<button aria-label="Close">X</button>
<label for="email">Email</label>
<input id="email" aria-describedby="email-help">
<span id="email-help">We'll never share your email</span>
```

Label rules:
- **Every interactive element** — All buttons, inputs, links must have accessible names. An unnamed element is an architectural construction without a designation—a building with no address.
- **Visible labels preferred** — `aria-label` is a fallback. If the label is visible on screen, the screen reader should announce the visible text. `aria-label` is for when the visible text is insufficient (e.g., an icon button labeled "X" should be announced as "Close").
- **Descriptive** — Labels must describe purpose. "Button" is not a label. "Submit form" is a label. The label must communicate the architectural function of the element.
- **Consistent** — Same element, same label throughout the interface. Consistency creates predictability—the foundation of [absolute control](../philosophy/absolute-control.md).

### Roles

Roles define element purpose. They communicate the architectural type of each construction:

```html
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
</div>
<div role="tabpanel">Tab 1 content</div>
```

Role rules:
- **Native preferred** — Use HTML elements over ARIA roles. A `<button>` element has inherent button semantics; a `<div role="button">` requires explicit role assignment. Native elements are the original architectural materials; ARIA roles are imported substitutes.
- **Required properties** — Roles have required ARIA attributes. A `tab` role requires `aria-selected`. A `tablist` role requires child `tab` elements. These requirements ensure the architectural structure is complete.
- **Correct usage** — Don't change element role. A `<button>` is a button. Don't make it a link. Don't make it a tab. The architectural purpose of an element is fixed at construction time.
- **Document structure** — Use roles for structure. Roles communicate the architectural blueprint to assistive technology.

### States

States communicate condition. They are the real-time status reports of each architectural construction—whether it is open or closed, expanded or collapsed, selected or unselected:

```html
<button aria-expanded="false">Menu</button>
<input aria-invalid="true" aria-errormessage="error">
<div aria-hidden="true">Decorative content</div>
```

State rules:
- **Dynamic** — States update as condition changes. A menu that is closed becomes expanded when opened. A form field that is valid becomes invalid when validation fails. States are living properties.
- **Announced** — Screen readers announce state changes. When a menu expands, the screen reader announces "expanded." When a form field becomes invalid, the screen reader announces "invalid." The user is informed of architectural changes through audio.
- **Consistent** — Same state, same attribute. `aria-expanded` is always used for expansion. `aria-selected` is always used for selection. Consistent states create predictable audio feedback.
- **Required** — Required states for certain roles. A `tab` role requires `aria-selected`. A `button` role with disclosure behavior requires `aria-expanded`. These requirements ensure the architectural structure is complete.

### Properties

Properties provide additional information. They are the supplementary specifications of each architectural construction:

```html
<input aria-required="true">
<nav aria-label="Main navigation">
<div aria-live="polite">New message</div>
```

Property rules:
- **Appropriate** — Use the correct property for context. `aria-required` for mandatory fields. `aria-label` for naming elements. `aria-live` for dynamic content. Each property serves a specific architectural purpose.
- **Consistent** — Same property, same meaning throughout. `aria-required="true"` always means mandatory. Predictability is the foundation of [absolute control](../philosophy/absolute-control.md).
- **Required** — Required properties for certain roles. A `navigation` landmark with multiple navigation regions requires `aria-label` to distinguish them.
- **Not redundant** — Don't duplicate native semantics. A `<button>` already communicates button semantics; don't add `role="button"`. A `<label>` already associates with an input; don't add `aria-label`.

## Live Regions: Announcing Architectural Change

Live regions announce dynamic content—changes to the architectural space that occur without user interaction. They are the sound of construction: objects appearing, disappearing, or transforming in space.

```html
<div aria-live="polite" aria-atomic="true">
  Status message
</div>
```

### Live Region Types

| Type | Spatial Meaning | Usage |
|------|-----------------|-------|
| `polite` | A distant architectural change—a new building appearing on the horizon. The user hears about it after finishing their current task. | Status messages, non-urgent updates |
| `assertive` | An immediate architectural event—a wall collapsing in the current room. The user hears about it immediately, interrupting current speech. | Errors, critical alerts |
| `off` | No announcement. The architectural change is silent. | Default. Use when the change is purely visual and has no spatial significance. |

### Live Region Rules

- **Use sparingly** — Too many live regions are overwhelming. Constant announcements are like a building that never stops under construction—it becomes impossible to focus on any single space.
- **Polite preferred** — Assertive interrupts the user. Use assertive only for critical information that the user must know immediately. Polite is the default because it respects the user's current spatial focus.
- **Atomic** — Announce entire region or just changes. `aria-atomic="true"` announces the entire content of the live region. `aria-atomic="false"` (default) announces only the changed portion. Choose based on whether the full context is necessary.
- **Relevant** — Announce all changes or just additions. `aria-relevant="additions"` announces only new content. `aria-relevant="removals"` announces only removed content. `aria-relevant="additions removals"` announces both. Choose based on which changes are spatially significant.

## Screen Reader Navigation Patterns

Screen readers provide multiple navigation modes that correspond to different ways of traversing architectural space:

### Landmark Navigation

Landmark navigation jumps between major architectural zones—like taking an elevator between floors. Users can list all landmarks and jump directly to any one. This is the fastest way to navigate large architectural spaces.

### Heading Navigation

Heading navigation jumps between structural sections—like walking through doorways between rooms. Users can list all headings and jump directly to any section. This provides a detailed map of the architectural space.

### Element Navigation

Element navigation jumps between interactive elements—like moving between doors within a room. Users can list all buttons, links, inputs, and other interactive elements. This allows direct access to the interactive mechanisms within objects.

### Reading Order

Reading order reads content sequentially—like walking through the building room by room, reading every sign and label. This provides a complete experience of the architectural space, but it is slow for large interfaces.

## Screen Reader Testing

### Testing Checklist

- [ ] All images have alt text that describes their architectural purpose
- [ ] All form fields have labels that describe their content purpose
- [ ] All buttons have accessible names that describe their function
- [ ] All links have descriptive text that describes their destination
- [ ] Heading hierarchy is correct and sequential
- [ ] Landmarks are correct and unique
- [ ] Tables have headers and captions
- [ ] Dynamic content uses live regions with appropriate politeness levels
- [ ] Focus management works correctly (focus moves to new content, focus is restored on close)
- [ ] Skip navigation exists and works correctly
- [ ] All ARIA states update dynamically
- [ ] All ARIA properties are appropriate and not redundant

### Testing Tools

- **NVDA** — Free Windows screen reader. Test with NVDA to verify audio announcements match architectural intent.
- **VoiceOver** — Built into macOS/iOS. Test with VoiceOver to verify cross-platform audio consistency.
- **JAWS** — Commercial Windows screen reader. Test with JAWS to verify compatibility with the most widely-used commercial screen reader.
- **TalkBack** — Built into Android. Test with TalkBack to verify mobile screen reader support.
- **axe** — Automated accessibility testing. Use axe to catch structural violations before manual testing.

### Testing Process

1. **Navigate by landmarks** — Can you find major architectural zones? Can you jump directly to the main content?
2. **Navigate by headings** — Can you find sections within each zone? Can you understand the document structure?
3. **Navigate by elements** — Can you find interactive mechanisms? Can you reach every button, link, and input?
4. **Read content** — Is content understandable when read sequentially? Does the audio experience match the visual experience?
5. **Interact with elements** — Can you use everything? Can you activate every mechanism?
6. **Check dynamic content** — Are updates announced? Do live regions function correctly?
7. **Check state changes** — Are expanded/collapsed, selected/unselected, valid/invalid states announced?

## Common Mistakes

### Missing Labels

```html
<!-- Bad: Unnamed elements are invisible to screen readers -->
<button>X</button>
<input type="email">

<!-- Good: Named elements communicate their architectural purpose -->
<button aria-label="Close">×</button>
<label for="email">Email</label>
<input id="email" type="email">
```

### Incorrect Heading Hierarchy

```html
<!-- Bad: Skipped heading level creates structural void -->
<h1>Title</h1>
<h3>Section</h3>

<!-- Good: Sequential heading levels maintain structural integrity -->
<h1>Title</h1>
<h2>Section</h2>
```

### Missing Alt Text

```html
<!-- Bad: Image without alt text has no architectural presence -->
<img src="chart.png">

<!-- Good: Alt text gives the image mass and purpose -->
<img src="chart.png" alt="Sales increased 20% from January to March">
```

### Inaccessible Dynamic Content

```html
<!-- Bad: Dynamic content without live region is silent -->
<div id="status">Updated</div>

<!-- Good: Live region announces the architectural change -->
<div id="status" aria-live="polite">Updated</div>
```

### Missing Landmark Labels

```html
<!-- Bad: Multiple navigation landmarks without labels -->
<nav>...</nav>
<nav>...</nav>

<!-- Good: Labeled landmarks distinguish architectural zones -->
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>
```

## See Also

- [Accessibility Guidelines](./accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](./keyboard-navigation.md) — Non-pointer interaction through architectural space
- [Component Philosophy](../components/component-philosophy.md) — Why components exist as architectural constructions
- [Button Specification](../components/button-specification.md) — Accessible button architecture
- [Input Specification](../components/input-specification.md) — Accessible input architecture
- [Navigation Specification](../components/navigation-specification.md) — Accessible navigation architecture
- [Layer System](../spatial-hierarchy/layer-system.md) — The three-layer hierarchy that screen readers must communicate
- [Object Existence](../space-physics/object-existence.md) — How objects exist in WHITE DIAMOND space
- [Absolute Control](../philosophy/absolute-control.md) — How predictability creates user control
