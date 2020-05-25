import { Component } from '@angular/core';
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
