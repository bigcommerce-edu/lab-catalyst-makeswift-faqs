# Changelog

## 1.0.2-test

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.6.3_

### Summary

Test progressive history rebuilt on Catalyst 1.6.3 (a downgrade from 1.7.0) to exercise the `bcedu-lab-upgrade` workflow. No lab code changes; the framework base was swapped and lab history replayed on top.

### Changes

- Re-rooted the progressive history onto a clean Catalyst (`@bigcommerce/catalyst-makeswift`) 1.6.3 install (previously 1.7.0).
- Regenerated the `react-compare-slider` install (`^4.0.0`, unchanged — already the latest) against the new base lockfile.

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
