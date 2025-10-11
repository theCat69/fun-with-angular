import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AppValidationErrors } from '../../models/app-validation-errors';

@Directive({
  selector: '[appNoRInString]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => NoRInString), multi: true },
  ],
})
export class NoRInString implements AsyncValidator {
  validate(control: AbstractControl<string>): Observable<AppValidationErrors | null> {
    if (control.value.includes('r')) {
      return of({
        rIsPresent: {
          messageTranslateKey: 'common.errors.message.norinstring',
        },
      });
    }
    return of(null);
  }
}
