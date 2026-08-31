# Changelog

## 1.1.2

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.11.0_

### Summary

Framework upgrade from Catalyst 1.10.0 to 1.11.0. No structural changes to the project layout and no changes to lab code — the upgrade replayed cleanly across every lab step.

### Changes

- Upgraded the base framework from `@bigcommerce/catalyst-makeswift@1.10.0` to `@bigcommerce/catalyst-makeswift@1.11.0`.
- Merged the new framework `.gitignore` comment about `bigcommerce.graphql` and `bigcommerce-graphql.d.ts` with the existing lab-specific block.
- No lab dependency versions changed (`react-compare-slider` remains at the latest `4.0.0`).
- No functional changes to lab code.

## 1.1.1

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.10.0_

### Summary

Framework upgrade from Catalyst 1.7.0 to 1.10.0. No structural changes to the project layout — the repository-root scaffold introduced in 1.1.0 is unchanged. Framework-level updates (e.g. the new `ProductVideos` section on the product detail page) were reconciled against the lab's `ProductFaqs` insertion point on the same page.

### Changes

- Upgraded the base framework from `@bigcommerce/catalyst-makeswift@1.7.0` to `@bigcommerce/catalyst-makeswift@1.10.0`.
- Merged the new framework `.gitignore` entry (`.bigcommerce` under "Catalyst CLI config") with the existing lab-specific block, removing the now-duplicate lab-side entry.
- No lab dependency versions changed (`react-compare-slider` remains at the latest `4.0.0`).
- No functional changes to lab code.

## 1.1.0

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.7.0_

### Summary

Rebuilt the progressive history on the Catalyst CLI's scaffolding command instead of a raw GitHub clone. The project's contents now live at the repository root — the `core/` subdirectory from the prior monorepo-style layout no longer exists.

### Changes

- Switched the framework install command to `pnpm create @bigcommerce/catalyst@latest ...`, followed by `pnpm approve-builds --all` before the initial commit.
- All lab-code paths (components, `AGENTS.md` framework references, etc.) shifted from `core/*` to the repository root to match the new scaffold's structure.
- Added `*.graphql` and `*.graphql.d.ts` to `.gitignore`.
- No functional changes to lab code — identical behavior to the prior history, aside from the path shift.

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
