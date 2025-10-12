import {
  NgModel,
  ValidatorFn,
} from '@angular/forms';
import { AbstractConstructor } from '../../../../../models/mixins-helpers';
import { effect, Signal } from '@angular/core';

export function WithValidator<TBase extends AbstractConstructor>(Base: TBase) {
  abstract class AbstractValidator extends Base {
    abstract model: NgModel;
    abstract validators: Signal<ValidatorFn[]>;

    validatorEffet = effect(() => {
      const validators = this.validators();

      if (this.model) {
        const control = this.model.control;
        control.setValidators(validators);
        control.updateValueAndValidity();
        control.markAsTouched();
      }
    });
  }

  return AbstractValidator;
}
