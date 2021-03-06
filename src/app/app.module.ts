import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { SuggestionsModule } from './cart-suggestion/cart-suggestion-list.module';
import { SpartaProductImagesModule } from './product-images/product-images.module';

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
    SpartaProductImagesModule,
    SuggestionsModule,

    ...(environment.production ? [] : [StoreDevtoolsModule.instrument()]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
