import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CartSuggestionService } from '../cart-suggestion/cart-suggestion.service';

@Component({
  selector: 'app-cart-suggestion-list-component',
  templateUrl: './cart-suggestion-list-component.component.html',
  styleUrls: ['./cart-suggestion-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSuggestionListComponent {
  suggestions$: Observable<Product[]> = this.service.getSuggestions();

  constructor(private service: CartSuggestionService) {}
}
