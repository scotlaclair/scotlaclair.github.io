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

## Automation and Workflows

### Automated Actions

The Spark system includes several automated workflows to streamline the process:

#### 1. Spark Automation (`spark-automation.yml`)

**Triggers:** Issue opened, labeled, or edited with `spark` label

**Actions:**
- Automatically adds `stage-ideation` label if no stage label exists
- Posts welcome comment on new spark submissions
- Notifies when spark is promoted (labeled with `promoted` or `stage-development`)

#### 2. Parent Issue Checklist Updates (`update-parent-checklist.yml`)

**Triggers:** Pull request closed (merged)

**Actions:**
- Scans merged PR body for linked issues (Closes #X, Fixes #X, Resolves #X, Relates to #X)
- Attempts to auto-check completed checklist items in parent issues
- Posts confirmation comment when checklist is updated
- Posts manual update instructions if no matching checklist item found

**Matching Logic:**
- Direct PR number reference in checklist item (e.g., "- [ ] Fix automation #123")
- Keyword matching between PR title and checklist text (2+ significant words)

#### 3. Issue Labeling (`label-issues.yml`)

**Triggers:** Issue or PR opened/edited

**Actions:**
- Adds labels based on title keywords ([Spark], [Bug], [Feature], etc.)
- Adds `triage` label to new issues without labels

### Troubleshooting Automation

#### Checklist Not Auto-Updating

If a merged PR doesn't automatically update the parent issue checklist:

**Common Causes:**
1. PR body doesn't properly link to parent issue
2. Checklist item text doesn't match PR title keywords
3. Checklist item already checked

**Manual Fallback:**
1. Open the parent issue
2. Click "Edit" on the issue description
3. Change `- [ ]` to `- [x]` for completed items
4. Save the changes

**Best Practices for Auto-Updates:**
- Link PRs clearly: "Closes #123" or "Relates to #456"
- Include PR number in checklist items: "- [ ] Fix automation (PR #123)"
- Use descriptive PR titles that match checklist wording
- Check one item at a time to avoid conflicts

#### Spark Not Getting Labels

If a spark submission doesn't receive automatic labels:

**Manual Fallback:**
1. Go to the spark issue
2. Click "Labels" in the right sidebar
3. Add missing labels: `spark`, `triage`, `stage-ideation`
4. Save changes

#### Welcome Comment Not Appearing

If a new spark doesn't receive the welcome comment:

**Possible Causes:**
- Workflow permissions issue
- GitHub Actions temporarily unavailable

**Manual Fallback:**
- Post a manual welcome comment using the template from the workflow
- Tag a maintainer to trigger manual triage

### Edge Cases and Limitations

#### Multiple PRs for One Checklist Item

**Scenario:** A single checklist item requires multiple PRs to complete

**Handling:**
- The first merged PR will auto-check the item
- Additional PRs should reference the parent but won't find an unchecked item
- Consider breaking large tasks into smaller checklist items

**Workaround:**
- Use sub-tasks: "- [ ] Part 1 (PR #X)" and "- [ ] Part 2 (PR #Y)"

#### Checklist Item Wording Doesn't Match PR

**Scenario:** Checklist says "Implement feature X" but PR title is "Add new capability Y"

**Handling:**
- Automation won't match if keyword overlap is insufficient
- Manual comment will note the PR was merged

**Workaround:**
- Include checklist item number in PR description
- Use consistent terminology between checklist and PR titles
- Manually update checklist after merge

#### PR Closes Multiple Issues

**Scenario:** One PR addresses tasks in multiple parent issues

**Handling:**
- Automation will attempt to update all linked issues
- Each issue is processed independently

**Best Practice:**
- Use "Closes #123, Closes #456" format in PR body
- Ensure each parent issue has clear checklist items

#### Checklist in Comments vs. Description

**Limitation:** Automation only updates checklists in issue **description**, not in comments

**Workaround:**
- Keep master checklist in issue description
- Use comments for discussion or sub-task tracking

### Manual Checklist Management

When automation fails or doesn't apply, follow these steps:

1. **Navigate to parent issue** - Find the issue tracking your work
2. **Edit issue description** - Click the "..." menu and select "Edit"
3. **Update checklist** - Change `- [ ]` to `- [x]` for completed items
4. **Save changes** - Click "Update comment"
5. **Add completion comment** - Post: "✅ Completed via PR #X"

### Testing Automation

To verify automation is working:

1. **Create test issue** with checklist items
2. **Create PR** that references the test issue
3. **Merge PR** and wait 1-2 minutes
4. **Check parent issue** for updated checklist and comment
5. **Clean up** by closing test issues

### Getting Help

If automation consistently fails:

1. Check [GitHub Actions status](https://www.githubstatus.com/)
2. Review workflow runs in [Actions tab](../../actions)
3. Report issues with automation in a new bug report
4. Tag maintainers for assistance

## Resources

- [Spark Issue Template](../../issues/new?template=spark.yml)
- [Contributing Guide](../CONTRIBUTING.md)
- [Issue Labels](../labels.yml)
- [GitHub Project Board](../../projects)
- [Discussions](../../discussions)
- [GitHub Actions Workflows](workflows/)

## Questions or Feedback?

- 💬 Start a [Discussion](../../discussions)
- 📧 Contact maintainers
- 💡 Submit a spark about improving the spark process!

---

**Remember:** Every great feature started as a spark. Keep the ideas flowing! ✨
