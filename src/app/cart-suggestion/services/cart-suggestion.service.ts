import { Injectable } from '@angular/core';
import { ActiveCartService, ProductReferenceService } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Suggestions } from '../model/suggestions.model';

@Injectable()
export class CartSuggestionService {
  constructor(
    private productReferenceService: ProductReferenceService,
    private activeCartService: ActiveCartService
  ) {}

  getSuggestions(): Observable<Suggestions> {
    return this.activeCartService.getEntries().pipe(
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
