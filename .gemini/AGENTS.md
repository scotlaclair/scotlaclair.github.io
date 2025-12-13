# Gemini Tooling Instructions

These instructions cover all files within the `.gemini/` directory and any workflows that
reference the Gemini CLI for this repository.

## Purpose

Document how contributors should configure and use Google Gemini Code Assist/CLI when working from
this template repository.

## Key References

- `Gemini.md`: Primary quick-start guide for enabling the Gemini CLI.
- `config.yaml`: Shared configuration for Gemini CLI defaults (model, temperature, output format).

## Contribution Expectations

- Keep configuration declarative. Prefer YAML/JSON updates in `config.yaml` over inline CLI flags
  within docs.
- Record any required environment variables or secrets in `Gemini.md` so downstream templates can
  copy the instructions verbatim.
- Document testing or validation commands (e.g., `gemini code test`, `gemini code review`) whenever
  changes to automation or prompts are suggested.
- Preserve vendor-neutral language where possible and call out steps that are Gemini-specific so
  other AI assistants can find alternative paths.

## Style Guidance

- Use actionable headings and checklists.
- Favor short paragraphs and bullet lists for readability.
- Link back to `docs/ai-dev-environment-setup.md` for broader AI onboarding context.

By following these guidelines, contributors maintain a consistent AI integration experience across
repositories derived from this template.
