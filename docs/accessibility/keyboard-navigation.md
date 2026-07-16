# Keyboard Navigation

## Why Keyboard Navigation Is Spatial Movement

Keyboard navigation is not a feature for power users. It is not a fallback for mouse users. Keyboard navigation is the primary mechanism for moving through architectural space without direct pointing. Every keypress is a movement instruction—a command that shifts the user's position within the infinite spatial field defined by the [screen as window](../space-physics/screen-as-window.md).

When a user presses Tab, they advance to the next architectural object in the [spatial hierarchy](../spatial-hierarchy/layer-system.md). When they press an arrow key, they navigate within a composite widget—a cluster of objects arranged in a specific spatial pattern. When they press Escape, they exit a constrained spatial region and return to the broader architectural context.

The keyboard is not a mouse replacement. It is a different spatial navigation tool entirely—one that moves through space sequentially rather than spatially, like walking through a building room by room rather than flying over it.

## The Architectural Principle of Keyboard Access

Every interactive element in WHITE DIAMOND space must be:

- **Focusable** — It must be possible to place the user's presence on this object. An unfocusable object is an architectural construction that cannot be entered—a building with no door.
- **Operable** — It must be possible to activate this object through keyboard input. An inoperable object is a sealed door—a boundary that cannot be crossed.
- **Discoverable** — The user must be able to find this object through sequential navigation. An undiscoverable object is a hidden room—an architectural space that exists but cannot be found.
- **Understandable** — The user must know what this object does before activating it. An incomprehensible object is a door without a sign—a boundary that communicates no purpose.

## Focus Management

### Focus Order

Focus order defines the path through architectural space. It determines the sequence in which objects are visited, like a walking tour through a building. The focus order must follow these rules:

**Reading order** — In left-to-right (LTR) layouts, focus moves left to right, top to bottom. This matches the natural reading direction and the way sighted users visually scan architectural space.

**Visual order** — Focus order must match visual layout. If an element appears visually before another in the [spatial hierarchy](../spatial-hierarchy/layer-system.md), it must appear earlier in focus order. This preserves the architectural relationship between objects.

**Logical order** — Focus order must follow user expectations. Navigation menus come before main content. Headers come before body text. This matches the structural logic of the architectural space.

**Document order** — Focus order must match DOM order. The DOM is the structural blueprint of the interface. If the DOM order contradicts the visual order, the architectural space has a structural defect.

Focus order rules:
- **No skipping** — Focus never jumps over elements. Every object in the architectural path must be visited.
- **No trapping** — Focus never gets stuck unexpectedly. The user must always be able to move through space (except within modals, which are [enclosed architectural spaces](../components/modal-specification.md)).
- **No loss** — Focus is never lost. At all times, the system must know where the user is in architectural space.
- **No reversal** — Focus direction is consistent. Tab always moves forward; Shift+Tab always moves backward.

### Focus Indicator

The focus indicator is the visual representation of the user's presence in architectural space. It answers the question: "Where am I?" Without a visible focus indicator, the user is a ghost in the space—present but invisible to themselves.

Focus indicator requirements:

**High contrast** — The focus indicator must have a minimum 3:1 contrast ratio against adjacent colors. This ensures the indicator is visible in all lighting conditions and against all backgrounds. A subtle indicator is a failure—a user who cannot see their focus is lost.

**Consistent style** — The same indicator style must be used for the same types of objects throughout the interface. Buttons get one style; inputs get another; links get another. This consistency creates a visual vocabulary that helps users understand the architectural hierarchy.

**Adequate size** — The focus indicator must be at least 2px in outline width. Thinner indicators are invisible at normal viewing distances. The indicator must be as prominent as the object it highlights.

**Clear shape** — The focus indicator must use outline, not background color change. Background changes cause layout shift, which disrupts the spatial integrity of the architectural construction. Outline does not affect layout—it overlays the architectural space without modifying it.

Focus indicator rules:
- **Always visible** — Never remove focus indicators with `outline: none` or similar CSS. This is the equivalent of removing all signage from a building.
- **Never subtle** — Always clearly visible. If a user has to look closely to find their focus, the indicator has failed.
- **Consistent** — Same indicator for same types. This predictability is the foundation of [absolute control](../philosophy/absolute-control.md).
- **Accessible** — Works in high contrast mode. High contrast mode overrides colors; the focus indicator must survive this override.

### Focus Trapping

Focus trapping confines the user's presence to a specific architectural region. This is necessary when a modal, dropdown, or menu creates an enclosed space within the broader architectural context.

**Modals** — When a modal opens, focus moves into the modal and stays there. The modal is a room within the building. The user cannot walk through the walls to access the space behind the modal. Focus trapping enforces this spatial boundary.

**Dropdowns** — When a dropdown opens, focus stays within the dropdown options. The dropdown is a shelf within a room. The user must select an item from the shelf before returning to the room.

**Menus** — When a menu opens, focus stays within the menu items. The menu is a corridor within the building. The user must reach the end of the corridor before returning to the main space.

**Dialogs** — When a dialog opens, focus stays within the dialog. The dialog is a conversation room. The user must complete the conversation before re-entering the building.

Focus trapping rules:
- **Escape to exit** — Escape key always exits the trap. This is the emergency exit—the guaranteed path back to the broader architectural space.
- **Return focus** — Focus returns to the trigger element on exit. The user must return to where they were before entering the enclosed space.
- **No dead ends** — Users can always escape. No architectural space may trap a user permanently.
- **Clear boundaries** — Users know where focus is. The trapped region must be visually and audibly distinct from the background.

## Keyboard Interactions

### Standard Keys

The following keys form the universal vocabulary of spatial movement:

| Key | Action | Spatial Meaning |
|-----|--------|-----------------|
| `Tab` | Move to next focusable element | Advance to the next object in the architectural path |
| `Shift+Tab` | Move to previous focusable element | Retreat to the previous object in the architectural path |
| `Enter` | Activate buttons, links, menu items | Enter the object—cross its boundary into its inner content |
| `Space` | Activate buttons, toggle checkboxes | Engage the object—apply force to its mechanism |
| `Escape` | Close dropdowns, modals, menus | Exit the enclosed space—return to the broader architectural context |
| `Arrow keys` | Navigate within composite widgets | Move within the object's internal structure |
| `Home` | Move to first item in list | Jump to the beginning of the architectural sequence |
| `End` | Move to last item in list | Jump to the end of the architectural sequence |

### Component-Specific Keys

Each component type has its own keyboard vocabulary that reflects its architectural purpose:

**Buttons**
- `Enter` — Activate the button. This crosses the button's boundary and triggers its action.
- `Space` — Activate the button. This engages the button's mechanism.

**Links**
- `Enter` — Follow the link. This navigates to the link's destination—a new architectural space.

**Inputs**
- `Typing` — Enter text. This places content into the input's [inner surface](../spatial-hierarchy/layer-system.md).
- `Backspace/Delete` — Remove text. This removes content from the inner surface.
- `Arrow keys` — Move cursor. This moves the user's insertion point within the content.
- `Home/End` — Move to start/end. This jumps to the boundaries of the content.
- `Ctrl+A` — Select all. This selects the entire content within the inner surface.
- `Ctrl+C/X/V` — Copy/Cut/Paste. This transfers content between the inner surface and the clipboard.

**Dropdowns**
- `Enter/Space` — Open/close. This opens or closes the dropdown shelf.
- `Arrow up/down` — Navigate options. This moves through the items on the shelf.
- `Escape` — Close without selection. This closes the shelf and returns to the room.

**Tabs**
- `Arrow left/right` — Navigate tabs. This moves between the tab headers—the labels on the filing cabinet drawers.
- `Enter/Space` — Activate tab. This opens the selected drawer.
- `Home/End` — Move to first/last tab. This jumps to the first or last drawer.

**Lists**
- `Arrow up/down` — Navigate items. This moves through the items in the list—the contents of the shelf.
- `Enter/Space` — Select item. This selects the current item from the shelf.
- `Home/End` — Move to first/last item. This jumps to the top or bottom of the shelf.

### Advanced Interactions

**Type-ahead** — Typing characters jumps to matching items in a list or menu. This is a search mechanism—like scanning labels on shelves to find the right one without reading every item sequentially.

**Multi-select** — `Ctrl+click` toggles selection; `Shift+click` selects a range. This allows users to select multiple items from the architectural space—like marking multiple shelves for simultaneous access.

**Drag and drop** — `Space` picks up an item; arrow keys move it; `Space` drops it; `Escape` cancels. This is the keyboard equivalent of physically moving an object through architectural space—lifting it from one location and placing it in another.

## Keyboard Patterns

### Skip Navigation

Skip links allow users to bypass repetitive content and jump directly to the main architectural space. They are the express elevators of the building—shortcuts that skip over floors the user does not need to visit.

```
Skip to main content
Skip to navigation
Skip to footer
```

Skip link rules:
- **First focusable element** — Tab reveals skip link as the first element in the interface. This is the lobby—the entry point to the building.
- **Hidden until focused** — Not visible normally. Skip links are infrastructure, not architecture. They exist to facilitate movement, not to be seen.
- **Visible when focused** — Clearly visible on focus. When the user arrives at the lobby, they must see the elevator options.
- **Works correctly** — Jumps to the correct section. The elevator must go to the floor it promises.

### Roving Tabindex

For composite widgets like tab bars and toolbars, roving tabindex manages focus within the widget without adding every item to the global tab order:

- Only one item has `tabindex="0"` (the active item)
- Other items have `tabindex="-1"` (focusable but not in tab order)
- Arrow keys move the `tabindex="0"` to the next item
- Tab moves to the next widget (not the next item within the widget)

This pattern creates a spatial hierarchy within the widget: the widget is one object in the global tab order, and arrow keys navigate within its internal structure. It is like a filing cabinet—Tab moves between cabinets; arrow keys move between drawers within a cabinet.

### Focus Restoration

When closing overlays, focus must be restored to maintain spatial continuity:

- **Return focus to trigger element** — The user returns to where they were before entering the enclosed space.
- **If trigger is gone** — Focus the first element in the previous context. The building has been restructured; find the nearest stable object.
- **If no previous context** — Focus the main landmark. The user returns to the central architectural space.
- **Never leave focus nowhere** — A user without focus is a ghost in the architectural space—present but unable to interact.

## Keyboard Navigation and Spatial Hierarchy

Keyboard navigation directly implements the WHITE DIAMOND [spatial hierarchy](../spatial-hierarchy/layer-system.md):

**Physical Boundary** — Tab order defines the outer boundary of the navigable space. The sequence of focusable elements forms the perimeter of the architectural construction.

**Inner Surface** — Arrow keys navigate within composite widgets, moving through the inner surface of an object. The inner surface contains the interactive mechanisms that allow the user to engage with the object.

**Content** — Text input keys (typing, backspace, arrow keys within inputs) interact with the content layer—the text, data, and information that the object presents.

Every keypress moves the user through one of these three layers, maintaining the structural integrity of the WHITE DIAMOND hierarchy.

## Keyboard Accessibility Testing

### Manual Testing

1. **Unplug the mouse** — Use keyboard only for the entire testing session
2. **Tab through interface** — Can you reach every object in the architectural space?
3. **Activate elements** — Can you operate every mechanism in every object?
4. **Check focus visibility** — Is focus always visible? Can you always see where you are?
5. **Check focus order** — Is the order logical? Does it match the visual hierarchy?
6. **Check escape** — Can you always escape from enclosed spaces? Can you always return to the broader context?
7. **Check focus restoration** — When you close a modal or dropdown, does focus return to where it was?
8. **Check skip navigation** — Can you bypass repetitive content? Does skip navigation work correctly?

### Automated Testing

Use tools to catch structural violations:
- **axe-core** — Comprehensive keyboard testing that validates focus order, focus visibility, and interaction patterns
- **Lighthouse** — Keyboard accessibility audit that checks for common violations
- **eslint-plugin-jsx-a11y** — React keyboard linting that catches missing keyboard handlers

### Screen Reader Testing

Test keyboard navigation alongside screen reader output:
- **NVDA** — Windows screen reader. Test that keyboard navigation produces correct audio feedback.
- **VoiceOver** — macOS/iOS screen reader. Test that focus order matches the audio announcement order.
- **JAWS** — Windows screen reader. Test that all keyboard interactions produce expected announcements.
- **TalkBack** — Android screen reader. Test mobile keyboard navigation patterns.

## See Also

- [Accessibility Guidelines](./accessibility-guidelines.md) — Universal access principles
- [Screen Readers](./screen-readers.md) — Non-visual perception of architectural space
- [Button Specification](../components/button-specification.md) — Button keyboard behavior
- [Input Specification](../components/input-specification.md) — Input keyboard behavior
- [Modal Specification](../components/modal-specification.md) — Modal focus management
- [Navigation Specification](../components/navigation-specification.md) — Navigation keyboard patterns
- [Object Existence](../space-physics/object-existence.md) — How objects exist in WHITE DIAMOND space
- [Layer System](../spatial-hierarchy/layer-system.md) — The three-layer hierarchy of every object
- [Absolute Control](../philosophy/absolute-control.md) — How predictability creates user control
