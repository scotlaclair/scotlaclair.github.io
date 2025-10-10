# Codex CLI & Workflow Guide

Use this reference to integrate OpenAI Codex with projects based on the
`scotlaclair.github.io` template.

## 1. Install & Authenticate

1. Install the OpenAI CLI (requires Python 3.11+):
   ```bash
   pip install openai
   ```
2. Export your API key (store in 1Password, `pass`, or your preferred secret manager):
   ```bash
   export OPENAI_API_KEY="$(pass show ai/openai)"
   ```
3. (Optional) Configure a default organization or project:
   ```bash
   export OPENAI_ORG="org_123"
   ```

## 2. Helpful Commands

- **Chat about repository context**
  ```bash
  openai chat.completions.create \
    -m gpt-4.1-mini \
    -p "Summarize the setup tasks in .github/SETUP_GUIDE.md"
  ```
- **Generate code suggestions for a file**
  ```bash
  openai responses.create \
    -m gpt-4.1-mini \
    -i @path/to/file.py \
    -p "Add unit tests following the repository's conventions."
  ```
- **Review a diff**
  ```bash
  git diff > /tmp/changes.diff
  openai responses.create -m gpt-4o-mini -f /tmp/changes.diff -p "Review this diff for issues."
  ```

## 3. Best Practices

- Track AI-assisted commits in pull request summaries as required by
  `.github/PULL_REQUEST_TEMPLATE.md`.
- Run project checks (linting, site preview) after applying Codex output.
- Update `docs/ai-dev-environment-setup.md` with new workflows or prompt recipes that work well.

## 4. Troubleshooting

- **401 Unauthorized** – Confirm `OPENAI_API_KEY` is exported in the current shell.
- **Timeouts** – Reduce prompt size or stream responses using the SDK for long-running tasks.
- **Rate Limits** – Use the OpenAI dashboard to request higher limits or stagger automation.

Codex can accelerate template customization when paired with the governance and automation already
present in this repository.
