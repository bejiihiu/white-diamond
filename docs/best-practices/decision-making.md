# Decision Making

## Why This Matters

WHITE DIAMOND provides principles, not prescriptions. Principles are universal truths — they apply in every context, at every scale, in every situation. But between a principle and an implementation lies a decision. That decision is the most dangerous moment in the design process, because it is where architectural integrity is either preserved or compromised.

Every decision you make either reinforces the spatial system or erodes it. There is no neutral ground. An interface built from a thousand small, unexamined decisions is an interface that has drifted from its foundation without anyone noticing. This document provides the framework for making decisions that maintain the philosophical rigor of WHITE DIAMOND, even when principles appear to conflict.

## The Decision Framework

### Step 1: Identify the Problem

Before reaching for a solution, the problem must be excavated with architectural precision. A poorly defined problem produces a solution that addresses symptoms rather than causes.

**What:** State the specific, concrete problem. Not "the interface feels cluttered" but "the dashboard displays 47 data points simultaneously, making it impossible to identify the primary metric."

**Who:** Identify every affected user persona. A decision that serves power users may harm novices. A decision that serves sighted users may harm screen reader users. Every affected party must be accounted for.

**Why:** Connect the problem to a WHITE DIAMOND principle. If the problem does not relate to a principle, it may not be a design problem — it may be a product or business problem that requires a different kind of solution.

**When:** Determine the temporal context. Is this a one-time decision (a specific component in a specific view) or a systemic decision (a pattern that will be replicated across the entire interface)?

### Step 2: Consider Perspectives

Every design decision is viewed from multiple vantage points, each with legitimate concerns.

**User perspective:** How does this decision affect the person who will interact with the interface? Does it increase or decrease their sense of control? Does it clarify or confuse the spatial model? Does it make the interface feel more or less monumental?

**Developer perspective:** How does this decision affect the person who will implement it? Does it increase or decrease implementation complexity? Does it introduce technical debt? Does it create dependencies on fragile or poorly supported technologies?

**Business perspective:** How does this decision affect organizational goals? Does it accelerate or delay delivery? Does it require resources that are unavailable? Does it create maintenance burden that will compound over time?

**Accessibility perspective:** How does this decision affect users with disabilities? Does it maintain or break keyboard navigation? Does it maintain or break screen reader compatibility? Does it maintain or break color contrast requirements?

**Architectural perspective:** How does this decision affect the spatial system as a whole? Does it introduce a new pattern that must be replicated? Does it violate an existing pattern that users have learned? Does it compromise the three-layer hierarchy (Physical Boundary → Inner Surface → Content)?

### Step 3: Apply WHITE DIAMOND Principles

Each decision must be evaluated against all eight foundational pillars. A decision that satisfies one principle while violating another is not a complete decision — it is an incomplete analysis.

**Space physics:** Does this decision maintain the illusion of infinite spatial depth? Does it preserve the sense that the screen is a window into a vast architectural space? Does it use shadows, elevation, and layering to communicate spatial relationships?

**Object boundaries:** Does this decision clearly define where objects begin and end? Does it use borders, spacing, or visual distinction to communicate boundaries? Does it maintain the principle that without a border, an object does not exist?

**Three-layer hierarchy:** Does this decision preserve the immutable three-layer structure? Does it maintain the Physical Boundary → Inner Surface → Content hierarchy? Does it allow content to escape its container?

**Only rectangles:** Does this decision adhere to the rectangular geometry constraint? Does it avoid introducing circular, oval, or organic shapes? Does it maintain the architectural vocabulary of straight lines and right angles?

**Animation serves physics:** Does this decision use motion only to demonstrate spatial physics? Does it avoid decorative or attention-seeking animation? Does it use motion to communicate depth, weight, and physical relationships?

**Absolute control:** Does this decision increase or decrease the user's sense of control? Does it make the interface more predictable, more responsive, more transparent? Does it allow the user to understand cause and effect without uncertainty?

**Monumentality:** Does this decision make elements feel more or less like massive architectural constructions? Does it increase or decrease the sense of weight, permanence, and structural integrity?

### Step 4: Evaluate Trade-offs

No decision is without cost. The quality of a decision is measured not by whether it has trade-offs, but by whether the trade-offs are conscious, justified, and documented.

**Simplicity vs. Power:** A simple interface is easier to learn but may require more steps for complex tasks. A powerful interface enables complex tasks efficiently but may overwhelm new users. The WHITE DIAMOND resolution is progressive disclosure: present simplicity by default, reveal power on demand. See [Recommended Approaches](recommended-approaches.md) for implementation guidance.

**Consistency vs. Context:** A consistent rule applied everywhere reduces cognitive load but may not be optimal in every context. A context-sensitive approach may be optimal in each case but creates an unpredictable overall system. The WHITE DIAMOND resolution is consistency by default, with informed exceptions that are documented and justified.

**Aesthetics vs. Function:** A beautiful interface creates emotional resonance but may sacrifice usability. A purely functional interface is usable but may fail to create the monumental experience that WHITE DIAMOND demands. The WHITE DIAMOND resolution is that aesthetics and function are not opposing forces — architectural beauty *is* functional beauty. A monumental interface that is also usable is the goal.

**Speed vs. Accuracy:** A fast interface provides immediate response but may sacrifice precision. A precise interface may require additional steps but produces correct outcomes. The WHITE DIAMOND resolution is to be fast for non-critical actions (hover states, navigation) and deliberate for critical actions (form submission, destructive operations).

**Visibility vs. Clarity:** Showing all options simultaneously makes them visible but creates visual noise. Hiding options behind interactions reduces noise but makes them less discoverable. The WHITE DIAMOND resolution is to show primary options immediately and reveal secondary options through progressive disclosure.

### Step 5: Make a Decision

Choose the option that:

**Best serves users:** User needs are the foundation of every decision. If a decision does not serve users, it does not belong in the interface, regardless of how elegant, technically impressive, or business-aligned it may be.

**Aligns with principles:** The option must be defensible against all eight WHITE DIAMOND pillars. If it cannot be, it must be modified until it can.

**Is maintainable:** A decision that creates unmanageable complexity is a decision that will eventually be reversed, wasting the effort invested in implementing it. Choose solutions that can be sustained by the team that will maintain them.

**Is accessible:** The option must work for all users, including those using assistive technologies. Accessibility is not a feature to be added later — it is a structural requirement from the beginning.

### Step 6: Document the Decision

Every significant decision must be recorded. Documentation serves three purposes: it prevents the decision from being revisited without new information, it explains the reasoning to future team members who did not participate in the original discussion, and it creates a trail of architectural rationale that can be audited for consistency.

Record:
- **What** was decided (the specific choice)
- **Why** it was decided (the reasoning, tied to principles)
- **What** was considered (the alternatives that were evaluated)
- **What** was rejected (and the specific reasons for rejection)
- **What** conditions would trigger revisiting the decision (the triggers for reconsideration)

## Common Decision Scenarios

### Scenario: Modal or Inline Form?

**Consider:**
- **Modal:** Focuses attention exclusively on the task. Blocks all background context. Creates a temporary spatial layer above the content plane. Requires explicit dismissal. Best for complex, multi-step, or destructive operations.
- **Inline:** Maintains spatial context. Does not interrupt the user's current task. Persists as part of the content plane. Best for simple, single-step, non-destructive operations.

**Decision factors:**
- Is the task simple (1–3 fields)? → Inline. A modal for a single field is architectural overkill.
- Is the task complex (4+ fields or multi-step)? → Modal. Complexity demands focused attention.
- Does the task require context from the background? → Inline. A modal obscures that context.
- Is the task destructive or irreversible? → Modal. Destructive actions demand deliberate, focused attention.
- Will the user need to reference other content while completing the task? → Inline.

**WHITE DIAMOND reasoning:** A modal introduces a new spatial layer (the overlay). This layer must be justified by the complexity or risk of the task. Using a modal for a simple action violates the principle of spatial economy — it creates an architectural layer without sufficient purpose.

### Scenario: Tabs or Accordion?

**Consider:**
- **Tabs:** Switches between mutually exclusive views. Only one panel visible at a time. Suggests that the content panels are peers — equal in importance, parallel in structure.
- **Accordion:** Expands and collapses sections independently. Multiple panels may be open simultaneously. Suggests that the content sections are hierarchical or sequential — each section builds on or relates to the others.

**Decision factors:**
- Are the content panels independent? → Tabs. Independent content implies equal weight.
- Are the content panels related or sequential? → Accordion. Related content implies hierarchy.
- Can the user benefit from seeing multiple panels simultaneously? → Accordion. Simultaneous visibility requires independent expansion.
- Is the content reference material that the user will scan? → Accordion. Scanning requires non-destructive navigation between sections.

**WHITE DIAMOND reasoning:** Tabs establish a single active spatial plane — only one content panel exists at a time. This mirrors the physical principle that you can only look through one window at a time. Accordions establish multiple coexisting planes — multiple panels occupy the spatial field simultaneously, which is valid when the content demands it.

### Scenario: Dropdown or Radio Buttons?

**Consider:**
- **Dropdown:** Hides options until activated. Efficient in vertical space. Best when options are familiar and do not require explanation.
- **Radio buttons:** Shows all options simultaneously. Efficient in vertical space only when options are few (2–4). Best when options need to be compared or when unfamiliar options require context.

**Decision factors:**
- Few options (2–5)? → Radio buttons. Visibility of all options aids decision-making.
- Many options (6+)? → Dropdown. Vertical space becomes the constraining factor.
- Options are self-explanatory? → Dropdown. Familiar options do not require visible comparison.
- Options require explanation or comparison? → Radio buttons. Visible options enable informed selection.

**WHITE DIAMOND reasoning:** Radio buttons present all options as simultaneous spatial objects — each option exists in the spatial field, visible and comparable. A dropdown collapses these objects into a single point (the dropdown trigger), revealing them only on demand. The choice depends on whether the options benefit from simultaneous spatial presence.

### Scenario: Toast or Inline Message?

**Consider:**
- **Toast:** Temporary notification. Appears peripherally (typically bottom or top). Non-blocking — the user can continue working while it displays. Self-dismisses after a timeout. Best for confirmations, low-priority updates, and non-actionable information.
- **Inline message:** Persistent notification. Appears within the content flow, directly adjacent to the relevant content. Always visible until explicitly addressed. Best for errors, warnings, and messages requiring user action.

**Decision factors:**
- Is the information informational only? → Toast. Informational messages do not require persistent presence.
- Is the information critical or error-related? → Inline. Critical messages must remain visible until resolved.
- Does the message require user action? → Inline. Actionable messages must not disappear automatically.
- Can the message be dismissed by acknowledgment? → Toast. Acknowledgment-only messages can self-dismiss.

**WHITE DIAMOND reasoning:** A toast is a transient spatial object — it enters the spatial field, delivers its message, and exits. This is appropriate for information that has no lasting structural significance. An inline message is a persistent spatial object — it occupies a fixed position in the architectural layout, establishing itself as a permanent element of the content structure. This is appropriate for information that affects the structural integrity of the view.

### Scenario: Card or List?

**Consider:**
- **Card:** Visual presentation. Each item occupies a defined rectangular area with consistent dimensions. Best for items with visual content (images, icons, media) or when items need to be scanned quickly at equal importance.
- **List:** Text-heavy presentation. Each item occupies a variable-height row. Best for items with textual content, when items have hierarchical relationships, or when items require detailed reading.

**Decision factors:**
- Does each item have visual content? → Cards. Visual content benefits from the defined rectangular boundary.
- Is the content primarily textual? → Lists. Text benefits from the variable-height row structure.
- Are items of equal importance? → Cards. Equal importance implies equal spatial weight.
- Do items have varying importance or hierarchy? → Lists. Hierarchy is communicated through row ordering and indentation.

**WHITE DIAMOND reasoning:** Cards are the architectural equivalent of rooms in a building — each room has defined walls, a consistent footprint, and equal spatial presence. Lists are the architectural equivalent of a corridor with doors — the corridor provides the linear structure, and each door represents an item of varying importance based on its position along the corridor.

## When Principles Conflict

### Accessibility vs. Aesthetics

**Priority:** Accessibility wins. Always.

**Why:** Excluding users is worse than imperfect aesthetics. An interface that cannot be used by all users has failed its most fundamental architectural purpose: to provide universal access to information and functionality. An aesthetically compromised interface that is accessible is still a building that people can enter. A beautiful interface that is inaccessible is a building with locked doors.

**Resolution:** The resolution is never "sacrifice accessibility for beauty." The resolution is "find aesthetic solutions that are also accessible." This is a design challenge, not a trade-off. Every accessibility requirement has aesthetically satisfying implementations — finding them is the work.

### Consistency vs. Context

**Priority:** Consistency wins, with informed exceptions.

**Why:** Users learn patterns. When a pattern is consistent, the user learns it once and applies it everywhere. When a pattern breaks, the user must relearn, which introduces friction and undermines the sense of absolute control. However, rigid consistency that ignores context produces interfaces that feel mechanical and impersonal.

**Resolution:** Break consistency only when:
1. The context creates a legitimate need that consistency cannot serve
2. The break is documented and justified
3. The break does not create a new pattern that must be replicated
4. The break does not undermine user learning

### Simplicity vs. Power

**Priority:** Simplicity wins by default, power through progressive disclosure.

**Why:** Simple interfaces are easier to learn, easier to use, and easier to maintain. Power that is visible at all times is not power — it is noise. The goal is not to eliminate power but to hide it until the user needs it. This is the architectural principle of the hidden room — the room exists, the user knows it exists, but it does not occupy the primary spatial plane until summoned.

**Resolution:** Start with the simplest possible interface. Identify the points where users need additional power. Reveal that power at those points, and only at those points.

### Speed vs. Accuracy

**Priority:** Accuracy wins for critical actions, speed for non-critical.

**Why:** Errors in critical actions — deleting data, transferring funds, publishing content — are costly, sometimes irreversible. Errors in non-critical actions — navigating, searching, previewing — are easily corrected. The interface must calibrate its pace to the stakes of the action.

**Resolution:** For common, reversible actions (hover states, navigation, exploration), optimize for speed. For critical, irreversible actions (submission, deletion, publication), optimize for accuracy through confirmation, review, and deliberate pacing.

## Decision Documentation

### Decision Record Template

```markdown
# Decision: [Title]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[What is the issue? What prompted this decision?]

## Decision
[What was decided? State the choice clearly.]

## Consequences
[What are the positive and negative outcomes of this choice?]

## Alternatives Considered
[What else was evaluated? Why were they rejected?]

## Principles Applied
[Which WHITE DIAMOND principles were considered? How did they influence the decision?]

## Conditions for Reconsideration
[What would trigger revisiting this decision?]
```

### Example Decision Record

```markdown
# Decision: Use inline form for profile editing

## Status
Accepted

## Context
Users need to edit their profile information. The form has 5 fields: name, email, bio, location, and timezone. Editing occurs in the context of the profile page, which displays the current values.

## Decision
Use an inline form instead of a modal dialog.

## Consequences
- Users maintain context while editing (the profile page remains visible)
- Form is always visible (no modal to open or close)
- No modal dismissal needed (reduces interaction steps)
- Changes can be saved incrementally (each field can be validated independently)
- Form occupies permanent spatial real estate (potential downside for minimal editing)

## Alternatives Considered
- Modal: Rejected because it blocks context (the profile page) and adds an unnecessary architectural layer for a simple, 5-field form. The modal overlay violates the principle of spatial economy when the task does not require focused, isolated attention.
- Separate page: Rejected because it loses all spatial context. The user would navigate away from the profile page, breaking the architectural continuity of the editing experience.

## Principles Applied
- Absolute control: Inline editing maintains the user's spatial awareness and allows incremental progress
- Spatial economy: A modal introduces a layer without sufficient justification for a 5-field form
- Object boundaries: The inline form establishes clear boundaries around each field within the existing content plane

## Conditions for Reconsideration
- If the form grows beyond 8 fields
- If the form requires multi-step workflow (e.g., validation, preview, confirmation)
- If the form includes destructive operations (e.g., account deletion)
```

## See Also

- [Recommended Approaches](recommended-approaches.md) — What works well and why
- [Prohibited Patterns](../anti-patterns/prohibited-patterns.md) — What to avoid and why
- [User Psychology](../psychology/user-psychology.md) — How users perceive and interpret spatial information
- [Core Principles](../philosophy/core-principles.md) — The foundational pillars that guide every decision
- [Design Philosophy](../philosophy/design-philosophy.md) — The broader philosophical framework
