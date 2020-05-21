import { Injectable } from '@angular/core';
import { CartService, ProductReferenceService } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Suggestions } from './suggestions.model';

@Injectable()
export class CartSuggestionService {
  constructor(
    private cartService: CartService,
    private productReferenceService: ProductReferenceService
  ) {}

  getSuggestions(): Observable<Suggestions> {
    return this.cartService.getActive().pipe(
      filter((cart) => cart.entries.length > 0),
      map((cart) => cart.entries[0].product),
      switchMap((cartProduct) =>
        this.productReferenceService.get(cartProduct.code).pipe(
          filter((suggestions) => Boolean(suggestions)),
          map((suggestions) => {
            const items$ = suggestions
              .map((suggestion) => suggestion.target)
              .map((product) => of(product));
            return {
              items$,
              title: `Suggestions for ${cartProduct.name}`,
            };
          })
        )
      )
    );
  }
}
