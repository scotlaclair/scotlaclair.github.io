# GitHub Actions Workflows

This document describes the automated workflows configured in this repository.

## Active Workflows

### 1. Spark Automation (`spark-automation.yml`)

**Purpose**: Automates the spark submission and lifecycle management process

**Triggers**:
- Issue opened with `spark` label
- Issue labeled (when `spark` label is added)
- Issue edited

**What it does**:
1. Adds `stage-ideation` label to new sparks
2. Posts welcome comment on new spark submissions
3. Notifies when sparks are promoted
4. Provides next steps and guidance

**Permissions**:
- `issues: write` - Add labels and comments
- `contents: read` - Read repository content

**Automated Actions**:

*On Spark Submission:*
- Adds `stage-ideation` label if no stage label exists
- Posts welcome comment with:
  - What happens next
  - How to engage effectively
  - Link to spark process documentation

*On Spark Promotion:*
- Detects when `promoted` or `stage-development` label is added
- Posts congratulatory comment
- Acknowledges the contributor

**Benefits**:
- Consistent onboarding for spark submitters
- Clear expectations and next steps
- Reduced manual work for maintainers
- Better contributor experience

---

### 2. Deploy to GitHub Pages (`pages.yml`)

**Purpose**: Automatically deploys the site to GitHub Pages

**Triggers**:
- Push to `main` branch
- Manual trigger via workflow_dispatch

**What it does**:
1. Checks out the repository
2. Configures GitHub Pages
3. Uploads the site content as an artifact
4. Deploys to GitHub Pages

**Permissions**:
- `contents: read` - Read repository content
- `pages: write` - Deploy to Pages
- `id-token: write` - Required for Pages deployment

**When to use manual trigger**:
- After making documentation changes
- To redeploy after fixing issues
- To verify deployment

**Usage**:
```bash
# Automatically runs on push to main
git push origin main

# Manual trigger via GitHub UI:
# Actions → Deploy to GitHub Pages → Run workflow

# Manual trigger via GitHub CLI:
gh workflow run pages.yml
```

---

### 3. Label Issues and PRs (`label-issues.yml`)

**Purpose**: Automatically adds labels to issues and PRs based on their title

**Triggers**:
- Issue opened or edited
- Pull request opened or edited

**What it does**:
Analyzes the issue/PR title and adds appropriate labels:

| Title Contains | Label Added |
|----------------|-------------|
| `[spark]` or `spark:` | `spark` |
| `[bug]` or `bug:` | `bug` |
| `[feature]` or `feature:` | `feature` |
| `[docs]` or `documentation` | `documentation` |
| `[pages]` or `github pages` | `github-pages` |
| `[automation]` or `workflow` | `automation` |
| `[project management]` | `project-management` |
| `[contributor experience]` | `contributor-experience` |
| `[knowledge base]` or `[sdlc]` | `knowledge-base` |
| `[templates]` or `[labels]` | `templates` |

**Special behavior**:
- If no labels match, adds `triage` label to new issues
- Only processes issues (not PRs) for triage label

**Permissions**:
- `issues: write` - Add labels to issues
- `pull-requests: write` - Add labels to PRs

**Tips for contributors**:
- Use consistent title prefixes like `[Bug]:` or `[Feature]:`
- The title is case-insensitive
- Multiple labels can be added if title contains multiple keywords

---

### 4. Stale Issues and PRs (`stale.yml`)

**Purpose**: Automatically manages inactive issues and pull requests

**Triggers**:
- Weekly schedule: Sundays at midnight UTC
- Manual trigger via workflow_dispatch

**What it does**:
1. Finds issues/PRs with no activity for 60 days
2. Adds `stale` label and posts a warning comment
3. After 14 more days of inactivity, closes the item
4. Skips items with exempt labels or assignees

**Settings**:
- **Days before stale**: 60 days
- **Days before close**: 14 days after marked stale
- **Operations per run**: 30 (to avoid rate limiting)

**Exempt labels** (won't be marked stale):
- `pinned` - Important issues to keep open
- `security` - Security issues
- `spark` - Spark ideas under discussion
- `in-progress` - Active work
- `blocked` - Waiting on external factors

**Exempt conditions**:
- Issues/PRs with milestones are NOT automatically exempt
- Issues/PRs with assignees are NOT automatically exempt
- But they still need activity to avoid being stale

**Messages**:

*Stale warning* (after 60 days):
> This issue has been automatically marked as stale because it has not had
> recent activity. It will be closed if no further activity occurs within 14 days.
> If this issue is still relevant, please add a comment to keep it open.

*Close message* (after 74 days total):
> This issue has been automatically closed due to inactivity.
> If you believe this issue is still relevant, please reopen it or create a new issue
> with updated information.

**How to prevent closure**:
- Add a comment with updates
- Add the `pinned` label for permanent issues
- Add the `in-progress` label if actively working
- Push commits to PRs

**Manual trigger**:
```bash
# Via GitHub UI:
# Actions → Stale Issues and PRs → Run workflow

# Via GitHub CLI:
gh workflow run stale.yml
```

**Permissions**:
- `issues: write` - Mark and close stale issues
- `pull-requests: write` - Mark and close stale PRs

---

## Workflow Best Practices

### For Repository Maintainers

1. **Monitor workflow runs**: Check the Actions tab regularly
2. **Review automation results**: Ensure labels are being applied correctly
3. **Adjust settings**: Modify workflows as the project evolves
4. **Add new automations**: Create new workflows for repetitive tasks

### For Contributors

1. **Use clear titles**: Help auto-labeling work correctly
2. **Keep issues active**: Comment on progress to avoid stale marking
3. **Respond to stale warnings**: Add updates if work is ongoing
4. **Check workflow status**: Ensure your PRs pass automated checks

### Adding New Workflows

To add a new workflow:

1. Create a `.yml` file in `.github/workflows/`
2. Define triggers and jobs
3. Test with manual trigger first
4. Document in this file
5. Update repository documentation

**Example structure**:
```yaml
name: Workflow Name

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

jobs:
  job-name:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Step name
        run: echo "Hello"
```

---

## Troubleshooting

### Workflow Not Running

**Check**:
1. Workflow file syntax (use GitHub's workflow editor)
2. Trigger conditions are met
3. Repository permissions allow Actions
4. Workflow is not disabled

**Solution**:
```bash
# Validate workflow syntax
gh workflow view pages.yml

# List workflow runs
gh run list --workflow=pages.yml

# View run details
gh run view [RUN_ID]
```

### Auto-Labeling Not Working

**Common issues**:
- Title doesn't match patterns
- Missing permissions in workflow
- Labels don't exist in repository

**Solution**:
1. Check title uses correct format: `[Type]: Description`
2. Ensure labels exist (see `.github/labels.yml`)
3. Verify workflow has `issues: write` permission

### Stale Bot Too Aggressive

**Solution**:
1. Add `pinned` label to important issues
2. Increase `days-before-stale` in `stale.yml`
3. Add more labels to `exempt-issue-labels`

---

## Workflow Metrics

Monitor these metrics for workflow health:

- **Success rate**: Should be >95% for all workflows
- **Run time**: Most workflows should complete in <5 minutes
- **Frequency**: Check that scheduled workflows run as expected
- **Rate limits**: Ensure operations stay within GitHub limits

---

## Future Workflow Ideas

Consider adding workflows for:

- **Spark-to-project conversion**: Auto-create project when spark is approved
- **Documentation validation**: Check for broken links and formatting
- **Security scanning**: CodeQL and dependency scanning
- **PR size checking**: Warn on very large PRs
- **Release automation**: Auto-generate release notes
- **Link checking**: Verify all links in documentation work
- **Markdown linting**: Enforce consistent markdown style

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Actions/Stale Documentation](https://github.com/actions/stale)
- [Manual Testing Guide for Spark Automation](TESTING_SPARK_AUTOMATION.md) - Testing procedures
- [Sub-Issue Management Guide](SUB_ISSUE_MANAGEMENT.md) - Best practices for linking PRs to parent and sub-issues

---

**Questions?** Open a [Discussion](../../discussions) or check the [Setup Guide](.github/SETUP_GUIDE.md).
