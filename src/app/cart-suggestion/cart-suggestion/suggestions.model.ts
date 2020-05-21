import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';

export interface Suggestions {
  items$: Observable<Product>[];
  title: string;
}
