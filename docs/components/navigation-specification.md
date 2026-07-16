# Navigation Specification

## Why This Matters

Navigation is how users move through interfaces. In WHITE DIAMOND, navigation is not just a collection of links—it is the spatial map of the environment. Without consistent navigation behavior, users cannot predict where links lead, how to return, or where they are. The navigation specification ensures predictable, accessible, and spatially coherent wayfinding.

## What Is Navigation?

Navigation helps users move between views, pages, or sections. In WHITE DIAMOND, navigation is:

- **A spatial map** — It shows where users are and where they can go
- **A wayfinding system** — It provides orientation within the infinite space
- **A movement mechanism** — It enables travel between spatial locations
- **A hierarchy indicator** — It shows the structure of the interface
- **A memory aid** — It helps users build mental maps of the environment

Navigation is not just links—it is the spatial map of the interface. A navigation system without clear structure is not navigation—it is a collection of directions.

## The Three-Layer Hierarchy for Navigation

### Physical Boundary

The navigation's outermost container defines its footprint in space:

- **Border** — The explicit edge that separates the navigation from surrounding space. Without a border, the navigation does not exist. The border is always visible, always defined, and always present.
- **Dimensions** — The navigation's width and height define how much space it occupies. Navigation has consistent dimensions across the interface.
- **Mass expression** — Border weight communicates the navigation's importance. Thicker borders suggest greater mass.
- **Elevation** — The navigation exists at a specific height above the base plane. Shadows indicate this elevation and create spatial hierarchy.

### Inner Surface

The region between the boundary and the content:

- **Background** — The navigation's surface treatment. Always present, even when transparent.
- **Padding** — The space between the boundary and the content. Consistent across all navigation of the same type.
- **Visual treatment** — Color, texture, and other surface properties that communicate the navigation's purpose.
- **Transition zone** — The area where the boundary meets the surface, creating the navigation's visual weight.

### Content

The actual information within the navigation:

- **Links** — The destinations users can travel to. Always present, always descriptive.
- **Labels** — Text describing the destinations. Always visible, always clear.
- **Icons** — Optional visual representations of the destinations.
- **Indicators** — Visual cues showing current location and state.
- **Hierarchy markers** — Visual cues showing the structure of the navigation.

## Navigation Types

### Primary Navigation

Main interface navigation—the most prominent spatial map:

- **Use** — Top-level sections, the main destinations in the environment
- **Placement** — Header, sidebar, the most prominent positions
- **Example** — Main menu, tab bar
- **Spatial behavior** — Occupies the most prominent position, provides the main wayfinding

### Secondary Navigation

Supporting navigation—a secondary spatial map:

- **Use** — Subsections, related content, supporting destinations
- **Placement** — Sidebar, below primary, supporting positions
- **Example** — Section menu, related links
- **Spatial behavior** — Occupies supporting positions, provides secondary wayfinding

### Tertiary Navigation

Contextual navigation—a contextual spatial map:

- **Use** — Within content, page-specific, contextual destinations
- **Placement** — Within content areas, contextual positions
- **Example** — In-page links, anchor navigation
- **Spatial behavior** — Occupies contextual positions, provides contextual wayfinding

### Utility Navigation

Functional navigation—a functional spatial map:

- **Use** — Account, settings, help, functional destinations
- **Placement** — Header, footer, functional positions
- **Example** — User menu, settings link
- **Spatial behavior** — Occupies functional positions, provides functional wayfinding

### Breadcrumb Navigation

Location navigation—a location spatial map:

- **Use** — Shows hierarchy path, the path from the root to the current location
- **Placement** — Above content, location positions
- **Example** — Home > Products > Category
- **Spatial behavior** — Shows the path traveled, provides reverse navigation

### Pagination Navigation

Sequential navigation—a sequential spatial map:

- **Use** — Moving through pages, sequential destinations
- **Placement** — Below content, sequential positions
- **Example** — Previous, 1, 2, 3, Next
- **Spatial behavior** — Shows the sequence, provides sequential navigation

## Navigation Anatomy

### Link Navigation

Simple links—the most basic spatial connections:

```
[Link 1] [Link 2] [Link 3]
```

### Menu Navigation

Dropdown or expandable—a hierarchical spatial structure:

```
Menu Trigger
  ├─ Item 1
  ├─ Item 2
  └─ Item 3
```

### Tab Navigation

Switching between views—a transformative spatial structure:

```
[Tab 1] [Tab 2] [Tab 3]
─────────────────────────
Content for active tab
```

### Sidebar Navigation

Persistent side navigation—a persistent spatial structure:

```
┌─────────┬─────────────────┐
│ Nav 1   │                 │
│ Nav 2   │  Content        │
│ Nav 3   │                 │
└─────────┴─────────────────┘
```

## Navigation States

### Default State

The navigation's resting appearance—its state after all interactions:

- **Visual** — Normal appearance with defined border, background, and content
- **Mass** — Base elevation, standard shadow
- **Functional** — Ready for interaction, not currently active
- **Spatial** — At rest, occupying its designated position
- **Accessible** — Visible, focusable, and clearly interactive

### Hover State

When the cursor approaches—the spatial signal that interaction is imminent:

- **Visual** — Subtle appearance change, border color shifts
- **Mass** — Slight elevation increase, shadow deepens
- **Cursor** — Changes to pointer, indicating interactivity
- **Spatial** — The navigation lifts slightly, acknowledging the approaching force
- **Accessible** — Indicates interactivity, provides visual feedback

### Focus State

When the navigation has keyboard focus—the spatial indicator of keyboard navigation:

- **Visual** — Visible focus indicator (outline, ring) that is always visible
- **Mass** — Same as default, but highlighted
- **Functional** — Ready for keyboard interaction
- **Spatial** — The navigation is highlighted, indicating its position in the keyboard map
- **Accessible** — Visible focus for keyboard users, never hidden

### Active/Current State

When the navigation indicates current location—a spatial indication of position:

- **Visual** — Different appearance (color, weight), indicating current location
- **Mass** — Same as default, but with visual emphasis
- **Functional** — Indicates current location, cannot be clicked (already there)
- **Spatial** — The navigation is highlighted, indicating the current position in the environment
- **Accessible** — Communicates current location

### Expanded State

When the navigation shows child items—a spatial indication of hierarchy:

- **Visual** — Shows child items, different icon (chevron down), indicating expansion
- **Mass** — Same as default, but with expanded content
- **Functional** — Shows child items, providing hierarchical navigation
- **Spatial** — The navigation expands, revealing the spatial hierarchy
- **Accessible** — Communicates expansion state

### Collapsed State

When the navigation hides child items—a spatial indication of hierarchy:

- **Visual** — Hides child items, different icon (chevron right), indicating collapse
- **Mass** — Same as default, but with collapsed content
- **Functional** — Hides child items, providing compact navigation
- **Spatial** — The navigation contracts, hiding the spatial hierarchy
- **Accessible** — Communicates collapse state

## Navigation Appearance Sequence

When navigation enters the viewport, it follows the WHITE DIAMOND appearance sequence:

1. **Entry from outside** — The navigation slides into view from outside the viewport boundary
2. **Boundary establishment** — The physical boundary becomes visible, defining the navigation's footprint
3. **Surface filling** — The inner surface fills with color and treatment
4. **Content reveal** — The links and labels become visible
5. **Elevation settling** — The navigation settles to its resting elevation, shadow stabilizes

The navigation never appears from nothing. It always enters from outside, maintaining spatial continuity.

## Navigation Disappearance Sequence

When navigation exits the viewport:

1. **Elevation lift** — The navigation rises slightly, indicating departure
2. **Content fade** — The links and labels fade, maintaining structure
3. **Surface draining** — The inner surface loses color
4. **Boundary dissolution** — The physical boundary fades
5. **Exit to outside** — The navigation slides out of the viewport boundary

The navigation never disappears. It always exits to outside, maintaining spatial continuity.

## Navigation Timing and Physics

### Timing Specifications

- **Hover response** — 150ms transition for appearance changes
- **Focus response** — Immediate appearance of focus indicator
- **Active response** — Immediate indication of current location
- **Expand response** — 200ms transition for expansion
- **Collapse response** — 200ms transition for collapse
- **Page transition** — 300ms transition for content change

### Physics Behavior

- **Inertia** — The navigation resists movement, then transitions smoothly
- **Momentum** — The navigation maintains motion during state changes
- **Friction** — Interactions resist movement, then release
- **Gravity** — Related navigation items attract, unrelated items repel
- **Collision** — Navigation items cannot overlap without explicit spatial relationships

## Navigation Behavior and Feedback

### Link Navigation

Links respond to:
- **Click/Tap** — Navigate to destination, moving to a new spatial location
- **Enter key** — Navigate when focused, confirming selection
- **Right-click** — Context menu (optional), providing additional options
- **Middle-click** — Open in new tab (optional), providing parallel navigation

### Menu Navigation

Menus respond to:
- **Click/Tap** — Toggle menu open/close, expanding or collapsing the spatial hierarchy
- **Hover** — Open menu (optional), providing hover navigation
- **Escape** — Close menu, returning to the previous state
- **Arrow keys** — Navigate menu items, moving through the spatial hierarchy
- **Enter** — Activate menu item, confirming selection
- **Tab** — Move to next menu item, navigating the spatial hierarchy

### Tab Navigation

Tabs respond to:
- **Click/Tap** — Switch to tab content, transforming the spatial view
- **Arrow keys** — Navigate between tabs, moving through the spatial options
- **Enter/Space** — Activate focused tab, confirming selection
- **Tab** — Move to tab content, navigating to the spatial content

## Navigation Rules

### Rule 1: Navigation Is Consistent

Navigation must be consistent across the interface because:
- **Same position** — Navigation in same location, maintaining spatial memory
- **Same behavior** — Same interactions everywhere, maintaining predictability
- **Same appearance** — Same visual treatment, maintaining consistency
- **Same hierarchy** — Same level structure, maintaining spatial understanding

Inconsistent navigation disorients users. It breaks the principle of spatial memory.

### Rule 2: Navigation Shows Location

Users must always know where they are because:
- **Active state** — Current page/section highlighted, indicating position
- **Breadcrumbs** — Show hierarchy path, showing the path traveled
- **Page title** — Clear page identification, confirming location
- **Visual cues** — Color, weight, underline, providing visual location

Users lost in navigation abandon interfaces. They lose their spatial orientation.

### Rule 3: Navigation Is Accessible

Navigation must work for all users because:
- **Keyboard accessible** — All links keyboard focusable, enabling navigation
- **Screen reader** — Clear link text, proper heading hierarchy, communicating structure
- **Focus visible** — Clear focus indicators, providing visual navigation
- **Skip links** — Skip navigation option, enabling efficient navigation

Inaccessible navigation excludes users from the spatial environment.

### Rule 4: Navigation Is Responsive

Navigation must adapt to screen size because:
- **Mobile** — Simplified, hamburger menu, maximizing space usage
- **Tablet** — Condensed, sidebar collapsible, maintaining functionality
- **Desktop** — Full navigation visible, maximizing wayfinding
- **Large desktop** — Expanded navigation, maximizing spatial understanding

Rigid navigation breaks on different devices. It fails to adapt to spatial constraints.

### Rule 5: Navigation Is Predictable

Users must be able to predict navigation behavior because:
- **Same links** — Same destination everywhere, maintaining spatial consistency
- **Same labels** — Same link, same text, maintaining communication consistency
- **Same position** — Same link, same location, maintaining spatial memory
- **Same behavior** — Same link, same action, maintaining behavioral consistency

Unpredictable navigation confuses users. It breaks the principle of predictability.

## Navigation Patterns

### Top Navigation

Horizontal navigation at top—the most prominent spatial map:

```
┌─────────────────────────────────┐
│ Logo    Link 1  Link 2  Link 3 │
├─────────────────────────────────┤
│ Content                         │
└─────────────────────────────────┘
```

Use for: Simple interfaces, marketing sites, top-level wayfinding.

### Sidebar Navigation

Vertical navigation on side—the persistent spatial map:

```
┌─────────┬─────────────────────┐
│ Logo    │                     │
│ Link 1  │ Content             │
│ Link 2  │                     │
│ Link 3  │                     │
└─────────┴─────────────────────┘
```

Use for: Complex interfaces, dashboards, persistent wayfinding.

### Tab Navigation

Switching between views—the transformative spatial map:

```
┌─────────────────────────────────┐
│ [Tab 1] [Tab 2] [Tab 3]        │
├─────────────────────────────────┤
│ Content for active tab          │
└─────────────────────────────────┘
```

Use for: Related content, settings, view switching.

### Breadcrumb Navigation

Hierarchical location—the location spatial map:

```
Home > Products > Category > Item
```

Use for: Deep hierarchies, e-commerce, location indication.

## Spatial Memory

Navigation builds spatial memory—the user's mental map of the environment:

- **Position persistence** — Navigation stays in the same place, building spatial memory
- **State persistence** — Navigation remembers its state across sessions, building spatial memory
- **Context persistence** — Navigation maintains context across interactions, building spatial memory
- **Hierarchy persistence** — Navigation maintains its spatial relationships, building spatial memory

Spatial memory reduces cognitive load. Cognitive load reduction creates efficiency.

## See Also

- [Component Philosophy](component-philosophy.md) — Why components exist as architectural constructions
- [Button Specification](button-specification.md) — Button as action trigger
- [Input Specification](input-specification.md) — Input as data vessel
- [Card Specification](card-specification.md) — Card as content container
- [Modal Specification](modal-specification.md) — Modal as focused environment