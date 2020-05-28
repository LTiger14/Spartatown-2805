import { Component } from '@angular/core';
// TODO:Spartacus - 'UrlMatcherFactoryService' was renamed to 'UrlMatcherService' and its methods were renamed. For more details, see the migration docs.
import { UrlMatcherFactoryService } from '@spartacus/core';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private urlMatcher: UrlMatcherFactoryService) {
    LoggerService.log(this.urlMatcher.getGlobUrlMatcher(['*']));
  }
}
