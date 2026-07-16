# Cognitive Load

## Why This Matters

The human brain has finite processing capacity. At any given moment, the prefrontal cortex can hold approximately four chunks of information in active processing. Beyond this limit, performance degrades. Errors increase. Decisions slow. Abandonment becomes likely. This is not a limitation of intelligence—it is a structural constraint of neural architecture. Working memory is a bottleneck, and every interface element competes for access to it.

Cognitive load is the total amount of mental effort required to use an interface. It is the sum of three forces: the complexity of the task itself (intrinsic load), the complexity imposed by the interface design (extraneous load), and the effort required to learn and remember (germane load). WHITE DIAMOND treats cognitive load as an architectural problem, not a content problem. The interface should not add weight to the user's cognitive burden—it should reduce it through spatial clarity, consistent structure, and progressive revelation.

The goal is not simplicity for its own sake. The goal is efficiency: the minimum cognitive cost for maximum functional value. Every element must earn its place in the user's attention. Every interaction must justify its cognitive expense. Every piece of information must be presented at the moment it is needed, in the form it is most easily processed, in the position it is most naturally found.

## The Architecture of Mental Effort

### How the Brain Processes Interfaces

The brain processes visual information through a hierarchy of systems. Early visual processing (V1-V4) extracts edges, colors, and textures. Mid-level processing groups these features into surfaces, objects, and spatial relationships. High-level processing interprets these objects in context, assigning meaning and planning actions.

Each level of processing consumes cognitive resources. The critical insight is that **spatial structure reduces processing cost at every level**:

- **Edge detection** is faster when borders are strong and consistent. WHITE DIAMOND's mandatory borders create clear edges that the visual system can process efficiently.
- **Surface segmentation** is faster when elements have clear spatial boundaries. WHITE DIAMOND's border-defined elements create unambiguous surfaces that the visual system can separate quickly.
- **Object recognition** is faster when elements follow consistent visual patterns. WHITE DIAMOND's consistent element types create predictable visual signatures that the recognition system can match rapidly.
- **Spatial reasoning** is faster when elements maintain consistent spatial relationships. WHITE DIAMOND's architectural layout creates predictable spatial structures that the reasoning system can navigate efficiently.

### Intrinsic Load: The Unchangeable Baseline

Intrinsic load is determined by the complexity of the task itself. Calculating taxes is inherently more complex than checking the time. Editing video is inherently more complex than reading text. WHITE DIAMOND cannot reduce intrinsic load, but it can prevent adding to it.

**Architectural Principle:** The interface must not increase the inherent complexity of the task. Every interface decision that adds steps, introduces unfamiliar concepts, or requires learning new patterns increases extraneous load on top of the intrinsic baseline.

**WHITE DIAMOND Approach:**
- Map interface interactions directly to task semantics. If the task is "send a message," the interface should present a message composition surface and a send action—not a sequence of navigations, confirmations, and state changes.
- Use spatial metaphors that align with task mental models. A file system task should use spatial metaphors of folders, shelves, and documents. A communication task should use spatial metaphors of rooms, conversations, and messages.
- Preserve task focus by minimizing interruptions. Modal dialogs, unexpected state changes, and unsolicited information break task flow and increase cognitive cost.

### Extraneous Load: The Design Tax

Extraneous load is the cognitive cost imposed by the interface design itself. It is the mental effort spent understanding the interface rather than performing the task. This is the load that WHITE DIAMOND is designed to minimize.

**Sources of Extraneous Load:**

1. **Spatial ambiguity** — When elements lack clear boundaries, the brain must spend effort determining where one element ends and another begins. WHITE DIAMOND eliminates spatial ambiguity through mandatory borders and consistent spatial relationships.

2. **Behavioral inconsistency** — When similar elements behave differently, the brain must spend effort learning the exceptions. WHITE DIAMOND eliminates behavioral inconsistency through consistent interaction patterns across all element types.

3. **Visual clutter** — When too many elements compete for attention, the brain must spend effort filtering irrelevant information. WHITE DIAMOND eliminates visual clutter through progressive disclosure and spatial hierarchy.

4. **Unnecessary animation** — When elements move without purpose, the brain must spend effort tracking the movement and determining its meaning. WHITE DIAMOND eliminates unnecessary animation by restricting motion to physics demonstrations and state communication.

5. **Hidden state** — When the current state is not visible, the brain must spend effort remembering or inferring the state. WHITE DIAMOND eliminates hidden state through always-visible state indicators and consistent feedback.

### Germane Load: The Learning Investment

Germane load is the cognitive effort invested in learning and remembering how the interface works. Unlike extraneous load, germane load is productive—it builds the mental models that enable efficient future use.

**WHITE DIAMOND's Approach to Germane Load:**

- **Consistent patterns enable learning** — When the same pattern is used everywhere, learning one instance teaches all instances. A user who learns how one button works knows how all buttons work. This consistency converts germane load from a recurring cost into a one-time investment.
- **Spatial memory reduces recall** — When elements are in consistent positions, users can find them through spatial memory rather than visual search. Spatial memory is more reliable and less effortful than visual search.
- **Architectural metaphor enables transfer** — When the interface uses architectural metaphors (borders, surfaces, spaces), knowledge transfers from physical world experience. Users already understand buildings, rooms, and doors. This existing knowledge reduces the learning cost of the digital interface.

## Cognitive Load Principles

### Principle 1: Spatial Hierarchy Reduces Search Cost

The brain searches for information in spatial order: top-to-bottom, left-to-right, foreground-to-background. This search pattern is not cultural—it is neurological. The visual system prioritizes information based on spatial position, with the top-left foreground receiving the most attention.

**WHITE DIAMOND Application:**

- Primary content occupies the top-left foreground with the strongest visual presence (largest mass, strongest borders, highest contrast).
- Secondary content occupies the midground with moderate visual presence.
- Tertiary content occupies the background with the weakest visual presence.
- This spatial hierarchy guides the eye through the interface in the order of importance, reducing search cost to near zero.

**Specification:**
- Primary elements: minimum 48px height, 2px border, full opacity
- Secondary elements: minimum 32px height, 1px border, 80% opacity
- Tertiary elements: minimum 24px height, 1px border, 60% opacity
- Spacing between hierarchy levels: minimum 24px

### Principle 2: Progressive Disclosure Reduces Decision Cost

Hick's Law states that decision time increases logarithmically with the number of choices. Ten choices do not take twice as long as five—they take significantly longer because the brain must evaluate each option against the others.

**WHITE DIAMOND Application:**

- **Layer 1 (Default):** Show only the 3-5 most essential options. These are the options that cover 80% of use cases (Pareto Principle).
- **Layer 2 (Contextual):** Show additional options when the user indicates intent to explore. This might be through a "More options" disclosure or through context-specific interaction.
- **Layer 3 (Advanced):** Show all options in a dedicated settings or configuration surface. This surface is accessible but not prominent.

**Specification:**
- Default view: maximum 7±2 interactive elements
- Each element group: maximum 5 items
- Disclosure triggers: clearly bordered with explicit labels
- Disclosure animation: 200ms ease-out expansion

### Principle 3: Chunking Reduces Processing Cost

Miller's Law states that working memory holds approximately 7±2 chunks of information. Each chunk can contain multiple pieces of information, but the number of chunks is limited. Effective chunking groups related information into single cognitive units.

**WHITE DIAMOND Application:**

- **Visual chunking** — Related elements are grouped within shared borders. A form field with its label, help text, and validation message is one visual chunk, not four separate elements.
- **Spatial chunking** — Related groups are placed in proximity. Navigation items are grouped together. Action items are grouped together. Information items are grouped together.
- **Functional chunking** — Related actions are grouped in the same interactive element. A dropdown menu groups multiple options into a single clickable element.

**Specification:**
- Related elements: maximum 8px spacing within group
- Unrelated elements: minimum 24px spacing between groups
- Group boundaries: 1px border with consistent color
- Group labels: 12px text, 60% opacity, positioned above or beside group

### Principle 4: Recognition Over Recall Reduces Memory Cost

The brain recognizes information faster than it recalls it. Recognition is a pattern-matching process that operates on perceptual input. Recall is a reconstructive process that operates on memory. Recognition is less effortful and more reliable.

**WHITE DIAMOND Application:**

- **Visible options** — All available actions are visible, not hidden behind menus or keyboard shortcuts. The user can see what is possible rather than remembering what is possible.
- **Labeled elements** — Every element has a clear text label. Icons are supplemented with text. Visual metaphors are explained through labels.
- **Consistent placement** — Elements are in consistent positions across views. The user can recognize the location of elements rather than recalling their positions.
- **Contextual help** — Complex elements provide contextual help through tooltips or adjacent text. Help is available at the point of need, not in a separate help system.

### Principle 5: Feedback Reduces Uncertainty Cost

Uncertainty is cognitively expensive. When users are uncertain about the state of the system, the consequences of their actions, or the progress of their workflow, they must allocate cognitive resources to monitoring and evaluation. Feedback reduces uncertainty by providing explicit information about system state.

**WHITE DIAMOND Application:**

- **Action feedback** — Every action produces immediate visual confirmation. The button depresses. The item moves. The state changes. This confirmation eliminates uncertainty about whether the action was received.
- **State feedback** — The current state is always visible. Loading states show progress. Success states confirm completion. Error states explain failures. This visibility eliminates uncertainty about what the system is doing.
- **Progress feedback** — Long operations show progress indicators. The indicator communicates percentage complete and estimated time remaining. This communication eliminates uncertainty about when the operation will complete.

## Cognitive Load Patterns

### The Spatial Chunking Pattern

Group related elements within shared architectural boundaries:

```
┌─────────────────────────────────┐
│ Navigation                      │
│ ┌───────┐ ┌───────┐ ┌───────┐  │
│ │ Home  │ │ Search│ │ Profile│  │
│ └───────┘ └───────┘ └───────┘  │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│ Content                         │
│ ┌─────────────────────────────┐ │
│ │ Primary Action              │ │
│ └─────────────────────────────┘ │
│ ┌───────────┐ ┌───────────────┐ │
│ │ Secondary │ │ Secondary     │ │
│ └───────────┘ └───────────────┘ │
└─────────────────────────────────┘
```

Each bordered region is one cognitive chunk. The user processes three chunks (Navigation, Primary Content, Secondary Content) rather than eight individual elements.

### The Progressive Hierarchy Pattern

Reveal information in layers of increasing detail:

**Layer 1: Orientation**
- Where am I? (Current location highlighted)
- What can I do? (Primary actions visible)
- How do I get back? (Return path clear)

**Layer 2: Action**
- What are my options? (Secondary actions visible)
- What do I need to know? (Supporting information visible)
- What happens next? (Consequences communicated)

**Layer 3: Detail**
- All available options (Complete option set)
- All relevant information (Full context)
- All possible outcomes (Complete consequence map)

Each layer is a cognitive stage. The user processes one stage at a time, building understanding incrementally.

### The Attention Funnel Pattern

Guide attention through spatial narrowing:

```
┌─────────────────────────────────────────────┐
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │                                     │   │
│   │   ┌─────────────────────────────┐   │   │
│   │   │                             │   │   │
│   │   │      PRIMARY CONTENT        │   │   │
│   │   │                             │   │   │
│   │   └─────────────────────────────┘   │   │
│   │                                     │   │
│   └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

The outermost region provides context. The middle region provides orientation. The innermost region provides focus. Attention is funneled from context to focus through spatial narrowing.

## Cognitive Load Rules

### Rule 1: One Primary Task Per View

Each view must have one clearly identifiable primary task. Secondary tasks are present but visually subordinate. Tertiary tasks are available through disclosure.

**Justification:** Multiple competing primary tasks create decision conflict. The brain cannot simultaneously prioritize two equally-prominent goals. Conflict increases cognitive cost and reduces performance.

**Specification:**
- Primary task element: largest visual mass, strongest borders, top-left positioning
- Secondary task elements: medium visual mass, medium borders, adjacent positioning
- Tertiary task elements: smallest visual mass, weakest borders, disclosed positioning
- Ratio of primary to secondary to tertiary visual mass: 3:2:1

### Rule 2: Maximum 7±2 Elements Per Group

No group of elements should contain more than 7±2 items. If more items are needed, they should be grouped into sub-groups or disclosed progressively.

**Justification:** Working memory capacity is 4±1 chunks. Each element in a group requires at least one chunk. Exceeding this limit forces the brain to cycle through items, increasing processing time and error rate.

**Specification:**
- Navigation groups: maximum 5 items
- Form groups: maximum 7 items
- List groups: maximum 7 items visible, with scroll for additional items
- Menu groups: maximum 7 items, with submenu for additional items

### Rule 3: Consistent Spatial Positioning

Elements that appear in multiple views must maintain consistent spatial positions. Navigation stays at the top or left. Actions stay at the bottom or right. Content stays in the center.

**Justification:** Spatial memory is more reliable and less effortful than visual search. When elements are in consistent positions, users can find them through spatial memory, reducing cognitive cost to near zero.

**Specification:**
- Navigation: fixed position (top or left)
- Primary actions: consistent position (bottom-right or below content)
- Secondary actions: consistent position (adjacent to primary actions)
- Content: flexible position (center, with consistent margins)

### Rule 4: Immediate Feedback Within 100ms

Every interactive element must provide visual feedback within 100 milliseconds of user interaction.

**Justification:** The brain's feedback loop operates on a 100ms cycle. If feedback arrives after this window, the brain perceives a disconnect between action and result. This disconnect increases cognitive cost because the brain must verify that the action was received.

**Specification:**
- Button click: visual depression within 100ms
- Slider drag: position update within 16ms (60fps)
- Text input: character appearance within 16ms
- Toggle switch: state change within 100ms
- Navigation: page transition within 200ms

### Rule 5: Eliminate Unnecessary Elements

Every element that does not directly support the user's task is a cognitive tax. If an element does not provide information, enable action, or communicate state, it should be removed.

**Justification:** Every visual element competes for attention. Unnecessary elements consume attention without providing value, increasing the cognitive cost of processing the interface.

**Specification:**
- Decorative elements: prohibited. All visual elements must serve a functional purpose.
- Redundant information: prohibited. Information presented in one form should not be repeated in another.
- Redundant actions: prohibited. The same action should not be accessible through multiple paths unless there is a strong use case.
- Visual noise: prohibited. Patterns, textures, and gradients that do not communicate information are prohibited.

## Measuring Cognitive Load

### Architectural Evaluation

Expert review of the interface against WHITE DIAMOND spatial principles:

- **Border audit** — Does every functional element have a clear border? Are borders consistent in width and color?
- **Mass audit** — Is visual mass proportional to functional importance? Are primary elements larger than secondary elements?
- **Spacing audit** — Is spacing between elements consistent? Are related elements grouped within shared borders?
- **Hierarchy audit** — Is the spatial hierarchy clear? Can users identify the primary task within 2 seconds?

### Behavioral Measurement

Observation of user behavior to identify cognitive load indicators:

- **Hesitation time** — Time between viewing an element and interacting with it. Long hesitation indicates uncertainty.
- **Error rate** — Frequency of incorrect actions. High error rate indicates confusion.
- **Navigation depth** — Number of steps to complete a task. Deep navigation indicates poor spatial organization.
- **Return frequency** — How often users return to previous views. Frequent returns indicate incomplete information or unclear consequences.

### Performance Metrics

Quantitative measurement of cognitive load effects:

- **Task completion time** — Time to complete defined tasks. Longer times indicate higher cognitive load.
- **First-click accuracy** — Percentage of first clicks that lead to task completion. Low accuracy indicates poor affordance clarity.
- **Time to first interaction** — Time before the user interacts with the view. Longer times indicate poor spatial hierarchy.
- **Abandonment rate** — Percentage of tasks started but not completed. High rates indicate excessive cognitive load.

## See Also

- [User Psychology](user-psychology.md) — How users perceive and process interfaces
- [Control Feeling](control-feeling.md) — The sense of agency and spatial control
- [Typography](../typography/type-system.md) — How text clarity reduces cognitive cost
- [Color System](../tokens/color-system.md) — How color consistency reduces processing cost
- [Layout Principles](../layout/composition-rules.md) — How spatial organization reduces search cost
- [Animation Principles](../motion/animation-principles.md) — How purposeful motion reduces uncertainty cost
