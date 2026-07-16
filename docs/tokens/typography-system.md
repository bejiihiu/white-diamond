# Typography System

## Why This Matters

Typography is the voice of the interface. It communicates information, establishes hierarchy, creates rhythm, and guides the eye. Without a defined typography system, text becomes arbitrary—different sizes, weights, and spacings that create visual noise and break reading flow.

WHITE DIAMOND treats typography as an architectural element, not a decorative choice. Every typographic decision—size, weight, line-height, spacing—derives from the spatial model and serves the architectural vision. Typography must be consistent, predictable, and proportional.

---

## Typography as Architecture

### Text Has Mass

In WHITE DIAMOND, text has mass. Larger, bolder text has more mass—it draws attention, communicates importance, and occupies more visual space. Smaller, lighter text has less mass—it recedes, communicates context, and occupies less visual space.

**Mass communicates hierarchy:**
- Large, bold text = Primary information (headings, labels)
- Medium, regular text = Secondary information (body, descriptions)
- Small, light text = Tertiary information (captions, helpers)

### Text Has Boundaries

Every text element has boundaries. A heading has boundaries above and below it. A paragraph has boundaries around its text. A label has boundaries above its input. These boundaries are communicated through spacing, borders, or backgrounds.

**Boundary rules:**
- Text boundaries must be consistent within a view
- Text boundaries must not conflict with element boundaries
- Text boundaries must be sufficient to separate text from adjacent elements
- Text boundaries must be proportional to the text's importance

### Text Has Position

Text occupies specific positions within the spatial structure. Text is not floating in space—it is anchored to grid lines, aligned to edges, and positioned within containers. Position communicates relationship.

**Position rules:**
- Text must align to grid lines or container edges
- Text must be positioned consistently within similar containers
- Text must not overflow its container boundaries
- Text must maintain consistent margins from adjacent elements

---

## The Type Scale

WHITE DIAMOND uses a proportional type scale based on a 1.25 ratio. Each size is exactly 1.25 times the previous size. This ratio produces clear, distinguishable steps without excessive jumps.

### Scale Values

| Token | Size | Usage |
|-------|------|-------|
| `font-size-xs` | 12px | Captions, helper text, metadata |
| `font-size-sm` | 14px | Secondary text, descriptions |
| `font-size-md` | 16px | Body text, primary content |
| `font-size-lg` | 20px | Subheadings, emphasized text |
| `font-size-xl` | 24px | Section headings |
| `font-size-2xl` | 32px | Page headings |
| `font-size-3xl` | 40px | Hero headings |

### Why 1.25 Ratio

The 1.25 ratio produces clear, distinguishable steps. Each size is visibly different from its neighbors, creating a natural hierarchy. The ratio is large enough to create contrast but small enough to maintain proportion.

**Alternatives rejected:**
- 1.125 (minor third): Too small, steps are hard to distinguish
- 1.333 (perfect fourth): Too large, steps feel jumpy
- 1.5 (perfect fifth): Too large, steps feel disconnected
- 2.0 (octave): Way too large, steps feel unrelated

### Scale Application

**Heading hierarchy:**
- H1: `font-size-3xl` (40px) — Page title, one per page
- H2: `font-size-2xl` (32px) — Section heading
- H3: `font-size-xl` (24px) — Subsection heading
- H4: `font-size-lg` (20px) — Card heading
- H5: `font-size-md` (16px) — Group heading
- H6: `font-size-sm` (14px) — Label heading

**Body hierarchy:**
- Primary: `font-size-md` (16px) — Main content
- Secondary: `font-size-sm` (14px) — Supporting content
- Tertiary: `font-size-xs` (12px) — Metadata, captions

---

## Font Weights

Font weight communicates emphasis and hierarchy. Heavier weights draw attention; lighter weights recede.

### Weight Values

| Token | Weight | Usage |
|-------|--------|-------|
| `font-weight-light` | 300 | Large headings, decorative text |
| `font-weight-regular` | 400 | Body text, primary content |
| `font-weight-medium` | 500 | Labels, emphasized text |
| `font-weight-semibold` | 600 | Subheadings, strong emphasis |
| `font-weight-bold` | 700 | Headings, maximum emphasis |

### Weight Rules

- **Primary content:** Regular (400) — Readable, neutral, comfortable
- **Emphasized content:** Medium (500) — Slightly heavier, draws attention
- **Strong emphasis:** Semibold (600) — Clearly heavier, strong emphasis
- **Headings:** Bold (700) — Heaviest, maximum emphasis
- **Large headings:** Light (300) — At large sizes, bold is too heavy

### Weight Consistency

- Similar text elements must use the same weight
- Weight changes must communicate hierarchy, not decoration
- Weight must be sufficient to be perceivable
- Weight must be consistent across similar contexts

---

## Line Height

Line height creates vertical rhythm and readability. Proper line height ensures text is comfortable to read and creates consistent spacing between lines.

### Line Height Values

| Context | Line Height | Ratio |
|---------|-------------|-------|
| Headings | 1.2 | Tight, compact |
| Body text | 1.5 | Comfortable, readable |
| Small text | 1.4 | Slightly tight |
| Code blocks | 1.6 | Loose, distinct lines |

### Line Height Rules

- Headings use tight line height (1.2) for compact, powerful appearance
- Body text uses comfortable line height (1.5) for easy reading
- Small text uses slightly tight line height (1.4) for compact appearance
- Line height must be consistent within a text block

### Why Line Height Matters

**Too tight (1.0-1.1):** Lines overlap visually, creating cluttered, unreadable text. The eye cannot distinguish line boundaries.

**Too loose (2.0+):** Lines feel disconnected, breaking the paragraph's visual unity. The eye struggles to flow from one line to the next.

**Just right (1.4-1.6):** Lines are clearly separated but visually connected. The eye flows naturally from one line to the next.

---

## Letter Spacing

Letter spacing affects readability and visual density. Proper letter spacing ensures text is legible and creates consistent visual texture.

### Letter Spacing Values

| Context | Letter Spacing | Usage |
|---------|---------------|-------|
| Headings | -0.02em | Tight, compact |
| Body text | 0em | Normal, readable |
| Small text | 0.02em | Slightly open |
| Uppercase text | 0.05em | Open, airy |

### Letter Spacing Rules

- Headings use tight letter spacing for compact appearance
- Body text uses normal letter spacing for readability
- Small text uses slightly open letter spacing for legibility
- Uppercase text uses open letter spacing for airy appearance

---

## Font Families

WHITE DIAMOND uses system font stacks for performance and consistency. System fonts are optimized for each platform and provide the best reading experience.

### Font Stack

```
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji";
```

### Font Rules

- Use system fonts for all text
- Do not load custom fonts unless absolutely necessary
- Monospace fonts for code: `"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace`
- Font must be consistent across the entire interface

---

## Text Spacing

Text spacing creates rhythm and hierarchy. Proper spacing ensures text elements are clearly separated and visually organized.

### Spacing Values

| Context | Spacing | Usage |
|---------|---------|-------|
| Between headings | 24-32px | Section separation |
| Between paragraphs | 16px | Paragraph separation |
| Between heading and body | 8-12px | Heading-body relationship |
| Between inline elements | 4-8px | Inline separation |

### Spacing Rules

- Spacing must be proportional to the text's importance
- Spacing must be consistent within a view
- Spacing must not conflict with element boundaries
- Spacing must be sufficient to separate text from adjacent elements

---

## Typography Anti-Patterns

### Inconsistent Weights (Prohibited)

If one heading uses bold, all headings must use bold. Inconsistent weights create visual noise and break hierarchy.

### Inconsistent Sizes (Prohibited)

If body text is 16px in one section, it must be 16px in all sections. Inconsistent sizes break reading flow and reduce scannability.

### Insufficient Contrast (Prohibited)

Text must have sufficient contrast against its background. Low-contrast text is unreadable and inaccessible. Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text.

### Decorative Typography (Prohibited)

Typography must serve a structural, communicative, or rhythmic purpose. Decorative typography—script fonts, decorative weights, artistic layouts—breaks the architectural language.

---

## See Also

- [Text Hierarchy](../typography/text-hierarchy.md) — How typographic properties communicate hierarchy
- [Text in Space](../typography/text-in-space.md) — How text interacts with spatial structure
- [Spacing System](../tokens/spacing-system.md) — Spacing token definitions
- [Color System](../tokens/color-system.md) — Color token definitions for text
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Text accessibility requirements
- [Core Principles](../philosophy/core-principles.md) — The axioms from which typography derives
