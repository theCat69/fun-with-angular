import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoRInString } from '../../directives/no-r-in-string';
import { ValidationErrorParserPipe } from '../../pipes/validation-error-parser-pipe';
import { EmailValidator } from '../../directives/email-validator';
import { AppInput } from '../../shared/components/forms/app-input/app-input';
import { MatButtonModule } from '@angular/material/button';
import { Adress } from '../../shared/components/forms/adress/adress';
import { AppSelect } from "../../shared/components/forms/app-select/app-select";

@Component({
  selector: 'app-templates',
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    AppInput,
    Adress,
    NoRInString,
    EmailValidator,
    ValidationErrorParserPipe,
    AppSelect
  ],
  templateUrl: './templates.html',
  styleUrl: './templates.scss',
})
export class Templates {
  modelInput = model('');
  modelInputChiled = model('');
  modelInputChiled2 = model('');
  modelInputChiled3 = model('');

  options = signal(['hello', 'goodbye', 'whatever']);

  adress = model({
    street: '',
    city: '',
  });

  finalObject = computed(() => {
    return {
      firstInput: this.modelInput(),
      secondInput: this.modelInputChiled(),
      thirdInput: this.modelInputChiled2(),
      fourthInput: this.modelInputChiled3(),
      adress: this.adress(),
    };
  });

  send() {
    console.log(this.finalObject());
    console.log(this.finalObject().adress);
  }
}
