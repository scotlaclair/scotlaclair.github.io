# AI-Enhanced Development Environment Setup

This guide outlines recommended steps to prepare a GitHub repository for collaboration with multiple AI coding assistants (GitHub Copilot, Copilot Chat/Agents, OpenAI Codex, and Google Gemini Code Assist) using either GitHub Codespaces or a local development environment.

## 1. Establish a Template Repository

1. Create a new repository that will act as the canonical template for future projects.
2. Populate the template with:
   - Standard issue and pull request templates.
   - Base GitHub Actions workflows (continuous integration, linting, dependency scanning, deployment).
   - Repository metadata (labels, milestones, project boards) stored as `.yml` or `.json` configuration files under `.github/` where possible.
3. Enable "Template repository" in the repository settings so new repos can inherit the structure.

## 2. Configure Repository Settings

| Area | Recommendation |
| --- | --- |
| **Branches** | Protect `main`/`release` branches with required reviews, status checks, and signed commits if applicable. |
| **Secrets** | Store API keys for AI services (Copilot, OpenAI, Google) in GitHub Secrets for CI/CD use. |
| **Access** | Grant collaborators least-privilege access; use GitHub Teams for role-based permissions. |
| **Security** | Enable Dependabot alerts and automated security updates. |

## 3. Standardize Issue & PR Automation

- Use `.github/ISSUE_TEMPLATE/` to define bug/feature/discussion templates aligned with triage automation.
- Configure `.github/pull_request_template.md` to require testing evidence and AI usage notes.
- Define a label taxonomy in `.github/labels.yml` (if using `github-label-sync`) or manage via GitHub UI.
- Set up milestones that mirror project roadmap phases.
- Connect repository to a GitHub Project (beta) with fields for status, priority, and owner. Automate card creation via Actions or the Project workflows UI.

## 4. Workflow Integrations

1. **Continuous Integration**
   - Create reusable workflows (`.github/workflows/*.yml`) that lint, test, and build.
   - Use matrix strategies to cover key runtimes.
2. **AI Quality Gates**
   - Add optional jobs that surface Copilot/Codex suggestions (e.g., `copilot-cli assess`) and static analysis (CodeQL).
   - Integrate policy checks ensuring AI-generated code is reviewed and attributed.
3. **Automation Bots**
   - Configure GitHub Apps like `release-drafter`, `auto-merge`, and `triage` for predictable automation.

## 5. Codespaces & Local Environment

### Codespaces

- Define `.devcontainer/devcontainer.json` with:
  - Extensions for Copilot, Copilot Chat, and Gemini Code Assist (if available via VS Code marketplace).
  - Post-create commands to install `copilot` CLI, `gh` CLI, and any SDKs (OpenAI, Google).
  - Port forwarding defaults and container resources sized for AI tooling (4+ cores, 8+ GB RAM recommended).
- Store reusable devcontainer features for consistent linting/testing tools.

### Local Development

- Mirror the devcontainer config using VS Code's `devcontainer` extension or `docker-compose`.
- Maintain `.tool-versions` or `.nvmrc` to lock runtimes for parity with CI.
- Provide setup scripts (e.g., `scripts/setup-ai-tools.sh`) that install CLIs/SDKs and configure environment variables.

## 6. Credential & Policy Management

- Document environment variables required for each AI tool in `docs/ENVIRONMENT.md` and provide sample `.env.example` files.
- Use secret scanning to ensure credentials are not committed.
- Establish usage policies covering:
  - Attribution for AI-generated code.
  - Required human review before merge.
  - Compliance with licensing or data-handling rules.

## 7. Onboarding Checklist

Create a checklist issue template for new contributors including:

- Enable Copilot, Copilot Chat, Codex, and Gemini extensions in their editor.
- Authenticate `gh` CLI and `copilot` CLI.
- Run `npm install`/`pip install`/etc. in Codespaces or locally.
- Execute lint/test workflows locally to validate tooling.

## 8. Continuous Improvement

- Schedule quarterly reviews of automation effectiveness, AI tool usage metrics, and workflow run times.
- Encourage contributors to log AI feedback in a dedicated GitHub Discussion or Project view.
- Iterate on templates and workflows as best practices evolve.

---

With this foundation in place, you can create new repositories from the template and immediately benefit from consistent automation, governance, and AI-assisted development workflows.

## Appendix: Using "Copy patch" and "Copy git apply" in GitHub Diffs

When reviewing pull requests in the GitHub web UI you will often see two handy buttons above each diff hunk: **Copy patch** and **Copy git apply**. These shortcuts let you quickly bring suggested changes into your local environment without manually editing files.

### Copy patch

- **What it copies:** A standard unified diff (the same text that would appear if you clicked the "Raw" view of the diff).
- **How to use it:**
  1. Click **Copy patch** on the desired diff hunk.
  2. Paste the contents into a file (for example `snippet.patch`).
  3. Apply it locally with `git apply snippet.patch` or inspect it with tools like `patch`.
- **When to use it:** Choose this when you simply want the diff text and prefer to manage the `git apply` step manually or share the diff with someone else.

### Copy git apply

- **What it copies:** A ready-to-run shell command that echoes the diff and immediately pipes it into `git apply`.
- **How to use it:**
  1. Click **Copy git apply** to copy the command to your clipboard.
  2. Paste the command directly into your terminal while you are inside the repository.
  3. Run it to apply the diff in one step—no temporary files required.
- **When to use it:** This is ideal for quickly applying small suggested changes or reviewer patches during code review, especially when you trust the diff and want a streamlined workflow.

Both options produce identical results once applied; the difference is simply whether you receive the raw diff or a turnkey command. After applying either version, remember to verify the changes (`git diff`, run tests) before committing.
