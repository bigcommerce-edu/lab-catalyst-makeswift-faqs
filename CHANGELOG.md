# Changelog

## 1.1.0-test

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.7.0_

### Summary

Replaced the API-based Product FAQs implementation with a SQLite-backed data source, and added unit test coverage for the FAQs logic.

### Changes

- Removed the API-based product FAQ implementation in favor of a SQLite adapter (`_data/faqs-db.ts`), loading `node:sqlite` via `process.getBuiltinModule`.
- Namespaced FAQ keys to avoid Makeswift merge collisions, with a dedicated `merge-faqs` helper.
- Defaulted the FAQ answer to empty so new entries render the Makeswift content slot.
- Added Vitest for component unit testing (`core/vitest.config.ts`) and extracted pure FAQ helpers to make the logic testable.
- Added unit tests covering FAQ component data, the SQLite adapter, and FAQ merging.

## 1.0.1

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.7.0_

### Summary

Affects only commit history. Standardized the way TODOs are introduced in step history and consolidated metadata to end of history.

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
