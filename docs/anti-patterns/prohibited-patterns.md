# Prohibited Patterns

## Why This Matters

Knowing what not to do is as important as knowing what to do. Prohibited patterns are design decisions that consistently fail, confuse users, or violate WHITE DIAMOND principles.

## Layout Prohibitions

### No Random Positioning

**Prohibited:** Placing elements without alignment or grid.

**Why:** Random positioning creates visual chaos. Users cannot predict where to look.

**Correct:** Align all elements to grid, edges, or baselines.

### No Overlapping Content

**Prohibited:** Content overlapping other content without clear hierarchy.

**Why:** Overlapping content obscures information and confuses users.

**Correct:** Use layering with clear z-index, or separate content spatially.

### No Inconsistent Spacing

**Prohibited:** Using different spacing values for similar elements.

**Why:** Inconsistent spacing breaks visual rhythm and creates noise.

**Correct:** Use the spacing system consistently throughout.

### No Centered Long Text

**Prohibited:** Center-aligning long paragraphs of text.

**Why:** Centered text is harder to read—each line starts at a different position.

**Correct:** Left-align text (or right-align in RTL). Center only short text.

## Typography Prohibitions

### No Small Touch Text

**Prohibited:** Text smaller than 12px for interactive elements.

**Why:** Small text is hard to read and tap on touch devices.

**Correct:** Minimum 14px for body text, 12px for captions.

### No Low Contrast Text

**Prohibited:** Text with contrast ratio below 4.5:1.

**Why:** Low contrast text is unreadable for many users.

**Correct:** Ensure 4.5:1 contrast for normal text, 3:1 for large text.

### No ALL CAPS Body Text

**Prohibited:** Using ALL CAPS for body text or long passages.

**Why:** ALL CAPS is harder to read and feels like shouting.

**Correct:** Use sentence case. ALL CAPS only for short labels.

### No Centered Long Headings

**Prohibited:** Center-aligning headings that wrap to multiple lines.

**Why:** Multi-line centered text has uneven left edges, making scanning difficult.

**Correct:** Left-align headings. Center only single-line headings.

## Color Prohibitions

### No Color-Only Communication

**Prohibited:** Conveying information only through color.

**Why:** Color-blind users cannot perceive color differences.

**Correct:** Pair color with text, icons, or patterns.

### No Bright Saturated Backgrounds

**Prohibited:** Using highly saturated colors for large background areas.

**Why:** Saturated backgrounds cause eye strain and reduce readability.

**Correct:** Use desaturated or neutral backgrounds. Save saturation for accents.

### No Inconsistent Status Colors

**Prohibited:** Using different colors for the same status.

**Why:** Users learn color meanings—changing them breaks learning.

**Correct:** Use consistent status colors throughout (green=success, red=error).

## Motion Prohibitions

### No Auto-Playing Animations

**Prohibited:** Animations that play automatically without user trigger.

**Why:** Auto-playing animations distract and can cause vestibular issues.

**Correct:** Animate only in response to user actions.

### No Flashing Content

**Prohibited:** Content that flashes more than 3 times per second.

**Why:** Flashing content can trigger seizures in susceptible users.

**Correct:** Use smooth transitions. Never exceed 3 flashes per second.

### No Infinite Animations

**Prohibited:** Animations that loop indefinitely (except loading indicators).

**Why:** Infinite animations distract and消耗 resources.

**Correct:** Use finite animations. Allow users to pause.

### No Unexpected Motion

**Prohibited:** Elements moving in unexpected directions or speeds.

**Why:** Unexpected motion disorients and confuses users.

**Correct:** Motion should match user expectations based on context.

## Interaction Prohibitions

### No Hover-Only Interactions

**Prohibited:** Making functionality available only on hover.

**Why:** Touch devices have no hover. Keyboard users have no hover.

**Correct:** Provide alternative ways to access all functionality.

### No Right-Click Prevention

**Prohibited:** Preventing right-click or context menus.

**Why:** Users expect right-click to work. Preventing it frustrates power users.

**Correct:** Allow right-click. Provide custom context menus if needed.

### No Scroll Hijacking

**Prohibited:** Overriding browser scroll behavior.

**Why:** Scroll hijacking breaks user expectations and accessibility.

**Correct:** Use native scroll. Provide scroll-snap if needed.

### No Keyboard Traps

**Prohibited:** Making focus stuck in an element (except modals).

**Why:** Keyboard traps prevent users from navigating the interface.

**Correct:** Always allow users to escape with Tab or Escape.

## Content Prohibitions

### No Placeholder-Only Labels

**Prohibited:** Using placeholder text as the only label for inputs.

**Why:** Placeholders disappear when users type, leaving no label.

**Correct:** Always use visible labels above inputs.

### No Jargon Without Explanation

**Prohibited:** Using technical jargon without defining it.

**Why:** Not all users understand technical terms.

**Correct:** Use plain language. Define jargon if necessary.

### No Walls of Text

**Prohibited:** Long paragraphs without headings, lists, or breaks.

**Why:** Walls of text are intimidating and hard to scan.

**Correct:** Use headings, lists, and short paragraphs.

### No Hidden Navigation

**Prohibited:** Making navigation invisible until hovered or activated.

**Why:** Users cannot navigate what they cannot see.

**Correct:** Navigation should be visible or easily discoverable.

## See Also

- [Common Mistakes](common-mistakes.md) — Frequent errors
- [Animation Principles](../motion/animation-principles.md) — How motion should work
- [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [User Psychology](../psychology/user-psychology.md) — How users think and feel
