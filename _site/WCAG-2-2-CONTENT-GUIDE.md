# ParentShopper WCAG 2.2 AA Content Checklist

Use this as part of every new review/article PR to keep the site aligned with WCAG 2.2 AA.  It focuses on the extra 2.2 requirements plus the areas writers/devs touch most (cards, CTAs, carousels).

---

## 1. Focus Appearance (2.4.11 & 2.4.12)
- ✅ Make sure any new interactive element inherits the site-wide `.focus-ring` styles (or reuses native `<a>/<button>`).
- ✅ Keep `outline` untouched; do **not** remove focus styles via `outline: none` unless you re-apply `.focus-visible`.
- ✅ Avoid positioning that could hide the focus indicator (e.g., sticky headers or overflow-hidden wrappers); provide `padding` breathing room if necessary.

## 2. Target Size (2.5.8)
- ✅ Buttons, nav links, pagination bullets, toggles, etc. must be at least **44px** in both dimensions _or_ meet one of the WCAG exceptions.
- ✅ Inline text links are allowed to be smaller, but if the link is a standalone CTA in a list or grid, give it padding to reach 44px.
- ✅ Ensure touch targets inside cards (e.g., “Check Price” buttons) have enough padding so mobile users don’t mis-tap adjacent elements.

## 3. Dragging Movements (2.5.7)
- Any control that requires dragging (sliders, carousels) must have a single-pointer alternative:
  - ✅ Provide “Next/Prev” buttons or stepper controls.
  - ✅ Ensure keyboard users can operate the component (e.g., Swiper + arrow buttons).

## 4. Pointer Cancellation (2.5.2) & Inputs
- Continue relying on native buttons/links where possible—they already pass.  
- If a custom control is needed, handle pointer-up events for activation so accidental drags can be cancelled.

## 5. Consistent Help / Redundant Entry / Accessible Auth (3.2.6, 3.3.7, 3.3.8)
- Currently N/A (no repeating forms or logins). If a new flow is added:
  - Provide the same help options on each step.
  - Do not require re-typing data already collected.
  - Offer passwordless / copy-paste friendly login if we ever add authentication.

## 6. Media & Motion
- Continue using `prefers-reduced-motion` media queries when adding animations.
- Provide transcripts/captions if we embed multimedia in the future.

## 7. Content Structure
- Keep headings sequential (`h1` → `h2` → `h3`); avoid skipping levels.
- Use list markup for bulleted/numbered lists; avoid “fake” lists made with `<br>`.
- Supply descriptive `alt` text referencing the product image context (avoid “image of…” unless essential).

## 8. QA Steps Before Publishing
1. **Keyboard pass:** Tab through the new page; confirm every interactive element shows the thick outline and is reachable in logical order.
2. **Pointer size:** On mobile dev tools, check that all buttons/links are easily tappable.
3. **Responsive preview:** Confirm CTAs/cards don’t overlap or truncate text on narrow screens.
4. **Screen reader spot check:** Optional but encouraged—use NVDA or VoiceOver to read the new section headings and cards to ensure intent is clear.

If you introduce a bespoke widget/component, loop in engineering to re-run this checklist plus an ARIA review.

_Last updated: 2025-11-18_***

