import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import {
  CarouselModule,
  CartSharedModule,
  MediaModule,
  ProductCarouselModule,
  PromotionsModule,
} from '@spartacus/storefront';
import { CustomCartItemListComponent } from './custom-cart-item-list.component';

@NgModule({
  imports: [
    I18nModule,
    CartSharedModule,
    ReactiveFormsModule,
    PromotionsModule,
    ProductCarouselModule,
    CarouselModule,
    RouterModule,
    MediaModule,
    UrlModule,
    CommonModule,
    FeaturesConfigModule,
  ],
  declarations: [CustomCartItemListComponent],
  exports: [CustomCartItemListComponent],
})
export class CustomCartItemListModule {}
