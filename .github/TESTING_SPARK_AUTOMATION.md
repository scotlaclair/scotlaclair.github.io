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
# Manual Testing Guide for Spark Automation

This document provides comprehensive manual testing procedures for validating the Spark System automation implemented in this repository.

## Overview

The Spark automation system includes:
- Automatic labeling and triaging of new sparks
- Welcome comments for spark submitters
- Promotion notifications
- Title-based auto-labeling for issues and PRs
- Checklist automation for tracking work across PRs

This guide outlines manual testing procedures to validate these features work correctly in production.

---

## Prerequisites

Before beginning testing:

- [ ] Access to create issues and PRs in the repository
- [ ] Understanding of the Spark Process (see [SPARK_PROCESS.md](SPARK_PROCESS.md))
- [ ] Familiarity with GitHub Actions workflows
- [ ] Test label (optional): Create a `test` label to identify test issues for cleanup

### Testing Environment

**Important**: These tests must be performed in the production repository with real issues and PRs. Create test issues with clear titles like `[TEST] Description` to identify them for later cleanup.

---

## Test Suite 1: Basic Spark Workflow

### Test 1.1: Spark Submission and Welcome Comment

**Purpose:** Verify new sparks receive automatic labels and welcome comment

**Prerequisites:**
- None

**Test Steps:**

1. Navigate to https://github.com/scotlaclair/scotlaclair.github.io/issues/new/choose
2. Select the "Spark" template
3. Fill out the spark form with test data:
   - **Title:** `[TEST] Sample Spark for Automation Testing`
   - **Description:** Provide a clear test description
   - **Category:** Select any category
4. Submit the issue
5. Wait 1-2 minutes for automation to run

**Expected Results:**
- [ ] Issue is created successfully
- [ ] `spark` label is automatically applied (if not already added by template)
- [ ] `triage` label is applied (if configured)
- [ ] `stage-ideation` label is applied within 1-2 minutes
- [ ] Welcome comment appears with:
  - Thank you message
  - What happens next (4 steps)
  - How to help (4 suggestions)
  - Link to Spark Process Documentation
  - Automated message footer

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

**Notes/Issues:**
```
[Record any problems or unexpected behavior]
```

---

### Test 1.2: Spark Promotion Notification

**Purpose:** Verify promoted sparks receive notification comment

**Prerequisites:**
- Test 1.1 completed OR existing spark issue available

**Test Steps:**

1. Open an existing spark issue (or use the one from Test 1.1)
2. Add the `promoted` label to the issue
   - Or add the `stage-development` label
3. Wait 1-2 minutes for automation to run
4. Check for promotion notification comment

**Expected Results:**
- [ ] Promotion comment appears within 1-2 minutes with:
  - "🚀 Spark Promoted!" heading
  - Congratulatory message
  - Information about next steps
  - Thank you message

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

**Notes/Issues:**
```
[Record any problems or unexpected behavior]
```

---

### Test 1.3: Title-Based Auto-Labeling

**Purpose:** Verify issues/PRs receive labels based on title keywords

**Prerequisites:**
- None

**Test Cases:**

#### Test 1.3a: Bug Label
**Steps:**
1. Create issue with title: `[TEST][Bug]: Sample bug report`
2. Verify `bug` label is automatically applied

**Expected:** `bug` label applied
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 1.3b: Feature Label
**Steps:**
1. Create issue with title: `[TEST][Feature]: Sample feature request`
2. Verify `feature` label is automatically applied

**Expected:** `feature` label applied
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 1.3c: Documentation Label
**Steps:**
1. Create issue with title: `[TEST][Docs]: Documentation update`
2. Verify `documentation` label is automatically applied

**Expected:** `documentation` label applied
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 1.3d: Multiple Labels
**Steps:**
1. Create issue with title: `[TEST][Bug] Documentation issue with GitHub Pages`
2. Verify multiple relevant labels are applied

**Expected:** Multiple labels applied based on keywords
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

**Overall Test 1.3 Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________

---

## Test Suite 2: Checklist Automation

**Note:** As of the current implementation, checklist automation may not be fully implemented. These tests document the expected behavior for when it is implemented.

### Test 2.1: Direct PR Number Reference

**Purpose:** Verify checklist updates when PR number is in checklist item

**Prerequisites:**
- Create a parent issue with a checklist

**Test Steps:**

1. Create a new issue titled `[TEST] Parent Issue with Checklist`
2. Add the following to the issue description:
   ```markdown
   ## Tasks
   - [ ] Fix bug (PR #123)
   - [ ] Add tests
   - [ ] Update docs
   ```
3. Note the issue number (e.g., #50)
4. Create a new branch for PR #123
5. Make a small change (e.g., update README)
6. Create PR #123 with:
   - **Title:** `Fix bug from issue #50`
   - **Description:** `Closes #50` or `Part of #50`
7. Merge the PR
8. Check parent issue #50

**Expected Results:**
- [ ] After PR merge, the checklist item `- [ ] Fix bug (PR #123)` becomes `- [x] Fix bug (PR #123)`
- [ ] A confirmation comment is posted on the parent issue
- [ ] Comment indicates which item was checked and by which PR

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

**Notes/Issues:**
```
[Record any problems or unexpected behavior]
```

---

### Test 2.2: Keyword Matching

**Purpose:** Verify checklist updates based on keyword overlap

**Prerequisites:**
- Create a parent issue with a checklist

**Test Steps:**

1. Create a new issue titled `[TEST] Parent Issue for Keyword Matching`
2. Add the following to the issue description:
   ```markdown
   ## Tasks
   - [ ] Add comprehensive tests for feature X
   - [ ] Update documentation for feature Y
   - [ ] Fix bug in component Z
   ```
3. Note the issue number (e.g., #51)
4. Create a new branch
5. Make a small change
6. Create PR with:
   - **Title:** `Add comprehensive tests for feature X`
   - **Description:** `Part of #51`
7. Merge the PR
8. Check parent issue #51

**Expected Results:**
- [ ] Checklist item matching PR title is automatically checked
- [ ] Match is based on significant word overlap (2+ words)
- [ ] Confirmation comment posted explaining the match

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

**Notes/Issues:**
```
[Record any problems or unexpected behavior]
```

---

### Test 2.3: No Match Found

**Purpose:** Verify manual instructions posted when no match

**Prerequisites:**
- Create a parent issue with a checklist

**Test Steps:**

1. Create a new issue titled `[TEST] Parent Issue - No Match Scenario`
2. Add the following to the issue description:
   ```markdown
   ## Tasks
   - [ ] Implement user authentication
   - [ ] Add database schema
   - [ ] Create API endpoints
   ```
3. Note the issue number (e.g., #52)
4. Create a new branch
5. Make a small change
6. Create PR with:
   - **Title:** `Update configuration files` (unrelated to checklist)
   - **Description:** `Relates to #52`
7. Merge the PR
8. Check parent issue #52

**Expected Results:**
- [ ] No checklist items are automatically checked
- [ ] Comment posted with manual update instructions
- [ ] Comment lists all unchecked items for reference
- [ ] Comment explains how to manually check the appropriate item

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

**Notes/Issues:**
```
[Record any problems or unexpected behavior]
```

---

### Test 2.4: Multiple Linked Issues

**Purpose:** Verify one PR can update multiple parent issues

**Prerequisites:**
- None

**Test Steps:**

1. Create first parent issue titled `[TEST] Parent Issue A`
   ```markdown
   ## Tasks
   - [ ] Implement shared utility function
   ```
   Note issue number (e.g., #53)

2. Create second parent issue titled `[TEST] Parent Issue B`
   ```markdown
   ## Tasks
   - [ ] Implement shared utility function
   ```
   Note issue number (e.g., #54)

3. Create a new branch
4. Make a small change
5. Create PR with:
   - **Title:** `Implement shared utility function`
   - **Description:** `Closes #53 and #54`
6. Merge the PR
7. Check both parent issues

**Expected Results:**
- [ ] Checklist item in issue #53 is checked
- [ ] Checklist item in issue #54 is checked
- [ ] Confirmation comments posted to both issues
- [ ] Both comments reference the same PR

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

**Notes/Issues:**
```
[Record any problems or unexpected behavior]
```

---

### Test 2.5: Different Linking Keywords

**Purpose:** Verify all supported keywords work

**Prerequisites:**
- Create parent issues for each keyword test

**Test Cases:**

#### Test 2.5a: "Closes" Keyword
**Steps:**
1. Create parent issue with checklist
2. Create PR with description: `Closes #XX`
3. Merge and verify checklist update

**Expected:** Checklist updated
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 2.5b: "Fixes" Keyword
**Steps:**
1. Create parent issue with checklist
2. Create PR with description: `Fixes #XX`
3. Merge and verify checklist update

**Expected:** Checklist updated
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 2.5c: "Resolves" Keyword
**Steps:**
1. Create parent issue with checklist
2. Create PR with description: `Resolves #XX`
3. Merge and verify checklist update

**Expected:** Checklist updated
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 2.5d: "Relates to" Keyword
**Steps:**
1. Create parent issue with checklist
2. Create PR with description: `Relates to #XX`
3. Merge and verify checklist update

**Expected:** Checklist updated
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

#### Test 2.5e: "Part of" Keyword
**Steps:**
1. Create parent issue with checklist
2. Create PR with description: `Part of #XX`
3. Merge and verify checklist update

**Expected:** Checklist updated
**Actual:** ___________
**Result:** ☐ Pass ☐ Fail

**Overall Test 2.5 Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________

---

## Test Suite 3: Edge Cases

### Test 3.1: Checklist Already Checked

**Purpose:** Verify handling of already-completed items

**Prerequisites:**
- Create a parent issue with a checklist

**Test Steps:**

1. Create parent issue with checklist:
   ```markdown
   ## Tasks
   - [x] Already completed task
   - [ ] Pending task
   ```
2. Create PR that matches the already-checked item
3. Merge PR
4. Verify behavior

**Expected Results:**
- [ ] No error occurs
- [ ] Already-checked item remains checked
- [ ] Comment indicates item was already completed
- [ ] No duplicate check marks added

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

---

### Test 3.2: Multiple PRs for Same Item

**Purpose:** Verify behavior when item already checked by previous PR

**Prerequisites:**
- Create a parent issue with a checklist

**Test Steps:**

1. Create parent issue with checklist item
2. Create first PR that matches the item
3. Merge first PR (item should be checked)
4. Create second PR that also matches the same item
5. Merge second PR
6. Verify behavior

**Expected Results:**
- [ ] First PR checks the item
- [ ] Second PR detects item is already checked
- [ ] Second PR comment acknowledges item already complete
- [ ] No errors or duplicate checks

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

---

### Test 3.3: Large Parent Issue

**Purpose:** Test performance with many checklist items

**Prerequisites:**
- None

**Test Steps:**

1. Create parent issue with 50+ checklist items:
   ```markdown
   ## Tasks
   - [ ] Task 1
   - [ ] Task 2
   ...
   - [ ] Task 50
   ```
2. Create PR that matches one of the items
3. Merge PR
4. Monitor workflow execution time and success

**Expected Results:**
- [ ] Workflow completes successfully
- [ ] Execution time is reasonable (<2 minutes)
- [ ] Correct item is identified and checked
- [ ] No timeout or performance issues

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

---

### Test 3.4: Special Characters in Titles

**Purpose:** Verify matching works with emojis, unicode, etc.

**Prerequisites:**
- Create a parent issue with a checklist

**Test Steps:**

1. Create parent issue with checklist containing special characters:
   ```markdown
   ## Tasks
   - [ ] 🎨 Add UI improvements
   - [ ] 🐛 Fix bug in module
   - [ ] ✨ Implement new feature
   - [ ] 📝 Update docs (français)
   ```
2. Create PR with title: `🎨 Add UI improvements`
3. Merge PR
4. Verify checklist update

**Expected Results:**
- [ ] Matching works correctly with emojis
- [ ] Matching works with unicode characters
- [ ] Special characters don't break automation
- [ ] Correct item is checked

**Actual Results:**
```
[Record observations here]
```

**Status:** ⏳ Pending
**Tester:** ___________
**Date:** ___________
**Result:** ☐ Pass ☐ Fail

---

## Troubleshooting Guide

### Workflow Not Running

**Symptoms:**
- No labels applied automatically
- No welcome comment appears
- No automation activity

**Possible Causes:**
1. Workflow is disabled
2. Trigger conditions not met
3. Permissions issue
4. GitHub Actions quota exceeded

**Debugging Steps:**
```bash
# Check workflow status
gh workflow view spark-automation.yml

# List recent runs
gh run list --workflow=spark-automation.yml --limit 5

# View specific run details
gh run view [RUN_ID] --log
```

**Solutions:**
- Enable workflow in Actions tab
- Verify issue has required labels
- Check repository Actions permissions
- Review GitHub Actions quotas

---

### Labels Not Applied

**Symptoms:**
- Issue created but no automatic labels

**Possible Causes:**
1. Title doesn't match patterns
2. Label doesn't exist in repository
3. Workflow permissions insufficient

**Debugging Steps:**
1. Check workflow runs in Actions tab
2. Verify labels exist in repository settings
3. Review workflow logs for errors
4. Check workflow has `issues: write` permission

**Solutions:**
- Update issue title to match patterns
- Create missing labels (see `.github/labels.yml`)
- Update workflow permissions

---

### Welcome Comment Missing

**Symptoms:**
- Spark created but no welcome comment

**Possible Causes:**
1. Workflow didn't trigger on `opened` event
2. Issue doesn't have `spark` label
3. Workflow error occurred

**Debugging Steps:**
1. Verify issue has `spark` label
2. Check Actions tab for workflow run
3. Review workflow logs
4. Check bot permissions

**Solutions:**
- Manually add `spark` label to trigger
- Check workflow logs for specific errors
- Verify GitHub token has correct scopes

---

### Checklist Not Updating

**Symptoms:**
- PR merged but checklist not updated

**Possible Causes:**
1. Checklist automation not implemented yet
2. PR doesn't link to parent issue
3. No matching checklist item found
4. Workflow error

**Debugging Steps:**
1. Verify PR description links to parent issue
2. Check for checklist automation workflow
3. Review workflow logs
4. Verify issue contains valid checklist

**Solutions:**
- Ensure PR uses linking keywords (`Closes #X`, `Part of #X`)
- Check if checklist automation is enabled
- Manually update checklist if automation fails
- Review matching algorithm if no match found

---

## Test Results Summary

### Test Suite 1: Basic Spark Workflow
- Test 1.1: Spark Submission and Welcome Comment - ⏳ Pending
- Test 1.2: Spark Promotion Notification - ⏳ Pending
- Test 1.3: Title-Based Auto-Labeling - ⏳ Pending

### Test Suite 2: Checklist Automation
- Test 2.1: Direct PR Number Reference - ⏳ Pending
- Test 2.2: Keyword Matching - ⏳ Pending
- Test 2.3: No Match Found - ⏳ Pending
- Test 2.4: Multiple Linked Issues - ⏳ Pending
- Test 2.5: Different Linking Keywords - ⏳ Pending

### Test Suite 3: Edge Cases
- Test 3.1: Checklist Already Checked - ⏳ Pending
- Test 3.2: Multiple PRs for Same Item - ⏳ Pending
- Test 3.3: Large Parent Issue - ⏳ Pending
- Test 3.4: Special Characters in Titles - ⏳ Pending

---

## Sign-off

### Test Completion Checklist

- [ ] All Test Suite 1 tests completed
- [ ] All Test Suite 2 tests completed
- [ ] All Test Suite 3 tests completed
- [ ] Test results documented
- [ ] Bugs filed for any failures
- [ ] Retests completed for bug fixes
- [ ] Documentation updated based on findings

### Final Approval

**Tester:** _____________________________ **Date:** ___________

**Reviewer:** ___________________________ **Date:** ___________

**Automation Status:** ☐ Production Ready ☐ Needs Fixes

**Notes:**
```
[Final comments and recommendations]
```

---

## Related Documentation

- [Spark Process Documentation](SPARK_PROCESS.md)
- [Spark Workflow Guide](SPARK_WORKFLOW.md)
- [GitHub Actions Workflows](WORKFLOWS.md)
- [Contributing Guide](../CONTRIBUTING.md)

---

## Change History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| YYYY-MM-DD | 1.0 | Initial testing guide created | [Author] |

---

**Questions or Issues?** Open a [Discussion](../../discussions) or create an [Issue](../../issues/new/choose).
