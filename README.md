# scotlaclair.github.io

Repo for Pages and Documents, new sparks

## 🚀 Quick Links

- 🌐 **Live Site**: https://scotlaclair.github.io/
- 📖 **Knowledge Base**: https://scotlaclair.github.io/docs/
- 📚 **Wiki**: [Project Wiki](../../wiki)
- 💬 **Discussions**: [Join the Conversation](../../discussions)
- 💡 **Submit a Spark**: [New Idea](../../issues/new?template=spark.yml)
- 🐛 **Report a Bug**: [Bug Report](../../issues/new?template=bug.yml)
- 📝 **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- ⚙️ **Setup Guide**: See [.github/SETUP_GUIDE.md](.github/SETUP_GUIDE.md)

## How GitHub Pages Works

This repository uses **GitHub Pages** to host a static website at https://scotlaclair.github.io/

### Two Ways to Use This Repo

**Option 1: User/Organization Site (Current Setup)**
- Your repository is named `username.github.io` (user/org Pages site)
- GitHub Pages automatically publishes from the **root** of your default branch (usually `main`)
- The `index.html` in the root becomes your homepage
- Accessible at: `https://scotlaclair.github.io/`

**Option 2: Regular Repo with Docs Folder**
- For regular project repositories (not `username.github.io`)
- You can configure GitHub Pages to publish from:
  - Root directory of a branch
  - `/docs` folder on a branch
  - A separate `gh-pages` branch
- Example: A repo named `my-project` would be at `https://scotlaclair.github.io/my-project/`

### This Repo Can Be Both!

Your repository is **both** a regular Git repository AND a GitHub Pages site:
- ✅ You can store any files (code, documents, assets)
- ✅ You can use version control (branches, commits, pull requests)
- ✅ HTML/CSS/JS files are automatically served as web pages
- ✅ Non-web files (like PDFs, images) can be accessed via their path

### Repository Structure

```
scotlaclair.github.io/
├── index.html          # Homepage (required for root-level Pages site)
├── docs/               # Optional: Organize documents/pages in folders
│   └── example.html    # Accessible at /docs/example.html
├── assets/             # Optional: Images, CSS, JavaScript
├── .nojekyll          # Prevents Jekyll processing (for plain HTML)
└── README.md          # This file (not published to the site)
```

## Recommended Setup Items

✅ **Added:**
- `.nojekyll` - Tells GitHub Pages not to use Jekyll processing (faster deployment for plain HTML)
- `.gitignore` - Ignores common temporary and system files
- `docs/example.html` - Example of how to structure additional pages

📋 **Optional Additions:**
- `404.html` - Custom error page for broken links
- `assets/` folder - For images, CSS, and JavaScript files
- `CNAME` - For custom domain (if you have one)
- `robots.txt` - To control search engine indexing
- `sitemap.xml` - To help search engines find your pages

## Publishing Content

1. Add HTML files to the repository
2. Commit and push to the `main` branch
3. Files are automatically published within a few minutes
4. Access your site at https://scotlaclair.github.io/

## Examples

- Homepage: `https://scotlaclair.github.io/` (index.html)
- Example page: `https://scotlaclair.github.io/docs/example.html`
- Any file: `https://scotlaclair.github.io/path/to/file.html`

## Repository Setup

This repository includes comprehensive configuration for:

- ✅ **Issue Templates** - For Sparks, features, bugs, documentation, and the 7 setup areas
- ✅ **Pull Request Template** - Standardized PR submissions
- ✅ **Contributing Guide** - Guidelines for contributors
- ✅ **Code of Conduct** - Community guidelines
- ✅ **Security Policy** - Vulnerability reporting process
- ✅ **GitHub Actions** - Automated workflows for Pages, labeling, and maintenance
- ✅ **Labels** - Comprehensive label system for organization
- ✅ **Wiki Structure** - Guide for setting up and organizing the Wiki
- ✅ **Discussion Templates** - Templates for community discussions
- ✅ **Knowledge Base** - Documentation hub at /docs/

### Creating Sub-Issues

To create sub-issues for the repository setup (items 1-7), use the issue templates:

1. Go to [Issues → New Issue](../../issues/new/choose)
2. Select the appropriate template (1-7 for setup areas)
3. Fill out the form and submit

See [.github/SETUP_GUIDE.md](.github/SETUP_GUIDE.md) for detailed instructions.

## Community Resources

### 📖 Documentation & Knowledge Base

- **[Knowledge Base](https://scotlaclair.github.io/docs/)** - Comprehensive documentation hub
- **[Wiki](../../wiki)** - Collaborative documentation and guides
  - See [Wiki Guide](.github/WIKI_GUIDE.md) for setup instructions
- **[Setup Guide](.github/SETUP_GUIDE.md)** - Repository configuration guide

### 💬 Discussions & Community

- **[Discussions](../../discussions)** - Community conversations and Q&A
  - See [Discussions Guide](.github/DISCUSSIONS_GUIDE.md) for how to use
  - Templates available for Ideas, Questions, and Show & Tell
- **[Issues](../../issues)** - Bug reports, features, and sparks
- **[Pull Requests](../../pulls)** - Code contributions and reviews

### 📋 Templates Available

- **Issue Templates:** Spark, Feature, Bug, Documentation, and 7 setup area templates
- **Discussion Templates:** Ideas, Questions, Show & Tell
- **PR Template:** Standardized pull request submissions

## Contributing

We welcome contributions! Please see:

- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Community guidelines
- [SECURITY.md](SECURITY.md) - Security policy

## The Spark Process

💡 **Sparks** are new ideas and concepts to explore. Submit a spark when you have:

- A new idea to discuss
- A concept to explore
- An opportunity to consider

[Submit a Spark →](../../issues/new?template=spark.yml)
