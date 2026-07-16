# Card Specification

## Why This Matters

Cards are the primary container for grouping related content. Without consistent card behavior, content feels disconnected and users cannot understand relationships between information. The card specification ensures predictable, accessible, and spatially coherent content grouping.

## What Is a Card?

A card is a container that groups related content. Cards are:
- **Visual containers** — Have clear boundaries
- **Content aggregators** — Group related information
- **Interactive surfaces** — Can be clicked or contain actions
- **Flexible** — Adapt to different content types

Cards are not just visual styling—they communicate grouping.

## Card Types

### Content Card

Displays content with optional actions:
- **Use** — Articles, posts, products
- **Content** — Title, description, image, actions
- **Example** — Blog post preview, product listing

### Data Card

Displays data metrics:
- **Use** — Dashboards, analytics
- **Content** — Value, label, trend, comparison
- **Example** — Revenue, users, conversion rate

### Action Card

Triggers actions:
- **Use** — Quick actions, shortcuts
- **Content** — Icon, title, description
- **Example** — "Create new", "Upload file"

### Profile Card

Displays user information:
- **Use** — User profiles, team members
- **Content** — Avatar, name, role, actions
- **Example** — Team member, contact

### Media Card

Displays media content:
- **Use** — Images, videos, galleries
- **Content** — Media, title, description, actions
- **Example** — Photo gallery, video playlist

### Stat Card

Displays statistical data:
- **Use** — Analytics, reporting
- **Content** — Value, label, chart, comparison
- **Example** — Monthly active users, revenue growth

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

- **Content area** — Where primary content lives
- **Clear boundaries** — Visual separation from surroundings

### Optional Elements

- **Header** — Title, icon, or navigation
- **Media** — Image, video, or illustration
- **Actions** — Buttons or links
- **Footer** — Metadata or secondary actions

## Card States

### Default
- Normal appearance
- Ready for interaction (if clickable)
- Content visible

### Hover
- Subtle elevation change (shadow)
- Cursor changes (if clickable)
- Indicates interactivity

### Focus
- Visible focus indicator
- Keyboard accessible
- Clear focus ring

### Active
- Pressed appearance
- Confirms interaction
- Returns to default on release

### Selected
- Different background or border
- Indicates selection state
- Can be toggled

### Disabled
- Reduced opacity
- Not interactive
- Content still visible

## Card Behavior

### Interaction

Cards can respond to:
- **Click/Tap** — If the entire card is clickable
- **Hover** — Show additional information or actions
- **Focus** — Keyboard navigation
- **Long press** — Context menu (mobile)

### Content Overflow

When content exceeds card boundaries:
- **Text truncation** — Ellipsis for single-line overflow
- **Text wrapping** — Multi-line with max-height
- **Scroll** — Internal scroll for overflow content
- **Expand** — Expand to fit content (if appropriate)

### Responsive Behavior

Cards must adapt to different sizes:
- **Full width** — On small screens
- **Grid columns** — On medium screens
- **Fixed width** — On large screens (if specified)

## Card Rules

### Rule 1: Cards Have Clear Boundaries

Every card must have clear visual boundaries:
- **Border** — Explicit card edge
- **Background** — Different from page background
- **Shadow** — Depth cue (optional but recommended)
- **Spacing** — Space from other cards

Cards without boundaries don't communicate grouping.

### Rule 2: Cards Group Related Content

Content within a card must be related:
- **Single topic** — One subject per card
- **Related actions** — Actions relevant to the content
- **Consistent structure** — Similar cards have similar structure
- **Clear hierarchy** — Title, content, actions in order

Cards with unrelated content confuse users.

### Rule 3: Cards Are Consistent

Similar cards must have similar structure:
- **Same layout** — Same element order
- **Same spacing** — Same internal spacing
- **Same typography** — Same text hierarchy
- **Same interactions** — Same click/hover behavior

Inconsistent cards break visual rhythm.

### Rule 4: Cards Are Accessible

Cards must work with assistive technology:
- **Semantic HTML** — Use article, section, or div with role
- **Heading hierarchy** — Proper heading levels within cards
- **Link accessibility** — Card links are keyboard accessible
- **Image alt text** — All images have alt text

Inaccessible cards exclude users.

### Rule 5: Cards Are Interactive When Appropriate

If a card is clickable, the entire card should be clickable:
- **Large click target** — Easier to click
- **Visual affordance** — Cursor change, hover effect
- **Accessible** — Keyboard accessible
- **Clear indication** — Users know it's clickable

Partially clickable cards confuse users.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist
- [Button Specification](button-specification.md) — Button behavior and constraints
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define limits
- [Spatial Hierarchy](../spatial-hierarchy/object-structure.md) — How objects are structured
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
