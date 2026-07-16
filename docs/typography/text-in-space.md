# Text in Space

## Why This Matters

Text does not exist in a vacuum. Every character, every word, every paragraph occupies space—and that space is not empty. Space in a WHITE DIAMOND interface is architectural. It is the volume between walls, the gap between columns, the distance between doorways. Text exists within this spatial system, and it must obey the same physical laws as every other element: it has mass, it has boundaries, it exists in relation to everything around it.

Understanding how text interacts with space is essential for creating readable, scannable, and harmonious interfaces. Text that ignores spatial relationships is text without architecture—it floats, it drifts, it becomes noise. Text that respects spatial relationships is text with purpose—it occupies its space deliberately, communicates its importance through mass and position, and integrates seamlessly into the architectural whole.

## Text and Whitespace

Whitespace is not empty space. It is the architectural volume between elements. It is the distance between walls, the gap between columns, the breathing room around a doorway. Whitespace has mass—more whitespace means more visual weight. Whitespace has function—it separates, it groups, it emphasizes.

### How Whitespace Affects Text

Whitespace around text affects four properties:

1. **Readability** — More whitespace improves comprehension. The eye needs room to process text; cramped text forces the eye to work harder. Generous whitespace creates a comfortable reading environment.

2. **Scannability** — Whitespace creates visual landmarks. Large gaps between sections signal section boundaries. Small gaps between related elements signal grouping. The eye uses these landmarks to navigate the content without reading every word.

3. **Emphasis** — More whitespace draws attention. An element surrounded by generous whitespace is more prominent than an element surrounded by tight whitespace. Whitespace is the architectural equivalent of volume: more space equals more importance.

4. **Grouping** — Shared whitespace indicates relationship. Elements close together are perceived as related; elements far apart are perceived as unrelated. Whitespace is the primary mechanism for communicating content relationships.

### Whitespace Rules for Text

The following rules define how whitespace should be applied to text elements:

- **Headings** — More space above than below. Space above a heading marks the start of a new section. Space below is smaller, connecting the heading to its content. This asymmetry signals: "This is where a section begins."

- **Paragraphs** — Consistent space between paragraphs. The gap between paragraphs should be identical throughout the interface. Variable paragraph spacing creates an irregular rhythm that disrupts reading flow.

- **Lists** — Space between items, less space within items. The gap between list items is the boundary between items. The gap within an item (between title and description) is the internal structure. External gaps are larger than internal gaps.

- **Captions** — Less space. Captions should be close to what they describe—within 4-8px of their parent element. Captions that are too far from their parent become orphaned annotations rather than supporting text.

## Text and Boundaries

Every text element exists within boundaries. In WHITE DIAMOND, the three-layer hierarchy applies to all objects, including text containers:

### Physical Boundary

The physical boundary is the container that holds text: a card, a modal, a section, a page. The boundary defines the maximum extent of the text—it is the wall that the text cannot exceed.

Boundary rules:
- **Never let text touch edges** — Always use padding. Text that touches container edges creates visual tension and reduces readability. The boundary is a wall; text must not pass through walls.
- **Control line length** — Use `max-width` on text containers. Text without line length constraints is text without boundaries—architecture without walls.
- **Handle overflow** — When text exceeds its boundary, use ellipsis (for single-line truncation), wrapping (for multi-line content), or scrolling (for large content). Overflow is a failure of architecture—plan for the content you will receive.
- **Maintain alignment** — Text should align to the grid or to other text elements. Misaligned text is text without structure—it floats outside the architectural system.

### Inner Surface

The inner surface is the padding between the physical boundary and the text. Padding creates breathing room—it is the space between the wall and the furniture.

Surface rules:
- **Minimum padding** — 16px on all sides for standard containers. This is the minimum distance between text and the boundary.
- **Generous padding** — 24-32px for prominent containers. Hero sections, modals, and featured cards should have more padding to signal their importance.
- **Asymmetric padding** — Can be used for specific effects (e.g., more padding on top for header areas), but must be consistent across similar containers.
- **Padding and hierarchy** — Higher-hierarchy containers should have more padding. More space equals more importance.

### Content

The content is the text itself—the material filling the architectural space. The content must be sized, spaced, and positioned to respect the boundaries and surfaces that contain it.

Content rules:
- **Text fills the boundary** — Content should extend to fill the available space (respecting padding). Text that does not fill its boundary creates dead space—architecture without material.
- **Text respects alignment** — Content should align to the grid, to other text elements, or to the boundary edges. Alignment creates order.
- **Text communicates through mass** — The size and weight of content communicates importance. Larger, heavier content is more important. This is the spatial hierarchy.

## Text and Grid

Text alignment to the grid creates order, consistency, and visual rhythm. The grid is the invisible architectural framework—the steel beams that support the visible structure.

### Grid Alignment Rules

- **Left-aligned text** — Align to the left grid line. This is the default alignment for LTR languages. Left-aligned text creates a strong vertical edge that the eye can follow.
- **Right-aligned text** — Align to the right grid line. Right alignment is used for specific contexts (RTL languages, numeric data, timestamps). Right-aligned text creates a strong vertical edge on the right.
- **Centered text** — Center within the grid column. Center alignment is reserved for headings, hero text, and short-form content. Centered text has no strong vertical edge; it must be short enough that the eye can track it without a reference line.
- **Full-width text** — Span multiple columns. Full-width text is used for paragraphs, descriptions, and any text that must be read continuously. Full-width text creates a horizontal rhythm that fills the available space.

### Baseline Alignment

Text baselines should align across columns. When text in adjacent columns shares a baseline, the layout feels intentional and precise. Baseline alignment is the typographic equivalent of grid alignment—it creates horizontal order across vertical divisions.

Baseline rules:
- **Body text baselines** — Align across columns. This is the most critical alignment for multi-column layouts.
- **Heading baselines** — Align when headings appear in adjacent columns.
- **Mixed content** — When text of different sizes appears in the same row, align to the baseline of the largest text.

## Text Spacing

Text spacing is the internal architecture of typographic objects. Line height, letter spacing, and word spacing define how characters relate to each other within a line and how lines relate to each other within a paragraph.

### Line Height

Line height (leading) is the vertical distance between baselines. It is the architectural equivalent of ceiling height—it defines how much breathing room each line has.

Line height affects readability:
- **Too tight** (< 1.4) — Lines feel cramped. The descenders of one line may touch the ascenders of the next. The eye struggles to track from the end of one line to the beginning of the next. Cramped text is exhausting to read.
- **Optimal** (1.5-1.6) — Lines are comfortable. Each line has enough room to breathe without feeling disconnected. The eye moves smoothly from line to line. Comfortable text is effortless to read.
- **Too loose** (> 1.8) — Lines feel disconnected. The eye loses track of which line follows which. Loose text creates a fragmented reading experience.

Line height rules by text type:
- **Body text** — 1.5-1.6. This is the primary reading environment; optimize for sustained reading.
- **Headings** — 1.2-1.3. Headings are typically single lines; tight line height creates compact, authoritative blocks.
- **Captions** — 1.3-1.4. Captions are short; moderate line height creates readable but compact text.
- **Code** — 1.4-1.5. Code requires visual density for alignment; moderate line height maintains density without cramping.

### Letter Spacing

Letter spacing (tracking) is the horizontal distance between characters. It is the architectural equivalent of the gap between bricks—it defines the density and texture of the text surface.

Letter spacing affects readability:
- **Too tight** — Characters blend together. The eye cannot distinguish individual characters, especially at small sizes. Tight tracking creates visual mush.
- **Normal** — Characters are distinct. Each character is readable without effort. Normal tracking is the default for all text.
- **Too loose** — Words feel disconnected. The eye must work harder to assemble characters into words. Loose tracking fragments the reading experience.

Letter spacing rules by text type:
- **Body text** — Normal (0). Body text must be optimized for sustained reading; any deviation from normal tracking disrupts the reading rhythm.
- **Headings** — Slightly tight (-0.02em to -0.05em). Headings are large; tight tracking creates visual cohesion and density that communicates structural importance. Large text can handle tighter tracking because the characters are already large enough to be distinct.
- **Captions** — Normal to slightly loose (0 to 0.02em). Captions are small; normal or slightly loose tracking ensures readability at small sizes.
- **Overlines** — Loose (0.05em to 0.1em). Overlines are uppercase text that must be readable at small sizes. Loose tracking creates space between uppercase characters, which are naturally wider and more angular than lowercase.

### Word Spacing

Word spacing is the horizontal distance between words. It is the architectural equivalent of the gap between rooms—it defines the boundaries between semantic units.

Word spacing rules:
- **Body text** — Normal. Word spacing should not be modified for body text. The default word spacing in the typeface is designed for optimal reading.
- **Headings** — Normal to slightly tight. Headings can handle slightly tighter word spacing because they are read quickly and do not require sustained reading.
- **Captions** — Normal. Captions are short; normal word spacing ensures readability.

## Text Color and Contrast

Text color and contrast are surface properties—they define how text appears against its background. In WHITE DIAMOND, contrast is a spatial property: higher contrast equals more visual presence equals more importance.

### Contrast Requirements

Text contrast affects readability and hierarchy:

- **High contrast** (7:1+) — Maximum readability. Use for body text, headings, and any text that must be read quickly and reliably. High contrast text is the architectural equivalent of a load-bearing wall—it must be immediately visible.
- **Medium contrast** (4.5:1+) — Good readability. Use for labels, captions, and supporting text. Medium contrast text is the architectural equivalent of a partition wall—it is visible but not dominant.
- **Low contrast** (3:1+) — Acceptable for large text only. Use sparingly for decorative text or disabled states. Low contrast text is the architectural equivalent of a detail—it exists for those who look for it.
- **Insufficient** (< 3:1) — Unreadable for many users. Never use. Text that cannot be read is text that has failed its architectural purpose.

### Contrast Rules

- **Body text** — High contrast. This is the primary reading material; it must be maximally readable.
- **Headings** — High contrast. Headings are structural; they must be immediately visible.
- **Labels** — Medium to high contrast. Labels support content; they must be readable but not dominant.
- **Captions** — Medium contrast. Captions are annotations; they must be readable without drawing attention.
- **Disabled text** — Low contrast (but still ≥ 3:1). Disabled text signals that the element is not interactive. Low contrast communicates "not now" without removing the text from the visual field.

### Color Meaning

Text color communicates semantic meaning:

- **Default** — Regular content. The primary text color.
- **Muted** — Secondary content. A reduced-contrast variant of the primary text color.
- **Accent** — Links, interactive elements. A distinct color that signals interactivity.
- **Success** — Positive outcomes. Green-toned text that signals completion or correctness.
- **Warning** — Caution needed. Yellow-toned text that signals attention.
- **Error** — Problems occurred. Red-toned text that signals failure.
- **Info** — Informational content. Blue-toned text that signals additional context.

Color rules:
- **Don't rely solely on color** — Always pair with other indicators (icons, text, patterns). Color-blind users may not perceive color differences.
- **Maintain contrast** — Colored text must still meet contrast requirements. A beautiful color that cannot be read is a failed color.
- **Use consistently** — Same color, same meaning everywhere. If red means "error" in one place, it means "error" everywhere. Inconsistent color meaning is the architectural equivalent of a door that sometimes opens and sometimes doesn't—it destroys trust.
- **Consider context** — Color meaning can vary by culture. Green may mean "go" in one culture and "nature" in another. Use color that communicates the intended meaning to the intended audience.

## Text and Typography

### Font Size and Space

Larger text needs more space. This is a fundamental spatial principle: larger objects occupy more volume, and volume requires room.

- **Display** — Extra large margins, prominent position. Display text is the largest element on the page; it must be surrounded by generous whitespace to maintain its prominence.
- **H1** — Large margins, clear section start. H1 text defines the page identity; it must be clearly separated from all other content.
- **H2** — Moderate margins, section start. H2 text divides the page; it must be separated from adjacent sections.
- **H3** — Standard margins, subsection start. H3 text divides sections; it must be separated from adjacent subsections.
- **Body** — Standard margins, comfortable reading. Body text is the primary reading material; it must be optimized for sustained reading.
- **Caption** — Small margins, close to content. Caption text supports other content; it must be close to what it describes.

### Font Weight and Space

Heavier text can handle less space. Bold text is more visible, more commanding, and requires less breathing room to be effective.

- **Bold** — Slightly less space needed. Bold text is visually dominant; it does not need as much whitespace to be effective.
- **Medium** — Standard space. Medium text is moderately visible; standard spacing applies.
- **Regular** — Standard space. Regular text is the baseline; standard spacing applies.
- **Light** — More space needed. Light text is less visible; more whitespace compensates for reduced visual presence.

### Font Style and Space

Special styles need special treatment:

- **Italic** — Slightly more space. Italic text is distinctive; it needs room to be recognized as a separate style.
- **Underlined** — More space below. The underline adds visual height to the text; additional space below prevents the underline from colliding with adjacent content.
- **Strikethrough** — Standard space. Strikethrough is subtle; it does not require additional space.
- **ALL CAPS** — More letter spacing. Uppercase characters are wider and more angular than lowercase; additional letter spacing improves readability.

## Text as Architectural Object

In WHITE DIAMOND, every text element is an architectural object. It has mass (size and weight), boundary (edges and padding), surface (color and contrast), and position (location in the layout). The text is not "on top of" the layout—the text is part of the layout.

This architectural perspective means:

- **Text occupies volume** — A paragraph is not a line of characters; it is a rectangular volume that fills its container. The paragraph has width (constrained by `max-width`), height (determined by line height and line count), and depth (implied by contrast and color).

- **Text has edges** — The ascender line, descender line, baseline, cap height, and x-height define the physical boundaries of text. These edges must respect the edges of containers and adjacent elements.

- **Text communicates through spatial relationships** — The relationship between text and its surrounding space communicates meaning. Close text means relationship; far text means separation. Large text means importance; small text means subordination.

- **Text obeys physics** — Text must obey the spatial laws defined in [Composition Rules](../layout/composition-rules.md): proximity creates relationship, alignment creates order, contrast creates hierarchy, balance creates stability.

## See Also

- [Type System](type-system.md) — Typographic foundations and scale definitions
- [Text Hierarchy](text-hierarchy.md) — Organizing text by importance and reading order
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Color System](../tokens/color-system.md) — Color definitions and contrast requirements
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements in space
- [Grid System](../layout/grid-system.md) — Mathematical alignment framework
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial architecture
