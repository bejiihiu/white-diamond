# Spatial Layout

## Why This Matters

Layout is not just arranging elements—it is creating spatial relationships that communicate meaning. Every element in a WHITE DIAMOND interface exists in three-dimensional space: it has horizontal position, vertical position, and depth. These three dimensions define the element's relationship to every other element in the interface. The layout communicates hierarchy, grouping, flow, and purpose through these spatial relationships.

In conventional UI design, layout is treated as a two-dimensional arrangement—a flat composition of rectangles on a screen. In WHITE DIAMOND, layout is three-dimensional architecture. Elements have mass, they have boundaries, they exist in front of or behind other elements, and they occupy specific positions in a vast architectural space. The screen is a window into this space; the layout is the architecture visible through that window.

Understanding spatial layout is essential for creating interfaces that feel controlled, predictable, and trustworthy. When spatial relationships are consistent, the user can form a reliable mental model of the interface. When spatial relationships are arbitrary, the user cannot predict where elements will appear, and the experience becomes chaotic.

## The Spatial Model

Interfaces exist in three spatial dimensions. Each dimension has specific properties, specific rules, and specific communicative functions.

### Horizontal Dimension

The horizontal dimension runs left-to-right (or right-to-left in RTL languages). It is the primary reading dimension—the dimension along which text flows and the eye scans.

Horizontal properties:
- **Primary flow** — Reading direction (LTR or RTL). The eye moves along the horizontal axis when reading text. This is the most fundamental spatial relationship in any interface.
- **Secondary flow** — Navigation direction. Navigation elements (tabs, breadcrumbs, step indicators) flow horizontally, following the reading direction.
- **Hierarchy** — Left = primary, Right = secondary (in LTR). The eye encounters left elements before right elements. Left positions communicate higher importance.
- **Grouping** — Horizontal proximity = relationship. Elements close together horizontally are perceived as related. Elements far apart horizontally are perceived as unrelated.

Horizontal rules:
- **Respect reading direction** — Content must flow in the reading direction. RTL layouts must mirror the horizontal axis. Reversing the reading direction creates cognitive dissonance.
- **Align to horizontal grid** — All elements must align to the horizontal grid. Misalignment on the horizontal axis is immediately visible because the eye scans horizontally.
- **Use horizontal space for hierarchy** — More important content should be positioned to the left (in LTR). Less important content should be positioned to the right.

### Vertical Dimension

The vertical dimension runs top-to-bottom. It is the scrolling dimension—the dimension along which content extends beyond the viewport.

Vertical properties:
- **Primary flow** — Scrolling direction. The user scrolls vertically to access content below the viewport. Vertical flow is the primary mechanism for accessing content that does not fit on one screen.
- **Secondary flow** — Hierarchy direction. Vertical position communicates hierarchy: top = primary, bottom = secondary. The eye scans from top to bottom; top elements are encountered first.
- **Hierarchy** — Top = primary, Bottom = secondary. The most important content should be at the top of the page. Less important content should be below the fold.
- **Grouping** — Vertical proximity = relationship. Elements close together vertically are perceived as related. Elements far apart vertically are perceived as unrelated.

Vertical rules:
- **Prioritize vertical position** — The most important content must be at the top of the page. Content below the fold is seen only after scrolling. Top positions communicate highest importance.
- **Use vertical space for grouping** — Related content should be vertically adjacent. Section breaks should be marked by vertical whitespace proportional to the hierarchical distance.
- **Control vertical rhythm** — Vertical spacing must follow a consistent rhythm. The [Grid System](grid-system.md) defines this rhythm through baseline grids and row heights.

### Depth Dimension

The depth dimension runs front-to-back. It is the layering dimension—the dimension along which elements are stacked on top of each other.

Depth properties:
- **Z-index** — Layering order. Elements with higher z-index appear in front of elements with lower z-index. Z-index defines the visual stacking order.
- **Elevation** — Visual height. Elements that appear closer to the viewer (higher z-index) feel more important, more prominent, more immediate. Elevation communicates importance through depth.
- **Focus** — Foreground vs. background. Elements in the foreground are active, interactive, primary. Elements in the background are passive, decorative, secondary.
- **Priority** — Higher layers = higher priority. The depth hierarchy mirrors the content hierarchy: the most important elements are on top, the least important elements are on the bottom.

Depth rules:
- **Use depth sparingly** — Depth is expensive. Every elevated element competes for attention. Use elevation only for elements that must appear above others: modals, dropdowns, tooltips, notifications.
- **Depth communicates hierarchy** — Elevated elements are more important than background elements. If an element is elevated, it must be more important than the elements it covers.
- **Depth must be justified** — Every elevated element must have a reason. Elevation without purpose creates visual anxiety—the user does not know what is on top of what, and the spatial model breaks down.
- **Depth follows the three-layer hierarchy** — Every element in WHITE DIAMOND has three layers: Physical Boundary → Inner Surface → Content. This hierarchy applies to depth as well: the boundary is the container, the surface is the background, and the content is the foreground.

## Layout Rules

### Rule 1: Layout Communicates Hierarchy

The most important content should occupy the most prominent position in the layout. Layout hierarchy is a spatial declaration of importance—it tells the user what matters most before they read a single word.

Hierarchy through layout:
- **Top** — Above the fold. The most important content must be visible without scrolling. The user should not have to work to find the primary message.
- **Left** — In the primary reading direction. The eye starts at the left; left content is encountered first. Primary content should be left-aligned.
- **Center** — In the optical center. The center of the viewport attracts the eye. Center positions communicate importance for focused content.
- **Prominent** — With more space and contrast. Important content should have more whitespace, higher contrast, and larger size. These spatial properties amplify the hierarchy.

Layout hierarchy must match information hierarchy. If the information architecture has three levels (page → section → subsection), the layout must have three spatial levels (full-width → partial-width → narrow). If the information hierarchy and layout hierarchy diverge, the user receives conflicting signals.

### Rule 2: Layout Creates Flow

Users should move through the layout naturally. The layout should guide the eye from more important to less important content, from primary to secondary, from top to bottom, from left to right.

Flow patterns:
- **F-pattern** — For text-heavy content. The eye scans left to right across the top, then down the left side, with shorter scans to the right. The F-pattern is the natural reading pattern for LTR languages. Layouts with long text content should follow this pattern.
- **Z-pattern** — For visual content. The eye scans top-left to top-right, then diagonally to bottom-left, then across to bottom-right. The Z-pattern is the natural scanning pattern for visual compositions. Layouts with images, cards, and visual elements should follow this pattern.
- **Guttenberg diagram** — For balanced content. The eye moves from the primary optical area (top-left) to the terminal area (bottom-right), with strong and weak fallow areas on the diagonals. The Guttenberg diagram is useful for balanced layouts with both text and visual elements.
- **Card flow** — For card-based content. The eye scans cards in reading order: left to right, top to bottom. Card flow is the natural pattern for grid layouts with repeated elements.

Flow rules:
- **Predictable** — Users can anticipate where to look next. The flow follows natural reading and scanning patterns.
- **Natural** — The flow follows the content, not against it. The eye should move from more important to less important, from top to bottom, from left to right.
- **Purposeful** — The flow guides toward important content. The most important content should be at the beginning of the flow path.
- **Consistent** — Same flow patterns everywhere. If one page follows an F-pattern, all text-heavy pages should follow an F-pattern.

### Rule 3: Layout Groups Related Content

Related content should be spatially grouped. Grouping is the spatial mechanism for communicating relationships—elements that are close together are perceived as related, regardless of how different they look.

Grouping mechanisms:
- **Proximity** — Close together = related. This is the most powerful grouping mechanism. Two elements that are close together will always be perceived as related.
- **Containment** — Inside same container = related. Elements that share a container (card, section, panel) are perceived as a single unit. Containment is the architectural equivalent of walls—it defines the boundaries of a space.
- **Alignment** — Aligned to same edge = related. Elements that share an alignment edge are visually connected. Alignment creates invisible lines that link elements across the layout.
- **Similarity** — Similar appearance = related. Elements that look the same are perceived as the same type of thing. Similarity reinforces proximity by creating visual consistency.

Grouping rules:
- **Group related content** — Elements that belong together must be close together. If a label and its input are far apart, the user cannot tell which label belongs to which input.
- **Separate unrelated content** — Elements that do not belong together must be far apart. If unrelated elements are close together, the user perceives them as related, which creates confusion.
- **Use containment for strong grouping** — When proximity is not enough, use containment. A card, a section, or a panel creates a strong visual boundary that defines the group.
- **Use alignment for cross-element grouping** — When elements are in different containers but belong together, use alignment. Aligned elements are visually connected even when they are physically separated.

### Rule 4: Layout Separates Unrelated Content

Unrelated content should be spatially separated. Separation prevents confusion—it tells the user "these elements are not related."

Separation mechanisms:
- **Whitespace** — More space = less related. Whitespace is the primary separation mechanism. Large gaps between elements signal that the elements are unrelated.
- **Boundaries** — Different containers = different groups. When elements are in different containers, they are perceived as different groups. Boundaries create clear separations.
- **Dividers** — Visual separators = different sections. Horizontal or vertical lines create explicit separations between sections. Dividers are the architectural equivalent of walls between rooms.
- **Color** — Different backgrounds = different areas. Different background colors create visual separations between areas. Color is a surface property that communicates grouping.

Separation rules:
- **Separate unrelated content** — Elements that do not belong together must be visually separated. Proximity without relationship creates confusion.
- **Use whitespace as the primary separator** — Whitespace is the most elegant separation mechanism. It creates separation without adding visual noise.
- **Use boundaries for strong separation** — When whitespace is not enough, use boundaries. Cards, sections, and panels create strong visual separations.
- **Use dividers for explicit separation** — When the separation must be unmistakable, use dividers. Lines are explicit—they leave no ambiguity about where one section ends and another begins.

### Rule 5: Layout Adapts to Context

Layout must work across contexts. A layout that works on a 1440px desktop must also work on a 375px mobile. A layout that works with ten items must also work with two. A layout that works for a sighted user must also work for a screen reader user.

Adaptation requirements:
- **Screen size** — Responsive to different devices. The layout must adapt to different viewport sizes while maintaining the same proportional relationships.
- **Content volume** — Adapts to more or less content. The layout must handle varying amounts of content gracefully—expanding for more content, contracting for less content.
- **User preference** — Respects user settings. The layout must accommodate user preferences for font size, spacing, and color. These preferences may alter the spatial relationships; the layout must adapt without breaking.
- **Accessibility** — Works with assistive technology. The layout must be navigable by keyboard, readable by screen readers, and accessible to users with disabilities. The spatial relationships must be communicable through non-visual means.

Adaptation rules:
- **Progressive enhancement** — Start with the simplest layout and add complexity for larger screens. This ensures the layout works at every size.
- **Content priority** — The most important content must be visible at every breakpoint. If content is hidden on small screens, it must be the least important content.
- **Flexible containers** — Containers must adapt to content volume. Fixed-height containers break when content exceeds the expected amount. Flexible containers expand and contract with content.
- **Semantic markup** — The spatial relationships must be communicated through semantic HTML, not just visual layout. Screen readers need structural information, not visual position.

## Layout Patterns

### Single Column

One column of content. The simplest layout pattern—maximum content density, minimum complexity.

```
┌─────────────────────────┐
│                         │
│      Content            │
│      (Full width)       │
│                         │
└─────────────────────────┘
```

Use for: Articles, forms, mobile layouts, any view that presents content in a linear sequence. Single column is the default layout pattern—it requires no spatial decisions beyond vertical ordering.

### Two Column

Two columns of content. A balanced layout pattern that creates two distinct content areas.

```
┌───────────┬───────────┐
│           │           │
│  Primary  │ Secondary │
│  Content  │ Content   │
│           │           │
└───────────┴───────────┘
```

Use for: Documentation (content + sidebar), dashboards (metrics + details), settings (navigation + form). Two column is the most common layout pattern for desktop interfaces.

### Three Column

Three columns of content. A complex layout pattern that creates three distinct content areas.

```
┌─────┬───────────┬─────┐
│     │           │     │
│Nav  │  Primary  │Side │
│     │  Content  │bar  │
│     │           │     │
└─────┴───────────┴─────┘
```

Use for: Complex dashboards, e-commerce, any view that presents multiple content streams simultaneously. Three column is the most complex standard layout pattern—it requires careful attention to column widths and content priority.

### Sidebar

Main content with sidebar. A hierarchical layout pattern that creates a primary content area with a supporting sidebar.

```
┌─────┬─────────────────┐
│     │                 │
│Side │  Main Content   │
│bar  │                 │
│     │                 │
└─────┴─────────────────┘
```

Use for: Navigation, settings, documentation, any view that has a primary content area with supporting navigation or controls. The sidebar pattern is the most common layout for application interfaces.

### Grid

Multiple equal-weight items. A repetitive layout pattern that creates a grid of identical content units.

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

Use for: Listings, portfolios, galleries, any view that presents multiple items of equal importance. The grid pattern creates a systematic composition where each cell has identical structure.

## Responsive Layout

### Breakpoints

Layouts must adapt at breakpoints. Breakpoints are the viewport widths at which the layout changes its structure—reducing columns, adjusting spacing, and reorganizing content.

Breakpoint definitions:
- **Mobile** (< 640px) — Single column, minimal margins. Maximum content density on minimum screen space. The mobile layout is the foundation—all content must be accessible at this size.
- **Tablet** (640-1024px) — Two columns, moderate margins. Balanced content density and breathing room. The tablet layout adds complexity to the mobile foundation.
- **Desktop** (1024-1440px) — Three columns, standard margins. Full flexibility with generous breathing room. The desktop layout is the complete experience.
- **Large desktop** (> 1440px) — Three+ columns, extra-large margins. Maximum breathing room with full flexibility. The large desktop layout is the luxury experience.

### Responsive Rules

Layout responsiveness rules ensure that the spatial relationships remain consistent across different devices:

- **Progressive enhancement** — Start simple, add complexity. The mobile layout is the foundation; larger screens add columns, spacing, and features. This ensures the layout works at every size.
- **Content priority** — Most important content first. At every breakpoint, the most important content must be visible first. If content is hidden on small screens, it must be the least important content.
- **Touch adaptation** — Larger targets on touch devices. Touch targets must be at least 44px × 44px. Spacing between touch targets must be at least 8px to prevent accidental taps.
- **Performance** — Lighter layouts on smaller devices. Smaller devices have less processing power; layouts should be simpler and lighter to ensure smooth performance.

### Responsive and Grid

Responsive layout is implemented through the [Grid System](grid-system.md). The grid defines the column counts, gutter sizes, and margin sizes at each breakpoint. Responsive layout is the grid in motion—it is the same spatial system adapting to different viewport sizes.

## Layout and Spatial Relationships

Layout creates spatial relationships that communicate meaning. These relationships are defined in [Composition Rules](composition-rules.md):

- **Proximity** — Distance communicates relationship. Close elements are related; far elements are unrelated.
- **Alignment** — Edges communicate connection. Aligned elements are visually linked; misaligned elements are independent.
- **Similarity** — Appearance communicates type. Similar elements are the same type; different elements are different types.
- **Contrast** — Difference communicates hierarchy. High-contrast elements are more important; low-contrast elements are less important.
- **Balance** — Distribution communicates stability. Balanced compositions feel intentional; unbalanced compositions feel accidental.

These composition rules are implemented through the grid, expressed through typography, and experienced through spatial layout.

## Layout and Typography

Layout interacts with typography in several critical ways:

- **Text containers** — Layout defines the containers that hold text. The width of a text container determines the line length; the height determines the number of visible lines. Text containers must respect the spatial relationships defined in [Text in Space](../typography/text-in-space.md).
- **Text hierarchy** — Layout reinforces the typographic hierarchy. Higher-hierarchy text should have more whitespace, more prominent position, and more columns. The layout amplifies the hierarchy defined in [Text Hierarchy](../typography/text-hierarchy.md).
- **Text alignment** — Layout defines the grid to which text aligns. Text must align to grid lines as defined in [Grid System](grid-system.md). Text alignment creates order and consistency across the layout.
- **Text flow** — Layout defines the reading path. The eye moves through the layout in a predictable order, following the flow patterns defined in this document. Text flow must be guided by the layout, not against it.

## See Also

- [Composition Rules](composition-rules.md) — Rules for arranging elements in space
- [Grid System](grid-system.md) — Grid implementation details
- [Space Geometry](../geometry/space-geometry.md) — Fundamentals of digital space
- [Spatial Hierarchy](../spatial-hierarchy/object-structure.md) — How objects are structured
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Text Hierarchy](../typography/text-hierarchy.md) — Text hierarchy and reading order
- [Text in Space](../typography/text-in-space.md) — Typography as spatial geometry
- [Type System](../typography/type-system.md) — Typography foundations
