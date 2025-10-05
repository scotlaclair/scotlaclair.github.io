# Wiki Setup and Structure Guide

This guide explains how to set up and organize the GitHub Wiki for this repository.

## Overview

The GitHub Wiki provides a space for collaborative documentation that is separate from the main repository. It's ideal for:

- 📖 Long-form documentation
- 📚 Tutorials and guides
- 🗺️ Project planning and architecture
- 📝 Meeting notes and decisions
- 🔍 Reference materials

## Enabling the Wiki

### Steps to Enable

1. Go to repository **Settings**
2. Scroll to the **Features** section
3. Check the box next to **Wikis**
4. Click **Save** (if there's a save button)

The Wiki is now enabled and accessible at: `https://github.com/scotlaclair/scotlaclair.github.io/wiki`

## Recommended Wiki Structure

Here's a suggested organization for the Wiki:

### Home Page
The main landing page should include:
- Welcome message
- Quick links to key sections
- Recent updates
- How to contribute to the Wiki

### Core Sections

#### 1. Getting Started
- **Installation Guide** - How to set up the project locally
- **Quick Start** - Fast path to getting running
- **First Contribution** - Guide for first-time contributors

#### 2. Documentation
- **Architecture Overview** - System design and structure
- **API Reference** - If applicable
- **Configuration Guide** - Settings and options
- **Deployment Guide** - How to deploy changes

#### 3. Development
- **Development Setup** - Dev environment configuration
- **Coding Standards** - Style guides and best practices
- **Testing Guide** - How to write and run tests
- **Debugging Tips** - Common issues and solutions

#### 4. Processes
- **Spark Process** - How the Spark system works
- **SDLC Workflow** - Development lifecycle
- **Release Process** - How releases are managed
- **Review Guidelines** - PR review process

#### 5. Community
- **Contributors** - List of contributors
- **Meeting Notes** - Team meeting summaries
- **Decision Log** - Important decisions and rationale
- **FAQ** - Frequently asked questions

#### 6. Resources
- **External Links** - Useful external resources
- **Tools** - Recommended tools and utilities
- **Learning Resources** - Tutorials, courses, articles
- **Related Projects** - Similar or complementary projects

## Creating Wiki Pages

### Using the GitHub Web Interface

1. Navigate to the Wiki tab
2. Click **"New Page"**
3. Enter a page title
4. Write content using Markdown
5. Click **"Save Page"**

### Using Git (Advanced)

The Wiki is a separate Git repository:

```bash
# Clone the wiki
git clone https://github.com/scotlaclair/scotlaclair.github.io.wiki.git

# Add/edit pages (as .md files)
echo "# My Page" > My-Page.md

# Commit and push
git add My-Page.md
git commit -m "Add My Page"
git push origin master
```

## Wiki Best Practices

### Content Organization

- ✅ **Use clear titles** - Make page names descriptive
- ✅ **Link between pages** - Create a web of knowledge
- ✅ **Keep it current** - Update regularly
- ✅ **Use templates** - Maintain consistency
- ✅ **Include examples** - Make concepts concrete

### Markdown Tips

```markdown
# Top-level heading (page title)

## Section heading

### Subsection heading

**Bold text** for emphasis
*Italic text* for subtle emphasis

[Link text](URL) for external links
[[Page Name]] or [[Page-Name]] for wiki links

- Bullet list item
1. Numbered list item

> Quote or callout

`inline code`

```code block```

| Table | Header |
|-------|--------|
| Data  | Data   |
```

### Linking

- **Internal Wiki Links:** `[[Page Name]]` or `[[Page-Name]]`
- **Repository Links:** `[Link text](../blob/main/path/file.md)`
- **External Links:** `[Link text](https://example.com)`

## Sidebar Navigation

Create a file called `_Sidebar.md` to add a persistent sidebar:

```markdown
## Navigation

**Getting Started**
- [[Home]]
- [[Installation]]
- [[Quick Start]]

**Documentation**
- [[Architecture]]
- [[Configuration]]
- [[API Reference]]

**Development**
- [[Development Setup]]
- [[Coding Standards]]
- [[Testing]]

**Community**
- [[Contributing]]
- [[Code of Conduct]]
- [[FAQ]]
```

## Footer

Create a file called `_Footer.md` to add a footer to all pages:

```markdown
---
📖 [Documentation](Home) | 💬 [Discussions](https://github.com/scotlaclair/scotlaclair.github.io/discussions) | 🐛 [Issues](https://github.com/scotlaclair/scotlaclair.github.io/issues)
```

## Initial Pages to Create

Here are the minimum pages to get started:

### 1. Home.md
```markdown
# Welcome to the scotlaclair.github.io Wiki

This wiki contains comprehensive documentation for the project.

## Quick Links

- [[Getting Started]] - New to the project? Start here
- [[Contributing]] - How to contribute
- [[FAQ]] - Frequently asked questions
- [[Architecture]] - System design and structure

## Recent Updates

- 2024-01-XX - Wiki created and structured
- [More updates...]

## How to Use This Wiki

This wiki is organized into several main sections (see sidebar). Each section contains related pages with detailed information.

## Contributing to the Wiki

The wiki is open for contributions! To add or update content:

1. Click "Edit" on any page
2. Make your changes using Markdown
3. Add a descriptive edit message
4. Click "Save"

For major changes, please open an issue first to discuss.

## Need Help?

- 💬 [Start a Discussion](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 🐛 [Report an Issue](https://github.com/scotlaclair/scotlaclair.github.io/issues)
- 📖 [Read the Contributing Guide](https://github.com/scotlaclair/scotlaclair.github.io/blob/main/CONTRIBUTING.md)
```

### 2. Getting-Started.md
```markdown
# Getting Started

Welcome! This guide will help you get up and running with the project.

## Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Git installed
- GitHub account

## Quick Start

1. **Visit the site**: https://scotlaclair.github.io/
2. **Explore the documentation**: Check out the docs/ folder
3. **Review examples**: See docs/example.html for page structure

## For Contributors

See our [[Contributing]] guide for detailed instructions on how to contribute.

## Next Steps

- [[Architecture]] - Understand the system design
- [[Configuration]] - Learn about configuration options
- [[FAQ]] - Common questions answered
```

### 3. Contributing.md
```markdown
# Contributing to the Wiki

Thank you for your interest in improving our documentation!

## How to Edit

1. Navigate to the page you want to edit
2. Click the "Edit" button in the top right
3. Make your changes using Markdown
4. Add a descriptive edit message
5. Click "Save Page"

## Creating New Pages

1. Click "New Page" in the wiki
2. Enter a page title (use hyphens for spaces: My-Page-Title)
3. Write your content
4. Save the page
5. Link to it from other relevant pages

## Wiki Guidelines

- **Be clear and concise** - Write for your audience
- **Use examples** - Show, don't just tell
- **Keep it organized** - Use headings and lists
- **Link related pages** - Help readers navigate
- **Update regularly** - Keep content current

## Style Guide

- Use `#` for the page title (one per page)
- Use `##` and `###` for sections
- Use code blocks for examples
- Use bullet lists for steps
- Include images when helpful (upload via wiki interface)

## Questions?

If you have questions about contributing to the wiki, please:

- 💬 [Start a Discussion](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 🐛 [Open an Issue](https://github.com/scotlaclair/scotlaclair.github.io/issues)
```

### 4. FAQ.md
```markdown
# Frequently Asked Questions

## General

### What is this project?

scotlaclair.github.io is a GitHub Pages site for hosting pages, documents, and new ideas ("sparks").

### How do I access the site?

Visit https://scotlaclair.github.io/

## Contributing

### How do I contribute?

See our [Contributing Guide](https://github.com/scotlaclair/scotlaclair.github.io/blob/main/CONTRIBUTING.md) for detailed instructions.

### What is a "Spark"?

A Spark is our term for a new idea or concept. Submit sparks using our [Spark template](https://github.com/scotlaclair/scotlaclair.github.io/issues/new?template=spark.yml).

### How do I report a bug?

Use our [Bug Report template](https://github.com/scotlaclair/scotlaclair.github.io/issues/new?template=bug.yml).

## Technical

### How does GitHub Pages work?

GitHub Pages automatically publishes HTML files from the repository. Changes pushed to the main branch are deployed automatically via GitHub Actions.

### Can I run this locally?

Yes! Simply open the HTML files in your web browser. No build process is required.

### Why is there a .nojekyll file?

This tells GitHub Pages not to use Jekyll processing, allowing for faster deployments of plain HTML.

## More Questions?

- 💬 [Ask in Discussions](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 📧 Contact the maintainers
```

## Wiki vs. Other Documentation

### When to Use the Wiki

✅ **Use the Wiki for:**
- Collaborative documentation
- Long-form guides and tutorials
- Project planning and architecture
- Decision logs and meeting notes
- Community-contributed content

### When to Use the Repository

✅ **Use the Repository for:**
- Code and configuration (obviously)
- README.md for project overview
- CONTRIBUTING.md for contribution guidelines
- CODE_OF_CONDUCT.md for community rules
- Technical documentation in docs/ folder

### When to Use Discussions

✅ **Use Discussions for:**
- Questions and answers
- Ideas and brainstorming
- Announcements
- General community conversation

## Maintenance

### Regular Updates

- Review wiki pages quarterly
- Update outdated information
- Remove obsolete pages
- Consolidate overlapping content
- Improve organization as needed

### Monitoring

- Watch for vandalism or spam
- Ensure accuracy of technical content
- Respond to discussion about wiki pages
- Thank contributors for improvements

## Permissions

By default:
- Anyone can view the wiki
- Repository collaborators can edit the wiki
- You can restrict editing in Settings > Options > Wikis

## Resources

- [GitHub Wiki Documentation](https://docs.github.com/en/communities/documenting-your-project-with-wikis)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

## Questions?

- 💬 [Start a Discussion](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 🐛 [Open an Issue](https://github.com/scotlaclair/scotlaclair.github.io/issues)
- 📖 [Read the Docs](https://scotlaclair.github.io/docs/)

---

**Ready to get started?** Enable the Wiki in repository Settings and create your first page!
