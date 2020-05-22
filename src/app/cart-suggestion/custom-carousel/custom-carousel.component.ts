import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  CmsProductCarouselComponent,
  FeatureConfigService,
  Product,
  ProductService,
} from '@spartacus/core';
import {
  CmsComponentData,
  ProductCarouselComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-carousel-component',
  templateUrl: './custom-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCarouselComponent extends ProductCarouselComponent {
  @Input()
  title: string;
  @Input()
  items$: Observable<Observable<Product>[]>;

  constructor(
    componentData: CmsComponentData<CmsProductCarouselComponent>,
    productService: ProductService,
    features?: FeatureConfigService
  ) {
    super(componentData, productService, features);
  }
}
