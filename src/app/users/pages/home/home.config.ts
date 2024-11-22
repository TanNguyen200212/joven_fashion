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
import { homeRoutes } from './home.routes';

let modules = [HttpClientModule, BrowserAnimationsModule, BrowserModule];

export const homeConfig: ApplicationConfig = {
  providers: [
    provideRouter(homeRoutes, withComponentInputBinding(), withRouterConfig({ paramsInheritanceStrategy: 'always' })),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
    provideAnimations()
],
};
