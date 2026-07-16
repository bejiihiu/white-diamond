# Page Template

## Why This Matters

A page template is not a starting point for visual design. It is a starting point for **architectural construction**. Every page in WHITE DIAMOND is a window into infinite space, and the template establishes the physical structure of that window. The template defines the boundaries, the hierarchy, and the spatial relationships that all content will inhabit.

Without a template, every page would be built from scratch, leading to inconsistency, ambiguity, and philosophical drift. The template ensures that every page begins with the same architectural foundation, regardless of its content or purpose.

## The Architectural Model

A page in WHITE DIAMOND is composed of three structural zones, each serving a specific architectural function:

1. **Header** — The navigational boundary. Defines the entry point to the space. Contains the logo (identity marker) and navigation (spatial orientation).
2. **Main** — The content vessel. The primary area where architectural objects reside. This is where the three-layer hierarchy (Physical Boundary → Inner Surface → Content) is most visible.
3. **Footer** — The exit boundary. Provides closure to the space. Contains secondary information that supports the primary content.

These three zones map directly to the spatial model: the header establishes where you are, the main defines what you see, and the footer provides context for where you've been.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav" aria-label="Main navigation">
      <a href="/" class="logo">Logo</a>
      <ul class="nav-links">
        <li><a href="/link1">Link 1</a></li>
        <li><a href="/link2">Link 2</a></li>
        <li><a href="/link3">Link 3</a></li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <h1>Page Title</h1>
    
    <section class="section">
      <h2>Section Title</h2>
      <p>Content here</p>
    </section>
  </main>

  <footer class="footer">
    <p>Footer content</p>
  </footer>
</body>
</html>
```

### Why This Structure

The HTML structure follows a strict semantic hierarchy because the document structure mirrors the spatial hierarchy. The `<header>` element is not just a container — it is the navigational boundary that defines the entry to the page. The `<main>` element is not just a wrapper — it is the content vessel where the architectural objects reside. The `<footer>` element is not just a closing element — it is the exit boundary that provides closure.

Semantic elements are mandatory because they communicate the spatial structure to assistive technologies, search engines, and future developers. A `<div>` used in place of a `<header>` is an architectural violation because it removes the semantic boundary that defines the element's role in the spatial hierarchy.

## Header Specification

The header is the navigational boundary of the page. It is the first thing the user encounters and the last thing they leave. It must be constructed with precision.

```html
<header class="header">
  <nav class="nav" aria-label="Main navigation">
    <!-- Logo: Identity marker -->
    <!-- Navigation: Spatial orientation -->
  </nav>
</header>
```

### Rules

1. **Logo on the left, navigation on the right.** This follows the natural reading order (left to right) and establishes the logo as the primary identity marker. The logo is the anchor point of the page — it tells the user where they are.

2. **Sticky positioning.** The header must remain visible at all times. It is the user's constant reference point in the infinite space. Losing the header means losing orientation.

3. **Clear visual separation.** The header must be visually distinct from the main content. This is achieved through a bottom border, not through background color alone. A border is mandatory because it defines the boundary between the navigational zone and the content zone.

4. **Accessible landmarks.** The `<nav>` element with `aria-label` ensures that assistive technologies can identify the navigation region. This is not optional — it is a requirement for universal access.

### Anti-Patterns

- **Hidden header on scroll.** Hiding the header removes the user's orientation marker. This violates the principle of absolute control.
- **Logo in the center.** Centering the logo creates ambiguity about the page's identity and navigation. The left position is authoritative.
- **No border.** A header without a bottom border blends into the content below, violating the boundary principle.

## Main Content Specification

The main content area is the primary vessel for architectural objects. It is where the three-layer hierarchy is expressed most clearly.

```html
<main class="main">
  <h1>Page Title</h1>
  
  <section class="section">
    <h2>Section Title</h2>
    <div class="content">
      <!-- Content here -->
    </div>
  </section>
</main>
```

### Rules

1. **One `<h1>` per page.** The `<h1>` defines the page's primary identity. Multiple `<h1>` elements create ambiguity about the page's purpose, violating the hierarchy principle.

2. **Sections with `<h2>` headings.** Each section must have a clear heading that defines its content. Sections without headings are undefined spaces — they have no architectural structure.

3. **Adequate spacing between sections.** Sections must be separated by sufficient whitespace to establish clear boundaries. Without spacing, sections merge into an undifferentiated mass, violating the object principle.

4. **Content hierarchy.** Headings must follow a strict sequence: `<h1>` → `<h2>` → `<h3>`. Skipping levels (e.g., `<h1>` → `<h3>`) breaks the hierarchy and confuses the spatial structure.

### Why One `<h1>` Matters

The `<h1>` is the architectural keystone of the page. It defines the page's identity in the same way that a building's entrance defines its identity. A building with multiple entrances has no clear entry point. A page with multiple `<h1>` elements has no clear identity.

### Why Spacing Matters

Spacing is not decoration. It is the negative space that defines where one object ends and another begins. Without sufficient spacing, objects merge, their boundaries blur, and the architectural structure collapses.

## Footer Specification

The footer is the exit boundary. It provides closure to the page and contains secondary information that supports the primary content.

```html
<footer class="footer">
  <div class="footer-content">
    <!-- Footer content -->
  </div>
</footer>
```

### Rules

1. **Clear visual separation.** The footer must be visually distinct from the main content. This is achieved through a top border, mirroring the header's bottom border.

2. **Relevant links only.** The footer should contain links that support the page's purpose. Unrelated links create navigational confusion.

3. **Contact information.** If the page represents an organization, contact information should be in the footer.

4. **Copyright notice.** A copyright notice establishes legal boundaries, mirroring how physical boundaries define the extent of objects.

## CSS Architecture

The CSS follows the same architectural principles as the HTML. Every style rule serves a spatial purpose.

```css
/* Reset and base */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Typography */
body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-background);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }

/* Layout */
.header {
  position: sticky;
  top: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--border-color-subtle);
  padding: var(--spacing-4) var(--spacing-6);
  z-index: 100;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-6);
}

.section {
  margin-bottom: var(--spacing-8);
}

.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--border-color-subtle);
  padding: var(--spacing-8) var(--spacing-6);
  margin-top: var(--spacing-16);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .main {
    padding: var(--spacing-6) var(--spacing-4);
  }
}
```

### Why `box-sizing: border-box` Is Mandatory

Every element in WHITE DIAMOND has a defined boundary. `border-box` ensures that padding and borders are included within the element's declared dimensions. Without `border-box`, borders and padding extend beyond the declared dimensions, violating the principle that objects have clear, predictable boundaries.

### Why Borders Are Mandatory on Header and Footer

The header's `border-bottom` and the footer's `border-top` are not decorative. They are existential markers that define where one spatial zone ends and another begins. Without these borders, the header and footer blend into the main content, destroying the three-zone structure.

### Why `max-width: 1200px` Is Used

The content vessel has a maximum width because infinite space must be bounded by a viewport. The 1200px maximum ensures that content remains readable and architecturally structured on large screens while expanding to fill available space on smaller screens.

### Why Transitions Are Minimal

WHITE DIAMOND prohibits decorative animation. Transitions should only be used to communicate state changes (e.g., hover states, focus states). The transition durations should be short (100-200ms) because they serve a functional purpose, not an aesthetic one.

## Responsive Breakpoints

```css
/* Phone: 0-640px */
@media (max-width: 640px) {
  /* Mobile styles */
}

/* Tablet: 641-1024px */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Desktop: 1025px+ */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

### Why Three Breakpoints

Three breakpoints correspond to three fundamental device categories: phones, tablets, and desktops. Each category has different spatial constraints:

- **Phones** have limited horizontal space, requiring simplified layouts and hidden navigation.
- **Tablets** have moderate space, allowing more complex layouts but still requiring adaptation.
- **Desktops** have ample space, enabling full architectural expression.

More breakpoints would create unnecessary complexity. Fewer breakpoints would fail to accommodate the fundamental spatial differences between device categories.

## Accessibility Checklist

- [ ] Semantic HTML elements used (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Heading hierarchy correct (`<h1>` → `<h2>` → `<h3>`)
- [ ] Landmarks identified (`header`, `nav`, `main`, `footer`)
- [ ] Navigation labeled (`aria-label`)
- [ ] Skip navigation link included
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader tested

### Why Accessibility Is Non-Negotiable

WHITE DIAMOND defines universal principles of digital space. "Universal" means accessible to all users, regardless of ability. An inaccessible interface violates the architectural vision because it excludes users from the space. Accessibility is not a feature — it is a fundamental requirement of the spatial model.

## Example: Completed Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Catalog — Example Store</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav class="nav" aria-label="Main navigation">
      <a href="/" class="logo">Example Store</a>
      <ul class="nav-links">
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <h1>Product Catalog</h1>
    
    <section class="section">
      <h2>Featured Products</h2>
      <div class="content">
        <!-- Product cards go here -->
      </div>
    </section>

    <section class="section">
      <h2>All Products</h2>
      <div class="content">
        <!-- Product listing goes here -->
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; 2026 Example Store. All rights reserved.</p>
  </footer>
</body>
</html>
```

This example demonstrates the template in a real context. Notice how the structure is identical to the template — only the content changes. This consistency is the purpose of the template.

## See Also

- [Component Template](component-template.md) — How to construct individual components
- [Basic Layout](../examples/basic-layout.md) — Layout examples in context
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements within the page
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access requirements
- [Typography](../typography/type-system.md) — Text hierarchy and spatial relationships
