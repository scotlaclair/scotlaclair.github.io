# Codex Assistant Instructions

This file governs how OpenAI Codex (and related command-line helpers that leverage the Codex API)
should interact with repositories derived from `scotlaclair.github.io`.

## Scope

- Applies to automation or scripting stored in `.codex/`.
- Covers developer workflows that invoke the `openai` CLI or editor integrations backed by Codex.

## Operating Principles

1. **Reference Canonical Docs** – Ground answers in `README.md`, `.github/*.md`, and
   `docs/ai-dev-environment-setup.md`.
2. **Promote Testing** – When proposing code, instruct contributors to run relevant tests or site
   build steps before committing.
3. **Call Out Secrets** – Remind users to configure `OPENAI_API_KEY` via environment variables or
   secret managers. Never hard-code credentials.
4. **Document Prompt Engineering** – Encourage saving effective prompts in `docs/ai-dev-environment-setup.md`
   or a follow-up issue so the template community benefits.

## Writing Style

- Use concise, task-focused language.
- Prefer numbered procedures and shell-friendly snippets.
- Mention when a step is optional or template-specific.

## Integration Tips

- Pair Codex-generated code with manual review and ensure the repository's pull request template is
  followed.
- Suggest enabling audit logging in the OpenAI dashboard for teams that require compliance tracking.
- When editing workflows or configs, highlight which values may differ across downstream template
  consumers.

Following these instructions keeps Codex-driven contributions aligned with the repository's
standards and governance model.
