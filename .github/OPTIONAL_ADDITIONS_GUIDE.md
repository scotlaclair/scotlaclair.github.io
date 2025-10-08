# Optional Additions Guide

This guide explains how to use the optional templates provided in the repository to enhance your GitHub Pages site.

## Overview

The repository includes ready-to-use templates for common GitHub Pages enhancements:

- ✅ **404.html** - Custom error page for broken links
- ✅ **robots.txt** - Search engine crawling control
- ✅ **sitemap.xml** - Search engine indexing helper
- ✅ **CNAME.example** - Custom domain configuration template

## 1. Custom 404 Error Page (404.html)

### Status: ✅ Ready to Use

The `404.html` file is already configured and will automatically display when visitors access a broken link on your site.

### Features
- Matches your site's futuristic theme
- Provides helpful navigation links:
  - Back to Homepage
  - Browse Documentation
  - View Repository
  - Report an Issue
- Responsive design with glowing text effects

### Testing
1. Visit any non-existent page on your site: `https://scotlaclair.github.io/nonexistent-page`
2. You should see the custom 404 page

### Customization
Edit `404.html` to:
- Add more navigation links
- Change the error message
- Update the styling to match your preferences

## 2. Search Engine Control (robots.txt)

### Status: ✅ Ready to Use (Default Configuration)

The `robots.txt` file controls how search engines crawl your site.

### Default Configuration
```
User-agent: *
Allow: /
```
This allows all search engines to crawl all pages.

### Common Customizations

#### Block Specific Directories
```
User-agent: *
Allow: /
Disallow: /private/
Disallow: /temp/
```

#### Block Specific Search Engines
```
# Block a specific search engine
User-agent: BadBot
Disallow: /

# Allow others
User-agent: *
Allow: /
```

#### Add Crawl Delay
```
User-agent: *
Allow: /
Crawl-delay: 10
```

### Linking to Sitemap
Once you've configured `sitemap.xml`, uncomment this line in `robots.txt`:
```
Sitemap: https://scotlaclair.github.io/sitemap.xml
```

### Testing
1. Visit: `https://scotlaclair.github.io/robots.txt`
2. Search engines will automatically respect these rules

## 3. Site Map (sitemap.xml)

### Status: 📝 Requires Updates

The `sitemap.xml` template includes example entries for your homepage, docs index, and example page.

### Setup Steps

#### Step 1: Update Existing Entries
Edit the `<lastmod>` dates for existing pages:
```xml
<url>
  <loc>https://scotlaclair.github.io/</loc>
  <lastmod>2024-12-15</lastmod>  <!-- Update this date -->
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

#### Step 2: Add New Pages
For each new page, add a `<url>` entry:
```xml
<url>
  <loc>https://scotlaclair.github.io/path/to/new-page.html</loc>
  <lastmod>2024-12-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>
```

#### Step 3: Set Priority Values
- `1.0` - Homepage and most important pages
- `0.8` - Major section landing pages  
- `0.5` - Regular content pages
- `0.3` - Less important pages

#### Step 4: Set Change Frequency
- `always` - Changes on every access
- `hourly` - Updated hourly
- `daily` - Updated daily
- `weekly` - Updated weekly
- `monthly` - Updated monthly
- `yearly` - Rarely updated
- `never` - Archived content

#### Step 5: Enable in robots.txt
Uncomment this line in `robots.txt`:
```
Sitemap: https://scotlaclair.github.io/sitemap.xml
```

#### Step 6: Submit to Search Engines
Submit your sitemap to:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Automated Sitemap Generation
For large sites, consider using automated tools:
- [xml-sitemaps.com](https://www.xml-sitemaps.com/) - Online generator
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) - If using Jekyll
- GitHub Actions workflow (can be set up to auto-generate)

### Testing
1. Visit: `https://scotlaclair.github.io/sitemap.xml`
2. Verify the XML is valid and contains all your pages
3. Use [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## 4. Custom Domain (CNAME.example)

### Status: 📝 Requires Configuration

The `CNAME.example` file is a template for setting up a custom domain.

### Setup Steps

#### Step 1: Purchase a Domain
Get a domain from a registrar like:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

#### Step 2: Rename the Template
```bash
mv CNAME.example CNAME
```

#### Step 3: Add Your Domain
Edit the `CNAME` file to contain only your domain:
```
www.yourdomain.com
```
OR
```
yourdomain.com
```

#### Step 4: Configure DNS Records

**For Apex Domain (example.com):**
Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For WWW Subdomain (www.example.com):**
Add a CNAME record:
```
CNAME: www.example.com → scotlaclair.github.io
```

**For Other Subdomains:**
```
CNAME: subdomain.example.com → scotlaclair.github.io
```

#### Step 5: Verify in GitHub
1. Go to repository Settings → Pages
2. Verify custom domain is recognized
3. Enable "Enforce HTTPS" once verified

#### Step 6: Wait for DNS Propagation
- DNS changes can take 24-48 hours to propagate
- Check status: [DNS Checker](https://dnschecker.org/)

### Common Issues

**"Domain's DNS record could not be retrieved"**
- Wait for DNS propagation
- Verify DNS records are correct
- Check with your domain registrar

**"CNAME already taken"**
- Domain is already used by another GitHub Pages site
- Try a different domain or subdomain

**Certificate errors**
- GitHub needs time to provision SSL (up to 24 hours)
- Wait and check back later

### Testing
1. After DNS propagation, visit your custom domain
2. Verify it loads your GitHub Pages site
3. Check that HTTPS is working

## Maintenance

### Regular Updates

#### Update sitemap.xml
- Add new pages as you create them
- Update `<lastmod>` dates when pages change
- Review `<changefreq>` and `<priority>` values quarterly

#### Review robots.txt
- Ensure no important pages are accidentally blocked
- Update sitemap URL if it changes
- Adjust crawl-delay if needed

#### Monitor 404 Page
- Review 404 errors in GitHub Pages analytics
- Update links in 404.html as your site structure changes

#### CNAME Maintenance
- Verify domain renewal with registrar
- Monitor SSL certificate status
- Check DNS records if issues arise

## Advanced Tips

### 1. Dynamic Sitemap Generation
Create a GitHub Action to auto-generate sitemap.xml:
```yaml
name: Generate Sitemap
on:
  push:
    branches: [main]
jobs:
  sitemap:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate sitemap
        run: |
          # Add sitemap generation script here
      - name: Commit sitemap
        run: |
          git config user.name "GitHub Actions"
          git add sitemap.xml
          git commit -m "Update sitemap" || true
          git push
```

### 2. Custom 404 Analytics
Add tracking to 404.html to monitor broken links:
```html
<script>
  // Log 404 errors
  console.log('404 Error:', window.location.href);
</script>
```

### 3. Multiple Sitemaps
For large sites, split into multiple sitemaps:
```xml
<!-- sitemap_index.xml -->
<sitemapindex>
  <sitemap>
    <loc>https://scotlaclair.github.io/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://scotlaclair.github.io/sitemap-docs.xml</loc>
  </sitemap>
</sitemapindex>
```

### 4. robots.txt Best Practices
- Don't block CSS/JS files (search engines need them)
- Don't use robots.txt for security (it's public)
- Be specific with Disallow paths
- Test changes carefully

## Quick Reference

| File | Purpose | Status | Next Step |
|------|---------|--------|-----------|
| 404.html | Custom error page | ✅ Ready | Customize if desired |
| robots.txt | Crawler control | ✅ Ready | Update sitemap URL |
| sitemap.xml | Search indexing | 📝 Update needed | Add pages & dates |
| CNAME | Custom domain | 📝 Config needed | Rename & configure DNS |

## Getting Help

- 📖 [GitHub Pages Documentation](https://docs.github.com/en/pages)
- 💬 [Repository Discussions](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 🐛 [Report Issues](https://github.com/scotlaclair/scotlaclair.github.io/issues/new/choose)
- 📚 [SEO Best Practices](https://developers.google.com/search/docs)

## Resources

- [robots.txt Specifications](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Search Console Help](https://support.google.com/webmasters)
