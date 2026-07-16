# Component Philosophy

## Why This Matters

Components are not UI widgets. They are architectural constructions that inhabit a spatial environment. In WHITE DIAMOND, a component is a physical object with mass, boundaries, and presence. Without this understanding, component libraries become collections of visual decorations rather than structural elements. The philosophy defines why components exist, how they relate to space, and how they communicate purpose through their physical presence.

## What Is a Component?

A component is a self-contained architectural construction that occupies space within the infinite WHITE DIAMOND environment. Unlike traditional UI elements, a component is not a visual overlay but a physical object with mass and boundaries. Components exist to fulfill specific functions while respecting the spatial physics of the environment.

A component is defined by:
- **Physical Presence** — It occupies space and has mass
- **Structural Integrity** — It maintains the three-layer hierarchy (Physical Boundary → Inner Surface → Content)
- **Spatial Awareness** — It enters and exits the viewport, never appearing from nothing
- **Behavioral Contract** — It responds to interactions according to predictable physics
- **Communicative Form** — Its structure communicates its purpose without requiring explanation

Components are not just visual elements—they are functional units that implement specific behaviors within a spatial system. Every component is a construction with weight, texture, and presence.

## Component as Architectural Construction

### The Three-Layer Hierarchy

Every component follows the immutable three-layer hierarchy:

1. **Physical Boundary** — The outermost container that defines the component's footprint in space. This is the component's "body"—it has mass, weight, and occupies space. The boundary is always explicit, always visible, and always defined by a border. Without a boundary, the component does not exist.

2. **Inner Surface** — The region between the boundary and the content. This is the component's "skin"—it provides visual treatment, padding, and the transition between the boundary and the content. The inner surface is always present, even when empty, because it defines the component's internal space.

3. **Content** — The actual information or interactive elements. Content is always contained within the inner surface, never directly touching the physical boundary. Content is the component's "voice"—it communicates information, but only through the structural framework of the other layers.

This hierarchy is immutable. You cannot remove a layer, reorder them, or merge them. The hierarchy is the component's fundamental structure.

### Mass and Boundaries

Every component has mass. Mass is not metaphorical—it is expressed through:

- **Border Weight** — Thicker borders suggest greater mass
- **Shadow Depth** — Shadows indicate elevation above the spatial plane
- **Visual Density** — Denser components feel heavier
- **Spatial Occupation** — Larger components occupy more space

A component without mass feels like a decoration. A component with mass feels like a construction.

### Spatial Presence

Components exist within the infinite WHITE DIAMOND space. This means:

- **The viewport is a window** — The interface is a view into a vast architectural space
- **Components inhabit this space** — They have fixed positions within the spatial coordinate system
- **Components enter and exit** — They move from outside the viewport into view, never appearing from nothing
- **Components have depth** — They exist at different elevations, creating spatial hierarchy

## Why Components Exist

### Purpose Through Structure

Components exist to fulfill specific purposes within the spatial environment. Their structure communicates their purpose:

- **Buttons** are action triggers—they are compact, elevated objects that respond to pressure
- **Inputs** are data vessels—they are open containers that invite content
- **Cards** are content containers—they are defined spaces that group related information
- **Modals** are focused environments—they temporarily claim spatial priority
- **Navigation** is spatial orientation—it provides the map of the environment

### Communication Through Form

A component's form communicates its function without requiring explanation:

- **Size communicates importance** — Larger components are more important
- **Position communicates hierarchy** — Higher positions are more prominent
- **Border communicates boundary** — Clear borders define clear responsibilities
- **Motion communicates physics** — Animation demonstrates spatial relationships

### Predictability Through Physics

Components behave according to spatial physics. This predictability creates trust:

- **Objects have inertia** — Components resist change, then move with momentum
- **Objects have gravity** — Related components attract, unrelated components repel
- **Objects have collision** — Components cannot overlap without explicit spatial relationships
- **Objects have friction** — Interactions resist movement, then release

## Component Design Principles

### Principle 1: One Component, One Purpose

Each component must do one thing well. A button triggers an action. An input captures data. A card contains related content. Multi-purpose components confuse users about what action to take because they violate the principle of communicative form.

If a component does too many things, split it into multiple components. A component that does everything communicates nothing.

### Principle 2: Predictable Behavior

Components must behave consistently because they are architectural constructions with physics:

- **Same trigger produces same action** — Every click produces the same result
- **Same state produces same appearance** — Every focused input looks the same
- **Same interaction produces same feedback** — Every action provides the same response
- **Same context produces same behavior** — Every component in the same context behaves identically

Predictability creates learning. Learning creates efficiency. Efficiency creates trust.

### Principle 3: Clear Boundaries

Components must have clear spatial boundaries because boundaries define existence:

- **Visual boundaries** — Borders, backgrounds, shadows define the component's physical presence
- **Functional boundaries** — What the component controls is explicitly defined
- **Data boundaries** — What data the component manages is clearly scoped
- **Interaction boundaries** — What interactions the component handles is explicitly stated

Unclear boundaries create confusion about ownership and responsibility. A component without boundaries is not a component—it is a visual suggestion.

### Principle 4: Composable Architecture

Components must compose with other components because they exist within a spatial system:

- **Nesting** — Components can contain other components, creating spatial depth
- **Slotting** — Components can accept content in specific positions, creating flexible containers
- **Extending** — Components can be extended for specific needs while maintaining structural integrity
- **Combining** — Components can be combined for complex behaviors while respecting individual boundaries

Non-composable components limit design possibilities. A component that cannot compose is an isolated object, not part of an architectural system.

### Principle 5: Accessible by Default

Components must be accessible from the start because they exist in shared space:

- **Keyboard accessible** — All interactions work with keyboard because all users navigate the same space
- **Screen reader accessible** — All content is announced properly because all users perceive the same structure
- **Color independent** — All information is conveyed without color alone because all users see the same forms
- **Motion independent** — All functionality works without animation because all users experience the same physics

Accessibility is not a feature—it is a property of well-designed architectural constructions.

### Principle 6: Spatial Memory

Components must maintain spatial consistency because users build mental maps:

- **Position persistence** — Components stay in the same place
- **State persistence** — Components remember their state across sessions
- **Context persistence** — Components maintain context across interactions
- **Hierarchy persistence** — Components maintain their spatial relationships

Spatial memory reduces cognitive load. Cognitive load reduction creates efficiency.

## Component Anatomy

### Physical Structure

The component's architectural structure:
- **Boundary element** — The outermost container that defines the component's footprint
- **Surface element** — The inner region that provides visual treatment
- **Content element** — The actual information or interactive elements
- **Visual elements** — Decorative or informational visuals within the hierarchy

### Spatial Properties

The component's properties within the WHITE DIAMOND space:
- **Position** — Where the component exists in the coordinate system
- **Size** — How much space the component occupies
- **Depth** — How high the component is elevated above the base plane
- **Mass** — How heavy the component feels
- **Boundaries** — How clearly the component defines its edges

### Behavioral Properties

The component's response to interactions:
- **Triggers** — What initiates behavior (click, hover, focus)
- **Actions** — What the component does in response
- **Feedback** — How the component communicates results
- **State** — What conditions affect behavior

### API Properties

The component's interface for developers:
- **Props/attributes** — Configuration options
- **Events/callbacks** — Communication mechanism
- **Slots/content** — Content injection points
- **Methods/functions** — Programmatic control

## Component States

### Default State

The component's normal, resting appearance—the state it returns to after all interactions:
- **Visual** — Standard appearance with full opacity and defined boundaries
- **Functional** — Ready for interaction
- **Spatial** — At rest, with no applied forces
- **Accessible** — Visible and focusable

### Hover State

When the cursor approaches the component—the spatial signal that interaction is imminent:
- **Visual** — Slight elevation increase (shadow deepens), border color shifts
- **Functional** — Ready for click, but not yet committed
- **Spatial** — The component lifts slightly, acknowledging the approaching force
- **Accessible** — Indicates interactivity

### Active State

When the component is being interacted with—the moment of applied force:
- **Visual** — Pressed appearance (slight descent, shadow reduction, color change)
- **Functional** — Processing interaction, committed to action
- **Spatial** — The component compresses under pressure, demonstrating physics
- **Accessible** — Indicates current action

### Focus State

When the component has keyboard focus—the spatial indicator of keyboard navigation:
- **Visual** — Focus indicator (outline, ring) that is always visible
- **Functional** — Ready for keyboard interaction
- **Spatial** — The component is highlighted, indicating its position in the keyboard map
- **Accessible** — Visible focus for keyboard users

### Disabled State

When the component is not available—a spatial indication of unavailability:
- **Visual** — Muted appearance (reduced opacity, desaturated colors)
- **Functional** — Does not respond to interaction
- **Spatial** — The component recedes, indicating it is not part of the active space
- **Accessible** — Indicates unavailability

### Loading State

When the component is processing—a spatial indication of activity:
- **Visual** — Loading indicator that replaces content but maintains structure
- **Functional** — Waiting for completion, not ready for interaction
- **Spatial** — The component is in a state of transformation, processing input
- **Accessible** — Indicates processing status

### Error State

When the component has encountered a problem—a spatial indication of dysfunction:
- **Visual** — Error appearance (color change, error icon) that is impossible to ignore
- **Functional** — Indicates problem, may prevent further action
- **Spatial** — The component signals distress, demanding attention
- **Accessible** — Communicates error status

## Component Types

### Primitives

Basic building blocks—the fundamental architectural elements:
- **Button** — Action triggers with mass and pressure response
- **Input** — Data vessels with containment properties
- **Link** — Navigation paths with directional properties
- **Icon** — Visual symbols with communicative properties

### Containers

Group and organize content—the structural frameworks:
- **Card** — Content containers with clear boundaries
- **Panel** — Section containers with spatial division
- **Modal** — Focused environments with spatial priority
- **Drawer** — Supplementary containers with spatial adjacency

### Navigation

Helps users move through the interface—the spatial map:
- **Tabs** — View switches with spatial transformation
- **Menu** — Option containers with hierarchical structure
- **Breadcrumb** — Location indicators with path properties
- **Pagination** — Sequence navigators with temporal properties

### Data Display

Shows information—the communicative structures:
- **Table** — Data containers with grid properties
- **List** — Sequence containers with order properties
- **Chart** — Data visualizations with spatial representation
- **Badge** — Status indicators with attention properties

### Feedback

Communicates with users—the responsive structures:
- **Toast** — Temporary messages with temporal properties
- **Alert** — Important messages with urgency properties
- **Progress** — Completion indicators with temporal properties
- **Tooltip** — Additional information with contextual properties

## See Also

- [Button Specification](button-specification.md) — Button as architectural construction
- [Input Specification](input-specification.md) — Input as data vessel
- [Card Specification](card-specification.md) — Card as content container
- [Modal Specification](modal-specification.md) — Modal as focused environment
- [Navigation Specification](navigation-specification.md) — Navigation as spatial map