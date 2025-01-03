import { getTranslations } from 'next-intl/server';

import { fetchFacetedSearch } from '~/app/[locale]/(default)/(faceted)/fetch-faceted-search';
import { ExistingResultType } from '~/client/util';

export const facetsTransformer = async (
  facets: ExistingResultType<typeof fetchFacetedSearch>['facets']['items'],
) => {
  const t = await getTranslations('FacetedGroup.FacetedSearch.Facets');

  return facets.map((facet) => {
    if (facet.__typename === 'CategorySearchFilter') {
      return {
        type: 'toggle-group' as const,
        paramName: 'categoryIn',
        label: facet.name,
        defaultCollapsed: facet.isCollapsedByDefault,
        options: facet.categories.map((category) => ({
          label: category.name,
          value: category.entityId.toString(),
        })),
      };
    }

    if (facet.__typename === 'BrandSearchFilter') {
      return {
        type: 'toggle-group' as const,
        paramName: 'brand',
        label: facet.name,
        defaultCollapsed: facet.isCollapsedByDefault,
        options: facet.brands.map((brand) => ({
          label: brand.name,
          value: brand.entityId.toString(),
        })),
      };
    }

    if (facet.__typename === 'ProductAttributeSearchFilter') {
      return {
        type: 'toggle-group' as const,
        paramName: `attr_${facet.filterName}`,
        label: facet.filterName,
        options: facet.attributes.map((attribute) => ({
          label: attribute.value,
          value: attribute.value,
        })),
      };
    }

    if (facet.__typename === 'RatingSearchFilter') {
      return {
        type: 'rating' as const,
        paramName: 'minRating',
        label: facet.name,
      };
    }

    if (facet.__typename === 'PriceSearchFilter') {
      return {
        type: 'range' as const,
        minParamName: 'minPrice',
        maxParamName: 'maxPrice',
        label: facet.name,
        min: facet.selected?.minPrice ?? undefined,
        max: facet.selected?.maxPrice ?? undefined,
      };
    }

    if (facet.freeShipping) {
      return {
        type: 'toggle-group' as const,
        paramName: `shipping`,
        label: t('freeShippingLabel'),
        options: [{ label: t('freeShippingLabel'), value: 'free_shipping' }],
      };
    }

    if (facet.isFeatured) {
      return {
        type: 'toggle-group' as const,
        paramName: `isFeatured`,
        label: t('isFeaturedLabel'),
        options: [{ label: t('isFeaturedLabel'), value: 'on' }],
      };
    }

    if (facet.isInStock) {
      return {
        type: 'toggle-group' as const,
        paramName: `stock`,
        label: t('inStockLabel'),
        options: [{ label: t('inStockLabel'), value: 'in_stock' }],
      };
    }

    return null;
  });
};
