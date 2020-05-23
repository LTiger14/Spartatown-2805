import { Component } from '@angular/core';
import { UrlMatcherFactoryService } from '@spartacus/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private urlMatcher: UrlMatcherFactoryService) {
    // dummy example
    this.urlMatcher.getFalsyUrlMatcher();
  }
}
