# Card Specification

## Why This Matters

Cards are the primary container for grouping related content in the WHITE DIAMOND spatial environment. A card is not a visual styling technique—it is an architectural construction that defines a region of space where related information lives together. Without consistent card behavior, content feels disconnected and users cannot understand relationships between information. The card specification ensures predictable, accessible, and spatially coherent content grouping.

## What Is a Card?

A card is a container that groups related content within a defined spatial boundary. In WHITE DIAMOND, a card is:

- **A spatial container** — It defines a region of space where related content lives
- **A grouping mechanism** — It communicates that content within its boundaries is related
- **An interactive surface** — It can be clicked or contain actions
- **A structural framework** — It provides a consistent structure for similar content
- **A communicative form** — Its structure communicates its purpose

Cards are not just visual styling—they communicate grouping. A card without a boundary is not a card—it is a visual suggestion.

## The Three-Layer Hierarchy for Cards

### Physical Boundary

The card's outermost container defines its footprint in space:

- **Border** — The explicit edge that separates the card from surrounding space. Without a border, the card does not exist. The border is always visible, always defined, and always present.
- **Dimensions** — The card's width and height define how much space it occupies. Cards adapt to content but maintain minimum dimensions.
- **Mass expression** — Border weight communicates the card's importance. Thicker borders suggest greater mass.
- **Elevation** — The card exists at a specific height above the base plane. Shadows indicate this elevation and create depth.

### Inner Surface

The region between the boundary and the content:

- **Background** — The card's surface treatment. Always present, even when transparent.
- **Padding** — The space between the boundary and the content. Consistent across all cards of the same type.
- **Visual treatment** — Color, texture, and other surface properties that communicate the card's purpose.
- **Transition zone** — The area where the boundary meets the surface, creating the card's visual weight.

### Content

The actual information within the card:

- **Title** — The card's primary label. Always present, always descriptive.
- **Description** — Additional information about the card's content.
- **Media** — Optional images, videos, or illustrations that support the content.
- **Actions** — Optional buttons or links that provide interaction.
- **Metadata** — Additional information about the content (dates, authors, categories).

## Card Types

### Content Card

Displays content with optional actions—the most common spatial container:

- **Use** — Articles, posts, products, any content that needs grouping
- **Content** — Title, description, image, actions
- **Example** — Blog post preview, product listing
- **Spatial behavior** — Occupies a defined region, groups related content, maintains structural consistency

### Data Card

Displays data metrics—a specialized spatial container for numbers:

- **Use** — Dashboards, analytics, any data that needs emphasis
- **Content** — Value, label, trend, comparison
- **Example** — Revenue, users, conversion rate
- **Spatial behavior** — Emphasizes numerical data, maintains visual hierarchy between value and label

### Action Card

Triggers actions—an interactive spatial container:

- **Use** — Quick actions, shortcuts, any action that needs context
- **Content** — Icon, title, description
- **Example** — "Create new", "Upload file"
- **Spatial behavior** — Functions as a large button, provides context for the action

### Profile Card

Displays user information—a personal spatial container:

- **Use** — User profiles, team members, any user data
- **Content** — Avatar, name, role, actions
- **Example** — Team member, contact
- **Spatial behavior** — Personalizes the space, creates visual identity

### Media Card

Displays media content—a visual spatial container:

- **Use** — Images, videos, galleries, any visual content
- **Content** — Media, title, description, actions
- **Example** — Photo gallery, video playlist
- **Spatial behavior** — Emphasizes visual content, provides context for media

### Stat Card

Displays statistical data—a quantitative spatial container:

- **Use** — Analytics, reporting, any data visualization
- **Content** — Value, label, chart, comparison
- **Example** — Monthly active users, revenue growth
- **Spatial behavior** — Emphasizes trends and comparisons, provides visual context for data

## Card Anatomy

```
┌─────────────────────────────┐
│ Header (optional)           │
├─────────────────────────────┤
│                             │
│ Media (optional)            │
│                             │
├─────────────────────────────┤
│                             │
│ Content                     │
│ - Title                     │
│ - Description               │
│ - Meta                      │
│                             │
├─────────────────────────────┤
│ Actions (optional)          │
│ [Button] [Button]           │
└─────────────────────────────┘
```

### Required Elements

- **Content area** — Where primary content lives. Always present, always structured.
- **Clear boundaries** — Visual separation from surroundings. Always defined, always visible.

### Optional Elements

- **Header** — Title, icon, or navigation. Provides context and navigation.
- **Media** — Image, video, or illustration. Provides visual context.
- **Actions** — Buttons or links. Provides interaction.
- **Footer** — Metadata or secondary actions. Provides additional context.

## Card States

### Default State

The card's resting appearance—its state after all interactions:

- **Visual** — Normal appearance with defined border, background, and content
- **Mass** — Base elevation, standard shadow
- **Functional** — Ready for interaction (if clickable), content visible
- **Spatial** — At rest, occupying its designated position
- **Accessible** — Visible, focusable (if interactive), and clearly structured

### Hover State

When the cursor approaches—the spatial signal that interaction is imminent:

- **Visual** — Subtle elevation change (shadow deepens), border color shifts
- **Mass** — Elevation increases slightly, shadow deepens
- **Cursor** — Changes (if clickable), indicating interactivity
- **Spatial** — The card lifts slightly, acknowledging the approaching force
- **Accessible** — Indicates interactivity, provides visual feedback

### Focus State

When the card has keyboard focus—the spatial indicator of keyboard navigation:

- **Visual** — Visible focus indicator (outline, ring) that is always visible
- **Mass** — Same as default, but highlighted
- **Functional** — Ready for keyboard interaction
- **Spatial** — The card is highlighted, indicating its position in the keyboard map
- **Accessible** — Visible focus for keyboard users, never hidden

### Active State

When the card is being interacted with—the moment of applied force:

- **Visual** — Pressed appearance (slight compression, color change)
- **Mass** — Elevation decreases, shadow reduces, card compresses
- **Functional** — Confirms interaction, returns to default on release
- **Spatial** — The card demonstrates physics by compressing under pressure
- **Accessible** — Indicates current action, confirms interaction

### Selected State

When the card is in a selected state—a spatial indication of choice:

- **Visual** — Different background or border, indicates selection state
- **Mass** — Same as default, but with visual emphasis
- **Functional** — Indicates selection, can be toggled
- **Spatial** — The card is highlighted, indicating its position in a selection
- **Accessible** — Communicates selection status

### Disabled State

When the card is not available—a spatial indication of unavailability:

- **Visual** — Reduced opacity, not interactive, content still visible
- **Mass** — Reduced elevation, minimal shadow, card recedes
- **Functional** — Not interactive, does not respond to interaction
- **Spatial** — The card indicates it is not part of the active space
- **Accessible** — Indicates unavailability, explains why through context

## Card Appearance Sequence

When a card enters the viewport, it follows the WHITE DIAMOND appearance sequence:

1. **Entry from outside** — The card slides into view from outside the viewport boundary
2. **Boundary establishment** — The physical boundary becomes visible, defining the card's footprint
3. **Surface filling** — The inner surface fills with color and treatment
4. **Content reveal** — The title, description, and other content become visible
5. **Elevation settling** — The card settles to its resting elevation, shadow stabilizes

The card never appears from nothing. It always enters from outside, maintaining spatial continuity.

## Card Disappearance Sequence

When a card exits the viewport:

1. **Elevation lift** — The card rises slightly, indicating departure
2. **Content fade** — The content fades, maintaining structure
3. **Surface draining** — The inner surface loses color
4. **Boundary dissolution** — The physical boundary fades
5. **Exit to outside** — The card slides out of the viewport boundary

The card never disappears. It always exits to outside, maintaining spatial continuity.

## Card Timing and Physics

### Timing Specifications

- **Hover response** — 150ms transition for elevation and shadow changes
- **Active response** — 50ms transition for compression and release
- **Focus response** — Immediate appearance of focus indicator
- **Content reveal** — 200ms transition for content appearance
- **Selection response** — 150ms transition for selection state change

### Physics Behavior

- **Inertia** — The card resists movement, then transitions smoothly
- **Momentum** — The card maintains motion during state changes
- **Friction** — Interactions resist movement, then release
- **Gravity** — Related cards attract, unrelated cards repel
- **Collision** — Cards cannot overlap without explicit spatial relationships

## Card Behavior and Feedback

### Interaction

Cards can respond to:
- **Click/Tap** — If the entire card is clickable, providing a large interaction target
- **Hover** — Show additional information or actions, providing contextual feedback
- **Focus** — Keyboard navigation, enabling accessibility
- **Long press** — Context menu (mobile), providing additional options

### Content Overflow

When content exceeds card boundaries:
- **Text truncation** — Ellipsis for single-line overflow, maintaining structure
- **Text wrapping** — Multi-line with max-height, maintaining readability
- **Scroll** — Internal scroll for overflow content, maintaining containment
- **Expand** — Expand to fit content (if appropriate), maintaining completeness

### Responsive Behavior

Cards must adapt to different sizes:
- **Full width** — On small screens, maximizing space usage
- **Grid columns** — On medium screens, maintaining visual rhythm
- **Fixed width** — On large screens (if specified), maintaining structure

## Card Rules

### Rule 1: Cards Have Clear Boundaries

Every card must have clear visual boundaries because:
- **Border** — Explicit card edge, defining where content lives
- **Background** — Different from page background, creating visual separation
- **Shadow** — Depth cue (optional but recommended), creating spatial hierarchy
- **Spacing** — Space from other cards, preventing collision

Cards without boundaries don't communicate grouping. They are visual suggestions, not architectural constructions.

### Rule 2: Cards Group Related Content

Content within a card must be related because:
- **Single topic** — One subject per card, maintaining focus
- **Related actions** — Actions relevant to the content, maintaining context
- **Consistent structure** — Similar cards have similar structure, maintaining predictability
- **Clear hierarchy** — Title, content, actions in order, maintaining readability

Cards with unrelated content confuse users. They break the principle of communicative form.

### Rule 3: Cards Are Consistent

Similar cards must have similar structure because:
- **Same layout** — Same element order, maintaining predictability
- **Same spacing** — Same internal spacing, maintaining visual rhythm
- **Same typography** — Same text hierarchy, maintaining readability
- **Same interactions** — Same click/hover behavior, maintaining consistency

Inconsistent cards break visual rhythm. They create cognitive load.

### Rule 4: Cards Are Accessible

Cards must work with assistive technology because:
- **Semantic HTML** — Use article, section, or div with role, communicating structure
- **Heading hierarchy** — Proper heading levels within cards, maintaining accessibility
- **Link accessibility** — Card links are keyboard accessible, enabling navigation
- **Image alt text** — All images have alt text, communicating visual content

Inaccessible cards exclude users from the spatial environment.

### Rule 5: Cards Are Interactive When Appropriate

If a card is clickable, the entire card should be clickable because:
- **Large click target** — Easier to click, improving usability
- **Visual affordance** — Cursor change, hover effect, indicating interactivity
- **Accessible** — Keyboard accessible, enabling navigation
- **Clear indication** — Users know it's clickable, reducing confusion

Partially clickable cards confuse users. They create uncertainty about what is interactive.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist as architectural constructions
- [Button Specification](button-specification.md) — Button as action trigger
- [Input Specification](input-specification.md) — Input as data vessel
- [Modal Specification](modal-specification.md) — Modal as focused environment
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits