---
title: "Data Governance Isn't Dead. It's Becoming AI Readiness."
subtitle: "The governance meeting is dying. The governance system is becoming mandatory."
excerpt: "Data governance is not dead. Governance theater is. In the agent era, inconsistent definitions become operational risk because AI scales ambiguity into confident decisions."
date: 2026-02-17
publishDate: 2026-02-17
author: "Bill Carney"
draft: false
images:
  - /blog/assets/crow.jpg
series:
  - "AI Governance and Data Systems"
tags:
  - "Data Governance"
  - "AI Readiness"
  - "AI Agents"
  - "Semantic Layer"
  - "Risk Management"
categories:
  - "Data & Analytics"
  - "AI & Automation"
  - "Trust & Brand"
layout: single-sidebar
---
![AI governance under pressure](/blog/assets/crow.jpg)

Data governance is not dead.

Governance theater is.

If you have ever sat through a data governance council where everyone agreed definitions matter and then immediately went back to shipping whatever, you know the problem.

The meeting was not governance.

It was a performance about governance.

That used to be annoying. In the AI era, it becomes dangerous.

Humans can often patch ambiguity with tribal knowledge. They know which dashboard is "really" used by finance, which field is stale, which Salesforce status is fiction, and which metric definition nobody says out loud.

AI systems do not know that. They average contradictions into confident answers.

And when those systems can take action, inconsistent definitions stop being a reporting nuisance and start becoming workflow risk.

## AI exposes the cracks faster than BI ever did

Traditional BI tolerated ambiguity because people provided the missing context.

AI scales the opposite behavior. It produces answers quickly, distributes them widely, and increasingly triggers downstream work.

When truth is split across CRM, product events, warehouse SQL, BI dashboards, and Slack lore, a model may still answer the question. It just may not answer the question you thought you asked.

If the model only summarizes, the risk is misinformation.

If the model can create tickets, send emails, recommend actions, update records, or route work, the risk becomes operational.

That is the difference.

## Treat metrics like APIs

One useful reframe is to treat metrics and definitions like APIs.

They need names, owners, versions, change control, consumers, documentation, tests, and a real deprecation path.

"Revenue" should not mean one thing in the board deck, another thing in the CRM, another thing in product analytics, and another thing in the AI assistant.

That does not mean every company needs a giant governance program.

It means the definitions that drive decisions need to behave like contracts.

AI readiness requires three additional pillars most teams underweight:

1. Identity and access governance for agents
2. Change control for definitions, prompts, and tools
3. Evidence through lineage, audit trails, and tests

Those are not optional extras. They are how governance moves from meeting notes into operating systems.

## 1. Agents need identity and access governance

If an agent can call internal APIs, query data, update records, or trigger workflows, it is a privileged actor.

Treat it that way.

Minimum viable agent identity management includes:

- a named owner and purpose for every agent
- least-privilege access by default
- scoped credentials per environment
- rotation and revocation routines
- approval paths for high-impact actions
- audit logs tied to the agent, not just the human who launched it

Without that, you have created a shadow service account that speaks natural language.

That is a bad operating model.

## 2. Prompt and tool changes are production changes

In agentic systems, a prompt is not just copy.

It is configuration.

And configuration is production.

If prompts drift, tool schemas expand, routing logic changes, or definitions get edited without review, the organization recreates the warehouse problem in a new layer.

Only now the issue is not just "SQL in the warehouse."

It is instructions in the agent.

A lightweight change-control loop is enough for many teams:

- version prompts, definitions, tool schemas, and routing logic
- require review for changes that affect customers, finance, compliance, or production workflows
- test whether a prompt change alters tool usage or output quality
- keep a rollback path
- require approval for irreversible actions

If infrastructure changes require review but agent behavior does not, the control model is incomplete.

## 3. Evidence matters more than dashboards

Executives do not want dashboards when something goes wrong.

Regulators do not want dashboards.

Incident response teams definitely do not want dashboards.

They want evidence.

Where did the data come from?

How was it transformed?

What did the agent see?

What tool did it call?

What output did it produce?

What controls were in place?

Could the same thing happen again?

That requires lineage, audit trails, evaluations, and logs that are useful enough to replay the event.

If the answer is "we think," you do not have governance.

You have hope.

## Clean definitions do not remove guardrails

Semantic clarity reduces risk. It does not eliminate it.

Even with clean definitions, agents still face prompt injection, tool abuse, confused-deputy behavior, data leakage, and overreach.

So AI readiness needs both sides:

- architectural consistency through definitions, metrics, contracts, and lineage
- operational safety through identity, access, change control, evidence, and approvals

One without the other is incomplete.

## A practical playbook

If you need a simple starting point, do this:

1. Choose one workflow, not an abstract AI strategy.
2. Define success and failure.
3. Lock the core definitions.
4. Ship with constrained tools and least privilege.
5. Require approval for irreversible actions.
6. Version prompts, tools, and definitions.
7. Log lineage, retrieval, tool calls, outputs, and evaluations.
8. Review the workflow on a schedule, not only after an incident.

That is not glamorous.

It is how you move fast without breaking trust.

## References

- [Data Governance is Dead - And we will now call it AI readiness - Camden Willeford](https://camdenwilleford.substack.com/p/data-governance-is-dead)
- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
- [ISO/IEC 42001 AI management systems](https://www.iso.org/standard/42001)

Photo by [Valentin Petkov](https://unsplash.com/@thefreak1337?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/black-bird-perching-on-brown-branch-FK5uXiCp9-Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).

