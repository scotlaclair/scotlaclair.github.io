# PR and Issue Linking Quick Reference

Quick reference guide for linking PRs to issues correctly.

## TL;DR

| Your Situation | What to Use | Example |
|----------------|-------------|---------|
| PR completes entire issue | `Closes #123` | `Closes #456` |
| PR is part of larger issue | `Part of #123` | `Part of #11` |
| PR relates to issue | `Relates to #123` | `Relates to #9` |
| **NEVER** close parent issues | `Part of #parent` | `Part of #9` |

## The Three Keywords

### ✅ `Closes #123`
**When:** Your PR completes ALL work in the issue
**Effect:** Issue auto-closes when PR merges
**Use for:** Sub-issues, bugs, small features

**Example:**
```markdown
## PR: Fix login validation bug

Closes #456

This PR fixes the validation logic as described in issue #456.
All acceptance criteria met.
```

### 🔗 `Part of #123`
**When:** Your PR is part of a larger effort
**Effect:** Issue stays open, may update checklist
**Use for:** Parent issues, multi-PR features

**Example:**
```markdown
## PR: Add manual testing documentation

Part of #11

This PR addresses the manual testing documentation section of issue #11.
The Future Enhancements section will be handled separately.
```

### 📌 `Relates to #123`
**When:** Your PR is related but doesn't complete work
**Effect:** Issue stays open, creates link
**Use for:** Related work, dependencies, context

**Example:**
```markdown
## PR: Update API client

Relates to #789

This updates the API client which is needed for issue #789,
but doesn't implement the full feature.
```

## Common Scenarios

### Scenario 1: Working on a Sub-Issue

✅ **Correct:**
```markdown
Closes #50
Part of #10 (parent issue)
```

❌ **Wrong:**
```markdown
Closes #10
Closes #50
```
*Don't close the parent!*

### Scenario 2: First PR of Many for an Issue

✅ **Correct:**
```markdown
Part of #100

This is the first of 3 PRs needed to complete issue #100.
```

❌ **Wrong:**
```markdown
Closes #100

This is the first of 3 PRs...
```
*Don't close until all work is done!*

### Scenario 3: Documentation for a Feature

✅ **Correct:**
```markdown
Part of #200

Adds documentation for the feature being implemented in #200.
```

❌ **Wrong:**
```markdown
Closes #200

Adds documentation...
```
*Documentation alone doesn't close a feature!*

### Scenario 4: Final PR Completing All Work

✅ **Correct:**
```markdown
Closes #150
Part of #100 (parent)

This is the final PR completing all work for issue #150.
Issue #100 still has other sub-issues remaining.
```

## Parent vs Sub-Issue Rules

### Parent Issues

**Characteristics:**
- Contains checklist of major tasks
- Has multiple sub-issues
- Represents large initiative

**PR Linking:**
- ❌ NEVER use `Closes #parent`
- ✅ ALWAYS use `Part of #parent`
- 🔧 Close manually when all sub-issues done

**Example Parent Issue #9:**
```markdown
## Address Spark System Completion

### Tasks
- [ ] Review automation (#10)
- [ ] Add testing docs (#11)
- [ ] Fix indentation (#12)
```

**Correct PR linking:**
```markdown
Closes #11
Part of #9
```

### Sub-Issues

**Characteristics:**
- Addresses specific task from parent
- Can be completed in 1-2 PRs
- Has `Part of #parent` in description

**PR Linking:**
- ✅ Use `Closes #sub-issue` when complete
- ✅ Also include `Part of #parent`
- ✅ Can close automatically

**Example Sub-Issue #11:**
```markdown
## Future Enhancements and Testing

Part of #9

This sub-issue tracks testing docs and enhancements.
```

**Correct PR linking:**
```markdown
Part of #11 (if partial work)
Closes #11 (if completing everything)
Part of #9 (always include parent)
```

## Checklist Automation

The repo has automation that updates checklists. To help it work:

### For Direct PR References

Include PR number in checklist:
```markdown
- [ ] Add testing docs (PR #12)
```

PR #12 will auto-check this when merged.

### For Keyword Matching

Use similar words in PR title and checklist:
```markdown
Checklist: "- [ ] Add manual testing documentation"
PR Title: "Add comprehensive manual testing docs"
           ^^^             ^^^        ^^^
           These keywords match! ✅
```

## Multiple Issues

You can reference multiple issues:

```markdown
Closes #100
Closes #101
Part of #10
Relates to #5, #6
```

Just be careful about which ones you're closing!

## When In Doubt

**Ask yourself:**
1. Does my PR complete EVERY acceptance criteria in the issue?
   - **Yes** → `Closes`
   - **No** → `Part of`

2. Does the issue have sub-issues or a checklist?
   - **Yes** → `Part of` (it's a parent)
   - **No** → Can use `Closes` if work is complete

3. Is this a parent issue with sub-tasks?
   - **Yes** → NEVER use `Closes`
   - **No** → Can use `Closes` if appropriate

**Default safe choice:** `Part of #123`
Let maintainers close the issue manually if needed.

## Real Example: Issue #11

**Problem:** PR #12 used `Fixes #11` and closed issue #11 prematurely.

**Issue #11 had two sections:**
1. ✅ Manual Testing (completed by PR #12)
2. ❌ Future Enhancements (still needed work)

**What happened:**
```markdown
PR #12: "Add manual testing documentation"
        Fixes #11  ← Closed entire issue
```

**What should have happened:**
```markdown
PR #12: "Add manual testing documentation"
        Part of #11  ← Issue stays open
        Part of #9   ← Link to parent too
```

**Result:** Issue #11 was reopened manually. Future work needs sub-issues.

## Summary Table

| Issue Type | PR Status | Keyword | Auto-Close |
|------------|-----------|---------|------------|
| Sub-issue | Complete | `Closes #N` | Yes ✅ |
| Sub-issue | Partial | `Part of #N` | No ❌ |
| Parent | Any work | `Part of #N` | No ❌ |
| Parent | All done | Manual close | No ❌ |
| Bug fix | Complete | `Closes #N` | Yes ✅ |
| Feature | Complete | `Closes #N` | Yes ✅ |
| Feature | Partial | `Part of #N` | No ❌ |
| Related | Context only | `Relates to #N` | No ❌ |

## Resources

- [Sub-Issue Management Guide](SUB_ISSUE_MANAGEMENT.md) - Comprehensive guide
- [Contributing Guide](../CONTRIBUTING.md) - General contribution guidelines
- [PR Template](PULL_REQUEST_TEMPLATE.md) - PR submission template
- [Issue #11 Example](ISSUE_11_BREAKDOWN.md) - Real-world example

## Questions?

When unsure:
1. Check if issue is a parent (has sub-issues or large checklist)
2. Check if your PR completes ALL acceptance criteria
3. Default to `Part of #123` - safer than closing too early
4. Ask in issue comments if you're not sure

---

**Remember:** It's easier to close an issue later than to reopen one that was closed too early!
