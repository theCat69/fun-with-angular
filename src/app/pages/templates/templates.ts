import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoRInString } from '../../directives/no-r-in-string';
import { ValidationErrorParserPipe } from '../../pipes/validation-error-parser-pipe';
import { EmailValidator } from '../../directives/email-validator';
import { AppInput } from '../../shared/components/forms/app-input/app-input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-templates',
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    AppInput,
    NoRInString,
    EmailValidator,
    ValidationErrorParserPipe,
  ],
  templateUrl: './templates.html',
  styleUrl: './templates.scss',
})
export class Templates {
  modelInput = model('');
  modelInputChiled = model('');
  modelInputChiled2 = model('');
  modelInputChiled3 = model('');
}
