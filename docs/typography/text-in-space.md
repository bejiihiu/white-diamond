# Text in Space

## Why This Matters

Text does not exist in isolation—it exists within spatial relationships with other elements. Understanding how text interacts with space ensures readability, scannability, and visual harmony.

## Text and Space Relationships

### Text and Whitespace

Whitespace around text affects:
- **Readability** — More space improves comprehension
- **Scannability** — Space creates visual landmarks
- **Emphasis** — More space draws attention
- **Grouping** — Shared space indicates relationship

Whitespace rules:
- **Headings** — More space above than below (creates section start)
- **Paragraphs** — Consistent space between paragraphs
- **Lists** — Space between items, less space within items
- **Captions** — Less space (close to what they describe)

### Text and Boundaries

Text boundaries affect:
- **Line length** — Optimal is 50-75 characters
- **Padding** — Text needs space from container edges
- **Margins** — Text blocks need space from other elements
- **Overflow** — What happens when text exceeds boundaries

Boundary rules:
- **Never let text touch edges** — Always use padding
- **Control line length** — Use max-width for readability
- **Handle overflow** — Ellipsis, wrap, or scroll appropriately
- **Maintain alignment** — Text should align to grid or other text

### Text and Grid

Text alignment to grid affects:
- **Readability** — Aligned text is easier to scan
- **Consistency** — Aligned text creates visual order
- **Hierarchy** — Grid position communicates importance
- **Relationship** — Aligned text appears related

Grid rules:
- **Left-aligned text** — Align to left grid line
- **Right-aligned text** — Align to right grid line
- **Centered text** — Center within grid column
- **Full-width text** — Span multiple columns

## Text Spacing

### Line Height

Line height affects readability:
- **Too tight** (< 1.4) — Lines feel cramped, hard to read
- **Optimal** (1.5-1.6) — Lines are comfortable, easy to read
- **Too loose** (> 1.8) — Lines feel disconnected, hard to track

Line height rules:
- **Body text** — 1.5-1.6
- **Headings** — 1.2-1.3
- **Captions** — 1.3-1.4
- **Code** — 1.4-1.5

### Letter Spacing

Letter spacing affects readability:
- **Too tight** — Characters blend together
- **Normal** — Characters are distinct
- **Too loose** — Words feel disconnected

Letter spacing rules:
- **Body text** — Normal (0)
- **Headings** — Slightly tight (-0.02 to -0.05)
- **Captions** — Normal to slightly loose (0 to 0.02)
- **Overlines** — Loose (0.05 to 0.1)

### Word Spacing

Word spacing affects readability:
- **Too tight** — Words blend together
- **Normal** — Words are distinct
- **Too loose** — Sentence feels disjointed

Word spacing rules:
- **Body text** — Normal
- **Headings** — Normal to slightly tight
- **Captions** — Normal

## Text Color

### Contrast

Text contrast affects readability:
- **High contrast** (7:1+) — Maximum readability
- **Medium contrast** (4.5:1+) — Good readability
- **Low contrast** (3:1+) — Acceptable for large text
- **Insufficient** (< 3:1) — Unreadable for many users

Contrast rules:
- **Body text** — High contrast
- **Headings** — High contrast
- **Labels** — Medium to high contrast
- **Captions** — Medium contrast
- **Disabled text** — Low contrast (but still readable)

### Color Meaning

Text color communicates meaning:
- **Default** — Regular content
- **Muted** — Secondary content
- **Accent** — Links, interactive elements
- **Success** — Positive outcomes
- **Warning** — Caution needed
- **Error** — Problems occurred
- **Info** — Informational content

Color rules:
- **Don't rely solely on color** — Always pair with other indicators
- **Maintain contrast** — Colored text must still be readable
- **Use consistently** — Same color, same meaning everywhere
- **Consider context** — Color meaning can vary by culture

## Text and Typography

### Font Size and Space

Larger text needs more space:
- **Display** — Extra large margins, prominent position
- **H1** — Large margins, clear section start
- **H2** — Moderate margins, section start
- **H3** — Standard margins, subsection start
- **Body** — Standard margins, comfortable reading
- **Caption** — Small margins, close to content

### Font Weight and Space

Heavier text can handle less space:
- **Bold** — Slightly less space needed (more visible)
- **Medium** — Standard space
- **Regular** — Standard space
- **Light** — More space needed (less visible)

### Font Style and Space

Special styles need special treatment:
- **Italic** — Slightly more space (distinctive)
- **Underlined** — More space below (line adds height)
- **Strikethrough** — Standard space (subtle)
- **ALL CAPS** — More letter spacing (readability)

## See Also

- [Type System](type-system.md) — Typography foundations
- [Text Hierarchy](text-hierarchy.md) — Organizing text by importance
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Color System](../tokens/color-system.md) — Color definitions
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
