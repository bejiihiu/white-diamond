# Space Geometry

## Why This Matters

Space geometry defines the fundamental rules governing how digital space is structured, divided, and measured. Without explicit geometric rules, layout decisions become arbitrary, leading to interfaces that feel inconsistent even when individual elements are well-designed.

## The Nature of Digital Space

Digital space is a two-dimensional plane with perceived depth. Unlike physical space, it has no inherent scale—a pixel is a pixel regardless of screen size. This means WHITE DIAMOND must define its own spatial logic rather than relying on physical constants.

### The Unit System

All spatial measurements derive from a base unit. The base unit is not a fixed pixel value; it is a relationship between elements. The base unit adapts to context:

- **Micro** — Tight spaces, inline elements, small details
- **Standard** — Default spacing, typical layouts
- **Macro** — Large sections, prominent spacing, emphasis

These scales maintain proportional relationships regardless of the absolute values used.

### Spatial Density

Digital space has density—the amount of content in a given area. Density affects:
- **Readability** — Dense text is harder to scan
- **Touch targets** — Dense elements are harder to tap
- **Perceived importance** — Dense areas feel busy; sparse areas feel important
- **Navigation** — Dense interfaces are harder to navigate

WHITE DIAMOND defines density ranges rather than fixed densities:
- **Compact** — Maximum information density (data tables, dashboards)
- **Default** — Balanced density (most interfaces)
- **Spacious** — Emphasis on whitespace (marketing, presentations)

## Geometric Fundamentals

### The Grid

The grid is the invisible structure that organizes space. WHITE DIAMOND grids are:

- **Consistent** — Same columns and gutters throughout a view
- **Flexible** — Adaptable to different content needs
- **Aligning** — Elements snap to grid positions
- **Proportional** — Grid divisions create harmonic relationships

Grids are not visible by default. They are the scaffolding that makes alignment possible.

### Alignment

Alignment creates order from chaos. When elements align, they communicate relationship. WHITE DIAMOND defines alignment rules:

- **Edge alignment** — Elements align to the same edge
- **Center alignment** — Elements align to the same center point
- **Text alignment** — Text baselines align across columns
- **Optical alignment** — Visual weight is balanced, not just mathematical position

### Proportion

Proportion creates visual harmony. WHITE DIAMOND uses proportional systems:

- **Spacing proportion** — Spacing values follow a consistent ratio
- **Size proportion** — Elements scale in consistent proportions
- **Typography proportion** — Text sizes follow a modular scale
- **Color proportion** — Color areas follow the 60-30-10 principle

## Spatial Rules

### The Rule of Containment

Every element exists within a container, even if the container is invisible. Containers define:
- Where the element lives in space
- What other elements it relates to
- How it responds to changes in available space
- What happens when content overflows

No element should exist in undefined space.

### The Rule of Relationship

Spatial proximity communicates relationship. Elements that are close together are perceived as related. Elements that are far apart are perceived as unrelated.

WHITE DIAMOND defines relationship through spacing:
- **Tight** — Elements are directly related (label and input)
- **Normal** — Elements are in the same group (form fields in a section)
- **Loose** — Elements are in the same view (sections on a page)
- **Distant** — Elements are in different contexts (header and footer)

### The Rule of Hierarchy

Spatial hierarchy communicates importance. The most important element should be the most spatially prominent. WHITE DIAMOND defines hierarchy through:

- **Size** — Larger elements feel more important
- **Spacing** — More surrounding space feels more important
- **Position** — Top-center feels more important than bottom-right
- **Contrast** — Higher contrast elements feel more important

### The Rule of Boundaries

Every spatial region has boundaries. Boundaries can be:
- **Explicit** — Visible borders or backgrounds
- **Implicit** — Defined by spacing and alignment
- **Soft** — Gradual transitions between regions
- **Hard** — Sharp transitions between regions

The choice of boundary type communicates the nature of the spatial relationship.

## See Also

- [Object Boundaries](object-boundaries.md) — How objects define their limits
- [Geometric Rules](geometric-rules.md) — Specific geometric guidelines
- [Grid System](../layout/grid-system.md) — Grid implementation details
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement
