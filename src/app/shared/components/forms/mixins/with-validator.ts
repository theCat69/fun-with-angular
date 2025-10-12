import { NG_VALIDATORS, NgModel, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { AbstractConstructor } from '../../../../../models/mixins-helpers';
import { forwardRef, Provider, signal, Type } from '@angular/core';

export function WithValidator<TBase extends AbstractConstructor>(Base: TBase) {
  abstract class AbstractValidator extends Base implements Validator {
    abstract model: NgModel;
    abstract getValidators: () => ValidatorFn[];

    errors = signal<ValidationErrors | null>(null);

    validate(): ValidationErrors | null {
      // console.log("validate");
      // for (let validator of this.getValidators()) {
      //   console.log(validator);
      //   const result = validator(this.model.control);
      //   console.log(result);
      //   if (result) {
      //     this.errors.set(result);
      //     return result;
      //   }
      // }
      // return null;
      //
      if (!this.model.invalid) {
        return null;
      }
      return this.model.errors;
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
