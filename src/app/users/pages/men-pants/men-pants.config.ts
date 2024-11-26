import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { menPantsRoutes } from './men-pants.routes';

let modules = [HttpClientModule, BrowserAnimationsModule, BrowserModule];

export const menPantsConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      menPantsRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
    provideAnimations(),
  ],
};
