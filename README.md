# Catalyst/Makeswift Product FAQs

This project supports lab exercises for a Makeswift-enabled Product FAQs feature, as well as custom Makeswift components.

## Prerequisites

* Node.js 20 or later

### Product Data

Product metafields in the following format must exist on a product to populate FAQs.

**Example request:**

Method: POST

URL: https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/products/{product_id}/metafields

Headers:

X-Auth-Token (V2/V3 API token)

Body:

```json
{
    "key": "ship-time",
    "value": "{ \"question\": \"How quickly does this product ship?\", \"answer\": \"The product ships within 2 days.\" }",
    "namespace": "FAQ",
    "permission_set": "read_and_sf_access"
}
```

## Catalyst Essentials Labs

### Getting Started

Copy the *cat-start* branch.

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/cat-start /path/to/working/directory
```

### Lab 1: Basic Product FAQs

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/cat-basic-faqs-complete)

* [Step 1: Add placeholder to product page](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-start...cat-basic-faqs-01?diff=split)
* [Step 2: Fetch FAQ metafields](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-basic-faqs-01...cat-basic-faqs-02?diff=split)
* [Step 3: Basic FAQ display](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-basic-faqs-02...cat-basic-faqs-03?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-start...cat-basic-faqs-complete?diff=split)

### Lab 2: FAQ Enhancements

Fresh setup:

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/cat-faq-enhancements-start /path/to/working/directory
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/cat-faq-enhancements-complete)

* [Step 2a: Add Accordion UI](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-start...cat-faq-enhancements-02?diff=split)
* [Step 2b: Override Accordion hover text](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-02...cat-faq-enhancements-02-b?diff=split)
* [Step 3: Load More button](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-02-b...cat-faq-enhancements-03?diff=split)
* [Step 4: Data fetch for Load More](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-03...cat-faq-enhancements-04?diff=split)
* [Step 5: Loading state for initial FAQs](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-04...cat-faq-enhancements-05?diff=split)
* [Step 6: Loading state for Load More](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-05...cat-faq-enhancements-06?diff=split)
* [Step 7: Error handling](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-06...cat-faq-enhancements-07?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/cat-faq-enhancements-start...cat-faq-enhancements-complete?diff=split)

### Finished State

Set up with all features complete:

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/cat-faq-enhancements-complete /path/to/working/directory
```

## Makeswift Essentials Labs

### Getting Started

Copy the _starter_ branch.

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/mak-start /path/to/working/directory
```

### Lab 1: Image Compare Slider Component

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/mak-image-compare-complete)

* [Step 1: Register Image Compare Slider component](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-start...mak-image-compare-01?diff=split)
* [Step 2: Add slider functionality](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-image-compare-01...mak-image-compare-02?diff=split)
* [Step 3: Add compare image controls](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-image-compare-02...mak-image-compare-03?diff=split)
* [Step 4: Add style control](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-image-compare-03...mak-image-compare-04?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-start...mak-image-compare-complete?diff=split)

### Lab 2: Team Members Component

Fresh setup:

```
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/mak-team-members-start /path/to/working/directory
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/mak-team-members-complete)

* [Step 1: Register Team Members component](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-start...mak-team-members-01?diff=split)
* [Step 2: Add list control](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-01...mak-team-members-02?diff=split)
* [Step 3: Initial display and interactivity](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-02...mak-team-members-03?diff=split)
* [Step 4: Color and orientation controls](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-03...mak-team-members-04?diff=split)
* [Step 5: Add slot controls](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-04...mak-team-members-05?diff=split)
* [Step 6: Add style control](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-05...mak-team-members-06?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-team-members-start...mak-team-members-complete?diff=split)

### Lab 3: Integrate Product FAQs with Makeswift

Fresh setup:

```
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/mak-faqs-start /path/to/working/directory
```

[Completed Lab 3 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/mak-faqs-complete)

* [Step 1: Embed Product FAQs with Makeswift](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-faqs-start...mak-faqs-01?diff=split)
* [Step 2: Add control for additional FAQs](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-faqs-01...mak-faqs-02?diff=split)
* [Step 3: Content slot option for FAQs](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-faqs-02...mak-faqs-03?diff=split)
* [Step 4: Make metafield FAQs optional](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-faqs-03...mak-faqs-04?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/mak-faqs-start...mak-faqs-complete?diff=split)
