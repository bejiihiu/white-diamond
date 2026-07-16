# Space Behavior

## Why This Matters

Space is not passive background—it actively influences how objects exist and interact. Understanding space behavior ensures that interfaces feel physically consistent, making them predictable and learnable.

## The Nature of Digital Space

Digital space behaves like a material with physical properties. These properties are not literal physics—they are perceived physics based on human intuition about how physical objects behave.

### Space Has Pressure

Objects push against space, and space pushes back. When objects are crowded, space feels compressed. When objects are sparse, space feels relaxed.

This pressure affects:
- **Comfort** — Compressed space feels stressful; relaxed space feels calm
- **Focus** — Compressed space feels busy; relaxed space feels important
- **Flow** — Compressed space feels urgent; relaxed space feels leisurely

### Space Has Gravity

Objects fall toward the bottom of space unless otherwise constrained. This gravity affects:
- **Alignment** — Elements naturally align to the bottom
- **Whitespace** — Empty space accumulates at the top
- **Movement** — Objects entering from above feel like they're falling

### Space Has Temperature

Space has warmth based on content density and color:
- **Warm space** — High density, warm colors, tight spacing
- **Cool space** — Low density, cool colors, loose spacing

Temperature affects mood:
- Warm space feels energetic, urgent, intimate
- Cool space feels calm, spacious, professional

### Space Has Rhythm

Space has rhythm based on the repetition of spatial patterns. Regular spacing creates rhythm; irregular spacing breaks rhythm.

Rhythm affects:
- **Scanability** — Regular rhythm is easier to scan
- **Predictability** — Regular rhythm creates expectation
- **Harmony** — Regular rhythm feels balanced

## Space Interactions

### Space Between Objects

The space between objects communicates their relationship:
- **Tight space** — Objects are directly related
- **Medium space** — Objects are in the same group
- **Loose space** — Objects are in the same view
- **Wide space** — Objects are in different sections

### Space Within Objects

The space inside objects (padding) communicates their importance:
- **Tight padding** — Compact, informational, dense
- **Medium padding** — Standard, balanced, readable
- **Loose padding** — Prominent, spacious, important

### Space Around Objects

The space outside objects (margins) communicates their prominence:
- **No margin** — Object is part of a group
- **Small margin** — Object is slightly separated
- **Medium margin** — Object is distinct
- **Large margin** — Object is prominent

## Space Rules

### Rule 1: Space Is Consistent

The same type of spacing must use the same value throughout a view. If section spacing is 32px in one place, it must be 32px everywhere.

Inconsistent spacing breaks rhythm and creates visual noise.

### Rule 2: Space Is Proportional

Spacing values must relate to each other through consistent ratios. WHITE DIAMOND uses a doubling sequence:
- 4 → 8 → 16 → 32 → 64

Each step represents a clear increase in spatial separation.

### Rule 3: Space Is Purposeful

Every space must serve a purpose:
- **Separation** — Keeping unrelated elements apart
- **Grouping** — Keeping related elements together
- **Emphasis** — Making important elements stand out
- **Rhythm** — Creating consistent visual flow

Space without purpose is waste.

### Rule 4: Space Is Responsive

Space must adapt to context:
- **Screen size** — More space on larger screens
- **Content density** — Less space when content is dense
- **User preference** — Respect user spacing preferences
- **Accessibility** — Ensure space supports assistive technology

Rigid space breaks on different contexts.

### Rule 5: Space Is Alive

Space should respond to interaction:
- **Hover** — Space around hovered elements contracts slightly
- **Focus** — Space around focused elements expands slightly
- **Active** — Space around active elements changes to indicate activity
- **Transition** — Space changes smoothly, not abruptly

Static space feels lifeless.

## See Also

- [Object Existence](object-existence.md) — How objects exist in space
- [Screen as Window](screen-as-window.md) — The viewport metaphor
- [Space Geometry](../geometry/space-geometry.md) — The fundamentals of digital space
- [Spacing System](../tokens/spacing-system.md) — Spacing token values
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement
