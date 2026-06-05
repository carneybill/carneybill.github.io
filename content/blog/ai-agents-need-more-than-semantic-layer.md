---
title: "AI Agents Need More Than a Semantic Layer"
subtitle: "Why enterprise agents need working memory, semantic memory, procedural memory, and episodic memory"
excerpt: "A semantic layer helps AI understand business meaning. But useful enterprise agents need more than meaning. They need memory, procedures, governance, tool access, and a record of what has worked before."
date: 2026-06-01
publishDate: 2026-06-01
author: "Bill Carney"
draft: false
images:
  - /blog/assets/goldfish.jpg
series:
  - "The AI-Era B2B Marketing Operator"
tags:
  - "AI agents"
  - "semantic layer"
  - "cognitive architecture"
  - "MCP"
  - "A2A"
  - "agentic AI"
categories:
  - "AI & Automation"
  - "Data & Analytics"
  - "Marketing Operations"
layout: single-sidebar
---
![goldfish in an aquarium](/blog/assets/goldfish.jpg)

A semantic layer is not an AI strategy.

It is one important part of one.

That distinction matters because a lot of companies are still treating AI like a smarter search box. They connect a model to documents, databases, dashboards, SaaS tools, or internal knowledge bases and expect useful work to fall out the other side.

Sometimes it does.

More often, the model gives a plausible answer, misses the business logic, forgets the prior context, or takes an action without understanding how the work is actually supposed to get done.

That is not just an AI problem.

It is an architecture problem.

A recent AtScale post argues that SaaS companies need a semantic layer for AI. I agree with the core point. If AI is going to reason over business data, it needs access to business meaning, not just raw tables, fields, and application objects.

Metrics need definitions. Entities need relationships. Revenue, pipeline, churn, account health, utilization, inventory, claims, and customer behavior need a shared business vocabulary.

Without that layer, the AI is forced to guess. And when the model has to guess which definition is authoritative, which field is trusted, or how one business object relates to another, it may still produce a confident answer.

That is the uncomfortable part.

The answer can sound reasonable and still be wrong in a way that creates operating risk.

But here is the thing: meaning is not the same as action.

A semantic layer can tell an agent what pipeline coverage means. It does not automatically tell the agent what to do when pipeline coverage falls below target in the enterprise segment for two consecutive weeks.

That requires more than semantics.

It requires memory, procedures, context, feedback, permissions, and governance.

Another way to frame it: most agent failures are either goldfish problems or elephant problems.

The goldfish problem is short memory. The agent cannot hold the current goal, constraint, approval, or recent decision long enough to finish real work.

The elephant problem is long memory. The agent has no durable record of what the business means, what workflow to follow, what happened before, or what lessons should carry forward.

Good enterprise agents need both. They need enough goldfish memory to stay coherent in the moment and enough elephant memory to learn from the organization's operating history.

## The semantic layer is necessary, but not sufficient

The strongest version of the semantic-layer argument is not really about data engineering.

It is about business meaning.

A good semantic layer tells the AI what things mean inside the business. It helps prevent every team, tool, and dashboard from inventing its own definition of the same metric. It gives an agent a better chance of answering questions like:

What is a qualified opportunity?

What counts as expansion revenue?

Which accounts are at risk?

What does utilization mean here?

Which activities influenced pipeline versus created pipeline?

That is valuable. For SaaS companies, it may become part of the product moat. The product is no longer just the workflow. The product is also the encoded business understanding behind the workflow.

But a semantic layer mostly answers one question:

What does this mean?

Enterprise agents need to answer a harder set of questions.

What am I doing right now?

What does this concept mean in this domain?

What workflow should I follow?

What happened last time?

What am I allowed to know, remember, share, and do?

That is a different architecture.

## AI agents need a memory architecture

The paper "Cognitive Architectures for Language Agents" offers a useful way to think about this. The authors describe language agents as systems built around memory, action, and decision-making. They distinguish between short-term working memory and several types of long-term memory: semantic, episodic, and procedural.

That maps cleanly to what enterprise AI systems actually need.

A useful agent should not be one giant prompt. It should feel more like an operating system for work.

It needs temporary context for the task at hand. It needs governed business knowledge. It needs reusable skills. It needs a record of what happened before. And it needs a decision process for choosing what to do next.

That is why the goldfish-and-elephant distinction is useful. Working memory keeps the agent from losing the thread right now. Long-term memory keeps the agent from starting over every time.

The simple version looks like this:

- Working memory: What am I doing right now?
- Semantic memory: What do these concepts mean in my domain?
- Procedural memory: What skills and workflows am I allowed to perform?
- Episodic memory: What have I experienced before, and what worked?

The power is not in any one memory type.

The power is in the combination.

## Working memory is the live operating context

Working memory is the agent's active context.

It includes the current request, current goal, relevant constraints, recent observations, open decisions, and the state of the task being performed.

For a marketing agent, working memory might include the campaign being planned, the audience being targeted, the current budget, the product message being tested, the deadline, the open approvals, and the most recent instruction from the human owner.

Working memory is short-lived, but it is essential. Without it, the agent cannot maintain coherence across a multi-step task. It may answer one question correctly and then lose the plot three steps later.

That is why context windows alone are not enough.

A long context window may hold more information. But working memory is about structure, not just volume. The agent needs to know what is active, what is relevant, what has already been decided, and what should be ignored.

For business AI, this is where the live operating context sits.

## Semantic memory is where meaning lives

Semantic memory is where the semantic layer fits.

This is the agent's structured knowledge about the business: definitions, entities, relationships, metrics, taxonomies, policies, products, customers, roles, segments, and rules.

For a SaaS company, semantic memory may include the definition of annual recurring revenue, net revenue retention, gross revenue retention, pipeline, churn, expansion, and activation. It may define the relationship between accounts, opportunities, contacts, products, subscriptions, tickets, and usage events.

It may also include the company's official segmentation model, product hierarchy, approved claim language, data governance rules, and the distinction between a marketing qualified lead, a sales accepted lead, and a sales qualified opportunity.

This is where the AtScale argument is strongest.

If AI does not understand the business meaning of the data, it cannot reliably reason over the business. It may retrieve a field called amount without knowing whether that means booked revenue, forecast revenue, invoice amount, contract value, or opportunity value.

A semantic layer reduces that ambiguity.

It also reduces one of the common conditions that leads to hallucination: uncertainty disguised as confidence. When business meaning is not explicit, the model may infer meaning from field names, nearby text, or statistical patterns.

Sometimes that inference is right.

Sometimes it is dangerously wrong.

But semantic memory should not be confused with all of memory. It is the "what things mean" layer. It is not the "what should I do," "what happened last time," or "how do I perform this task" layer.

## Procedural memory is where AI becomes operational

Procedural memory is the missing layer in many AI strategies.

This is where skills live.

A skill is not just a prompt. It is a reusable procedure with defined inputs, steps, tools, checks, outputs, and escalation rules.

In human terms, procedural memory is the difference between knowing what a campaign is and knowing how to launch one.

For a marketing operations agent, procedural memory might include skills for building a campaign brief, creating a launch workback plan, reviewing a landing page against claim policy, generating a weekly pipeline gap analysis, preparing a sales follow-up sequence, or checking whether a case study has enough proof to support a claim.

For a finance agent, it might include invoice reconciliation, anomaly detection, close preparation, or budget variance explanation.

For a customer success agent, it might include renewal-risk analysis, support-history summarization, QBR preparation, or next-best-action recommendations based on usage and ticket patterns.

This is where governance becomes critical.

Some procedures should be read-only. Some should require approval. Some should be allowed to draft but not send. Some should be allowed to recommend but not execute. Some should never be available to the agent at all.

A semantic layer can tell an agent what churn risk means.

Procedural memory tells it how to investigate churn risk, what evidence to gather, what playbook to follow, and when to escalate to a human.

That is the operating difference.

## Episodic memory is where experience starts to compound

Episodic memory stores experience.

It is the long-term record of prior interactions, decisions, outcomes, campaigns, customer conversations, approvals, mistakes, exceptions, and lessons learned.

For business AI, episodic memory might include prior campaigns, accepted and rejected recommendations, sales objections, legal approvals, account interactions, renewal cycles, implementation delays, budget exceptions, and performance outcomes.

This is where AI can start to improve.

But there is an important caveat: episodic memory does not automatically equal learning.

It becomes learning only when the agent can store the episode, retrieve the right prior episode at the right moment, reason over what happened, and convert that experience into better future action.

Otherwise, it is just a log with better branding.

In marketing terms, episodic memory lets the agent learn that one campaign angle produced meetings but weak opportunities, that legal rejected a certain claim pattern, that enterprise buyers responded better to implementation-risk content than ROI language, or that a particular follow-up sequence improved conversion.

The agent is no longer starting from a generic playbook.

It is learning from the organization's actual operating history.

## A practical example

Imagine an AI agent helping a VP of Marketing diagnose a pipeline gap.

The current request is simple:

"Explain why enterprise pipeline is below target this month and recommend actions before the forecast call."

Working memory holds the live task: the request, deadline, segment, constraints, open questions, and current state of the analysis.

Semantic memory defines pipeline, enterprise segment, target accounts, opportunity stages, campaign attribution, source definitions, and what "below target" means in this business.

Procedural memory supplies the analysis skill: pull pipeline by segment, compare to target, inspect conversion by stage, check campaign activity, review sales follow-up, generate recommendations, and flag confidence level.

Episodic memory adds experience: the same pattern happened two quarters ago when webinar follow-up lagged, paid search spend shifted too late, and the enterprise nurture sequence underperformed.

Now the agent can do more than summarize a dashboard.

It can reason in context, follow a repeatable procedure, learn from prior episodes, and recommend a next action.

That is the difference between AI as a reporting layer and AI as an operating layer.

## Where MCP and A2A fit

This is where Model Context Protocol (MCP) and Agent2Agent (A2A) enter the conversation.

They matter.

But they are not memory types. They are connection and coordination protocols.

MCP is best understood as an agent-to-tool and agent-to-context connection layer. It helps AI applications connect to external systems, data sources, tools, and workflows. In this framework, MCP supports retrieval and grounding. It lets an agent reach into systems like customer relationship management, project management, analytics, file storage, support, code, or internal databases.

A2A is different. A2A is an agent-to-agent coordination layer. It helps one agent communicate with another agent, exchange information, and coordinate work across systems.

The distinction is simple.

MCP connects agents to systems.

A2A connects agents to agents.

Memory makes each agent useful.

Governance decides what each agent is allowed to know, remember, share, and do.

Connection is not cognition.

A badly designed agent with MCP access is just a more dangerous chatbot with better reach. A swarm of agents connected by A2A is not automatically an operating system. Without memory, procedures, permissions, evaluation, and audit trails, it is just distributed improvisation.

## The second agent can have memory too

A2A does not mean one smart agent talks to one dumb service.

In the better version, the second agent can also be a full cognitive agent with its own working, semantic, procedural, and episodic memory.

A marketing agent may maintain working memory for the current campaign, semantic memory for funnel definitions and ideal customer profile, procedural memory for campaign execution skills, and episodic memory from prior launches.

A finance agent may maintain working memory for the current budget request, semantic memory for accounting definitions, procedural memory for approval and variance-analysis workflows, and episodic memory from prior budget cycles.

A legal agent may maintain working memory for the current claim review, semantic memory for approved language and risk categories, procedural memory for review workflows, and episodic memory from prior rejected claims, exceptions, and approvals.

A2A is the protocol that lets those agents collaborate. It is not a substitute for memory. It is the coordination layer between memory-bearing agents.

That creates a product and governance problem.

Memory does not have to be centralized. In many enterprise systems, it probably should not be.

A legal agent should not have the same episodic memory as a sales agent. A finance agent should not have the same procedural permissions as a marketing agent. A customer success agent may need account history that a content agent should never see.

Once agents have their own memories, A2A becomes a trust boundary.

When one agent asks another for help, the system needs to decide what context can be shared, what should remain private, whether the receiving agent can store the interaction, whether it can use that episode to improve future behavior, whether it can pass the request to a third agent, and whether it can take action or only recommend action.

Those are not just protocol questions.

They are governance, security, and product-design questions.

## Why this matters for SaaS companies

SaaS companies are under pressure to show that AI is not just a feature wrapper.

Customers are starting to ask harder questions.

Does the AI understand our business?

Can it act safely inside our workflow?

Can it explain its recommendations?

Can it improve based on our history?

Can it use our definitions instead of generic internet definitions?

Can it coordinate with other agents?

Can it respect approvals, permissions, and audit requirements?

A semantic layer helps with business meaning. MCP helps with tool and system access. A2A helps with agent coordination.

But the bigger strategic question is whether the product has an agent-ready architecture.

That means the product needs to expose more than data. It needs to expose meaning, skills, memory, coordination, and governance.

The strategic questions are now:

- What is our semantic layer, what native skills should our product expose, what episodic memory should our AI preserve, and what working memory does the agent need during live work?
- Which actions are allowed, restricted, or approval-gated, and which memories are customer-specific, tenant-specific, role-specific, or global?
- Which memories can the agent write to, which are read-only, and which must be forgotten?
- Which tools are available through MCP, which agents are available through A2A, and what context can agents share with each other?
- What must be logged, reviewed, approved, or explained?

Those are not purely technical questions anymore.

They are product strategy questions.

## The real moat is operational memory

The semantic layer may become a SaaS superpower.

But the broader moat is operational memory.

The best AI systems will know what the business means, how the work gets done, what is happening right now, and what happened before. They will also know which tools they can access, which agents they can coordinate with, and where the governance boundaries sit.

That is how AI moves from chat to execution.

For marketing teams, this distinction matters a lot.

Marketing does not suffer from a lack of content, dashboards, or tools. It suffers from fragmented execution. Work is scattered across calendars, spreadsheets, project boards, documents, analytics tools, customer relationship management fields, Slack threads, and agency updates.

An AI marketing operator needs all four memory types.

It needs working memory to manage the current campaign.

It needs semantic memory to understand the company's ideal customer profile, funnel stages, segments, offers, claims, metrics, and attribution model.

It needs procedural memory to execute repeatable marketing skills.

It needs episodic memory to learn from prior launches, approvals, misses, wins, and postmortems.

It may use MCP to access campaign systems, analytics, project plans, documents, dashboards, and customer data. It may use A2A to coordinate with finance, legal, sales operations, customer success, or analytics agents.

Without that full architecture, AI becomes another layer of commentary on top of already fragmented work.

With it, AI can become part of the operating system.

## The bottom line

The semantic layer matters.

It gives AI a shared understanding of business meaning. It reduces one of the major causes of hallucination: forcing the model to infer context that should have been explicit.

But AI agents need more than meaning.

They need current context, governed knowledge, reusable procedures, lived experience, tool access, agent coordination, and controls.

The next phase of enterprise AI will not be won by companies that simply connect a large language model to their application.

It will be won by companies that design memory architectures around how work actually happens.

Working memory tells the agent what it is doing right now.

Semantic memory tells the agent what concepts mean in the domain.

Procedural memory tells the agent what skills and workflows it is allowed to perform.

Episodic memory tells the agent what it has experienced before and what worked.

MCP connects agents to tools and systems.

A2A connects agents to other agents.

Governance decides what each agent can know, remember, share, and do.

Put together, those layers turn AI from a clever interface into a system that can operate, learn, coordinate, and improve.

That is where the real enterprise value will come from.

## Sources and references

1. Theodore R. Sumers, Shunyu Yao, Karthik Narasimhan, and Thomas L. Griffiths, "Cognitive Architectures for Language Agents," Transactions on Machine Learning Research, 2024.
2. AtScale, "Semantic Layer SaaS AI Strategy," AtScale blog.
3. Anthropic, "Introducing the Model Context Protocol," 2024.
4. Model Context Protocol documentation, "What is the Model Context Protocol?"
5. Google Developers Blog, "Announcing the Agent2Agent Protocol," 2025.
6. Patrick Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," Advances in Neural Information Processing Systems, 2020.
7. Shunyu Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," 2022.
8. Noah Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning," 2023.
9. Joon Sung Park et al., "Generative Agents: Interactive Simulacra of Human Behavior," 2023.
10. Guanzhi Wang et al., "Voyager: An Open-Ended Embodied Agent with Large Language Models," 2023.

Photo by [shuvrodeep dutta](https://unsplash.com/@skypeople101?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-close-up-of-a-goldfish-in-an-aquarium-XyYXk3wRTT4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
