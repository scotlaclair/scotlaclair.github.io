# scotlaclair.github.io

Repo for Pages and Documents, new sparks

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
