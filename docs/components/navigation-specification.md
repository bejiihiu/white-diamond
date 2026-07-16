# Navigation Specification

## Why This Matters

Navigation is how users move through interfaces. Without consistent navigation behavior, users cannot predict where links lead, how to return, or where they are. The navigation specification ensures predictable, accessible, and spatially coherent wayfinding.

## What Is Navigation?

Navigation helps users move between views, pages, or sections. Navigation is:
- **Wayfinding** — Shows where users are
- **Movement** — Enables going somewhere else
- **Orientation** — Provides context about location
- **Hierarchy** — Shows structure of the interface

Navigation is not just links—it is the spatial map of the interface.

## Navigation Types

### Primary Navigation

Main interface navigation:
- **Use** — Top-level sections
- **Placement** — Header, sidebar
- **Example** — Main menu, tab bar

### Secondary Navigation

Supporting navigation:
- **Use** — Subsections, related content
- **Placement** — Sidebar, below primary
- **Example** — Section menu, related links

### Tertiary Navigation

Contextual navigation:
- **Use** — Within content, page-specific
- **Placement** — Within content areas
- **Example** — In-page links, anchor navigation

### Utility Navigation

Functional navigation:
- **Use** — Account, settings, help
- **Placement** — Header, footer
- **Example** — User menu, settings link

### Breadcrumb Navigation

Location navigation:
- **Use** — Shows hierarchy path
- **Placement** — Above content
- **Example** — Home > Products > Category

### Pagination Navigation

Sequential navigation:
- **Use** — Moving through pages
- **Placement** — Below content
- **Example** — Previous, 1, 2, 3, Next

## Navigation Anatomy

### Link Navigation

Simple links:
```
[Link 1] [Link 2] [Link 3]
```

### Menu Navigation

Dropdown or expandable:
```
Menu Trigger
  ├─ Item 1
  ├─ Item 2
  └─ Item 3
```

### Tab Navigation

Switching between views:
```
[Tab 1] [Tab 2] [Tab 3]
─────────────────────────
Content for active tab
```

### Sidebar Navigation

Persistent side navigation:
```
┌─────────┬─────────────────┐
│ Nav 1   │                 │
│ Nav 2   │  Content        │
│ Nav 3   │                 │
└─────────┴─────────────────┘
```

## Navigation States

### Default
- Normal appearance
- Ready for interaction
- Not currently active

### Hover
- Subtle appearance change
- Cursor changes to pointer
- Indicates interactivity

### Focus
- Visible focus indicator
- Keyboard accessible
- Clear focus ring

### Active/Current
- Different appearance (color, weight)
- Indicates current location
- Cannot be clicked (already there)

### Expanded
- Shows child items
- Different icon (chevron down)
- Children visible

### Collapsed
- Hides child items
- Different icon (chevron right)
- Children hidden

## Navigation Behavior

### Link Navigation

Links respond to:
- **Click/Tap** — Navigate to destination
- **Enter key** — Navigate when focused
- **Right-click** — Context menu (optional)
- **Middle-click** — Open in new tab (optional)

### Menu Navigation

Menus respond to:
- **Click/Tap** — Toggle menu open/close
- **Hover** — Open menu (optional)
- **Escape** — Close menu
- **Arrow keys** — Navigate menu items
- **Enter** — Activate menu item
- **Tab** — Move to next menu item

### Tab Navigation

Tabs respond to:
- **Click/Tap** — Switch to tab content
- **Arrow keys** — Navigate between tabs
- **Enter/Space** — Activate focused tab
- **Tab** — Move to tab content

## Navigation Rules

### Rule 1: Navigation Is Consistent

Navigation must be consistent across the interface:
- **Same position** — Navigation in same location
- **Same behavior** — Same interactions everywhere
- **Same appearance** — Same visual treatment
- **Same hierarchy** — Same level structure

Inconsistent navigation disorients users.

### Rule 2: Navigation Shows Location

Users must always know where they are:
- **Active state** — Current page/section highlighted
- **Breadcrumbs** — Show hierarchy path
- **Page title** — Clear page identification
- **Visual cues** — Color, weight, underline

Users lost in navigation abandon interfaces.

### Rule 3: Navigation Is Accessible

Navigation must work for all users:
- **Keyboard accessible** — All links keyboard focusable
- **Screen reader** — Clear link text, proper heading hierarchy
- **Focus visible** — Clear focus indicators
- **Skip links** — Skip navigation option

Inaccessible navigation excludes users.

### Rule 4: Navigation Is Responsive

Navigation must adapt to screen size:
- **Mobile** — Simplified, hamburger menu
- **Tablet** — Condensed, sidebar collapsible
- **Desktop** — Full navigation visible
- **Large desktop** — Expanded navigation

Rigid navigation breaks on different devices.

### Rule 5: Navigation Is Predictable

Users must be able to predict navigation behavior:
- **Same links** — Same destination everywhere
- **Same labels** — Same link, same text
- **Same position** — Same link, same location
- **Same behavior** — Same link, same action

Unpredictable navigation confuses users.

## Navigation Patterns

### Top Navigation

Horizontal navigation at top:
```
┌─────────────────────────────────┐
│ Logo    Link 1  Link 2  Link 3 │
├─────────────────────────────────┤
│ Content                         │
└─────────────────────────────────┘
```

Use for: Simple interfaces, marketing sites

### Sidebar Navigation

Vertical navigation on side:
```
┌─────────┬─────────────────────┐
│ Logo    │                     │
│ Link 1  │ Content             │
│ Link 2  │                     │
│ Link 3  │                     │
└─────────┴─────────────────────┘
```

Use for: Complex interfaces, dashboards

### Tab Navigation

Switching between views:
```
┌─────────────────────────────────┐
│ [Tab 1] [Tab 2] [Tab 3]        │
├─────────────────────────────────┤
│ Content for active tab          │
└─────────────────────────────────┘
```

Use for: Related content, settings

### Breadcrumb Navigation

Hierarchical location:
```
Home > Products > Category > Item
```

Use for: Deep hierarchies, e-commerce

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist
- [Button Specification](button-specification.md) — Button behavior and constraints
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access principles
- [Keyboard Navigation](../accessibility/keyboard-navigation.md) — Non-pointer interaction
