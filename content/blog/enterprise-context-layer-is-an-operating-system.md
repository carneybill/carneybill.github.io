---
title: "The Enterprise Context Layer Is an Operating System"
subtitle: "LLMs reason. RAG grounds. Agents execute. MCP integrates. The context layer governs what the system knows, does, remembers, and improves."
excerpt: "Most companies are buying LLMs, RAG, agents, and MCP like separate products. They are really four layers of one architecture. The missing enterprise layer is governed context: meaning, skills, security, and recursive learning."
date: 2026-07-01
publishDate: 2026-07-01
author: "Bill Carney"
draft: false
images:
  - /blog/assets/sprawl.jpg
series:
  - "AI Governance and Data Systems"
tags:
  - "Enterprise AI"
  - "Context Layer"
  - "MCP"
  - "AI Agents"
  - "AI Governance"
  - "Semantic Layer"
categories:
  - "AI & Automation"
  - "Data & Analytics"
  - "Trust & Brand"
layout: single-sidebar
---
![Enterprise AI architecture and tool sprawl](/blog/assets/sprawl.jpg)

Most companies are buying four AI products.

They are actually building one system.

LLMs.

RAG.

Agents.

MCP.

These terms get thrown around like they are interchangeable. They are not. They are different layers in the same architecture.

LLMs reason.

RAG grounds.

Agents execute.

MCP integrates.

But none of those, by themselves, gives the enterprise what it really needs: governed context that can be trusted, secured, reused, and improved over time.

That is where the enterprise context layer comes in.

And I think the term is useful only if we are very clear about what it has to do in practice.

## The four visible layers

The first layer is the LLM.

The LLM is the reasoning engine. It reads, writes, codes, summarizes, compares, and thinks through problems in language.

But the model is not the business.

It does not know your Q2 pipeline, your board deck, your customer risk, your current pricing exception, or the policy that changed last Thursday. Generic AI sounds smart because the language is good. It still misses reality when the business context is missing.

The second layer is RAG.

RAG gives the reasoning engine memory it can retrieve from: documents, CRM records, support tickets, dashboards, policies, code, contracts, and knowledge bases.

This moves answers from plausible to grounded.

Not because the model suddenly became smarter.

Because the system got connected to reality.

The third layer is agents.

Agents add execution. AI stops only answering and starts doing: researching, updating Salesforce, routing approvals, drafting follow-up, reconciling exceptions, checking status, and carrying a goal across multiple steps.

That is where the stakes change.

Loose permissions become exposure.

Vague instructions become wrong outcomes.

Messy workflows become automated confusion.

Agents do not fix broken processes. They scale them.

The fourth layer is MCP.

Model Context Protocol is the integration layer. It gives AI systems a standard way to talk to tools, data sources, and workflows. Anthropic introduced MCP in late 2024, and the protocol is now showing up across major AI and cloud ecosystems.

That matters.

Without an integration layer, intelligence stays trapped in silos.

With one, AI starts to behave like infrastructure.

But here is the uncomfortable part: infrastructure without governance is just reach.

And reach without control is how small mistakes become enterprise incidents.

## The context layer is the missing operating layer

Prukalpa's article on the enterprise context layer frames the core problem well: agents need knowledge, expertise, and norms.

Knowledge is what the business means.

Expertise is how work gets done.

Norms are what is allowed.

That framing is useful. But the comments on the piece surfaced the practical problem: if this is hard for an individual operator with a handful of tools, how is an enterprise supposed to implement it across catalogs, databases, systems of record, workflows, agents, permissions, and tribal knowledge?

That is the right question.

The answer is that a context layer cannot be a vague abstraction.

It has to become an operating system for enterprise AI.

Not an operating system in the literal software sense. An operating system in the organizational sense: the governed layer that defines what AI can know, which procedures it can run, what it is allowed to do, what it must not do, what it learns, and who is accountable when it changes.

## A semantic core is necessary

One comment described a "semantic core": a governed model of organizational intent between strategy and execution.

That is the right place to put the idea.

Most transformation fails somewhere between the strategy deck and the workflow.

Leadership says "move upmarket."

Sales updates the pitch.

Marketing changes the narrative.

Customer success adjusts the account motion.

Product changes roadmap priorities.

Finance changes reporting expectations.

But the operating system of the company never receives one governed update. The strategy becomes a set of disconnected interpretations.

AI makes that problem worse.

An agent can only execute against the meaning it can access. If the company does not have a governed semantic core, the agent will infer intent from fragments: decks, docs, tickets, Slack threads, dashboards, and whatever retrieval found first.

That is not enterprise context.

That is organizational folklore with embeddings.

The semantic core should define the company's durable meaning: customers, segments, metrics, products, policies, claims, approval rules, strategy, positioning, operating priorities, and constraints.

It sits between intent and execution.

Without it, AI will keep converting ambiguity into confident output.

## Skills are the new attack surface

The comments also called out the missing security layer.

That is not a side issue.

It may be the whole issue.

If an agent can use tools, follow skills, write records, call APIs, or delegate to other agents, then every unit of context becomes part of the attack surface.

That includes documents.

That includes prompts.

That includes retrieved records.

That includes tool descriptions.

And it absolutely includes skills.

A skill is not just helpful guidance. It is procedural authority packaged in a reusable unit. It tells the agent how to do something, when to do it, what tools to use, what output to produce, and often what judgment to apply.

That makes skills valuable.

It also makes them dangerous if unmanaged.

If anyone can add a script, download a skill, modify a workflow, or publish a procedure into the agent environment, the enterprise has created a new software supply chain without treating it like one.

Skills need lifecycle management:

- named owners
- versioning
- review and approval
- permission scopes
- test cases
- rollback paths
- dependency tracking
- runtime logging
- security review for tools and scripts
- expiration or recertification dates

If that sounds like software development, that is because it is close.

Skills are procedural software written in language and tool calls.

They need governance.

## Security cannot be bolted on later

Legacy systems were built for humans.

So were most security models.

The enterprise security stack assumes a human user, a service account, an application, a database, a role, a permission, and an audit trail. Agents blur those lines.

Who is acting?

The user?

The agent?

The model provider?

The MCP server?

The skill author?

The workflow owner?

That question has to be answered before agents are allowed to do meaningful work.

A practical context layer needs security baked into the substrate:

- agent identity, not just human identity
- least-privilege tool access
- tool and skill allowlists
- prompt injection defenses
- data classification and output controls
- lineage for retrieved context
- approval gates for irreversible actions
- policy checks at the moment of execution
- audit trails that capture prompts, context, tools, outputs, and delegation

The context layer is not trustworthy because it has more context.

It is trustworthy because it controls context.

## Recursive learning is the fourth context

Prukalpa's three-part frame is knowledge, expertise, and norms.

I would add a fourth: recursive learning.

Not memory in the generic sense.

Managed improvement over time.

Enterprises do not just need agents that know the current definitions, follow approved skills, and obey policy. They need a way for the system to learn from what happened without turning every interaction into uncontrolled drift.

That is the hard part.

An agent tries a workflow.

A human corrects it.

A policy exception repeats.

A customer objection shows up again.

A skill fails at the same step three times.

A retrieval answer cites the wrong source.

Those experiences should not sit in logs forever.

They should become candidates for better context.

But not automatically.

Recursive learning needs a promotion path:

1. Capture the episode.
2. Evaluate what happened.
3. Decide whether it is noise, exception, preference, policy, or reusable procedure.
4. Assign an owner.
5. Test the change.
6. Approve it.
7. Propagate it to the right agents and skills.
8. Monitor whether it improves outcomes.

That is how learning compounds without turning the enterprise context layer into a junk drawer.

The tenth agent should be smarter than the first.

But only because the system learned in a governed way.

## The practical architecture

Here is the clean version:

- LLMs are the reasoning layer.
- RAG is the grounding layer.
- Agents are the execution layer.
- MCP is the integration layer.
- The context layer is the governance and learning layer underneath all of them.

That context layer has to manage:

- semantic meaning
- canonical business intent
- data and knowledge access
- approved skills and workflows
- security policy
- agent permissions
- episodic evidence
- recursive learning loops
- observability and audit trails

This is why the category matters.

If every agent team builds its own memory, its own skills, its own retrieval rules, its own permissions, and its own version of business meaning, the company does not have enterprise AI.

It has context islands.

Context islands do not compound.

They contradict each other.

## What enterprises should do first

Do not start by declaring a context-layer program.

That is how architecture becomes theater.

Start with one workflow that matters.

Pick something real enough to expose the problem but contained enough to govern: pipeline review, support escalation, contract intake, campaign launch, renewal risk, security questionnaire response, monthly close support.

Then map the layers:

- What does the LLM need to reason over?
- What must RAG retrieve?
- What actions can the agent take?
- Which tools are exposed through MCP or another integration layer?
- What semantic definitions must be canonical?
- Which skills are approved?
- What permissions apply?
- What can be learned from each run?
- Who approves changes to the context?

That exercise will reveal the architecture faster than a strategy deck.

It will also show where the enterprise is not ready yet.

That is useful.

## The point

Enterprise AI will not be won by the company with the most tools.

It will be won by the company with the clearest system architecture.

LLMs reason.

RAG grounds.

Agents execute.

MCP integrates.

The context layer governs.

And governance is not the boring part.

It is the part that decides whether AI becomes infrastructure or just another pile of disconnected tools with better demos.

## References

- Prukalpa, "What an Enterprise Context Layer Actually Is," June 1, 2026.
- [Anthropic, "Introducing the Model Context Protocol"](https://www.anthropic.com/news/model-context-protocol)
- [Model Context Protocol documentation](https://modelcontextprotocol.io/)
- [OpenAI Agents SDK: Model Context Protocol](https://openai.github.io/openai-agents-python/mcp/)
- [Google Cloud, "What is Model Context Protocol?"](https://cloud.google.com/discover/what-is-model-context-protocol)
- [AWS, "Agent Toolkit for AWS"](https://aws.amazon.com/products/developer-tools/agent-toolkit-for-aws/)
- [Microsoft Copilot Studio, "Introducing Model Context Protocol support"](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-model-context-protocol-mcp-in-copilot-studio-simplified-integration-with-ai-apps-and-agents/)

