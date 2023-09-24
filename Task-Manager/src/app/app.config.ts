import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {provide: OverlayContainer, useClass: FullscreenOverlayContainer} ]
};
