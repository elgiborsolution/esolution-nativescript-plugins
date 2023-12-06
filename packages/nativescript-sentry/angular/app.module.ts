import { ErrorHandler, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { SentryErrorHandler } from './error.handler';

export interface SentryConfig {
  dsn: string;
  discardUncaughtJsExceptions?: boolean;
}

export const SentryService = new InjectionToken<SentryConfig>('SentryConfig');

@NgModule()
export class SentryModule {
  static forRoot(config: SentryConfig): ModuleWithProviders<SentryModule> {
    return {
      ngModule: SentryModule,
      providers: [
        { provide: SentryService, useValue: config },
        {
          provide: ErrorHandler,
          useFactory: provideSentryServiceOptions,
          deps: [SentryService],
        },
      ],
    };
  }
}

export function provideSentryServiceOptions(config: SentryConfig) {
  return new SentryErrorHandler(config);
}
