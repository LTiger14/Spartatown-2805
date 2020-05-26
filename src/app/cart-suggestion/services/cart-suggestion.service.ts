import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  CartSelectors,
  ProductReferenceService,
  StateWithCart,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Suggestions } from '../model/suggestions.model';

@Injectable()
export class CartSuggestionService {
  constructor(
    private productReferenceService: ProductReferenceService,
    private store: Store<StateWithCart>
  ) {}

  getSuggestions(): Observable<Suggestions> {
    return this.store.pipe(
      select(CartSelectors.getCartEntries),
      filter((entries) => entries.length > 0),
      map((entries) => entries[0].product),
      tap((_) => this.productReferenceService.cleanReferences()),
      switchMap((cartProduct) =>
        this.productReferenceService.get(cartProduct.code, 'ACCESSORIES').pipe(
          filter((suggestions) => Boolean(suggestions)),
          map((suggestions) => {
            const items$ = suggestions
              .map((suggestion) => suggestion.target)
              .map((product) => of(product));
            return {
              items$: of(items$),
              title: `Suggestions based on ${cartProduct.name}`,
            };
          })
        )
      )
    );
  }
}
