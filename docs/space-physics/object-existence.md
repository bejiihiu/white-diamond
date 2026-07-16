# Object Existence

## Why This Matters

Objects do not exist in isolation. They exist in spatial relationships with other objects, within a context defined by the viewport, the screen, and the infinite plane beyond. Understanding how objects exist in space ensures that interfaces feel coherent, navigable, and trustworthy.

In WHITE DIAMOND, object existence is not a binary state (exists or does not exist). It is a set of properties—position, extent, relationship, and state—that define how the object relates to everything around it. These properties are persistent, consistent, and governable.

---

## The Principle of Spatial Existence

Every object exists at a specific location, with specific boundaries, in relation to other objects. This existence is defined by four properties:

### Position

Where the object is located in the infinite plane. Position is absolute—the object has a coordinate (x, y) that does not change regardless of what the user does. The viewport may move, revealing different parts of the infinite plane, but the object's position remains fixed.

Position types:

- **Absolute position** — Fixed location in the infinite plane. The object's (x, y) coordinates are constant. The viewport reveals the object when it is within the visible region.
- **Relative position** — Position relative to another object. The object's position is defined as an offset from a reference point (e.g., "16px below the header"). If the reference object moves, the relative object moves with it.
- **Flow position** — Position within the document flow. The object's position is determined by the layout algorithm (block flow, inline flow, grid placement). The object occupies the next available space in the flow.
- **Grid position** — Position within a grid system. The object's position is defined by grid column and row assignments. The object occupies specific grid cells.

### Extent

How much space the object occupies. Extent is defined by the object's physical boundary—the rectangular region that contains it.

Extent components:

- **Size** — Width and height. The dimensions of the physical boundary.
- **Margins** — Space outside the object. Margins push other objects away, creating separation.
- **Padding** — Space inside the object. Padding creates breathing room between the boundary and the content.
- **Boundaries** — Where the object ends. The physical boundary is the absolute limit of the object's spatial extent.

### Relationship

How the object connects to other objects. Every object exists in a web of relationships:

- **Parent** — What contains this object. The parent defines the spatial context in which the object exists.
- **Children** — What this object contains. Children exist within the parent's spatial context.
- **Siblings** — Objects at the same level. Siblings share the same parent and are peers in the spatial hierarchy.
- **Neighbors** — Objects nearby. Neighbors may or may not share a parent, but they are spatially adjacent.

Relationships determine behavior. A child object inherits constraints from its parent. Sibling objects share spacing rules. Neighbor objects affect each other's spatial pressure.

### State

What condition the object is in. State affects appearance, behavior, and interactivity:

- **Default** — Normal, resting state. The object is visible, interactive, and unmodified.
- **Hover** — The pointer is over the object. The object may change appearance to indicate interactivity.
- **Focus** — The object has keyboard focus. The object must have a visible focus indicator.
- **Active** — The object is being interacted with (mouse button down, touch in progress). The object may change appearance to indicate activity.
- **Disabled** — The object is not available for interaction. The object must be visually distinct from interactive objects.
- **Loading** — The object is processing. The object must communicate that it is temporarily unavailable.
- **Error** — A problem occurred. The object must communicate the error and suggest recovery.

---

## Object Permanence

Objects persist even when they are not visible. This is the principle of object permanence—the idea that an object continues to exist when it is outside the viewport.

### The Viewport Is Not Reality

The viewport shows a subset of the infinite plane. Objects outside the viewport still exist. They have not been destroyed. They have not disappeared. They are simply not currently visible.

This has profound implications:

- **Scrolling is revelation, not creation.** When the user scrolls down and new content appears, that content did not come into existence—it was already there, waiting to be revealed.
- **Navigation is translation, not teleportation.** When the user navigates to a new page, the viewport moves to a different region of the infinite plane. The previous page still exists; the user has simply moved their viewport elsewhere.
- **Hidden objects persist.** An object that is hidden (display: none, visibility: hidden) still exists in the spatial model. It has not been destroyed—it has been made invisible.

### The Persistence Rules

WHITE DIAMOND defines persistence rules for different object types:

- **Structural objects** — Persistent across all views. Headers, footers, navigation, sidebars. These objects exist regardless of which page the user is on.
- **View objects** — Persistent within a view. Sections, cards, forms. These objects exist as long as the user is viewing the current page.
- **Transient objects** — Exist temporarily. Tooltips, notifications, toasts, modals. These objects exist for a duration and then cease to exist.
- **Ephemeral objects** — Exist for a single interaction. Hover states, focus rings, drag previews. These objects exist only during the interaction and are destroyed immediately after.

---

## Object Lifecycle

### Creation

Objects come into existence through:

- **Page load** — Objects present on initial render. These objects exist from the moment the page loads.
- **User action** — Objects created by user interaction. A modal appears when the user clicks a button. A tooltip appears when the user hovers.
- **Data change** — Objects created by data updates. A new list item appears when data is added. A notification appears when a server event occurs.
- **System event** — Objects created by system events. An error message appears when a network request fails. A status indicator appears when a background process completes.

### Persistence

Objects persist through:

- **View changes** — Structural objects remain across navigation. The header persists when the user navigates from page A to page B.
- **State changes** — Objects remain across state updates. A form field persists when its value changes. A list item persists when its data is updated.
- **Session persistence** — Objects remain across sessions if saved. User preferences, saved drafts, and cached data persist across browser sessions.

### Destruction

Objects cease to exist through:

- **Explicit removal** — User or system removes the object. A list item is deleted. A notification is dismissed. A modal is closed.
- **Navigation** — Object is no longer in the current view. The viewport has moved to a different region of the infinite plane. The object still exists, but it is no longer visible.
- **State change** — Object is no longer relevant. A loading indicator is replaced by the loaded content. An error message is replaced by the corrected state.
- **Session end** — Object is no longer saved. Ephemeral state (unsaved form data, temporary selections) is destroyed when the session ends.

### The No Birth, No Death Principle

In WHITE DIAMOND, objects do not appear or disappear. They enter and exit the viewport. This distinction is critical:

- **Appear/disappear** implies the object comes into or goes out of existence. This is incorrect. The object always exists; the viewport simply does not always show it.
- **Enter/exit** implies the viewport moves, revealing or concealing the object. This is correct. The viewport is a window into infinite space, and objects exist whether the window shows them or not.

This principle governs all animations:
- **Entry animations** — The viewport reveals the object. The animation shows the object entering the visible region (sliding in from off-screen, fading in from transparency).
- **Exit animations** — The viewport conceals the object. The animation shows the object leaving the visible region (sliding out to off-screen, fading out to transparency).

No animation should make an object appear from nothing or disappear into nothing. Every animation should show the object transitioning between visible and invisible states, always implying that the object exists beyond the viewport.

---

## Object Rules

### Rule 1: Objects Have Clear Ownership

Every object must have a clear owner—the entity that controls its existence:

- **Parent owns children** — Parent controls child existence. When the parent is destroyed, children are destroyed.
- **Component owns elements** — Component controls element existence. When the component unmounts, elements are removed.
- **View owns content** — View controls content existence. When the view changes, content is replaced.
- **User owns data** — User controls data existence. When the user deletes data, the objects representing that data are destroyed.

Objects without ownership cannot be managed. They become orphaned—existing in space but controlled by no one. Orphaned objects are architectural violations.

### Rule 2: Objects Have Consistent Lifecycle

Similar objects must have similar lifecycles:

- **Creation timing** — Similar objects appear at the same time. If one list item appears on page load, all list items appear on page load.
- **Persistence rules** — Similar objects last the same duration. If one card persists across navigation, all cards persist across navigation.
- **Destruction rules** — Similar objects disappear at the same time. If one notification is dismissed after 5 seconds, all notifications are dismissed after 5 seconds.
- **State transitions** — Similar objects change state in the same way. If one button shows a loading state, all buttons show loading states.

Inconsistent lifecycles confuse users about object permanence. If one object persists and a similar object does not, the user cannot predict which objects will survive state changes.

### Rule 3: Objects Communicate State Changes

When an object changes state, the change must be visible. Hidden state changes create confusion:

- **Visual changes** — Color, size, position changes. A button changes color when hovered. A card changes background when selected.
- **Motion changes** — Animations and transitions. A modal slides in when opened. A notification fades in when created.
- **Content changes** — Text, icon, value changes. A counter updates when incremented. A status label changes when the status changes.
- **Boundary changes** — Border, shadow, opacity changes. An input gains a focus ring when focused. A card gains a shadow when elevated.

### Rule 4: Objects Respond to Context

Objects must adapt to their context:

- **Screen size** — Objects scale to available space. A card on a phone is narrower than a card on a desktop. The card's content adapts to the available width.
- **Content** — Objects accommodate their content. A text field expands to fit its label. A card expands to fit its content.
- **User preference** — Objects respect user settings. If the user prefers reduced motion, animations are disabled. If the user prefers high contrast, colors are adjusted.
- **Accessibility** — Objects work with assistive technology. Every object must have an accessible name, role, and state. Screen readers must be able to announce object existence and state changes.

### Rule 5: Objects Have Memory

Objects should remember their state:

- **Form inputs** — Remember entered values. If the user navigates away and returns, the form retains its data.
- **Scroll position** — Remember where the user was. If the user navigates away and returns, the scroll position is restored.
- **Expanded state** — Remember what was open. If the user collapses a section and returns, the section remains collapsed.
- **Selection state** — Remember what was selected. If the user selects items and navigates away, the selection is preserved.

Memoryless objects frustrate users. They force the user to re-do work, re-navigate to their position, and re-establish context. Memory is not a feature—it is a requirement.

---

## Object Patterns

### The Persistent Object

Objects that exist across all views:

- **Navigation** — Always accessible. Always visible. Never destroyed by navigation.
- **Header** — Always visible. Always provides context. Never hidden.
- **Footer** — Always present. Always provides secondary access. Never removed.
- **Sidebar** — Always available. Always provides supplementary navigation. Never collapsed without user action.

### The Transient Object

Objects that exist temporarily:

- **Tooltips** — Appear on hover, disappear on leave. Exist only while the pointer is over the trigger.
- **Notifications** — Appear for a duration, then disappear. Exist for a defined period, then are destroyed.
- **Toasts** — Appear briefly, then disappear. Exist for a short duration, then are destroyed.
- **Modals** — Appear for interaction, then disappear. Exist while the user is interacting with them, then are destroyed on dismissal.

### The Reactive Object

Objects that respond to data:

- **Lists** — Update when data changes. Items are added, removed, or modified in response to data mutations.
- **Tables** — Update when data changes. Rows, columns, and cells reflect current data state.
- **Charts** — Update when data changes. Visual representations reflect current data values.
- **Forms** — Update when data changes. Field values reflect current data state.

### The Interactive Object

Objects that respond to user input:

- **Buttons** — Respond to clicks. Trigger actions when activated.
- **Inputs** — Respond to typing. Accept and display user-entered data.
- **Sliders** — Respond to dragging. Allow the user to select a value within a range.
- **Toggles** — Respond to toggling. Switch between two states.

---

## See Also

- [Space Behavior](space-behavior.md) — How space reacts to objects and their spatial properties
- [Screen as Window](screen-as-window.md) — The viewport metaphor and spatial navigation
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define their limits
- [Space Geometry](../geometry/space-geometry.md) — The mathematical foundations of digital space
- [Animation Principles](../motion/animation-principles.md) — How motion communicates existence and state changes
