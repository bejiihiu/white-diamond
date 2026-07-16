# Cognitive Load

## Why This Matters

Users have limited mental resources. Interfaces that demand too much cognitive effort cause confusion, errors, and abandonment. The cognitive load specification ensures interfaces are mentally efficient.

## Types of Cognitive Load

### Intrinsic Load

The complexity of the task itself:
- **Simple tasks** — Low intrinsic load (checking email)
- **Complex tasks** — High intrinsic load (editing video)
- **Variable tasks** — Load changes with task

WHITE DIAMOND cannot reduce intrinsic load—it can only avoid adding to it.

### Extraneous Load

The complexity added by the interface:
- **Poor design** — Confusing layouts, unclear labels
- **Inconsistency** — Different patterns for same actions
- **Clutter** — Too many elements, too much information
- **Motion** — Distracting or unnecessary animations

WHITE DIAMOND minimizes extraneous load through consistent, clear design.

### Germane Load

The effort to learn and remember:
- **Learning** — Understanding how the interface works
- **Remembering** — Recalling how to do tasks
- **Applying** — Using knowledge in new situations
- **Transfer** — Applying knowledge to other interfaces

WHITE DIAMOND supports germane load through consistent patterns that enable learning.

## Cognitive Load Principles

### Principle 1: Simplicity

Reduce complexity wherever possible:
- **Minimal elements** — Only necessary elements
- **Clear hierarchy** — Important elements prominent
- **Progressive disclosure** — Show only what's needed
- **Consistent patterns** — Same patterns everywhere

### Principle 2: Chunking

Group related information:
- **Visual grouping** — Related elements close together
- **Logical grouping** — Related actions in same menu
- **Information grouping** — Related data in same section
- **Task grouping** — Related steps in same workflow

### Principle 3: Recognition Over Recall

Make information visible, don't rely on memory:
- **Visible options** — Show available actions
- **Labels** — Label all elements clearly
- **Tooltips** — Provide additional context
- **Help** — Offer guidance when needed

### Principle 4: Consistency

Same patterns, same behavior, everywhere:
- **Visual consistency** — Same elements look same
- **Behavioral consistency** — Same elements behave same
- **Spatial consistency** — Same elements exist same place
- **Temporal consistency** — Same transitions occur same way

### Principle 5: Feedback

Provide immediate, clear feedback:
- **Action feedback** — Confirm actions completed
- **State feedback** — Show current state
- **Error feedback** — Explain what went wrong
- **Progress feedback** — Show how much is done

## Cognitive Load Patterns

### The F-Pattern

For text-heavy content:
```
██████████████████████
██████████████████████
██████████████████
████████████████
██████████████████████
██████████████████████
██████████████████
```

Users scan left-to-right, then down.

### The Z-Pattern

For visual content:
```
██████████████████████
                ██████████████████████
██████████████████████
██████████████████████
```

Users scan corners in Z-shape.

### The Pyramid Pattern

For hierarchical content:
```
          ████
        ████████
      ████████████
    ████████████████
  ████████████████████
████████████████████████
```

Users scan from most to least important.

## Cognitive Load Rules

### Rule 1: One Task Per View

Each view should focus on one primary task:
- **Single goal** — One main action per view
- **Clear purpose** — Users know what to do
- **Minimal distraction** — Only relevant elements
- **Progressive complexity** — Simple by default

Multiple tasks per view create confusion.

### Rule 2: Limit Options

Too many options overwhelm users:
- **7±2 items** — Maximum options visible at once
- **Grouped options** — Related options grouped
- **Prioritized options** — Most important first
- **Searchable** — Find options by typing

More options than needed create decision paralysis.

### Rule 3: Show Only What's Needed

Don't overwhelm with information:
- **Progressive disclosure** — Reveal details as needed
- **Contextual actions** — Show actions when relevant
- ** collapsible sections** — Hide secondary content
- **Tooltips** — Provide details on demand

Showing everything creates visual noise.

### Rule 4: Use Clear Language

Language must be understandable:
- **Simple words** — No jargon or technical terms
- **Active voice** — "Click Save" not "Save should be clicked"
- **Specific labels** — "Delete Account" not "OK"
- **Consistent terminology** — Same word for same thing

Unclear language increases cognitive load.

### Rule 5: Provide Mental Shortcuts

Help users process information faster:
- **Visual hierarchy** — Guide the eye
- **Color coding** — Group by color
- **Icons** — Represent concepts visually
- **Defaults** — Provide sensible defaults

Mental shortcuts reduce processing effort.

## Measuring Cognitive Load

### Qualitative Methods

- **User testing** — Watch users struggle
- **Think-aloud** — Users verbalize thoughts
- **Interviews** — Ask about difficulties
- **Surveys** — Measure perceived difficulty

### Quantitative Methods

- **Task completion** — Time to complete tasks
- **Error rate** — Number of mistakes
- **Learnability** — How quickly users learn
- **Recall** — What users remember

### Heuristic Evaluation

Expert review for cognitive load issues:
- **Consistency** — Are patterns consistent?
- **Simplicity** — Is it as simple as possible?
- **Feedback** — Is feedback clear?
- **Error prevention** — Are errors prevented?

## See Also

- [User Psychology](user-psychology.md) — How users think and feel
- [Control Feeling](control-feeling.md) — The sense of agency
- [Typography](../typography/type-system.md) — How text affects comprehension
- [Color System](../tokens/color-system.md) — How color affects perception
- [Composition Rules](../layout/composition-rules.md) — Rules for arranging elements
