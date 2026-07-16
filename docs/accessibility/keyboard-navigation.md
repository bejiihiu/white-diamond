# Keyboard Navigation

## Why This Matters

Keyboard navigation ensures interfaces work for users who cannot or prefer not to use a mouse. Without keyboard accessibility, interfaces exclude users with motor impairments, power users, and anyone whose hands are occupied.

## The Principle of Keyboard Access

Every interactive element must be:
- **Focusable** — Can receive keyboard focus
- **Operable** — Can be activated via keyboard
- **Discoverable** — Users can find it via keyboard
- **Understandable** — Users know what it does

## Focus Management

### Focus Order

Focus must follow a logical order:
- **Reading order** — Left to right, top to bottom (LTR)
- **Visual order** — Matches visual layout
- **Logical order** — Follows user expectations
- **Document order** — Matches DOM order

Focus order rules:
- **No skip** — Focus never skips elements
- **No trap** — Focus never gets stuck (except modals)
- **No loss** — Focus is never lost
- **No reversal** — Focus direction is consistent

### Focus Indicator

Focus must be visible:
- **High contrast** — 3:1 contrast ratio minimum
- **Consistent style** — Same indicator throughout
- **Adequate size** — At least 2px outline
- **Clear shape** — Outline, not just color change

Focus indicator rules:
- **Always visible** — Never remove focus indicators
- **Never subtle** — Always clearly visible
- **Consistent** — Same indicator for same types
- **Accessible** — Works in high contrast mode

### Focus Trapping

Focus must be trapped in certain contexts:
- **Modals** — Focus stays within modal
- **Dropdowns** — Focus stays within dropdown
- **Menus** — Focus stays within menu
- **Dialogs** — Focus stays within dialog

Focus trapping rules:
- **Escape to exit** — Escape key always exits trap
- **Return focus** — Focus returns to trigger on exit
- **No dead ends** — Users can always escape
- **Clear boundaries** — Users know where focus is

## Keyboard Interactions

### Standard Keys

| Key | Action |
|-----|--------|
| `Tab` | Move to next focusable element |
| `Shift+Tab` | Move to previous focusable element |
| `Enter` | Activate buttons, links, menu items |
| `Space` | Activate buttons, toggle checkboxes |
| `Escape` | Close dropdowns, modals, menus |
| `Arrow keys` | Navigate within composite widgets |
| `Home` | Move to first item in list |
| `End` | Move to last item in list |

### Component-Specific Keys

**Buttons**
- `Enter` — Activate
- `Space` — Activate

**Links**
- `Enter` — Follow link

**Inputs**
- `Typing` — Enter text
- `Backspace/Delete` — Remove text
- `Arrow keys` — Move cursor
- `Home/End` — Move to start/end
- `Ctrl+A` — Select all
- `Ctrl+C/X/V` — Copy/Cut/Paste

**Dropdowns**
- `Enter/Space` — Open/close
- `Arrow up/down` — Navigate options
- `Escape` — Close without selection

**Tabs**
- `Arrow left/right` — Navigate tabs
- `Enter/Space` — Activate tab
- `Home/End` — Move to first/last tab

**Lists**
- `Arrow up/down` — Navigate items
- `Enter/Space` — Select item
- `Home/End` — Move to first/last item

### Advanced Interactions

**Type-ahead**
- Typing characters jumps to matching items
- Useful for long lists
- Supports first character matching

**Multi-select**
- `Ctrl+click` — Toggle selection
- `Shift+click` — Range selection
- `Ctrl+A` — Select all

**Drag and drop**
- `Space` — Pick up item
- `Arrow keys` — Move item
- `Space` — Drop item
- `Escape` — Cancel drag

## Keyboard Patterns

### Skip Navigation

Provide skip links to bypass repetitive content:
```
Skip to main content
Skip to navigation
Skip to footer
```

Skip link rules:
- **First focusable element** — Tab reveals skip link
- **Hidden until focused** — Not visible normally
- **Visible when focused** — Clearly visible on focus
- **Works correctly** — Jumps to correct section

### Roving Tabindex

For composite widgets (tab bars, toolbars):
- Only one item has tabindex="0"
- Other items have tabindex="-1"
- Arrow keys move tabindex="0"
- Tab moves to next widget

### Focus Restoration

When closing overlays:
- Return focus to trigger element
- If trigger is gone, focus first element in previous context
- If no previous context, focus main landmark
- Never leave focus nowhere

## Keyboard Accessibility Testing

### Manual Testing

1. **Unplug the mouse** — Use keyboard only
2. **Tab through interface** — Can you reach everything?
3. **Activate elements** — Can you use everything?
4. **Check focus visibility** — Is focus always visible?
5. **Check focus order** — Is order logical?
6. **Check escape** — Can you always escape?

### Automated Testing

Use tools to catch common issues:
- **axe-core** — Comprehensive keyboard testing
- **Lighthouse** — Keyboard accessibility audit
- **eslint-plugin-jsx-a11y** — React keyboard linting

### Screen Reader Testing

Test with screen readers:
- **NVDA** — Windows screen reader
- **VoiceOver** — macOS/iOS screen reader
- **JAWS** — Windows screen reader
- **TalkBack** — Android screen reader

## See Also

- [Accessibility Guidelines](accessibility-guidelines.md) — Universal access principles
- [Screen Readers](screen-readers.md) — Non-visual access
- [Button Specification](../components/button-specification.md) — Button keyboard behavior
- [Input Specification](../components/input-specification.md) — Input keyboard behavior
- [Modal Specification](../components/modal-specification.md) — Modal focus management
