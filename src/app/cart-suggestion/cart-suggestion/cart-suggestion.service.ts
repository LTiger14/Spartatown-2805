import { Injectable } from '@angular/core';
import { CartService, Product, ProductReferenceService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CartSuggestionService {
  constructor(
    private cartService: CartService,
    private productReferenceService: ProductReferenceService
  ) {}

  getSuggestions(): Observable<Product[]> {
    return this.cartService.getActive().pipe(
      filter((cart) => cart.entries.length > 0),
      map((cart) => cart.entries[0].product.code),
      switchMap((productCode) => this.productReferenceService.get(productCode))
    );
  }
}
