# Spark Process Documentation

## Overview

The **Spark System** is a structured approach to capturing, evaluating, and promoting innovative ideas within the project. This document provides detailed guidelines for submitting, reviewing, triaging, and promoting sparks.

## What is a Spark?

A **Spark** is a new idea, concept, or opportunity that has potential value but needs discussion and refinement before implementation. Sparks are:

- 💡 **Exploratory** - Ideas that need validation and discussion
- 🌱 **Seeds of Innovation** - Early-stage concepts with growth potential
- 🎯 **Opportunity-focused** - Addressing problems or creating value
- 🔄 **Iterative** - Refined through community feedback

## When to Submit a Spark

Submit a spark when you have:

- ✨ A new idea or concept to explore
- 🔮 A vision for a significant feature or improvement
- 💭 A concept that needs community input before implementation
- 🎯 An opportunity you've identified for the project
- 🌟 An innovative approach to an existing problem

## When NOT to Use a Spark

Use other issue types instead:

- **Bug Report** - For existing functionality that isn't working correctly
- **Feature Request** - For well-defined features ready for implementation
- **Documentation** - For documentation improvements
- **Setup Issues** - For repository configuration tasks

## Spark Lifecycle

```
┌─────────────┐
│   Submit    │  User submits spark using template
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Triage    │  Maintainers review and categorize
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Discussion │  Community discusses and refines
└──────┬──────┘
       │
       ├──────────> Rejected (Close with explanation)
       │
       ├──────────> Needs More Info (Keep in Discussion)
       │
       ▼
┌─────────────┐
│  Approved   │  Spark is approved for promotion
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Promoted   │  Convert to Feature/Project
└─────────────┘
```

## Submission Process

### 1. Create a Spark Issue

Use the Spark issue template:
- Go to [New Issue](../../issues/new/choose)
- Select "💡 Spark (New Idea)"
- Fill out all required fields

### 2. Required Information

When submitting a spark, provide:

- **Spark Description** - Clear explanation of the idea
- **Problem or Opportunity** - What this addresses or creates
- **Potential Impact** - Who benefits and how
- **Initial Thoughts** - Early implementation ideas
- **Related Work** - Links to similar ideas or resources
- **Priority Level** - Urgency/importance assessment
- **Categories** - Relevant areas (documentation, automation, etc.)

### 3. After Submission

- Your spark will be automatically labeled with `spark` and `triage`
- Maintainers will review within 5 business days
- Be ready to engage in discussion and provide clarification

## Triage Process

### Maintainer Responsibilities

When a spark is submitted, maintainers should:

#### 1. Initial Review (Within 5 business days)

- **Read thoroughly** - Understand the spark's core concept
- **Check for duplicates** - Link to similar existing issues
- **Validate completeness** - Ensure all required fields are filled
- **Assess feasibility** - Consider technical and resource constraints

#### 2. Apply Labels

Add appropriate labels based on:

- **Priority**: `priority-low`, `priority-medium`, `priority-high`, `priority-critical`
- **Complexity**: `complexity-low`, `complexity-medium`, `complexity-high`
- **Stage**: `stage-ideation` (initially)
- **Area**: Domain-specific labels (e.g., `automation`, `documentation`)
- **Status**: Remove `triage`, add `needs-discussion` or other status

#### 3. Add Context

- Comment with initial thoughts and questions
- Tag relevant team members or stakeholders
- Link to related issues, PRs, or discussions
- Add to appropriate GitHub Project board

#### 4. Categorize Outcome

Determine the spark's path:

**Accept for Discussion** (Most common)
- Add `needs-discussion` label
- Pin issue if highly important
- Set milestone if timeline is known
- Add to project board in "Ideation" column

**Request More Information**
- Add `needs-feedback` label
- Comment with specific questions
- Set a reminder to follow up

**Reject** (Rare, but sometimes necessary)
- Explain why it's not feasible
- Suggest alternatives if possible
- Close with `wontfix` label
- Thank contributor for their input

**Fast-track** (Exceptional cases)
- For urgent, well-defined opportunities
- Add `priority-critical` label
- Move directly to approval stage

### Triage Checklist

```markdown
- [ ] Read and understand the spark
- [ ] Check for duplicate ideas
- [ ] Verify all required information is provided
- [ ] Add priority label
- [ ] Add complexity label
- [ ] Add relevant area labels
- [ ] Remove `triage` label
- [ ] Add status label (`needs-discussion`, `needs-feedback`, etc.)
- [ ] Add to GitHub Project board
- [ ] Comment with initial feedback
- [ ] Tag relevant stakeholders
```

## Discussion Phase

### Goals of Discussion

- **Validate** - Confirm the idea's value and feasibility
- **Refine** - Improve and clarify the concept
- **Scope** - Define boundaries and requirements
- **Align** - Ensure it fits project goals and roadmap

### Discussion Guidelines

**For Contributors:**
- Respond to questions promptly
- Be open to feedback and alternative approaches
- Provide additional context when requested
- Engage constructively with the community
- Document decisions and changes

**For Community Members:**
- Ask clarifying questions
- Share relevant experience or knowledge
- Suggest improvements or alternatives
- Be respectful and constructive
- Focus on the idea, not the person

**For Maintainers:**
- Facilitate productive discussion
- Keep conversations on track
- Summarize key points and decisions
- Set timelines for decision-making
- Update labels and project board as needed

### Moving Forward from Discussion

After discussion, the spark should:

1. **Have clarity** - Clear understanding of what's proposed
2. **Have consensus** - General agreement on value and approach
3. **Have scope** - Defined boundaries and requirements
4. **Have next steps** - Clear path to implementation

## Promotion Process

### When to Promote a Spark

Promote a spark when it has:

- ✅ Clear value proposition
- ✅ Community consensus or maintainer approval
- ✅ Defined scope and requirements
- ✅ Identified implementation approach
- ✅ Available resources (or plan to acquire them)

### Promotion Options

#### Option 1: Promote to Feature Request

For well-defined features ready for implementation:

1. Create new Feature issue using feature template
2. Reference the spark: "Promoted from #[spark-number]"
3. Copy relevant details from spark discussion
4. Close spark with comment: "Promoted to #[feature-number]"
5. Update labels: Remove `spark`, add `feature`

#### Option 2: Promote to Project

For large initiatives requiring multiple features:

1. Create a new GitHub Project or Epic issue
2. Break down into smaller feature issues
3. Link all issues to the original spark
4. Close spark with comment: "Promoted to Project: [link]"
5. Update project board accordingly

#### Option 3: Create Spike/Prototype

For ideas needing technical validation:

1. Create a new issue for spike/prototype work
2. Define acceptance criteria and timeline
3. Reference the spark issue
4. Keep spark open until spike completes
5. Use spike results to inform promotion decision

### Promotion Checklist

```markdown
- [ ] Spark has been thoroughly discussed
- [ ] Community consensus or maintainer approval obtained
- [ ] Implementation approach identified
- [ ] Scope clearly defined
- [ ] Resources available or planned
- [ ] New issue(s) created for implementation
- [ ] Spark issue updated with promotion details
- [ ] Spark issue closed with appropriate label
- [ ] GitHub Project board updated
- [ ] Stakeholders notified
```

## Auto-Linking to Projects

Sparks are automatically handled by workflows:

### Automatic Actions

1. **On Creation** - Automatically labeled with `spark` and `triage`
2. **Stale Prevention** - Sparks exempt from stale bot closure
3. **Title-based Labeling** - Additional labels added based on title keywords

### Manual Project Management

Until automated project linking is implemented, maintainers should:

1. Manually add sparks to GitHub Project board
2. Place in "Ideation" or "Discussion" column
3. Move through workflow as spark progresses
4. Update status labels to reflect project column

## Best Practices

### For Spark Submitters

- **Start early** - Don't wait for a perfect idea
- **Be open** - Embrace feedback and iteration
- **Stay engaged** - Respond to questions and comments
- **Document** - Capture decisions and changes
- **Be patient** - Good ideas take time to refine

### For Maintainers

- **Respond quickly** - Initial triage within 5 days
- **Be encouraging** - Foster innovation and creativity
- **Be honest** - Provide clear, constructive feedback
- **Be decisive** - Don't let sparks languish indefinitely
- **Be fair** - Apply consistent criteria to all sparks

### For Community Members

- **Participate** - Share your thoughts and experience
- **Be constructive** - Focus on improving ideas
- **Be respectful** - Value diverse perspectives
- **Be helpful** - Provide context and resources
- **Be supportive** - Encourage innovation

## Metrics and Reporting

Track these metrics to improve the spark system:

- **Submission rate** - How many sparks per month
- **Response time** - Time to initial triage
- **Discussion duration** - Average time in discussion
- **Promotion rate** - Percentage of sparks promoted
- **Implementation rate** - Promoted sparks that get built
- **Rejection rate** - Percentage of sparks not promoted

## Common Scenarios

### Scenario 1: Duplicate Spark

**Action:**
1. Comment: "This is similar to #[existing-spark]"
2. Ask submitter which issue to continue in
3. Close duplicate with `duplicate` label
4. Consolidate discussion in remaining issue

### Scenario 2: Spark Too Vague

**Action:**
1. Add `needs-feedback` label
2. Ask specific questions for clarification
3. Set reminder to follow up in 1 week
4. Close if no response after 2 reminders

### Scenario 3: Spark Not Aligned with Project

**Action:**
1. Explain why it doesn't fit
2. Suggest alternative projects/communities
3. Thank contributor for their interest
4. Close with `wontfix` label

### Scenario 4: Spark Needs Research

**Action:**
1. Add `needs-investigation` label
2. Create research/spike task
3. Set timeline for research completion
4. Keep spark in discussion until research completes

### Scenario 5: Controversial Spark

**Action:**
1. Add `needs-discussion` label
2. Encourage diverse perspectives
3. Set timeline for decision (e.g., 2 weeks)
4. Escalate to maintainer vote if needed
5. Document decision clearly

## Templates and Examples

### Triage Comment Template

```markdown
## Triage Review

Thank you for submitting this spark! Here's my initial assessment:

**Priority:** [High/Medium/Low] - [reasoning]
**Complexity:** [High/Medium/Low] - [reasoning]
**Feasibility:** [Good/Moderate/Challenging] - [reasoning]

**Questions:**
1. [Question 1]
2. [Question 2]

**Next Steps:**
- [Action item 1]
- [Action item 2]

**Related:** #[related-issues]

cc @[relevant-stakeholders]
```

### Promotion Comment Template

```markdown
## 🎉 Spark Promoted!

This spark has been approved and promoted to a feature request!

**New Issue:** #[feature-number]
**Decision:** [Brief summary of decision]
**Implementation Timeline:** [If known]

Thank you for this great idea! Please continue the discussion in the new feature issue.

Closing this spark as promoted.
```

### Rejection Comment Template

```markdown
## Spark Decision

Thank you for submitting this spark. After review and discussion, we've decided not to pursue this at this time.

**Reason:** [Clear explanation]
**Alternative:** [If applicable]

We appreciate your contribution to the project. Please don't let this discourage you from submitting future sparks!

Closing with `wontfix` label.
```

## FAQ

**Q: How long does triage take?**
A: Initial triage should happen within 5 business days.

**Q: What if my spark is rejected?**
A: Don't be discouraged! You can submit revised versions or new ideas. Not all sparks will be accepted, and that's okay.

**Q: Can I submit multiple sparks?**
A: Yes! Submit as many ideas as you'd like. Quality over quantity is appreciated.

**Q: How do I know if my spark was promoted?**
A: You'll receive a notification when the spark is closed with a comment explaining the promotion.

**Q: Can sparks be reopened?**
A: Yes, if circumstances change or new information becomes available.

**Q: What's the difference between a spark and a feature request?**
A: Sparks are exploratory ideas needing discussion. Features are well-defined requests ready for implementation.

**Q: Who can submit sparks?**
A: Anyone! Contributors, users, and community members are all encouraged to submit sparks.

**Q: Do I need to implement my own spark?**
A: No! You can submit ideas without implementing them. However, being willing to contribute to implementation increases the likelihood of acceptance.

## Resources

- [Spark Issue Template](../../issues/new?template=spark.yml)
- [Contributing Guide](../CONTRIBUTING.md)
- [Issue Labels](../labels.yml)
- [GitHub Project Board](../../projects)
- [Discussions](../../discussions)

## Questions or Feedback?

- 💬 Start a [Discussion](../../discussions)
- 📧 Contact maintainers
- 💡 Submit a spark about improving the spark process!

---

**Remember:** Every great feature started as a spark. Keep the ideas flowing! ✨
