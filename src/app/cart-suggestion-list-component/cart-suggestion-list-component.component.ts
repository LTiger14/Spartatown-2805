import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Cart } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-suggestion-list-component',
  templateUrl: './cart-suggestion-list-component.component.html',
  styleUrls: ['./cart-suggestion-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSuggestionListComponent implements OnInit {
  componentData$: Observable<Cart> = this.componentData.data$;
  constructor(private componentData: CmsComponentData<Cart>) {}

  ngOnInit() {}
}
