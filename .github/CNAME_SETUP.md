# CNAME Setup Guide

## Setting Up a Custom Domain

To use a custom domain with GitHub Pages:

### Step 1: Prepare Your Domain

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy, Google Domains)
2. Configure DNS records with your registrar:
   - For apex domain (example.com): Add A records pointing to GitHub's IP addresses
   - For subdomain (www.example.com): Add a CNAME record pointing to `yourusername.github.io`

### Step 2: Add CNAME File to Repository

**IMPORTANT:** The CNAME file must contain ONLY your domain on a single line, with no comments or additional text.

1. Copy the `CNAME.template` file and rename it to `CNAME` (remove the `.template` extension)
2. Replace `example.com` with your actual domain (e.g., `mydomain.com` or `www.mydomain.com`)
3. Ensure the file contains ONLY the domain - no comments, no extra lines
4. Commit and push the CNAME file to your repository

**Example CNAME file content:**
```
mydomain.com
```

**DO NOT include comments like this:**
```
# This is my domain
mydomain.com
```

### Step 3: Verify Setup

1. Push the CNAME file to your repository
2. Go to repository Settings → Pages
3. Wait a few minutes for GitHub to process the change
4. Your site should be available at your custom domain

## Troubleshooting

- **Domain not working?** Check that DNS records are properly configured and propagated (can take up to 48 hours)
- **Certificate errors?** Ensure HTTPS is enabled in repository Settings → Pages
- **404 errors?** Verify the CNAME file contains only the domain with no additional text or comments

## References

- [GitHub Pages Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
