# Contributing to WHITE DIAMOND

## Introduction

WHITE DIAMOND is not a code library. It is not a design system. It is not a UI kit. It is a **design specification** — a document that defines the physics of digital space, the geometry of objects, the perception of motion, the psychology of users, the rules of composition, the behavior of components, the constraints of design, and the philosophy of interaction. Every contribution to this project is an act of architectural specification, not decoration.

This guide defines how to contribute, what standards contributions must meet, and why those standards exist. Every guideline here is derived from the same philosophical foundation that governs the specification itself.

## The Philosophy of Contribution

### Why Contributions Matter

A specification is only as strong as the community that maintains it. Without contributors, the specification becomes stale, inconsistent, or incomplete. Every contribution — whether a new specification, a correction, a case study, or a translation — strengthens the architectural foundation that all digital interfaces will rest upon.

Contributions are not suggestions. They are architectural decisions that become part of the permanent record of how digital space should be constructed. This weight must be respected in every pull request, every discussion, and every decision.

### The Architectural Standard

WHITE DIAMOND treats the digital screen as a window into an infinite architectural space. Every element within that space has mass, boundaries, and physical presence. Contributors must internalize this mental model before contributing:

- **Space is infinite.** The screen is not a flat canvas. It is a viewport into a boundless environment. Every contribution must assume this spatial depth.
- **Objects have mass and boundaries.** Every element is an architectural construction. It has weight, occupies space, and defines its edges through borders. There is no ambiguity about where an object begins or ends.
- **Three-layer hierarchy is immutable.** Physical Boundary defines extent. Inner Surface defines materiality. Content defines meaning. This hierarchy is not a suggestion — it is a law.
- **Only rectangles exist.** Circles, ovals, and organic shapes are forbidden. They violate the architectural logic of the system. Every contribution must respect this constraint.
- **Borders define existence.** Without a border, an object does not exist. Borders are not decoration — they are existential markers.
- **Animation serves physics.** Motion exists only to demonstrate the physical properties of space and objects. Decoration is forbidden.
- **Absolute control is sacred.** Users feel control through predictability, not through flashy effects. Every contribution must preserve this predictability.
- **Monumentality pervades everything.** Every element must feel like a massive architectural construction, regardless of its size.

Contributors must demonstrate understanding of these principles before their work can be accepted.

## Types of Contributions

### Specification Documents

Specifications are the core of WHITE DIAMOND. They define the rules that govern digital space. A specification must:

- Define a single concept with absolute precision
- Explain why the concept matters (not just what it is)
- Provide rules that are specific enough to be testable
- Include examples that demonstrate correct application
- Include anti-patterns that demonstrate what is forbidden
- Cross-reference related specifications to show the system

See [Component Template](docs/templates/component-template.md) for the structure of specification documents.

### Case Studies

Case studies demonstrate how WHITE DIAMOND principles apply to real-world interfaces. They bridge theory and practice, proving that the specification works in actual production environments.

Every case study must:
- Present a real interface with real constraints
- Identify specific problems that WHITE DIAMOND solves
- Show before-and-after comparisons with architectural reasoning
- Extract generalizable lessons that other designers can apply

See [Case Studies Guide](docs/case-studies/index.md) for the case study structure.

### Corrections

Corrections fix errors, inconsistencies, or ambiguities in existing specifications. Even a misplaced word can undermine the precision of the entire system. Corrections are among the most valuable contributions because they preserve the integrity of the specification.

### Translations

Translations make WHITE DIAMOND accessible to non-English speakers. A translation must preserve the exact meaning of the original — not just the words. Architectural terminology must be translated with precision, and any ambiguity must be flagged for review.

### Examples

Examples demonstrate specifications in action. They show correct application, not just theoretical rules. Every example must be unambiguous, showing exactly what is correct and why.

## Before Contributing

### Study the Foundation

Before contributing, read the following documents in order:

1. **[Core Principles](docs/philosophy/core-principles.md)** — The philosophical foundation of WHITE DIAMOND. Every decision flows from these principles.
2. **[Design Philosophy](docs/philosophy/design-philosophy.md)** — The reasoning behind the design decisions. This explains why the specification exists in its current form.
3. **[Spatial Model](docs/philosophy/spatial-model.md)** — The architectural model of digital space. This defines how space, objects, and boundaries interact.

### Understand the Existing Specifications

Read all existing specifications before proposing new ones. The specification is a system — each document references and depends on others. Proposing a specification without understanding the existing system risks introducing contradictions.

### Check for Duplication

Search existing issues, discussions, and specifications before proposing something new. Duplicated effort wastes time and fragments the specification. If a concept is already covered, improve the existing document rather than creating a new one.

### Discuss Large Changes

For significant additions or modifications to the specification, open an issue first. Describe what you want to change, why you want to change it, and how it aligns with the core principles. This prevents wasted effort and ensures alignment before implementation.

## Writing Specifications

### Structure

Every specification document must follow this structure:

```markdown
# [Title]

## Why This Matters
[Explain the problem this specification solves]
[Explain what happens without this specification]
[Explain how this specification serves the architectural vision]

## Core Concept
[Define the fundamental idea in precise architectural language]
[Explain how this concept relates to the spatial model]
[Define the relationship to the three-layer hierarchy]

## Rules
[Specific, testable rules — not suggestions]
[Each rule must have a clear rationale]
[Rules must be consistent with the core principles]

## Examples
[Concrete examples of correct application]
[Each example must demonstrate WHY it is correct]
[Examples must use rectangular geometry exclusively]

## Anti-Patterns
[What this specification explicitly prohibits]
[Each anti-pattern must explain WHY it is forbidden]
[Anti-patterns must reference the principle they violate]

## Cross-References
[Links to related specifications]
[Explanation of how this specification fits within the system]
```

### Writing Style

**Be precise.** Use exact language. "Approximately 8 pixels" is not acceptable. "8px" is. Ambiguity is the enemy of architectural specification.

**Explain the why.** Every rule must have a reason. "Use 8px borders" is incomplete. "Use 8px borders because thin borders (1-2px) fail to establish the existential boundary of objects, violating the border principle" is complete.

**Be technology-agnostic.** WHITE DIAMOND is not tied to any framework, library, or platform. It describes universal principles of digital space. Never reference React, Vue, CSS, or any specific technology in the specification documents themselves.

**Use concrete examples.** Abstract rules need concrete demonstrations. Every rule should have at least one example showing correct application and one showing incorrect application.

**Cross-reference.** The specification is a system, not a collection of isolated documents. Every document must reference related specifications to show how concepts connect.

### Quality Standards

- All content must be in English
- Every document must explain WHY, not just WHAT
- Rules must be specific enough to be testable (e.g., "always use 8px borders" is testable; "use appropriate borders" is not)
- Examples must be clear and demonstrable
- No references to specific technologies, frameworks, or brands
- Every document must be internally consistent (no contradictions within a single document)
- Every document must be externally consistent (no contradictions with other documents)

## The Review Process

### What We Review

Every pull request is reviewed against these criteria:

1. **Philosophical Alignment** — Does the contribution align with the core principles? Does it respect the spatial model, the three-layer hierarchy, the border principle, and the rectangle constraint?

2. **Precision of Language** — Is the language exact? Are there ambiguous terms that could be interpreted differently? Is every rule testable?

3. **Completeness of Explanation** — Does the contribution explain WHY, not just WHAT? Are the reasons compelling and consistent with the architectural vision?

4. **Cross-Reference Integrity** — Does the contribution properly reference related specifications? Are the references accurate?

5. **Consistency** — Does the contribution contradict any existing specification? If it does, is the contradiction intentional and justified?

6. **Example Quality** — Are the examples clear, correct, and demonstrable? Do they use only rectangular geometry?

### Review Timeline

- Simple corrections: 3-5 business days
- New specifications: 7-10 business days
- Major additions: 14-21 business days

### Rejection Criteria

Pull requests may be rejected for:

- Philosophical misalignment (e.g., suggesting circular elements)
- Insufficient explanation of reasoning
- Ambiguous or untestable rules
- Contradictions with existing specifications
- Technology-specific references
- Poor example quality

## Commit Message Format

Use clear, descriptive commit messages that explain what changed and why:

```
[Type] Brief description

- Detail 1: what this change does
- Detail 2: why this change is necessary
- Detail 3: how this relates to other specifications
```

Types:
- `feat` — New specification or significant addition
- `fix` — Correction of error or ambiguity
- `docs` — Documentation improvement
- `refactor` — Restructuring without changing meaning
- `test` — Adding or improving examples

## Maintaining Philosophical Rigor

### The Architectural Mindset

When reviewing or writing specifications, think like an architect, not a UI designer. An architect asks:

- What is the physical structure of this space?
- What are the boundaries of each object?
- How do objects interact within the space?
- What forces govern motion?
- What happens at the boundaries?

A UI designer asks:

- Does this look good?
- Is this trendy?
- Will users like this?

WHITE DIAMOND requires the architectural mindset. Every decision must be grounded in physical and spatial reasoning, not aesthetic preference.

### Challenging Assumptions

The most valuable contributions often challenge existing assumptions. If you believe a specification is wrong, explain why with architectural reasoning. The core principles are non-negotiable, but their application is open to refinement.

### Preserving Consistency

The specification is a system. Changing one document may require changes to others. When making significant changes, identify all affected documents and propose coordinated updates.

## Questions

If you have questions about contributing, open a discussion or issue. We are happy to help. The goal is to make contributing as clear and accessible as the specification itself.
