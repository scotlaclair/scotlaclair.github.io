# Repository Setup Guide

This guide explains how to use the issue templates to create sub-issues for the repository configuration and automation setup.

## Overview

The repository has been configured with comprehensive templates and workflows to support the "Spark-driven" SDLC approach. This guide will help you create structured sub-issues for each of the 7 main setup areas.

## Issue Templates Available

### Setup Area Templates (Items 1-7)

These templates correspond to the 7 main areas in the setup checklist:

1. **GitHub Pages & Documentation** (`.github/ISSUE_TEMPLATE/1-github-pages-documentation.yml`)
2. **Sparks (New Ideas)** (`.github/ISSUE_TEMPLATE/2-sparks-ideas.yml`)
3. **Project Management** (`.github/ISSUE_TEMPLATE/3-project-management.yml`)
4. **Automation & Workflows** (`.github/ISSUE_TEMPLATE/4-automation-workflows.yml`)
5. **Templates, Labels, Milestones** (`.github/ISSUE_TEMPLATE/5-templates-labels-milestones.yml`)
6. **Contributor Experience** (`.github/ISSUE_TEMPLATE/6-contributor-experience.yml`)
7. **Knowledge Base & SDLC Documentation** (`.github/ISSUE_TEMPLATE/7-knowledge-base-sdlc.yml`)

### Additional Templates

- **Spark Submission** - For capturing new ideas (`spark.yml`)
- **Feature Request** - For well-defined features (`feature.yml`)
- **Bug Report** - For reporting issues (`bug.yml`)
- **Documentation** - For documentation improvements (`documentation.yml`)

## How to Create Sub-Issues

### Option 1: Using GitHub UI

1. Go to the [Issues page](../../issues)
2. Click **"New Issue"**
3. Select the appropriate template from the list
4. Fill out the form with relevant information
5. Link to the parent issue using `Relates to #[parent-issue-number]`
6. Submit the issue

### Option 2: Using GitHub CLI

```bash
# Install GitHub CLI if needed: https://cli.github.com/

# Create an issue from a template
gh issue create --template "1-github-pages-documentation.yml" \
  --title "[Pages & Docs]: Configure GitHub Pages settings"
```

### Option 3: Direct Links

Create issues directly using these URLs (replace `[TITLE]` with your title):

1. [GitHub Pages & Documentation](../../issues/new?template=1-github-pages-documentation.yml)
2. [Sparks (New Ideas)](../../issues/new?template=2-sparks-ideas.yml)
3. [Project Management](../../issues/new?template=3-project-management.yml)
4. [Automation & Workflows](../../issues/new?template=4-automation-workflows.yml)
5. [Templates, Labels, Milestones](../../issues/new?template=5-templates-labels-milestones.yml)
6. [Contributor Experience](../../issues/new?template=6-contributor-experience.yml)
7. [Knowledge Base & SDLC](../../issues/new?template=7-knowledge-base-sdlc.yml)

## Recommended Workflow

### Step 1: Create Parent Sub-Issues

For each of the 7 main areas, create a parent issue using the corresponding template. This will give you:

- A structured checklist of tasks
- Pre-defined labels for organization
- A place to track progress and discussion

### Step 2: Break Down Further (Optional)

If a parent sub-issue has many tasks, you can create additional child issues:

1. Use the standard feature/bug/documentation templates
2. Reference the parent using `Part of #[parent-issue-number]`
3. Use the same labels as the parent for consistency

### Step 3: Track in Project Board

1. Add all issues to your GitHub Project board
2. Use the SDLC stage columns (Idea, Design, Dev, Test, Review, Done)
3. Move issues through the workflow as they progress

## Labels

All issues will be automatically labeled based on the template used. Key labels include:

- **Setup Areas**: `github-pages`, `automation`, `project-management`, `templates`, `contributor-experience`, `knowledge-base`
- **Issue Types**: `spark`, `feature`, `bug`, `documentation`
- **Status**: `triage`, `in-progress`, `blocked`, `ready-for-review`
- **Priority**: `priority-critical`, `priority-high`, `priority-medium`, `priority-low`
- **SDLC Stages**: `stage-ideation`, `stage-design`, `stage-development`, `stage-testing`, `stage-review`

See `.github/labels.yml` for the complete list of available labels.

## Automation

The following automations are in place:

### Auto-Labeling (`label-issues.yml`)

- Automatically adds labels based on issue title
- Adds `triage` label to new issues without other labels
- Runs on issue creation and updates

### Pages Deployment (`pages.yml`)

- Automatically deploys site to GitHub Pages
- Triggers on push to `main` branch
- Can be manually triggered via workflow_dispatch

### Stale Issue Management (`stale.yml`)

- Marks issues/PRs as stale after 60 days of inactivity
- Closes stale items after additional 14 days
- Excludes important labels: `pinned`, `security`, `spark`, `in-progress`, `blocked`
- Runs weekly on Sundays

## Best Practices

### When Creating Issues

1. **Use the right template** - Choose the template that best fits your need
2. **Be specific** - Provide clear, detailed information
3. **Link related issues** - Use `Relates to`, `Closes`, or `Part of` keywords
4. **Check for duplicates** - Search existing issues first
5. **Add context** - Include relevant information in additional context fields

### When Working on Issues

1. **Assign yourself** - Claim issues you're working on
2. **Update status** - Comment on progress regularly
3. **Use draft PRs** - Create draft PRs for work in progress
4. **Link PRs** - Reference issues in PR descriptions
5. **Request reviews** - Tag maintainers when ready

### For Sparks

1. **Submit early** - Don't wait for a fully formed idea
2. **Engage in discussion** - Respond to feedback and questions
3. **Be open** - Ideas may evolve through discussion
4. **Document outcomes** - Update spark issues with decisions
5. **Promote when ready** - Convert approved sparks to features

## Example: Creating a Complete Sub-Issue Tree

Here's an example workflow for "1. GitHub Pages & Documentation":

```
Main Issue: Repository Configuration and Automation Setup
│
├── Sub-Issue 1: GitHub Pages & Documentation (from template 1)
│   ├── Task: Configure Pages settings
│   ├── Task: Structure Wiki
│   ├── Task: Add comprehensive README
│   ├── Task: Set up knowledge base
│   └── Task: Create discussion templates
│
├── Sub-Issue 2: Sparks (New Ideas) (from template 2)
│   └── ...
│
└── ... (other sub-issues)
```

## Support Files

The following files support the setup process:

- **CONTRIBUTING.md** - Guide for contributors
- **CODE_OF_CONDUCT.md** - Community guidelines
- **SECURITY.md** - Security policy and reporting
- **README.md** - Project overview and documentation
- **.github/labels.yml** - Label definitions
- **.github/workflows/** - Automation workflows

## Next Steps

1. **Create the 7 main sub-issues** using templates 1-7
2. **Set up GitHub Project board** with SDLC columns
3. **Configure repository settings** (enable features, set permissions)
4. **Invite collaborators** and share contribution guidelines
5. **Begin work** on the highest priority items

## Resources

- [GitHub Issues Documentation](https://docs.github.com/en/issues)
- [GitHub Projects Documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Contributing Guide](../../CONTRIBUTING.md)

## Questions?

- 💬 Start a [Discussion](../../discussions)
- 📖 Check the [Documentation](https://scotlaclair.github.io/)
- 🐛 [Report an Issue](../../issues/new/choose)

---

Happy Setup! 🚀
