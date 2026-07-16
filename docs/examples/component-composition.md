# Component Composition Examples

## Why This Document Exists

Component composition is the art of combining architectural constructions into coherent spatial assemblies. A component is not a visual template—it is a construction with physical boundaries, weight, and purpose. Composition is the process of arranging these constructions into spatial relationships that communicate hierarchy, proximity, and function.

Understanding composition requires understanding the fundamental principle that every component follows the three-layer hierarchy: Physical Boundary → Inner Surface → Content. When components are composed, their boundaries interact—the spatial relationships between boundaries communicate how components relate to each other.

---

## Fundamental Composition Principles

Before examining specific compositions, every assembly must internalize these spatial truths:

**Components are constructions, not decorations.** A button is not a rectangle with text—it is an architectural element with mass, boundaries, and purpose. A card is not a colored box—it is a container with walls, an interior, and contents. When these constructions are combined, they form larger constructions that communicate meaning through their spatial relationships.

**Boundaries create relationships.** When two components share a boundary, they are architecturally connected. When they do not, they are spatially independent. The gutter between components is the architectural gap that prevents merging—without it, components would dissolve into each other, destroying the sense of discrete construction.

**Proximity communicates purpose.** Components that are close together are perceived as related. Components that are far apart are perceived as unrelated. This spatial law overrides all other visual cues—two components that are close will be perceived as related even if they look different.

---

## Form Composition

A form is an architectural assembly of input constructions organized into a coherent data-entry structure.

```
┌───────────────────────────────────────┐
│ Boundary (Full form container)        │
│ ┌───────────────────────────────────┐ │
│ │ Surface                           │ │
│ │ ┌───────────────────────────────┐ │ │
│ │ │ Title: "Create Account"       │ │ │
│ │ │ (Structural heading)          │ │ │
│ │ ├───────────────────────────────┤ │ │
│ │ │                               │ │ │
│ │ │ Name                          │ │ │
│ │ │ ┌───────────────────────────┐ │ │ │
│ │ │ │ Input field               │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │
│ │ │                               │ │ │
│ │ │ Email                         │ │ │
│ │ │ ┌───────────────────────────┐ │ │ │
│ │ │ │ Input field               │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │
│ │ │                               │ │ │
│ │ │ Password                      │ │ │
│ │ │ ┌───────────────────────────┐ │ │ │
│ │ │ │ Input field               │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │
│ │ │ Helper: "Must be 8+ chars"  │ │ │
│ │ │                               │ │ │
│ │ ├───────────────────────────────┤ │ │
│ │ │ ┌───────────────────────────┐ │ │ │
│ │ │ │ Create Account (Button)   │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │
│ │ │                               │ │ │
│ │ │ Already have an account?      │ │ │
│ │ │ Sign in (Link)                │ │ │
│ │ └───────────────────────────────┘ │ │
│ └───────────────────────────────────┘ │
└───────────────────────────────────────┘
```

### Step-by-Step Composition

**Step 1: Construct the form boundary.** The form is the outermost architectural unit. Its boundary extends the full width of its container (or a defined max-width). The boundary contains all input elements, labels, helpers, and actions. This boundary establishes the form as a single, discrete construction—the user perceives the form as one architectural unit, not a collection of unrelated elements.

**Step 2: Construct the form title.** The title is the structural heading—it identifies the form's purpose. It has the heaviest typographic weight in the form, communicating its hierarchical primacy. The title sits at the top of the form's surface, establishing the reading order.

**Step 3: Construct each input group.** Each input group is a sub-construction within the form. It consists of:
- **Label** (above the input) — Identifies the input's purpose. The label has moderate typographic weight, communicating its supportive role.
- **Input field** (below the label) — The interaction surface where the user enters data. The input field has a visible boundary (border), establishing its existence as a discrete construction.
- **Helper text** (below the input, optional) — Provides contextual information. The helper text has lighter typographic weight, communicating its supplementary role.

The proximity between label and input (4-8px) communicates that they are directly related—this is a single functional unit. The proximity between input groups (16-24px) communicates that they are in the same form but are distinct units.

**Step 4: Construct the form action.** The primary action button is the form's conclusion—it is the element the form exists to serve. The button has the heaviest visual weight in the form (prominent background, strong border), communicating its importance as the form's purpose.

**Step 5: Construct the form alternative.** The alternative action (sign in link) is supplementary—it provides an escape route for users who do not need to create an account. It has the lightest visual weight, communicating its secondary importance.

### Architectural Reasoning

The form composition communicates **sequential data entry**. The vertical arrangement of input groups follows the natural reading flow—the eye moves from top to bottom, encountering each input in sequence. This spatial arrangement communicates that the inputs should be completed in order.

The proximity rules create a clear hierarchy:
- Label and input are very close (4-8px) → directly related, single unit
- Input groups are close (16-24px) → same form, distinct units
- Form and alternative are far (32-48px) → different purposes, separate constructions

The button's visual prominence communicates that it is the form's goal. The entire form exists to lead the user to this button. The spatial arrangement—inputs above, button below—communicates that inputs are prerequisites for the action.

**When to use this composition:**
- Account creation (sequential data entry with clear goal)
- Checkout flows (sequential data entry with clear goal)
- Settings forms (categorical data entry with clear goal)
- Search forms (focused data entry with clear goal)

**What this composition communicates to the user:** "Enter information in sequence. Each input is independent but related. The button is your goal—complete the inputs to reach it."

---

## Card List Composition

A card list is a modular composition where each card is an independent architectural unit with identical structure.

```
┌───────────────────────────────────────────┐
│ Boundary (List container)                 │
│ ┌───────────────────────────────────────┐ │
│ │ Surface                               │ │
│ │ ┌───────────────────────────────────┐ │ │
│ │ │ Section Title: "Featured Products"│ │ │
│ │ ├───────────────────────────────────┤ │ │
│ │ │ ┌─────────┐ ┌─────────┐ ┌────────┐│ │ │
│ │ │ │ Card 1  │ │ Card 2  │ │ Card 3 ││ │ │
│ │ │ │         │ │         │ │        ││ │ │
│ │ │ │ ┌─────┐ │ │ ┌─────┐ │ │┌─────┐││ │ │
│ │ │ │ │ img │ │ │ │ img │ │ ││ img │││ │ │
│ │ │ │ └─────┘ │ │ └─────┘ │ │└─────┘││ │ │
│ │ │ │ Name 1  │ │ Name 2  │ │Name 3 ││ │ │
│ │ │ │ $29.99  │ │ $49.99  │ │$39.99 ││ │ │
│ │ │ │ [Add]   │ │ [Add]   │ │[Add]  ││ │ │
│ │ │ └─────────┘ └─────────┘ └────────┘│ │ │
│ │ └───────────────────────────────────┘ │ │
│ └───────────────────────────────────────┘ │
└───────────────────────────────────────────┘
```

### Step-by-Step Composition

**Step 1: Construct the list boundary.** The list container is the architectural unit that holds all cards. Its boundary extends the full width of its parent container. The boundary establishes the list as a discrete construction—the user perceives the list as one architectural unit containing multiple sub-constructions.

**Step 2: Construct the list title.** The title identifies the list's purpose. It has the heaviest typographic weight in the list, communicating its hierarchical primacy. The title sits above the cards, establishing the reading order.

**Step 3: Establish the card grid.** The cards are arranged in a grid with equal column widths. This equality communicates that each card is equally important. The gutters between cards (16-24px) create architectural separation—each card is a discrete construction that does not merge with adjacent cards.

**Step 4: Construct each card.** Each card follows the three-layer hierarchy:
- **Physical Boundary** — The card's edges, defined by border or shadow. The boundary establishes the card as a discrete construction.
- **Inner Surface** — The card's background. The surface provides the visual materiality—the card feels solid, not transparent.
- **Content** — Image, title, price, action. The content is the card's purpose—the card exists to present this information.

Internal card structure follows the same rules:
- Image at top (visual anchor, heaviest visual weight)
- Title below (semantic identification, moderate weight)
- Price below title (functional information, moderate weight)
- Action at bottom (interactive element, moderate weight)

**Step 5: Establish card relationships.** Cards are related through:
- **Proximity** — Cards are close together in the grid, communicating that they are related.
- **Similarity** — Cards have identical structure, communicating that they are equal.
- **Alignment** — Cards align to the same grid lines, communicating that they belong to the same spatial framework.

### Architectural Reasoning

The card list composition communicates **modular equality**. Each card is a complete architectural unit that can exist independently. The equal column widths communicate that no card is more important than another. The consistent internal structure communicates that all cards serve the same purpose.

The list container's boundary establishes the spatial framework within which all cards exist. Without this container, cards would float without a unifying structure—the user would perceive them as unrelated elements rather than a coherent collection.

**When to use this composition:**
- Product listings (each product is an equal architectural unit)
- Portfolio galleries (each project is an equal architectural unit)
- Feature showcases (each feature is an equal architectural unit)
- Dashboard widgets (each metric is an equal architectural unit)

**What this composition communicates to the user:** "These items are all equal. Each is a complete unit you can examine independently. They are related through proximity and similarity."

---

## Navigation Composition

A navigation bar is an architectural assembly that provides spatial orientation and wayfinding.

```
┌───────────────────────────────────────────────┐
│ Boundary (Full-width navigation bar)          │
│ ┌───────────────────────────────────────────┐ │
│ │ Surface                                   │ │
│ │ ┌───────────────────────────────────────┐ │ │
│ │ │ Logo      Products   Solutions   Price│ │ │
│ │ │                                        │ │ │
│ │ │                              [Sign Up]│ │ │
│ │ └───────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘
```

### Step-by-Step Composition

**Step 1: Construct the navigation boundary.** The navigation bar extends the full width of the viewport. Its boundary is fixed—it does not scroll with content. This fixed position establishes the navigation as a structural element—it is always present, providing constant spatial orientation.

**Step 2: Construct the logo.** The logo is positioned at the left edge—the position the eye encounters first. The logo has the heaviest visual weight in the navigation, communicating its role as the brand anchor. The logo's boundary establishes the starting point of the navigation's spatial flow.

**Step 3: Construct the navigation items.** The navigation items are arranged horizontally, following the natural reading direction (left-to-right in LTR languages). Each item has a visible boundary (the clickable area) and content (the navigation label). The proximity between items (16-24px) communicates that they are related—they are all navigation options.

**Step 4: Construct the call-to-action.** The CTA is positioned at the right edge—the position the eye encounters last. The CTA has the heaviest visual weight in the navigation (prominent background, strong border), communicating its importance as the navigation's goal. The CTA's boundary is distinct from the navigation items, communicating that it serves a different purpose.

**Step 5: Establish the spatial flow.** The navigation creates a horizontal spatial flow: Logo (brand identity) → Navigation items (wayfinding options) → CTA (action goal). This flow follows the natural reading direction, guiding the eye from left to right.

### Architectural Reasoning

The navigation composition communicates **wayfinding hierarchy**. The logo establishes brand identity—the spatial anchor. The navigation items provide wayfinding options—the paths available. The CTA provides the action goal—the destination.

The horizontal arrangement follows the natural reading direction, creating a predictable spatial flow. Users learn to look left for brand identity, center for navigation, and right for action. This predictability creates the sense of control that is fundamental to WHITE DIAMOND.

**When to use this composition:**
- Website headers (primary navigation)
- Application headers (functional navigation)
- Section headers (section-level navigation)
- Breadcrumbs (hierarchical navigation)

**What this composition communicates to the user:** "Brand is on the left. Navigation options are in the center. Action is on the right. The spatial flow guides you from identity to options to action."

---

## Modal Composition

A modal is an architectural intrusion—it expands the boundary to fill the viewport, de-emphasizing everything else and focusing attention on a single point.

```
┌───────────────────────────────────────────────┐
│ Boundary (Full viewport)                      │
│ ┌───────────────────────────────────────────┐ │
│ │ Surface (Dimmed)                          │ │
│ │ ┌───────────────────────────────────────┐ │ │
│ │ │ ┌───────────────────────────────────┐ │ │ │
│ │ │ │ Modal Content                     │ │ │ │
│ │ │ │ (Focused, centered)               │ │ │ │
│ │ │ │                                   │ │ │ │
│ │ │ │ Title: "Confirm Delete"    [X]    │ │ │ │
│ │ │ │                                   │ │ │ │
│ │ │ │ Are you sure you want to          │ │ │ │
│ │ │ │ delete this item?                 │ │ │ │
│ │ │ │                                   │ │ │ │
│ │ │ │ [Cancel]              [Delete]    │ │ │ │
│ │ │ └───────────────────────────────────┘ │ │ │
│ │ └───────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘
```

### Step-by-Step Composition

**Step 1: Construct the viewport boundary.** The modal's boundary expands to fill the entire viewport. This expansion communicates that the modal is the most important element in the interface—it demands the user's complete attention.

**Step 2: Construct the dimmed surface.** The surface behind the modal is dimmed (reduced opacity). This dimming communicates that the background elements still exist but are currently inactive. The dimming is not a visual effect—it is a spatial signal that says "the background is present but not available."

**Step 3: Construct the modal content boundary.** The modal content has a distinct boundary that is smaller than the viewport. This boundary establishes the modal as a discrete construction within the viewport. The boundary is centered, communicating that the modal is the focal point.

**Step 4: Construct the modal title.** The title identifies the modal's purpose. It has the heaviest typographic weight, communicating its hierarchical primacy. The close button (X) is positioned at the right edge of the title, communicating that the user can always dismiss the modal.

**Step 5: Construct the modal body.** The body contains the information the modal exists to communicate. The body has moderate typographic weight, communicating its supportive role.

**Step 6: Construct the modal actions.** The actions are the modal's conclusion—they are the elements the modal exists to serve. The destructive action (Delete) has the heaviest visual weight, communicating its importance. The cancel action has lighter weight, communicating its supplementary role.

### Architectural Reasoning

The modal composition communicates **focused attention**. The viewport expansion communicates that the modal is the primary element. The dimmed surface communicates that background elements exist but are inactive. The centered content communicates that the modal is the focal point.

The modal's boundary hierarchy follows the three-layer rule:
- Physical Boundary — The modal's edges (the centered container)
- Inner Surface — The modal's background (white, solid, prominent)
- Content — The title, body, and actions

The close button ensures that the user always has an escape route—this is fundamental to the sense of control. A modal that cannot be dismissed creates anxiety; a modal that can always be dismissed creates trust.

**When to use this composition:**
- Confirmation dialogs (focused decision-making)
- Form overlays (focused data entry)
- Detail views (focused information display)
- Error messages (focused problem resolution)

**What this composition communicates to the user:** "This is important. Everything else is temporarily unavailable. Focus your attention here. You can always dismiss this."

---

## Dashboard Composition

A dashboard is a complex architectural assembly that organizes multiple components into a coherent information hierarchy.

```
┌───────────────────────────────────────────────┐
│ Boundary (Dashboard container)                │
│ ┌───────────────────────────────────────────┐ │
│ │ Surface                                   │ │
│ │ ┌───────────────────────────────────────┐ │ │
│ │ │ Header: Dashboard              [User] │ │ │
│ │ ├───────────────────────────────────────┤ │ │
│ │ │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐     │ │ │
│ │ │ │Stat │ │Stat │ │Stat │ │Stat │     │ │ │
│ │ │ │  1  │ │  2  │ │  3  │ │  4  │     │ │ │
│ │ │ └─────┘ └─────┘ └─────┘ └─────┘     │ │ │
│ │ ├───────────────────────────────────────┤ │ │
│ │ │ ┌───────────────────────────────────┐ │ │ │
│ │ │ │ Chart / Visualization             │ │ │ │
│ │ │ └───────────────────────────────────┘ │ │ │
│ │ ├───────────────────────────────────────┤ │ │
│ │ │ ┌───────────────────────────────────┐ │ │ │
│ │ │ │ Data Table                        │ │ │ │
│ │ │ └───────────────────────────────────┘ │ │ │
│ │ └───────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘
```

### Step-by-Step Composition

**Step 1: Construct the dashboard boundary.** The dashboard container extends the full width of the viewport. Its boundary establishes the dashboard as the primary architectural unit.

**Step 2: Construct the dashboard header.** The header is the structural frame—it identifies the dashboard and provides user context. The header has the heaviest visual weight, communicating its structural primacy.

**Step 3: Construct the statistics row.** The statistics are arranged in a horizontal row with equal column widths. This equality communicates that each statistic is equally important. The proximity between statistics (16-24px) communicates that they are related—they are all key metrics.

**Step 4: Construct the visualization area.** The chart or visualization is the dashboard's primary content—it occupies the most space and has the most visual prominence. The visualization communicates trends, patterns, and relationships in the data.

**Step 5: Construct the data table.** The table is the dashboard's detailed content—it provides granular data that supports the visualization. The table has less visual weight than the visualization, communicating its supplementary role.

**Step 6: Establish the information hierarchy.** The dashboard creates a vertical information hierarchy:
- Header (structural frame, heaviest weight)
- Statistics (key metrics, moderate weight)
- Visualization (primary content, moderate weight)
- Data table (detailed content, lightest weight)

This hierarchy follows the natural reading flow—the eye encounters elements in order of importance.

### Architectural Reasoning

The dashboard composition communicates **information hierarchy**. The statistics at the top provide the most important information—they are the metrics the user checks first. The visualization provides the primary content—it shows trends and patterns. The data table provides detailed support—it offers granular data when needed.

The vertical arrangement follows the natural reading flow, creating a predictable information order. Users learn to look top for key metrics, middle for visualization, and bottom for details. This predictability creates the sense of control.

**When to use this composition:**
- Analytics dashboards (key metrics + visualization + details)
- Admin panels (key metrics + management tools + logs)
- Monitoring interfaces (key metrics + status visualization + event logs)
- Financial dashboards (key metrics + trends + transactions)

**What this composition communicates to the user:** "Key metrics are at the top. Visualization is in the middle. Details are at the bottom. The vertical hierarchy guides you from summary to detail."

---

## Form Group Composition

A form group organizes related inputs into a coherent architectural assembly.

```
┌───────────────────────────────────────┐
│ Boundary (Form group container)       │
│ ┌───────────────────────────────────┐ │
│ │ Surface                           │ │
│ │ ┌───────────────────────────────┐ │ │
│ │ │ Group Title: "Personal Info"  │ │ │
│ │ ├───────────────────────────────┤ │ │
│ │ │                               │ │ │
│ │ │ First Name      Last Name     │ │ │
│ │ │ ┌───────────┐  ┌───────────┐  │ │ │
│ │ │ │ Input     │  │ Input     │  │ │ │
│ │ │ └───────────┘  └───────────┘  │ │ │
│ │ │                               │ │ │
│ │ │ Email                       │ │ │
│ │ │ ┌───────────────────────────┐ │ │ │
│ │ │ │ Input                     │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │
│ │ │                               │ │ │
│ │ ├───────────────────────────────┤ │ │
│ │ │ Group Title: "Address"        │ │ │
│ │ ├───────────────────────────────┤ │ │
│ │ │                               │ │ │
│ │ │ Street Address              │ │ │
│ │ │ ┌───────────────────────────┐ │ │ │
│ │ │ │ Input                     │ │ │ │
│ │ │ └───────────────────────────┘ │ │ │
│ │ │                               │ │ │
│ │ │ City        State     Zip     │ │ │
│ │ │ ┌─────────┐ ┌─────┐ ┌──────┐  │ │ │
│ │ │ │ Input   │ │Input│ │Input │  │ │ │
│ │ │ └─────────┘ └─────┘ └──────┘  │ │ │
│ │ └───────────────────────────────┘ │ │
│ └───────────────────────────────────┘ │
└───────────────────────────────────────┘
```

### Step-by-Step Composition

**Step 1: Construct the form group boundary.** The form group is the architectural unit that contains related inputs. Its boundary establishes the group as a discrete construction. The boundary has a visible border or background distinction, communicating the group's structural identity.

**Step 2: Construct the group title.** The title identifies the group's purpose. It has moderate typographic weight, communicating its supportive role. The title sits above the inputs, establishing the reading order.

**Step 3: Construct related inputs on the same line.** First Name and Last Name are related—they are both part of the person's name. Placing them on the same line communicates this relationship. The proximity between them (8-16px) is tighter than the proximity between groups (24-32px), reinforcing the relationship.

**Step 4: Construct independent inputs on separate lines.** Email is independent—it does not relate to other inputs on the same line. Placing it on a separate line communicates this independence. The proximity between Email and the Name inputs (16-24px) communicates that they are in the same group but are distinct units.

**Step 5: Construct the group separator.** The separator between groups (border, divider, or whitespace) communicates that the groups are distinct architectural units. The separator prevents the groups from merging—the user perceives each group as a discrete construction.

### Architectural Reasoning

The form group composition communicates **categorical organization**. Related inputs are grouped together, communicating that they serve the same purpose. Unrelated inputs are separated, communicating that they serve different purposes.

The proximity rules create a clear hierarchy:
- Inputs on the same line are very close (8-16px) → directly related
- Inputs in the same group are close (16-24px) → same category
- Groups are far (24-32px) → different categories

The group separator is the architectural joint that connects inputs into a coherent assembly. Without the separator, inputs would dissolve into each other—the user would perceive them as unrelated elements rather than organized categories.

**When to use this composition:**
- Multi-section forms (personal info, address, payment)
- Settings pages (account settings, notification settings, privacy settings)
- Configuration panels (display settings, audio settings, network settings)
- Data entry forms (customer data, product data, order data)

**What this composition communicates to the user:** "These inputs are related. They serve the same purpose. Complete them as a group. Different groups serve different purposes."

---

## Composition and Spatial Relationships

Component composition follows the spatial relationships defined in [Composition Rules](../layout/composition-rules.md):

- **Proximity** — Components that are close together are perceived as related. The distance between components is a declaration of their relationship.
- **Similarity** — Components with the same structure are perceived as equal. The structural consistency communicates equality.
- **Alignment** — Components that align to the same grid lines are perceived as belonging to the same spatial framework. The alignment communicates structural unity.
- **Contrast** — Components with different visual weights are perceived as different in importance. The weight contrast communicates hierarchy.

These spatial relationships work together to create coherent compositions that communicate meaning without explicit labels. Users read spatial relationships intuitively—they do not need to consciously analyze the composition to understand the relationships.

**See also:** [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements, [Object Structure](../spatial-hierarchy/object-structure.md) — The three-layer anatomy

---

## See Also

- [Component Philosophy](../components/component-philosophy.md) — Why components exist
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
- [Basic Layout](basic-layout.md) — Layout examples
- [Button Specification](../components/button-specification.md) — Button composition
- [Input Specification](../components/input-specification.md) — Input composition
- [Card Specification](../components/card-specification.md) — Card composition
- [Object Structure](../spatial-hierarchy/object-structure.md) — The three-layer anatomy
- [Core Principles](../philosophy/core-principles.md) — The axioms of digital space
