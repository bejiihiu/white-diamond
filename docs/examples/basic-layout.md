# Basic Layout Examples

## Why This Matters

Examples demonstrate how specifications apply in practice. These examples show common layout patterns implemented according to WHITE DIAMOND principles.

## Single Column Layout

The simplest layout—content flows vertically:

```
┌─────────────────────────┐
│ Header                  │
├─────────────────────────┤
│                         │
│ Content                 │
│ (Full width, max-width) │
│                         │
├─────────────────────────┤
│ Footer                  │
└─────────────────────────┘
```

**When to use:**
- Articles and blog posts
- Simple forms
- Mobile layouts
- Focused tasks

**Key principles applied:**
- Content centered for readability
- Optimal line length (50-75 characters)
- Clear hierarchy (header → content → footer)
- Adequate whitespace

## Two Column Layout

Content with supporting sidebar:

```
┌─────────────────────────────────┐
│ Header                          │
├───────────┬─────────────────────┤
│           │                     │
│ Sidebar   │ Main Content        │
│           │                     │
│ - Nav     │                     │
│ - Links   │                     │
│           │                     │
└───────────┴─────────────────────┘
```

**When to use:**
- Documentation
- Dashboards
- Settings pages
- E-commerce product pages

**Key principles applied:**
- Sidebar provides navigation/context
- Main content gets most space
- Clear visual separation
- Responsive: stacks on mobile

## Three Column Layout

Complex interfaces with multiple regions:

```
┌─────┬─────────────────────┬─────┐
│     │                     │     │
│Nav  │ Main Content        │Side │
│     │                     │bar  │
│     │                     │     │
└─────┴─────────────────────┴─────┘
```

**When to use:**
- Complex dashboards
- Email clients
- Social media feeds
- IDE-like interfaces

**Key principles applied:**
- Navigation on left (primary)
- Content in center (focus)
- Context on right (secondary)
- Clear hierarchy between columns

## Card Grid Layout

Multiple equal-weight items:

```
┌─────┬─────┬─────┐
│     │     │     │
│Card │Card │Card │
│  1  │  2  │  3  │
│     │     │     │
├─────┼─────┼─────┤
│     │     │     │
│Card │Card │Card │
│  4  │  5  │  6  │
│     │     │     │
└─────┴─────┴─────┘
```

**When to use:**
- Product listings
- Portfolio galleries
- Feature showcases
- Dashboard widgets

**Key principles applied:**
- Equal visual weight
- Consistent card structure
- Clear grid alignment
- Adequate gutters

## Hero Layout

Prominent feature with supporting content:

```
┌─────────────────────────────────┐
│                                 │
│     Hero Content                │
│     (Large, prominent)          │
│                                 │
├─────────────────────────────────┤
│ Supporting Content              │
│ ┌─────┬─────┬─────┐            │
│ │Card │Card │Card │            │
│ └─────┴─────┴─────┘            │
└─────────────────────────────────┘
```

**When to use:**
- Landing pages
- Feature announcements
- Marketing pages
- Product launches

**Key principles applied:**
- Hero dominates visual hierarchy
- Supporting content below
- Clear visual flow
- Strong call-to-action

## Split Layout

Two-column content:

```
┌─────────────────────────────────┐
│                                 │
│ Left Column    │ Right Column   │
│                │                │
│ - Form         │ - Preview      │
│ - Settings     │ - Result       │
│ - Input        │ - Output       │
│                │                │
└─────────────────────────────────┘
```

**When to use:**
- Form with preview
- Editor with output
- Settings with live preview
- Comparison views

**Key principles applied:**
- Clear visual separation
- Related columns have relationship
- Responsive: stacks on mobile
- Consistent column behavior

## Responsive Breakpoints

All layouts must adapt:

| Breakpoint | Columns | Sidebar | Margins |
|------------|---------|---------|---------|
| Phone (< 640px) | 1 | Hidden | 16px |
| Tablet (640-1024px) | 2 | Collapsed | 24px |
| Desktop (1024-1440px) | 3 | Visible | 32px |
| Large (> 1440px) | 3+ | Visible | 48px |

**Responsive rules:**
- Progressive enhancement (start simple)
- Content priority (most important first)
- Touch adaptation (larger targets on touch)
- Performance (lighter on smaller devices)

## See Also

- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
- [Grid System](../layout/grid-system.md) — Grid implementation
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
