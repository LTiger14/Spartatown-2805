import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSuggestionService } from '../cart-suggestion/cart-suggestion.service';
import { Suggestions } from '../cart-suggestion/suggestions.model';

@Component({
  selector: 'app-cart-suggestion-list-component',
  templateUrl: './cart-suggestion-list-component.component.html',
  styleUrls: ['./cart-suggestion-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSuggestionListComponent {
  suggestions$: Observable<Suggestions> = this.service.getSuggestions();

  constructor(private service: CartSuggestionService) {}
}