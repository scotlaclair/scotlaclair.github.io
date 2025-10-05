# Contributing to scotlaclair.github.io

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [The Spark Process](#the-spark-process)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/scotlaclair.github.io.git
   cd scotlaclair.github.io
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/scotlaclair/scotlaclair.github.io.git
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## The Spark Process

This repository uses a "Spark" system for managing ideas and innovation:

1. **Submit a Spark** - Use the Spark issue template to propose new ideas
2. **Triage** - Sparks are reviewed and categorized (within 5 business days)
3. **Discussion** - Community discusses the spark's viability and approach
4. **Decision** - Spark is approved, needs more info, or closed
5. **Promotion** - Approved sparks become features or projects
6. **Implementation** - Work begins through issues and pull requests

### When to Use a Spark

- You have a new idea or concept to explore
- You're proposing a significant new feature
- You want to discuss a potential direction before implementation
- You've identified an opportunity for improvement

### When to Use Other Issue Types

- **Bug Report** - For existing functionality that isn't working correctly
- **Feature Request** - For well-defined features ready for implementation
- **Documentation** - For documentation improvements
- **Setup Issues** - For repository configuration tasks (items 1-7)

### Detailed Spark Documentation

For comprehensive information about the Spark process, see:
- 📖 [Spark Process Documentation](.github/SPARK_PROCESS.md) - Detailed guide on submitting, reviewing, and promoting sparks
- 🔄 [Spark Workflow Guide](.github/SPARK_WORKFLOW.md) - Visual workflow diagrams and examples
- 💡 [Submit a Spark](../../issues/new?template=spark.yml) - Start the process!

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 💡 **Sparks** - New ideas and concepts
- 🐛 **Bug Fixes** - Fixing issues and problems
- ✨ **Features** - Implementing new functionality
- 📚 **Documentation** - Improving docs, guides, and examples
- 🧪 **Tests** - Adding or improving tests
- 🎨 **Design** - UI/UX improvements
- 🔧 **Maintenance** - Refactoring, dependencies, infrastructure

### Contribution Process

1. **Check existing issues** - See if your contribution is already being discussed
2. **Open an issue first** - Discuss significant changes before starting work
3. **Get assignment** - Wait for issue assignment or approval before starting
4. **Do the work** - Make your changes following our guidelines
5. **Submit a PR** - Create a pull request with your changes
6. **Address feedback** - Work with maintainers to refine your contribution
7. **Merge** - Once approved, your contribution will be merged!

## Development Workflow

### Branching Strategy

We use the following branch naming conventions:

- `main` - Production-ready code
- `feature/*` - New features (e.g., `feature/add-search`)
- `bugfix/*` - Bug fixes (e.g., `bugfix/fix-navigation`)
- `docs/*` - Documentation updates (e.g., `docs/update-readme`)
- `spark/*` - Experimental spark implementations (e.g., `spark/idea-xyz`)

### Making Changes

1. **Keep changes focused** - One feature/fix per PR
2. **Write clear commit messages** - Use the format: `type: description`
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
   - Example: `feat: add search functionality to homepage`
3. **Test your changes** - Ensure everything works as expected
4. **Update documentation** - Keep docs in sync with code changes

### Testing

Since this is primarily a static site:

1. **Local Testing** - Open HTML files in a browser
2. **Link Checking** - Verify all links work correctly
3. **Responsive Testing** - Check on different screen sizes
4. **Cross-browser Testing** - Test in multiple browsers when possible

## Issue Guidelines

### Creating Issues

- **Use templates** - Choose the appropriate issue template
- **Be specific** - Provide clear, detailed information
- **One issue per topic** - Don't combine multiple unrelated issues
- **Search first** - Check if the issue already exists

### Issue Labels

We use labels to organize and prioritize work:

- `spark` - New ideas and concepts
- `triage` - Needs review and categorization
- `feature` - New feature requests
- `bug` - Something isn't working
- `documentation` - Documentation improvements
- `enhancement` - Improvements to existing features
- `good-first-issue` - Good for newcomers
- `help-wanted` - Extra attention needed
- `in-progress` - Currently being worked on
- `blocked` - Waiting on something else

## Pull Request Process

### Before Submitting

1. **Update your branch** with the latest changes from `main`:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. **Test thoroughly** - Ensure your changes work as expected
3. **Review your own code** - Check for issues before submission
4. **Update documentation** - If your changes affect usage

### Submitting a PR

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Create a Pull Request** from your fork to the main repository
3. **Fill out the PR template** completely
4. **Link related issues** using keywords like "Closes #123"
5. **Request review** from maintainers

### PR Requirements

- [ ] Clear description of changes
- [ ] All links and references work correctly
- [ ] Documentation updated if needed
- [ ] No broken functionality introduced
- [ ] Follows style guidelines
- [ ] Self-reviewed and tested

### After Submission

- **Respond to feedback** - Address reviewer comments promptly
- **Make requested changes** - Push additional commits to your branch
- **Be patient** - Reviews may take time
- **Stay engaged** - Keep the conversation going if blocked

## Style Guidelines

### HTML/CSS

- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Include responsive design considerations
- Add comments for complex sections
- Follow accessibility best practices

### Markdown

- Use clear headings and structure
- Include code blocks with language specification
- Add links where helpful
- Keep line length reasonable (80-100 chars when possible)
- Use relative links for internal references

### Commit Messages

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance tasks

**Example:**
```
feat(homepage): add search functionality

Add a search box to the homepage that filters page content.
Includes keyboard navigation support.

Closes #42
```

## Questions?

- 💬 Start a [Discussion](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 📧 Reach out to maintainers
- 📖 Check the [documentation](https://scotlaclair.github.io/)

## Recognition

All contributors will be recognized in our project. Thank you for making this project better!

---

**Happy Contributing! 🎉**
