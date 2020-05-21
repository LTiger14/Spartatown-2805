import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { CartSuggestionListComponent } from './cart-suggestion-list-component.component';
// import { LayoutConfig } from '@spartacus/storefront';
import { staticCmsConfig } from './static-cms-config';

@NgModule({
  declarations: [CartSuggestionListComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(staticCmsConfig as CmsStructureConfig),
    // ConfigModule.withConfig(LayoutConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        CartSuggestionListComponent: {
          component: CartSuggestionListComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [CartSuggestionListComponent],
  exports: [CartSuggestionListComponent],
})
export class CartSuggestionListComponentModule {}
