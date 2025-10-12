import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { AbstractConstructor } from '../../../../../models/mixins-helpers';
import { forwardRef, ModelSignal, Provider, signal, Type } from '@angular/core';

export function WithValidator<TBase extends AbstractConstructor>(Base: TBase) {
  abstract class AbstractValidator extends Base implements Validator {
    abstract value: ModelSignal<any>;
    abstract getValidators: () => ValidatorFn[];
    errors = signal<ValidationErrors | null>(null);

    validate(c: FormControl): ValidationErrors | null {
      // c.setValidators(this.getValidators());
      // console.log(c.value);
      // c.updateValueAndValidity();
      // console.log(c.value);
      // this.errors.set(c.errors);
      // return c.errors;
      // console.log("validate");
      // for (let validator of this.getValidators()) {
      //
      //   const result = validator(c);
      //   if (result) {
      //     this.errors.set(result);
      //     return result;
      //   }
      // }
      this.errors.set(null);
      return null;
    }
  }

  return AbstractValidator;
}

export const provideValidator = <T>(cls: Type<T>): Provider => {
  return {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => cls),
    multi: true,
  };
};
