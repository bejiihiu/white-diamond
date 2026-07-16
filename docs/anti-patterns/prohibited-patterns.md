# Prohibited Patterns

## Why This Document Exists

Prohibited patterns are architectural violations that break the spatial coherence of the interface. They are not "bad practices"—they are violations of the physical laws that govern digital space. When a prohibited pattern is used, the interface ceases to be a coherent spatial environment and becomes a collection of arbitrary visual effects.

Understanding prohibited patterns requires understanding the axioms defined in [Core Principles](../philosophy/core-principles.md). Every prohibition follows from these axioms. Violating a prohibited pattern is not a style choice—it is a violation of the spatial physics that makes interfaces predictable and controllable.

---

## Layout Prohibitions

### No Random Positioning

**Prohibited:** Placing elements without alignment or grid.

**Why this violates WHITE DIAMOND:** Random positioning violates Axiom I (Space Is Infinite). If space is infinite and objects have position, then every element must have defined coordinates within the spatial structure. Random positioning creates elements without defined coordinates—they float without purpose, creating visual chaos.

**The cognitive cost:** Users cannot predict where to look. Without alignment, the eye has no spatial reference points. The user must scan the entire viewport to find elements, increasing cognitive load and decreasing efficiency.

**What random positioning communicates:** "This interface has no spatial structure. Elements are placed arbitrarily. You cannot predict where things are."

**What it should communicate:** "Every element has a defined position in the spatial structure. You can predict where things are based on alignment and grid relationships."

**Correct pattern:** Align all elements to grid lines, edge alignments, or baselines. The alignment creates invisible spatial connections that users can read intuitively.

```
Prohibited:                    Correct:
┌─────────────────┐           ┌─────────────────┐
│   ┌───┐  ┌────┐ │           │ ┌───┐  ┌─────┐  │
│   │ A │    │ B  │ │           │ │ A │  │  B  │  │
│ └───┘      │    │ │           │ └───┘  └─────┘  │
│        ┌───┘    │ │           │ ┌─────┐ ┌─────┐ │
│        │ C      │ │           │ │  C  │ │  D  │ │
│        └────────┘ │           │ └─────┘ └─────┘ │
└─────────────────┘           └─────────────────┘
Random positions               Grid-aligned positions
```

---

### No Overlapping Content

**Prohibited:** Content overlapping other content without clear hierarchy.

**Why this violates WHITE DIAMOND:** Overlapping violates Axiom II (Objects Have Mass and Boundaries). If objects have boundaries, those boundaries cannot overlap without explicit spatial layering. Overlapping content obscures information and destroys the sense of discrete construction.

**The cognitive cost:** Users cannot read obscured content. Overlapping elements create ambiguity about which element is in front and which is behind. The user must mentally separate the layers, increasing cognitive load.

**What overlapping communicates:** "These elements occupy the same spatial position. Their boundaries are undefined. You cannot determine which is in front."

**What it should communicate:** "These elements occupy distinct spatial positions. Their boundaries are clear. The spatial relationship is defined through layering."

**Correct pattern:** Use explicit z-index layering or separate content spatially. When elements must overlap (modals, tooltips), establish clear spatial layering through shadows, opacity, and boundary contrast.

```
Prohibited:                    Correct:
┌─────────────────┐           ┌─────────────────┐
│ ┌─────────────┐ │           │                 │
│ │ Content A   │ │           │ ┌─────────────┐ │
│ │   ┌─────────┤ │           │ │ Content A   │ │
│ │   │Content B│ │           │ └─────────────┘ │
│ │   │         │ │           │                 │
│ └───┴─────────┘ │           │ ┌─────────────┐ │
└─────────────────┘           │ │ Content B   │ │
Overlapping content           │ └─────────────┘ │
                              └─────────────────┘
                              Spatially separated
```

---

### No Inconsistent Spacing

**Prohibited:** Using different spacing values for similar elements.

**Why this violates WHITE DIAMOND:** Inconsistent spacing violates Axiom II (Objects Have Mass and Boundaries). Spacing is the architectural gap between boundaries—it communicates the strength of the relationship between elements. Inconsistent spacing creates inconsistent relationships, breaking the spatial language.

**The cognitive cost:** Users cannot read spatial relationships. When similar elements have different spacing, the user cannot determine which elements are related and which are not. The spatial language becomes unreliable.

**What inconsistent spacing communicates:** "The relationships between these elements are arbitrary. The spacing has no meaning. You cannot determine which elements are related."

**What it should communicate:** "The relationships between these elements are defined through spacing. Close means related. Far means unrelated. The spacing is consistent and meaningful."

**Correct pattern:** Use the spacing system consistently. Same-type relationships must have the same spacing throughout the interface.

---

### No Centered Long Text

**Prohibited:** Center-aligning long paragraphs of text.

**Why this violates WHITE DIAMOND:** Centered text violates the natural reading flow defined in [Composition Rules](../layout/composition-rules.md). Each line of centered text starts at a different horizontal position, breaking the left alignment that the eye uses as a reference point.

**The cognitive cost:** Users must re-find the left edge for each line. The eye scans left-to-right, and the left edge is the spatial anchor. Centered text removes this anchor, forcing the eye to search for each new line.

**What centered text communicates:** "Each line is independent. There is no spatial anchor. You must find each line's starting position individually."

**What it should communicate:** "These lines form a coherent block. The left edge is your anchor. Read from left to right, line by line."

**Correct pattern:** Left-align text (or right-align in RTL languages). Center only short text (headings, captions, single lines).

---

## Typography Prohibitions

### No Small Touch Text

**Prohibited:** Text smaller than 12px for interactive elements.

**Why this violates WHITE DIAMOND:** Small text violates Axiom II (Objects Have Mass and Boundaries). Interactive elements must have boundaries large enough to be perceivable and tappable. Text smaller than 12px creates boundaries that are too small to be reliably perceived, especially on touch devices.

**The cognitive cost:** Users cannot read small text. Small text reduces legibility, forcing users to strain or zoom. On touch devices, small text creates tap targets that are too small for human fingers.

**What small text communicates:** "This element is not important. It is secondary. You can ignore it."

**What it should communicate:** "This element is important. It is readable. You can interact with it reliably."

**Correct pattern:** Minimum 14px for body text, 12px for captions. Interactive elements must have tap targets of at least 44x44px.

---

### No Low Contrast Text

**Prohibited:** Text with contrast ratio below 4.5:1.

**Why this violates WHITE DIAMOND:** Low contrast text violates Axiom II (Objects Have Boundaries). Text that cannot be read does not have effective boundaries—it is invisible to users with visual impairments. Low contrast text exists in the interface but cannot be perceived, destroying the spatial reality.

**The cognitive cost:** Users cannot read low-contrast text. Low contrast reduces legibility for all users and makes text invisible for users with visual impairments. The interface becomes partially inaccessible.

**What low contrast communicates:** "This text is not important. It is decorative. You can ignore it."

**What it should communicate:** "This text is important. It is readable. You can consume this information."

**Correct pattern:** Ensure 4.5:1 contrast for normal text, 3:1 for large text. Every text element must be readable by all users.

---

### No ALL CAPS Body Text

**Prohibited:** Using ALL CAPS for body text or long passages.

**Why this violates WHITE DIAMOND:** ALL CAPS text disrupts the typographic rhythm defined in [Text Hierarchy](../typography/text-hierarchy.md). Capital letters have uniform height, removing the ascenders and descenders that the eye uses to recognize word shapes. This disrupts the reading flow and increases cognitive load.

**The cognitive cost:** ALL CAPS is harder to read. The uniform letter height removes word-shape cues, forcing the eye to read letter-by-letter rather than word-by-word. ALL CAPS also feels like shouting, creating an aggressive tone.

**What ALL CAPS communicates:** "This text is loud. It is shouting. It is aggressive."

**What it should communicate:** "This text is important. It is readable. It is professional."

**Correct pattern:** Use sentence case. ALL CAPS only for short labels (3-5 words maximum) where the reduction in readability is acceptable for the sake of emphasis.

---

### No Centered Long Headings

**Prohibited:** Center-aligning headings that wrap to multiple lines.

**Why this violates WHITE DIAMOND:** Multi-line centered headings violate the left-alignment rule. Each line starts at a different position, breaking the spatial anchor that the eye uses for scanning.

**The cognitive cost:** Users cannot scan multi-line centered headings efficiently. The uneven left edges force the eye to search for each new line, increasing cognitive load.

**What centered multi-line headings communicate:** "Each line is independent. There is no spatial structure."

**What it should communicate:** "These lines form a coherent heading. The left edge is your anchor."

**Correct pattern:** Left-align headings. Center only single-line headings where the heading is short enough to fit on one line.

---

## Color Prohibitions

### No Color-Only Communication

**Prohibited:** Conveying information only through color.

**Why this violates WHITE DIAMOND:** Color-only communication violates the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Color-blind users cannot perceive color differences, making the information invisible to them.

**The cognitive cost:** Color-blind users cannot distinguish color-coded information. The interface becomes partially inaccessible—some users can read the information, others cannot.

**What color-only communicates:** "This information is only available to users who can perceive color. If you cannot perceive color, you cannot read this information."

**What it should communicate:** "This information is available to all users, regardless of color perception."

**Correct pattern:** Pair color with text, icons, or patterns. Every piece of information communicated through color must also be communicated through a non-color cue.

---

### No Bright Saturated Backgrounds

**Prohibited:** Using highly saturated colors for large background areas.

**Why this violates WHITE DIAMOND:** Saturated backgrounds violate Axiom VI (Borders Are Everything). Saturated backgrounds create visual noise that obscures borders and boundaries. The eye is drawn to the saturated color rather than the structural boundaries, destroying spatial understanding.

**The cognitive cost:** Saturated backgrounds cause eye strain. The intense color creates visual fatigue, making the interface uncomfortable to use for extended periods. The saturation also reduces the readability of content placed on the background.

**What saturated backgrounds communicate:** "This area is loud. It is demanding attention. It is competing with your content."

**What it should communicate:** "This area is a surface. It supports your content. It does not compete with your content."

**Correct pattern:** Use desaturated or neutral backgrounds. Save saturation for accents—small areas that need emphasis, not large areas that need support.

---

### No Inconsistent Status Colors

**Prohibited:** Using different colors for the same status.

**Why this violates WHITE DIAMOND:** Inconsistent status colors violate Axiom VIII (Absolute Control Through Predictability). Users learn color meanings—green means success, red means error. Changing these meanings breaks the learning and destroys predictability.

**The cognitive cost:** Users must re-learn color meanings for each context. The inconsistency breaks spatial memory—users cannot predict what a color means without checking each instance.

**What inconsistent status colors communicate:** "The meaning of this color depends on context. You cannot predict its meaning. You must check each instance."

**What it should communicate:** "The meaning of this color is consistent. You can predict its meaning everywhere."

**Correct pattern:** Use consistent status colors throughout. Green always means success. Red always means error. Blue always means information. Yellow always means warning. The consistency creates spatial memory.

---

## Motion Prohibitions

### No Auto-Playing Animations

**Prohibited:** Animations that play automatically without user trigger.

**Why this violates WHITE DIAMOND:** Auto-playing animations violate Axiom VII (Animation Serves Physics). Animation must serve spatial physics—it must reveal spatial relationships. Auto-playing animations exist for decoration or attention, not for spatial communication.

**The cognitive cost:** Auto-playing animations distract users from their task. The motion draws attention away from the content, creating visual noise that competes with the user's focus.

**What auto-playing animations communicate:** "This interface is trying to get your attention. It is competing with your task. It is not focused on your needs."

**What it should communicate:** "This interface responds to your actions. Motion demonstrates spatial relationships. You control the motion."

**Correct pattern:** Animate only in response to user actions. Every animation must be triggered by a user interaction—hover, click, scroll, or keyboard input.

---

### No Flashing Content

**Prohibited:** Content that flashes more than 3 times per second.

**Why this violates WHITE DIAMOND:** Flashing content violates the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Flashing content can trigger seizures in users with photosensitive epilepsy, creating a medical emergency.

**The cognitive cost:** Flashing content is visually overwhelming. It creates discomfort for all users and medical danger for users with photosensitive conditions.

**What flashing communicates:** "This interface is dangerous. It can cause seizures. It is not safe to use."

**What it should communicate:** "This interface is safe. It respects your physiological needs. It does not create medical danger."

**Correct pattern:** Use smooth transitions. Never exceed 3 flashes per second. Prefer subtle transitions over dramatic flashing.

---

### No Infinite Animations

**Prohibited:** Animations that loop indefinitely (except loading indicators).

**Why this violates WHITE DIAMOND:** Infinite animations violate Axiom VII (Animation Serves Physics). Animation must demonstrate spatial relationships—infinite animations demonstrate nothing, they merely distract. The only exception is loading indicators, which communicate "the system is processing" (a spatial state, not a decorative effect).

**The cognitive cost:** Infinite animations distract users from their task. The perpetual motion creates visual noise that competes with the user's focus.

**What infinite animations communicate:** "This interface is always moving. It never stops. It is always demanding attention."

**What it should communicate:** "This interface responds to your actions. Motion has a beginning and an end. You control when motion happens."

**Correct pattern:** Use finite animations. Every animation must have a clear beginning and end. Allow users to pause animations when necessary.

---

### No Unexpected Motion

**Prohibited:** Elements moving in unexpected directions or speeds.

**Why this violates WHITE DIAMOND:** Unexpected motion violates Axiom VIII (Absolute Control Through Predictability). Users develop spatial expectations based on the interface's physical laws. Unexpected motion breaks these expectations, creating anxiety and confusion.

**The cognitive cost:** Unexpected motion disorients users. The motion does not match their spatial expectations, creating confusion about the interface's physical reality.

**What unexpected motion communicates:** "The physics of this interface are unpredictable. You cannot trust the spatial relationships. Motion does not follow consistent rules."

**What it should communicate:** "The physics of this interface are consistent. You can trust the spatial relationships. Motion follows predictable rules."

**Correct pattern:** Motion should match user expectations based on context. Elements should move in directions that are consistent with their spatial relationships. Speed should match the scale of the change.

---

## Interaction Prohibitions

### No Hover-Only Interactions

**Prohibited:** Making functionality available only on hover.

**Why this violates WHITE DIAMOND:** Hover-only interactions violate the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Touch devices have no hover state. Keyboard users have no hover state. Hover-only interactions make functionality inaccessible to these users.

**The cognitive cost:** Users on touch devices cannot access hover-only functionality. The interface becomes partially inaccessible—some users can access all features, others cannot.

**What hover-only communicates:** "This functionality is only available to users with a mouse. If you use a different input device, you cannot access this feature."

**What it should communicate:** "This functionality is available to all users, regardless of input device."

**Correct pattern:** Provide alternative ways to access all functionality. Hover can enhance the experience, but the core functionality must be accessible without hover.

---

### No Right-Click Prevention

**Prohibited:** Preventing right-click or context menus.

**Why this violates WHITE DIAMOND:** Right-click prevention violates Axiom VIII (Absolute Control Through Predictability). Users expect right-click to work—it is a standard behavioral contract. Preventing it breaks the predictability that creates control.

**The cognitive cost:** Users who rely on right-click cannot access their expected functionality. The interface breaks their mental model, creating frustration.

**What right-click prevention communicates:** "You cannot use your expected interactions. This interface controls you, not the other way around."

**What it should communicate:** "Your expected interactions work. You have control over this interface."

**Correct pattern:** Allow right-click. Provide custom context menus if needed, but do not prevent the default context menu.

---

### No Scroll Hijacking

**Prohibited:** Overriding browser scroll behavior.

**Why this violates WHITE DIAMOND:** Scroll hijacking violates Axiom VIII (Absolute Control Through Predictability). Scroll is a fundamental behavioral contract—users expect it to work in specific ways. Overriding scroll breaks the predictability that creates control.

**The cognitive cost:** Users lose control of scrolling. The interface behaves differently from other interfaces, breaking the mental model that creates predictability.

**What scroll hijacking communicates:** "This interface does not follow standard scroll behavior. You cannot use your expected interactions. You must learn new patterns."

**What it should communicate:** "This interface follows standard scroll behavior. Your expected interactions work. You have control."

**Correct pattern:** Use native scroll. Provide scroll-snap if needed, but do not override the fundamental scroll behavior.

---

### No Keyboard Traps

**Prohibited:** Making focus stuck in an element (except modals).

**Why this violates WHITE DIAMOND:** Keyboard traps violate the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Keyboard users must be able to navigate freely—trapping focus prevents navigation and makes the interface unusable.

**The cognitive cost:** Keyboard users cannot navigate the interface. The trap prevents them from moving to other elements, making the interface inaccessible.

**What keyboard traps communicate:** "You are stuck. You cannot navigate. This interface does not support keyboard interaction."

**What it should communicate:** "You can navigate freely. Keyboard interaction is supported. You have control."

**Correct pattern:** Always allow users to escape with Tab or Escape. Modals can trap focus temporarily, but the user must always be able to dismiss the modal and return to free navigation.

---

## Content Prohibitions

### No Placeholder-Only Labels

**Prohibited:** Using placeholder text as the only label for inputs.

**Why this violates WHITE DIAMOND:** Placeholder-only labels violate Axiom II (Objects Have Boundaries). When the placeholder disappears on focus, the input loses its identity—the user cannot determine what the input is for. The input's boundary becomes ambiguous.

**The cognitive cost:** Users forget what to enter after typing. The placeholder disappears, leaving no label. The user must remember the input's purpose from context, increasing cognitive load.

**What placeholder-only labels communicate:** "This input's purpose is temporary. It will disappear. You must remember what it is for."

**What it should communicate:** "This input's purpose is permanent. The label is always visible. You can always identify what this input is for."

**Correct pattern:** Always use visible labels above inputs. Placeholders can supplement labels with examples, but labels must never disappear.

---

### No Jargon Without Explanation

**Prohibited:** Using technical jargon without defining it.

**Why this violates WHITE DIAMOND:** Jargon without explanation violates the accessibility requirements defined in [Accessibility Guidelines](../accessibility/accessibility-guidelines.md). Not all users understand technical terms—jargon creates barriers to comprehension.

**The cognitive cost:** Users who do not understand the jargon cannot comprehend the content. The interface becomes partially inaccessible—some users can read the information, others cannot.

**What jargon communicates:** "This interface is for experts only. If you do not understand this term, you are not the target audience."

**What it should communicate:** "This interface is for everyone. All terms are explained. You can understand this content regardless of your technical background."

**Correct pattern:** Use plain language. Define jargon if necessary. Prioritize clarity over technical precision.

---

### No Walls of Text

**Prohibited:** Long paragraphs without headings, lists, or breaks.

**Why this violates WHITE DIAMOND:** Walls of text violate the typographic hierarchy defined in [Text Hierarchy](../typography/text-hierarchy.md). Without headings, lists, or breaks, the text becomes a monolithic block—users cannot scan it, cannot find specific information, and cannot determine the structure.

**The cognitive cost:** Walls of text are intimidating. Users see a large block of text and feel overwhelmed. The lack of structure makes scanning impossible—users must read every word to find what they need.

**What walls of text communicate:** "This information is dense. It is difficult to scan. You must read everything to find what you need."

**What it should communicate:** "This information is structured. It is scannable. You can find what you need quickly."

**Correct pattern:** Use headings, lists, and short paragraphs. Create a typographic hierarchy that guides the eye through the content. Break text into digestible chunks.

---

### No Hidden Navigation

**Prohibited:** Making navigation invisible until hovered or activated.

**Why this violates WHITE DIAMOND:** Hidden navigation violates Axiom VI (Borders Are Everything). Navigation must have visible boundaries—users cannot navigate what they cannot see. Hidden navigation removes the boundaries that define the navigation's existence.

**The cognitive cost:** Users cannot find navigation. The navigation is invisible until activated, creating confusion about where to go and what options are available.

**What hidden navigation communicates:** "Navigation is hidden. You must discover it. You cannot see your options until you activate them."

**What it should communicate:** "Navigation is visible. You can see your options. You can navigate freely."

**Correct pattern:** Navigation should be visible or easily discoverable. At minimum, the navigation trigger (hamburger menu, tab bar) must be visible. The navigation options should be visible when the navigation is activated.

---

## See Also

- [Common Mistakes](common-mistakes.md) — Frequent errors
- [Animation Principles](../motion/animation-principles.md) — How motion should work
- [Prohibited Animations](../motion/prohibited-animations.md) — What motion should never do
- [Accessibility Guidelines](../accessibility/accessibility-guidelines.md) — Universal access
- [Core Principles](../philosophy/core-principles.md) — The axioms of digital space
- [Object Structure](../spatial-hierarchy/object-structure.md) — The three-layer anatomy
