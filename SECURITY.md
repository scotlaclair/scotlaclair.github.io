# Security Policy

## Supported Versions

This project is a static website hosted on GitHub Pages. Security updates are applied to the main branch as needed.

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |

## Reporting a Vulnerability

We take the security of this project seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Please do NOT create a public GitHub issue for security vulnerabilities.**

Instead, please report security vulnerabilities by:

1. **Email**: [INSERT SECURITY EMAIL] 
2. **GitHub Security Advisory**: Use the [Security Advisory](https://github.com/scotlaclair/scotlaclair.github.io/security/advisories/new) feature (preferred)

### What to Include

When reporting a vulnerability, please include:

- **Description** - A clear description of the vulnerability
- **Impact** - What could an attacker do with this vulnerability?
- **Reproduction Steps** - Step-by-step instructions to reproduce the issue
- **Affected Components** - Which parts of the project are affected?
- **Suggested Fix** - If you have ideas on how to fix it (optional)
- **Your Environment** - Browser, OS, or other relevant details

### What to Expect

After you submit a report:

1. **Acknowledgment** - We'll acknowledge receipt within 48 hours
2. **Assessment** - We'll assess the vulnerability and its impact
3. **Updates** - We'll keep you informed of our progress
4. **Resolution** - We'll work on a fix and coordinate disclosure
5. **Credit** - We'll credit you for the discovery (if you wish)

### Security Update Process

1. Vulnerability is reported and confirmed
2. A fix is developed in a private branch
3. The fix is tested and validated
4. Security advisory is published
5. Fix is deployed to the main branch
6. Users are notified of the update

## Security Best Practices

As this is a static website, security concerns are limited, but we follow these practices:

### For Contributors

- **No Secrets** - Never commit API keys, passwords, or sensitive data
- **Validate Input** - If adding forms or dynamic content, validate all input
- **Use HTTPS** - All links to external resources should use HTTPS
- **Dependencies** - Keep any dependencies up to date
- **XSS Prevention** - Sanitize any user-generated content

### For Users

- **Use HTTPS** - Always access the site via HTTPS: https://scotlaclair.github.io/
- **Verify URLs** - Ensure you're on the official site
- **Report Issues** - Report suspicious content or behavior

## Known Security Considerations

### GitHub Pages

- This site is hosted on GitHub Pages
- GitHub handles HTTPS certificates and server security
- Content is served from GitHub's CDN

### Static Content

- This is a static HTML/CSS/JS site
- No server-side processing or databases
- No user authentication or personal data collection

## Security-Related Dependencies

This project currently has minimal dependencies:

- No build tools or package managers by default
- If dependencies are added, we'll use:
  - Dependabot for automated security updates
  - CodeQL for code scanning
  - GitHub's security advisories

## Vulnerability Disclosure Timeline

We aim to:

- **Acknowledge** reports within 48 hours
- **Provide initial assessment** within 1 week
- **Deploy fixes** for critical issues within 2 weeks
- **Deploy fixes** for moderate issues within 4 weeks
- **Deploy fixes** for low-severity issues within 8 weeks

Timelines may vary based on complexity and severity.

## Security Updates

Security updates will be:

- Applied to the `main` branch
- Documented in commit messages
- Announced via GitHub Security Advisories
- Listed in the project's release notes

## Contact

For security-related questions or concerns:

- 🔒 Security Issues: Use [GitHub Security Advisory](https://github.com/scotlaclair/scotlaclair.github.io/security/advisories/new)
- 💬 General Questions: Use [Discussions](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 📧 Email: [INSERT SECURITY EMAIL]

## Recognition

We appreciate responsible disclosure and will acknowledge security researchers who help keep this project safe.

---

Thank you for helping keep this project secure! 🔒
