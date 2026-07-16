# Grid System

## Why This Matters

Grids provide the invisible structure that makes alignment possible. Without a consistent grid, elements float arbitrarily, creating visual chaos. A well-designed grid creates order, rhythm, and predictability.

## Grid Fundamentals

### Columns

Columns are vertical divisions of space:
- **12-column grid** — Most flexible, divides into halves, thirds, quarters
- **8-column grid** — Good for medium screens
- **4-column grid** — Good for small screens
- **1-column grid** — For narrow screens, single-column layouts

Column rules:
- **Consistent width** — All columns same width
- **Flexible number** — Adapts to screen size
- **Responsive** — Reduces columns on smaller screens
- **Content-aligned** — Content aligns to column edges

### Gutters

Gutters are spaces between columns:
- **Narrow gutters** (8px) — Tight layouts, dense content
- **Standard gutters** (16px) — Default for most layouts
- **Wide gutters** (24px) — Spacious layouts, prominent content
- **Extra-wide gutters** (32px) — Luxury layouts, minimal content

Gutter rules:
- **Consistent** — Same gutter width throughout a view
- **Proportional** — Gutters relate to content size
- **Responsive** — Gutters can adapt to screen size
- **Visible** — Gutters are whitespace, not visible dividers

### Margins

Margins are spaces at the grid edges:
- **Small margins** (16px) — Mobile, compact layouts
- **Standard margins** (24px) — Tablet, default layouts
- **Large margins** (32px) — Desktop, spacious layouts
- **Extra-large margins** (48px) — Large screens, luxury layouts

Margin rules:
- **Consistent** — Same margin on all sides
- **Responsive** — Increase on larger screens
- **Content-aware** — Can adapt to content needs
- **Symmetrical** — Left and right margins equal

## Grid Types

### Fixed Grid

Columns have fixed pixel widths:
- **Use when** — Exact alignment is critical
- **Don't use when** — Layout needs to be flexible
- **Example** — Data tables, form layouts

### Fluid Grid

Columns stretch to fill available space:
- **Use when** — Layout needs to adapt to screen size
- **Don't use when** — Exact alignment is critical
- **Example** — Responsive websites, dashboards

### Hybrid Grid

Combines fixed and fluid elements:
- **Use when** — Some elements need fixed size, others flexible
- **Don't use when** — Simple layouts suffice
- **Example** — Sidebars with fluid content

## Grid Rules

### Rule 1: Content Aligns to Grid

All content must align to grid lines:
- **Left alignment** — Align to left column edge
- **Right alignment** — Align to right column edge
- **Center alignment** — Center within column
- **Full-width** — Span multiple columns

Misalignment creates visual noise.

### Rule 2: Grid Is Consistent

The same grid must be used throughout a view:
- **Same columns** — Same number and width
- **Same gutters** — Same space between columns
- **Same margins** — Same space at edges
- **Same behavior** — Same responsive rules

Inconsistent grids break visual order.

### Rule 3: Grid Is Responsive

Grids must adapt to screen size:
- **Phone** — 4 columns, small margins
- **Tablet** — 8 columns, medium margins
- **Desktop** — 12 columns, large margins
- **Large desktop** — 12 columns, extra-large margins

Rigid grids break on different screens.

### Rule 4: Grid Supports Hierarchy

Grid position communicates importance:
- **Top** — More important
- **Left** — More important (in LTR)
- **Center** — More important
- **Full-width** — Most important

Grid position reinforces visual hierarchy.

### Rule 5: Grid Is Invisible

Grids should not be visible by default:
- **Whitespace** — Grid is defined by spacing, not lines
- **Alignment** — Grid is defined by element positions
- **Consistency** — Grid is defined by consistent treatment
- **Debug mode** — Grid can be visualized for development

Visible grids are development tools, not production elements.

## Grid Patterns

### 12-Column Grid

Most flexible grid system:
```
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

Common divisions:
- **Halves** — 6+6 columns
- **Thirds** — 4+4+4 columns
- **Quarters** — 3+3+3+3 columns
- **Sidebar** — 3+9 or 4+8 columns
- **Three columns** — 4+4+4 columns

### 8-Column Grid

Good for medium screens:
```
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
```

Common divisions:
- **Halves** — 4+4 columns
- **Thirds** — Not evenly divisible (use 3+3+2 approximation)
- **Sidebar** — 2+6 or 3+5 columns

### 4-Column Grid

Good for small screens:
```
| 1 | 2 | 3 | 4 |
```

Common divisions:
- **Halves** — 2+2 columns
- **Thirds** — Not evenly divisible (use 1+2+1 approximation)
- **Full width** — 4 columns

## See Also

- [Composition Rules](composition-rules.md) — Rules for arranging elements
- [Spatial Layout](spatial-layout.md) — Layout as spatial arrangement
- [Space Geometry](../geometry/space-geometry.md) — Fundamentals of digital space
- [Geometric Rules](../geometry/geometric-rules.md) — Specific geometric guidelines
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
