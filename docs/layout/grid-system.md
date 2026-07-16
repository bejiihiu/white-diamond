# Grid System

## Why This Matters

Grids provide the invisible structure that makes alignment possible. Without a consistent grid, elements float arbitrarily—each positioned by intuition rather than by system. The result is visual chaos: misaligned edges, inconsistent spacing, and compositions that feel accidental rather than intentional. A well-designed grid creates order, rhythm, and predictability. It is the steel framework of the architecture—present but unseen, supporting everything without being visible itself.

In WHITE DIAMOND, the grid is not a visual effect. It is a spatial law. Every element must align to the grid. Every space must be defined by the grid. The grid is the mathematical foundation of the layout—the invisible geometry that ensures every element has a reason for its position, every gap has a function, and every relationship communicates meaning.

## The Grid as Architectural Framework

The grid is the architectural equivalent of a building's structural frame. The frame defines where walls can be placed, where openings can be cut, and where loads are carried. The frame is invisible to the building's occupants, but it determines everything they see and experience.

Similarly, the grid defines:
- **Where content can be placed** — Content must align to grid columns and rows. No content may float freely.
- **Where gaps must exist** — Gutters define the spaces between content areas. No content may touch adjacent content without a gutter.
- **Where edges must align** — The edges of content areas must align to grid lines. No edge may be arbitrarily positioned.
- **Where hierarchy is expressed** — More important content spans more columns. Grid position communicates importance.

The grid is not a constraint on design—it is the foundation of design. Without the grid, there is no spatial system. Without a spatial system, there is no architecture. Without architecture, there is only decoration.

## Grid Fundamentals

### Columns

Columns are the vertical divisions of space. They define the horizontal rhythm of the layout—the repeating pattern of content and gutter that creates visual order.

Column properties:
- **Consistent width** — All columns in a grid must have the same width. Variable-width columns create visual chaos—the eye cannot form a consistent spatial model.
- **Fixed or fluid** — Columns may have fixed pixel widths (for precise alignment) or fluid percentage widths (for responsive adaptation). The choice depends on the content requirements.
- **Responsive** — The number of columns must adapt to screen size. A 12-column grid on desktop may become a 4-column grid on mobile. The proportional relationships must remain constant.

Column counts:
- **12-column grid** — The most flexible standard grid. Divides into halves (6+6), thirds (4+4+4), quarters (3+3+3+3), and sidebar combinations (3+9, 4+8). The 12-column grid is the default for desktop layouts.
- **8-column grid** — Good for medium screens. Divides into halves (4+4) and approximate thirds (3+3+2). The 8-column grid is the default for tablet layouts.
- **4-column grid** — Good for small screens. Divides into halves (2+2) and full width (4). The 4-column grid is the default for mobile layouts.
- **1-column grid** — For narrow screens and single-column layouts. The 1-column grid is the fallback for any screen that cannot support multiple columns.

Column rules:
- **Content aligns to column edges** — Text, images, and interactive elements must align to the left or right edge of a column. No content may be positioned between columns.
- **Content may span columns** — A single element may span multiple columns. The number of columns spanned communicates importance: more columns = more importance.
- **Columns are invisible** — The column lines themselves are never visible. The order they create is visible; the mechanism is not.

### Gutters

Gutters are the spaces between columns. They are the architectural equivalent of the gap between rooms—the physical separation that defines boundaries and creates breathing room.

Gutter sizes:
- **Narrow gutters** (8px) — Tight layouts, dense content. Narrow gutters create compact compositions where content is closely packed. Use for data tables, form layouts, and any view where density is more important than breathing room.
- **Standard gutters** (16px) — Default for most layouts. Standard gutters create balanced compositions where content has room to breathe without excessive separation. This is the default gutter size.
- **Wide gutters** (24px) — Spacious layouts, prominent content. Wide gutters create generous compositions where each content area is clearly separated. Use for card layouts, feature sections, and any view where prominence is more important than density.
- **Extra-wide gutters** (32px) — Luxury layouts, minimal content. Extra-wide gutters create expansive compositions where content areas are dramatically separated. Use for hero sections, splash screens, and any view that demands maximum visual impact.

Gutter rules:
- **Consistent** — The same gutter width must be used throughout a view. Variable gutters break the rhythm and create visual chaos.
- **Proportional** — Gutters must relate to content size. Larger content areas can handle larger gutters; smaller content areas need smaller gutters.
- **Responsive** — Gutters can adapt to screen size. On small screens, gutters may be reduced to save space. On large screens, gutters may be expanded to create more breathing room. The proportional relationships must remain constant.
- **Visible as whitespace** — Gutters are whitespace, not visible dividers. The separation between columns is communicated through space, not through lines or colors.

### Margins

Margins are the spaces at the grid edges. They are the architectural equivalent of the setback—the distance between the building and the property line. Margins create breathing room between the content and the viewport edge.

Margin sizes:
- **Small margins** (16px) — Mobile, compact layouts. Small margins maximize content area on small screens.
- **Standard margins** (24px) — Tablet, default layouts. Standard margins create balanced compositions with moderate breathing room.
- **Large margins** (32px) — Desktop, spacious layouts. Large margins create generous compositions with ample breathing room.
- **Extra-large margins** (48px) — Large screens, luxury layouts. Extra-large margins create expansive compositions where content is dramatically separated from the viewport edge.

Margin rules:
- **Consistent** — The same margin must be used on all sides of a view. Asymmetric margins create visual imbalance.
- **Responsive** — Margins must increase on larger screens. The human eye expects more breathing room on larger displays. Small margins on a large screen feel cramped.
- **Content-aware** — Margins can adapt to content needs. A text-heavy page may have larger margins for readability; a data-heavy page may have smaller margins for density.
- **Symmetrical** — Left and right margins must be equal. Asymmetric margins create an unbalanced composition that feels tilted.

## Grid Types

### Fixed Grid

Columns have fixed pixel widths. The grid does not change based on viewport size—it maintains the same dimensions regardless of the screen.

Use when:
- Exact alignment is critical
- Content has specific width requirements
- The layout must match a design specification precisely

Don't use when:
- Layout needs to be flexible
- The interface must work across different screen sizes
- Content volume varies significantly

Example: Data tables with fixed column widths, form layouts with specific field sizes.

### Fluid Grid

Columns stretch to fill available space. The grid adapts to the viewport size—columns grow and shrink proportionally.

Use when:
- Layout needs to adapt to screen size
- Content volume varies significantly
- The interface must work across different devices

Don't use when:
- Exact alignment is critical
- Content has specific width requirements
- The layout must maintain fixed proportions

Example: Responsive websites, dashboards, any layout that must work across devices.

### Hybrid Grid

Combines fixed and fluid elements. Some columns have fixed widths; others stretch to fill available space.

Use when:
- Some elements need fixed size (e.g., sidebar), others flexible (e.g., content area)
- The layout has both structural and content elements
- The interface must adapt while maintaining certain fixed relationships

Don't use when:
- Simple layouts suffice
- All elements need the same treatment
- The layout can be fully fluid or fully fixed

Example: Sidebars with fixed width and fluid content areas, navigation with fixed item widths and fluid spacing.

## Grid Rules

### Rule 1: Content Aligns to Grid

All content must align to grid lines. No content may float freely. No content may be positioned between columns. Every element must have at least one edge aligned to a grid line.

Alignment types:
- **Left alignment** — Content aligns to the left edge of a column. This is the default alignment for LTR languages.
- **Right alignment** — Content aligns to the right edge of a column. This is used for specific contexts (RTL languages, numeric data).
- **Center alignment** — Content centers within a column. This is used for headings, hero text, and short-form content.
- **Full-width** — Content spans multiple columns. This is used for paragraphs, descriptions, and any text that must be read continuously.

Misalignment creates visual noise. When one element is 2px off the grid, the entire composition feels imprecise. Precision is the architectural ideal.

### Rule 2: Grid Is Consistent

The same grid must be used throughout a view. Every view must use the same column count, gutter width, and margin size. Inconsistent grids break the spatial system—the user cannot form a reliable mental model of the layout.

Consistency requirements:
- **Same columns** — Same number and width throughout a view
- **Same gutters** — Same space between columns throughout a view
- **Same margins** — Same space at edges throughout a view
- **Same behavior** — Same responsive rules throughout a view

Inconsistent grids are the architectural equivalent of a building where each floor has a different structural frame. The result is instability—both visual and conceptual.

### Rule 3: Grid Is Responsive

Grids must adapt to screen size. A grid that works on a 1440px desktop will not work on a 375px mobile. The grid must reduce columns, adjust gutters, and modify margins to maintain the same proportional relationships across different devices.

Responsive breakpoints:
- **Phone** (< 640px) — 4 columns, small margins, narrow gutters. Maximum content density on minimum screen space.
- **Tablet** (640-1024px) — 8 columns, medium margins, standard gutters. Balanced content density and breathing room.
- **Desktop** (1024-1440px) — 12 columns, large margins, standard gutters. Full flexibility with generous breathing room.
- **Large desktop** (> 1440px) — 12 columns, extra-large margins, wide gutters. Maximum breathing room with full flexibility.

Responsive rules:
- **Progressive enhancement** — Start with the simplest layout (phone) and add complexity for larger screens. This ensures the layout works at every size.
- **Content priority** — The most important content must be visible at every breakpoint. If content is hidden on phone, it must be the least important content.
- **Column reduction** — Columns reduce as screens shrink. A 12-column desktop grid becomes 8 columns on tablet and 4 columns on phone. The proportional relationships must remain constant.
- **Gutter and margin adaptation** — Gutters and margins can shrink on smaller screens to save space. The proportional relationships must remain constant.

### Rule 4: Grid Supports Hierarchy

Grid position communicates importance. The grid is not just an alignment tool—it is a hierarchical tool. More important content spans more columns, occupies more prominent positions, and has more surrounding whitespace.

Hierarchy through grid:
- **Top** — More important. The eye scans from top to top-down; top content is seen first.
- **Left** — More important (in LTR). The eye starts at the left; left content is encountered first.
- **Center** — More important. The optical center of any composition attracts the eye.
- **Full-width** — Most important. Content that spans the full grid width commands the most attention.

Grid hierarchy must match the content hierarchy defined in [Text Hierarchy](../typography/text-hierarchy.md). If an H1 heading is the most important text on the page, it should occupy the most prominent grid position.

### Rule 5: Grid Is Invisible

Grids should not be visible by default. The grid is a development tool—a structural framework that ensures alignment and consistency. The grid itself is never displayed to the user.

Grid visibility:
- **Whitespace** — The grid is defined by spacing, not by lines. The gaps between columns are the grid made visible; the grid lines themselves are invisible.
- **Alignment** — The grid is defined by element positions. When elements align, the grid is implied. When elements misalign, the grid is broken.
- **Consistency** — The grid is defined by consistent treatment. When the same spacing appears everywhere, the grid is evident. When spacing varies, the grid is absent.
- **Debug mode** — The grid can be visualized for development. During development, overlay the grid to verify alignment. In production, the overlay is removed.

Visible grids are development tools, not production elements. They are the scaffolding that is removed when the building is complete.

## Grid Patterns

### 12-Column Grid

The most flexible standard grid system:

```
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

Common divisions:
- **Halves** — 6+6 columns. Two equal-width content areas.
- **Thirds** — 4+4+4 columns. Three equal-width content areas.
- **Quarters** — 3+3+3+3 columns. Four equal-width content areas.
- **Sidebar** — 3+9 or 4+8 columns. Narrow sidebar with wide content area.
- **Three columns** — 4+4+4 columns. Three equal-width content areas (same as thirds).
- **Two + sidebar** — 3+6+3 columns. Content area with two sidebars.

The 12-column grid is the default because it divides evenly into the most common fractions. It is the most versatile grid for general-purpose layout.

### 8-Column Grid

Good for medium screens:

```
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
```

Common divisions:
- **Halves** — 4+4 columns. Two equal-width content areas.
- **Thirds** — Not evenly divisible. Use 3+3+2 approximation (the third column is slightly narrower).
- **Sidebar** — 2+6 or 3+5 columns. Narrow sidebar with wide content area.

The 8-column grid is the default for tablet layouts. It provides sufficient flexibility for most content while maintaining simplicity.

### 4-Column Grid

Good for small screens:

```
| 1 | 2 | 3 | 4 |
```

Common divisions:
- **Halves** — 2+2 columns. Two equal-width content areas.
- **Thirds** — Not evenly divisible. Use 1+2+1 approximation (the middle column is double width).
- **Full width** — 4 columns. Single content area spanning the full width.

The 4-column grid is the default for mobile layouts. It provides basic flexibility while maximizing content density on small screens.

## Grid and Spatial Relationships

The grid defines the spatial relationships between elements. These relationships are implemented through the composition rules defined in [Composition Rules](composition-rules.md):

- **Alignment** — Grid lines create alignment relationships. Elements on the same grid line are visually connected.
- **Proximity** — Grid spacing creates proximity relationships. Elements in adjacent columns are close; elements in distant columns are far.
- **Grouping** — Grid grouping creates visual groups. Elements in the same grid area are perceived as related.
- **Hierarchy** — Grid position creates hierarchical relationships. Elements at the top of the grid are more important than elements at the bottom.

These spatial relationships are defined in [Composition Rules](composition-rules.md) and expressed through the grid in [Spatial Layout](spatial-layout.md).

## Grid and Typography

The grid interacts with typography defined in [Type System](../typography/type-system.md) and [Text in Space](../typography/text-in-space.md):

- **Text alignment** — Text must align to grid lines. Left-aligned text aligns to the left column edge; right-aligned text aligns to the right column edge.
- **Line length** — Text containers must use `max-width` to enforce readable line lengths. The `max-width` should correspond to a grid column span.
- **Text hierarchy** — Higher-hierarchy text may span more columns. H1 may span the full width; H3 may span a single column. Grid span communicates typographic hierarchy.

## See Also

- [Composition Rules](composition-rules.md) — Rules for arranging elements in space
- [Spatial Layout](spatial-layout.md) — Layout as spatial arrangement
- [Space Geometry](../geometry/space-geometry.md) — Fundamentals of digital space
- [Geometric Rules](../geometry/geometric-rules.md) — Specific geometric guidelines
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Type System](../typography/type-system.md) — Typography foundations
- [Text in Space](../typography/text-in-space.md) — Typography as spatial geometry
