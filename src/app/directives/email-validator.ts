import { booleanAttribute, Directive, forwardRef, input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { AppValidationErrors } from '../../models/app-validation-errors';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true },
  ],
})
export class EmailValidator implements Validators {
  appEmailValidator = input(false, { transform: booleanAttribute });

  validate(control: AbstractControl<string>): AppValidationErrors | null {
    if (!this.appEmailValidator || !control.value) {
      return null;
    }

    if (!isEmail(control.value)) {
      return {
        notAnEmail: {
          messageTranslateKey: 'common.errors.message.notanemail',
        },
      };
    }
    return null;
  }
}

const EMAIL_RGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isEmail = (value: string) => {
  return value.length < 254 && (value === '' || EMAIL_RGX.test(value));
};
