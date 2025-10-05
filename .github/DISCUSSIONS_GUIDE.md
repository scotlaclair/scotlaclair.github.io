# GitHub Discussions Guide

This guide explains how to set up and use GitHub Discussions for community engagement and collaboration.

## Overview

GitHub Discussions provides a dedicated space for community conversations that don't fit the issue/PR model. It's perfect for:

- ❓ **Questions & Help** - Get assistance from the community
- 💡 **Ideas & Brainstorming** - Discuss concepts before creating issues
- 📢 **Announcements** - Share updates and news
- 🎉 **Show & Tell** - Share what you've built
- 💬 **General Discussion** - Community chat and engagement

## Enabling Discussions

### Steps to Enable

1. Go to repository **Settings**
2. Scroll to the **Features** section
3. Check the box next to **Discussions**
4. Click **Save** (if there's a save button)

Discussions are now enabled at: `https://github.com/scotlaclair/scotlaclair.github.io/discussions`

## Setting Up Discussion Categories

### Recommended Categories

GitHub provides default categories, but you can customize them:

#### 1. 📢 Announcements
- **Description:** Updates and news from maintainers
- **Format:** Announcement (only maintainers can post, all can comment)
- **Use for:** Release announcements, important updates, project news

#### 2. 💡 Ideas
- **Description:** Share and discuss new ideas
- **Format:** Open discussion
- **Use for:** Brainstorming, feature concepts, early-stage proposals
- **Template:** Use the ideas.yml template from .github/DISCUSSION_TEMPLATE/

#### 3. ❓ Q&A
- **Description:** Ask questions and get help
- **Format:** Question/Answer (can mark answers)
- **Use for:** How-to questions, troubleshooting, clarifications
- **Template:** Use the questions.yml template

#### 4. 🎉 Show and Tell
- **Description:** Share what you've built or discovered
- **Format:** Open discussion
- **Use for:** Showcasing projects, sharing discoveries, demos
- **Template:** Use the show-and-tell.yml template

#### 5. 💬 General
- **Description:** General conversation and community chat
- **Format:** Open discussion
- **Use for:** Off-topic chat, introductions, community building

#### 6. 🗳️ Polls
- **Description:** Community polls and voting
- **Format:** Poll
- **Use for:** Gathering opinions, making decisions together

### Configuring Categories

1. Go to **Discussions** tab
2. Click the **⚙️ gear icon** or **"Categories"**
3. Click **"New category"** to add custom categories
4. For each category:
   - Set a name and emoji
   - Choose the format (Discussion, Q&A, Announcement, Poll)
   - Add a description
   - Optionally set a template (reference templates in .github/DISCUSSION_TEMPLATE/)

## Discussion Templates

Templates help users create well-structured discussions. We've included three templates:

### Available Templates

1. **ideas.yml** - For sharing and discussing ideas
2. **questions.yml** - For asking questions
3. **show-and-tell.yml** - For showcasing work

### How Templates Work

When users create a discussion in a category with a template:
1. They see a form with structured fields
2. They fill out the relevant information
3. The discussion is created with proper formatting
4. Labels are automatically applied

## Best Practices

### For Discussion Creators

- ✅ **Choose the right category** - Help others find your discussion
- ✅ **Use clear titles** - Make it easy to understand the topic
- ✅ **Provide context** - Include relevant background information
- ✅ **Be specific** - Focus on one topic per discussion
- ✅ **Search first** - Check if your question/idea already exists
- ✅ **Follow up** - Mark answers, thank contributors, update status

### For Discussion Participants

- ✅ **Be helpful** - Provide constructive feedback and assistance
- ✅ **Stay on topic** - Keep discussions focused
- ✅ **Be respectful** - Follow the Code of Conduct
- ✅ **Use reactions** - 👍 useful comments, ❤️ great ideas
- ✅ **Mark answers** - Help the OP by suggesting which reply answers their question

### For Maintainers

- ✅ **Monitor regularly** - Check for new discussions daily/weekly
- ✅ **Respond promptly** - Acknowledge questions and ideas
- ✅ **Convert to issues** - Promote approved ideas to actionable issues
- ✅ **Pin important discussions** - Highlight valuable conversations
- ✅ **Lock old discussions** - Archive completed or outdated discussions
- ✅ **Make announcements** - Keep the community informed

## Discussions vs. Issues vs. Wiki

### When to Use Discussions

✅ **Use Discussions for:**
- Asking questions ("How do I...?")
- Sharing ideas that aren't fully formed
- General conversation
- Polls and community decisions
- Showcasing work
- Announcements

### When to Use Issues

✅ **Use Issues for:**
- Bug reports (something is broken)
- Feature requests (specific, actionable features)
- Sparks (well-defined new ideas ready for triage)
- Tasks and work items
- Things that need tracking and closure

### When to Use the Wiki

✅ **Use Wiki for:**
- Long-form documentation
- Tutorials and guides
- Reference materials
- Architecture documentation
- Persistent knowledge base content

## Converting Discussions to Issues

When a discussion reaches a point where it's ready to become actionable:

1. Open the discussion
2. Click the **"⋯"** menu in the top right
3. Select **"Convert to issue"**
4. Review and edit the issue as needed
5. Link back to the original discussion for context

Or manually:
1. Create a new issue using the appropriate template
2. Reference the discussion: "Originally discussed in #123"
3. Close or lock the discussion with a link to the new issue

## Moderation

### Community Guidelines

All discussions must follow the [Code of Conduct](../CODE_OF_CONDUCT.md).

### Moderator Actions

Moderators can:
- Edit or delete comments
- Lock discussions
- Mark comments as spam
- Convert discussions to issues
- Pin important discussions
- Label discussions

### Handling Issues

- **Off-topic:** Politely redirect to appropriate category
- **Duplicates:** Link to original discussion
- **Spam:** Mark as spam and delete
- **Violations:** Warn first, then take action per Code of Conduct

## Notifications

### Managing Notifications

Users can control what they're notified about:

1. **Watch** - Get notified of all discussions
2. **Participating** - Only discussions you're involved in
3. **Ignoring** - No notifications

To change: Go to repository page → click **Watch** → choose preference

### Subscribing to Individual Discussions

- Click **Subscribe** on any discussion to get updates
- Click **Unsubscribe** to stop receiving updates

## Tips for Engagement

### Starting Discussions

Good discussion starters:
- "What do you think about...?"
- "Has anyone tried...?"
- "I'm working on X and wondering..."
- "Check out what I built..."
- "How does everyone handle...?"

### Keeping Discussions Active

- Ask follow-up questions
- Share related resources
- Invite specific people to chime in (@mention)
- Post updates on progress
- Summarize outcomes

### Wrapping Up Discussions

When a discussion has reached its conclusion:
- Summarize the outcome
- Thank participants
- Link to any resulting issues or PRs
- Mark the best answer (for Q&A)
- Consider locking if fully resolved

## Analytics and Insights

Use the **Insights** tab to track:
- Discussion activity over time
- Most active participants
- Popular categories
- Questions answered
- Community growth

## Examples of Great Discussions

### Good Question Example
```
Title: How do I add a custom 404 page?

I want to add a custom error page for when visitors land on a broken link.
I saw it mentioned in the README as an optional addition.

What I've tried:
- Creating 404.html in the root
- Not sure if I need to configure anything else

Can someone guide me through the process?
```

### Good Idea Example
```
Title: Add a search feature to the documentation

I've been thinking it would be great to add a search box to the docs/index.html
page so visitors can quickly find what they're looking for.

Potential approaches:
1. Client-side search using JavaScript
2. Integration with GitHub search
3. Third-party service like Algolia

Thoughts? Is this something we'd want to pursue?
```

### Good Show & Tell Example
```
Title: Created a dark mode toggle for the site

I added a dark mode feature to my fork and wanted to share!

Features:
- Toggle button in the header
- Remembers preference in localStorage
- Smooth transitions between modes

Demo: [link]
Code: [link to fork]

Would love feedback or to contribute this back if there's interest!
```

## Integrating with Your Workflow

### Link from Documentation

Add links to Discussions in your docs:
```markdown
## Questions?

- 💬 [Ask in Discussions](https://github.com/scotlaclair/scotlaclair.github.io/discussions)
- 📖 Check the [Wiki](https://github.com/scotlaclair/scotlaclair.github.io/wiki)
```

### Link from Issues

Reference discussions in issues:
```markdown
Originally discussed in: 
https://github.com/scotlaclair/scotlaclair.github.io/discussions/123
```

### Link from README

Include in Quick Links:
```markdown
## 🚀 Quick Links

- 💬 **Discussions**: [Join the conversation](../../discussions)
- ❓ **Get Help**: [Ask a question](../../discussions/categories/q-a)
- 💡 **Share Ideas**: [Start a discussion](../../discussions/categories/ideas)
```

## Resources

- [GitHub Discussions Documentation](https://docs.github.com/en/discussions)
- [Community Management Guide](https://docs.github.com/en/communities)
- [Moderation Tools](https://docs.github.com/en/communities/moderating-comments-and-conversations)

## Next Steps

1. ✅ Enable Discussions in repository settings
2. ✅ Set up recommended categories
3. ✅ Configure category templates
4. ✅ Create a welcome announcement
5. ✅ Add Discussions links to README and docs
6. ✅ Invite the community to participate

## Questions?

- 📖 [Read the Wiki Guide](.github/WIKI_GUIDE.md)
- 🐛 [Open an Issue](../../issues/new/choose)
- 📧 Contact the maintainers

---

**Ready to get started?** Enable Discussions in repository Settings and create your first announcement!
