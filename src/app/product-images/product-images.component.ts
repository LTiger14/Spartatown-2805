import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from '@spartacus/core';
import {
  CurrentProductService,
  ProductImagesComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cx-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpartaProductImagesComponent extends ProductImagesComponent {
  categories$: Observable<Category[]> = this.cPS
    .getProduct()
    .pipe(map((product) => product.categories.slice(0, 3)));

  constructor(
    private cPS: CurrentProductService,
    currentProductService: CurrentProductService
  ) {
    super(currentProductService);
  }
}
