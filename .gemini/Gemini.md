# Gemini CLI Quick Start

Use this guide to configure the Google Gemini CLI for repositories cloned from the
`scotlaclair.github.io` template.

## 1. Prerequisites

- Google Cloud project with the Gemini Code Assist API enabled.
- `gcloud` CLI installed and authenticated (`gcloud auth login`).
- Gemini CLI installed (`pip install google-genai` or follow
  [official instructions](https://ai.google.dev/gemini-api/docs)).
- API key stored as `GEMINI_API_KEY` in your environment or secret manager.

## 2. Configure the CLI

1. Copy `.gemini/config.yaml` into your user configuration directory if you want to share defaults:
   ```bash
   mkdir -p ~/.config/gemini
   cp .gemini/config.yaml ~/.config/gemini/config.yaml
   ```
2. Update the copied config to reference your preferred model (for example `gemini-1.5-pro`) and
   adjust temperature/output formats as needed.
3. Export your API key before running commands:
   ```bash
   export GEMINI_API_KEY="$(pass show ai/gemini)"
   ```

## 3. Common Commands

- **Ask a question about the repo**
  ```bash
  gemini chat --context README.md --message "Summarize the setup guides provided in .github/."
  ```
- **Review a diff**
  ```bash
  gemini code review --diff <(git diff)
  ```
- **Generate tests for a file**
  ```bash
  gemini code test --file path/to/file.py
  ```

Each command respects the defaults stored in `.gemini/config.yaml`. Override flags per run if you
need a different model or output format.

## 4. Collaboration Tips

- Mention when Gemini assisted with a change in your pull request description.
- Pair Gemini suggestions with manual verification (run project tests or preview the Pages site).
- Capture useful prompts in `docs/ai-dev-environment-setup.md` so the template stays current.

With this quick start in place, teams using the template can enable Gemini support with minimal
setup.
