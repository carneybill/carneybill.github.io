---
title: "Your AI Agent Is a Toddler With Root Access"
subtitle: "Agentic AI is powerful because it can act. That is also why it needs real controls."
excerpt: "AI agents are moving from demos into production workflows. Once they call APIs, write records, and trigger business processes, they become part of the control plane."
date: 2026-02-10
publishDate: 2026-02-10
author: "Bill Carney"
draft: false
images:
  - /blog/assets/toddler.jpg
series:
  - "AI Governance and Data Systems"
tags:
  - "AI Agents"
  - "Agentic AI"
  - "AI Security"
  - "Zero Trust"
  - "AI Governance"
categories:
  - "AI & Automation"
  - "Data & Analytics"
  - "Trust & Brand"
layout: single-sidebar
---
![Your AI agent is a toddler with root access](/blog/assets/toddler.jpg)

Agentic AI is no longer a demo.

It calls APIs.

It writes to databases.

It triggers workflows that affect customers, revenue, and operations.

That is powerful.

It is also a fundamental shift in risk.

Once an AI system moves from advisory to execution, it becomes part of the control plane. Whether the organization admits that or not is mostly irrelevant. The risk already changed.

## Agents expand the attack surface overnight

The moment an AI system can execute actions, it becomes a privileged actor.

Unlike a traditional service account, it interprets untrusted input, reasons probabilistically, and decides which tools to invoke.

Prompt injection exploits that exact gap.

What started as a chatbot curiosity now applies to systems that ingest documents, scrape web content, process tickets, read email, retrieve knowledge base content, and then act.

That means a single poisoned input can become operational.

A document.

A ticket.

An API response.

A synced web page.

The risk is not malice alone.

The risk is misplaced confidence at machine speed.

## Speed is not safety

Traditional software gives you repeatability.

LLMs give you behavioral ranges.

Two similar prompts can produce different outputs. Add tools, retries, delegation, memory, or chained agents, and reproducibility becomes conditional.

That complicates testing, auditability, and incident response.

For engineers, the same request may not always produce the same path.

For executives, that breaks comfortable assumptions about predictability.

If AI is automating a core process, compensating controls are required:

- execution boundaries
- approval thresholds
- rollback options
- containment paths
- detailed observability

Logging alone is visibility.

It is not safety.

## Data leakage is still the common failure

AI does not make sensitive data less sensitive.

It creates more places for that data to travel: prompts, completions, embeddings, logs, summaries, vector stores, vendor APIs, files, and downstream systems.

Without classification, redaction, and egress controls, sensitive information will move into places the organization did not intend.

For engineers, this creates persistent risk artifacts.

For executives, it creates regulatory and reputational exposure.

AI systems remember and redistribute information in ways contracts and policies cannot always unwind.

## IAM was not designed for agents

Most organizations understand human identities and service accounts.

AI agents blur the boundary.

Who owns the agent's credentials?

How is access scoped?

How are secrets rotated?

Can the agent delegate?

Can it chain actions across systems?

Can it use one user's authority to affect another user's data?

Without clear answers, organizations accidentally create always-on, high-privilege actors outside normal identity assumptions.

That is not an implementation bug.

It is a governance gap.

## Ownership is not bureaucracy

When an AI workflow causes harm, "the model did it" is not an acceptable explanation.

Every production agent needs:

- a named owner
- a defined scope
- documented tools
- limited permissions
- test coverage
- monitoring
- a kill switch

Ownership is how teams move fast without guessing who is responsible when something goes wrong.

## Policy debt grows fast

AI deployed as infrastructure inherits infrastructure obligations: auditability, change management, incident response, privacy, compliance, and security review.

Skipping governance early feels efficient.

It usually creates expensive retroactive reconstruction when someone later asks how the system makes decisions, what data it used, or why it took an action.

The cleanup phase is always slower than the design phase.

## Drift turns pilots into production risks

That small automation rarely stays small.

Prompts evolve.

Tools are added.

Data sources expand.

Users find new use cases.

Without versioning, testing, and periodic risk review, a safe pilot quietly becomes a critical system without critical-system controls.

Drift is not failure.

It is what happens when systems succeed.

## Zero trust is the practical baseline

For agents, zero trust is not a slogan.

It is a useful operating model.

Treat every prompt, tool call, identity, retrieved document, and downstream interaction as untrusted until verified in context.

That means:

- continuous authentication
- least-privilege authorization
- explicit policy checks per action
- tool allowlists
- retrieval boundaries
- output controls
- full observability for decision paths

The agent should not get broad access because it is helpful.

Helpful is not a permission model.

## The real takeaway

AI agents should be treated like infrastructure.

Infrastructure is defined by controls, standards, monitoring, and governance, not just throughput.

The teams that win will not simply be the ones that automated first.

They will be the ones that automated safely:

- constrained agents, not free-roaming ones
- least-privilege access, not convenience credentials
- human oversight where impact is irreversible
- clear ownership when things go wrong
- evidence that can survive review

Moving fast is table stakes.

Moving fast without breaking trust is the actual advantage.

## References

- [Prompt Injection Explained - Simon Willison](https://simonwillison.net/2023/May/11/prompt-injection/)
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [Prompt injection attacks may be impossible to fully mitigate - UK NCSC](https://www.ncsc.gov.uk/news/prompt-injection-attacks)
- [On the Risks of Autonomous LLM Agents](https://arxiv.org/abs/2307.15043)
- [Keep Your AI Claims in Check - FTC](https://www.ftc.gov/business-guidance/blog/2023/04/keep-your-ai-claims-check)
- [AI and Data Protection - ICO](https://ico.org.uk/for-organisations/ai/)
- [OECD AI Principles](https://www.oecd.org/ai/principles/)
- [NIST Zero Trust Architecture SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final)
- [Securing AI Agents with Zero Trust](https://www.youtube.com/watch?v=d8d9EZHU7fw)

Photo by [Zachary Kadolph](https://unsplash.com/@zacharykadolph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-young-boy-with-blue-hair-and-face-paint-I8djvI-wCrY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

