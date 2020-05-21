import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { CartSuggestionService } from '../cart-suggestion/cart-suggestion.service';
import { CustomCarouselModule } from '../custom-carousel/custom-carousel.module';
import { CartSuggestionListComponent } from './cart-suggestion-list-component.component';

@NgModule({
  declarations: [CartSuggestionListComponent],
  imports: [
    CustomCarouselModule,
    CarouselModule,
    RouterModule,
    MediaModule,
    UrlModule,
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
