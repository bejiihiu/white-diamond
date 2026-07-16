# Type System

## Why This Matters

Typography is not decoration. It is the primary structural element through which information occupies space in a WHITE DIAMOND interface. Every letter, every word, every line of text is an architectural object—mass, boundary, and surface in service of communication. Without a coherent type system, text becomes visual noise: floating fragments without mass, without boundary, without place in the spatial hierarchy. A type system establishes the foundational grammar from which all textual content is constructed, ensuring that every character carries weight, every word occupies space, and every paragraph forms a coherent block within the architectural whole.

The type system is the contract between the designer and the reader. It guarantees that if text appears at a given scale, it will always behave with the same spatial logic. Predictability is control. Control is the experience.

## The Role of Typography in Architectural Space

In WHITE DIAMOND, the screen is a window into a vast architectural space. Every element is an object within that space—something with mass, something with boundaries, something that exists in relation to everything else. Typography is no exception. Text does not "float." Text does not "sit on" backgrounds. Text occupies volume. Text has weight. Text has edges that must respect the edges of containers, surfaces, and adjacent objects.

This is the fundamental distinction between WHITE DIAMOND typography and conventional UI typography. In conventional approaches, typography is treated as a layer on top of a layout. In WHITE DIAMOND, typography is part of the layout—it is geometry, it is mass, it is a construction.

### Typography as Spatial Tool

Typography communicates through four spatial dimensions:

1. **Mass** — Larger text occupies more space, carries more weight, demands more attention. Mass is not merely font size; it is the total volume text occupies including its surrounding whitespace, its line height, its breathing room. Mass communicates importance.

2. **Boundary** — Text has edges. The ascender line, the descender line, the baseline, the cap height—these are the physical boundaries of a typographic object. Text within containers must respect the boundaries of those containers. Padding exists because text needs room to breathe within its architectural enclosure.

3. **Surface** — The surface of text is the area it occupies visually. Dense, heavy text creates a different surface texture than light, airy text. Surface communicates tone: dense surfaces feel urgent; light surfaces feel calm.

4. **Position** — Where text sits in space communicates hierarchy. Top-center text is primary. Bottom-right text is secondary. Position is not arbitrary; it is a spatial declaration of importance.

### Typography as Communication

Beyond spatial presence, typography communicates through its inherent characteristics:

- **Clarity** — The text must be readable. This is non-negotiable. If text cannot be read, it fails its primary architectural purpose.
- **Hierarchy** — The text must establish a clear order of importance. Size, weight, and spacing create a visual ladder the eye climbs.
- **Tone** — The text must convey the character of the interface. Typeface choice, weight distribution, and spacing rhythm all contribute to tone.
- **Consistency** — The text must behave identically across all contexts. If Display text is 48px in one location, it is 48px everywhere. Consistency is predictability. Predictability is control.

## The Type Scale

The type scale is the mathematical foundation of all typographic decisions. It defines a finite set of sizes at which text may appear. No other sizes are permitted. This constraint is not a limitation—it is liberation. The scale removes ambiguity. Every designer, every developer, every stakeholder knows exactly what sizes exist and how they relate to one another.

WHITE DIAMOND uses a modular scale based on the golden ratio (approximately 1.618). The golden ratio is not chosen for aesthetic reasons—it is chosen because it creates a perceptually uniform progression. Each step in the scale feels like the same relative change to the human eye, even though the absolute changes grow larger. This means the visual "distance" between any two adjacent scale levels feels consistent, creating a natural, harmonious rhythm.

### Scale Levels

The scale defines nine levels, each with a specific spatial role:

- **Display** — Hero sections, splash screens, maximum emphasis. Display text is the largest element on any page. It is the architectural focal point—the equivalent of a cathedral's rose window. Display text occupies significant vertical space and demands attention before any other element. Use Display sparingly; overuse destroys its impact.

- **H1** — Page titles, major section headings. H1 is the primary structural heading. It defines the identity of the current view. Every page should have exactly one H1. H1 text is the architectural beam from which all content hangs.

- **H2** — Section headings, card titles. H2 divides content into major sections. Each section is a distinct architectural space with its own internal logic. H2 headings mark the threshold between sections—the doorways in the architectural wall.

- **H3** — Subsection headings, list group headers. H3 creates further subdivision within sections. Where H2 marks the doorway, H3 marks the room divisions. H3 text is smaller, lighter, but still structural—it is the secondary beam supporting the floor above.

- **H4** — Minor headings, label groups. H4 is the smallest structural heading. It groups related content at the finest granularity. H4 is the trim, the detail, the finishing element that completes the structure.

- **Body** — Regular content, paragraphs. Body text is the primary reading material. It is the brickwork of the interface—the repeated, reliable, structural unit that fills the walls. Body text must be optimized for sustained reading: comfortable line height, optimal line length, and consistent spacing.

- **Body Small** — Supporting content, secondary text. Body Small is used for text that supports but does not lead—descriptions, explanatory notes, supplementary information. It occupies less space than Body, signaling its subordinate position in the hierarchy.

- **Caption** — Labels, metadata, timestamps. Caption text is the smallest readable text in the system. It provides essential contextual information without drawing attention to itself. Caption is the annotation, the footnote, the quiet detail that completes the picture.

- **Overline** — Category labels, eyebrow text. Overline is unique: it is small, uppercase text placed above headings to provide categorical context. Overline text is the museum placard—it tells you what section you are in before you read the heading itself.

### Scale Values and Ratios

Each scale level derives from the previous by multiplying by the golden ratio, with adjustments for readability at extreme sizes:

| Level | Size (px) | Ratio | Weight |
|-------|-----------|-------|--------|
| Display | 48 | — | Bold (700) |
| H1 | 32 | 1.50 | Semibold (600) |
| H2 | 24 | 1.33 | Semibold (600) |
| H3 | 20 | 1.20 | Medium (500) |
| H4 | 16 | 1.25 | Medium (500) |
| Body | 16 | 1.00 | Regular (400) |
| Body Small | 14 | 1.14 | Regular (400) |
| Caption | 12 | 1.17 | Regular (400) |
| Overline | 11 | 1.09 | Medium (500) |

The ratios between levels are not perfectly uniform because readability constraints at small sizes and impact requirements at large sizes demand adjustments. The golden ratio provides the guiding principle; human perception provides the refinement.

### Scale Relationships

Each level must be visually distinct from its neighbors. The minimum perceptible difference between adjacent levels is approximately 1.2x. Below this threshold, levels become indistinguishable and the hierarchy collapses. The recommended range is 1.3x to 1.5x—large enough to be immediately apparent, small enough to feel connected.

- **Display to H1** — Noticeable but not dramatic. Display establishes presence; H1 establishes structure. The relationship is one of emphasis, not rupture.
- **H1 to H2** — Clear hierarchy. The page title must always dominate section headings. If H2 approaches H1 in size, the page structure becomes ambiguous.
- **H2 to H3** — Clear hierarchy. Section headings must dominate subsection headings. The boundary between sections must be visible in the typography.
- **H3 to H4** — Subtle hierarchy. These are structural siblings separated by a fine margin. The distinction should be apparent but not jarring.
- **H4 to Body** — Clear transition from heading to content. This is the critical boundary between structure and material. The shift from heading to body must be unmistakable.
- **Body to Body Small** — Subtle size reduction. Body Small is still readable content; it is not a different category, just a subordinate one.
- **Body Small to Caption** — Clear distinction. Caption is the edge of readability. Below Caption, text ceases to function as architecture and becomes noise.

## Type Families

### Primary Type Family

The primary type family is the voice of the interface. It must be:

- **Highly readable** — Optimized for screen rendering at all sizes. X-height must be generous (approximately 70% of cap height) to ensure legibility at small sizes. Character shapes must be distinct—no confusion between I, l, and 1; no confusion between O and 0.
- **Wide character set** — Must support Latin, extended Latin, and common symbols without fallback rendering. Inconsistent character rendering across locales breaks the architectural consistency of text.
- **Multiple weights** — Must provide Regular (400), Medium (500), Semibold (600), and Bold (700) at minimum. Each weight must be optically adjusted for its intended use—Bold must not simply be Regular with thicker strokes; it must be redesigned for its visual impact.
- **Architectural character** — The typeface must feel constructed, deliberate, and timeless. Avoid typefaces that are playful, whimsical, or heavily stylized. The typeface is the material of the interface—like concrete and steel, it must feel solid and permanent.

Recommended criteria for selection: geometric sans-serif or humanist sans-serif with geometric foundations. The typeface should feel modern without being trendy, technical without being cold, precise without being sterile.

### Monospace Type Family

The monospace type family serves code, data, and technical content:

- **Fixed-width** — Every character occupies the same horizontal space. This is non-negotiable for code alignment. Code that misaligns is broken code.
- **Clear character distinction** — Zero must be visually distinct from O. One must be visually distinct from l and I. This is a functional requirement, not an aesthetic preference.
- **Tabular alignment** — Numbers must align vertically in columns. Data tables depend on this alignment for readability.
- **Weights** — Regular (400) and Bold (700) are sufficient. Monospace text does not need the weight range of body text; code emphasizes structure through syntax, not weight.

The monospace family is the industrial material of the interface—the scaffolding, the scaffolding marks, the technical notations that exist alongside the primary architecture.

### Decorative Type Family

The decorative type family exists for specific, limited purposes:

- **Logos** — Brand marks that require distinctive character
- **Hero sections** — Maximum visual impact moments
- **Marketing** — Promotional content that demands personality

This family must be used with extreme restraint. Decorative text is the sculpture in the lobby—present, noticeable, but never competing with the architecture itself. It must have strong visual impact in small doses and must never be used for body text, labels, or any text that must be read quickly and repeatedly.

## Type Rules

### Rule 1: One Scale, Consistent Application

The same type scale must be used throughout the entire interface. If Display is 48px in one location, it is 48px everywhere Display appears. No exceptions. No variations. No "close enough."

Inconsistent scales create visual chaos. When the same nominal size appears at different actual sizes in different contexts, the user loses trust in the hierarchy. The hierarchy becomes unreliable. The interface becomes unpredictable. Unpredictability is the antithesis of control.

Enforcement: Define scale values as design tokens. Reference tokens in all type specifications. Never hardcode pixel values in component definitions.

### Rule 2: Hierarchy Through Size, Not Style

Create hierarchy through size differences, not through decorative styles. Size is the primary spatial communicator; style is secondary and should be reserved for semantic meaning.

- **Correct** — H1 is larger than H2, which is larger than H3. The hierarchy is communicated through mass.
- **Incorrect** — H1 is bold and italic, H2 is bold and underlined, H3 is bold and colored. The hierarchy is communicated through decoration.

Size hierarchy is more readable because size is a spatial property—it communicates importance through the same mechanism as all other spatial elements (proximity, alignment, balance). Style hierarchy is decoration layered on top of layout, which adds visual noise without adding spatial logic.

### Rule 3: Limit Type Families

Use no more than two type families in an interface:

- **Primary** — For all content that must be read: headings, body text, labels, buttons, captions
- **Monospace** — For code and technical content (if the interface includes code)

Three or more families create visual noise. Each additional family introduces a new visual texture, a new set of proportions, a new rhythm. These competing textures fragment the interface. A monolithic type system—single family, single rhythm, single texture—is the architectural ideal.

The decorative family is the exception. It may appear in specific, isolated contexts (logos, hero text) but must never participate in the typographic rhythm of the interface.

### Rule 4: Consistent Weights

Type weights must be used consistently across the entire interface. Each weight has a specific semantic role:

- **Regular (400)** — The foundation weight. Used for body text, captions, descriptions, and any text intended for sustained reading. Regular is the default; it is the material from which the walls are built.
- **Medium (500)** — The emphasis weight. Used for labels, overlines, and text that must be noticed without dominating. Medium is the trim—the detail that distinguishes one section from another without adding structural mass.
- **Semibold (600)** — The structural weight. Used for headings, buttons, and interactive elements that must command attention. Semibold is the beam—it carries weight and defines structure.
- **Bold (700)** — The impact weight. Used sparingly for primary headings, strong emphasis, and maximum visual impact. Bold is the pillar—it anchors the composition and draws the eye.

Never use thin or ultra-bold weights for body text. Thin weights are illegible at small sizes and fail the fundamental requirement of readability. Ultra-bold weights are visually aggressive and destroy the reading rhythm. The weight scale exists within a functional range; going outside that range breaks the system.

### Rule 5: Readable Line Lengths

Text line length directly affects reading comprehension and comfort:

- **Optimal** — 50-75 characters per line. This range minimizes eye movement fatigue while maintaining reading rhythm. The eye can comfortably track from the end of one line to the beginning of the next within this range.
- **Minimum** — 40 characters per line. Below this, lines are too short. The eye must jump too far horizontally, and the reading rhythm becomes choppy. Short lines feel disjointed.
- **Maximum** — 90 characters per line. Above this, lines are too long. The eye struggles to track from the end of one line to the beginning of the next. Long lines feel exhausting.

Line length is a spatial constraint. It must be enforced through `max-width` on text containers. Text without line length constraints is text without boundaries—it is architecture without walls.

## Type Treatments

### Headings

Headings are structural elements. They define the architecture of the content:

- **Size** — From the type scale (H1 through H4)
- **Weight** — Semibold (600) or Bold (700), depending on level
- **Spacing** — Tight letter-spacing (-0.02em to -0.05em). Headings are large; tight spacing creates visual cohesion and density that communicates structural importance.
- **Color** — High contrast. Headings must be immediately readable and must stand out from body text.
- **Line height** — 1.2 to 1.3. Headings are single lines; tight line height creates compact, authoritative blocks.

Headings are the beams and columns of content architecture. They carry weight and define structure.

### Body Text

Body text is the brickwork. It fills the walls:

- **Size** — Body (16px) or Body Small (14px)
- **Weight** — Regular (400)
- **Line height** — 1.5 to 1.6. This range creates comfortable reading rhythm—enough space between lines to prevent crowding, not so much that lines feel disconnected.
- **Color** — Medium contrast. Body text must be readable but should not dominate headings.
- **Line length** — 50-75 characters, enforced through `max-width`.

Body text is the most important typographic element because it carries the most information. Optimize for sustained reading.

### Labels

Labels identify elements. They are the annotations on the architecture:

- **Size** — Caption (12px) or Small (14px)
- **Weight** — Medium (500)
- **Spacing** — Normal to slightly tight (0 to -0.02em). Labels are short; tight spacing improves readability at small sizes.
- **Color** — Medium to low contrast. Labels support content; they do not dominate it.
- **Transform** — Uppercase for overlines; sentence case for field labels.

Labels are the museum placards—the quiet annotations that provide context without drawing attention.

### Code

Code is technical content. It requires specialized treatment:

- **Family** — Monospace type family
- **Size** — Slightly smaller than body (14px for body text, 12px for inline code)
- **Weight** — Regular (400) for code blocks; Medium (500) for inline code
- **Background** — Subtle background for inline code to distinguish it from surrounding text. The background is a boundary—a surface that separates code from prose.
- **Line height** — 1.4 to 1.5. Code requires slightly tighter line height than body text to maintain visual density and alignment.

Code is the scaffolding of the interface—the technical infrastructure that supports the visible architecture. It must be legible, precise, and unambiguous.

## Type and Boundaries

Every typographic element exists within boundaries. The three-layer hierarchy applies to text:

1. **Physical Boundary** — The container that holds text: a card, a modal, a section, a page. Text must never exceed its physical boundary. Overflow is a failure of architecture.

2. **Inner Surface** — The padding within the container. Text must have room to breathe within its boundary. Padding is the space between the wall and the furniture—it prevents text from touching the edges, which creates visual tension and reduces readability.

3. **Content** — The text itself. The text is the material filling the architectural space. It must be sized, spaced, and positioned to respect the boundaries and surfaces that contain it.

Text that ignores boundaries is text without architecture. It floats. It drifts. It becomes noise.

## See Also

- [Text Hierarchy](text-hierarchy.md) — Organizing text by importance and reading order
- [Text in Space](text-in-space.md) — Typography as spatial geometry
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements in space
- [Grid System](../layout/grid-system.md) — Mathematical alignment framework
- [Design Tokens](../tokens/design-tokens.md) — Atomic values including type specifications
- [Color System](../tokens/color-system.md) — Text color definitions and contrast requirements
- [Spacing System](../tokens/spacing-system.md) — Spacing around text elements
