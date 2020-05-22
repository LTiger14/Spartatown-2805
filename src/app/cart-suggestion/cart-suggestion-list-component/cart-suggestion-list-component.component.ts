import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Suggestions } from '../model/suggestions.model';
import { CartSuggestionService } from '../services/cart-suggestion.service';

@Component({
  selector: 'app-cart-suggestion-list-component',
  templateUrl: './cart-suggestion-list-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSuggestionListComponent {
  suggestions$: Observable<Suggestions> = this.service.getSuggestions();

  constructor(private service: CartSuggestionService) {}
}
