# Workflow Diagram

Visual representation of the repository workflows and processes.

## Issue Creation & Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     User Has a Need                          │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
        ┌─────────────────┐
        │ Which Template? │
        └────────┬─────────┘
                 │
        ┌────────┴────────────────────────────────┐
        │                                          │
        ▼                                          ▼
┌───────────────┐                        ┌──────────────────┐
│  New Idea?    │──Yes──┐                │ Well-defined?    │
│  Exploratory? │       │                │ Ready to build?  │
└───────────────┘       │                └──────────────────┘
        │               │                         │
        No              │                         Yes
        │               │                         │
        │               ▼                         ▼
        │     ┌──────────────────┐      ┌──────────────────┐
        │     │  SPARK Template  │      │ FEATURE Template │
        │     └──────────────────┘      └──────────────────┘
        │
        │
┌───────┴────────┐
│ Something      │──Yes──┐
│ Broken?        │       │
└────────────────┘       │
        │                │
        No               ▼
        │      ┌──────────────────┐
        │      │   BUG Template   │
        │      └──────────────────┘
        │
        │
┌───────┴────────┐
│ Docs Issue?    │──Yes──┐
│ Missing/Wrong? │       │
└────────────────┘       │
        │                │
        No               ▼
        │      ┌──────────────────────┐
        │      │ DOCUMENTATION        │
        │      │ Template             │
        │      └──────────────────────┘
        │
        │
        ▼
┌─────────────────┐
│ Setup Task?     │──Yes──┐
│ Items 1-7?      │       │
└─────────────────┘       │
                          ▼
                ┌──────────────────────┐
                │ SETUP Templates 1-7  │
                │ Choose appropriate   │
                └──────────────────────┘
```

## Automated Processing Flow

```
┌──────────────────────────────────────────┐
│  Issue/PR Created or Updated             │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  GitHub Actions: Label Issues Workflow   │
│  - Reads title                           │
│  - Detects keywords                      │
│  - Applies appropriate labels            │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Issue Now Has Labels                    │
│  - Type: spark/bug/feature/docs          │
│  - Area: pages/automation/etc            │
│  - Status: triage (if no match)          │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Issue Appears in Project Board          │
│  - Visible to maintainers                │
│  - Properly categorized                  │
│  - Ready for triage                      │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Maintainer Reviews & Assigns            │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Work Begins                             │
└──────────────────────────────────────────┘
```

## Stale Issue Management Flow

```
┌──────────────────────────────────────────┐
│  Issue/PR Exists                         │
└─────────────────┬────────────────────────┘
                  │
                  ▼
            ┌───────────┐
            │   Time    │
            │  Passes   │
            └─────┬─────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  60 Days Since Last Activity             │
└─────────────────┬────────────────────────┘
                  │
                  ▼
     ┌────────────────────────┐
     │  Has Exempt Label?     │
     │  (pinned, security,    │
     │  spark, in-progress,   │
     │  blocked)              │
     └──────┬─────────┬───────┘
            │         │
           Yes        No
            │         │
            │         ▼
            │  ┌──────────────────────────┐
            │  │  Stale Bot Actions       │
            │  │  - Adds "stale" label    │
            │  │  - Posts warning comment │
            │  └──────┬───────────────────┘
            │         │
            │         ▼
            │    ┌─────────┐
            │    │  Time   │
            │    │ Passes  │
            │    └────┬────┘
            │         │
            │         ▼
            │  ┌──────────────────────────┐
            │  │  14 More Days            │
            │  └──────┬───────────────────┘
            │         │
            │         ▼
            │  ┌──────────────────────────┐
            │  │  Activity Since Stale?   │
            │  └──────┬─────────┬─────────┘
            │         │         │
            │        Yes        No
            │         │         │
            ▼         ▼         ▼
     ┌──────────┐  ┌──────────────────────┐
     │  Stays   │  │  Remove Stale Label  │
     │  Open    │  │  Issue Stays Open    │
     └──────────┘  └──────────────────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │  Stale Bot Closes    │
                   │  - Posts close msg   │
                   │  - Closes issue/PR   │
                   └──────────────────────┘
```

## Pull Request Workflow

```
┌──────────────────────────────────────────┐
│  Developer Creates Branch                │
│  - feature/*, bugfix/*, docs/*           │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Developer Makes Changes                 │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Developer Creates Pull Request          │
│  - Uses PR Template                      │
│  - Links to related issues               │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Auto-Labeling Workflow Runs             │
│  - Adds labels based on title            │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Maintainer Reviews                      │
│  - Checks code quality                   │
│  - Verifies functionality                │
│  - Requests changes if needed            │
└─────────────────┬────────────────────────┘
                  │
                  ▼
     ┌────────────────────┐
     │  Changes Needed?   │
     └──────┬──────┬──────┘
            │      │
           Yes     No
            │      │
            │      ▼
            │  ┌────────────────────┐
            │  │  PR Approved       │
            │  └────────┬───────────┘
            │           │
            │           ▼
            │  ┌────────────────────┐
            │  │  PR Merged         │
            │  └────────┬───────────┘
            │           │
            ▼           ▼
     ┌──────────────────────────────┐
     │  Developer Pushes Updates    │
     │  - Addresses feedback         │
     │  - Updates PR                 │
     └──────────┬───────────────────┘
                │
                └──────┐
                       │
                       ▼
              (Back to Review)
```

## GitHub Pages Deployment Flow

```
┌──────────────────────────────────────────┐
│  Code Pushed to Main Branch              │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  GitHub Actions: Pages Workflow Triggers │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Build Job                               │
│  1. Checkout code                        │
│  2. Setup GitHub Pages                   │
│  3. Upload site artifact                 │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Deploy Job                              │
│  1. Download artifact                    │
│  2. Deploy to GitHub Pages               │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  Site Live at scotlaclair.github.io      │
└──────────────────────────────────────────┘
```

## Spark-to-Implementation Flow

```
┌──────────────────────────────────────────┐
│  💡 Spark Submitted                      │
│  - User has new idea                     │
│  - Submits via Spark template            │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  🏷️ Auto-Labeled as "spark", "triage"   │
└─────────────────┬────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│  💬 Community Discussion                 │
│  - Feasibility                           │
│  - Approach                              │
│  - Impact                                │
└─────────────────┬────────────────────────┘
                  │
                  ▼
     ┌────────────────────────┐
     │  Decision?             │
     └──┬────────┬────────┬───┘
        │        │        │
    Reject   Hold    Approve
        │        │        │
        ▼        ▼        ▼
   ┌────────┐ ┌──────┐ ┌─────────────────┐
   │ Close  │ │ Keep │ │ Convert to      │
   │ Spark  │ │ Open │ │ Feature Issue   │
   └────────┘ └──────┘ └────────┬────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ ✨ Feature Issue        │
                    │ - Detailed spec         │
                    │ - Acceptance criteria   │
                    │ - Assigned to milestone │
                    └────────┬────────────────┘
                             │
                             ▼
                    ┌─────────────────────────┐
                    │ 📊 Added to Project     │
                    │ - Appears in backlog    │
                    │ - Ready for work        │
                    └────────┬────────────────┘
                             │
                             ▼
                    ┌─────────────────────────┐
                    │ 💻 Development Begins   │
                    └─────────────────────────┘
```

## SDLC Stage Flow

```
┌──────────┐     ┌──────────┐     ┌──────────────┐
│  💭      │     │  🎨      │     │  💻          │
│ Ideation │────▶│  Design  │────▶│ Development  │
│          │     │          │     │              │
└──────────┘     └──────────┘     └──────┬───────┘
                                          │
                                          ▼
┌──────────┐     ┌──────────┐     ┌──────────────┐
│  🚀      │     │  👀      │     │  🧪          │
│Deployment│◀────│  Review  │◀────│   Testing    │
│          │     │          │     │              │
└──────────┘     └──────────┘     └──────────────┘
     │
     │
     ▼
┌──────────┐
│  🔧      │
│Maintain  │
│          │
└──────────┘
```

## Label Application Rules

```
Title Contains          →  Label Applied
─────────────────────────────────────────
[Spark] or spark:       →  spark
[Bug] or bug:           →  bug
[Feature] or feature:   →  feature
[Docs] or documentation →  documentation
[Pages] or github pages →  github-pages
[Automation] or workflow→  automation
[Project Management]    →  project-management
[Contributor Experience]→  contributor-experience
[Knowledge Base]/[SDLC] →  knowledge-base
[Templates] or [Labels] →  templates
(No match & new issue)  →  triage
```

## Priority Decision Tree

```
                    ┌──────────────┐
                    │ New Issue    │
                    └──────┬───────┘
                           │
                           ▼
              ┌────────────────────────┐
              │ Security Issue?        │
              └──┬──────────────┬──────┘
                 │              │
                Yes             No
                 │              │
                 ▼              ▼
         ┌──────────────┐  ┌────────────────┐
         │ CRITICAL     │  │ User Impact?   │
         │ priority     │  └──┬──────┬──────┘
         └──────────────┘     │      │
                           High    Low/Med
                              │      │
                              ▼      ▼
                      ┌───────────┐ ┌──────────┐
                      │   HIGH    │ │  MEDIUM  │
                      │ priority  │ │ priority │
                      └───────────┘ └──────────┘
```

## Visual Legend

```
Symbols Used:
─────────────
│  │   Box/Container
└  ┘   Corner
├  ┤   Side connection
┌  ┐   Top corner
▼      Flow direction
─      Horizontal line
│      Vertical line
◀ ▶    Arrow direction
```

## Key

- **💡 Spark**: New idea or concept
- **🐛 Bug**: Something broken
- **✨ Feature**: New functionality
- **📚 Docs**: Documentation
- **⚙️ Setup**: Repository configuration
- **🤖 Automation**: Workflow/action
- **📊 Project**: Project board
- **🏷️ Label**: Issue label
- **💬 Discussion**: Community discussion
- **👀 Review**: Code review
- **🧪 Test**: Testing phase
- **🚀 Deploy**: Deployment
- **🔧 Maintain**: Maintenance

---

**Note**: These diagrams are conceptual representations. Actual implementation may vary based on repository usage and evolution.
