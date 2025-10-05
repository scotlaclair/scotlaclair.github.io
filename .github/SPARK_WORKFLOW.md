# Spark Workflow Guide

This document provides a visual and detailed guide to the Spark workflow, from submission to implementation.

## Quick Overview

```
Submit → Triage → Discussion → Decision → Promotion → Implementation
  💡       🔍         💬          ✓           🚀            ⚙️
```

## Detailed Workflow

### Phase 1: Submission 💡

**Who:** Any contributor, user, or community member  
**Duration:** 5-10 minutes  
**Outcome:** New spark issue created

```
┌─────────────────────────────────────────┐
│  User has an idea or identifies an      │
│  opportunity for the project            │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Navigate to Issues → New Issue         │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Select "💡 Spark (New Idea)" template  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Fill out required fields:              │
│  • Spark Description                    │
│  • Problem/Opportunity                  │
│  • Potential Impact                     │
│  • Initial Implementation Thoughts      │
│  • Related Work                         │
│  • Priority Level                       │
│  • Categories                           │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Submit Issue                           │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Automated Actions:                     │
│  ✓ Labels: spark, triage                │
│  ✓ Auto-comment with next steps         │
│  ✓ Stage: stage-ideation                │
└─────────────────────────────────────────┘
```

**Tips for Submitters:**
- Don't overthink it - submit early ideas
- Be clear but concise
- Link to related resources
- Engage with feedback
- Update the issue as ideas evolve

---

### Phase 2: Triage 🔍

**Who:** Maintainers  
**Duration:** Within 5 business days  
**Outcome:** Spark categorized and ready for discussion

```
┌─────────────────────────────────────────┐
│  Maintainer reviews new spark           │
└─────────────────┬───────────────────────┘
                  │
                  ▼
         ┌────────┴────────┐
         │                 │
         ▼                 ▼
   ┌──────────┐      ┌──────────┐
   │ Complete │      │Incomplete│
   │  Info?   │      │   Info?  │
   └─────┬────┘      └─────┬────┘
         │                 │
         │                 ▼
         │           ┌──────────────────┐
         │           │ Add:             │
         │           │ • needs-feedback │
         │           │ Comment questions│
         │           │ Set reminder     │
         │           └──────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│  Check for duplicates                   │
└─────────────────┬───────────────────────┘
                  │
         ┌────────┴────────┐
         │                 │
         ▼                 ▼
   ┌──────────┐      ┌──────────┐
   │   New    │      │Duplicate?│
   │  Spark   │      └─────┬────┘
   └─────┬────┘            │
         │                 ▼
         │           ┌──────────────────┐
         │           │ Link to original │
         │           │ Close duplicate  │
         │           │ Label: duplicate │
         │           └──────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│  Assess & Label:                        │
│  • Priority (low/medium/high/critical)  │
│  • Complexity (low/medium/high)         │
│  • Area (automation/docs/feature/etc.)  │
│  • Status (needs-discussion)            │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Add initial maintainer comment:        │
│  • Assessment                           │
│  • Questions                            │
│  • Next steps                           │
│  • Tag stakeholders                     │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Remove: triage label                   │
│  Add: needs-discussion label            │
│  Update: Project board (if exists)      │
└─────────────────────────────────────────┘
```

**Triage Checklist:**
- [ ] Read and understand the spark
- [ ] Check for duplicates
- [ ] Verify completeness
- [ ] Add priority label
- [ ] Add complexity label
- [ ] Add area labels
- [ ] Remove triage label
- [ ] Add status label
- [ ] Comment with feedback
- [ ] Tag stakeholders

---

### Phase 3: Discussion 💬

**Who:** Community, maintainers, stakeholders  
**Duration:** Variable (days to weeks)  
**Outcome:** Refined spark with clear direction

```
┌─────────────────────────────────────────┐
│  Issue open for community discussion    │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Community members:                     │
│  • Ask questions                        │
│  • Share experience                     │
│  • Suggest improvements                 │
│  • Discuss alternatives                 │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Spark submitter:                       │
│  • Responds to feedback                 │
│  • Clarifies intent                     │
│  • Updates description                  │
│  • Iterates on the idea                 │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Maintainers:                           │
│  • Facilitate discussion                │
│  • Keep on track                        │
│  • Summarize key points                 │
│  • Guide toward decision                │
└─────────────────┬───────────────────────┘
                  │
                  ▼
         ┌────────┴────────┐
         │                 │
         ▼                 ▼
   ┌──────────┐      ┌──────────┐
   │Consensus │      │  Needs   │
   │ Reached? │      │   More   │
   └─────┬────┘      │   Time   │
         │           └─────┬────┘
         │                 │
         │                 └────┐
         │                      │
         ▼                      │
   Proceed to                   │
   Decision Phase               │
                                │
                  ┌─────────────┘
                  │
                  ▼
         Continue Discussion
         Set timeline/deadline
```

**Discussion Goals:**
- Validate the idea's value
- Refine scope and requirements
- Identify implementation approach
- Build consensus
- Address concerns

**Signs of Healthy Discussion:**
- Multiple perspectives shared
- Questions answered
- Idea refined and improved
- Clear next steps emerging

**Signs Discussion Needs Help:**
- No engagement after 1 week
- Circular arguments
- Scope creep
- Conflicting requirements
- Lack of clarity

---

### Phase 4: Decision ✓

**Who:** Maintainers  
**Duration:** Based on discussion timeline  
**Outcome:** Clear path forward

```
┌─────────────────────────────────────────┐
│  Discussion reaches decision point      │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Maintainer reviews discussion and      │
│  makes decision                         │
└─────────────────┬───────────────────────┘
                  │
         ┌────────┼────────┐
         │        │        │
         ▼        ▼        ▼
    ┌────────┐ ┌────┐ ┌──────┐
    │Approve │ │Hold│ │Reject│
    └────┬───┘ └─┬──┘ └───┬──┘
         │       │        │
         │       │        │
         │       ▼        ▼
         │  ┌──────────┐ ┌──────────────┐
         │  │Add:      │ │Close with:   │
         │  │on-hold   │ │• Explanation │
         │  │Comment   │ │• wontfix     │
         │  │why       │ │• Thank you   │
         │  └──────────┘ └──────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│  APPROVED - Ready for Promotion         │
│                                         │
│  Criteria met:                          │
│  ✓ Clear value proposition              │
│  ✓ Community consensus                  │
│  ✓ Defined scope                        │
│  ✓ Implementation approach identified   │
│  ✓ Resources available/planned          │
└─────────────────┬───────────────────────┘
                  │
                  ▼
         Proceed to Promotion
```

**Decision Criteria:**

**Approve if:**
- Clear benefit to project
- Technically feasible
- Aligned with project goals
- Community support
- Resources available (or acquirable)

**Hold if:**
- Good idea, wrong timing
- Needs more research
- Waiting on dependencies
- Resource constraints

**Reject if:**
- Not aligned with project direction
- Technically infeasible
- Duplicate of existing work
- Resource intensive with low ROI
- Better alternatives exist

---

### Phase 5: Promotion 🚀

**Who:** Maintainers  
**Duration:** 1-2 days  
**Outcome:** Spark converted to actionable work

```
┌─────────────────────────────────────────┐
│  Approved spark ready for promotion     │
└─────────────────┬───────────────────────┘
                  │
                  ▼
      ┌───────────┴───────────┐
      │                       │
      ▼                       ▼
┌──────────┐            ┌──────────┐
│ Small &  │            │ Large &  │
│Well-Def? │            │Complex?  │
└────┬─────┘            └────┬─────┘
     │                       │
     ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│ Promote to      │    │ Promote to      │
│ Feature Request │    │ Project/Epic    │
│                 │    │                 │
│ Actions:        │    │ Actions:        │
│ 1. Create       │    │ 1. Create       │
│    feature      │    │    project      │
│    issue        │    │ 2. Break into   │
│ 2. Copy details │    │    sub-issues   │
│ 3. Link spark   │    │ 3. Link all to  │
│ 4. Close spark  │    │    spark        │
│ 5. Update board │    │ 4. Close spark  │
└─────────────────┘    └─────────────────┘
      │                       │
      └───────────┬───────────┘
                  │
                  ▼
      ┌───────────────────────┐
      │ Needs Technical       │
      │ Validation?           │
      └───────┬───────────────┘
              │
              ▼
         ┌────┴────┐
         │   Yes   │
         └────┬────┘
              │
              ▼
┌─────────────────────────────────────────┐
│ Create Spike/Prototype Issue            │
│                                         │
│ Actions:                                │
│ 1. Define spike goals                   │
│ 2. Set timeline (1-2 weeks)             │
│ 3. Assign developer                     │
│ 4. Link to spark                        │
│ 5. Keep spark open until complete       │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│ Spike complete - use results to         │
│ inform final promotion decision         │
└─────────────────────────────────────────┘
```

**Promotion Comment Template:**
```markdown
## 🎉 Spark Promoted!

This spark has been approved and promoted to [Feature/Project]!

**New Issue:** #[number]
**Decision Summary:** [Brief explanation]
**Implementation Timeline:** [If known]
**Next Steps:**
- [Step 1]
- [Step 2]

Thank you for this valuable contribution! 
Please continue discussion in the new issue.

Closing this spark as promoted.
```

---

### Phase 6: Implementation ⚙️

**Who:** Development team  
**Duration:** Variable  
**Outcome:** Spark becomes reality

```
┌─────────────────────────────────────────┐
│  Feature/Project created from spark     │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Standard SDLC Process:                 │
│  1. Design                              │
│  2. Development                         │
│  3. Testing                             │
│  4. Review                              │
│  5. Deployment                          │
│  6. Maintenance                         │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Feature complete and deployed          │
│                                         │
│  Actions:                               │
│  • Update original spark with outcome   │
│  • Thank contributors                   │
│  • Document in changelog/release notes  │
│  • Share success with community         │
└─────────────────────────────────────────┘
```

---

## State Diagram

```
         ┌───────────────────────────────────────────────────┐
         │                                                   │
         │              SPARK LIFECYCLE                      │
         │                                                   │
         └───────────────────────────────────────────────────┘

    [Submitted] → [Triaged] → [Discussed] → [Approved] → [Promoted] → [Implemented]
         │            │            │             │             │              │
         │            │            ├─────────────┤             │              │
         │            │            ▼             ▼             │              │
         │            │       [Needs Info]  [Rejected]        │              │
         │            │            │             │             │              │
         │            ├────────────┘             └─────────────┤              │
         │            ▼                                        ▼              │
         │       [Closed: Incomplete]                   [Closed: Won't Fix]  │
         │                                                                    │
         └────────────────────────────────────────────────────────────────────┘
                                      ▲                                        │
                                      │                                        │
                                      └────────── [Deployed] ─────────────────┘
```

## Labels Throughout the Lifecycle

| Phase | Labels Applied |
|-------|----------------|
| **Submission** | `spark`, `triage`, `stage-ideation` |
| **Triage** | Remove `triage`, add `priority-*`, `complexity-*`, `needs-discussion` |
| **Discussion** | Add area labels (e.g., `automation`, `documentation`) |
| **Approved** | Add `approved`, update to `stage-design` |
| **Promoted** | Add `promoted`, close issue |
| **Rejected** | Add `wontfix`, close issue |
| **On Hold** | Add `on-hold`, keep open |

## Timelines

| Phase | Target Duration | Action if Delayed |
|-------|----------------|-------------------|
| **Triage** | 5 business days | Escalate to lead maintainer |
| **Discussion** | 1-4 weeks | Set deadline, make decision |
| **Decision** | At discussion end | Don't let linger >1 week |
| **Promotion** | 1-2 days | Straightforward conversion |
| **Implementation** | Variable | Track in project board |

## Automation Support

The following automations support the spark workflow:

### 1. On Submission
- Auto-label: `spark`, `triage`
- Auto-comment: Welcome message with next steps
- Auto-label: `stage-ideation`

### 2. During Triage
- Title-based labeling (if keywords in title)
- Manual label application by maintainers

### 3. During Discussion
- Stale bot exempt (sparks don't auto-close)

### 4. On Promotion
- Auto-comment when `promoted` label added
- Manual creation of feature/project issues

## Best Practices

### For Fast-Track Sparks
Some sparks can move quickly through the process:
1. Clear, well-defined idea
2. Obvious value
3. Low complexity
4. Resource available
5. Maintainer consensus

Fast-track process:
- Triage: 1 day
- Discussion: 3-5 days
- Decision: Immediate
- Promotion: Same day
- Total: 1 week

### For Complex Sparks
Complex sparks need more time:
1. Requires significant research
2. High complexity
3. Major impact
4. Resource intensive
5. Needs community consensus

Extended process:
- Triage: 5 days
- Discussion: 4-6 weeks
- Decision: After thorough discussion
- Promotion: May need spike first
- Total: 2-3 months

## Examples

### Example 1: Quick Spark

**Spark:** "Add dark mode to documentation site"

Timeline:
- Day 1: Submitted, auto-labeled
- Day 2: Triaged (priority: medium, complexity: low)
- Days 3-7: Discussion (positive feedback)
- Day 8: Approved
- Day 9: Promoted to feature
- Weeks 2-3: Implemented
- Week 4: Deployed

### Example 2: Complex Spark

**Spark:** "Create AI-powered code review assistant"

Timeline:
- Week 1: Submitted and triaged
- Weeks 2-5: Extensive discussion
- Week 6: Approved with conditions (spike needed)
- Week 7-8: Technical spike
- Week 9: Results reviewed, promoted to project
- Months 3-6: Phased implementation
- Month 7: Initial release

### Example 3: Rejected Spark

**Spark:** "Rewrite entire codebase in different language"

Timeline:
- Day 1: Submitted
- Day 3: Triaged
- Days 4-10: Discussion
- Day 11: Rejected (not feasible, not aligned with goals)
- Day 11: Closed with detailed explanation

## Metrics Dashboard

Track spark health with these metrics:

```
Total Sparks Submitted:     [   50   ]
Awaiting Triage:           [    3   ] 🔍
In Discussion:             [   12   ] 💬
Approved (Pending Promo):  [    2   ] ✓
Promoted:                  [   20   ] 🚀
Rejected:                  [    8   ] ✗
On Hold:                   [    5   ] ⏸️

Average Time to Triage:    [  3 days ]
Average Time to Decision:  [ 14 days ]
Promotion Rate:            [  40%    ]
Implementation Rate:       [  75%    ] (of promoted)
```

## Continuous Improvement

The spark process itself should evolve:

1. **Collect Feedback** - Ask contributors about their experience
2. **Track Metrics** - Monitor timelines and conversion rates
3. **Identify Bottlenecks** - Where do sparks get stuck?
4. **Iterate** - Improve the process based on data
5. **Document Changes** - Keep this guide updated

## Questions?

- 📖 [Spark Process Documentation](SPARK_PROCESS.md)
- 💡 [Submit a Spark](../../issues/new?template=spark.yml)
- 💬 [Start a Discussion](../../discussions)
- 📚 [Contributing Guide](../CONTRIBUTING.md)

---

**Remember:** The best spark is the one that gets submitted! Don't wait for perfection. ✨
