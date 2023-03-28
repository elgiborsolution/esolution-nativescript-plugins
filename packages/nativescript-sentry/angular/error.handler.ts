import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { Sentry } from '@esolution/nativescript-sentry';
import { SentryService } from './app.module';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor(@Inject(SentryService) private _config) {
    this._setDSN();
  }

  handleError(err): void {
    try {
      Sentry.captureException(err);
    } catch (e) {
      console.log('[NativeScript-Sentry - SentryErrorHandler]', e);
    }

    if (this._config?.discardUncaughtJsExceptions) return;
    throw err;
  }

  /*
   * Private
   */

  private _setDSN() {
    if (this._config?.dsn) {
      Sentry.init(this._config.dsn);
    } else {
      throw '[SentryAngular]: You need to provide your dsn on the forRoot method';
    }
  }
}
