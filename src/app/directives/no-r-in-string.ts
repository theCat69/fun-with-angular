import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[appNoRInString]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => NoRInString), multi: true },
  ],
})
export class NoRInString implements AsyncValidator {
  constructor() {}

  validate(control: AbstractControl<string>): Observable<ValidationErrors | null> {
    if (control.value.includes('r')) {
      return of({ rIsPresent: true });
    }
    return of(null);
  }
}
