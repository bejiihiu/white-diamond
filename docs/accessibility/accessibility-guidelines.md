# Accessibility Guidelines

## Why This Matters

Accessibility ensures interfaces work for everyone, regardless of ability. Without accessibility, interfaces exclude users who are blind, deaf, motor-impaired, or cognitively different. Accessibility is not a feature—it is a fundamental property of well-designed interfaces.

## The Principle of Universal Access

Every interface must work for:
- **Blind users** — Using screen readers
- **Low vision users** — Using magnification or high contrast
- **Deaf users** — Using captions or sign language
- **Motor-impaired users** — Using keyboard, switch, or voice
- **Cognitively different users** — Using simplified interfaces
- **Elderly users** — With age-related limitations
- **Situational limitations** — Bright sunlight, noisy environments

Accessibility is not about disability—it is about ability.

## WCAG Compliance

WHITE DIAMOND targets WCAG 2.1 Level AA compliance:

### Perceivable

Information must be presentable in ways users can perceive:
- **Text alternatives** — Alt text for images
- **Captions** — For audio and video
- **Adaptable** — Content can be presented in different ways
- **Distinguishable** — Easy to see and hear

### Operable

Interface components must be operable by all users:
- **Keyboard accessible** — All functionality via keyboard
- **Time limits** — Adjustable or removable
- **Seizure safe** — No flashing content
- **Navigable** — Easy to navigate and find content

### Understandable

Information and operation must be understandable:
- **Readable** — Text is readable and understandable
- **Predictable** — Interface behaves predictably
- **Input assistance** — Help users avoid and correct mistakes

### Robust

Content must be robust enough for assistive technology:
- **Compatible** — Works with current and future technologies
- **Valid** — Uses valid markup
- **Semantic** — Uses semantic HTML elements

## Accessibility Requirements

### Visual Accessibility

**Color Independence**
- Never rely solely on color to convey information
- Pair color with text, icons, or patterns
- Use multiple visual cues for status

**Contrast Ratios**
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum
- Focus indicators: 3:1 minimum

**Text Resizing**
- Text must be resizable to 200% without loss of content
- Use relative units (rem, em) not absolute (px)
- Layout must adapt to larger text

**Motion Sensitivity**
- Provide reduced motion option
- No content flashes more than 3 times per second
- Animations can be paused or stopped
- Respect prefers-reduced-motion

### Keyboard Accessibility

**Focus Management**
- All interactive elements are focusable
- Focus order is logical and intuitive
- Focus indicator is visible
- Focus is never trapped (except modals)

**Keyboard Operations**
- All actions available via keyboard
- Standard key bindings (Enter, Space, Escape, Tab)
- No keyboard shortcuts that conflict with assistive technology
- Skip navigation links available

**Focus Trapping**
- Modals trap focus within themselves
- Focus returns to trigger on modal close
- Dropdowns trap focus while open
- Menus trap focus while active

### Screen Reader Accessibility

**Semantic HTML**
- Use proper heading hierarchy (h1-h6)
- Use landmark elements (nav, main, aside, footer)
- Use list elements for lists
- Use table elements for tabular data

**ARIA Labels**
- Label all interactive elements
- Provide descriptions for complex elements
- Use aria-live for dynamic content
- Use aria-hidden for decorative elements

**Content Structure**
- Logical reading order
- Meaningful link text
- Descriptive form labels
- Clear error messages

### Motor Accessibility

**Touch Targets**
- Minimum 44x44 points for touch
- Adequate spacing between targets
- No hover-only interactions
- alternatives to precise gestures

**Timing**
- No time limits (or adjustable)
- No rapid interactions required
- No simultaneous multi-touch required
- Adequate hold times

**Input Methods**
- Support keyboard navigation
- Support voice control
- Support switch access
- Support eye tracking

### Cognitive Accessibility

**Clear Language**
- Simple, direct language
- Consistent terminology
- Clear instructions
- No jargon

**Consistent Layout**
- Predictable navigation
- Consistent element placement
- Clear visual hierarchy
- No unexpected changes

**Error Prevention**
- Confirm before destructive actions
- Validate input before submission
- Provide clear error messages
- Offer suggestions for correction

**Memory Support**
- Don't rely on memory
- Show current state
- Provide breadcrumbs
- Save user progress

## Accessibility Testing

### Automated Testing

Use automated tools to catch common issues:
- **axe** — Comprehensive accessibility testing
- **Lighthouse** — Performance and accessibility audit
- **WAVE** — Web accessibility evaluation
- **Pa11y** — Automated accessibility testing

### Manual Testing

Manual testing catches issues automated tools miss:
- **Keyboard only** — Navigate entire interface with keyboard
- **Screen reader** — Test with NVDA, VoiceOver, or JAWS
- **Zoom** — Test at 200% zoom
- **High contrast** — Test with high contrast mode
- **Reduced motion** — Test with reduced motion enabled

### User Testing

Test with users who have disabilities:
- **Blind users** — Screen reader testing
- **Low vision users** — Magnification testing
- **Motor-impaired users** — Keyboard and switch testing
- **Cognitive differences** — Simplified interface testing

## See Also

- [Keyboard Navigation](keyboard-navigation.md) — Non-pointer interaction
- [Screen Readers](screen-readers.md) — Non-visual access
- [Color System](../tokens/color-system.md) — Accessible color definitions
- [Animation Principles](../motion/animation-principles.md) — Motion that works for everyone
- [Prohibited Animations](../motion/prohibited-animations.md) — Motion to avoid
