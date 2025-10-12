import {
  Component,
  computed,
  input,
  model,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  FormsModule,
  NgForm,
  NgModel,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorParserPipe } from '../../../../pipes/validation-error-parser-pipe';
import { WithValidator } from '../mixins/with-validator';
import { ComponentBase } from '../../../../../models/mixins-helpers';
import {
  provideControlValueAccessor,
  WithControlValueAccessor,
} from '../mixins/with-control-value-accessor';

@Component({
  selector: 'app-app-input',
  imports: [FormsModule, MatFormFieldModule, MatLabel, MatInputModule, ValidationErrorParserPipe],
  providers: [provideControlValueAccessor(AppInput)],
  viewProviders: [
    {
      provide: ControlContainer,
      deps: [[Optional, NgForm]],
      useFactory: (ngForm: NgForm) => ngForm,
    },
  ],
  templateUrl: './app-input.html',
  styleUrl: './app-input.scss',
})
export class AppInput extends WithValidator(WithControlValueAccessor(ComponentBase)) {
  @ViewChild('appInput')
  model!: NgModel;

  value = model<string>();
  name = input.required<string>();

  defaultValue = input('');
  placeholder = input('');
  label = input('');
  required = input(false);
  email = input(false);
  width = input('100%');

  validators = computed(() => {
    const validators: ValidatorFn[] = [];
    if (this.required()) {
      validators.push(Validators.required);
    }
    if (this.email()) {
      validators.push(Validators.email);
    }
    return validators;
  });

  // You need to find a way to
  // run those method so the parent
  // form gets events to trigger validation
  // on the field
  onInput() {
    this._onChange(this.value());
    this._onTouched();
  }
}
