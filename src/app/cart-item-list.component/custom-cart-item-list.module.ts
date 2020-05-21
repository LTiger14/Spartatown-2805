import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import {
  CarouselModule,
  CartSharedModule,
  ItemCounterModule,
  MediaModule,
  ProductCarouselModule,
  PromotionsModule,
} from '@spartacus/storefront';
import { CustomCartItemListComponent } from './custom-cart-item-list.component';

@NgModule({
  imports: [
    I18nModule,
    CartSharedModule,
    ItemCounterModule,
    PromotionsModule,
    ProductCarouselModule,
    CarouselModule,
    RouterModule,
    MediaModule,
    UrlModule,
    CommonModule,
  ],
  declarations: [CustomCartItemListComponent],
  exports: [CustomCartItemListComponent],
})
export class CustomCartItemListModule {}
