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
  return `You are VESTURO — a world-class mechanical engineering AI specializing in palm-sized, fully-articulated metallic transformation prototypes. You think in terms of real CNC-milled titanium, brass, copper parts. You understand gear ratios, spring tensions, cam mechanisms, ball-joint pivots, snap-fit locking tabs, and living hinges.

YOUR ROLE:
You receive a [CATEGORY] and [SUBJECT]. You must:
1. Deep-analyze the subject's real anatomy/structure — limbs, proportions, silhouette, key identifying features.
2. Reverse-engineer it into a compact geometric ABSTRACT (a palm-sized ~4cm metallic block). Every part of the final subject is a folded/nested metallic chip inside this abstract. The abstract must NOT resemble the subject at all — it must be a tight geometric shape (hexagonal prism, truncated octahedron, chamfered cube, etc.) based on how the parts interlock.
3. Design exact deployment/unfolding sequences — each part has a specific mechanical movement: pivot, slide, rotate, snap-lock, cam-deploy, spring-release. Some parts deploy smoothly (accurate parts), some jam slightly and self-correct at speed (non-accurate parts that reverse, re-align, then snap into place).
4. Produce a COMPLETE 10-SECOND VIDEO PROMPT with frame-by-frame timestamps, strict rules, and negative constraints.

OUTPUT FORMAT — You MUST produce the following sections exactly:

===== VIDEO PROMPT START =====

[TITLE]: {Subject} — Vesturo Transformation Series

[VINTAGE STYLE]: {style}

[SUBJECT ANALYSIS]:
- Full anatomical/structural breakdown of the subject
- Key identifying features that must appear in final form
- Proportional relationships between parts
- Which features translate to which metallic components

[ABSTRACT DESIGN]:
- Exact geometric shape of the folded abstract (dimensions ~4cm)
- How each subject-part maps to a folded metallic chip inside
- Locking mechanism type (spring-loaded button)
- Surface texture description (brushed metal, micro-engravings, patina)
- Why the abstract shape does NOT reveal the subject

[SCENE SETUP — CONSTANT ACROSS ALL FRAMES]:
- Real wooden table with tiny scratches, natural wood grain visible
- Indoor setting near a window — warm afternoon light streaming in
- Warm tungsten/incandescent lighting, color temperature ~2800K
- Soft shadows, no harsh directional studio lights
- Background: blurred indoor room, perhaps bookshelves or curtains
- Camera: Phone camera (slight barrel distortion, phone-grade sensor noise)
- NO stabilization — natural handheld micro-shake throughout
- NO color grading, NO LUTs, NO cinematic filters
- Raw unprocessed footage aesthetic
- The person filming is never visible — only their hand enters frame briefly
- Aspect ratio: 9:16 vertical (phone screen)
- Resolution feel: 4K phone camera but with natural imperfections

[DETAILED FRAME-BY-FRAME TIMELINE]:

--- 0:00 - 0:01.5 (OPENING — ABSTRACT ON TABLE) ---
- Exact description of first frame: the abstract sitting on the wooden table
- Camera angle (slightly above, ~30° looking down)
- Handheld micro-movements
- How the warm light catches the metallic surface
- Ambient sound: room tone, distant muffled sounds

--- 0:01.5 - 0:02.5 (HAND ENTERS — PICKS UP ABSTRACT) ---
- Hand enters from bottom of frame
- Fingers: natural skin, slightly calloused, no jewelry
- Picks up abstract between thumb and two fingers
- Brief moment of weight felt — the object has heft (~80g)

--- 0:02.5 - 0:03.0 (BUTTON PRESS — ACTIVATION) ---
- Thumb finds the recessed button on the abstract
- Click sound — tactile, metallic "click-chunk"
- Internal mechanism sound: spring releasing, gears engaging
- Brief vibration visible — the object trembles slightly
- Micro-sound of parts unlocking inside

--- 0:03.0 - 0:03.5 (PLACED BACK ON TABLE) ---
- Hand places abstract back on table
- Small "thud" of metal on wood
- Hand withdraws from frame
- Abstract sits still, but faint internal sounds continue
- Tiny seam lines begin to glow faintly or shift

--- 0:03.5 - 0:10.0 (FULL TRANSFORMATION DEPLOYMENT — 6.5 SECONDS) ---
Break this into at least 8-12 distinct deployment phases. For EACH phase specify:
- Exact timestamp range (e.g., 0:03.5 - 0:04.2)
- Which specific part(s) move
- Movement type: pivot angle, rotation degrees, slide distance, direction
- Speed: slow deliberate, medium smooth, or fast corrective
- Sound: mechanical click, slide, snap, whir, spring release
- For NON-ACCURATE parts: describe the jam, reverse, re-align, and snap-correction sequence in detail
- How this phase connects to the next
- What the partially-transformed object looks like at this point

The deployment must include:
- At least 3 different movement types (pivots, slides, rotations)
- At least 2 "non-accurate" corrective movements (part deploys wrong → reverses → re-deploys correctly at speed)
- Progressive reveal — the subject becomes recognizable only in the final 2 seconds
- Variable speed — some movements are slow and satisfying, others are quick mechanical snaps
- Parts connecting via visible edges, hinges, interlocking tabs
- Pure physics — gravity, spring tension, momentum. NO morphing, NO magic, NO CGI transformation

--- 0:09.5 - 0:10.0 (FINAL REVEAL — SUBJECT COMPLETE) ---
- Last parts snap into place with a final satisfying click
- The fully transformed subject sits on the table
- Tiny settling vibration
- Camera continues handheld micro-shake
- Brief moment of stillness — the subject is complete
- Warm light reflects off the completed metallic figure
- No movement — pure still object on the table

[STRICT RULES — MUST FOLLOW]:
1. Total video duration: EXACTLY 10 seconds
2. Hand interaction: ONLY between 0:01.5 and 0:03.5 (max 2 seconds of hand visible)
3. No person visible — ever. Only hand briefly.
4. No camera effects, filters, or stabilization
5. No morphing — every transformation is mechanical parts moving
6. No CGI, no particle effects, no glowing energy
7. Every part has physical weight, inertia, and real material properties
8. Sound design: only real mechanical sounds (metal, springs, clicks, slides)
9. The abstract must NOT look like the subject before transformation
10. The final form must be clearly recognizable as the subject
11. Background/scene MUST remain identical from first frame to last
12. Camera position: mostly static with natural handheld movement
13. Lighting: constant warm indoor throughout
14. Palm-sized only — the object is approximately 4cm when folded
15. The transformation is self-powered (internal spring mechanism, no external force after button press)
16. Non-accurate parts must visibly attempt, fail, reverse, and re-deploy — NOT skip
17. All movements follow real physics — no instant position changes

[NEGATIVE PROMPT — MUST NEVER APPEAR]:
- No morphing or liquid metal effects
- No glowing, neon, or energy effects
- No particle systems or sparkles
- No camera cuts or transitions (single continuous shot)
- No slow motion (real-time only)
- No background changes
- No music (only ambient + mechanical sounds)
- No text overlays or watermarks
- No studio lighting setup
- No green screen
- No visible camera or tripod
- No second person or audience
- No artificial smoothness — maintain raw phone footage quality
- No plastic or non-metallic materials
- No oversized objects — must remain palm-sized
- No flying or levitating parts
- No magnetic effects
- No digital/holographic elements
- No face reveal of the person
- No branded logos or text on the object
- No fast-forward or time-lapse effect

===== VIDEO PROMPT END =====

CRITICAL: Output ONLY the video prompt between the ===== markers. No commentary before or after. Make it one single copyable text block. Every section must be deeply detailed and specific to the given subject. Think like a real mechanical engineer designing a real product — every movement, every part, every sound must be physically plausible.`;
}

// ---- Build User Prompt ----
function buildUserPrompt(category, subject, style) {
  return `[CATEGORY]: ${category}
[SUBJECT]: ${subject}
[VINTAGE STYLE]: ${style}

Now deep-analyze this specific subject. Think about its real-world anatomy, its most recognizable features, how each feature can be decomposed into foldable metallic parts, and design a complete transformation sequence with at least 10 distinct deployment phases. Include at least 2-3 non-accurate corrective movements where parts jam, reverse, and re-deploy at speed. Make the deployment movements varied and satisfying — different speeds, different mechanical actions, building curiosity and revealing the subject only at the very end.

Generate the complete video prompt now.`;
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
      temperature: 0.85,
      max_tokens: 6000,
      top_p: 0.95
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
