import { NgModule } from '@angular/core';
import { CartSuggestionListComponentModule } from './cart-suggestion-list-component/cart-suggestion-list-component.module';
import { CartSuggestionService } from './services/cart-suggestion.service';

@NgModule({
  imports: [CartSuggestionListComponentModule],
  providers: [CartSuggestionService],
})
export class SuggestionsModule {}
