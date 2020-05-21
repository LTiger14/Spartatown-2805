import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '@spartacus/core';
import { CartItemListComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-cart-item-list',
  templateUrl: './custom-cart-item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCartItemListComponent extends CartItemListComponent {
  constructor(cartService: CartService, fb: FormBuilder) {
    super(cartService, fb);
  }
}
