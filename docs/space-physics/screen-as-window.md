# Screen as Window

## Why This Matters

The screen is a window into a larger space. Without understanding this metaphor, designers create interfaces that feel flat, disconnected, and spatially incoherent. The window metaphor gives interfaces depth, continuity, and spatial logic. It transforms the screen from a flat surface into a portal—a rectangular opening through which the user views a vast architectural space.

WHITE DIAMOND takes this metaphor seriously. The screen is not the entire space. It is a viewport. It has position, orientation, and movement rules. It reveals and conceals objects as it moves through the infinite plane. This is not poetry—it is the structural foundation of spatial navigation.

---

## The Window Metaphor

### The Infinite Plane

Behind the screen, there is an infinite plane—a two-dimensional Cartesian space that extends indefinitely in all directions. This plane contains all objects: every page, every section, every element. The plane does not have edges. It does not end. It is unbounded.

The viewport is a rectangular region of this plane. It has a fixed width and height (determined by the screen size) and a variable position (determined by the user's navigation). The viewport shows exactly what is inside its rectangle and nothing outside it.

### What the User Sees

The visible area is a subset of the total space. The user understands this intuitively:

- **Content extends beyond the screen.** Scrolling reveals more content. The user knows that there is more to see, even if they cannot currently see it.
- **Navigation leads to other spaces.** Clicking a link moves the viewport to a different region of the infinite plane. The user expects to arrive at a new location.
- **Context exists outside the viewport.** Related content is nearby—above, below, to the left, to the right. The user can reach it by scrolling.
- **History exists behind.** The back button returns the viewport to its previous position. The user can retrace their path.

### The Window Has Orientation

The viewport faces a specific direction in the spatial universe. This orientation is not literal—the viewport does not "look" in a direction. It is structural—the viewport's position within the infinite plane implies a spatial relationship with nearby objects.

- **Up** — Towards headers, navigation, page tops. Content above the viewport is reached by scrolling up.
- **Down** — Towards footers, more content, page bottoms. Content below the viewport is reached by scrolling down.
- **Left** — Towards sidebars, previous content, parent sections. Content to the left is reached by scrolling left or navigating back.
- **Right** — Towards details, next content, child sections. Content to the right is reached by scrolling right or navigating forward.

This orientation is consistent across all views. "Up" always means toward the top of the spatial hierarchy. "Down" always means toward the bottom. "Left" always means toward the parent or previous context. "Right" always means toward the child or next context.

---

## Viewport Movement

### Scrolling

Scrolling moves the viewport through content space. It is the most common form of viewport movement and the most fundamental.

#### Vertical Scrolling

Content extends downward. The viewport moves down to reveal content below the visible area. This is the default scrolling behavior for most interfaces.

- **Natural scroll direction** — Content moves with the gesture. When the user swipes up on a touch device, content moves up, revealing content below. When the user scrolls down with a mouse wheel, content moves up, revealing content below.
- **Scroll indicators** — Show where the user is in the content. A scrollbar on the right edge indicates the total content height and the viewport's current position within it.
- **Scroll snapping** — Align to content boundaries. When the user stops scrolling, the viewport snaps to the nearest content boundary (section edge, card boundary, or page break). This ensures that the viewport always shows complete content, never partial content.
- **Scroll momentum** — Scrolling has physics. The viewport accelerates during the gesture and decelerates after the gesture ends. This mimics physical momentum and feels natural.

#### Horizontal Scrolling

Content extends rightward. The viewport moves right to reveal content beyond the visible area. Horizontal scrolling is less common than vertical scrolling and should be used intentionally.

- **Carousels** — Horizontal scrolling for image galleries, card sets, or feature lists.
- **Timelines** — Horizontal scrolling for chronological content.
- **Data tables** — Horizontal scrolling when columns exceed viewport width.

Horizontal scrolling must be discoverable. The user must be able to see that more content exists to the right. Partially visible elements at the right edge of the viewport signal that more content is available.

#### Bidirectional Scrolling

Content extends both horizontally and vertically. The viewport can move in both directions. Bidirectional scrolling is appropriate for:

- **Dashboards** — Content that exceeds both viewport width and height.
- **Canvas applications** — Drawing tools, whiteboards, or spatial editors.
- **Maps** — Content that extends in all directions.

Bidirectional scrolling must be carefully managed. The user can become lost in two-dimensional space more easily than in one-dimensional space. Scroll indicators, minimaps, and "reset view" controls help the user maintain spatial orientation.

#### No Scrolling

Content fits within the viewport. No scrolling is needed. This is the ideal state for focused, single-purpose views:

- **Login forms** — All content fits on one screen.
- **Confirmation dialogs** — All content fits within the dialog bounds.
- **Full-screen media** — Video, images, or presentations that fill the viewport.

No scrolling is appropriate when:
- The content is small enough to fit within the viewport.
- The user should see all content simultaneously.
- Scrolling would add complexity without benefit.

### Navigation

Navigation jumps the viewport to a different region of the infinite plane. Unlike scrolling (which is continuous movement), navigation is discontinuous—the viewport teleports to a new position.

#### Linear Navigation

Forward and backward through a sequence. The user moves through a series of views in a defined order:

- **Wizard flows** — Step 1 → Step 2 → Step 3 → Complete.
- **Onboarding sequences** — Screen 1 → Screen 2 → Screen 3.
- **Article pagination** — Page 1 → Page 2 → Page 3.

Linear navigation has a clear direction (forward and backward) and a clear sequence (defined order). The user always knows where they are in the sequence and how to return to the previous step.

#### Hierarchical Navigation

Up and down through a hierarchy. The user moves between parent and child contexts:

- **Category → Subcategory → Item** — Drilling down into a hierarchy.
- **Page → Section → Subsection** — Navigating through document structure.
- **Organization → Team → Member** — Navigating through organizational structure.

Hierarchical navigation has a clear direction (up toward parent, down toward child) and a clear structure (tree hierarchy). The user always knows their depth in the hierarchy and how to return to the parent level.

#### Random Navigation

Any space from any space. The user jumps between unrelated views:

- **Global search** — The user searches for a term and navigates directly to the result.
- **Dashboard widgets** — The user clicks a widget and navigates to the detailed view.
- **Cross-linking** — The user clicks a reference and navigates to the referenced content.

Random navigation has no defined direction or sequence. The user can move freely between any two views. Back navigation and breadcrumbs are essential for orientation.

#### Modal Navigation

Temporary spaces that return to origin. The user enters a modal context, interacts with it, and returns to the previous view:

- **Dialogs** — The user opens a dialog, completes an action, and closes the dialog.
- **Overlays** — The user opens an overlay, views content, and closes the overlay.
- **Lightboxes** — The user opens a lightbox, views media, and closes the lightbox.

Modal navigation preserves the origin view. When the modal is closed, the viewport returns to its exact previous position. No scroll state is lost. No context is destroyed.

### State Preservation

The viewport should remember its state. When the user navigates away and returns, the viewport should be in the same condition as when they left:

- **Scroll position** — Where the user was in the content. If the user was scrolled to the middle of a long page, the viewport should return to the middle of that page.
- **Expanded state** — What was open or collapsed. If the user had expanded section 3 and collapsed section 1, those states should be preserved.
- **Selection state** — What was selected or focused. If the user had selected items in a list, those items should still be selected.
- **Form state** — What data was entered. If the user had partially completed a form, the entered data should be preserved.

State preservation rules:

- **Automatic preservation** — No user action required. State is preserved automatically when the user navigates away.
- **Timely restoration** — State is restored immediately on return. The user should not see a flash of default state before their saved state is restored.
- **Graceful degradation** — If state cannot be restored (e.g., data was cleared by a server update), default gracefully to a reasonable state.
- **User control** — Users can reset state if desired. A "reset" or "clear" option should be available for users who want to start fresh.

---

## Window Rules

### Rule 1: The Window Is Consistent

The window should behave consistently across all views. The same scroll behavior, navigation behavior, state behavior, and orientation conventions apply everywhere.

- **Same scroll behavior** — Same scrolling physics (momentum, snapping, indicators) in every view.
- **Same navigation behavior** — Same navigation patterns (back, forward, up, down) in every context.
- **Same state behavior** — Same state preservation rules for every object type.
- **Same orientation** — Same directional conventions (up = toward header, down = toward footer) in every view.

**Why this rule exists:** Inconsistent window behavior disorients users. If scrolling behaves differently on different pages, the user cannot predict the result of a scroll gesture. If navigation conventions change between views, the user cannot predict where a click will take them. Consistency builds trust and enables prediction.

### Rule 2: The Window Is Responsive

The window must adapt to different sizes. The viewport is not fixed—it varies based on the device, the window size, and the user's configuration.

- **Phone** — Small viewport, focused content. The viewport shows a narrow slice of the infinite plane. Content is stacked vertically. Navigation is simplified.
- **Tablet** — Medium viewport, balanced content. The viewport shows a wider slice. Content can use side-by-side layouts. Navigation can show more options.
- **Desktop** — Large viewport, expanded content. The viewport shows a wide slice. Content can use multi-column layouts. Navigation can be fully expanded.
- **Ultrawide** — Very large viewport, spread content. The viewport shows an extremely wide slice. Content may need to be constrained to prevent unreadable line lengths.

**Why this rule exists:** The window adapts; the content remains coherent. A layout that works on desktop must not break on phone. Content that is readable on a large screen must not be unreadable on a small screen. Responsive design ensures that the viewport metaphor holds across all device sizes.

### Rule 3: The Window Is Predictable

Users must be able to predict window behavior. Every action should have an expected result:

- **Scroll behavior** — Predictable from content structure. If content extends below the viewport, the user expects to scroll down to see it.
- **Navigation behavior** — Predictable from link labels. If a link says "Settings," the user expects to navigate to the settings view.
- **State behavior** — Predictable from previous experience. If the user closed a section last time, they expect it to be closed this time.
- **Orientation behavior** — Predictable from spatial conventions. If the user navigates "back," they expect to return to the previous view.

**Why this rule exists:** Unpredictable windows confuse users. If scrolling does not reveal expected content, the user feels lost. If navigation does not lead to the expected destination, the user feels disoriented. Predictability enables confidence.

### Rule 4: The Window Is Forgiving

Users must be able to recover from mistakes:

- **Back navigation** — Always available. The user can always return to the previous view.
- **Undo** — Reversible actions. The user can undo destructive actions (delete, move, modify).
- **State reset** — Return to defaults. The user can reset the viewport to its default state (scroll to top, expand all, clear selections).
- **Error recovery** — Clear error messages and recovery paths. When an error occurs, the user knows what happened and how to fix it.

**Why this rule exists:** Unforgiving windows frustrate users. If the user cannot go back, they feel trapped. If the user cannot undo a mistake, they feel anxious. If the user cannot reset the view, they feel lost. Forgiveness builds confidence and encourages exploration.

### Rule 5: The Window Is Focused

The window should focus attention on what matters:

- **Dimmed background** — De-emphasize non-essential content. When a modal or overlay is active, the background is dimmed to focus attention on the foreground.
- **Centered content** — Place important content centrally. The most important content should be in the center of the viewport, where the eye naturally rests.
- **Clear hierarchy** — Make important elements prominent. The most important elements should be the largest, most contrasted, and most centrally positioned.
- **Minimal distraction** — Remove unnecessary elements. The viewport should show only what is necessary for the current task. Extraneous elements are removed or minimized.

**Why this rule exists:** Unfocused windows scatter attention. If everything is equally prominent, nothing is prominent. The user cannot determine what to focus on. Focused windows guide the user's attention to the most important content, reducing cognitive load and increasing task efficiency.

---

## Viewport Navigation Patterns

### Scroll-Driven Navigation

The viewport moves through content as the user scrolls. This is the most natural navigation pattern for content-heavy interfaces:

- **Single-page applications** — All content on one page. The user scrolls to navigate between sections.
- **Long-form articles** — Content extends vertically. The user scrolls to read through the article.
- **Dashboards** — Multiple sections stacked vertically. The user scrolls to access different sections.

### Link-Driven Navigation

The viewport jumps to a new location when the user clicks a link. This is the most common navigation pattern for multi-page interfaces:

- **Hyperlinks** — Standard web navigation. The user clicks a link and the viewport moves to the linked page.
- **Tab navigation** — The user clicks a tab and the viewport shows the tab's content.
- **Menu navigation** — The user clicks a menu item and the viewport shows the selected view.

### Search-Driven Navigation

The viewport jumps to a specific location based on a search query. This is the most efficient navigation pattern for large information spaces:

- **Global search** — The user types a query and selects a result. The viewport jumps to the result's location.
- **In-page search** — The user types a query and the viewport scrolls to the first match.
- **Filter navigation** — The user applies filters and the viewport shows filtered results.

### Gesture-Driven Navigation

The viewport moves in response to user gestures. This is the most common navigation pattern on touch devices:

- **Swipe navigation** — The user swipes left or right to navigate between views.
- **Pinch-to-zoom** — The user pinches to change the viewport's scale.
- **Pull-to-refresh** — The user pulls down to refresh the viewport's content.

---

## See Also

- [Space Behavior](space-behavior.md) — How space reacts to objects within the viewport
- [Object Existence](object-existence.md) — How objects exist in the infinite plane
- [Space Geometry](../geometry/space-geometry.md) — The mathematical foundations of the infinite plane
- [Object Boundaries](../geometry/object-boundaries.md) — How objects define their limits
- [Movement Physics](../motion/movement-physics.md) — Physical laws of viewport movement
