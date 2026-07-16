# Screen as Window

## Why This Matters

The screen is a window into a larger space. Without understanding this metaphor, designers create interfaces that feel flat and disconnected. The window metaphor gives interfaces depth, continuity, and spatial coherence.

## The Window Metaphor

The screen is not the entire space—it is a viewport into a larger spatial universe. This metaphor means:

### There Is More Than What You See

The visible area is a subset of the total space. Users understand that:
- **Content extends beyond the screen** — Scrolling reveals more
- **Navigation leads to other spaces** — Clicking navigates elsewhere
- **Context exists outside the viewport** — Related content is nearby
- **History exists behind** — Back button returns to previous space

### The Window Has Orientation

The window faces a specific direction in the spatial universe:
- **Up** — Towards headers, navigation, page tops
- **Down** — Towards footers, more content, page bottoms
- **Left** — Towards sidebars, previous content, parent sections
- **Right** — Towards details, next content, child sections

### The Window Can Move

The window can move through the spatial universe:
- **Scrolling** — Moving the window up, down, left, or right
- **Navigation** — Jumping the window to a different location
- **Zooming** — Changing the window's scale
- **Panning** — Moving the window laterally

## Spatial Navigation

### Scrolling

Scrolling moves the window through content space:
- **Vertical scrolling** — Content extends downward
- **Horizontal scrolling** — Content extends rightward
- **Bidirectional scrolling** — Content extends both ways
- **No scrolling** — Content fits within the window

Scrolling rules:
- **Natural scroll direction** — Content moves with the gesture
- **Scroll indicators** — Show where the user is in the content
- **Scroll snapping** — Align to content boundaries
- **Infinite scroll** — Load more content as needed

### Navigation

Navigation jumps the window to different spaces:
- **Linear navigation** — Forward and backward through a sequence
- **Hierarchical navigation** — Up and down through a hierarchy
- **Random navigation** — Any space from any space
- **Modal navigation** — Temporary spaces that return to origin

Navigation rules:
- **Clear origin** — Users always know where they came from
- **Clear destination** — Users always know where they're going
- **Easy return** — Users can always go back
- **Context preservation** — Previous state is preserved

### State Preservation

The window should remember its state:
- **Scroll position** — Where the user was in the content
- **Expanded state** — What was open or collapsed
- **Selection state** — What was selected or focused
- **Form state** — What data was entered

State preservation rules:
- **Automatic preservation** — No user action required
- **Timely restoration** — State restored immediately on return
- **Graceful degradation** — If state can't be restored, default gracefully
- **User control** — Users can reset state if desired

## Window Rules

### Rule 1: The Window Is Consistent

The window should behave consistently across all views:
- **Same scroll behavior** — Same scrolling physics everywhere
- **Same navigation behavior** — Same navigation patterns everywhere
- **Same state behavior** — Same state preservation everywhere
- **Same orientation** — Same directional conventions everywhere

Inconsistent window behavior disorients users.

### Rule 2: The Window Is Responsive

The window must adapt to different sizes:
- **Phone** — Small window, focused content
- **Tablet** — Medium window, balanced content
- **Desktop** — Large window, expanded content
- **Ultrawide** — Very large window, spread content

The window adapts; the content remains coherent.

### Rule 3: The Window Is Predictable

Users must be able to predict window behavior:
- **Scroll behavior** — Predictable from content structure
- **Navigation behavior** — Predictable from link labels
- **State behavior** — Predictable from previous experience
- **Orientation behavior** — Predictable from spatial conventions

Unpredictable windows confuse users.

### Rule 4: The Window Is Forgiving

Users must be able to recover from mistakes:
- **Back navigation** — Always available
- **Undo** — Reversible actions
- **State reset** — Return to defaults
- **Error recovery** — Clear error messages and recovery paths

Unforgiving windows frustrate users.

### Rule 5: The Window Is Focused

The window should focus attention on what matters:
- **Dimmed background** — De-emphasize non-essential content
- **Centered content** — Place important content centrally
- **Clear hierarchy** — Make important elements prominent
- **Minimal distraction** — Remove unnecessary elements

Unfocused windows scatter attention.

## See Also

- [Space Behavior](space-behavior.md) — How space responds to objects
- [Object Existence](object-existence.md) — How objects exist in space
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Movement Physics](../motion/movement-physics.md) — Physical laws of motion
- [Spatial Layout](../layout/spatial-layout.md) — Layout as spatial arrangement
