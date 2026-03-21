---
title: "AI Is Coming for Your Job"
subtitle: "That's Not a Bad Thing."
excerpt: "\"AI is coming for your job\" spreads because it lands on something real. But the more useful story is not simple replacement. It is the redesign of work itself -- with AI taking the repetitive, low-context, workflow-heavy tasks first, so people can spend more time on judgment, creativity, and decision-making."
date: 2026-03-17
publishDate: 2026-03-17
author: "Bill Carney"
draft: false
images:
  - /blog/assets/luck.jpg
  - /blog/assets/luck.jpg
tags:
  - "Future of Work"
  - "Workflow Design"
  - "Productivity"
  - "AI Governance"
  - "NIST"
  - "OWASP"
  - "StaffOps"
categories:
  - "AI & Automation"
  - "Leadership & Career"
  - "Marketing Operations"
see_also:
  - "blog/custom-backend-myth-after-ai.md"
  - "blog/balance.md"
  - "blog/growthai.md"
layout: single-sidebar
---
![stack](/blog/assets/luck.jpg)

# AI Is Coming for Your Job. That's Not a Bad Thing.

If there is any Luck of the Irish in this story, it is not that AI magically saves everyone. It is that we may finally have a good excuse to hand the machines the worst parts of work first. Let the bots chase status updates, wrestle stale spreadsheets, and babysit workflow nonsense. Humans can keep the parts that actually require judgment and a pulse.

"AI is coming for your job" is one of those phrases that spreads because it lands on something real.

People hear it and think layoffs. Replacement. A machine taking over the part of life that pays the bills and gives work its structure. That fear is understandable. Major technology shifts have always changed labor markets, and this one is moving fast enough that the anxiety is not irrational. The IMF has argued that AI is likely to affect a very large share of jobs globally, especially in advanced economies where more work is cognitive and digitally mediated. The ILO's 2025 update makes a similar point, but with an important nuance: exposure does not automatically mean full automation, and the more realistic story is transformation of tasks inside jobs rather than simple job extinction.

That nuance matters because most people do not actually sell a job title. They sell judgment, responsiveness, domain knowledge, communication, taste, prioritization, and trust. The problem is that those high-value human contributions are often buried under a mountain of low-value operational work. Too many jobs have quietly become a bundle of updates, formatting, coordination, handoffs, approvals, and system maintenance. We call it work because it sits on the calendar and fills the week, but a surprising amount of it is really workflow debt. AI is not just coming for "jobs." It is coming first for the repetitive, structured, low-context tasks that organizations have tolerated for years because software never quite closed the gap.

## The Better Frame Is Human with AI

That is why I do not think the most useful frame is human versus AI.

The better frame is human with AI, inside a well-designed operating system for work.

There is already good evidence that AI can increase productivity when used as an assistant rather than as a magical replacement fantasy. In the NBER paper *Generative AI at Work*, researchers studying more than 5,000 customer support agents found a 14% average increase in productivity from access to a generative AI assistant, with much larger gains for novice and lower-skilled workers. That is a meaningful result, but the deeper implication is even more interesting: AI often creates leverage by compressing learning curves, reducing friction, and helping people perform routine parts of the job better and faster. It does not magically remove the need for people; it changes what the highest-value person in the loop should spend time on.

At the same time, the gains are not uniform and they are not infinite. Harvard Business School's work on what it calls the "jagged technological frontier" shows that AI can improve performance significantly on some knowledge tasks while failing unpredictably on others. In other words, the future is not "AI is good at everything." The future is "AI is excellent in some parts of the workflow, mediocre in others, and dangerous when companies cannot tell the difference." That is exactly why thoughtful deployment matters more than hype.

## Workflow Comes First

That is also a big part of how I think about the StaffOps.AI project I'm building.

I am not interested in AI as just another text box that produces plausible words on demand. That market is already crowded, and frankly, it is not the hard part. The hard part is creating digital workers that can operate inside real business workflows with the right context, the right permissions, and the right boundaries. The hard part is making AI useful after the demo.

That means starting with workflow.

If you want AI to do meaningful work in a business, it needs to know where it sits in the process. It needs to understand what happened before, what step comes next, what "done" looks like, what standard it is being held to, and when it needs to stop and ask for review. Without workflow, AI tends to become either a toy or a source of chaos. You get nice drafts, but not dependable execution. You get enthusiasm, but not operational trust.

## Context Turns Output into Useful Work

That means context matters too.

A generic AI answer can be impressive for a minute, but useful work is almost always context-specific. Good work depends on who the customer is, what the company sells, what the team has already decided, what data is current, what tone is acceptable, what exceptions exist, what systems are authoritative, and what actions are actually allowed. Context is what separates "sounds smart" from "is actually usable." When people say AI made a mistake, what they often mean is that the system lacked sufficient business context, not just that the model lacked raw intelligence.

## Security Has to Move to the Center

And once AI starts touching real operations, security has to move to the center of the conversation.

This is where the discourse often gets sloppy. A lot of AI commentary still acts as if the model is the product. In practice, the model is only one layer in a larger system that includes identity, access, prompt handling, retrieval, tool use, output validation, auditability, and escalation logic. NIST's AI Risk Management Framework and its Generative AI Profile are valuable precisely because they push organizations to think about trustworthiness and risk management across the lifecycle rather than treating safety as a thin wrapper added at the end.

That system view matters because the risks are not theoretical. OWASP's guidance on LLM and generative AI application security highlights prompt injection, sensitive information disclosure, improper output handling, and excessive agency as core risks. Translated into plain English, that means an AI system can be manipulated by malicious or simply messy input; it can expose data it should not expose; it can pass unsafe or unvalidated output into downstream systems; and it can be granted too much autonomy relative to its reliability. Those are not edge cases. They are design concerns.

## Guardrails Are What Make AI Usable

That is why guardrails really matter.

Guardrails are not there to make AI less useful. They are what make AI usable in the first place.

A serious AI worker should know what role it is performing. It should know what data it can and cannot access. It should operate with least-privilege permissions, not broad access by default. It should pass outputs through checks before triggering downstream actions. It should log what it did and why. It should know when confidence is low. It should know when human approval is required. And it should not be able to improvise its way into sensitive systems just because someone wrote a clever prompt. NIST emphasizes governance, mapping, measurement, and management of AI risks; OWASP emphasizes secure handling of inputs, outputs, permissions, and autonomy. Together, they point toward the same conclusion: responsible AI is not just smart generation, it is constrained execution.

## The Real Divide Is How Companies Design Work

This is where I think a lot of the public conversation about "AI taking jobs" misses the plot.

The real split will not simply be between companies that adopted AI and companies that did not. It will be between companies that treated AI like a cheap labor shortcut and companies that treated AI like a new operating layer.

The first group will automate recklessly, create risk, frustrate employees, damage trust, and then wonder why the rollout stalled.

The second group will redesign work more intelligently. They will identify which tasks are repetitive, which decisions are high risk, which workflows need approvals, which contexts matter, which roles should stay deeply human, and where AI can remove friction without removing accountability. They will use AI to expand capacity, not just to slash headcount. That is a much more durable strategy, and it aligns better with what the evidence so far actually suggests about productivity and task augmentation.

## Learn to Work with AI, Not Around It

That is also why I think "learn to work with AI" is better advice than either panic or denial.

The people who benefit most from this shift are unlikely to be the people who use AI for one-off novelty. They will be the people who learn how to structure work around it. They will know how to define a workflow clearly, how to break a role into tasks, how to distinguish judgment work from administrative work, how to provide the right context, how to review outputs critically, and how to build reliable human-in-the-loop processes. In many organizations, that skill set is going to matter as much as classic software fluency did in earlier eras.

And that is the optimistic part of the story.

Because if AI takes the worst parts of many jobs first, that is not necessarily dehumanization. It may be the opposite.

It may mean:

- fewer people spending their best hours chasing updates
- fewer teams buried in copy-paste coordination
- fewer highly paid employees acting as middleware between disconnected systems
- fewer managers confusing status collection for leadership
- fewer marketers trapped in mechanical production instead of message and strategy
- fewer operators drowning in routine work that software should have handled years ago

Used well, AI can return people to the parts of work that are more human and more valuable: judgment, creativity, persuasion, coaching, synthesis, service, accountability, and decision-making under uncertainty. The promise is not that every person becomes optional. The promise is that more of a person's day can be spent on what actually warrants a person.

Of course, some roles will change sharply. Some categories of work will shrink. That is real. The ILO's latest update continues to show particularly high exposure in clerical occupations, while also noting expanding exposure in some professional and technical roles as model capabilities improve. The point is not to deny disruption. The point is to describe it accurately. A useful conversation about the future of work has to hold both truths at once: AI will create real pressure on some forms of labor, and the best response is not wishful thinking but redesign.

## Conclusion

So when I say "AI is coming for your job, and that's not a bad thing," I do not mean every outcome will be painless.

I mean the right ambition is not to preserve every broken workflow exactly as it is.

The right ambition is to build better ones.

That is the lens I bring to StaffOps.AI. Not AI as a novelty layer. Not AI as a replacement slogan. AI as a practical workforce multiplier that can operate inside defined workflows, with real business context, with strong security, and with clear guardrails. Digital workers should not be reckless interns with unlimited access. They should be reliable teammates operating within policy.

That is the future I find compelling.

Not a company with fewer humans because leadership got excited about automation theater.

A company where:

- humans spend less time on friction and more time on contribution
- workflow is designed intentionally
- context is carried forward instead of recreated in every handoff
- AI can act, but only within boundaries
- security is built in from the start
- the machine handles more of the busywork, and the people do more of the work that actually matters

AI is coming for your job.

Let it come for the worst parts first.

If we build this well, that will not be the beginning of irrelevance.

It will be the beginning of better work.

## Sources

1. International Monetary Fund, *Gen-AI: Artificial Intelligence and the Future of Work* (January 14, 2024).
2. International Labour Organization, *Generative AI and jobs: A 2025 update* (May 20, 2025).
3. Erik Brynjolfsson, Danielle Li, and Lindsey R. Raymond, *Generative AI at Work*, NBER Working Paper 31161.
4. Fabrizio Dell'Acqua et al., *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality*, Harvard Business School.
5. NIST, *AI Risk Management Framework* and *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*.
6. OWASP Gen AI Security Project, *Top 10 Risks for LLMs and Gen AI Apps*, including prompt injection, improper output handling, and excessive agency.

Photo by <a href="https://unsplash.com/@pattib?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patti Black</a> on <a href="https://unsplash.com/photos/a-group-of-green-plants-3yDhl-faMw8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
