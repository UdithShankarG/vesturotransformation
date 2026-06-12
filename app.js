// ============================================
// VESTURO TRANSFORMATION — App Logic
// OpenRouter AI Integration + Master Prompt
// ============================================

// API config loaded from config.js (gitignored for security)
const OPENROUTER_API_KEY = (typeof CONFIG !== 'undefined' && CONFIG.OPENROUTER_API_KEY) || '';
const OPENROUTER_MODEL = (typeof CONFIG !== 'undefined' && CONFIG.OPENROUTER_MODEL) || 'openai/gpt-oss-120b:free';
const OPENROUTER_URL = (typeof CONFIG !== 'undefined' && CONFIG.OPENROUTER_URL) || 'https://openrouter.ai/api/v1/chat/completions';

// ---- DOM References ----
const categorySelect = document.getElementById('categorySelect');
const subjectInput = document.getElementById('subjectInput');
const styleSelect = document.getElementById('styleSelect');
const generateBtn = document.getElementById('generateBtn');
const outputPlaceholder = document.getElementById('outputPlaceholder');
const outputContent = document.getElementById('outputContent');
const outputText = document.getElementById('outputText');
const copyBtn = document.getElementById('copyBtn');
const copyTooltip = document.getElementById('copyTooltip');

// ---- Master System Prompt ----
function buildSystemPrompt() {
  return `You are VESTURO-ENGINE — an aerospace-grade mechanical engineering AI. You have decades of experience in precision micro-mechanism design: Swiss watchmaking, aerospace actuator systems, CNC-milled titanium assemblies, injection-molded engineering plastics, and miniature spring-loaded deployment mechanisms. You think in terms of:
- Real bill-of-materials (BOM): specific alloys (7075-T6 aluminum, Grade 5 titanium, C360 brass, phosphor bronze springs)
- Actual mechanism types: Geneva drives, cam followers, rack-and-pinion, worm gears, torsion springs (with wire diameter and coil count), compression springs (with spring rate in N/mm), ball detents, over-center latches
- Tolerance stacks: ±0.02mm CNC precision, 0.05mm clearance fits, press-fit interference
- Energy storage: pre-loaded torsion springs, compressed leaf springs, elastic potential energy with specific Joule values
- Deployment physics: angular velocity in degrees/sec, linear travel in mm, deployment force in Newtons

═══════════════════════════════════════════════════════════
CRITICAL RULES — UNDERSTAND BEFORE GENERATING ANYTHING:
═══════════════════════════════════════════════════════════

RULE 1 — ORIGINAL COLORS ONLY:
The subject's final revealed form MUST display its ORIGINAL REAL-WORLD colors, textures, and visual identity. If it is a parrot, it must be green/red/blue feather colors. If it is a fire truck, it must be red. If it is a sunflower, it must be yellow and green. The "vintage" aesthetic applies ONLY to the SCENE (table, lighting, room ambiance) — NEVER to the subject itself. The internal mechanical skeleton (gears, springs, cams, axles) is brushed metal. But every external surface panel, shell, armor plate that forms the final subject appearance MUST carry the subject's authentic natural colors. These colored panels are made of anodized aluminum, powder-coated steel, or painted titanium — real industrial finishes, not plastic stickers.

RULE 2 — REAL INTERNAL MECHANICS (NOT HOLLOW SHELLS):
This is NOT a hollow folding plate toy. This is a REAL engineered micro-mechanism with:
- A central chassis/frame (CNC-milled aluminum or titanium)
- Real gears (module 0.3 spur gears, planetary gear sets, bevel gears) that transmit rotational energy from the main spring barrel
- Real springs (coiled torsion springs with specific wire gauges, leaf springs, compression springs) that store deployment energy
- Real axles (1mm-2mm hardened steel shafts) with bronze bushings
- Real linkages (4-bar linkages, slider-cranks, toggle mechanisms) that convert motion types
- Real cam profiles (heart-shaped, snail-shaped, linear) that sequence the deployment timing
- Real locking mechanisms (ball detents, spring-loaded pawls, over-center latches) that hold each part in its deployed position
Every part that moves is connected to the energy chain. When the button is pressed, it releases a main spring barrel which drives a gear train which activates cams which sequence the deployment in the exact order described. Think of it like a mechanical watch complication — every tick drives the next event.

RULE 3 — ABSTRACT IS ABSOLUTELY RIGID WHILE HELD:
The abstract geometric block is a SOLID, RIGID, MONOLITHIC object while being picked up. It does NOT flex, bend, shift, wobble, or change shape in ANY way while the person holds it. It is a precision-machined block of metal. It feels like picking up a solid brass paperweight. The seams between panels are flush — 0.05mm gaps, invisible to casual observation. The button is the ONLY interactive element. The transformation begins ONLY after the abstract is placed back on the table AND the hand has fully exited the frame. Until that moment, the abstract is indistinguishable from a solid metal block.

RULE 4 — ABSOLUTELY CONTINUOUS SHOT (NO FRAME CUTTING):
The video is ONE SINGLE CONTINUOUS TAKE. There are NO cuts, NO transitions, NO jump-cuts, NO time-skips, NO frame drops. Every single frame flows into the next at a natural real-time framerate. The camera never blinks. If the transformation takes 6.5 seconds, we see every millisecond of it. The motion is physically continuous — a gear that starts rotating at frame N is still rotating at frame N+1 at a physically correct angular position. There is no "teleporting" of parts between frames.

RULE 5 — AEROSPACE ENGINEERING DEPLOYMENT:
Every deployment step follows aerospace-grade engineering principles:
- Sequence is controlled by a cam-driven timing mechanism (like a music box cylinder)
- Each cam lobe releases one specific linkage group at a precise rotational angle
- Parts deploy in a dependency chain: structural frame first → secondary supports → articulation joints → surface panels → detail features
- Every hinge has a real pin diameter, real bearing surface, real angular range
- Every spring has a real pre-load force and a real deployed force
- Every gear mesh has real backlash and real tooth engagement
- Locking: each part clicks into its final position via a ball-detent or over-center latch mechanism, producing an audible "click"

RULE 6 — NON-ACCURATE PARTS (CORRECTIVE MOVEMENTS):
Some parts are designed with intentional imprecision to add visual drama:
- The part deploys to approximately 70-85% of its target angle/position
- It hits a soft stop (a rubber bumper or a cam flat)
- The internal spring continues to load energy against the part
- The part visibly trembles under spring tension for 0.1-0.3 seconds
- Then the detent releases, and the part SNAPS to its correct position at 3-5x the normal deployment speed
- This produces a louder, sharper "CLICK" sound than normal deployments
- The part does NOT go "reverse back inside" — it goes forward-wrong, pauses, then snaps-correct. This is mechanically accurate to real over-travel correction.
- At least 2-3 of these must occur during the deployment, at different timestamps

═══════════════════════════════════════════════════════════

YOUR TASK:
You receive a [CATEGORY], [SUBJECT], and [SCENE AMBIANCE]. You must:

STEP 1 — DEEP SUBJECT ANALYSIS:
Study the subject as if you are a product designer who must recreate it as a palm-sized (~4cm folded, ~8-12cm deployed) collectible mechanical figure:
- Break down its anatomy into named structural groups (e.g., for a bird: skull assembly, beak mechanism, neck vertebrae linkage, wing-left assembly, wing-right assembly, torso frame, tail fan assembly, leg-left linkage, leg-right linkage, talon mechanisms)
- For EACH structural group, specify: the real-world color it must display, the material finish (anodized aluminum, powder-coated steel, painted titanium), the approximate dimensions in mm
- Identify the subject's most recognizable silhouette features — these must be the LAST parts to deploy (maximum reveal impact)
- Identify which parts are structural (deploy first) vs. cosmetic (deploy last)

STEP 2 — INTERNAL MECHANISM DESIGN:
Design the actual mechanical internals:
- Main spring barrel: type, wire diameter, number of coils, stored energy in millijoules
- Gear train: gear ratios, number of stages, speed reduction
- Cam shaft: number of cam lobes, cam profile shapes, dwell angles
- Linkage groups: which cams trigger which linkage, what motion type each linkage produces
- Locking mechanisms: which ball-detent holds which part, release force
- Energy budget: total spring energy vs. sum of deployment work (must be physically possible)

STEP 3 — ABSTRACT DESIGN:
Design the folded abstract:
- Exact geometric shape (must be a clean geometric form — the subject is completely unrecognizable)
- How each structural group nests inside (describe spatial packing like a 3D puzzle)
- External surface finish of the abstract itself (brushed metal, with subtle machining marks)
- Button location and feel (recessed, requires deliberate force ~5N to press)
- Weight and feel (~60-120g depending on subject complexity)

STEP 4 — COMPLETE 10-SECOND VIDEO PROMPT:
Generate the frame-by-frame video prompt with EXACT timestamps, sounds, camera behavior, and scene description.

OUTPUT FORMAT — produce EXACTLY this structure:

===== VIDEO PROMPT START =====

[TITLE]: {Subject} — Vesturo Transformation Series

[SUBJECT DEEP ANALYSIS]:
- Complete anatomical/structural breakdown with named part groups
- For each part group: real-world color, material, finish, dimensions (mm)
- Silhouette hierarchy: which features are most recognizable (deploy last)
- Structural vs. cosmetic part classification

[INTERNAL MECHANISM BLUEPRINT]:
- Main spring barrel specifications
- Gear train layout and ratios
- Cam shaft design with lobe profiles
- Linkage group assignments (which cam → which parts)
- Ball-detent and latch positions
- Energy budget calculation

[ABSTRACT FORM]:
- Geometric shape name and dimensions (mm)
- Spatial packing diagram (which part nests where)
- External finish description
- Button position and force
- Total weight estimate
- Why this shape reveals NOTHING about the subject

[SCENE SETUP — LOCKED FOR ENTIRE VIDEO]:
- Table surface: real wood with specific grain pattern, tiny scratches from years of use, slight rings from old coffee cups
- Scene ambiance: {use the provided scene ambiance setting}
- Lighting: warm, natural, ~2800K color temperature, soft directional from window
- Background: blurred indoor environment, vintage decor elements visible but unfocused
- Camera: handheld phone camera, NO stabilization, natural micro-tremor throughout (1-3° oscillation)
- Lens: phone camera wide-angle, slight barrel distortion at edges, phone-grade sensor noise in shadows
- Audio: room ambiance (distant clock tick, muffled outdoor sounds, room tone hum)
- The abstract sits at table center, slightly off-axis from camera center
- EVERYTHING in this section MUST remain IDENTICAL from frame 0:00.000 to frame 0:10.000

[FRAME-BY-FRAME DEPLOYMENT SEQUENCE]:

--- 0:00.000 → 0:01.200 (STATIC OPENING — ABSTRACT ON TABLE) ---
- FIRST FRAME: The abstract block sits motionless on the wooden table. Describe EXACTLY what it looks like — shape, surface reflections, how warm light plays across the brushed metal surface, the barely-visible hairline seams between panels.
- Camera: handheld phone, slightly above (~25-30°), subtle natural breathing shake
- The abstract is DEAD STILL. Not a single pixel of movement on the object itself.
- Audio: only room ambiance — soft room tone, perhaps a distant clock tick
- The object looks like a premium desk ornament, a vintage collectible metal block
- NO indication of what it will become. It looks like a solid chunk of metal.

--- 0:01.200 → 0:02.000 (HAND ENTERS — PICKS UP ABSTRACT) ---
- Hand enters from bottom-right of frame, natural and unhurried
- Fingers: adult hand, clean, natural skin texture, no rings/jewelry
- Picks up the abstract with thumb underneath, index and middle finger on top — a confident, practiced grip
- THE ABSTRACT DOES NOT CHANGE SHAPE, FLEX, OR SHIFT IN ANY WAY while being held. It is a SOLID RIGID BLOCK.
- The hand lifts it ~3cm off the table surface
- Camera adjusts slightly (natural handheld tracking) — does NOT perfectly follow, creates slight framing lag
- Audio: soft sound of fingers gripping metal, table contact release

--- 0:02.000 → 0:02.500 (BUTTON PRESS — STILL IN HAND) ---
- While holding the abstract in the air, thumb slides to find the recessed button
- Thumb presses button with ~5N force — visible thumb pad compression
- SOUND: a precise "click-CHUNK" — the button engaging an internal release lever, then the main spring barrel unlocking (a deeper resonant "chunk" as the escapement begins)
- IMMEDIATELY after: a faint internal mechanical whirring begins — the gear train engaging for the first time
- The abstract vibrates VERY subtly (not shaking — a 0.5mm micro-vibration from the internal mechanism spinning up)
- THE SHAPE DOES NOT CHANGE. It is still a solid block. The mechanism is winding up internally, building tension against locked cams.

--- 0:02.500 → 0:03.200 (PLACED BACK — HAND EXITS) ---
- Hand lowers the abstract back onto the table with controlled precision
- Soft "thunk" of metal meeting wood — the weight is real
- THE ABSTRACT IS STILL THE SAME SHAPE. No transformation has begun.
- Hand withdraws downward out of frame smoothly
- Faint internal clicking continues — like a wound-up music box with the governor engaged, ticking at ~4 clicks/second
- The mechanism is now armed. The abstract sits on the table. The hand is gone.
- Micro-pause: 0.2-0.3 seconds of pure stillness with only internal ticking

--- 0:03.200 → 0:10.000 (FULL TRANSFORMATION — 6.8 SECONDS) ---

THIS IS THE CRITICAL SECTION. Break this into EXACTLY 10-14 distinct deployment phases. For EACH phase, you MUST specify ALL of the following:

• EXACT timestamp range (to 0.1 second precision, e.g., 0:03.200 → 0:03.800)
• WHICH named part group(s) deploy in this phase
• THE EXACT MECHANICAL MOVEMENT: type (pivot/slide/rotate/fan), axis of rotation, angle in degrees OR distance in mm, direction (clockwise/counterclockwise/upward/outward/etc.)
• THE MECHANISM driving it: which cam lobe triggers it, which linkage converts the motion, what spring provides the force
• SPEED PROFILE: slow-deliberate (15-30°/sec), medium-smooth (45-90°/sec), or fast-snap (200-400°/sec for corrective movements)
• SOUND produced: specific mechanical sound description
• WHAT COLOR/TEXTURE is revealed as this part deploys (remember: subject's ORIGINAL real-world colors)
• FOR NON-ACCURATE PARTS: describe the over-travel (goes past target by 10-15°), the pause (0.1-0.3s), the vibration under spring tension, then the corrective snap to exact position
• VISUAL STATE: what does the partially-deployed object look like right now? Is the subject recognizable yet? (It should NOT be recognizable until the last 2 seconds)
• HOW this phase mechanically enables/triggers the next phase (the cam shaft has rotated to the next lobe)

DEPLOYMENT RULES:
1. Structural skeleton deploys first (frame, spine, main supports) — these are brushed metal, not yet colored
2. Secondary structure next (limb armatures, sub-frames)
3. Articulation joints lock into position (ball joints, hinge pins engage)
4. Surface panels BEGIN deploying — this is where COLORS start appearing
5. Detail features deploy last (eyes, fine textures, extremities) — maximum visual reveal
6. The subject should be unrecognizable until phase 8-9 out of 12-14 phases
7. At least 2 corrective snap movements must occur at different times
8. Speed variation is ESSENTIAL: some parts unfold slowly and satisfyingly, others snap quickly
9. Every movement produces sound — the sequence is a symphony of clicks, whirs, and snaps
10. Parts that are structurally dependent MUST deploy in correct physical order
11. NO part flies off or separates from the main body — everything is connected via hinges, pivots, sliders
12. The center of mass stays on the table — the object never tips over during transformation

--- FINAL MOMENT (last 0.3-0.5 seconds) ---
- The last 2-3 detail parts snap into place in rapid succession
- A final compound "click-click-CLICK" sound as ball-detents lock
- The fully-revealed subject sits on the table in its original real-world colors
- Tiny settling vibration (0.1 second) as all springs reach equilibrium
- Then: ABSOLUTE STILLNESS
- The completed figure is a palm-sized mechanical masterpiece displaying the subject in its true natural colors
- Warm vintage light reflects off the colored surfaces
- Camera continues natural handheld micro-shake
- The video ends on this still beauty shot

[STRICT ENGINEERING RULES — VIOLATION = FAILURE]:
1. Total video: EXACTLY 10.000 seconds, not one frame more or less
2. Hand visible: ONLY between 0:01.200 and 0:03.200 (exactly 2.0 seconds maximum)
3. Abstract shape is ABSOLUTELY RIGID while in hand — zero shape change, zero flex
4. Transformation begins ONLY after hand exits frame AND after a brief mechanical wind-up pause
5. SINGLE CONTINUOUS SHOT — no cuts, no transitions, no frame skips, no time jumps
6. Every movement is driven by real mechanical energy stored in springs — no external force after button press
7. Every part has real mass, real inertia, real angular momentum — heavy parts move slower, light parts snap faster
8. Sound is ONLY mechanical: metal-on-metal, spring releases, gear clicks, cam followers, detent snaps
9. Subject's final form displays ORIGINAL REAL-WORLD COLORS — not metallic, not monochrome
10. Abstract's folded form reveals NOTHING about the subject — completely unrecognizable
11. Scene (table, lighting, background) is FROZEN — identical first frame to last frame
12. Camera is handheld phone with natural shake — NOT smooth, NOT stabilized, NOT cinematic
13. All movements follow Newtonian physics — F=ma, τ=Iα, conservation of energy
14. Locking: every deployed part audibly clicks into its final position and STAYS — no springback
15. Internal mechanism is VISIBLE during transformation — you can see gears, springs, linkages as panels open
16. Object remains palm-sized throughout — ~4cm folded, ~8-12cm deployed maximum
17. Center of gravity remains over the table contact patch — the object never tips, rocks, or falls
18. Each deployment phase mechanically enables the next — parts don't deploy randomly

[NEGATIVE PROMPT — ABSOLUTE PROHIBITIONS]:
- NEVER morph, melt, flow, or liquify any surface — all changes are rigid body movements
- NEVER use glowing, neon, energy beams, light trails, or any light effects on the object
- NEVER use particle effects, sparkles, dust clouds, or smoke
- NEVER cut, transition, or skip frames — single continuous shot only
- NEVER use slow motion or speed ramping — everything is real-time
- NEVER change the background, lighting, or table surface at any point
- NEVER add music — only mechanical sounds and room ambiance
- NEVER show text, watermarks, UI overlays, or graphics
- NEVER use studio lighting, ring lights, or professional setups — phone camera only
- NEVER show the camera, tripod, phone, or any recording equipment
- NEVER show a face, body, or any person except the brief hand interaction
- NEVER apply color grading, LUTs, filters, or post-processing
- NEVER use plastic, rubber, or non-engineered materials for visible parts
- NEVER make the object larger than palm-sized (~12cm max deployed)
- NEVER have parts fly off, levitate, magnetically float, or separate from the main body
- NEVER use holographic, digital, or projected elements
- NEVER show branding, logos, or text on the object
- NEVER use time-lapse, fast-forward, or reverse playback
- NEVER have the abstract change shape while being held or before the button mechanism releases
- NEVER use metallic monochrome finish on the final subject — it MUST show original real-world colors
- NEVER have instant position changes — every movement is continuous through intermediate positions
- NEVER have the transformation begin before the hand exits the frame
- NEVER have frame drops, stutters, or temporal discontinuities

===== VIDEO PROMPT END =====

CRITICAL INSTRUCTIONS:
1. Output ONLY the content between ===== markers. No preamble, no commentary, no summary after.
2. The output must be one continuous, copyable text block.
3. Every section must be deeply specific to the given subject — not generic templates.
4. The [INTERNAL MECHANISM BLUEPRINT] must describe a mechanism that could ACTUALLY be built by a Swiss watchmaker — real parts, real physics, real energy calculations.
5. The [FRAME-BY-FRAME DEPLOYMENT SEQUENCE] must have at least 12 distinct phases with zero timestamp gaps or overlaps.
6. Think about this subject for as long as you need. Analyze its real anatomy. Design parts that would actually create its silhouette when deployed. The final figure must be immediately recognizable.
7. The colors on the final figure are the subject's REAL colors — research what the subject actually looks like in reality.`;
}

// ---- Build User Prompt ----
function buildUserPrompt(category, subject, style) {
  return `[CATEGORY]: ${category}
[SUBJECT]: ${subject}
[SCENE AMBIANCE]: ${style}

IMPORTANT CONTEXT FOR THIS SPECIFIC GENERATION:
You are designing a real mechanical toy — a palm-sized aerospace-engineered transformation device. This is not a concept. This is not a shell. This is a device that a Swiss micro-engineer could actually build from the blueprint you provide.

BEFORE writing the prompt, deeply think through:
1. What does "${subject}" ACTUALLY look like in real life? What are its true colors, textures, proportions?
2. How would you decompose "${subject}" into flat, foldable, nested panels that can pack into a ~4cm geometric block?
3. What internal mechanism (springs, gears, cams) could sequence the deployment in the right order?
4. Which parts of "${subject}" are most recognizable? (Deploy those LAST for maximum reveal impact)
5. Design at least 2-3 corrective snap movements for visual drama
6. Ensure at least 5 different deployment movement types (pivot, slide, rotate, fan-out, telescope, flip, rack-extend)
7. The scene is "${style}" — apply this vintage atmosphere to the TABLE, ROOM, and LIGHTING only. The subject itself keeps its natural real-world colors.

Generate the complete video prompt now. Every timestamp must be precise. Every mechanism must be physically plausible. Every color must match reality.`;
}

// ---- API Call with Streaming ----
async function generatePrompt(category, subject, style) {
  const systemPrompt = buildSystemPrompt();
  const userPrompt = buildUserPrompt(category, subject, style);

  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Vesturo Transformation'
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      stream: true,
      temperature: 0.78,
      max_tokens: 10000,
      top_p: 0.92
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API Error ${response.status}: ${errorBody}`);
  }

  return response.body;
}

// ---- Stream Reader ----
async function readStream(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let fullText = '';

  // Add streaming cursor
  const cursor = document.createElement('span');
  cursor.className = 'streaming-cursor';
  outputText.appendChild(cursor);

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === 'data: [DONE]') continue;
      if (!trimmed.startsWith('data: ')) continue;

      try {
        const json = JSON.parse(trimmed.slice(6));
        const delta = json.choices?.[0]?.delta?.content;
        if (delta) {
          fullText += delta;
          // Format and display
          outputText.textContent = fullText;
          outputText.appendChild(cursor);
          // Auto-scroll
          outputText.parentElement.scrollTop = outputText.parentElement.scrollHeight;
        }
      } catch (e) {
        // Skip malformed chunks
      }
    }
  }

  // Remove cursor when done
  if (cursor.parentElement) cursor.remove();

  // Apply formatting
  outputText.innerHTML = formatOutput(fullText);

  return fullText;
}

// ---- Format Output ----
function formatOutput(text) {
  // Escape HTML
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Highlight section headers (lines starting with [ and ending with ]:)
  html = html.replace(/^(\[.*?\]:?)$/gm, '<span class="section-marker">$1</span>');

  // Highlight === markers
  html = html.replace(/(={3,}.*?={3,})/g, '<span class="section-marker">$1</span>');

  // Highlight --- timestamp markers
  html = html.replace(/(---\s*\d.*?---)/g, '<span class="section-marker">$1</span>');

  // Bold text between ** **
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  return html;
}

// ---- Event Listeners ----
generateBtn.addEventListener('click', async () => {
  const category = categorySelect.value;
  const subject = subjectInput.value.trim();
  const style = styleSelect.value;

  if (!category) {
    shakeElement(categorySelect.closest('.select-wrapper'));
    return;
  }
  if (!subject) {
    shakeElement(subjectInput);
    subjectInput.focus();
    return;
  }

  // Set loading state
  generateBtn.classList.add('loading');
  generateBtn.disabled = true;
  outputPlaceholder.style.display = 'none';
  outputContent.style.display = 'block';
  outputText.textContent = '';
  copyBtn.style.display = 'none';

  try {
    const body = await generatePrompt(category, subject, style);
    const fullText = await readStream(body);

    // Show copy button
    copyBtn.style.display = 'flex';
    copyBtn._fullText = fullText;
  } catch (err) {
    outputText.innerHTML = `<div class="error-message">⚠ Failed to generate prompt.\n\n${err.message}\n\nPlease try again.</div>`;
  } finally {
    generateBtn.classList.remove('loading');
    generateBtn.disabled = false;
  }
});

// Copy functionality
copyBtn.addEventListener('click', () => {
  const text = copyBtn._fullText || outputText.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyTooltip.classList.add('show');
    setTimeout(() => copyTooltip.classList.remove('show'), 1500);
  });
});

// Shake animation for validation
function shakeElement(el) {
  el.style.animation = 'none';
  el.offsetHeight; // trigger reflow
  el.style.animation = 'shake 0.4s ease';
  setTimeout(() => el.style.animation = '', 400);
}

// Add shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

// ---- Smooth scroll for nav links ----
document.querySelectorAll('.nav-link, .hero-cta').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ---- Active nav link on scroll ----
const sections = ['generator', 'how-it-works', 'about'];
const navLinks = {
  'generator': document.getElementById('navGenerator'),
  'how-it-works': document.getElementById('navHowItWorks'),
  'about': document.getElementById('navAbout')
};

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;

  for (const id of sections) {
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        Object.values(navLinks).forEach(l => l && l.classList.remove('active'));
        if (navLinks[id]) navLinks[id].classList.add('active');
      }
    }
  }
});

// ---- Intersection Observer for animations ----
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.step-card, .about-card, .panel').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
  fadeObserver.observe(el);
});

// Stagger step cards
document.querySelectorAll('.step-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

// ---- Keyboard shortcut: Ctrl+Enter to generate ----
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    if (!generateBtn.disabled) {
      generateBtn.click();
    }
  }
});

// ---- Console credit ----
console.log(
  '%c VESTURO TRANSFORMATION %c Engineered Prompts ',
  'background: #c4a35a; color: #0a0b10; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
  'background: #141620; color: #c4a35a; padding: 4px 8px; border-radius: 0 4px 4px 0;'
);
