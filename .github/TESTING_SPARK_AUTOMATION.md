# Testing Spark Automation

This guide provides instructions for testing the Spark automation workflows to ensure they function correctly.

## Overview

The Spark system includes three main automation workflows:

1. **Spark Automation** - Manages spark lifecycle and notifications
2. **Update Parent Issue Checklist** - Auto-updates checklists when PRs merge
3. **Label Issues and PRs** - Automatically applies labels based on titles

## Prerequisites

- Repository access with ability to create issues and PRs
- GitHub Actions enabled for the repository
- Understanding of GitHub's merge process

## Test 1: Spark Submission and Welcome Comment

**Purpose:** Verify that new sparks receive automatic labels and welcome comment

**Steps:**

1. Go to [New Issue](../../issues/new/choose)
2. Select "💡 Spark (New Idea)" template
3. Fill out the form with test data:
   - **Title:** `[Spark]: Test Spark Automation`
   - **Description:** Brief test description
   - **Priority:** Select any option
4. Submit the issue

**Expected Results:**
- Issue is labeled with `spark` and `triage`
- Issue is labeled with `stage-ideation`
- Welcome comment appears within 1-2 minutes with:
  - "🎉 Thank you for submitting a spark!"
  - Information about what happens next
  - How to help
  - Link to Spark Process Documentation

**Troubleshooting:**
- If labels don't appear, check GitHub Actions tab for workflow runs
- If comment doesn't appear, verify the workflow has `issues: write` permission
- Wait up to 5 minutes before considering it failed

## Test 2: Spark Promotion Notification

**Purpose:** Verify that promoted sparks receive notification comment

**Steps:**

1. Use the test spark from Test 1 (or create a new one)
2. Add the label `promoted` or `stage-development` to the issue
3. Wait 1-2 minutes

**Expected Results:**
- Comment appears with:
  - "🚀 Spark Promoted!"
  - Information about next steps
  - Thank you message

**Troubleshooting:**
- Check that the spark has the `spark` label (required for workflow to run)
- Verify workflow triggered in Actions tab

## Test 3: Title-Based Auto-Labeling

**Purpose:** Verify issues and PRs receive labels based on title keywords

**Steps:**

1. Create a new issue with title: `[Spark] Test Auto Labeling`
2. Check labels immediately after creation

**Expected Results:**
- Issue is labeled with `spark`

**Additional Test Cases:**
- `[Bug] Something broken` → should get `bug` label
- `[Feature] New capability` → should get `feature` label
- `[Docs] Update documentation` → should get `documentation` label
- `[Automation] Workflow update` → should get `automation` label

## Test 4: Parent Issue Checklist Auto-Update

**Purpose:** Verify that merged PRs automatically update parent issue checklists

### Setup Phase

1. **Create a parent issue** with a checklist:
   ```markdown
   ## Tasks
   
   - [ ] Implement feature X
   - [ ] Add tests for feature X
   - [ ] Update documentation
   ```
   
2. Note the issue number (e.g., #42)

### Test Case 4A: Direct PR Number Reference

3. **Create a branch** for your changes:
   ```bash
   git checkout -b test-checklist-automation
   ```

4. **Make a small change** (e.g., add a comment to a file)

5. **Create a PR** with:
   - **Title:** `Implement feature X`
   - **Body:** Include `Relates to #42` (use your actual issue number)
   - In the body, add: `- [ ] Implement feature X (PR #X)` where X is this PR's number

6. **Merge the PR**

7. **Check the parent issue (#42)** after 1-2 minutes

**Expected Results:**
- Checklist item that references the PR number is checked: `- [x]`
- Comment appears: "✅ Checklist item completed via PR #X"

### Test Case 4B: Keyword Matching

8. **Create another PR** with:
   - **Title:** `Add comprehensive tests for feature X implementation`
   - **Body:** `Part of #42`

9. **Merge the PR**

10. **Check the parent issue (#42)** after 1-2 minutes

**Expected Results:**
- Checklist item "Add tests for feature X" is checked
- Comment appears confirming the update

### Test Case 4C: No Match Found

11. **Create a PR** with:
   - **Title:** `Refactor something unrelated`
   - **Body:** `Relates to #42`

12. **Merge the PR**

13. **Check the parent issue (#42)** after 1-2 minutes

**Expected Results:**
- No checklist items are checked
- Comment appears with:
  - "🔗 PR #X has been merged and is related to this issue"
  - Note about manual checklist update
  - Instructions on how to manually check items

### Cleanup

14. Close the test issue #42
15. Delete the test branch

## Test 5: Multiple Linked Issues

**Purpose:** Verify that one PR can update multiple parent issues

**Steps:**

1. **Create two parent issues** with checklists:
   - Issue #A: `- [ ] Task 1`
   - Issue #B: `- [ ] Task 1`

2. **Create a PR** with:
   - **Title:** `Complete Task 1`
   - **Body:** `Closes #A\nCloses #B`

3. **Merge the PR**

4. **Check both issues** after 1-2 minutes

**Expected Results:**
- Both issues have checklist item checked
- Both issues have confirmation comments

## Test 6: Different Linking Keywords

**Purpose:** Verify all supported linking keywords work

**Test Cases:**

Create separate PRs (or document expected behavior) for:
- `Closes #X`
- `Fixes #X`
- `Resolves #X`
- `Relates to #X`
- `Part of #X`

All should trigger the checklist update workflow.

## Validation Checklist

After testing, verify:

- [ ] New sparks receive welcome comments
- [ ] Promoted sparks receive promotion comments
- [ ] Issues receive appropriate labels based on titles
- [ ] Merged PRs update parent issue checklists (when match found)
- [ ] Manual update instructions posted (when no match found)
- [ ] Multiple issues can be updated by one PR
- [ ] All linking keywords work correctly
- [ ] Workflow logs are clean (no errors in Actions tab)

## Checking Workflow Logs

1. Go to the [Actions tab](../../actions)
2. Click on the relevant workflow run
3. Expand job steps to see detailed logs
4. Look for console.log messages and error messages

**Common Log Messages:**
- `Processing spark issue #X` - Spark automation triggered
- `Found linked issues: X, Y` - Checklist update found linked issues
- `✓ Updated checklist in issue #X` - Successfully updated checklist
- `No matching checklist items found` - No match, manual comment posted

## Rollback Procedure

If automation causes issues:

1. **Disable workflows temporarily:**
   - Go to Settings → Actions → Disable workflows
   - Or edit workflow files to add `if: false` condition

2. **Fix issues manually:**
   - Update checklists by hand
   - Post manual comments if needed

3. **Review and fix workflow code:**
   - Check workflow YAML syntax
   - Review JavaScript logic
   - Test changes in a fork first

4. **Re-enable workflows:**
   - Remove `if: false` or re-enable in settings

## Known Limitations

1. **Checklist location:** Only checklists in issue descriptions are updated, not comments
2. **Match accuracy:** Keyword matching may miss items with very different wording
3. **Timing:** Updates may take up to 2-3 minutes to appear
4. **Permissions:** Workflows need `issues: write` permission to function

## Reporting Issues

If you find bugs in the automation:

1. Document the steps to reproduce
2. Include workflow run logs (from Actions tab)
3. Create a new bug report with label `automation`
4. Tag maintainers for urgent issues

## Performance Considerations

- Workflow runs consume GitHub Actions minutes
- Each merged PR triggers the checklist update workflow
- Large repositories may need workflow optimization

## Future Improvements

Potential enhancements to consider:

- [ ] Support for checklist items in comments
- [ ] More sophisticated keyword matching (NLP)
- [ ] Configurable matching threshold
- [ ] Batch updates for multiple PRs
- [ ] Integration with GitHub Projects
- [ ] Metrics dashboard for automation success rate

---

**Questions?** Open a [Discussion](../../discussions) or contact maintainers.
