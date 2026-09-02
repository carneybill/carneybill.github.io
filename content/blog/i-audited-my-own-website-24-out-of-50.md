---
title: "I Audited My Own Website. It Scored 24 Out of 50."
subtitle: "The easy move was to argue with the score. I fixed the site instead."
excerpt: "VerifyHub found 143 missing descriptions, duplicate metadata, no recognized JSON-LD, and no buyer-validation hubs on carney.wiki. Here is what changed, what improved, and what the new score still cannot prove."
date: 2026-09-02
publishDate: 2026-09-02
author: "Bill Carney"
draft: false
images:
  - /blog/assets/trustproof.jpg
series:
  - "The AI-Era B2B Marketing Operator"
tags:
  - "VerifyHub"
  - "Proof Ops"
  - "Trust Stack"
  - "Website Strategy"
  - "B2B Marketing"
  - "Credibility"
categories:
  - "B2B Marketing"
  - "Marketing Operations"
  - "Trust & Brand"
see_also:
  - "blog/ai-era-website-verification-hub.md"
  - "blog/ai-critic-found-proof-ops.md"
  - "blog/ai-era-proof-as-inventory.md"
layout: single-sidebar
---

![Interconnected gold blocks representing a chain of evidence](/blog/assets/trustproof.jpg)

My website scored 24 out of 50.

That is a bad score. It is also exactly the kind of result people find easier to explain away than fix.

I had explanations. The site had grown over years. Hugo generated much of the metadata. Older pages followed older patterns. The first crawl stopped before it reached the whole sitemap.

All true. None of it made the site better.

I built VerifyHub to look at a website the way a skeptical buyer, search system, or AI assistant might: not as a collection of attractive pages, but as a body of claims that should be understandable, supported, and easy to inspect. Carney.wiki had to go first.

## The baseline was uncomfortable

The September 1 baseline sampled 150 of 331 sitemap URLs. It found 143 pages without standard meta descriptions, four duplicate title groups, six duplicate canonical pairs, no recognized JSON-LD, and none of the five buyer-validation page groups in the rubric.

The five groups were not exotic. They were the pages a serious buyer looks for when the decision carries risk: trust or security, implementation, comparison, pricing, and frequently asked questions.

I had written extensively about trust. The site still made buyers assemble too much of the evidence themselves.

That distinction matters. Having ideas about credibility is not the same as operating a credible website.

## The problem was in the system

Most of the metadata failures did not need 143 individual edits. They came from the shared head template.

That was good news because the repair could happen at the source. The template now uses a page's description or excerpt, then a page-type fallback. Indexable pages receive a canonical URL and valid JSON-LD. Taxonomy pages identify whether they are a tag, category, or series instead of publishing nearly identical titles.

I also added direct routes for trust practices, implementation, offer comparison, pricing, and frequently asked questions. Then I linked the verification record in the primary navigation and the buyer pages in the footer.

One older article had inherited an excerpt about an unrelated conference scandal. That was not a missing field. It was worse: present, valid-looking, and wrong. The audit forced that correction too.

On carney.wiki, the Hugo head-template repair cut detected missing descriptions 100% from September 1 to 2, 2026, from 143 in the capped baseline to 0 in the full crawl.

That sentence contains the result, timeframe, operating environment, and intervention. That is the minimum shape of a useful proof claim. A percentage floating on a page without those things is decoration.

## The second score was 48

The September 2 validation crawled all 339 sitemap URLs. It found no missing titles, no missing descriptions, no duplicate title groups, no duplicate canonical pairs, valid JSON-LD, and all five buyer-validation page groups.

The deterministic score moved from 24 to 48 out of 50.

That is the highest deterministic total available in the current rubric. The path-friction check tops out at four points, so 48 is the measured ceiling before assisted analysis.

It is not a claim that the site is perfect.

The baseline and validation runs covered different numbers of pages. The test measured published structure, metadata, routes, links, and response timing. It did not submit forms, measure conversion, prove delivery quality, or establish customer outcomes. The assisted checks for buyer decision clarity, Proof Ops, and credibility were unavailable during both runs, so those dimensions remained unscored rather than being guessed.

Those are real limits. Publishing them makes the result more useful, not less.

## Three things the score made me confront

The first was buyer decision clarity.

The homepage said I helped technical B2B companies with positioning, trust, and growth. It did not make the buying decision explicit enough. Who is the work for? What usually triggers it? Why choose Carney instead of an agency, an internal leader, a fractional executive, or a large consultancy? When is Carney the wrong choice?

I rewrote the homepage and About page to answer those questions directly.

Carney is an independent strategy-and-build practice for Series A, Series B, and mid-market B2B technology companies. It is useful when the product has outgrown its story, pipeline has stalled, a launch or repositioning is approaching, or AI has increased output without increasing buyer confidence.

It sits between advice and production. The work is more hands-on than a fractional CMO or CEO engagement, smaller and more direct than a traditional agency, and deliberately narrower than Accenture or Deloitte.

That makes Carney a poor fit when the company needs a permanent executive, a large production bench, global systems integration, or round-the-clock delivery. Those are legitimate needs. They call for a different operating model.

The second issue was Proof Ops.

Positioning makes the claim. Proof Ops substantiates it. The Trust Stack organizes that proof around buyer risk. Distribution makes the proof discoverable by humans and machines. Revenue outcomes tell you whether it mattered.

I had the concepts. The audit showed where the site needed a harder public record: the baseline, the intervention, the measured result, the source changes, and the limitations in one place.

The third issue was credibility.

Credibility is not a page full of adjectives about credibility. It is the willingness to name the evidence, link to the source, and state what the evidence cannot support.

That is why the raw before-and-after reports are public. It is also why this article includes the bad number in the headline.

## Why publish the miss?

A private success story can be polished until all the friction disappears. A public audit trail is less cooperative.

The baseline still shows 24. The after report still shows 48. The coverage difference is visible. The unavailable assisted checks are visible. The code change can be inspected.

This is a better example of Proof Ops than a victory lap because the reader does not have to take my interpretation on faith.

If I am going to tell clients their website should behave like a verification hub, mine has to go first.

## Inspect the record

Read the [public case study](/verification/carney-wiki/), open the [baseline report](/verification/carney-wiki/before/), and compare it with the [after report](/verification/carney-wiki/after/). The site's [trust and verification practices](/trust/) explain how claims and corrections are handled.
