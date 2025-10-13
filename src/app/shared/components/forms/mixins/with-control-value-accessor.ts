import {
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgForm,
  NgModelGroup,
} from '@angular/forms';
import { AbstractComponentBase, AbstractConstructor } from '../../../../../models/mixins-helpers';
import {
  forwardRef,
  ModelSignal,
  Optional,
  Provider,
  Signal,
  signal,
  SkipSelf,
  Type,
} from '@angular/core';

export function WithControlValueAccessor<
  T,
  TBase extends AbstractConstructor = typeof AbstractComponentBase,
>(Base: TBase = AbstractComponentBase as TBase) {
  abstract class AbstractControlValueAccessor extends Base implements ControlValueAccessor {
    abstract value: ModelSignal<T | undefined>;
    abstract name: string | Signal<string>;

    disabled = signal(false);
    _onChange = (value: T | undefined) => {}; // eslint-disable-line
    _onTouched = () => {}; // eslint-disable-line

    writeValue(value: any): void {
      this.value.set(value);
    }

    registerOnChange(fn: (value: T | undefined) => void): void {
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

export const provideControlContainer = (): Provider => {
  return {
    provide: ControlContainer,
    deps: [[Optional, SkipSelf, NgModelGroup], NgForm],
    useFactory: (modelGroup: NgModelGroup, form: NgForm) => modelGroup || form,
  };
};
