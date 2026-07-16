# Page Template

## Why This Matters

Page templates provide a starting point for new pages, ensuring consistent structure and applying WHITE DIAMOND principles from the start.

## Basic Page Template

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

## Template Structure

### Header

```html
<header class="header">
  <nav class="nav" aria-label="Main navigation">
    <!-- Logo and navigation -->
  </nav>
</header>
```

**Rules:**
- Logo on left
- Navigation in center or right
- Clear visual hierarchy
- Accessible landmarks

### Main Content

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

**Rules:**
- One h1 per page
- Sections with h2 headings
- Clear content hierarchy
- Adequate spacing

### Footer

```html
<footer class="footer">
  <div class="footer-content">
    <!-- Footer content -->
  </div>
</footer>
```

**Rules:**
- Clear visual separation
- Relevant links
- Contact information
- Copyright notice

## CSS Template

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
    display: none; /* Mobile menu */
  }
  
  .main {
    padding: var(--spacing-6) var(--spacing-4);
  }
}
```

## Responsive Breakpoints

```css
/* Phone */
@media (max-width: 640px) {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

## Accessibility Checklist

- [ ] Semantic HTML elements used
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Landmarks identified (header, nav, main, footer)
- [ ] Navigation labeled (aria-label)
- [ ] Skip navigation link included
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader tested

## See Also

- [Component Template](component-template.md) — Component template
- [Basic Layout](../examples/basic-layout.md) — Layout examples
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Typography](../typography/type-system.md) — Text hierarchy
