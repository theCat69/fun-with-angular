import { booleanAttribute, Component, input, model, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidationErrorParserPipe } from '../../../../pipes/validation-error-parser-pipe';
import {
  provideControlContainer,
  provideControlValueAccessor,
  WithControlValueAccessor,
} from '../mixins/with-control-value-accessor';

@Component({
  selector: 'app-app-input',
  imports: [FormsModule, MatFormFieldModule, MatLabel, MatInputModule, ValidationErrorParserPipe],
  providers: [provideControlValueAccessor(AppInput)],
  viewProviders: [provideControlContainer()],
  templateUrl: './app-input.html',
  styleUrl: './app-input.scss',
})
export class AppInput extends WithControlValueAccessor<string>() {
  @ViewChild('appInput')
  model!: NgModel;

  value = model<string>();
  name = input.required<string>();

  defaultValue = input('');
  placeholder = input('');
  label = input('');
  required = input(false, { transform: booleanAttribute });
  width = input('100%');

  // You need to find a way to
  // run those method so the parent
  // form gets events to trigger validation
  // on the field
  onInput() {
    this._onChange(this.value());
    this._onTouched();
  }
}
