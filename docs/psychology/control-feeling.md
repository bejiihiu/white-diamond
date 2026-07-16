# Control Feeling

## Why This Matters

Users must feel in control of interfaces. Without a sense of control, users feel anxious, frustrated, and powerless. The control feeling is the psychological sense that user actions produce predictable, reversible results.

## What Is Control Feeling?

Control feeling is the perception that:
- **Actions have effects** — What I do matters
- **Effects are predictable** — I know what will happen
- **Effects are reversible** — I can undo mistakes
- **State is visible** — I know what's happening
- **I am in charge** — The interface responds to me

## The Components of Control

### Predictability

Users must be able to predict outcomes:
- **Consistent behavior** — Same action, same result
- **Clear affordances** — Visual cues suggest behavior
- **Standard patterns** — Familiar interactions work as expected
- **No surprises** — Unexpected results break trust

### Visibility

Users must see what's happening:
- **State visibility** — Current state is always visible
- **Action feedback** — Actions produce immediate response
- **Progress visibility** — Long operations show progress
- **Error visibility** — Problems are clearly communicated

### Reversibility

Users must be able to undo mistakes:
- **Undo/redo** — Actions can be reversed
- **Confirmation** — Destructive actions require confirmation
- **Recovery** — Errors can be recovered from
- **Preservation** — User work is preserved

### Responsiveness

The interface must respond quickly:
- **Immediate feedback** — Response within 100ms
- **Visual feedback** — State changes are visible
- **Haptic feedback** — Physical response on touch devices
- **Auditory feedback** — Sound confirmation (optional)

## Control Patterns

### The Confirmation Pattern

Destructive actions require confirmation:
- **Click** — Initial action
- **Confirm** — Secondary confirmation
- **Execute** — Final action

Use for: Delete, remove, cancel, submit

### The Undo Pattern

Actions can be reversed:
- **Action** — User performs action
- **Undo option** — Undo appears briefly
- **Revert** — Action is reversed

Use for: Send, delete, archive, move

### The Preview Pattern

Users can see results before committing:
- **Action** — User initiates action
- **Preview** — Result is shown
- **Confirm** — User confirms action

Use for: Format, style, layout, payment

### The Save Pattern

User work is preserved automatically:
- **Work** — User creates content
- **Auto-save** — Content saved periodically
- **Recovery** — Content recoverable if needed

Use for: Documents, forms, settings

## Control Rules

### Rule 1: Actions Produce Visible Results

Every user action must produce a visible result:
- **Visual change** — Color, size, position
- **Content change** — Text, data, state
- **Feedback** — Confirmation message
- **Motion** — Animation or transition

Actions without results create uncertainty.

### Rule 2: Results Match Expectations

Results must match what users expect:
- **Clear affordances** — Visual cues suggest behavior
- **Consistent patterns** — Similar actions produce similar results
- **Standard behavior** — Follow platform conventions
- **No deception** — Don't mislead users

Unexpected results break trust.

### Rule 3: Mistakes Are Recoverable

Users must be able to recover from mistakes:
- **Undo** — Reverse actions
- **Cancel** — Exit without saving
- **Reset** — Return to defaults
- **Help** — Guidance when stuck

Unrecoverable mistakes create anxiety.

### Rule 4: State Is Always Visible

Users must always know what's happening:
- **Loading** — When processing
- **Success** — When complete
- **Error** — When something fails
- **Progress** — How much is done

Hidden states create confusion.

### Rule 5: Control Is Never Lost

Users must never feel out of control:
- **No trapping** — Always able to escape
- **No hijacking** — Interface never takes over
- **No forcing** — Users choose their path
- **No hiding** — All options are discoverable

Lost control creates frustration.

## Anti-Patterns

### Unexpected Behavior

```html
<!-- Bad -->
<button onclick="submit(); close(); redirect();">

<!-- Good -->
<button onclick="submit();">
  Shows confirmation
  User confirms
  Closes on success
```

### Unrecoverable Actions

```html
<!-- Bad -->
<button onclick="deletePermanently()">

<!-- Good -->
<button onclick="archive()">
  Shows confirmation
  User confirms
  Archive can be undone
```

### Hidden State

```html
<!-- Bad -->
<button onclick="process()">
  No indication of processing

<!-- Good -->
<button onclick="process()">
  Shows spinner while processing
  Shows success when complete
  Shows error if failed
```

### No Feedback

```html
<!-- Bad -->
<input onchange="save()">

<!-- Good -->
<input onchange="save()">
  Shows saving indicator
  Shows saved confirmation
  Shows error if failed
```

## See Also

- [User Psychology](user-psychology.md) — How users think and feel
- [Cognitive Load](cognitive-load.md) — Mental effort and clarity
- [Animation Principles](../motion/animation-principles.md) — How motion communicates feedback
- [Button Specification](../components/button-specification.md) — Button feedback behavior
- [Input Specification](../components/input-specification.md) — Input feedback behavior
