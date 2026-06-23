# Catalyst and Makeswift Example Lab Project

This is an example developer project demonstrating how to customize a Catalyst codebase and build Makeswift components.

## Terminology and Git Model

This repository maintains two kinds of history **separately**:

- **Traditional branch** (`main`): a normal Git branch with stable, append-only history. Custom-code changes are made on feature branches, reviewed via pull request, and merged here. `main`'s history is never rewritten.
- **Progressive history**: a tutorial-shaped commit chain (clean framework install → step commits → end metadata) that represents the step-by-step lab progression. It is rebuilt as an independent commit chain and identified by a **project-version tag** (plain semver) at its tip plus the step tags along it.

`main` and the latest progressive history have **different tip commits but identical file trees**. Every change must be replicated across both, using the `bcedu-lab-sync` skill, and verified with its `validate-sync` command:

- **Framework/dependency upgrades**: rebuild a new progressive history with `bcedu-lab-upgrade`, then `sync-to-main` (a reviewed PR) brings it onto `main`.
- **Custom lab-code changes**: make them on a branch off `main` and merge via PR, then `sync-to-progressive` folds them into a rebuilt progressive history.
- **Publishing** a progressive history (moving step tags + creating the project-version tip tag) is done with `bcedu-lab-publish`; it does **not** advance `main`.

## Project Version and Changelogs

- The **project version** (plain semver, separate from the Catalyst framework version) is held in `package.json`'s `version` field and tagged on the tip of the corresponding progressive history.
- Each version has a changelog entry in `changelogs/<version>.md`.
- **Metadata at the end**: the project-version bump, the changelog entry, and the tutorial-doc updates are folded into the final commit(s) of each rebuilt progressive history (amended on each rebuild rather than accumulating new commits).
- The lab steps and GitHub diff links live in `docs/TUTORIAL.md`, which carries a "Based on version X" banner matching the latest progressive history.

## Tag Conventions

- **Project-version tag**: plain semver (e.g. `1.0.0`) at a progressive history's tip. Created fresh per history; never migrated.
- **Framework anchor**: `framework-<semver>` (e.g. `framework-1.7.0`) marks a base-framework release point. Permanent; never migrated.
- **Step tags**: `<prefix>-NN-pre` / `<prefix>-NN-post`, plus `<prefix>-start` / `<prefix>-complete`. Migrated onto a new history when publishing.
- **eLearning tags**: `e-` / `bcu-` prefixed. Migrated by the eLearning publish.

## Commit History Structure

- The first commit is a clean Catalyst install.
- **Strict 1:1 TODO → code**: each commit that introduces `TODO:` comments is immediately followed by the code commit that resolves them (one TODO commit per code commit). Avoid bundling many TODOs into a single early commit.

### Lab Exercises

| Exercise | Description | Tag Prefix |
| ------ | ----------- | ---------- |
| Catalyst Lab 1 | Basic Product FAQs | `faqs` |
| Catalyst Lab 2 | FAQ Enhancements | `faqs-enh` |
| Makeswift Lab 1 | Image Compare Slider Component | `img-comp` |
| Makeswift Lab 2 | Team Members Component | `team` |
| Makeswift Lab 3 | Integrate Product FAQs with Makeswift | `makeswift-faqs` |

### Lab Step Breakdown

Each step is a `<tag>-pre` (TODO placeholders) commit immediately followed by a `<tag>-post` (implementation) commit.

**Catalyst Lab 1 — Basic Product FAQs (`faqs`)** — start: `catalyst-start`, complete: `faqs-complete`

| Step | Tag | Description |
| ---- | --- | ----------- |
| 1 | `faqs-01` | Add ProductFaqs component to product page |
| 2 | `faqs-02` | Add product FAQ metafields query |
| 3 | `faqs-03` | Implement FaqsList component |

**Catalyst Lab 2 — FAQ Enhancements (`faqs-enh`)** — start: `faqs-enh-start`, complete: `faqs-enh-complete`

| Step | Tag | Description |
| ---- | --- | ----------- |
| 1a | `faqs-enh-01a` | Implement Accordions for product FAQs |
| 1b | `faqs-enh-01b` | Override accordion title hover text for FAQs |
| 2 | `faqs-enh-02` | Implement LoadMoreFaqs component |
| 3 | `faqs-enh-03` | Add Load More: create server action |
| 4 | `faqs-enh-04` | Add initial loading state |
| 5 | `faqs-enh-05` | Add Load More spinner |
| 6 | `faqs-enh-06` | Error handling |

**Makeswift Lab 1 — Image Compare Slider Component (`img-comp`)** — start: `makeswift-start`, complete: `img-comp-complete`

| Step | Tag | Description |
| ---- | --- | ----------- |
| 1 | `img-comp-01` | Register Image Compare Slider component |
| 2 | `img-comp-02` | Use react-compare-slider in component placeholder |
| 3 | `img-comp-03` | Add controls for comparison images |
| 4 | `img-comp-04` | Add Style control to Image Compare Slider component |

**Makeswift Lab 2 — Team Members Component (`team`)** — start: `team-start`, complete: `team-complete`

| Step | Tag | Description |
| ---- | --- | ----------- |
| 1 | `team-01` | Register Team Members component |
| 2 | `team-02` | Add List control for team members |
| 3 | `team-03` | Add full member display and interactivity |
| 4 | `team-04` | Add controls for highlight colors and thumbnail orientation |
| 5 | `team-05` | Add content Slot for team members |
| 6 | `team-06` | Add Style control to Team Members component |

**Makeswift Lab 3 — Integrate Product FAQs with Makeswift (`makeswift-faqs`)** — start: `makeswift-faqs-start`, complete: `makeswift-faqs-complete`

| Step | Tag | Description |
| ---- | --- | ----------- |
| 1 | `makeswift-faqs-01` | Embed Product FAQs component with Makeswift |
| 2 | `makeswift-faqs-02` | Add arbitrary FAQs as Makeswift props |
| 3 | `makeswift-faqs-03` | Add content slot option for FAQs |
| 4 | `makeswift-faqs-04` | Add showOriginal prop |

## File Removal - Protected Paths

When creating a clean orphan branch, the following additional file paths should be protected from removal:

* `.env.local`

## Framework Install Command

The base framework is Catalyst. Clone Catalyst from GitHub:

```
git clone git@github.com:bigcommerce/catalyst.git --branch @bigcommerce/catalyst-makeswift@<version>
```

After re-installing the framework, make sure an appropriate version of Node.js is installed according to `.nvmrc` and use `pnpm install` to install dependencies.
