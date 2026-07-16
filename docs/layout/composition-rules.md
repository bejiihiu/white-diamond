# Composition Rules

## Why This Matters

Composition is the art and science of arranging elements in space to create visual order and communicate meaning. Without composition rules, layouts feel arbitrary—elements float without purpose, spacing is inconsistent, and the user cannot form a mental model of the interface. Rules ensure that every element has a reason, every space has a function, and every relationship communicates meaning.

In WHITE DIAMOND, composition is architecture. Every element is a construction with mass and boundary. Every space is a volume with purpose. Every relationship is a structural connection. Composition rules are not decorative guidelines—they are the physical laws of the interface. They define how objects relate to each other in the architectural space, and they ensure that the spatial language is consistent, predictable, and controllable.

## Fundamental Composition Rules

### Rule 1: Alignment Creates Order

Every element must align to something. Alignment is the most basic spatial relationship—it creates invisible lines that connect elements and establish visual order. Without alignment, elements float randomly. With alignment, elements form a coherent structure.

Alignment types:

- **Grid alignment** — Elements align to the grid columns and rows defined in [Grid System](grid-system.md). Grid alignment is the strongest form of alignment—it connects elements across the entire layout through a shared structural framework.
- **Edge alignment** — Elements align to the edges of adjacent elements. Edge alignment creates local relationships—it says "these elements share a boundary."
- **Center alignment** — Elements align to the center of a column or container. Center alignment creates focal points—it draws the eye to a central axis.
- **Baseline alignment** — Text baselines align across columns. Baseline alignment creates typographic order—it ensures that text in adjacent columns shares a horizontal rhythm.

Alignment rules:
- **Every element must align** — No element may float freely. Every element must have at least one alignment relationship with another element or with the grid.
- **Alignment is invisible** — The alignment lines themselves are never visible. The order they create is visible; the mechanism is not.
- **Alignment is consistent** — The same alignment approach must be used throughout a view. Mixed alignment approaches create visual confusion.
- **Alignment supports hierarchy** — Primary elements align to primary grid lines. Secondary elements align to secondary lines. Alignment reinforces the hierarchy defined in [Text Hierarchy](../typography/text-hierarchy.md).

### Rule 2: Proximity Creates Relationship

Related elements should be close together; unrelated elements should be far apart. Proximity is the most powerful spatial communicator—it overrides other visual cues like color, shape, and style. Two elements that are close together will be perceived as related, regardless of how different they look.

Proximity distances:

- **Very close** (4-8px) — Directly related. Label and input. Caption and image. These elements form a single functional unit.
- **Close** (8-16px) — In the same group. Form fields in a group. List items in a category. These elements belong together but are distinct units.
- **Medium** (16-32px) — In the same section. Sections within a page. Cards within a container. These elements share a context but are structurally separate.
- **Far** (32-64px) — In the same view. Major sections of a page. Header and content. These elements are part of the same interface but serve different functions.
- **Very far** (64+px) — In different contexts. Page header and page footer. Content and navigation. These elements exist in the same space but serve fundamentally different purposes.

Proximity rules:
- **Distance communicates relationship** — The distance between two elements is a declaration of their relationship. Close means related. Far means unrelated.
- **Distance is consistent** — The same type of relationship must have the same distance throughout the interface. If a label-input pair is 8px apart in one form, it must be 8px apart in every form.
- **Distance is proportional** — More important relationships have tighter proximity. Less important relationships have looser proximity. The distance reflects the strength of the connection.
- **Distance overrides appearance** — Two elements that are close together will be perceived as related even if they look different. Two elements that are far apart will be perceived as unrelated even if they look identical. Proximity is the dominant spatial cue.

### Rule 3: Similarity Creates Grouping

Similar elements are perceived as related. Similarity is a secondary spatial cue—it reinforces proximity by creating visual consistency across related elements.

Similarity types:

- **Visual similarity** — Same style, color, shape. Elements that look the same are perceived as the same type of thing.
- **Positional similarity** — Same alignment, same grid. Elements that occupy the same spatial position are perceived as related.
- **Functional similarity** — Same behavior, same affordance. Elements that behave the same are perceived as the same type of thing.
- **Temporal similarity** — Same appearance timing. Elements that appear together are perceived as related.

Similarity rules:
- **Similar elements are similar** — Elements at the same hierarchy level should look the same. All H2 headings should have the same size, weight, color, and spacing. All captions should look like all other captions.
- **Different elements are different** — Elements at different hierarchy levels should look different. H2 should not look like H3. Caption should not look like Body. Visual difference communicates hierarchical difference.
- **Similarity reduces cognitive load** — When similar elements look similar, the user does not need to re-learn the visual language for each element. The consistency reduces mental effort and increases scanning speed.
- **Similarity is consistent** — The same similarity rules must apply everywhere. If buttons look one way in one context, they must look the same way in every context.

### Rule 4: Contrast Creates Hierarchy

Different elements communicate different importance. Contrast is the visual difference between elements—it draws the eye and establishes priority. Without contrast, every element has the same visual weight, and the hierarchy collapses.

Contrast types:

- **Size contrast** — Larger elements are more important. Size is the primary spatial communicator of importance. The eye is drawn to the largest element first.
- **Color contrast** — Higher contrast elements are more important. Elements with more contrast against their background have more visual presence.
- **Position contrast** — Top and center elements are more important. Position communicates importance through spatial prominence.
- **Spacing contrast** — Elements with more surrounding whitespace are more important. Whitespace is the architectural equivalent of volume—more space equals more importance.

Contrast rules:
- **Contrast communicates hierarchy** — The degree of contrast between elements communicates the degree of hierarchical difference. High contrast means high hierarchy difference. Low contrast means low hierarchy difference.
- **Contrast is intentional** — Every contrast difference must have a reason. If two elements have different sizes, it must be because one is more important than the other. Random contrast creates random hierarchy, which is no hierarchy at all.
- **Contrast is consistent** — The same degree of hierarchical difference must have the same degree of contrast throughout the interface. If H1 is 2x the size of Body in one context, it must be 2x the size of Body everywhere.
- **Contrast is bounded** — Contrast must stay within readable limits. The most important element must be readable; the least important element must be readable. Contrast that sacrifices readability defeats its purpose.

### Rule 5: Balance Creates Stability

Visual weight should be distributed evenly across the composition. Balance is the spatial equivalent of structural integrity—a balanced composition feels stable, intentional, and trustworthy. An unbalanced composition feels precarious, accidental, and unreliable.

Balance types:

- **Symmetrical balance** — Left mirrors right. Symmetrical balance creates formal, structured compositions. It is the architectural equivalent of a symmetrical building—predictable, stable, authoritative.
- **Asymmetrical balance** — Different elements, equal weight. Asymmetrical balance creates dynamic, interesting compositions. It is the architectural equivalent of a cantilever—unexpected but structurally sound.
- **Radial balance** — Elements radiate from center. Radial balance creates focal compositions. It is the architectural equivalent of a rotunda—everything flows from the center.
- **Crystal balance** — Repeating patterns. Crystal balance creates systematic compositions. It is the architectural equivalent of a colonnade—repeated elements creating rhythm.

Balance rules:
- **Every composition must be balanced** — An unbalanced composition creates visual tension. Tension is useful only when intentional; accidental tension is anxiety.
- **Balance is perceptual, not mathematical** — A composition is balanced when it feels balanced, not when the pixel counts are equal. A small, high-contrast element can balance a large, low-contrast element.
- **Balance supports hierarchy** — The primary element should be the visual center of gravity. Secondary elements should orbit the primary. The balance should reinforce, not contradict, the hierarchy.
- **Balance is consistent** — The same type of balance should be used throughout a view. Mixed balance approaches create visual confusion.

## Composition Techniques

### The Grid

Grids provide the invisible structure that makes alignment possible. The grid is the steel framework of the architecture—present but unseen, supporting everything without being visible itself.

Grid types:
- **Column grid** — Vertical divisions for content. Column grids define the horizontal rhythm of the layout.
- **Modular grid** — Row and column divisions for complex layouts. Modular grids define both horizontal and vertical rhythm.
- **Baseline grid** — Horizontal divisions for text alignment. Baseline grids ensure that text across columns shares a horizontal rhythm.
- **Responsive grid** — Adapts to screen size. Responsive grids maintain the same proportional relationships across different devices.

Grid rules:
- **Consistent gutters** — Same space between columns throughout a view. Variable gutters break the rhythm and create visual chaos.
- **Consistent margins** — Same space at edges throughout a view. Variable margins create unstable compositions.
- **Appropriate columns** — Enough columns for content needs, but not more. Too many columns create visual complexity; too few columns create layout constraints.
- **Responsive behavior** — The grid must adapt to different screen sizes while maintaining proportional relationships.

### White Space

White space is active composition—every gap, every margin, every padding has a function. White space is not "empty" space; it is architectural volume.

White space types:
- **Macro white space** — Space between major sections. Macro space creates the primary divisions of the layout.
- **Micro white space** — Space between elements. Micro space creates the secondary divisions within sections.
- **Active white space** — Intentional, purposeful space. Active space is designed—it has a specific function and a specific size.
- **Passive white space** — Default, leftover space. Passive space is not designed—it is the result of other decisions. Active space is preferred.

White space rules:
- **Purposeful** — Every space must serve a function. If a space does not separate, group, emphasize, or breathe, it should not exist.
- **Consistent** — Same types of space must have the same values. Consistency creates rhythm and predictability.
- **Proportional** — Space must relate to content importance. More important content has more space. Less important content has less space.
- **Responsive** — Space must adapt to available space. On small screens, space can be reduced. On large screens, space can be expanded. The proportional relationships must remain constant.

### Visual Flow

Visual flow guides the eye through content. It is the architectural equivalent of circulation—the path the visitor follows through the building.

Flow patterns:
- **F-pattern** — For text-heavy content. The eye scans left to right across the top, then down the left side, with shorter scans to the right. This is the natural reading pattern for LTR languages.
- **Z-pattern** — For visual content. The eye scans top-left to top-right, then diagonally to bottom-left, then across to bottom-right. This is the natural scanning pattern for visual compositions.
- **Guttenberg diagram** — For balanced content. The eye moves from the primary optical area (top-left) to the terminal area (bottom-right), with strong and weak fallow areas on the diagonals.
- **Rule of thirds** — For dynamic content. The eye is drawn to the intersection points of a 3x3 grid. These points are the natural focal points of any composition.

Flow rules:
- **Predictable** — Users can anticipate where to look next. The flow follows natural reading and scanning patterns.
- **Natural** — The flow follows the content, not against it. The eye should move from more important to less important, from top to bottom, from left to right.
- **Purposeful** — The flow guides toward important content. The most important content should be at the beginning of the flow path.
- **Consistent** — Same flow patterns everywhere. If one page follows an F-pattern, all text-heavy pages should follow an F-pattern.

## Composition Patterns

### The Hero Pattern

Large, prominent element at the top. The hero is the architectural facade—the element that defines the identity of the space and commands immediate attention.

```
┌─────────────────────────┐
│                         │
│     Hero Content        │
│     (Large, prominent)  │
│                         │
├─────────────────────────┤
│ Supporting Content      │
└─────────────────────────┘
```

Use for: Landing pages, feature highlights, any view that needs a strong visual anchor. The hero establishes the spatial hierarchy—everything below it is subordinate.

### The Card Pattern

Multiple equal-weight elements arranged in a grid. Each card is an independent architectural unit—identical in structure, equal in importance.

```
┌─────┐ ┌─────┐ ┌─────┐
│     │ │     │ │     │
│Card │ │Card │ │Card │
│  1  │ │  2  │ │  3  │
│     │ │     │ │     │
└─────┘ └─────┘ └─────┘
```

Use for: Listings, portfolios, features, any view that presents multiple items of equal importance. The card pattern creates grid-like compositions where each cell has identical internal structure.

### The Split Pattern

Two-column layout. The split pattern creates a dual-space composition where two content areas share the viewport.

```
┌───────────┬───────────┐
│           │           │
│  Content  │  Content  │
│  (Left)   │  (Right)  │
│           │           │
└───────────┴───────────┘
```

Use for: Comparisons, forms with preview, any view that presents two related but distinct content areas. The split pattern creates a balanced composition where both sides have equal visual weight.

### The Stack Pattern

Vertical stacking of sections. The stack pattern creates a linear composition where each section is a distinct architectural space.

```
┌─────────────────────────┐
│ Section 1               │
├─────────────────────────┤
│ Section 2               │
├─────────────────────────┤
│ Section 3               │
└─────────────────────────┘
```

Use for: Articles, forms, settings, any view that presents content in a sequential order. The stack pattern creates a clear reading order where the eye moves from top to bottom.

## Composition and Spatial Relationships

Composition rules interact with the spatial relationships defined in [Spatial Layout](spatial-layout.md):

- **Horizontal composition** — Left-to-right arrangement follows reading direction. Primary content is left; secondary content is right (in LTR languages).
- **Vertical composition** — Top-to-bottom arrangement follows scrolling direction. Primary content is top; secondary content is bottom.
- **Depth composition** — Front-to-back arrangement follows layering. Primary content is foreground; secondary content is background.

These spatial dimensions are defined in [Spatial Layout](spatial-layout.md) and implemented through the [Grid System](grid-system.md).

## Composition and Typography

Composition rules interact with typographic hierarchy defined in [Text Hierarchy](../typography/text-hierarchy.md):

- **Hierarchy through composition** — Higher-hierarchy text should have more whitespace, more prominent position, and more contrast. The composition reinforces the typographic hierarchy.
- **Grouping through typography** — Text at the same hierarchy level should be grouped together. Text at different hierarchy levels should be separated by whitespace proportional to their hierarchical distance.
- **Flow through typography** — The typographic hierarchy should guide the eye through the composition in a predictable order. The eye should move from Display to H1 to H2 to Body, following the hierarchy.

## See Also

- [Grid System](grid-system.md) — Grid implementation details
- [Spatial Layout](spatial-layout.md) — Layout as spatial arrangement
- [Space Geometry](../geometry/space-geometry.md) — Fundamentals of digital space
- [Geometric Rules](../geometry/geometric-rules.md) — Specific geometric guidelines
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Text Hierarchy](../typography/text-hierarchy.md) — Text hierarchy and reading order
- [Text in Space](../typography/text-in-space.md) — Typography as spatial geometry
