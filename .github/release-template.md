# TofuPilot Release Note Template

This template should be followed for all future releases to maintain consistency.

## Release Note Format

```markdown
# TofuPilot Com v{VERSION}

## 🚀 New Features & Improvements
- Feature A
- Feature B with details
- Feature C

## 🛠️ Technical Improvements
- Code refactoring
- Performance improvements
- Security enhancements
- Dependency updates

## 🔧 Bug Fixes
- Fixed issue with X
- Resolved problem with Y
- Corrected behavior in Z

## 🗑️ Feature Removal
- Removed feature X
- Deprecated function Y
- Sunset API endpoint Z

## 📋 Migration Notes
- Required actions for users
- Backward compatibility information
- Data migration details

## 🧪 Testing
- Follow the test plan described in PR #{PR_NUMBER}
- Key areas to validate: {LIST_IMPORTANT_AREAS}
```

**Important formatting rules:**
1. Use exactly one top-level H1 heading for the version title
2. Use only H2 headings for section titles
3. Use consistent emoji at the beginning of each section title
4. Keep all section titles at the same heading level (H2)
5. Do not use H3 or deeper headings within sections
6. Use bullet points for all items in each section
7. Remove "(if applicable)" from section titles - simply omit sections that don't apply
8. Do not add extra sections beyond those in the template

## Guidelines

1. Always start with "TofuPilot Com v{VERSION}" as the H1 title
2. Use emoji to visually distinguish sections
3. Group changes by logical categories
4. Use bullet points for individual changes
5. Include migration notes when necessary
6. Focus on user impact rather than technical details when possible
7. Reference related PRs and issues using #number format
8. Include testing recommendations for users upgrading to this version
9. Format as Markdown
10. Update version in package.json before creating a release

## Creating a Release

Create the release using GitHub CLI:

```bash
gh release create v{VERSION} --title "v{VERSION}" --notes-file release-notes.md
```

For minor/patch versions:
```bash
gh release create v{VERSION} --prerelease --title "v{VERSION}" --notes "..."
```

Remember to update the branch target if releasing from a feature branch!