import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { CartSuggestionService } from '../cart-suggestion/cart-suggestion.service';
import { CartSuggestionListComponent } from './cart-suggestion-list-component.component';

@NgModule({
  declarations: [CartSuggestionListComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SaveForLaterComponent: {
          component: CartSuggestionListComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [CartSuggestionListComponent],
  exports: [CartSuggestionListComponent],
  providers: [CartSuggestionService],
})
export class CartSuggestionListComponentModule {}
