# Type System

## Why This Matters

Typography is the primary vehicle for information in most interfaces. Without a coherent type system, text becomes visual noise. The type system defines how text is structured, scaled, and presented to create readable, scannable, and hierarchical content.

## The Role of Typography

Typography serves three purposes in interfaces:
1. **Communication** — Conveying information through text
2. **Hierarchy** — Organizing information by importance
3. **Atmosphere** — Creating visual tone and personality

## Type Scale

The type scale defines the sizes at which text appears. WHITE DIAMOND uses a modular scale based on the golden ratio (approximately 1.618):

### Scale Levels

- **Display** — Hero sections, splash screens, maximum emphasis
- **H1** — Page titles, major section headings
- **H2** — Section headings, card titles
- **H3** — Subsection headings, list group headers
- **H4** — Minor headings, label groups
- **Body** — Regular content, paragraphs
- **Body Small** — Supporting content, secondary text
- **Caption** — Labels, metadata, timestamps
- **Overline** — Category labels, eyebrow text

### Scale Relationships

Each level should be visually distinct from its neighbors:
- **Display to H1** — Noticeable but not dramatic
- **H1 to H2** — Clear hierarchy
- **H2 to H3** — Clear hierarchy
- **H3 to H4** — Subtle hierarchy
- **H4 to Body** — Clear transition from heading to content
- **Body to Body Small** — Subtle size reduction
- **Body Small to Caption** — Clear distinction

## Type Families

### Primary Type Family

The primary type family is used for most interface text:
- **Characteristics** — Highly readable, wide character set, multiple weights
- **Use cases** — Body text, headings, labels, buttons
- **Weights** — Regular, medium, semibold, bold

### Monospace Type Family

The monospace type family is used for code and technical content:
- **Characteristics** — Fixed-width, clear character distinction
- **Use cases** — Code blocks, terminal output, data tables
- **Weights** — Regular, bold

### Decorative Type Family

The decorative type family is used sparingly for emphasis:
- **Characteristics** — Distinctive personality, strong visual impact
- **Use cases** — Logos, hero sections, marketing
- **Weights** — Limited (usually just regular and bold)

## Type Rules

### Rule 1: One Scale, Consistent Application

The same type scale must be used throughout the interface. If Display is 48px in one place, it must be 48px everywhere using Display.

Inconsistent scales create visual chaos.

### Rule 2: Hierarchy Through Size, Not Style

Create hierarchy through size differences, not through decorative styles:
- **Good** — H1 is larger than H2, which is larger than H3
- **Bad** — H1 is bold and italic, H2 is bold and underlined

Size hierarchy is more readable and maintainable.

### Rule 3: Limit Type Families

Use no more than two type families in an interface:
- **Primary** — For most content
- **Monospace** — For code (if needed)

More families create visual noise without adding clarity.

### Rule 4: Consistent Weights

Use type weights consistently:
- **Regular (400)** — Body text, captions
- **Medium (500)** — Labels, emphasis
- **Semibold (600)** — Headings, buttons
- **Bold (700)** — Strong emphasis, primary headings

Never use thin or ultra-bold weights for body text.

### Rule 5: Readable Line Lengths

Text should have appropriate line lengths:
- **Optimal** — 50-75 characters per line
- **Minimum** — 40 characters per line
- **Maximum** — 90 characters per line

Lines too short are choppy; lines too long are hard to track.

## Type Treatments

### Headings

Headings use:
- **Size** — From the type scale
- **Weight** — Semibold or bold
- **Spacing** — Tight letter-spacing
- **Color** — High contrast

### Body Text

Body text uses:
- **Size** — Body or Body Small
- **Weight** — Regular
- **Line height** — 1.5-1.6 (for readability)
- **Color** — Medium contrast

### Labels

Labels use:
- **Size** — Caption or small
- **Weight** — Medium
- **Spacing** — Tight to normal letter-spacing
- **Color** — Medium to low contrast

### Code

Code uses:
- **Family** — Monospace
- **Size** — Slightly smaller than body
- **Weight** — Regular
- **Background** — Subtle background for inline code

## See Also

- [Text Hierarchy](text-hierarchy.md) — Organizing text by importance
- [Text in Space](text-in-space.md) — Typography and spatial relationships
- [Design Tokens](../tokens/design-tokens.md) — Atomic values including type
- [Color System](../tokens/color-system.md) — Text color definitions
- [Spacing System](../tokens/spacing-system.md) — Spacing around text
