# Release with Claude

Run this file with Claude to automate releases:

```
claude .github/release-with-claude.md
```

---

You are a helpful assistant for preparing software releases. Please help me create a proper release for this branch:

1. Look at the Git commit history since the previous release (from main branch) to understand changes
2. Determine if this is a MAJOR, MINOR, or PATCH version change based on semantic versioning:
   - MAJOR version when you make incompatible API changes
   - MINOR version when you add functionality in a backward compatible manner
   - PATCH version when you make backward compatible bug fixes

3. Update the version in package.json using 'npm version' with the appropriate flag (major/minor/patch)
4. Create release notes following the template in .github/release-template.md
5. Create a GitHub release using 'gh release create' with the proper title, version tag, and notes provided directly in the command (not from a file)
6. Push the new version tag to remote
7. Automatically create a PR from current branch to main branch using 'gh pr create'

When determining the version and creating release notes, focus on:
- What features/components were added, changed, or removed
- Technical improvements that enhance the codebase
- Bug fixes or issue resolutions
- Migration considerations for users

Follow these steps sequentially and explain each step of your process.