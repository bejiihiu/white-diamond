# Movement Physics

## Why This Matters

Movement physics in WHITE DIAMOND is not about mathematical easing—it's about architectural reality. Every movement demonstrates the physical properties of the interface's spatial environment: the mass of objects, the density of space, the forces acting on objects, and the continuity of motion. Understanding these physics is essential for creating animations that feel natural and predictable.

When movement follows physical laws, users develop spatial memory—they can predict how objects will behave based on their physical properties. A heavy object will move slowly, a light object will move quickly, an object under spring tension will bounce. This predictability creates a sense of control and stability.

## Physical Properties

### Mass

Objects have perceived mass that affects how they move. Mass is not just a visual property—it's a behavioral property that affects acceleration, deceleration, momentum, and impact.

**Mass affects:**

- **Acceleration** — How quickly objects reach full speed. Heavy objects accelerate slowly—they resist changes in motion. Light objects accelerate quickly—they respond easily to force. This demonstrates that objects have inertia and exist in a physical space.

- **Deceleration** — How quickly objects come to rest. Heavy objects decelerate slowly—they continue moving after force ceases. Light objects decelerate quickly—they stop quickly when force ceases. This demonstrates that objects have momentum and exist in a space with friction.

- **Momentum** — How much objects continue after force stops. Heavy objects have high momentum—they continue moving for a long time after force ceases. Light objects have low momentum—they stop quickly when force ceases. This demonstrates that objects have mass and exist in a physical space.

- **Impact** — How objects collide with boundaries. Heavy objects impact forcefully—they bounce significantly or stop abruptly. Light objects impact gently—they barely bounce or stop smoothly. This demonstrates that objects have mass and exist in a space with physical boundaries.

**Architectural reasoning:** In physical architecture, mass matters. A heavy stone door moves differently than a light wooden door. WHITE DIAMOND follows the same principle: objects move according to their perceived mass.

**Mass categories:**

- **Light objects (50-100ms)** — UI elements like buttons, icons, toggles. These objects move quickly, change direction easily, and stop quickly. They demonstrate low mass and high responsiveness.

- **Medium objects (100-200ms)** — Content elements like cards, panels, modals. These objects move moderately, change direction moderately, and stop moderately. They demonstrate medium mass and moderate responsiveness.

- **Heavy objects (200-400ms)** — Structural elements like pages, sections, layouts. These objects move slowly, change direction slowly, and stop slowly. They demonstrate high mass and low responsiveness.

### Friction

Friction slows objects over time. Friction is not a mathematical curve—it's a physical force that demonstrates the interface's spatial properties.

**Friction affects:**

- **Stopping distance** — How far objects travel after force ceases. High friction creates short stopping distances—objects stop quickly. Low friction creates long stopping distances—objects slide further. This demonstrates that objects exist in a space with physical properties.

- **Deceleration curve** — How objects slow down. High friction creates rapid deceleration—objects slow down quickly. Low friction creates gradual deceleration—objects slow down slowly. This demonstrates that objects exist in a space with physical properties.

- **Energy dissipation** — How objects lose energy. High friction dissipates energy quickly—objects lose momentum quickly. Low friction dissipates energy slowly—objects maintain momentum longer. This demonstrates that objects exist in a space with physical properties.

**Friction categories:**

- **High friction (0.8-1.0)** — Objects on rough surfaces. These objects stop quickly—they demonstrate high resistance to motion. Use for: elements that should feel solid and grounded.

- **Medium friction (0.5-0.8)** — Objects on normal surfaces. These objects stop moderately—they demonstrate moderate resistance to motion. Use for: most UI elements.

- **Low friction (0.2-0.5)** — Objects on smooth surfaces. These objects slide further—they demonstrate low resistance to motion. Use for: elements that should feel light and floating.

- **No friction (0.0)** — Objects on frictionless surfaces. These objects never stop—they demonstrate no resistance to motion. Not useful for UI—objects must eventually stop.

### Elasticity

Objects bounce when they hit boundaries. Elasticity demonstrates that objects have internal structure and can deform under force.

**Elasticity affects:**

- **Bounce height** — How high objects bounce after impact. High elasticity creates high bounce—objects rebound significantly. Low elasticity creates low bounce—objects barely rebound. This demonstrates that objects have internal structure.

- **Settling time** — How long objects take to come to rest after impact. High elasticity creates long settling times—objects bounce multiple times. Low elasticity creates short settling times—objects bounce once or not at all. This demonstrates that objects have internal structure.

- **Energy preservation** — How much energy objects preserve after impact. High elasticity preserves energy—objects bounce back to near their original height. Low elasticity dissipates energy—objects bounce back to a lower height. This demonstrates that objects have internal structure.

**Elasticity categories:**

- **High elasticity (0.8-1.0)** — Rubber-like objects. These objects bounce significantly—they demonstrate high internal energy. Use for: playful interactions, emphasis, drag-and-drop.

- **Medium elasticity (0.5-0.8)** — Normal objects. These objects bounce moderately—they demonstrate moderate internal energy. Use for: most UI interactions.

- **Low elasticity (0.2-5)** — Rigid objects. These objects barely bounce—they demonstrate low internal energy. Use for: serious interactions, subtle transitions.

- **No elasticity (0.0)** — Inelastic objects. These objects don't bounce—they demonstrate no internal energy. Use for: objects that should stop dead on impact.

### Gravity

Objects fall when unsupported. Gravity demonstrates the interface's directional reality and spatial orientation.

**Gravity affects:**

- **Fall speed** — How fast objects fall. Strong gravity creates fast falls—objects accelerate quickly. Weak gravity creates slow falls—objects accelerate slowly. This demonstrates the interface's gravitational constant.

- **Fall direction** — Which direction objects fall. Gravity always pulls downward—this demonstrates the interface's vertical orientation and spatial consistency.

- **Weight perception** — How heavy objects feel. Strong gravity makes objects feel heavy—they fall quickly and impact forcefully. Weak gravity makes objects feel light—they fall slowly and impact gently. This demonstrates the interface's gravitational constant.

**Gravity categories:**

- **Strong gravity (980px/s²)** — Normal Earth gravity. Objects fall quickly—they demonstrate normal weight. Use for: most UI elements.

- **Weak gravity (200-400px/s²)** — Low gravity. Objects fall slowly—they demonstrate light weight. Use for: floating elements, subtle transitions.

- **No gravity (0px/s²)** — Zero gravity. Objects float—they demonstrate weightlessness. Use for: elements that should feel detached from the spatial hierarchy.

## Movement Laws

### Law 1: Ease-In-Out

Objects should accelerate and decelerate smoothly. This law demonstrates that objects have inertia and exist in a physical space.

- **Starting** — Objects don't jump to full speed instantly. They accelerate gradually, demonstrating that they have mass and resist changes in motion. This acceleration follows an ease-in curve.

- **Stopping** — Objects don't stop instantly. They decelerate gradually, demonstrating that they have momentum and continue moving after force ceases. This deceleration follows an ease-out curve.

- **Turning** — Objects don't change direction instantly. They decelerate, change direction, and accelerate, demonstrating that they have momentum and exist in a physical space.

**Architectural reasoning:** In physical architecture, objects don't teleport—they move through continuous space. WHITE DIAMOND follows the same principle: objects accelerate and decelerate smoothly, demonstrating continuous motion through physical space.

### Law 2: Distance-Speed Proportion

Objects traveling longer distances should take more time. This law demonstrates that objects move at consistent speeds through physical space.

- **Short distance** — Quick movement. Objects moving short distances take less time—they demonstrate that they're moving at a consistent speed through physical space.

- **Medium distance** — Moderate movement. Objects moving medium distances take moderate time—they demonstrate that they're moving at a consistent speed through physical space.

- **Long distance** — Slower movement. Objects moving long distances take more time—they demonstrate that they're moving at a consistent speed through physical space.

**Architectural reasoning:** In physical architecture, distance matters. A door across the room takes longer to reach than a door nearby. WHITE DIAMOND follows the same principle: longer distances take more time, demonstrating consistent speed through physical space.

**Duration specifications:**

- **Short distance (0-100px)** — 100-200ms
- **Medium distance (100-300px)** — 200-400ms
- **Long distance (300-600px)** — 400-600ms
- **Very long distance (600px+)** — 600-800ms

### Law 3: Size-Speed Proportion

Larger objects should move more slowly. This law demonstrates that larger objects have more mass and resist changes in motion more strongly.

- **Small elements** — Quick, nimble movement. Small objects move quickly—they demonstrate low mass and high responsiveness.

- **Medium elements** — Moderate movement. Medium objects move moderately—they demonstrate medium mass and moderate responsiveness.

- **Large elements** — Slower, more deliberate movement. Large objects move slowly—they demonstrate high mass and low responsiveness.

**Architectural reasoning:** In physical architecture, size matters. A small door opens quickly; a large gate opens slowly. WHITE DIAMOND follows the same principle: larger objects move more slowly, demonstrating their increased mass.

**Size categories:**

- **Small (0-50px)** — 100-150ms
- **Medium (50-200px)** — 150-250ms
- **Large (200-500px)** — 250-400ms
- **Very large (500px+)** — 400-600ms

### Law 4: Importance-Speed Proportion

More important objects should move more deliberately. This law demonstrates that important objects have more mass and require more consideration.

- **Primary actions** — Moderate speed, high prominence. Important actions move deliberately—they demonstrate that they require consideration and attention.

- **Secondary actions** — Faster speed, lower prominence. Less important actions move quickly—they demonstrate that they're less critical and require less consideration.

- **Tertiary actions** — Fastest speed, lowest prominence. Least important actions move fastest—they demonstrate that they're trivial and require minimal consideration.

**Architectural reasoning:** In physical architecture, importance matters. The main entrance opens slowly and deliberately; side doors open quickly. WHITE DIAMOND follows the same principle: important actions move more deliberately, demonstrating their significance.

**Importance categories:**

- **Primary (most important)** — 200-400ms
- **Secondary (moderately important)** — 150-250ms
- **Tertiary (least important)** — 100-150ms

### Law 5: Spatial Continuity

Objects should move through continuous paths. This law demonstrates that objects exist in continuous space and cannot teleport.

- **No teleportation** — Objects don't jump from point A to point B. They move through continuous paths, demonstrating that they exist in physical space.

- **No invisibility** — Objects don't disappear and reappear elsewhere. They move through continuous paths, demonstrating that they exist in physical space.

- **No duplication** — Objects don't split into multiple copies. They maintain their identity, demonstrating that they are unique architectural constructions.

**Architectural reasoning:** In physical architecture, objects exist in continuous space. A person walking from room A to room B doesn't teleport—they walk through the doorway. WHITE DIAMOND follows the same principle: objects move through continuous paths, demonstrating spatial continuity.

## Movement Patterns

### The Slide

Objects move horizontally or vertically. Sliding demonstrates that objects exist in continuous space and move through that space.

- **Horizontal slide** — For navigation (left/right movement). Horizontal slides demonstrate lateral spatial relationships—objects moving from one location to another horizontally.

- **Vertical slide** — For scrolling (up/down movement). Vertical slides demonstrate vertical spatial relationships—objects moving from one location to another vertically.

- **Diagonal slide** — For emphasis (rare, use sparingly). Diagonal slides demonstrate diagonal spatial relationships—objects moving from one location to another diagonally.

**Slide rules:**

- **Maintain direction consistency** — If navigation moves left-to-right, all navigation should move left-to-right. Directional inconsistency breaks spatial orientation.

- **Match distance to duration** — Longer slides take more time. This demonstrates consistent speed through physical space.

- **Use appropriate easing** — Slides should follow physical laws—accelerate, decelerate, and respond to friction. This demonstrates that objects have mass and exist in physical space.

**Architectural reasoning:** In physical architecture, sliding is the primary form of movement. Doors slide, windows slide, panels slide. WHITE DIAMOND follows the same principle: sliding demonstrates continuous motion through physical space.

### The Scale

Objects change size. Scaling demonstrates that objects have mass and can change their physical dimensions.

- **Grow** — For emphasis, opening, activation. Growing demonstrates that objects are approaching from a distance—they appear small because they're far away, then grow as they approach.

- **Shrink** — For de-emphasis, closing, deactivation. Shrinking demonstrates that objects are moving away into the distance—they appear smaller as they move away.

- **Pulse** — For attention, loading, alive feeling. Pulsing demonstrates that objects are under constant force—they're being pulled and released repeatedly.

**Scale rules:**

- **Scale from center by default** — Objects scale from their center, demonstrating that they have a fixed center of mass.

- **Maintain aspect ratio** — Objects maintain their proportions when scaling, demonstrating that they have fixed physical dimensions.

- **Use spring easing for playful feel** — Spring easing demonstrates that objects are under spring tension—they overshoot and bounce back.

**Architectural reasoning:** In physical architecture, scaling is rare—objects don't typically change size. WHITE DIAMOND uses scaling sparingly to demonstrate specific spatial relationships, not as a general animation pattern.

### The Fade

Objects change opacity. Fading demonstrates that objects become visible as they enter the viewport and less visible as they leave.

- **Fade in** — For appearance, emphasis. Fading in demonstrates that objects are becoming visible—they don't materialize from nothing, they become visible as they enter the viewport.

- **Fade out** — For disappearance, de-emphasis. Fading out demonstrates that objects are becoming less visible—they don't dematerialize into nothing, they become less visible as they leave the viewport.

- **Fade transition** — For content change. Fading transition demonstrates that content is changing while maintaining spatial continuity—the object remains in place while its content changes.

**Fade rules:**

- **Fade in: ease-out** — Objects decelerate as they become visible, demonstrating that they're arriving and stopping.

- **Fade out: ease-in** — Objects accelerate as they become less visible, demonstrating that they're departing and starting.

- **Don't fade interactive elements too much** — Interactive elements should remain visible enough to be clickable, demonstrating that they're always present and available.

**Architectural reasoning:** In physical architecture, visibility changes with distance and angle. Objects far away appear less visible; objects at an angle appear less visible. WHITE DIAMOND follows the same principle: fading demonstrates visibility changes as objects move through space.

### The Rotate

Objects change orientation. Rotation demonstrates that objects have physical orientation and can be rotated in space.

- **Spin** — For loading, processing. Spinning demonstrates that objects are under constant torque—they're being rotated continuously.

- **Turn** — For expansion, reveal. Turning demonstrates that objects are rotating to reveal hidden content—they're rotating around an axis to show different faces.

- **Flip** — For state change, front/back. Flipping demonstrates that objects have two faces—they're rotating 180 degrees to show the other face.

**Rotate rules:**

- **Rotate from center** — Objects rotate around their center, demonstrating that they have a fixed center of mass.

- **Use appropriate speed** — Rotation should be slow enough to be visible but fast enough to be responsive. This demonstrates that objects have mass and resist rotation.

- **Consider accessibility** — Rotation can cause vestibular issues—use sparingly and provide reduced motion options.

**Architectural reasoning:** In physical architecture, rotation is common—doors rotate on hinges, windows rotate on pivots. WHITE DIAMOND follows the same principle: rotation demonstrates physical orientation and spatial relationships.

### The Spring

Objects overshoot and bounce back. Spring motion demonstrates that objects have internal structure and can deform under force.

- **Entrance** — Pop in with slight overshoot. This demonstrates that objects are under spring tension—they overshoot their final position and bounce back.

- **Exit** — Pop out with slight bounce. This demonstrates that objects are under spring tension—they overshoot their exit position and bounce back.

- **Drag** — Follow with spring tension. This demonstrates that objects are under spring tension—they follow the cursor with a slight delay and bounce.

- **Drop** — Snap to position with bounce. This demonstrates that objects are under spring tension—they snap to their destination and bounce.

**Spring rules:**

- **Use appropriate tension** — Not too bouncy (playful) or too stiff (serious). This demonstrates that objects have appropriate internal structure.

- **Maintain spatial continuity** — Spring motion should follow spatial laws—objects shouldn't teleport or dematerialize.

- **Respect user motion preferences** — Spring motion can cause vestibular issues—provide reduced motion options.

**Architectural reasoning:** In physical architecture, spring motion is rare—most objects are rigid. WHITE DIAMOND uses spring motion sparingly to demonstrate specific physical properties, not as a general animation pattern.

## Timing Functions

### Linear

Constant speed:

- **Use for:** Continuous motion, progress indicators. Linear motion demonstrates constant speed—objects move at the same speed throughout their journey.

- **Don't use for:** Natural motion, UI transitions. Linear motion doesn't follow physical laws—it doesn't accelerate or decelerate, which feels unnatural.

**Architectural reasoning:** In physical architecture, constant speed is rare—objects accelerate and decelerate. WHITE DIAMOND uses linear motion only for specific cases where constant speed is appropriate.

### Ease-Out

Decelerating:

- **Use for:** Arriving, stopping, appearing. Ease-out demonstrates that objects are arriving—they decelerate as they approach their destination.

- **Don't use for:** Departing, starting, disappearing. Ease-out doesn't demonstrate departure—it demonstrates arrival.

**Architectural reasoning:** In physical architecture, arriving objects decelerate—a car braking, a door slowing down. WHITE DIAMOND follows the same principle: ease-out demonstrates arrival.

### Ease-In

Accelerating:

- **Use for:** Departing, starting, disappearing. Ease-in demonstrates that objects are departing—they accelerate as they leave their current position.

- **Don't use for:** Arriving, stopping, appearing. Ease-in doesn't demonstrate arrival—it demonstrates departure.

**Architectural reasoning:** In physical architecture, departing objects accelerate—a car accelerating, a door speeding up. WHITE DIAMOND follows the same principle: ease-in demonstrates departure.

### Ease-In-Out

Smooth acceleration and deceleration:

- **Use for:** Continuous motion, state changes. Ease-in-out demonstrates that objects are in continuous motion—they accelerate and decelerate smoothly.

- **Don't use for:** One-directional motion. Ease-in-out demonstrates bidirectional motion—it doesn't demonstrate one-directional motion.

**Architectural reasoning:** In physical architecture, continuous motion is common—a person walking, a door swinging. WHITE DIAMOND follows the same principle: ease-in-out demonstrates continuous motion.

### Spring

Overshooting and bouncing:

- **Use for:** Playful interactions, emphasis, drag. Spring motion demonstrates that objects have internal structure—they overshoot and bounce back.

- **Don't use for:** Serious contexts, subtle transitions. Spring motion is too playful for serious contexts—it demonstrates internal structure that may not be appropriate.

**Architectural reasoning:** In physical architecture, spring motion is rare—most objects are rigid. WHITE DIAMOND uses spring motion sparingly to demonstrate specific physical properties.

## Creating Spatial Memory

Movement physics creates spatial memory—the ability to predict where objects will appear and how they will behave. This memory is essential for user control and interface predictability.

**How movement creates spatial memory:**

- **Consistent physics** — When all objects follow the same physical laws, users can predict how any object will behave. This consistency creates learning and predictability.

- **Proportional motion** — When motion magnitude matches importance, users can predict the significance of any animation. This proportionality creates visual hierarchy and spatial understanding.

- **Spatial continuity** — When objects move through continuous paths, users can track objects and predict their location. This continuity creates object permanence and spatial memory.

- **Temporal predictability** — When motion duration matches distance and importance, users can predict how long any animation will take. This predictability creates temporal understanding and control.

**Architectural reasoning:** In physical architecture, spatial memory is essential—we know that doors open, windows let in light, and stairs connect floors. WHITE DIAMOND follows the same principle: movement physics creates spatial memory that allows users to predict interface behavior.

## See Also

- [Animation Principles](animation-principles.md) — How motion should feel
- [Prohibited Animations](prohibited-animations.md) — What motion should never do
- [Appearance Sequence](../spatial-hierarchy/appearance-sequence.md) — How objects emerge
- [Space Behavior](../space-physics/space-behavior.md) — How space responds to objects
- [Control Feeling](../psychology/control-feeling.md) — The sense of agency
- [Spatial Hierarchy](../spatial-hierarchy/) — The three-layer architectural structure
- [Depth Perception](../spatial-hierarchy/depth-perception.md) — How objects communicate depth