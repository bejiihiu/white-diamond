# Spatial Layout

## Why This Matters

Layout is not just arranging elements—it is creating spatial relationships that communicate meaning. Spatial layout ensures that the physical arrangement of elements conveys hierarchy, grouping, and flow.

## The Spatial Model

Interfaces exist in spatial dimensions:

### Horizontal Dimension

Left-to-right (or right-to-left) arrangement:
- **Primary flow** — Reading direction (LTR or RTL)
- **Secondary flow** — Navigation direction
- **Hierarchy** — Left = primary, Right = secondary (in LTR)
- **Grouping** — Horizontal proximity = relationship

### Vertical Dimension

Top-to-bottom arrangement:
- **Primary flow** — Scrolling direction
- **Secondary flow** — Hierarchy direction
- **Hierarchy** — Top = primary, Bottom = secondary
- **Grouping** — Vertical proximity = relationship

### Depth Dimension

Front-to-back arrangement:
- **Z-index** — Layering order
- **Elevation** — Visual height
- **Focus** — Foreground vs. background
- **Priority** — Higher layers = higher priority

## Layout Rules

### Rule 1: Layout Communicates Hierarchy

The most important content should be:
- **Top** — Above the fold
- **Left** — In the primary reading direction
- **Center** — In the optical center
- **Prominent** — With more space and contrast

Layout hierarchy must match information hierarchy.

### Rule 2: Layout Creates Flow

Users should move through the layout naturally:
- **F-pattern** — For text-heavy content
- **Z-pattern** — For visual content
- **Guttenberg diagram** — For balanced content
- **Card flow** — For card-based content

Layout flow must support reading patterns.

### Rule 3: Layout Groups Related Content

Related content should be spatially grouped:
- **Proximity** — Close together = related
- **Containment** — Inside same container = related
- **Alignment** — Aligned to same edge = related
- **Similarity** — Similar appearance = related

Layout grouping must communicate relationships.

### Rule 4: Layout Separates Unrelated Content

Unrelated content should be spatially separated:
- **Whitespace** — More space = less related
- **Boundaries** — Different containers = different groups
- **Dividers** — Visual separators = different sections
- **Color** — Different backgrounds = different areas

Layout separation must prevent confusion.

### Rule 5: Layout Adapts to Context

Layout must work across contexts:
- **Screen size** — Responsive to different devices
- **Content volume** — Adapts to more or less content
- **User preference** — Respects user settings
- **Accessibility** — Works with assistive technology

Rigid layouts break in different contexts.

## Layout Patterns

### Single Column

One column of content:
```
┌─────────────────────────┐
│                         │
│      Content            │
│      (Full width)       │
│                         │
└─────────────────────────┘
```

Use for: Articles, forms, mobile layouts

### Two Column

Two columns of content:
```
┌───────────┬───────────┐
│           │           │
│  Primary  │ Secondary │
│  Content  │ Content   │
│           │           │
└───────────┴───────────┘
```

Use for: Documentation, dashboards, settings

### Three Column

Three columns of content:
```
┌─────┬───────────┬─────┐
│     │           │     │
│Nav  │  Primary  │Side │
│     │  Content  │bar  │
│     │           │     │
└─────┴───────────┴─────┘
```

Use for: Complex dashboards, e-commerce

### Sidebar

Main content with sidebar:
```
┌─────┬─────────────────┐
│     │                 │
│Side │  Main Content   │
│bar  │                 │
│     │                 │
└─────┴─────────────────┘
```

Use for: Navigation, settings, documentation

### Grid

Multiple equal-weight items:
```
┌─────┬─────┬─────┐
│     │     │     │
│Item │Item │Item │
│  1  │  2  │  3  │
│     │     │     │
├─────┼─────┼─────┤
│     │     │     │
│Item │Item │Item │
│  4  │  5  │  6  │
│     │     │     │
└─────┴─────┴─────┘
```

Use for: Listings, portfolios, galleries

## Responsive Layout

### Breakpoints

Layouts must adapt at breakpoints:
- **Mobile** (< 640px) — Single column, minimal margins
- **Tablet** (640-1024px) — Two columns, moderate margins
- **Desktop** (1024-1440px) — Three columns, standard margins
- **Large desktop** (> 1440px) — Three+ columns, generous margins

### Responsive Rules

Layout responsiveness rules:
- **Progressive enhancement** — Start simple, add complexity
- **Content priority** — Most important content first
- **Touch adaptation** — Larger targets on touch devices
- **Performance** — Lighter layouts on smaller devices

## See Also

- [Composition Rules](composition-rules.md) — Rules for arranging elements
- [Grid System](grid-system.md) — Grid implementation details
- [Space Geometry](../geometry/space-geometry.md) — Fundamentals of digital space
- [Spatial Hierarchy](../spatial-hierarchy/object-structure.md) — How objects are structured
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
