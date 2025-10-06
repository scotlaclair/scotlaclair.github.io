# Sub-Issue Management Guide

This guide explains how to properly manage parent issues, sub-issues, and PRs to ensure accurate tracking and automation.

## Overview

When working on large features or initiatives, it's common to break work into a parent issue with multiple sub-issues. Proper linking ensures:

- Parent issues only close when all sub-issues are complete
- PRs correctly update checklists in parent issues
- Clear tracking of progress across related work

## Issue Hierarchy

### Parent Issue

A parent issue represents a large feature, initiative, or epic. It typically contains:

- High-level description of the work
- Checklist of major tasks or sub-issues
- Acceptance criteria for the entire initiative
- Links to related sub-issues

**Example:**
```markdown
## Parent Issue: Implement User Authentication System

### Tasks
- [ ] Design authentication flow (#123)
- [ ] Implement login functionality (#124)
- [ ] Add password reset (#125)
- [ ] Write documentation (#126)

### Acceptance Criteria
- [ ] All sub-issues closed
- [ ] Documentation complete
- [ ] Tests passing
```

### Sub-Issue

A sub-issue represents a specific, actionable piece of work within a parent issue. It should:

- Be scoped to a single PR or small set of PRs
- Reference the parent issue using `Part of #[parent-number]`
- Have clear acceptance criteria
- Be independently testable

**Example:**
```markdown
## Sub-Issue: Implement Login Functionality

Part of #122 (Implement User Authentication System)

### Description
Implement the login form and authentication logic...

### Acceptance Criteria
- [ ] Login form created
- [ ] Authentication API integrated
- [ ] Error handling implemented
- [ ] Tests written
```

## Linking PRs to Issues

### Closing Keywords

Use these keywords when a PR **fully completes** an issue:

- `Closes #123`
- `Fixes #123`
- `Resolves #123`

**When to use:**
- PR completes ALL work in a sub-issue
- PR is the final change needed for the issue
- Issue should auto-close when PR merges

**Example:**
```markdown
## PR: Implement Login Form

Closes #124

This PR fully implements the login functionality as specified in issue #124.
```

### Relating Keywords

Use these keywords when a PR is **related but doesn't complete** an issue:

- `Part of #123`
- `Relates to #123`
- `Related to #123`
- `Contributes to #123`

**When to use:**
- PR addresses only part of a larger issue
- PR is one of multiple PRs needed
- PR affects parent issue but doesn't close it
- PR provides documentation or partial implementation

**Example:**
```markdown
## PR: Add Login Form Documentation

Part of #124

This PR adds documentation for the login form. Additional PRs will be needed
for the authentication logic and error handling.
```

## Best Practices

### 1. Never Close Parent Issues from PRs

❌ **Don't do this:**
```markdown
## PR: Add Testing Documentation

Closes #11  (where #11 is a parent issue with multiple sub-tasks)
```

✅ **Do this instead:**
```markdown
## PR: Add Testing Documentation

Part of #11

This PR addresses the manual testing documentation portion of issue #11.
The Future Enhancements section will be handled separately.
```

### 2. Create Sub-Issues for Large Parent Issues

If a parent issue has multiple distinct pieces of work:

1. Create separate sub-issues for each major task
2. Link sub-issues to parent using `Part of #[parent]`
3. Update parent issue checklist with sub-issue references
4. Have PRs close sub-issues, not the parent

**Example Parent Issue Update:**
```markdown
## Parent Issue: Future Enhancements and Manual Testing (#11)

### Tasks
- [ ] Manual Testing Documentation (Sub-issue #12) ✅ Completed
- [ ] Create Enhancement Sub-Issues (#13)
- [ ] Implement Priority Enhancements (#14-#20)

### Sub-Issues
- #12 - Manual Testing Documentation ✅
- #13 - Checklist in Comments Enhancement 🔄
- #14 - NLP Matching Enhancement 📋
- #15 - Configurable Threshold 📋
```

### 3. Update Checklists Manually When Needed

If checklist automation doesn't catch a completed item:

1. Manually check the item in the parent issue
2. Add a comment noting what was completed
3. Link to the completing PR

**Example:**
```markdown
Manually checking off "Manual Testing Documentation" as completed by PR #12.
```

### 4. Close Parent Issues Manually

Once all sub-issues are complete:

1. Verify all checklist items are checked
2. Verify all acceptance criteria met
3. Add a completion comment
4. Manually close the parent issue

**Example:**
```markdown
All sub-issues have been completed:
- ✅ #12 - Manual Testing Documentation
- ✅ #13 - Enhancement Sub-Issues Created
- ✅ #14-20 - Priority Enhancements Implemented

Closing this parent issue as complete.
```

### 5. Use Consistent Linking Keywords

Pick one style and use it consistently:

- **Closes/Fixes/Resolves**: Only for completing issues
- **Part of**: For work that's part of a larger effort
- **Relates to**: For tangentially related work

## Examples

### Example 1: Simple Feature with Sub-Issues

**Parent Issue #100**: Implement Dark Mode

**Sub-Issues:**
- #101: Design dark mode color scheme
- #102: Implement dark mode toggle
- #103: Add dark mode persistence
- #104: Document dark mode feature

**PRs:**
```markdown
PR #201: "Design dark mode colors" → Closes #101
PR #202: "Add dark mode toggle UI" → Closes #102
PR #203: "Save dark mode preference" → Closes #103
PR #204: "Document dark mode usage" → Closes #104
```

**Result:** When all PRs merge, sub-issues close. Parent #100 remains open until manually closed after verifying all work is complete.

### Example 2: Documentation PR for Large Issue

**Parent Issue #11**: Future Enhancements and Manual Testing

**PR #12**: "Add manual testing documentation"

❌ **Wrong:**
```markdown
Closes #11  ← This would close the entire parent issue
```

✅ **Correct:**
```markdown
Part of #11

This PR addresses the manual testing documentation section of issue #11.
The Future Enhancements section still needs to be addressed.
```

### Example 3: Multiple PRs for One Sub-Issue

**Sub-Issue #150**: Implement User Profile Page

**PRs:**
```markdown
PR #251: "Add profile page UI" → Part of #150
PR #252: "Add profile edit functionality" → Part of #150
PR #253: "Add profile tests" → Closes #150  ← Only the last PR closes
```

## Automation Considerations

### Checklist Automation

The repository has automation that updates checklists in parent issues when PRs merge. To ensure it works correctly:

1. **Reference the parent issue** in PR description using `Part of #[parent]` or `Relates to #[parent]`
2. **Match keywords** in PR title with checklist items in parent issue
3. **Include PR number** in checklist items if known: `- [ ] Add tests (PR #123)`

### Auto-Labeling

Issues and PRs are auto-labeled based on title. Use clear prefixes:

- `[Bug]:` for bugs
- `[Feature]:` for features
- `[Docs]:` for documentation
- `[Enhancement]:` for improvements

## Common Mistakes to Avoid

### ❌ Mistake 1: Closing Parent Issues Too Early

```markdown
PR: Add one feature
Closes #1 (parent issue with 10 sub-tasks)
```

**Problem:** Parent closes before all work is done

**Solution:** Use `Part of #1` instead

### ❌ Mistake 2: Not Linking to Parent

```markdown
PR: Some work
Closes #5 (sub-issue)
(No mention of parent #1)
```

**Problem:** Parent issue checklist doesn't update

**Solution:** Add `Part of #1` to link to parent

### ❌ Mistake 3: Multiple Closing Keywords

```markdown
Closes #1
Closes #2
Closes #3
```

**Problem:** Closes multiple issues unintentionally

**Solution:** Use `Closes #3, Part of #1, #2` to be explicit

## Summary

| Scenario | Keyword to Use | Result |
|----------|---------------|--------|
| PR completes a sub-issue | `Closes #[sub-issue]` | Sub-issue closes |
| PR is part of parent issue | `Part of #[parent]` | Parent checklist may update |
| PR addresses one task of many | `Part of #[issue]` | Issue stays open |
| PR is last piece of work | `Closes #[issue]` | Issue closes |
| PR relates but doesn't complete | `Relates to #[issue]` | Issue stays open |

## Questions?

If you're unsure how to link your PR:

1. Check if your work completes ALL acceptance criteria in the issue
   - **Yes**: Use `Closes #[issue]`
   - **No**: Use `Part of #[issue]` or `Relates to #[issue]`

2. Check if the issue is a parent with sub-issues
   - **Yes**: Never use `Closes #[parent]` from a PR
   - **No**: Can use `Closes #[issue]` if work is complete

3. When in doubt, use `Part of #[issue]` and let maintainers close the issue manually

---

**Related Documentation:**
- [Contributing Guide](../CONTRIBUTING.md)
- [PR Template](.github/PULL_REQUEST_TEMPLATE.md)
- [Setup Guide](.github/SETUP_GUIDE.md)
- [Workflows Documentation](.github/WORKFLOWS.md)
