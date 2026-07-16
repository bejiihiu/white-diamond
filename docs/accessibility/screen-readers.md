# Screen Readers

## Why This Matters

Screen readers convert visual interfaces to speech or braille for blind and low-vision users. Without proper screen reader support, interfaces are completely unusable for these users. Screen reader accessibility is not optional—it is required for universal access.

## How Screen Readers Work

Screen readers:
1. **Parse HTML** — Read the DOM structure
2. **Announce elements** — Speak element names and roles
3. **Navigate by landmark** — Jump between page sections
4. **Navigate by heading** — Jump between headings
5. **Navigate by element** — Jump between buttons, links, inputs
6. **Read content** — Speak text content
7. **Announce state** — Speak element states (expanded, disabled)

## Semantic HTML

### Landmarks

Landmarks help screen reader users navigate:

| Element | Role | Usage |
|---------|------|-------|
| `<header>` | banner | Page header |
| `<nav>` | navigation | Main navigation |
| `<main>` | main | Main content |
| `<aside>` | complementary | Sidebar content |
| `<footer>` | contentinfo | Page footer |
| `<form>` | form | Form content |
| `<section>` | region | Named section |
| `<article>` | article | Self-contained content |

Landmark rules:
- **Unique** — Only one main per page
- **Labeled** — Multiple landmarks of same type are labeled
- **Semantic** — Use native HTML elements
- **Nested properly** — Landmarks nest logically

### Headings

Headings create document outline:

```html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
    <h3>Subsection</h3>
  <h2>Section</h2>
```

Heading rules:
- **Sequential** — Don't skip levels
- **Hierarchical** — One h1, multiple h2s, etc.
- **Meaningful** — Describe content, not style
- **One h1** — One h1 per page (usually)

### Lists

Lists announce structure:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

List rules:
- **Semantic** — Use ul/ol for lists
- **Not for layout** — Don't use lists for visual layout
- **Nested properly** — Lists within lists
- **Descriptive** — List items make sense as a group

### Tables

Tables announce data relationships:

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
- **Caption** — Every table has a caption
- **Headers** — Use th with scope
- **Semantic** — Don't use tables for layout
- **Simple** — Avoid complex table structures

## ARIA Attributes

### Labels

Labels identify elements:

```html
<button aria-label="Close">X</button>
<label for="email">Email</label>
<input id="email" aria-describedby="email-help">
<span id="email-help">We'll never share your email</span>
```

Label rules:
- **Every interactive element** — All buttons, inputs, links
- **Visible labels preferred** — aria-label is fallback
- **Descriptive** — Labels describe purpose
- **Consistent** — Same element, same label

### Roles

Roles define element purpose:

```html
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
</div>
<div role="tabpanel">Tab 1 content</div>
```

Role rules:
- **Native preferred** — Use HTML elements over ARIA roles
- **Required properties** — Roles have required ARIA attributes
- **Correct usage** — Don't change element role
- **Document structure** — Use roles for structure

### States

States communicate condition:

```html
<button aria-expanded="false">Menu</button>
<input aria-invalid="true" aria-errormessage="error">
<div aria-hidden="true">Decorative content</div>
```

State rules:
- **Dynamic** — States update as condition changes
- **Announced** — Screen readers announce state changes
- **Consistent** — Same state, same attribute
- **Required** — Required states for certain roles

### Properties

Properties provide additional information:

```html
<input aria-required="true">
<nav aria-label="Main navigation">
<div aria-live="polite">New message</div>
```

Property rules:
- **Appropriate** — Use correct property for context
- **Consistent** — Same property, same meaning
- **Required** — Required properties for certain roles
- **Not redundant** — Don't duplicate native semantics

## Live Regions

Live regions announce dynamic content:

```html
<div aria-live="polite" aria-atomic="true">
  Status message
</div>
```

### Live Region Types

| Type | Usage |
|------|-------|
| `polite` | Announces after current speech |
| `assertive` | Announces immediately |
| `off` | Does not announce (default) |

### Live Region Rules

- **Use sparingly** — Too many live regions are annoying
- **Polite preferred** — Assertive interrupts user
- **Atomic** — Announce entire region or just changes
- **Relevant** — Announce all changes or just additions

## Screen Reader Testing

### Testing Checklist

- [ ] All images have alt text
- [ ] All form fields have labels
- [ ] All buttons have accessible names
- [ ] All links have descriptive text
- [ ] Heading hierarchy is correct
- [ ] Landmarks are correct
- [ ] Tables have headers and captions
- [ ] Dynamic content uses live regions
- [ ] Focus management works correctly
- [ ] Skip navigation exists

### Testing Tools

- **NVDA** — Free Windows screen reader
- **VoiceOver** — Built into macOS/iOS
- **JAWS** — Commercial Windows screen reader
- **TalkBack** — Built into Android
- **axe** — Automated accessibility testing

### Testing Process

1. **Navigate by landmarks** — Can you find sections?
2. **Navigate by headings** — Can you find content?
3. **Navigate by elements** — Can you find interactions?
4. **Read content** — Is content understandable?
5. **Interact with elements** — Can you use everything?
6. **Check dynamic content** — Are updates announced?

## Common Mistakes

### Missing Labels

```html
<!-- Bad -->
<button>X</button>
<input type="email">

<!-- Good -->
<button aria-label="Close">×</button>
<label for="email">Email</label>
<input id="email" type="email">
```

### Incorrect Heading Hierarchy

```html
<!-- Bad -->
<h1>Title</h1>
<h3>Section</h3> <!-- Skipped h2 -->

<!-- Good -->
<h1>Title</h1>
<h2>Section</h2>
```

### Missing Alt Text

```html
<!-- Bad -->
<img src="chart.png">

<!-- Good -->
<img src="chart.png" alt="Sales increased 20% from January to March">
```

### Inaccessible Dynamic Content

```html
<!-- Bad -->
<div id="status">Updated</div>

<!-- Good -->
<div id="status" aria-live="polite">Updated</div>
```

## See Also

- [Accessibility Guidelines](accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](keyboard-navigation.md) — Non-pointer interaction
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Button Specification](../components/button-specification.md) — Accessible buttons
- [Input Specification](../components/input-specification.md) — Accessible inputs
