# Text Hierarchy

## Why This Matters

Without clear text hierarchy, users cannot scan content. They must read everything to find what they need, which is cognitively expensive. Text hierarchy creates visual landmarks that guide the eye and enable rapid comprehension.

## The Purpose of Text Hierarchy

Text hierarchy serves three functions:
1. **Scanning** — Users can quickly find relevant sections
2. **Comprehension** — Users can understand content structure
3. **Emphasis** — Users can identify important information

## Hierarchy Levels

### Level 1: Primary Content

The most important text on the page:
- **Page title** — What this page is about
- **Hero text** — The main message
- **Primary CTA** — The main action

Characteristics:
- Largest size
- Highest contrast
- Most prominent position
- Most whitespace

### Level 2: Section Content

Important content that organizes the page:
- **Section headings** — What this section is about
- **Card titles** — What this card contains
- **Primary labels** — What this field is

Characteristics:
- Large size (smaller than primary)
- High contrast
- Clear position (at section starts)
- Moderate whitespace

### Level 3: Subsection Content

Supporting content within sections:
- **Subsection headings** — What this subsection is about
- **List group headers** — What this group contains
- **Secondary labels** — What this detail is

Characteristics:
- Medium size
- Medium contrast
- Position within sections
- Some whitespace

### Level 4: Body Content

The main readable content:
- **Paragraphs** — Regular text content
- **Descriptions** — Supporting information
- **Instructions** — How to do something

Characteristics:
- Body size
- Medium contrast
- Optimal line length (50-75 chars)
- Comfortable line height (1.5-1.6)

### Level 5: Supporting Content

Secondary information that supports the main content:
- **Captions** — Image descriptions
- **Metadata** — Dates, authors, categories
- **Helper text** — Additional context

Characteristics:
- Small size
- Lower contrast
- Close to what it supports
- Minimal whitespace

### Level 6: Tertiary Content

Least important content:
- **Timestamps** — When something happened
- **Labels** — Categorization
- **Overlines** — Eyebrow text

Characteristics:
- Smallest size
- Lowest contrast
- Minimal prominence
- No extra whitespace

## Hierarchy Rules

### Rule 1: Maximum Three Levels Visible

At most three hierarchy levels should be visible at once. More levels create visual noise and reduce scanability.

When more levels are needed, use progressive disclosure.

### Rule 2: Clear Size Differences

Adjacent hierarchy levels must have clear size differences:
- **Minimum ratio** — 1.2x between levels
- **Recommended ratio** — 1.3-1.5x between levels
- **Maximum ratio** — 2x between levels (for dramatic emphasis)

Ratios below 1.2x are indistinguishable; ratios above 2x feel disconnected.

### Rule 3: Consistent Treatment

The same hierarchy level must be treated the same way throughout:
- **Same size** — Same point size everywhere
- **Same weight** — Same font weight everywhere
- **Same color** — Same color treatment everywhere
- **Same spacing** — Same surrounding space everywhere

Inconsistent treatment breaks the hierarchy system.

### Rule 4: Contrast Reinforces Hierarchy

Higher hierarchy levels should have higher contrast:
- **Primary** — Highest contrast (near-black on white)
- **Secondary** — High contrast
- **Tertiary** — Medium contrast
- **Quaternary** — Lower contrast

Low contrast for low hierarchy reduces visual noise.

### Rule 5: Position Reinforces Hierarchy

Higher hierarchy levels should have more prominent positions:
- **Top** — More important
- **Center** — More important
- **Left** — More important (in LTR languages)
- **Standalone** — More important (with surrounding space)

Position communicates importance without size changes.

## Hierarchy Patterns

### Article Pattern

For long-form content:
```
H1: Article Title
  H2: Section Heading
    H3: Subsection Heading
      Body: Paragraph text
        Caption: Supporting text
```

### Card Pattern

For card-based content:
```
H2: Card Title
  Body: Card description
    Caption: Metadata
```

### Form Pattern

For form interfaces:
```
H3: Section Title
  Label: Field name
    Body: Field value
      Caption: Helper text
```

### List Pattern

For list-based content:
```
H3: List Group Header
  H4: List Item Title
    Body: List item description
      Caption: Metadata
```

## See Also

- [Type System](type-system.md) — Typography foundations
- [Text in Space](text-in-space.md) — Typography and spatial relationships
- [Color System](../tokens/color-system.md) — Text color definitions
- [Spacing System](../tokens/spacing-system.md) — Spacing around text
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
