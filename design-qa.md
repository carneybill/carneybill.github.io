# Design QA: Featured insight CTA hover

- Source visual truth: conversation attachment, `Screenshot 2026-09-03 at 2.48.53 PM.png`
- Source pixels: 2048 x 1151 displayed from a 2049 x 1152 original
- Implementation screenshot: `/tmp/carney-blog-hover-fixed.png`
- Implementation pixels: 1936 x 952
- CSS viewport: 1936 x 952
- Density normalization: browser capture at 1x CSS pixels; comparison focused on the CTA state because the source includes browser chrome and was resized by one pixel
- Route: `/blog/`
- State: pointer hovering the featured insight card while positioned away from the CTA

## Full-view comparison evidence

The featured card retains the source layout, typography, image, spacing, dark surfaces, borders, and copy. The only intentional visual change is the broken CTA hover treatment identified in the source screenshot.

## Focused region comparison evidence

The source screenshot shows the `Read insight` CTA as a white rectangle with unreadable white text while the featured card is hovered. The revised browser capture shows the same CTA with a navy background (`rgb(47, 85, 151)`), light-blue border (`rgb(175, 200, 232)`), and readable near-white text (`rgb(245, 247, 251)`). The state was also checked with the pointer over the card image, confirming that the parent-card hover—not only direct button hover—keeps the label readable.

## Findings

- No actionable P0, P1, or P2 findings remain.
- Fonts and typography: unchanged; the uppercase CTA label remains legible at the existing weight and spacing.
- Spacing and layout rhythm: unchanged; CTA dimensions, padding, card grid, and alignment match the existing design.
- Colors and visual tokens: corrected to the existing brand accent and foreground tokens with visible contrast.
- Image quality and asset fidelity: unchanged; the supplied featured image retains its crop and sharpness.
- Copy and content: unchanged; `Read insight` remains the CTA label.
- Browser console: no errors or warnings during the verified local interaction.

## Comparison history

1. P1 found: featured-card hover set the CTA background to `--bc-ink` while a later `!important` rule also set its text to `--bc-ink`, producing white-on-white text.
2. Fix applied: parent-card hover and focus-within now use `--bc-accent` for the background, `--bc-accent-light` for the border, and `--bc-ink` for text.
3. Post-fix evidence: `/tmp/carney-blog-hover-fixed.png`; computed hover colors confirm blue background and readable near-white text whether the pointer is on the CTA or elsewhere in the card.

## Implementation checklist

- [x] Fix parent-card hover state
- [x] Preserve direct CTA hover and keyboard focus treatment
- [x] Verify computed colors in browser
- [x] Capture the corrected hover state
- [x] Check browser console

final result: passed
