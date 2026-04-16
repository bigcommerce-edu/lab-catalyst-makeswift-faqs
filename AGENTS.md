# Catalyst and Makeswift Example Lab Project

This is an example developer project demonstrating how to customize a Catalyst codebase and build Makeswift components. 

## Lab Steps and Commit History

The commit history of the repository is important and represents the steps of the developer labs. Each commit starting with the `catalyst-start` tag demonstrates the code changes in a lab step.

## File Removal - Protected Paths

When creating a clean orphan branch, the following additional file paths should be protected from removal:

* `.env.local`

## Framework Install Command

The base framework is Catalyst. Clone Catalyst from GitHub:

```
git clone git@github.com:bigcommerce/catalyst.git --branch @bigcommerce/catalyst-makeswift@<version>
```

After re-installing the framework, make sure an appropriate version of Node.js is installed according to `.nvmrc` and use `pnpm install` to install dependencies.

## Lab Exercises

| Tag Prefix | Description |
|------------|-------------|
| faqs | Product FAQs — Create a basic product FAQ display component |
| faqs-enh | FAQ Enhancements — Add Load More, loading states, and error handling |
| img-comp | Image Compare Slider — Build a custom Makeswift image comparison component |
| team | Team Members — Build a Makeswift team members list component |
| makeswift-faqs | Makeswift FAQs Integration — Register the FAQ component with Makeswift |
