# Changelog

## 1.0.0

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.7.0_

### Summary

First project-versioned progressive history. Establishes the project's own version line (separate from the base-framework version) and the supporting structure: a dedicated tutorial document, a changelogs directory, and the traditional-branch / progressive-history Git model.

### Changes

- Introduced project versioning in `package.json` (`version`), tagged on the progressive history tip.
- Moved the lab step listing and GitHub diff links out of `README.md` into `docs/TUTORIAL.md`, with a "Based on version" banner.
- Added the `changelogs/` directory and this entry format.
- Re-tagged legacy base-framework version tags to the `framework-<semver>` convention (e.g. `framework-1.7.0`), freeing plain semver for project versions.
- Documented the traditional-branch vs progressive-history model and the strict 1:1 TODO → code commit convention in `AGENTS.md` / `CLAUDE.md`.
- No lab code changes — identical in code to the prior history.
