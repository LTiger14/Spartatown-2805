import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import {
  CarouselModule,
  MediaModule,
  OutletModule,
} from '@spartacus/storefront';
import { SpartaProductImagesComponent } from './product-images.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    OutletModule,
    CarouselModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductImagesComponent: {
          component: SpartaProductImagesComponent,
        },
      },
    }),
  ],
  entryComponents: [SpartaProductImagesComponent],
  declarations: [SpartaProductImagesComponent],
})
export class SpartaProductImagesModule {}
