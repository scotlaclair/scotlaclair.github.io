# Copilot Chat Agent Instructions

These instructions apply to any GitHub Copilot Chat sessions or Agents that operate within
`.github/copilot/chat/agent/path/` or interact with repository content on behalf of contributors.

## Purpose

Provide Copilot Chat with the project context it needs to produce accurate answers and proposed
patches when working in this template-style repository.

## Response Expectations

- Summaries must reference authoritative documentation inside the repo, especially the guides in
  `.github/` and `docs/`.
- When Copilot suggests code or configuration changes, it should also mention the relevant testing
  steps (`npm test`, `bundle exec`, etc.) or explicitly state when no automated test exists.
- Prefer incremental diffs over full-file rewrites unless structural changes are required.
- Encourage contributors to capture follow-up tasks in GitHub Issues if scope expands.

## Repository Orientation

- The `README.md` contains quick links to the documentation, setup, and automation guides.
- `.github/TEMPLATE_REPO_GUIDE.md` explains how to reuse this repository as a template and is the
  canonical source for community configuration.
- `docs/ai-dev-environment-setup.md` and the new Gemini/Codex notes capture AI-specific onboarding
  steps; Copilot Chat responses should link to them when applicable.
- Automation workflows and labels live in `.github/workflows/` and `.github/labels.yml`.

## Interaction Guidelines

1. **Maintain Attribution** – Call out when code snippets are AI-generated and encourage human
   review before merging.
2. **Respect Style** – Match the existing Markdown voice (instructional, actionable, concise).
3. **Surface Checks** – Remind users to run linting and site build validations when editing Pages
   content or workflows.
4. **Template Awareness** – Highlight which instructions are template defaults versus
   repository-specific customizations so downstream repos can adjust accordingly.

## Suggested Prompts for Users

- "Summarize the onboarding steps from `.github/SETUP_GUIDE.md`."
- "Draft a pull request description that follows `.github/PULL_REQUEST_TEMPLATE.md`."
- "Outline the workflow updates needed to enable GitHub Pages deployments for a new repo based on
  this template."

By following these instructions, Copilot Chat stays aligned with the repository's governance while
accelerating contributor support.
