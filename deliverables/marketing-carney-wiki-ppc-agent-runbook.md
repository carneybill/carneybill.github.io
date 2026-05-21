# Marketing carney.wiki PPC Agent Runbook

Owner-use v0 for dogfooding the PPC Performance Agent before turning it into a repeatable client offer.

## Purpose

Build a supervised AI PPC operator for carney.wiki that helps decide where paid media budget should go, what should be paused, what should be tested, and what should be learned from each change.

The agent should optimize for qualified commercial intent, not cheap activity. Clicks, impressions, form fills, and low-quality leads are supporting signals. The primary outcome is qualified conversations and paid engagements tied to the site's offers.

## Business Memory

- Site: `https://carney.wiki/`
- Owner: Bill Carney
- Primary conversion: booked conversation through Cal.com
- Secondary conversions: consulting day checkout, offer inquiry email, contact form submission, Stripe checkout start or purchase
- Primary offers: PPC Performance Agent, AI Platform Owner's Rep, Proof Ops Sprint, Positioning + Pipeline Audit, Founder Content Engine
- Audience: owner-led small businesses, technical B2B companies, professional services firms, and lean marketing teams that need practical AI-era marketing execution
- Positioning: operator-led marketing, AI-assisted execution, proof discipline, buyer-journey clarity, and practical automation

## Conversion Events To Track

- `book_conversation_click`: click to `https://cal.com/bill-carney/60min`
- `consulting_day_click`: click to the consulting day Stripe booking URL
- `offer_inquiry_email`: mailto click to `bill@carney.wiki`
- `contact_form_submit`: successful contact form submission
- `offer_page_view`: visit to any `/offers/` page
- `high_intent_offer_view`: visit to `/offers/ppc-performance-agent/`, `/offers/ai-platform-owners-rep/`, or `/offers/proof-ops-sprint/`
- `stripe_checkout_click`: click to any `buy.stripe.com` or `book.stripe.com` URL

The site now emits these offer events through `static/js/offer-events.js` when GA4 is available. `consulting_day_click` is currently captured inside `stripe_checkout_click` because the consulting day link uses a Stripe booking URL.

## Guardrails

- No campaign launch without owner approval.
- No monthly budget increase without owner approval.
- No daily budget increase above 20 percent without owner approval.
- No change that expands geography, audience, or broad match strategy without approval.
- The agent may recommend negatives, pause obvious waste, flag tracking errors, and prepare draft ads for review.
- If conversion tracking breaks, pause optimization recommendations until the tracking issue is resolved.
- Do not optimize toward clicks, CTR, or cheap form fills unless they correlate with qualified conversations.
- Keep a change log for every recommendation and every applied change.

## Weekly Operating Loop

1. Pull prior 7-day and prior 30-day performance from Google Ads, Meta Ads, GA4, Cal.com, Stripe, and the contact form.
2. Compare spend against monthly budget pacing.
3. Identify campaigns, ad groups, ad sets, keywords, search terms, creatives, and landing pages that are wasting spend.
4. Identify any signals worth scaling cautiously.
5. Review lead quality: booked calls, actual fit, offer interest, and disqualified reasons.
6. Recommend one to three changes with evidence, risk level, expected impact, and whether approval is required.
7. Update memory with decisions, outcomes, negatives, audience notes, offer notes, and new exclusions.

## Agent Review Prompt

Use this prompt when pasting weekly export data into an AI agent:

```text
You are the PPC Performance Agent for carney.wiki. Your job is to improve paid media performance without wasting budget or making unapproved high-risk changes.

Business memory:
- Primary conversion: qualified booked conversation through Cal.com.
- Secondary conversions: consulting day checkout, offer inquiry email, contact form submission, Stripe checkout start or purchase.
- Primary offers: PPC Performance Agent, AI Platform Owner's Rep, Proof Ops Sprint, Positioning + Pipeline Audit, Founder Content Engine.
- Do not optimize for cheap clicks or low-quality leads.
- Budget increases, new campaigns, targeting expansion, and major creative changes require owner approval.

Analyze the attached/exported Google Ads, Meta Ads, GA4, Cal.com, Stripe, and lead-quality data.

Return:
1. What changed since the prior period.
2. What is wasting spend.
3. What looks promising.
4. Tracking or attribution issues.
5. Three recommended actions max.
6. For each action: evidence, expected impact, risk level, approval required, and exact platform change.
7. Memory updates to carry forward.
```

## First 30-Day Pilot

- Week 1: Confirm conversion tracking, UTM structure, GA4 events, offer landing pages, and baseline reporting.
- Week 2: Launch only tightly scoped search and retargeting tests with low daily caps.
- Week 3: Review lead quality and search terms before increasing spend.
- Week 4: Decide whether to scale, pause, rewrite offers, adjust landing pages, or keep collecting signal.

## Needed Before Live API Execution

- Google Ads account access and developer/API path.
- Meta Business Manager access and Marketing API path.
- GA4 event confirmation for offer CTAs.
- Cal.com attribution capture or manual source review.
- Stripe checkout attribution review.
- Contact form conversion confirmation.
- A lightweight change log and approval process.

## Change Log

| Date | Change | Reason | Result |
| --- | --- | --- | --- |
| 2026-05-21 | Created owner-use v0 runbook. | Seed the internal PPC Performance Agent before running live campaigns. | Pending pilot. |
| 2026-05-21 | Added offer CTA and offer page GA4 events. | Give the PPC agent usable conversion and intent signals from carney.wiki. | Pending GA4 validation. |
