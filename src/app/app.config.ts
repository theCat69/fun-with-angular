import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Config } from '../models/config';
import { CONFIG } from '../main';
import { InstantErrorStateMatcher } from './shared/instant-error-state-matcher';
import { ErrorStateMatcher } from '@angular/material/core';

export const appConfigFactory: (conf: Config) => ApplicationConfig = (conf) => ({
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    provideRouter(routes),
    { provide: CONFIG, useValue: conf },
    { provide: ErrorStateMatcher, useClass: InstantErrorStateMatcher },
  ],
});
