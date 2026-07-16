# Space Behavior

## Why This Matters

Space is not passive background. It is an active material with properties, pressures, and responses. When objects exist in space, they affect the space around them—compressing it, heating it, creating rhythm within it. Understanding space behavior ensures that interfaces feel physically consistent, making them predictable and learnable.

WHITE DIAMOND treats space as a material, not a vacuum. Every object placed in space changes the space. Every spacing decision affects the user's perception. This is not metaphor—it is the physics of our digital architecture.

---

## The Properties of Digital Space

Digital space has measurable properties. These properties are not literal physics—they are perceived physics based on human intuition about how physical objects behave. But they are consistent, predictable, and governable.

### Space Has Pressure

Objects push against space, and space pushes back. When objects are crowded, space feels compressed. When objects are sparse, space feels relaxed. This is not a metaphor—it is the spatial equivalent of air pressure in a physical room.

Pressure affects:

- **Comfort** — Compressed space feels stressful; relaxed space feels calm. A form with tight spacing between fields feels rushed. A form with generous spacing feels considered.
- **Focus** — Compressed space feels busy; relaxed space feels important. A dashboard with dense data feels analytical. A landing page with generous whitespace feels confident.
- **Flow** — Compressed space feels urgent; relaxed space feels leisurely. A checkout flow with tight spacing feels fast. An onboarding flow with generous spacing feels patient.

WHITE DIAMOND defines three pressure states:

- **Negative pressure** — Space is too compressed. Elements overlap or crowd each other. The user feels anxious and unable to focus. This is a layout failure.
- **Neutral pressure** — Space is balanced. Elements have appropriate breathing room. The user feels comfortable and focused. This is the target state.
- **Positive pressure** — Space is too sparse. Elements are isolated by excessive whitespace. The user feels disconnected and unsure of relationships. This is also a layout failure.

### Space Has Gravity

Objects fall toward the bottom of the viewport unless otherwise constrained. This gravity is perceptual, not literal—the bottom of the viewport carries more visual weight than the top.

Gravity affects:

- **Alignment** — Elements naturally align to the bottom. A card's content "settles" toward the bottom of the card. A page's content "settles" toward the bottom of the viewport.
- **Whitespace distribution** — Empty space accumulates at the top. When content does not fill the viewport, the extra space appears above the content, not below it. This is why centered vertical content often feels "floating."
- **Movement dynamics** — Objects entering from above feel like they are falling (natural, expected). Objects entering from below feel like they are rising (unusual, attention-demanding). Objects entering from the left feel like they are approaching (forward motion). Objects entering from the right feel like they are retreating (backward motion).

### Space Has Temperature

Space has warmth based on content density and color:

- **Warm space** — High density, warm colors (red, orange, yellow), tight spacing. Warm space feels energetic, urgent, intimate. It draws the user in and demands attention.
- **Cool space** — Low density, cool colors (blue, green, purple), loose spacing. Cool space feels calm, spacious, professional. It gives the user room to breathe and think.

Temperature affects mood and behavior:

- Warm interfaces (dashboards, trading platforms, emergency alerts) should use warm space to communicate urgency and importance.
- Cool interfaces (documentation, settings, reading views) should use cool space to communicate calm and trustworthiness.

Temperature must be consistent within a view. Mixing warm and cool space in the same view creates spatial dissonance—the user cannot determine the emotional tone of the interface.

### Space Has Rhythm

Space has rhythm based on the repetition of spatial patterns. Regular spacing creates rhythm; irregular spacing breaks rhythm.

Rhythm affects:

- **Scanability** — Regular rhythm is easier to scan. A list with consistent spacing between items can be scanned quickly. A list with varying spacing requires more effort.
- **Predictability** — Regular rhythm creates expectation. If the spacing between section A and section B is 32px, the user expects the spacing between section B and section C to also be 32px.
- **Harmony** — Regular rhythm feels balanced. The eye perceives regularity as order and responds with a sense of calm.

WHITE DIAMOND enforces rhythm through consistent spacing values. The doubling sequence (4, 8, 16, 32, 64) produces rhythm because each step is a consistent multiple of the base. The user perceives this regularity and responds with a sense of order.

---

## Space Interactions

### Space Between Objects

The space between objects communicates their relationship. This is the most powerful spatial communication tool available.

- **Tight space (4-8px)** — Objects are directly related. A label and its input. An icon and its text. These elements are perceived as a single unit.
- **Medium space (16px)** — Objects are in the same group. Form fields within a section. Items in a list. These elements are perceived as members of the same collection.
- **Loose space (32px)** — Objects are in the same view. Sections on a page. Cards in a grid. These elements are perceived as parts of the same context.
- **Wide space (64px+)** — Objects are in different contexts. A header and a footer. A sidebar and main content. These elements are perceived as structurally distinct.

**Why this rule exists:** Proximity is the primary mechanism by which humans group objects. The Gestalt principle of proximity is not a design convention—it is a perceptual law. Objects that are close together are perceived as related; objects that are far apart are perceived as unrelated. WHITE DIAMOND exploits this law to communicate structure without explicit borders.

### Space Within Objects

The space inside objects (padding) communicates their importance and density:

- **Tight padding** — Compact, informational, dense. Used for: data tables, compact lists, secondary elements.
- **Medium padding** — Standard, balanced, readable. Used for: cards, form sections, navigation items.
- **Loose padding** — Prominent, spacious, important. Used for: hero sections, primary actions, featured content.

**Why this rule exists:** Padding communicates the importance of the content within. More padding means more prominence. Less padding means less prominence. Consistent padding within a view ensures that the importance hierarchy is communicated clearly.

### Space Around Objects

The space outside objects (margins) communicates their prominence and isolation:

- **No margin** — Object is part of a group. It is flush with its neighbors.
- **Small margin (4-8px)** — Object is slightly separated. It is distinct but connected.
- **Medium margin (16px)** — Object is distinct. It stands on its own.
- **Large margin (32px+)** — Object is prominent. It is isolated and emphasized.

**Why this rule exists:** Margins communicate isolation. More margin means more isolation. Less margin means less isolation. An element with large margins is visually separated from its neighbors, drawing attention to itself. An element with no margins is visually connected to its neighbors, appearing as part of a group.

---

## Space Rules

### Rule 1: Space Is Consistent

The same type of spacing must use the same value throughout a view. If section spacing is 32px in one place, it must be 32px everywhere. If card padding is 16px on one card, it must be 16px on all cards.

**Why this rule exists:** Inconsistent spacing breaks rhythm and creates visual noise. The eye detects irregularity immediately. When spacing varies without reason, the user perceives disorder and loses trust in the interface's structure.

### Rule 2: Space Is Proportional

Spacing values must relate to each other through consistent ratios. WHITE DIAMOND uses the doubling sequence (4, 8, 16, 32, 64). Each step represents a clear increase in spatial separation.

**Why this rule exists:** Proportional spacing creates visual rhythm. The eye can predict the next spacing value before seeing it. This predictability makes the interface feel deliberate and unified.

### Rule 3: Space Is Purposeful

Every space must serve a purpose:

- **Separation** — Keeping unrelated elements apart
- **Grouping** — Keeping related elements together
- **Emphasis** — Making important elements stand out
- **Rhythm** — Creating consistent visual flow

Space without purpose is waste. An empty gap that communicates nothing is visual noise. If removing a space does not change the user's understanding of the interface, the space should not exist.

**Why this rule exists:** Every unnecessary space adds cognitive load. The user must process it, interpret it, and assign meaning to it. If it has no meaning, that processing is wasted.

### Rule 4: Space Is Responsive

Space must adapt to context:

- **Screen size** — More space on larger screens. A desktop viewport can accommodate generous spacing; a phone viewport cannot.
- **Content density** — Less space when content is dense. A data-heavy dashboard requires tighter spacing to fit all information; a marketing page can afford generous spacing.
- **User preference** — Respect user spacing preferences. Some users prefer compact interfaces; others prefer spacious ones.
- **Accessibility** — Ensure space supports assistive technology. Screen readers need logical spatial relationships. Touch users need adequate spacing between interactive elements.

**Why this rule exists:** Rigid space breaks on different contexts. A layout that works on a 27-inch monitor fails on a 5-inch phone. Responsive space ensures that the interface remains functional and coherent across all contexts.

### Rule 5: Space Is Alive

Space should respond to interaction:

- **Hover** — Space around hovered elements contracts slightly, pulling the user's attention toward the element.
- **Focus** — Space around focused elements expands slightly, giving the element breathing room.
- **Active** — Space around active elements changes to indicate activity (compression, color shift, or shadow change).
- **Transition** — Space changes smoothly, not abruptly. Spatial transitions use easing curves that mimic physical momentum.

**Why this rule exists:** Static space feels lifeless. Interactive space feels responsive and alive. When space responds to the user's actions, the interface feels like a material substance rather than a flat image. This responsiveness builds trust and confidence.

---

## Spatial Relationships and Distances

### The Distance Matrix

WHITE DIAMOND defines spatial relationships through a distance matrix—a systematic mapping of distances to relationship types:

| Distance | Relationship | Example |
|---|---|---|
| 0px | Identity | The same element |
| 4-8px | Direct association | Label and input, icon and text |
| 16px | Group membership | Fields in a form, items in a list |
| 32px | Context membership | Sections on a page, cards in a grid |
| 64px | Structural separation | Header and content, sidebar and main |
| 128px+ | View separation | Different views, different pages |

### The Proximity Principle

Objects that are close together are perceived as related. Objects that are far apart are perceived as unrelated. This principle is absolute—it overrides color, shape, size, and other visual properties.

A red button next to a blue button will be perceived as related to the blue button, despite the color difference. A red button far from any other element will be perceived as isolated, despite sharing color with other red elements.

**Why this principle exists:** Proximity is a fundamental perceptual law. The human brain groups nearby objects automatically and unconsciously. No amount of design skill can override this law—it is hardwired into the visual system.

### The Common Region Principle

Objects that share a common region (a background, a border, a container) are perceived as related, even if they are not close together. The common region acts as a grouping mechanism that supplements proximity.

A set of form fields within a card is perceived as a group, even if the fields are spaced apart. The card boundary creates a common region that overrides the distance between fields.

**Why this principle exists:** Common region is the second-strongest grouping mechanism after proximity. It allows designers to group elements that are physically separated but logically related.

---

## See Also

- [Object Existence](object-existence.md) — How objects exist in space and maintain persistence
- [Screen as Window](screen-as-window.md) — The viewport metaphor and spatial navigation
- [Space Geometry](../geometry/space-geometry.md) — The mathematical foundations of digital space
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define their limits
- [Spacing System](../tokens/spacing-system.md) — Spacing token values and their relationships
