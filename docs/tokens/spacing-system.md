# Spacing System

## Why This Document Exists

Spacing is not empty space. It is **material with properties**—as real and consequential as borders, text, or color. In physical architecture, the space between walls defines rooms. The space between buildings defines streets. The space between objects defines relationships.

In digital interfaces, spacing performs the same functions. It communicates hierarchy (more space = more importance), establishes rhythm (consistent spacing creates visual flow), ensures readability (adequate space prevents cognitive overload), and defines relationships (close elements are related, distant elements are not).

Without a systematic spacing system, these communications become arbitrary. One developer uses 12px between elements; another uses 16px. The inconsistency is not merely aesthetic—it is semantic. Users cannot infer relationships when spacing does not communicate reliably.

---

## Mathematical Foundation

### The Base Unit

WHITE DIAMOND uses a **base-4 spacing system**. The fundamental unit is **4 pixels**. All spacing values derive from this unit through multiplication.

The base unit of 4px is chosen because:

1. **Divisibility** — 4 divides evenly into common interface dimensions (320, 375, 414, 768, 1024, 1440)
2. **Sub-pixel rendering** — 4px avoids sub-pixel rounding issues across display densities
3. **Human perception** — 4px is the minimum perceptible spatial difference on standard displays
4. **Grid alignment** — 4px aligns with 8px grid systems commonly used in interface design

### The Scale

The spacing scale is derived through multiplication of the base unit:

| Token | Value | Calculation | Relationship |
|-------|-------|-------------|--------------|
| `spacing-0` | 0px | 0 × 4 | No space |
| `spacing-1` | 4px | 1 × 4 | Base unit |
| `spacing-2` | 8px | 2 × 4 | 2× base |
| `spacing-3` | 12px | 3 × 4 | 3× base |
| `spacing-4` | 16px | 4 × 4 | 4× base |
| `spacing-5` | 20px | 5 × 4 | 5× base |
| `spacing-6` | 24px | 6 × 4 | 6× base |
| `spacing-8` | 32px | 8 × 4 | 8× base |
| `spacing-10` | 40px | 10 × 4 | 10× base |
| `spacing-12` | 48px | 12 × 4 | 12× base |
| `spacing-16` | 64px | 16 × 4 | 16× base |
| `spacing-20` | 80px | 20 × 4 | 20× base |
| `spacing-24` | 96px | 24 × 4 | 24× base |

The scale is not geometric (doubling) but **arithmetic with consistent increments**. This ensures:
- Each step is perceptible but not jarring
- The scale remains navigable (12 values, not 20)
- Relationships are clear (spacing-6 is exactly 1.5× spacing-4)

### Semantic Scale

Semantic tokens abstract the numeric scale into purpose-based names:

| Token | Reference | Usage | Reasoning |
|-------|-----------|-------|-----------|
| `spacing-tightest` | `spacing-1` | Within compact elements | Minimum meaningful space |
| `spacing-tight` | `spacing-2` | Within default elements | Comfortable but compact |
| `spacing-compact` | `spacing-3` | Between related elements | Close relationship |
| `spacing-default` | `spacing-4` | Standard spacing | Default relationship |
| `spacing-comfortable` | `spacing-6` | Between sections | Moderate separation |
| `spacing-wide` | `spacing-8` | Between major sections | Clear separation |
| `spacing-page` | `spacing-16` | Page-level margins | Structural boundaries |

---

## Spacing Types

Spacing is not monolithic. It operates in three distinct contexts, each with specific rules:

### Internal Spacing (Padding)

Padding is **space inside an element's boundaries**. It defines the relationship between an element's border and its content.

```
┌─────────────────────────────────────┐
│← padding →│ Content │← padding →│
│← padding →│         │← padding →│
└─────────────────────────────────────┘
```

Padding rules:
1. **Consistency** — Same element type, same padding
2. **Proportionality** — Larger elements may have proportionally larger padding
3. **Accessibility** — Touch targets require minimum 44px × 44px (WCAG 2.1)
4. **Responsiveness** — Padding may adapt to screen density

#### Padding Specifications

| Element | Token | Value | Reasoning |
|---------|-------|-------|-----------|
| Input field | `spacing-padding-input` | `spacing-3` (12px) | Comfortable text entry |
| Button | `spacing-padding-button` | `spacing-2` × `spacing-4` (8px 16px) | Compact horizontal, moderate vertical |
| Card | `spacing-padding-card` | `spacing-4` (16px) | Comfortable content area |
| Modal | `spacing-padding-modal` | `spacing-6` (24px) | Spacious content area |
| Section | `spacing-padding-section` | `spacing-8` (32px) | Major structural padding |

### External Spacing (Margin)

Margin is **space outside an element's boundaries**. It defines the relationship between elements.

```
Element A
← margin →
Element B
```

Margin rules:
1. **Consistency** — Same spacing type, same margin
2. **Collapse** — Adjacent vertical margins collapse to the larger value
3. **Responsiveness** — Margins may adapt to screen size
4. **Purpose** — Every margin communicates relationship or separation

#### Margin Specifications

| Context | Token | Value | Reasoning |
|---------|-------|-------|-----------|
| Between list items | `spacing-margin-list-item` | `spacing-2` (8px) | Close relationship |
| Between form fields | `spacing-margin-form-field` | `spacing-4` (16px) | Moderate separation |
| Between cards | `spacing-margin-card` | `spacing-4` (16px) | Equal relationship |
| Between sections | `spacing-margin-section` | `spacing-8` (32px) | Clear separation |
| Page margins | `spacing-margin-page` | `spacing-6` to `spacing-8` (24-32px) | Structural boundary |

### Gap Spacing

Gap is **space between items in a container**. It defines the relationship between siblings.

```
Container
┌─────────────────────────────────────┐
│ Item 1 ← gap → Item 2 ← gap → Item 3 │
└─────────────────────────────────────┘
```

Gap rules:
1. **Consistency** — Same container type, same gap
2. **Uniformity** — All gaps within a container are equal
3. **Visual rhythm** — Consistent gaps create predictable flow
4. **Flexibility** — Gap adapts to content and container size

#### Gap Specifications

| Container | Token | Value | Reasoning |
|-----------|-------|-------|-----------|
| Flex row | `spacing-gap-flex` | `spacing-2` (8px) | Close items |
| Grid | `spacing-gap-grid` | `spacing-4` (16px) | Equal separation |
| List | `spacing-gap-list` | `spacing-2` (8px) | Tight grouping |
| Form | `spacing-gap-form` | `spacing-4` (16px) | Moderate separation |
| Navigation | `spacing-gap-nav` | `spacing-1` (4px) | Compact grouping |

---

## Spacing and Hierarchy

Spacing communicates hierarchy through magnitude:

### Level 1: Tight (spacing-1 to spacing-3)

**Purpose:** Within elements, between closely related items
**Communication:** "These items belong together"
**Examples:** Icon-to-text in a button, label-to-input in a form

### Level 2: Default (spacing-4)

**Purpose:** Standard separation between elements
**Communication:** "These items are related but distinct"
**Examples:** Between form fields, between card content sections

### Level 3: Comfortable (spacing-6)

**Purpose:** Between groups of related elements
**Communication:** "These groups are distinct but related"
**Examples:** Between card components, between navigation sections

### Level 4: Wide (spacing-8)

**Purpose:** Between major sections
**Communication:** "These sections are distinct"
**Examples:** Between page sections, between header and content

### Level 5: Page (spacing-16)

**Purpose:** Structural boundaries
**Communication:** "This is a major structural division"
**Examples:** Page margins, major section boundaries

---

## Spacing and Grid System

Spacing tokens must align with the grid system. The 4px base unit ensures compatibility with common grid configurations:

| Grid | Columns | Gutter | Alignment |
|------|---------|--------|-----------|
| 4-column | 4 | 16px (spacing-4) | 4px base |
| 8-column | 8 | 16px (spacing-4) | 4px base |
| 12-column | 12 | 24px (spacing-6) | 4px base |

Spacing values that do not align with the grid create visual misalignment. When spacing is applied consistently with grid gutters, the layout maintains structural coherence.

---

## Spacing Rules

### Rule 1: Spacing Is Consistent

The same type of spacing must use the same value everywhere. If form fields use `spacing-4` in one form, they use `spacing-4` in all forms. Inconsistency breaks visual rhythm and confuses users.

### Rule 2: Spacing Is Proportional

Spacing values must relate to each other in clear, predictable ways. The scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64) provides consistent, perceptible increments. Arbitrary values (4, 7, 13, 19) create unpredictability.

### Rule 3: Spacing Is Purposeful

Every space must serve a function:
- **Separation** — Keeping unrelated elements apart
- **Grouping** — Keeping related elements together
- **Emphasis** — Making important elements stand out
- **Rhythm** — Creating consistent visual flow

Space without purpose is waste. Waste accumulates into clutter.

### Rule 4: Spacing Is Responsive

Spacing must adapt to context:
- **Screen size** — Larger screens may have larger margins
- **Content density** — Dense content may need tighter spacing
- **User preference** — Respect `prefers-reduced-motion` and spacing settings
- **Accessibility** — Ensure spacing supports assistive technology

### Rule 5: Spacing Is Testable

Spacing values must be verifiable through inspection:
- **Pixel values** — Exact measurements in developer tools
- **Token references** — Named values in code
- **Visual examples** — Clear demonstrations in documentation
- **Code examples** — Implementation patterns

---

## Spacing Patterns

### Element Spacing Patterns

**Vertical rhythm:** All vertical spacing follows the 4px base unit, creating consistent text and element rhythm.

**Horizontal rhythm:** All horizontal spacing follows the 4px base unit, creating consistent column and alignment rhythm.

**Diagonal consistency:** Vertical and horizontal spacing are independent but coordinated through the shared base unit.

### Container Spacing Patterns

**Tight containers** (spacing-2, 8px): Dense information displays, compact lists, toolbar items.

**Default containers** (spacing-4, 16px): Standard cards, form layouts, content blocks.

**Comfortable containers** (spacing-6, 24px): Spacious modals, hero sections, featured content.

**Spacious containers** (spacing-8, 32px): Page-level sections, major content divisions.

### Page Spacing Patterns

**Page margins** (spacing-6 to spacing-8, 24-32px): The structural boundary of the viewport. Larger screens receive larger margins.

**Section margins** (spacing-8 to spacing-12, 32-48px): Major content divisions. Clear separation between topics.

**Major sections** (spacing-12 to spacing-16, 48-64px): Fundamental structural divisions. These represent the highest level of spatial hierarchy.

---

## Spacing Anti-Patterns

### Inconsistent Values

**Problem:** Using 13px, 15px, and 17px instead of 12px, 16px, and 20px.
**Solution:** Always use scale values. If a value falls between scale values, choose the nearest.

### Arbitrary Nesting

**Problem:** Nesting spacing values without logical structure (e.g., margin: 7px 13px 11px 5px).
**Solution:** Use semantic tokens. Each value should reference a named spacing purpose.

### Hardcoded Values

**Problem:** Using `16px` instead of `var(--spacing-4)`.
**Solution:** Always reference tokens. Hardcoded values break consistency and theming.

### Over-Spacing

**Problem:** Using spacing-16 (64px) between list items.
**Solution:** Match spacing to relationship. Close items get tight spacing; distant items get wide spacing.

---

## See Also

- [Design Tokens](design-tokens.md) — The atomic value architecture
- [Color System](color-system.md) — Chromatic relationships
- [Border System](border-system.md) — Edge definitions
- [Grid System](../layout/grid-system.md) — Grid implementation
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
- [Object Structure](../spatial-hierarchy/object-structure.md) — How objects occupy space
- [Core Principles](../philosophy/core-principles.md) — Axioms from which spacing derives
