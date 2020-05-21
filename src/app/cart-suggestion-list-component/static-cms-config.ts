import {
  CmsPageConfig,
  CmsStructureConfig,
  ContentSlotComponentData,
} from '@spartacus/core';

export const staticComponents: {
  [key: string]: ContentSlotComponentData;
} = {
  CartSuggestionListComponent: {
    typeCode: 'CartSuggestionListComponent',
    flexType: 'CartSuggestionListComponent',
  },
};
export const staticPages: CmsPageConfig[] = [
  {
    ignoreBackend: false,
    pageId: '/cart',
    template: 'CartPageTemplate',
    slots: {
      StaticSlot: {
        componentIds: ['CartSuggestionListComponent'],
      },
    },
  },
];
export const staticCmsConfig: CmsStructureConfig = {
  cmsStructure: {
    components: {
      ...staticComponents,
    },
    slots: {},
    pages: staticPages,
  },
};
