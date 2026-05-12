# Catalyst and Makeswift Example Lab Project

This is an example developer project demonstrating how to customize a Catalyst codebase and build Makeswift components. 

## Lab Steps and Commit History

The commit history of the repository is important and represents the steps of the developer labs. Each commit starting with the `catalyst-start` tag demonstrates the code changes in a lab step.

### Lab Exercises

| Exercise | Description | Tag Prefix |
| ------ | ----------- | ---------- |
| Catalyst Lab 1 | Basic Product FAQs | `faqs` |
| Catalyst Lab 2 | FAQ Enhancements | `faqs-enh` |
| Makeswift Lab 1 | Image Compare Slider Component | `img-comp` |
| Makeswift Lab 2 | Team Members Component | `team` |
| Makeswift Lab 3 | Integrate Product FAQs with Makeswift | `makeswift-faqs` |

## File Removal - Protected Paths

When creating a clean orphan branch, the following additional file paths should be protected from removal:

* `.env.local`

## Framework Install Command

The base framework is Catalyst. Clone Catalyst from GitHub:

```
git clone git@github.com:bigcommerce/catalyst.git --branch @bigcommerce/catalyst-makeswift@<version>
```

After re-installing the framework, make sure an appropriate version of Node.js is installed according to `.nvmrc` and use `pnpm install` to install dependencies.
