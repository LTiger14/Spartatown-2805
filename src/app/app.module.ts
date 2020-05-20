import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl:
            'https://api.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/',
        },
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '1.5',
        anonymousConsents: true,
      },
    }),
    BrowserTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
