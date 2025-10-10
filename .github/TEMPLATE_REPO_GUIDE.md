# Template Repository Configuration Guide

This guide captures the reusable configuration from `scotlaclair.github.io` so you can stand up
new repositories with the same community and workflow foundations. Use it as a checklist when
turning this repository into a template or when porting the setup to other projects.

---

## 1. Repository Settings

- **Template Repository**: From the repository settings, enable “Template repository” so others can
  create new projects pre-populated with these files.
- **Default Branch Protection**: Require pull request reviews, status checks, and linear history to
  keep contributions consistent.
- **Pages Configuration**: If the new repo should publish through GitHub Pages, decide whether the
  root or `/docs` directory should be served and ensure an `index.html` (or equivalent) exists.

## 2. Community Health Files

All of the following files reside in the root or `.github/` directory:

| Purpose | Location | Notes |
| --- | --- | --- |
| Code of Conduct | `CODE_OF_CONDUCT.md` | Reference in new repository settings so GitHub auto-detects it. |
| Contributing Guide | `CONTRIBUTING.md` | Update project-specific contribution paths and expectations. |
| Security Policy | `SECURITY.md` | Adjust contact address or disclosure window if needed. |
| Pull Request Template | `.github/PULL_REQUEST_TEMPLATE.md` | Provides consistent change summaries and testing notes. |
| Issue Templates | `.github/ISSUE_TEMPLATE/` | Includes spark, bug, documentation, feature, and setup sub-issue templates. |
| Discussion Templates | `.github/DISCUSSION_TEMPLATE/` and `.github/discussions.yml` | Pre-configures Ideas, Questions, and Show & Tell topics. |
| Labels Definition | `.github/labels.yml` | Import via GitHub CLI or automation to standardize labels. |

## 3. Knowledge Base & Documentation

- **Docs Site**: The `docs/` directory functions as the knowledge base and mirrors the published site.
  When cloning to a new repo, review internal links for project-specific paths.
- **Guides Library**: `.github/` contains focused guides (setup, workflows, wiki, discussions, optional
  additions). Keep them when you want the same operating model, or prune as needed for simpler repos.
- **Homepage Assets**: `index.html`, `assets/`, `robots.txt`, `sitemap.xml`, and `404.html` create a
  basic but complete web presence. Decide if each new repo needs its own site or should defer to a
  central hub.

## 4. Automation & Workflows

- **GitHub Actions**: `.github/workflows/` contains reusable automation for Pages deployments,
  labeling, and maintenance. Confirm the triggers make sense for the new project before enabling.
- **Checklists & Summaries**: `.github/CHECKLIST_AUTOMATION_SUMMARY.md` and related files document how
  automation ties into issue and PR hygiene. Update references to match the new repository’s goals.

## 5. Optional Setup Tasks

Use `.github/OPTIONAL_ADDITIONS_GUIDE.md` and `.github/SETUP_GUIDE.md` as comprehensive references
for optional features such as custom domains, sitemap management, and spark workflows. When creating
a template, these guides help contributors understand which pieces to keep or adapt.

## 6. Getting Started Workflow

1. **Create from Template**: Use the “Use this template” button (or `gh repo create --template`).
2. **Review Branding**: Update names, logos, and copy in `index.html`, `docs/`, and `README.md`.
3. **Audit Links**: Fix repository-specific links (issues, discussions, wiki) so they point to the
   new repo.
4. **Set Up Automation**: Enable Actions and, if necessary, update secrets or environment variables.
5. **Confirm Publishing**: If using Pages, configure the branch/folder and verify the site builds.
6. **Publish Setup Tasks**: Create parent issues using the provided templates to track onboarding
   progress for the new repository.

---

By following this checklist, every repository created from the template will launch with a consistent
community experience, documentation hub, and automation suite, reducing setup time and ensuring best
practices are in place from day one.
