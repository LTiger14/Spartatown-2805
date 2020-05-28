import { Component } from '@angular/core';
import { UrlMatcherService } from '@spartacus/core';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private urlMatcher: UrlMatcherService) {
    LoggerService.log(this.urlMatcher.getFromGlob(['*']));
  }
}
