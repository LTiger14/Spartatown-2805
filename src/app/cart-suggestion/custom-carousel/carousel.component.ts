import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  CmsProductCarouselComponent,
  
  Product,
  ProductService,
} from '@spartacus/core';
import {
  CmsComponentData,
  ProductCarouselComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpartaCarouselComponent extends ProductCarouselComponent {
  @Input()
  title: string;
  @Input()
  items$: Observable<Observable<Product>[]>;

  constructor(
    componentData: CmsComponentData<CmsProductCarouselComponent>,
    productService: ProductService
    
  ) {
    super(componentData, productService );
  }
}
