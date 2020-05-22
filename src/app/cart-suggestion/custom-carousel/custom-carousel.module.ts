import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import {
  CarouselModule,
  MediaModule,
  ProductCarouselModule,
} from '@spartacus/storefront';
import { CustomCarouselComponent } from './custom-carousel.component';

@NgModule({
  imports: [
    ProductCarouselModule,
    CarouselModule,
    RouterModule,
    MediaModule,
    UrlModule,
    CommonModule,
  ],
  declarations: [CustomCarouselComponent],
  exports: [CustomCarouselComponent],
})
export class CustomCarouselModule {}
