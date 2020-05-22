import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';

export interface Suggestions {
  items$: Observable<Observable<Product>[]>;
  title: string;
}
