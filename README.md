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

## Catalyst Core Labs

### Getting Started

Copy the *catalyst-start* branch.

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/catalyst-start
```

### Lab 1: Basic Product FAQs

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/faqs-complete)

* [Step 1: Add placeholder to product page](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-01-pre...faqs-01-post?diff=split)
* [Step 2: Fetch FAQ metafields](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-02-pre...faqs-02-post?diff=split)
* [Step 3: Basic FAQ display](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-03-pre...faqs-03-post?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/catalyst-start...faqs-complete?diff=split)

### Lab 2: FAQ Enhancements

Fresh setup:

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/faqs-enh-start
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/faqs-enh-complete)

* Step 1: Implement an Accordion
    * [Step 1a: Add Accordion UI](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-01a-pre...faqs-enh-01a-post?diff=split)
    * [Step 1b: Override Accordion hover text](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-01b-pre...faqs-enh-01b-post?diff=split)
* [Step 2: Load More button](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-02-pre...faqs-enh-02-post?diff=split)
* [Step 3: Data fetch for Load More](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-03-pre...faqs-enh-03-post?diff=split)
* [Step 4: Loading state for initial FAQs](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-04-pre...faqs-enh-04-post?diff=split)
* [Step 5: Loading state for Load More](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-05-pre...faqs-enh-05-post?diff=split)
* [Step 6: Error handling](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-06-pre...faqs-enh-06-post?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/faqs-enh-start...faqs-enh-complete?diff=split)

### Finished State

Set up with all features complete:

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/faqs-enh-complete
```

## Makeswift Core Labs

### Getting Started

Copy the _starter_ branch.

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/makeswift-start
```

### Lab 1: Image Compare Slider Component

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/img-comp-complete)

* [Step 1: Register Image Compare Slider component](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/img-comp-01-pre...img-comp-01-post?diff=split)
* [Step 2: Add slider functionality](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/img-comp-02-pre...img-comp-02-post?diff=split)
* [Step 3: Add compare image controls](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/img-comp-03-pre...img-comp-03-post?diff=split)
* [Step 4: Add style control](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/img-comp-04-pre...img-comp-04-post?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/makeswift-start...img-comp-complete?diff=split)

### Lab 2: Team Members Component

Fresh setup:

```
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/team-start
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/team-complete)

* [Step 1: Register Team Members component](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-01-pre...team-01-post?diff=split)
* [Step 2: Add list control](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-02-pre...team-02-post?diff=split)
* [Step 3: Initial display and interactivity](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-03-pre...team-03-post?diff=split)
* [Step 4: Color and orientation controls](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-04-pre...team-04-post?diff=split)
* [Step 5: Add slot controls](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-05-pre...team-05-post?diff=split)
* [Step 6: Add style control](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-06-pre...team-06-post?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/team-start...team-complete?diff=split)

### Lab 3: Integrate Product FAQs with Makeswift

Fresh setup:

```
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/makeswift-faqs-start
```

[Completed Lab 3 state](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/makeswift-faqs-complete)

* [Step 1: Embed Product FAQs with Makeswift](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/makeswift-faqs-01-pre...makeswift-faqs-01-post?diff=split)
* [Step 2: Add control for additional FAQs](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/makeswift-faqs-02-pre...makeswift-faqs-02-post?diff=split)
* [Step 3: Content slot option for FAQs](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/makeswift-faqs-03-pre...makeswift-faqs-03-post?diff=split)
* [Step 4: Make metafield FAQs optional](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/makeswift-faqs-04-pre...makeswift-faqs-04-post?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/compare/makeswift-faqs-start...makeswift-faqs-complete?diff=split)

### Finished State

Set up with all features complete:

```shell
pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-catalyst-makeswift-faqs/tree/makeswift-faqs-complete
```
