# Common Mistakes

## Why This Document Exists

Common mistakes are errors that occur frequently in interface design. They are not prohibited patterns—they are implementation errors that violate the principles defined in [Core Principles](../philosophy/core-principles.md). Recognizing these mistakes helps designers and developers avoid them, creating interfaces that are spatially coherent, architecturally sound, and cognitively efficient.

Every mistake has a cost. The cost is measured in cognitive load, spatial confusion, and architectural incoherence. Understanding the cost helps developers prioritize fixes—the higher the cost, the more urgently the mistake should be addressed.

---

## Layout Mistakes

### Mistake: Inconsistent Margins

**Symptom:** Elements have different margins throughout the view. One card has 15px margin, another has 20px, another has 12px.

**Cause:** Not using a spacing system. Margins are set ad-hoc without reference to a consistent token system.

**Architectural cost:** Inconsistent margins break the spatial rhythm defined in [Spacing System](../tokens/spacing-system.md). Margins communicate the strength of the relationship between elements. Inconsistent margins create inconsistent relationships—the user cannot determine which elements are related and which are not.

**How it violates WHITE DIAMOND:** Inconsistent margins violate Axiom VIII (Absolute Control Through Predictability). When margins vary without reason, users cannot predict spatial relationships. The interface becomes spatially chaotic.

**Fix:** Apply spacing tokens consistently:

```css
/* Prohibited */
.card { margin: 15px; }
.section { margin: 20px; }
.object { margin: 12px; }

/* Correct */
.card { margin: var(--spacing-4); }
.section { margin: var(--spacing-6); }
.object { margin: var(--spacing-4); }
```

**What the fix communicates:** "Margins are consistent. The spacing system defines all spatial relationships. You can predict the distance between any two elements."

---

### Mistake: Misaligned Elements

**Symptom:** Elements don't align to grid or each other. The left edge of one card is at 10px, another at 12px, another at 8px.

**Cause:** Not using grid or alignment tools. Elements are positioned visually without reference to a structural framework.

**Architectural cost:** Misaligned elements break the spatial order defined in [Composition Rules](../layout/composition-rules.md). Alignment creates invisible lines that connect elements and establish visual order. Without alignment, elements float randomly—the user cannot perceive the spatial structure.

**How it violates WHITE DIAMOND:** Misaligned elements violate Axiom II (Objects Have Mass and Boundaries). If objects have boundaries, those boundaries must be perceivable. Misaligned elements have inconsistent boundaries—the user cannot determine where one thing ends and another begins.

**Fix:** Align all elements to grid lines or other elements. Use the grid system to establish consistent alignment throughout the interface.

**What the fix communicates:** "Every element has a defined position in the spatial structure. The alignment creates invisible connections that you can read intuitively."

---

### Mistake: Cramped Content

**Symptom:** Elements too close together, hard to distinguish. Labels touch inputs, cards touch each other, sections merge.

**Cause:** Insufficient spacing. Elements are packed tightly without breathing room.

**Architectural cost:** Cramped content violates the proximity rules defined in [Composition Rules](../layout/composition-rules.md). When elements are too close, the user cannot distinguish their boundaries. The elements merge into a single mass, destroying the sense of discrete construction.

**How it violates WHITE DIAMOND:** Cramped content violates Axiom VI (Borders Are Everything). Borders are the mechanism through which users perceive boundaries. When elements are too close, their borders overlap and merge—the user cannot determine where one element ends and another begins.

**Fix:** Apply appropriate spacing tokens:

```css
/* Prohibited */
.item + .item { margin-top: 4px; }
.label { margin-bottom: 2px; }

/* Correct */
.item + .item { margin-top: var(--spacing-2); }
.label { margin-bottom: var(--spacing-1); }
```

**What the fix communicates:** "Every element has clear boundaries. The spacing creates distinct constructions that you can perceive individually."

---

### Mistake: No Visual Hierarchy

**Symptom:** All elements look equally important. Headings, body text, captions, and buttons all have the same visual weight.

**Cause:** No size, color, or spacing differentiation. All elements are treated as equal.

**Architectural cost:** No visual hierarchy violates the contrast rules defined in [Composition Rules](../layout/composition-rules.md). Contrast communicates hierarchy—larger elements are more important, smaller elements are less important. Without contrast, every element has the same weight, and the hierarchy collapses.

**How it violates WHITE DIAMOND:** No visual hierarchy violates Axiom X (Monumentality Over Decoration). Monumentality requires that elements communicate their importance through visual weight. Without hierarchy, elements cannot communicate importance—they are all equally prominent, creating visual noise.

**Fix:** Create clear hierarchy through size, color, and spacing. Headings should be larger and heavier than body text. Body text should be heavier than captions. Buttons should be visually prominent.

**What the fix communicates:** "This element is important. This element is secondary. The visual hierarchy guides your attention from most important to least important."

---

## Typography Mistakes

### Mistake: Too Many Font Sizes

**Symptom:** Many different font sizes, no consistent scale. 24px, 20px, 18px, 16px, 15px, 14px, 13px, 12px—all used randomly.

**Cause:** Not using a type scale. Font sizes are set ad-hoc without reference to a consistent system.

**Architectural cost:** Too many font sizes break the typographic hierarchy defined in [Type System](../typography/type-system.md). The type scale creates a consistent hierarchy—each size communicates a specific level of importance. Too many sizes create too many hierarchy levels, making the hierarchy unreadable.

**How it violates WHITE DIAMOND:** Too many font sizes violate Axiom VIII (Absolute Control Through Predictability). When font sizes vary without reason, users cannot predict the hierarchy. The interface becomes typographically chaotic.

**Fix:** Use the type scale consistently:

```css
/* Prohibited */
.title { font-size: 24px; }
.heading { font-size: 20px; }
.subheading { font-size: 18px; }
.body { font-size: 16px; }
.caption { font-size: 13px; }

/* Correct */
.title { font-size: var(--font-size-h1); }
.heading { font-size: var(--font-size-h2); }
.subheading { font-size: var(--font-size-h3); }
.body { font-size: var(--font-size-body); }
.caption { font-size: var(--font-size-caption); }
```

**What the fix communicates:** "The type scale defines all text sizes. Each size communicates a specific hierarchy level. You can predict the importance of any text element."

---

### Mistake: Poor Line Height

**Symptom:** Text feels cramped or too spread out. Lines touch each other or gaps are too large.

**Cause:** Not setting appropriate line height. Line height is either too tight (1.2) or too loose (2.0).

**Architectural cost:** Poor line height violates the typographic rhythm defined in [Text Hierarchy](../typography/text-hierarchy.md). Line height creates the horizontal rhythm that the eye uses to scan text. Too tight line height makes lines touch—users cannot distinguish individual lines. Too loose line height makes lines disconnect—users cannot perceive the text as a coherent block.

**How it violates WHITE DIAMOND:** Poor line height violates Axiom II (Objects Have Boundaries). Text lines are objects with boundaries. Too tight line height merges boundaries—lines become indistinguishable. Too loose line height creates excessive boundaries—lines become isolated.

**Fix:** Use appropriate line heights:

```css
/* Prohibited */
p { line-height: 1.2; } /* Too tight */
h1 { line-height: 2.0; } /* Too loose */

/* Correct */
p { line-height: 1.5; } /* Comfortable */
h1 { line-height: 1.2; } /* Tight for headings */
```

**What the fix communicates:** "Text lines have clear boundaries. The line height creates readable rhythm. You can scan text efficiently."

---

### Mistake: Long Line Lengths

**Symptom:** Text lines too long to read comfortably. Lines span the entire viewport width.

**Cause:** No max-width on text containers. Text containers fill the available space without constraint.

**Architectural cost:** Long line lengths violate the readability constraints defined in [Text in Space](../typography/text-in-space.md). The optimal line length for reading is 50-75 characters. Longer lines force the eye to travel too far, increasing fatigue and reducing comprehension.

**How it violates WHITE DIAMOND:** Long line lengths violate Axiom X (Monumentality Over Decoration). Text that spans the entire viewport feels like a wall—intimidating, unreadable, and hostile. Monumental text is contained within clear boundaries, creating readable blocks.

**Fix:** Limit line length to 50-75 characters:

```css
/* Prohibited */
.content { width: 100%; }

/* Correct */
.content { max-width: 65ch; }
```

**What the fix communicates:** "Text is contained within readable boundaries. The line length is optimal for reading. You can read comfortably."

---

## Color Mistakes

### Mistake: Insufficient Contrast

**Symptom:** Text hard to read against background. Gray text on white background. White text on light blue background.

**Cause:** Low contrast color combinations. Colors are chosen for aesthetics without considering readability.

**Architectural cost:** Insufficient contrast violates the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Low contrast text is unreadable for users with visual impairments, making the interface partially inaccessible.

**How it violates WHITE DIAMOND:** Insufficient contrast violates Axiom II (Objects Have Boundaries). Text that cannot be read does not have effective boundaries—it is invisible to users with visual impairments. The interface exists but cannot be perceived.

**Fix:** Ensure 4.5:1 contrast for text:

```css
/* Prohibited */
.text { color: #999; } /* On white background */

/* Correct */
.text { color: #666; } /* Better contrast */
```

**What the fix communicates:** "All text is readable. The contrast ensures that every user can perceive the content."

---

### Mistake: Inconsistent Status Colors

**Symptom:** Success is green in one place, blue in another. Error is red in one place, orange in another.

**Cause:** Not using semantic color tokens. Status colors are chosen ad-hoc without reference to a consistent system.

**Architectural cost:** Inconsistent status colors break the predictable communication defined in [Color System](../tokens/color-system.md). Users learn color meanings—green means success, red means error. Changing these meanings breaks the learning and destroys predictability.

**How it violates WHITE DIAMOND:** Inconsistent status colors violate Axiom VIII (Absolute Control Through Predictability). When status colors vary, users cannot predict what a color means. The interface becomes color-chaotic.

**Fix:** Use consistent status colors:

```css
/* Prohibited */
.success { color: #2196F3; } /* Blue */
.error { color: #f44336; } /* Red */
.warning { color: #FF9800; } /* Orange */

/* Correct */
.success { color: var(--color-success); }
.error { color: var(--color-error); }
.warning { color: var(--color-warning); }
```

**What the fix communicates:** "Status colors are consistent. Green always means success. Red always means error. You can predict the meaning of any status color."

---

### Mistake: Too Many Colors

**Symptom:** Interface looks like a rainbow. Every element has a different color.

**Cause:** Not limiting color palette. Colors are added ad-hoc without a coherent color strategy.

**Architectural cost:** Too many colors break the visual hierarchy defined in [Color System](../tokens/color-system.md). Colors communicate meaning—primary colors indicate importance, secondary colors indicate support, neutral colors indicate background. Too many colors destroy this communication—everything is colorful, so nothing stands out.

**How it violates WHITE DIAMOND:** Too many colors violate Axiom X (Monumentality Over Decoration). Colorful interfaces feel decorative, not architectural. Monumental constructions use color sparingly—neutrals for surfaces, limited primaries for emphasis, semantic colors for status.

**Fix:** Use limited, purposeful colors:
- 1-2 primary colors
- 1-2 secondary colors
- Neutral scale (gray spectrum)
- 4 semantic colors (success, error, warning, information)

**What the fix communicates:** "Color is purposeful. Primary colors indicate importance. Secondary colors indicate support. Neutral colors indicate background. Semantic colors indicate status."

---

## Interaction Mistakes

### Mistake: No Focus Indicators

**Symptom:** Keyboard users can't see where focus is. Tab through the interface and nothing highlights.

**Cause:** Removing or hiding focus styles. Focus indicators are considered "ugly" and are removed.

**Architectural cost:** No focus indicators violate the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Keyboard users cannot navigate without visible focus—the interface becomes inaccessible.

**How it violates WHITE DIAMOND:** No focus indicators violate Axiom VI (Borders Are Everything). Focus indicators are the borders that define the currently active element. Without them, the active element has no boundary—the user cannot determine which element is focused.

**Fix:** Always show visible focus indicators:

```css
/* Prohibited */
:focus { outline: none; }

/* Correct */
:focus { outline: 2px solid var(--color-focus); }
```

**What the fix communicates:** "Focus is visible. You can always see which element is active. Keyboard navigation is supported."

---

### Mistake: Missing Hover States

**Symptom:** Users don't know what's clickable. Interactive elements look identical to static elements.

**Cause:** No visual change on hover. Interactive elements have no affordance.

**Architectural cost:** Missing hover states violate the affordance rules defined in [Component Philosophy](../components/component-philosophy.md). Hover states communicate interactivity—when an element changes on hover, it signals "I am interactive." Without hover states, users cannot determine which elements are interactive.

**How it violates WHITE DIAMOND:** Missing hover states violate Axiom II (Objects Have Boundaries). Interactive elements must communicate their boundaries through affordance. Without hover states, interactive elements have the same boundaries as static elements—the user cannot distinguish them.

**Fix:** Provide hover feedback:

```css
/* Prohibited */
.button { /* No hover state */ }

/* Correct */
.button:hover { background-color: var(--primary-600); }
```

**What the fix communicates:** "This element is interactive. The hover state demonstrates its boundaries. You can determine which elements are clickable."

---

### Mistake: No Loading States

**Symptom:** Users click buttons multiple times because nothing happens. The interface appears frozen.

**Cause:** No feedback during processing. The interface does not communicate that it is working.

**Architectural cost:** No loading states violate the feedback rules defined in [Component Philosophy](../components/component-philosophy.md). Loading states communicate "the system is processing"—they demonstrate that the interface has received the input and is working. Without loading states, users cannot determine whether their action was received.

**How it violates WHITE DIAMOND:** No loading states violate Axiom VIII (Absolute Control Through Predictability). Users need to know that their action was received. Without loading states, users click repeatedly, creating anxiety and confusion.

**Fix:** Show loading state during processing:

```css
/* Prohibited */
.button.processing { /* No visual change */ }

/* Correct */
.button.processing {
  opacity: 0.7;
  pointer-events: none;
}
.button.processing::after { content: "Loading..."; }
```

**What the fix communicates:** "Your action was received. The system is processing. Please wait. You do not need to click again."

---

## Accessibility Mistakes

### Mistake: Missing Alt Text

**Symptom:** Screen readers announce "image" without description. Users cannot understand the image's content.

**Cause:** No alt text on images. Images are treated as decorative when they contain information.

**Architectural cost:** Missing alt text violates the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Screen reader users cannot understand image content—the interface becomes partially inaccessible.

**How it violates WHITE DIAMOND:** Missing alt text violates Axiom II (Objects Have Boundaries). Images are objects with boundaries. Alt text is the content layer of the image—it communicates the image's purpose. Without alt text, images have boundaries and surfaces but no content—the user cannot understand what the image is for.

**Fix:** Add descriptive alt text:

```html
<!-- Prohibited -->
<img src="chart.png">

<!-- Correct -->
<img src="chart.png" alt="Sales increased 20% from January to March">
```

**What the fix communicates:** "This image has content. Its purpose is described. You can understand what it shows."

---

### Mistake: Missing Labels

**Symptom:** Screen readers announce "edit text" without context. Users cannot determine what the input is for.

**Cause:** No labels on inputs. Inputs rely on placeholders or visual context.

**Architectural cost:** Missing labels violate the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Screen reader users cannot identify input purposes—the interface becomes partially inaccessible.

**How it violates WHITE DIAMOND:** Missing labels violate Axiom II (Objects Have Boundaries). Inputs are objects with boundaries. Labels are the content layer of the input—they communicate the input's purpose. Without labels, inputs have boundaries and surfaces but no content—the user cannot understand what the input is for.

**Fix:** Add labels to all inputs:

```html
<!-- Prohibited -->
<input type="email">

<!-- Correct -->
<label for="email">Email address</label>
<input id="email" type="email">
```

**What the fix communicates:** "This input has content. Its purpose is described. You can understand what to enter."

---

### Mistake: Color-Only Information

**Symptom:** Color-blind users can't distinguish status. Success and error look the same.

**Cause:** Using only color to convey meaning. Status is indicated only through color.

**Architectural cost:** Color-only information violates the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Color-blind users cannot perceive the difference—the interface becomes partially inaccessible.

**How it violates WHITE DIAMOND:** Color-only information violates Axiom II (Objects Have Boundaries). Status indicators are objects with boundaries. Color is one layer of their content—but it cannot be the only layer. Without non-color cues, the status indicator's purpose is invisible to color-blind users.

**Fix:** Pair color with text or icons:

```html
<!-- Prohibited -->
<span style="color: green;">Active</span>

<!-- Correct -->
<span style="color: green;">&#x25CF; Active</span>
```

**What the fix communicates:** "This status is indicated through color AND text/icon. You can understand the status regardless of color perception."

---

## Content Mistakes

### Mistake: Placeholder Labels

**Symptom:** Users don't know what to enter after typing. The placeholder disappears, leaving no label.

**Cause:** Using placeholder as only label. Placeholders disappear on focus, leaving no context.

**Architectural cost:** Placeholder labels violate the three-layer hierarchy defined in [Object Structure](../spatial-hierarchy/object-structure.md). The input has a boundary (the input field) and a surface (the background), but when the placeholder disappears, it has no content—the user cannot determine the input's purpose.

**How it violates WHITE DIAMOND:** Placeholder labels violate Axiom III (The Three-Layer Hierarchy Is Immutable). Every object must have: Physical Boundary → Inner Surface → Content. Placeholder labels remove the content layer—the input becomes a boundary without purpose.

**Fix:** Always use visible labels:

```html
<!-- Prohibited -->
<input placeholder="Email address">

<!-- Correct -->
<label for="email">Email address</label>
<input id="email" placeholder="john@example.com">
```

**What the fix communicates:** "This input has permanent content. Its purpose is always visible. You can always identify what to enter."

---

### Mistake: Unclear Error Messages

**Symptom:** Users don't understand what went wrong. Error messages say "Invalid input" without specifying what is invalid.

**Cause:** Generic error messages. Errors are not specific enough to guide correction.

**Architectural cost:** Unclear error messages violate the feedback rules defined in [Component Philosophy](../components/component-philosophy.md). Error messages communicate "something went wrong"—they must also communicate "what went wrong and how to fix it." Without specificity, users cannot correct their errors.

**How it violates WHITE DIAMOND:** Unclear error messages violate Axiom VIII (Absolute Control Through Predictability). Users need to know what went wrong and how to fix it. Without this information, they feel helpless—they cannot predict how to succeed.

**Fix:** Provide specific, helpful error messages:

```html
<!-- Prohibited -->
<span class="error">Invalid input</span>

<!-- Correct -->
<span class="error">Please enter a valid email address (e.g., user@example.com)</span>
```

**What the fix communicates:** "Something went wrong. Here is specifically what is wrong. Here is specifically how to fix it. You can correct this."

---

### Mistake: Missing Confirmation

**Symptom:** Users accidentally delete or modify data. Destructive actions happen without warning.

**Cause:** No confirmation for destructive actions. Users can trigger destructive actions with a single click.

**Architectural cost:** Missing confirmation violates the safety rules defined in [Component Philosophy](../components/component-philosophy.md). Destructive actions must have confirmation—users need to verify their intent before irreversible changes occur.

**How it violates WHITE DIAMOND:** Missing confirmation violates Axiom VIII (Absolute Control Through Predictability). Users must be able to predict the consequences of their actions. Without confirmation, destructive actions happen unexpectedly—users lose control.

**Fix:** Confirm before destructive actions:

```html
<!-- Prohibited -->
<button onclick="deleteItem()">Delete</button>

<!-- Correct -->
<button onclick="confirmDelete()">Delete</button>
```

**What the fix communicates:** "This action is destructive. Please confirm your intent. You have control over irreversible changes."

---

## See Also

- [Prohibited Patterns](prohibited-patterns.md) — What to avoid
- [Best Practices](../best-practices/recommended-approaches.md) — What works well
- [Decision Making](../best-practices/decision-making.md) — How to choose
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Core Principles](../philosophy/core-principles.md) — The axioms of digital space
