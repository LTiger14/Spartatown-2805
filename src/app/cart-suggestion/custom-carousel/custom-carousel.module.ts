import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import {
  CarouselModule,
  MediaModule,
  ProductCarouselModule,
} from '@spartacus/storefront';
import { SpartaCarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    ProductCarouselModule,
    CarouselModule,
    RouterModule,
    MediaModule,
    UrlModule,
    CommonModule,
  ],
  declarations: [SpartaCarouselComponent],
  exports: [SpartaCarouselComponent],
})
export class CustomCarouselModule {}
