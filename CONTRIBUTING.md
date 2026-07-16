# Contributing to WHITE DIAMOND

Thank you for your interest in contributing to WHITE DIAMOND. This document provides guidelines and information for contributors.

## What is WHITE DIAMOND?

WHITE DIAMOND is a design specification, not a code library. Contributions are documents that define the physics of digital space, geometry of objects, motion perception, user psychology, composition rules, component behavior, design constraints, and interaction philosophy.

## How to Contribute

### Types of Contributions

1. **Specification Documents** — New or improved specifications for how interfaces should work
2. **Examples** — Concrete demonstrations of specifications in action
3. **Case Studies** — Real-world applications of WHITE DIAMOND principles
4. **Corrections** — Fixes for errors, inconsistencies, or ambiguities
5. **Translations** — Translations of specifications into other languages

### Before Contributing

1. Read the [Core Principles](docs/philosophy/core-principles.md) to understand the philosophical foundation
2. Read the [Design Philosophy](docs/philosophy/design-philosophy.md) to understand the "why" behind decisions
3. Check existing issues and discussions to avoid duplication
4. For large changes, open an issue first to discuss the proposal

### Writing Specifications

Every specification document should follow this structure:

```markdown
# [Title]

## Why This Matters
[Explain the problem this specification solves]

## Core Concept
[Define the fundamental idea]

## Rules
[Specific, testable rules — not suggestions]

## Examples
[Concrete examples of correct application]

## Anti-Patterns
[What this specification explicitly prohibits]

## Cross-References
[Links to related specifications]
```

### Writing Style

- **Be precise** — Use exact language, not ambiguous descriptions
- **Explain the why** — Every rule must have a reason
- **Be technology-agnostic** — Don't reference specific frameworks or libraries
- **Use concrete examples** — Abstract rules need concrete demonstrations
- **Cross-reference** — Link to related specifications to show the system

### Quality Standards

- All content must be in English
- Every document must explain WHY, not just WHAT
- Rules must be specific enough to be testable
- Examples must be clear and demonstrable
- No references to specific technologies, frameworks, or brands

## Pull Request Process

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes following the guidelines above
4. Ensure all markdown lint checks pass
5. Ensure all links are valid
6. Submit a pull request with a clear description

### Commit Messages

Use clear, descriptive commit messages:

```
Add specification for [topic]

- Explain what this specification defines
- Note why this is important
- Reference related specifications
```

### Review Process

All contributions will be reviewed for:
- Alignment with WHITE DIAMOND principles
- Clarity and precision of language
- Completeness of explanation
- Valid cross-references
- Consistency with existing specifications

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Questions?

If you have questions about contributing, please open a discussion or issue. We're happy to help.
