# Text Hierarchy

## Why This Matters

Without clear text hierarchy, users cannot scan content. They must read every word to find what they need, which is cognitively expensive and architecturally chaotic. Text hierarchy creates visual landmarks that guide the eye, establish importance, and enable rapid comprehension. In WHITE DIAMOND, text hierarchy is not a visual effect—it is a spatial declaration. The hierarchy tells the user: this element is massive and important; this element is small and supporting. The user should never have to guess which text matters most.

Hierarchy is the organizing principle of architectural space. Without it, every element competes for attention, and the result is noise. With it, the interface has structure, the content has order, and the user has control.

## The Architectural Basis of Text Hierarchy

Text hierarchy in WHITE DIAMOND is grounded in the principle that every element is an architectural construction. Each text element has mass, boundary, and position in space. The hierarchy is communicated through these spatial properties:

- **Mass** — Larger text occupies more space and carries more visual weight. Mass is the primary communicator of importance.
- **Boundary** — Higher-hierarchy elements have more whitespace around them, creating clearer boundaries. More space equals more importance.
- **Position** — Higher-hierarchy elements occupy more prominent positions in the layout. Top and center are primary; bottom and periphery are secondary.
- **Surface** — Higher-hierarchy elements have higher contrast with their background. Higher contrast equals more visual presence.

These four properties—mass, boundary, position, and surface—work together to create a spatial hierarchy that is immediately comprehensible. The user sees the hierarchy before reading a single word.

## Hierarchy Levels

WHITE DIAMOND defines six hierarchy levels. Each level has specific spatial characteristics, specific typographic treatments, and specific roles in the content architecture. No text element exists outside these levels.

### Level 1: Primary Content

The most important text on the page. This text defines the identity of the current view and is the first element the user encounters.

- **Page title** — What this page is about. The H1 heading. The architectural beam from which all content hangs.
- **Hero text** — The main message. Display-sized text that commands the viewport.
- **Primary CTA** — The main action. The single most important interactive element.

Spatial characteristics:
- **Largest size** — Display or H1 from the type scale
- **Highest contrast** — Near-black on white, or white on dark backgrounds. Maximum legibility.
- **Most prominent position** — Top of the viewport, center of the composition
- **Most whitespace** — Generous margins on all sides. Primary content breathes.
- **Most mass** — Occupies the largest visual area of any text element

The primary content is the facade of the building—the element that defines the structure's identity and is visible from the greatest distance.

### Level 2: Section Content

Important content that organizes the page into distinct sections. This text creates the major divisions of the content architecture.

- **Section headings** — H2 headings that define what each section is about
- **Card titles** — The heading of each card or container
- **Primary labels** — The label of each major field or input

Spatial characteristics:
- **Large size** — H2 from the type scale (smaller than H1 but still substantial)
- **High contrast** — Clearly readable, though slightly less prominent than primary
- **Clear position** — At the start of each section, marking the threshold
- **Moderate whitespace** — More space above than below (section start indicator)
- **Substantial mass** — Occupies significant visual area, but less than primary

Section content is the floor divisions of the building—each floor is a distinct space with its own identity, but each floor is part of the same structure.

### Level 3: Subsection Content

Supporting content within sections. This text further subdivides the content without competing with section headings.

- **Subsection headings** — H3 headings that define subsections
- **List group headers** — Headers for groups of related list items
- **Secondary labels** — Labels for secondary fields or details

Spatial characteristics:
- **Medium size** — H3 from the type scale
- **Medium contrast** — Readable but not dominant
- **Position within sections** — Nested under section headings
- **Some whitespace** — Moderate margins, less than section headings
- **Moderate mass** — Visible but not commanding

Subsection content is the room divisions within a floor—each room is distinct, but each room is part of the same floor.

### Level 4: Body Content

The main readable content. This text carries the information the user came to consume.

- **Paragraphs** — Regular text content that tells the story
- **Descriptions** — Supporting information that explains context
- **Instructions** — How-to text that guides the user

Spatial characteristics:
- **Body size** — Body (16px) from the type scale
- **Medium contrast** — Comfortable reading contrast, not straining
- **Optimal line length** — 50-75 characters, enforced through `max-width`
- **Comfortable line height** — 1.5-1.6, optimized for sustained reading
- **Standard mass** — Fills the content area, the brickwork of the architecture

Body content is the brickwork of the building—repeated, reliable, structural. It fills the walls and creates the habitable space.

### Level 5: Supporting Content

Secondary information that supports the main content. This text provides context without competing with primary content.

- **Captions** — Image descriptions, figure annotations
- **Metadata** — Dates, authors, categories, timestamps
- **Helper text** — Additional context for forms and inputs

Spatial characteristics:
- **Small size** — Body Small (14px) or Caption (12px)
- **Lower contrast** — Muted but still readable
- **Close proximity** — Positioned directly next to what it supports
- **Minimal whitespace** — Small margins, close association with parent content
- **Small mass** — Barely visible as a distinct element, but present

Supporting content is the annotation on the blueprint—essential for understanding, but never competing with the structure itself.

### Level 6: Tertiary Content

Least important content. This text exists for completeness but should never draw attention from more important elements.

- **Timestamps** — When something happened
- **Labels** — Categorization, tags, metadata
- **Overlines** — Eyebrow text above headings

Spatial characteristics:
- **Smallest size** — Caption (12px) or Overline (11px)
- **Lowest contrast** — Muted, receding into the background
- **Minimal prominence** — Small, unobtrusive, quiet
- **No extra whitespace** — Tight spacing, close to adjacent elements
- **Minimal mass** — Nearly invisible as a distinct element

Tertiary content is the fine print—the detail that exists for those who look for it, but that never interrupts the reading experience.

## Hierarchy Rules

### Rule 1: Maximum Three Levels Visible

At most three hierarchy levels should be visible simultaneously. More levels create visual noise and reduce scanability. When the eye must process more than three distinct sizes, weights, and spacings, it cannot form a clear mental model of the content structure.

When more levels are needed, use progressive disclosure. Reveal additional hierarchy levels on demand—expand sections, show details on click, or paginate content. The user should never see the full depth of the hierarchy at once.

This rule is architectural: a building with six visible floor divisions in a single view is chaos. The eye needs time to process each level before encountering the next.

### Rule 2: Clear Size Differences

Adjacent hierarchy levels must have clear size differences. The eye must be able to distinguish one level from another instantly, without measurement or comparison.

- **Minimum ratio** — 1.2x between levels. Below this, levels are perceptually identical and the hierarchy collapses.
- **Recommended ratio** — 1.3-1.5x between levels. This range provides clear distinction while maintaining visual connection.
- **Maximum ratio** — 2x between levels (for dramatic emphasis). This ratio is reserved for the gap between primary content and all other levels. It creates a dramatic architectural break.

Ratios below 1.2x are indistinguishable to the human eye. Ratios above 2x feel disconnected—the elements appear to belong to different systems rather than different levels of the same system.

### Rule 3: Consistent Treatment

The same hierarchy level must be treated identically throughout the interface. Every H2 must have the same size, weight, color, and spacing. Every caption must look like every other caption. No exceptions.

- **Same size** — Same point size everywhere
- **Same weight** — Same font weight everywhere
- **Same color** — Same color treatment everywhere
- **Same spacing** — Same surrounding space everywhere

Inconsistent treatment breaks the hierarchy system. If one H2 is 24px and another is 20px, the user cannot trust the hierarchy. If one caption is gray and another is black, the hierarchy becomes unreliable. Unreliable hierarchy is worse than no hierarchy—it actively misleads the user.

### Rule 4: Contrast Reinforces Hierarchy

Higher hierarchy levels should have higher contrast with their background. Contrast is a surface property—it communicates visual presence.

- **Primary** — Highest contrast (near-black on white or white on dark). Maximum visual presence.
- **Secondary** — High contrast. Clear presence, slightly reduced from primary.
- **Tertiary** — Medium contrast. Present but not dominant.
- **Quaternary** — Lower contrast. Receding, background, supporting.

Low contrast for low hierarchy reduces visual noise. When every element has the same contrast, they all compete for attention. When contrast varies with hierarchy, the important elements dominate and the supporting elements recede.

### Rule 5: Position Reinforces Hierarchy

Higher hierarchy levels should occupy more prominent positions in the layout. Position is a spatial property—it communicates importance through placement.

- **Top** — More important. The eye scans from top to bottom; top elements are seen first.
- **Center** — More important. The optical center of any composition attracts the eye.
- **Left** — More important (in LTR languages). The eye starts at the left.
- **Standalone** — More important. Elements surrounded by whitespace have more prominence than elements crowded together.

Position communicates importance without size changes. A small element at the top-center of a page can be more prominent than a large element at the bottom-left. Position is the spatial equivalent of volume: it amplifies or diminishes the message of size and contrast.

### Rule 6: Hierarchy Communicates Information Architecture

The visible text hierarchy must mirror the underlying information architecture. If the information architecture has three levels (page → section → subsection), the text hierarchy must have three visible levels. If the information architecture has six levels, the text hierarchy must have six levels—but only three visible at any time.

The hierarchy is not decoration. It is not a visual effect applied after the content is written. The hierarchy is the content architecture made visible. Every level of the hierarchy corresponds to a level of the information architecture. If they diverge, the user receives conflicting signals—and conflicting signals are the enemy of control.

## Hierarchy Patterns

### Article Pattern

For long-form content with deep structure:

```
H1: Article Title
  H2: Section Heading
    H3: Subsection Heading
      Body: Paragraph text
        Caption: Supporting text
```

This pattern follows the architectural model of building → floor → room → wall → detail. Each level is contained within the previous level. The hierarchy is linear and predictable.

### Card Pattern

For card-based content with equal-weight items:

```
H2: Card Title
  Body: Card description
    Caption: Metadata
```

Each card is an independent architectural unit. Cards are equal in hierarchy; the hierarchy exists within each card, not between cards. This pattern creates grid-like compositions where each cell has identical internal structure.

### Form Pattern

For form interfaces with input hierarchy:

```
H3: Section Title
  Label: Field name
    Body: Field value or input
      Caption: Helper text
```

Forms are the most structured content type. The hierarchy is vertical and sequential—each field is a step in a process. The label is the architectural sign; the input is the architectural space; the helper text is the annotation.

### List Pattern

For list-based content with repeated structure:

```
H3: List Group Header
  H4: List Item Title
    Body: List item description
      Caption: Metadata
```

Lists are repetitive architectural constructions. Each item is identical in structure; the hierarchy exists within each item. The group header is the section divider; each list item is a room within that section.

## Hierarchy and Spatial Relationships

Text hierarchy does not exist in isolation. It interacts with spatial relationships defined in [Composition Rules](../layout/composition-rules.md):

- **Proximity** — Higher-hierarchy text should be farther from lower-hierarchy text (more whitespace = more importance). Lower-hierarchy text should be close to what it supports (less whitespace = closer relationship).

- **Alignment** — All text at the same hierarchy level should align to the same grid line. This creates visual consistency and reinforces the hierarchy through positional repetition.

- **Grouping** — Text at the same hierarchy level within a section should be grouped together. Groups of text at different hierarchy levels should be separated by whitespace proportional to their hierarchical distance.

- **Flow** — The hierarchy should guide the eye through the content in a predictable order. The eye should move from Level 1 to Level 2 to Level 3, never jumping or backtracking unexpectedly.

These spatial relationships are defined in [Text in Space](text-in-space.md) and [Spatial Layout](../layout/spatial-layout.md).

## Hierarchy and Type Scale

The hierarchy levels correspond to specific scale levels defined in [Type System](type-system.md):

| Hierarchy Level | Scale Level | Weight | Contrast |
|----------------|-------------|--------|----------|
| Level 1 | Display, H1 | Bold, Semibold | Highest |
| Level 2 | H2 | Semibold | High |
| Level 3 | H3 | Medium | Medium |
| Level 4 | Body | Regular | Medium |
| Level 5 | Body Small, Caption | Regular | Lower |
| Level 6 | Caption, Overline | Regular, Medium | Lowest |

The type scale is the mathematical expression of the hierarchy. The hierarchy is the spatial expression of the type scale. They are two views of the same system.

## See Also

- [Type System](type-system.md) — Typographic foundations and scale definitions
- [Text in Space](text-in-space.md) — Typography as spatial geometry
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements in space
- [Color System](../tokens/color-system.md) — Text color definitions and contrast requirements
- [Spacing System](../tokens/spacing-system.md) — Spacing values around text elements
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial architecture
