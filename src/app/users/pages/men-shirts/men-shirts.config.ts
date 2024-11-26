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
import { menShirtsRoutes } from './men-shirts.routes';

let modules = [HttpClientModule, BrowserAnimationsModule, BrowserModule];

export const newArrivalConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      menShirtsRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideAnimations(),
    importProvidersFrom(modules),
    provideAnimations(),
    provideAnimations(),
  ],
};
