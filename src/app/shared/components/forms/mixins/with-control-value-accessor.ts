import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractConstructor } from '../../../../../models/mixins-helpers';
import { forwardRef, ModelSignal, Provider, Signal, signal, Type } from '@angular/core';

export function WithControlValueAccessor<T, TBase extends AbstractConstructor>(Base: TBase) {
  abstract class AbstractControlValueAccessor extends Base implements ControlValueAccessor {
    abstract value: ModelSignal<T>;
    abstract name: string | Signal<string>;

    disabled = signal(false);
    _onChange = () => { };// eslint-disable-line
    _onTouched = () => { };// eslint-disable-line

    writeValue(value: T): void {
      this.value.set(value);
    }

    registerOnChange(fn: () => void): void {
      this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
      this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
      this.disabled.set(isDisabled);
    }
  }

  return AbstractControlValueAccessor;
}

export const provideControlValueAccessor = <T>(cls: Type<T>): Provider => {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => cls),
    multi: true,
  };
};
