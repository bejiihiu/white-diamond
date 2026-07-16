# Basic Layout Examples

## Why This Document Exists

Layout is the spatial expression of architecture. A layout is not a arrangement of boxes—it is the construction of spatial relationships that communicate hierarchy, proximity, and purpose. Every layout follows the same physical laws defined in [Core Principles](../philosophy/core-principles.md): space is infinite, objects have mass and boundaries, and the screen is a window into a vast architectural space.

These examples demonstrate how WHITE DIAMOND layouts are constructed step-by-step, and why each construction decision follows from the axioms of digital space. Understanding these examples teaches you to derive layouts from principles rather than copying patterns.

---

## Fundamental Layout Axioms

Before examining specific layouts, every construction must internalize these spatial truths:

**The screen is a window, not a canvas.** A canvas is created when you begin painting and destroyed when you stop. A viewport is a fixed position through which you observe something larger than yourself. Layouts are not generated into existence—they are positioned within a pre-existing spatial structure. When a user scrolls, content does not appear from nothing; it enters the viewport from below, demonstrating that it existed all along outside the visible area.

**Every element is an architectural construction.** A button is not a rectangle drawn on a screen. It is a construction with physical boundaries, weight, and position. A card is not a colored box. It is a container with walls (boundary), an interior (surface), and contents (information). The layout arranges these constructions into spatial relationships that communicate meaning.

**The three-layer hierarchy governs everything.** Every element has: Physical Boundary → Inner Surface → Content. This hierarchy determines how elements are perceived, how they relate, and how they communicate purpose. Layouts are arrangements of these three-layer objects in spatial relationship to each other.

---

## Single Column Layout

The single column is the most fundamental layout—the architectural spine from which all other layouts derive.

```
┌──────────────────────────────────────┐
│                                      │
│ Header                               │
│ (Fixed architectural frame)          │
│                                      │
├──────────────────────────────────────┤
│                                      │
│ Content Area                         │
│ (Max-width: 65ch for readability)    │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │                                  │ │
│ │ Article text flows here          │ │
│ │ Optimal line length: 50-75 chars │ │
│ │                                  │ │
│ └──────────────────────────────────┘ │
│                                      │
├──────────────────────────────────────┤
│                                      │
│ Footer                               │
│ (Supporting architectural frame)     │
│                                      │
└──────────────────────────────────────┘
```

### Step-by-Step Construction

**Step 1: Establish the viewport boundary.** The viewport is the window into infinite space. Everything we see is a portion of that space. The viewport boundary is the first constraint—it defines what is visible and what exists beyond the visible area.

**Step 2: Position the header.** The header is the topmost architectural frame. It occupies a fixed position within the viewport's spatial structure. Its boundary extends the full width of the viewport, establishing the upper boundary of the content space. The header has the heaviest visual weight in the layout—it is the structural foundation.

**Step 3: Position the footer.** The footer is the bottommost architectural frame. It establishes the lower boundary of the content space. The footer exists outside the primary reading flow—it is structural support, not content delivery. Its boundary extends the full width, creating symmetry with the header.

**Step 4: Center the content column.** Content does not fill the entire viewport width. It is constrained to a maximum width of 65 characters—this is the optimal line length for human reading. The content column is centered within the viewport, creating balanced margins on both sides. This centering is not decoration—it is spatial balance that communicates that the content is the primary focus.

**Step 5: Establish the three-layer hierarchy.** Each element (header, content, footer) follows the immutable hierarchy: Physical Boundary (the element's edges) → Inner Surface (the element's background) → Content (the information within). The content column's boundary is defined by its max-width constraint; its surface is the background upon which text rests; its content is the readable text itself.

### Architectural Reasoning

The single column layout communicates **singular focus**. By constraining content to a narrow column centered in the viewport, the layout declares that this content is the primary architectural element. The header and footer exist as structural supports—they frame the content but do not compete with it.

The margins on either side of the content column are not empty space—they are architectural volume. They create the breathing room that allows the content to be perceived as a distinct construction. Without margins, content would merge with the viewport edges, destroying the sense of containment.

**When to use this layout:**
- Articles and long-form reading (where line length is critical)
- Simple forms (where focus is essential)
- Mobile layouts (where width is constrained)
- Focused tasks (where distraction is unacceptable)

**What this layout communicates to the user:** "The content here is singular and important. The surrounding architecture supports it but does not compete with it. You should focus your attention on the central column."

---

## Two Column Layout

The two column layout creates a spatial relationship between primary and secondary content—navigation and context beside content.

```
┌─────────────────────────────────────────────┐
│ Header                                      │
│ (Full-width architectural frame)            │
├────────────┬────────────────────────────────┤
│            │                                │
│ Sidebar    │ Main Content                   │
│            │                                │
│ ┌────────┐ │ ┌────────────────────────────┐ │
│ │ Nav    │ │ │                            │ │
│ │ Item 1 │ │ │ Primary content area       │ │
│ │ Item 2 │ │ │ Max-width: 65ch           │ │
│ │ Item 3 │ │ │                            │ │
│ └────────┘ │ └────────────────────────────┘ │
│            │                                │
└────────────┴────────────────────────────────┘
```

### Step-by-Step Construction

**Step 1: Define the viewport boundary.** Same as the single column—the viewport is the window into infinite space.

**Step 2: Establish the horizontal division.** The viewport is divided into two spatial regions: sidebar (left) and content (right). This division is not arbitrary—it follows the natural reading direction (left-to-right in LTR languages). The sidebar occupies the position the eye encounters first, establishing context before the eye reaches the content.

**Step 3: Construct the sidebar.** The sidebar has a fixed width (typically 240-300px). Its boundary is defined by this width and the full height of the content area. The sidebar contains navigation elements—links, menus, filters. Each navigation item follows the three-layer hierarchy: boundary (the item's edges), surface (the item's background), content (the navigation label).

**Step 4: Construct the main content area.** The content area fills the remaining width. Its boundary is defined by the sidebar's right edge and the viewport's right edge. The content itself is constrained to 65ch maximum width, centered within the available space. This creates margins that communicate containment.

**Step 5: Establish the spatial relationship.** The sidebar and content area share a vertical boundary—this shared boundary is the architectural connection that says "these elements are related." The gutter between them (typically 24-32px) is the spatial gap that communicates "these are distinct constructions but serve the same interface."

### Architectural Reasoning

The two column layout communicates **contextual navigation**. The sidebar provides wayfinding information—where the user is, where they can go, what options are available. The content area provides the information the user is seeking. The spatial relationship between sidebar and content communicates that navigation supports content.

The gutter between sidebar and content is not empty space—it is architectural separation that prevents the two constructions from merging. Without the gutter, the sidebar's boundary would touch the content's boundary, creating ambiguity about where navigation ends and content begins.

**When to use this layout:**
- Documentation (navigation supports content discovery)
- Dashboards (navigation provides context for data)
- Settings pages (navigation organizes configuration categories)
- E-commerce product pages (navigation provides category context)

**What this layout communicates to the user:** "Navigation is available on the left. Content is available on the right. They are related but distinct. Navigation supports content."

---

## Three Column Layout

The three column layout creates a complex spatial structure with navigation, content, and contextual information.

```
┌──────┬──────────────────────────────┬──────┐
│      │                              │      │
│ Nav  │ Main Content                 │ Side │
│      │                              │      │
│ ┌──┐ │ ┌──────────────────────────┐ │ ┌──┐ │
│ │  │ │ │                          │ │ │  │ │
│ │  │ │ │ Primary content area     │ │ │  │ │
│ │  │ │ │ Max-width: 65ch         │ │ │  │ │
│ │  │ │ │                          │ │ │  │ │
│ └──┘ │ └──────────────────────────┘ │ └──┘ │
│      │                              │      │
└──────┴──────────────────────────────┴──────┘
```

### Step-by-Step Construction

**Step 1: Define the viewport boundary.** The viewport remains the window into infinite space.

**Step 2: Establish the tripartite division.** The viewport is divided into three spatial regions: navigation (left), content (center), and context (right). This follows the natural reading pattern—navigation provides wayfinding, content provides information, and context provides supplementary details.

**Step 3: Construct the navigation column.** The navigation column has a fixed width (typically 200-280px). Its boundary extends the full height of the viewport. It contains primary navigation elements—section links, category filters, primary actions. Each element follows the three-layer hierarchy.

**Step 4: Construct the content column.** The content column fills the remaining width minus the context column. It is the primary architectural focus—it has the most visual weight and the most space. Content within is constrained to 65ch maximum width, centered within the column.

**Step 5: Construct the context column.** The context column has a fixed width (typically 200-320px). Its boundary extends the full height of the viewport. It contains supplementary information—related links, metadata, secondary actions. The context column has less visual weight than the navigation column, communicating its secondary importance.

**Step 6: Establish the spatial relationships.** Navigation shares a boundary with content (communicating direct relationship). Content shares a boundary with context (communicating supplementary relationship). Navigation and context do not share a boundary (communicating independence). The gutters between columns create architectural separation.

### Architectural Reasoning

The three column layout communicates **complex spatial hierarchy**. Navigation is the most structured element—it exists at the left edge, providing the spatial framework. Content is the primary focus—it occupies the center, receiving the most visual weight. Context is supplementary—it exists at the right, providing supporting information without competing with content.

The asymmetry of the columns (navigation narrower than content, context narrower than content) communicates hierarchy through size contrast. The largest element is the most important. The smallest elements are the least important.

**When to use this layout:**
- Complex dashboards (navigation, data visualization, metrics)
- Email clients (folder navigation, message list, message detail)
- Social media feeds (navigation, feed, trending/context)
- IDE-like interfaces (file tree, editor, properties panel)

**What this layout communicates to the user:** "Navigation is available on the left. Content is the primary focus in the center. Context is available on the right. Each serves a distinct purpose."

---

## Card Grid Layout

The card grid creates a modular composition of equal-weight elements—each card is an independent architectural unit.

```
┌──────────┬──────────┬──────────┐
│          │          │          │
│ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │
│ │ img  │ │ │ img  │ │ │ img  │ │
│ └──────┘ │ └──────┘ │ └──────┘ │
│          │          │          │
│ Product  │ Product  │ Product  │
│ Name 1   │ Name 2   │ Name 3   │
│          │          │          │
│ $29.99   │ $49.99   │ $39.99   │
│          │          │          │
│ [Add]    │ [Add]    │ [Add]    │
│          │          │          │
└──────────┴──────────┴──────────┘
```

### Step-by-Step Construction

**Step 1: Define the grid container.** The grid container is the architectural boundary that holds all cards. Its boundary extends the full width of the viewport (minus margins). It establishes the spatial framework within which all cards exist.

**Step 2: Establish the column structure.** The grid is divided into equal columns (typically 3-4 on desktop, 2 on tablet, 1 on mobile). Each column has the same width—this equality communicates that each card is equally important. The gutters between columns (typically 16-24px) create architectural separation.

**Step 3: Construct each card.** Each card follows the three-layer hierarchy: Physical Boundary (the card's edges, defined by border or shadow) → Inner Surface (the card's background) → Content (image, title, price, action). The card's boundary is a complete rectangle—it is a self-contained architectural unit.

**Step 4: Establish internal card structure.** Within each card, content is arranged vertically: image at top (visual anchor), title below (semantic identification), price below title (functional information), action at bottom (interactive element). This vertical arrangement follows the natural reading flow.

**Step 5: Establish card relationships.** Cards are related through proximity (they are close together in the grid) and similarity (they have the same structure). These two spatial cues override any visual differences—cards that are structurally identical are perceived as equal, regardless of their content.

### Architectural Reasoning

The card grid communicates **equal importance and modular independence**. Each card is a complete architectural unit—it can exist independently of other cards. The equal column widths communicate that no card is more important than another. The consistent internal structure communicates that all cards serve the same purpose.

The gutters between cards are not empty space—they are the architectural joints that connect the cards into a larger structure. Without gutters, cards would merge into a single mass, destroying the sense of modular independence.

**When to use this layout:**
- Product listings (each product is an equal architectural unit)
- Portfolio galleries (each project is an equal architectural unit)
- Feature showcases (each feature is an equal architectural unit)
- Dashboard widgets (each metric is an equal architectural unit)

**What this layout communicates to the user:** "These items are all equal in importance. Each is a complete unit you can examine independently. They are related but not dependent."

---

## Hero Layout

The hero layout creates a dominant architectural element that commands attention, with subordinate content below.

```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │                                       │  │
│  │ Hero Content                          │  │
│  │ (Large, prominent, heaviest weight)   │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│ Supporting Content                          │
│ ┌──────────┬──────────┬──────────┐          │
│ │ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │          │
│ │ │Card 1│ │ │Card 2│ │ │Card 3│ │          │
│ │ └──────┘ │ └──────┘ │ └──────┘ │          │
│ └──────────┴──────────┴──────────┘          │
│                                             │
└─────────────────────────────────────────────┘
```

### Step-by-Step Construction

**Step 1: Define the viewport boundary.** The viewport is the window into infinite space.

**Step 2: Construct the hero element.** The hero is the largest, most prominent element in the layout. Its boundary spans the full width of the viewport. Its height is significant (typically 40-60% of the viewport height). Its surface is visually distinct—it may use a different background color, larger typography, or more whitespace. The hero has the heaviest visual weight in the entire layout.

**Step 3: Establish the hero's spatial dominance.** The hero occupies the top position—the position the eye encounters first. Its size contrast with surrounding elements communicates that it is the most important element. The whitespace around the hero (margins) create architectural breathing room that further emphasizes its prominence.

**Step 4: Construct the supporting content.** Below the hero, supporting content is arranged in a card grid or other subordinate layout. The supporting content has less visual weight than the hero—smaller elements, less space, more density. This weight contrast communicates hierarchical subordination.

**Step 5: Establish the spatial relationship.** The hero and supporting content share a horizontal boundary (the hero's bottom edge meets the supporting content's top edge). This shared boundary communicates that supporting content is subordinate to the hero—the hero establishes the context, and supporting content elaborates on it.

### Architectural Reasoning

The hero layout communicates **singular dominance and hierarchical subordination**. The hero is the architectural facade—it defines the identity of the space and commands immediate attention. Everything below it is structurally supporting the hero's message.

The hero's size is not decoration—it is spatial communication. The larger an element, the more important it is. The hero's dominant size communicates "this is the most important thing on this page." The supporting content's smaller size communicates "these are secondary—they support the hero's message."

**When to use this layout:**
- Landing pages (the hero establishes the brand identity)
- Feature announcements (the hero showcases the primary feature)
- Marketing pages (the hero communicates the primary value proposition)
- Product launches ( the hero presents the primary product)

**What this layout communicates to the user:** "This is the most important thing on this page. Everything below it supports and elaborates on this primary message."

---

## Split Layout

The split layout creates a dual-space composition where two content areas share the viewport in balanced architectural relationship.

```
┌─────────────────────────────────────────────┐
│                                             │
│ Left Column           │ Right Column        │
│                       │                     │
│ ┌───────────────────┐ │ ┌─────────────────┐ │
│ │                   │ │ │                 │ │
│ │ Form / Input      │ │ │ Preview / Output│ │
│ │ Settings          │ │ │ Result          │ │
│ │ Controls          │ │ │ Live Update     │ │
│ │                   │ │ │                 │ │
│ └───────────────────┘ │ └─────────────────┘ │
│                       │                     │
└───────────────────────┴─────────────────────┘
```

### Step-by-Step Construction

**Step 1: Define the viewport boundary.** The viewport is the window into infinite space.

**Step 2: Establish the horizontal division.** The viewport is divided into two equal (or near-equal) spatial regions. This division creates a balanced composition where both columns have approximately equal visual weight. The balance communicates that both columns are equally important.

**Step 3: Construct the left column.** The left column contains input, controls, or configuration elements. Its boundary is defined by the viewport's left edge and the central gutter. The content within follows the three-layer hierarchy for each input element.

**Step 4: Construct the right column.** The right column contains output, preview, or result elements. Its boundary is defined by the central gutter and the viewport's right edge. The content within reflects the state of the left column's inputs.

**Step 5: Establish the spatial relationship.** The two columns share a central boundary (the gutter). This shared boundary communicates that the columns are directly related—the left column's state determines the right column's content. The gutter creates architectural separation while the shared boundary creates architectural connection.

### Architectural Reasoning

The split layout communicates **bidirectional relationship**. The left column is the control surface—it receives user input. The right column is the result surface—it displays the consequences of that input. The spatial relationship communicates causality: left causes right.

The equal width of the columns communicates that input and output are equally important. The user needs both to complete their task. Neither is subordinate to the other.

**When to use this layout:**
- Form with live preview (input on left, preview on right)
- Editor with output (code on left, rendered output on right)
- Settings with live preview (configuration on left, result on right)
- Comparison views (version A on left, version B on right)

**What this layout communicates to the user:** "These two areas are directly related. Changes in one affect the other. You need both to complete your task."

---

## Responsive Breakpoints

All layouts must adapt to different viewport sizes. Responsiveness is not a feature—it is a spatial necessity. The screen is a window, and windows come in different sizes. The architectural relationships must remain coherent regardless of window size.

| Breakpoint | Columns | Sidebar | Margins | Architectural Strategy |
|------------|---------|---------|---------|------------------------|
| Phone (< 640px) | 1 | Hidden | 16px | Single column, navigation as overlay |
| Tablet (640-1024px) | 2 | Collapsed | 24px | Two column, navigation as drawer |
| Desktop (1024-1440px) | 3 | Visible | 32px | Full architecture, all columns visible |
| Large (> 1440px) | 3+ | Visible | 48px | Expanded architecture, generous margins |

### Responsive Construction Rules

**Rule 1: Progressive enhancement.** Start with the simplest layout (single column) and add complexity as space allows. This follows the principle that space is infinite—the viewport shows a portion of that space, and smaller viewports show less of it. The architectural relationships must remain coherent at any viewport size.

**Rule 2: Content priority.** When columns collapse, the most important content must remain visible. The content column is always the most important—it must never be hidden or deprioritized. Navigation and context are subordinate—they can be hidden or collapsed without destroying the primary content experience.

**Rule 3: Touch adaptation.** On touch devices, interactive elements must be larger. Touch targets require a minimum of 44x44px (the physical size of a human fingertip). This is not a style choice—it is a physical constraint of the input device.

**Rule 4: Margin scaling.** Margins scale with viewport size. Larger viewports have larger margins, creating more breathing room. This communicates that larger spaces deserve more architectural volume. The proportional relationships remain constant—the ratios between margins, gutters, and content widths stay consistent.

### Architectural Reasoning

Responsive design is the spatial expression of the "screen as window" axiom. The viewport is a window into infinite space, and different windows show different amounts of that space. The architectural relationships—hierarchy, proximity, similarity—must remain coherent regardless of how much space is visible.

When a layout responds to viewport size, it is not "adapting"—it is revealing more or less of the same spatial structure. A three-column desktop layout and a single-column mobile layout are the same architecture viewed through different-sized windows. The columns do not disappear—they exit the viewport, continuing to exist in spatial position outside the visible area.

**See also:** [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement, [Grid System](../layout/grid-system.md) — Grid implementation details

---

## Layout and Spatial Hierarchy

Every layout communicates hierarchy through spatial relationships. The arrangement of elements is not arbitrary—it is the architectural expression of importance:

- **Size contrast** — Larger elements are more important. The hero is larger than the cards below it, communicating the hero's dominance.
- **Position contrast** — Top elements are more important. The header is at the top, communicating its structural primacy.
- **Spacing contrast** — Elements with more surrounding whitespace are more important. The hero has more whitespace, communicating its prominence.
- **Boundary contrast** — Elements with heavier borders are more important. The header's border is heavier than the cards' borders, communicating its structural role.

These spatial cues work together to create a coherent hierarchy that users can read without conscious effort. When hierarchy is clear, users feel control. When hierarchy is ambiguous, users feel anxiety.

**See also:** [Composition Rules](../layout/composition-rules.md) — How elements relate spatially, [Object Structure](../spatial-hierarchy/object-structure.md) — The three-layer anatomy

---

## See Also

- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
- [Grid System](../layout/grid-system.md) — Grid implementation
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Object Structure](../spatial-hierarchy/object-structure.md) — The three-layer anatomy
- [Core Principles](../philosophy/core-principles.md) — The axioms of digital space
