import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoRInString } from '../../directives/no-r-in-string';

@Component({
  selector: 'app-templates',
  imports: [MatFormFieldModule, MatLabel, MatInputModule, FormsModule, NoRInString],
  templateUrl: './templates.html',
  styleUrl: './templates.scss'
})
export class Templates {
 modelInput = model('');
}
