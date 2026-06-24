# Catalyst/Makeswift Product FAQs

This project supports lab exercises for a Makeswift-enabled Product FAQs feature, as well as custom Makeswift components.

## Prerequisites

* Node.js 24 or later

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
    "namespace": "FAQ|en",
    "permission_set": "read_and_sf_access"
}
```

## Lab Exercises

The lab exercises and their step-by-step diffs are documented in [docs/TUTORIAL.md](docs/TUTORIAL.md).
